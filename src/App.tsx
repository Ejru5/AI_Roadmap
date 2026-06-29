import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { PhaseCard } from './components/PhaseCard';
import { AchievementModal } from './components/AchievementModal';
import { shortcutRoadmap } from './data/shortcutRoadmap';
import { advancedRoadmap } from './data/advancedRoadmap';
import { achievementsList } from './data/achievements';
import type { UserProgress } from './types';
import { Search, Trophy, CheckCircle, Flame, Sparkles } from 'lucide-react';

const STORAGE_KEY = 'ai_roadmap_gamified_progress_v1';

const initialProgress: UserProgress = {
  completedTopics: [],
  completedPhases: [],
  totalXp: 0,
  streakDays: 1,
  lastLoginDate: new Date().toISOString().split('T')[0],
  unlockedAchievements: []
};

export function App() {
  const [activeTrack, setActiveTrack] = useState<'basic' | 'advanced'>('basic');
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().split('T')[0];
        if (parsed.lastLoginDate !== today) {
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          if (parsed.lastLoginDate === yesterday) {
            parsed.streakDays += 1;
          } else {
            parsed.streakDays = 1;
          }
          parsed.lastLoginDate = today;
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to load local storage progress', e);
    }
    return initialProgress;
  });

  const [isAchievementModalOpen, setIsAchievementModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'uncompleted'>('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [progress]);

  const currentTrack = activeTrack === 'basic' ? shortcutRoadmap : advancedRoadmap;

  const allSubtopicsInTrack = currentTrack.phases.flatMap(p => p.sections.flatMap(s => s.subtopics));
  const totalTrackTopicsCount = allSubtopicsInTrack.length;
  const completedTrackTopicsCount = allSubtopicsInTrack.filter(st => progress.completedTopics.includes(st.id)).length;

  const handleToggleTopic = (topicId: string, topicXp: number) => {
    const isAlreadyCompleted = progress.completedTopics.includes(topicId);
    let updatedCompletedTopics: string[];
    let newXp: number;

    if (isAlreadyCompleted) {
      updatedCompletedTopics = progress.completedTopics.filter(id => id !== topicId);
      newXp = Math.max(0, progress.totalXp - topicXp);
    } else {
      updatedCompletedTopics = [...progress.completedTopics, topicId];
      newXp = progress.totalXp + topicXp;

      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.8 }
      });
    }

    const newlyCompletedPhases: string[] = [];
    let phaseXpBonus = 0;

    [...shortcutRoadmap.phases, ...advancedRoadmap.phases].forEach(phase => {
      const phaseSubtopics = phase.sections.flatMap(s => s.subtopics.map(st => st.id));
      const allDone = phaseSubtopics.every(id => updatedCompletedTopics.includes(id));
      
      if (allDone && !progress.completedPhases.includes(phase.id)) {
        newlyCompletedPhases.push(phase.id);
        phaseXpBonus += phase.xpReward;
      }
    });

    const finalCompletedPhases = progress.completedPhases
      .filter(pId => {
        const pObj = [...shortcutRoadmap.phases, ...advancedRoadmap.phases].find(p => p.id === pId);
        if (!pObj) return false;
        const pSubtopics = pObj.sections.flatMap(s => s.subtopics.map(st => st.id));
        return pSubtopics.every(id => updatedCompletedTopics.includes(id));
      })
      .concat(newlyCompletedPhases);

    const finalXp = newXp + phaseXpBonus;

    if (newlyCompletedPhases.length > 0) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    const newlyUnlockedBadges: string[] = [];
    achievementsList.forEach(ach => {
      if (progress.unlockedAchievements.includes(ach.id)) return;

      let unlock = false;
      if (ach.id === 'badge-first-step' && updatedCompletedTopics.length >= 1) unlock = true;
      if (ach.requiredXp && finalXp >= ach.requiredXp) unlock = true;
      if (ach.requiredPhaseId && finalCompletedPhases.includes(ach.requiredPhaseId)) unlock = true;
      if (ach.requiredStreak && progress.streakDays >= ach.requiredStreak) unlock = true;

      if (unlock) {
        newlyUnlockedBadges.push(ach.id);
      }
    });

    const finalUnlockedAchievements = [...progress.unlockedAchievements, ...newlyUnlockedBadges];

    setProgress({
      ...progress,
      completedTopics: updatedCompletedTopics,
      completedPhases: finalCompletedPhases,
      totalXp: finalXp,
      unlockedAchievements: finalUnlockedAchievements
    });
  };

  const filteredPhases = currentTrack.phases.filter(phase => {
    const matchesSearch = searchQuery === '' || 
      phase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phase.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phase.sections.some(s => s.subtopics.some(st => st.title.toLowerCase().includes(searchQuery.toLowerCase())));

    if (!matchesSearch) return false;

    if (filterMode === 'uncompleted') {
      const phaseSubtopics = phase.sections.flatMap(s => s.subtopics.map(st => st.id));
      const isComplete = phaseSubtopics.every(id => progress.completedTopics.includes(id));
      return !isComplete;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#fff9f0] text-[#000609] flex flex-col font-body selection:bg-[#ffd23f] selection:text-[#000609]">
      
      {/* Navbar & Header */}
      <Header
        activeTrack={activeTrack}
        setActiveTrack={setActiveTrack}
        progress={progress}
        onOpenAchievements={() => setIsAchievementModalOpen(true)}
        totalTrackTopicsCount={totalTrackTopicsCount}
        completedTrackTopicsCount={completedTrackTopicsCount}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-10">
        
        {/* Hero Banner (Artwork hidden on mobile for clean vertical space) */}
        <div className="border-2 border-[#000609] bg-[#fffefb] p-6 sm:p-10 shadow-[6px_6px_0px_#000609] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ffd23f] border border-[#000609] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#000609]" />
              <span>ACTIVE TRACK: {currentTrack.title}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.05] text-[#000609]">
              AI LEARNING <br />
              <span className="text-[#0a65db]">{activeTrack === 'basic' ? 'FAST TRACK' : 'MASTER CURRICULUM'}</span>
            </h2>

            <p className="text-[#000609]/80 text-sm sm:text-base leading-[1.78] max-w-xl font-medium">
              {currentTrack.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold uppercase tracking-wider text-[#000609]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#ee4623] inline-block border border-[#000609]" />
                <span>EST: <strong>{currentTrack.estimatedTime}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#ffd23f] inline-block border border-[#000609]" />
                <span>MODULES: <strong>{currentTrack.phases.length} QUEST PHASES</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column Geometric Artwork Box (HIDDEN on mobile, visible on desktop md:flex) */}
          <div className="hidden md:flex md:col-span-4 justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 border-2 border-[#000609] bg-[#fff9f0] p-3 grid grid-cols-2 grid-rows-2 gap-2 relative shadow-[4px_4px_0px_#000609]">
              <div className="bg-[#0a65db] border border-[#000609] flex items-center justify-center">
                <div className="w-8 h-8 bg-[#fff9f0] rounded-full border border-[#000609]" />
              </div>
              <div className="bg-[#ee4623] border border-[#000609] flex items-center justify-center">
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[#ffd23f]" />
              </div>
              <div className="bg-[#ffd23f] border border-[#000609] flex items-center justify-center font-display font-black text-2xl text-[#000609]">
                AI
              </div>
              <div className="bg-[#000609] border border-[#000609] flex items-center justify-center text-white font-display font-bold text-xs p-1 text-center">
                QUEST LAB
              </div>
            </div>
          </div>

        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#fffefb] p-4 border-2 border-[#000609] shadow-[3px_3px_0px_#000609]">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#000609]/60" />
            <input
              type="text"
              placeholder="Search topics, math, pytorch, transformers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#fff9f0] border-2 border-[#000609] rounded-none pl-10 pr-4 py-2 text-xs font-bold text-[#000609] placeholder-[#000609]/50 focus:outline-none focus:bg-[#ffd23f]/20 transition-colors"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border-2 border-[#000609] transition-colors ${
                filterMode === 'all'
                  ? 'bg-[#000609] text-white'
                  : 'bg-[#fff9f0] text-[#000609] hover:bg-[#ffd23f]/40'
              }`}
            >
              All Phases
            </button>
            <button
              onClick={() => setFilterMode('uncompleted')}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border-2 border-[#000609] transition-colors ${
                filterMode === 'uncompleted'
                  ? 'bg-[#0a65db] text-white'
                  : 'bg-[#fff9f0] text-[#000609] hover:bg-[#0a65db]/20'
              }`}
            >
              Incomplete Only
            </button>
          </div>
        </div>

        {/* Phases List */}
        <div className="space-y-8">
          {filteredPhases.length > 0 ? (
            filteredPhases.map((phase, idx) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                completedTopics={progress.completedTopics}
                onToggleTopic={handleToggleTopic}
                isUnlocked={idx === 0 || progress.completedPhases.includes(filteredPhases[idx - 1]?.id)}
              />
            ))
          ) : (
            <div className="text-center py-16 bg-[#fffefb] border-2 border-[#000609] p-6">
              <p className="text-[#000609]/70 text-sm font-bold uppercase tracking-wider">No roadmap phases found matching your criteria.</p>
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#000609] bg-[#fffefb] py-8 text-center text-xs font-bold text-[#000609]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="uppercase tracking-wider">AI Learning Roadmap</p>
            <span className="hidden sm:inline text-[#000609]/40">•</span>
            <p className="text-[#000609]">
              <a href="https://www.linkedin.com/in/dhruvsol" target="_blank" rel="noopener noreferrer" className="text-[#0a65db] hover:underline font-black">Built by Dhruv Solanki</a>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5"><Flame className="w-4 h-4 text-[#ee4623] fill-[#ee4623]" /><span className="uppercase">Streak Active</span></span>
            <span className="flex items-center space-x-1.5"><CheckCircle className="w-4 h-4 text-[#0a65db]" /><span className="uppercase">Saved Locally</span></span>
            <span className="flex items-center space-x-1.5"><Trophy className="w-4 h-4 text-[#ffd23f] fill-[#ffd23f]" /><span className="uppercase">Gamified Quests</span></span>
          </div>
        </div>
      </footer>

      {/* Trophy Showcase Modal */}
      <AchievementModal
        isOpen={isAchievementModalOpen}
        onClose={() => setIsAchievementModalOpen(false)}
        progress={progress}
      />

    </div>
  );
}

export default App;
