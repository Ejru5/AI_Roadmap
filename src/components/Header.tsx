import React from 'react';
import { Zap, Bot, Trophy, Flame, Award, CheckCircle2 } from 'lucide-react';
import type { UserProgress } from '../types';
import { getLevelInfo } from '../utils/gamification';

interface HeaderProps {
  activeTrack: 'basic' | 'advanced';
  setActiveTrack: (track: 'basic' | 'advanced') => void;
  progress: UserProgress;
  onOpenAchievements: () => void;
  totalTrackTopicsCount: number;
  completedTrackTopicsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTrack,
  setActiveTrack,
  progress,
  onOpenAchievements,
  totalTrackTopicsCount,
  completedTrackTopicsCount
}) => {
  const levelInfo = getLevelInfo(progress.totalXp);
  const trackProgressPercent = totalTrackTopicsCount > 0 
    ? Math.round((completedTrackTopicsCount / totalTrackTopicsCount) * 100) 
    : 0;

  return (
    <header className="sticky top-0 z-40 bg-[#fff9f0]/95 backdrop-blur-sm border-b-2 border-[#000609]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Brand Mark */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-[#000609] bg-[#0a65db] relative flex items-center justify-center shrink-0">
              <div className="w-4 h-4 bg-[#ffd23f] rounded-full border border-[#000609]" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#ee4623]" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-[#000609] font-display flex items-center gap-2">
                AI ROADMAP <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#ffd23f] text-[#000609] border border-[#000609] font-bold tracking-wider uppercase">QUEST LAB</span>
              </h1>
              <p className="text-xs text-[#000609]/70 font-medium">Interactive Learning Experience</p>
            </div>
          </div>

          {/* Path Switcher Outlined Pill Tabs (Fixed: No double emojis in text) */}
          <div className="flex items-center gap-2 p-1 bg-[#fff9f0] border-2 border-[#000609] rounded-full">
            <button
              onClick={() => setActiveTrack('basic')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                activeTrack === 'basic'
                  ? 'bg-[#ee4623] text-white border border-[#000609] shadow-[2px_2px_0px_#000609]'
                  : 'text-[#000609] hover:bg-[#ffd23f]/30'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${activeTrack === 'basic' ? 'text-white fill-white' : 'text-[#ee4623]'}`} />
              <span>BASIC TRACK</span>
            </button>

            <button
              onClick={() => setActiveTrack('advanced')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                activeTrack === 'advanced'
                  ? 'bg-[#0a65db] text-white border border-[#000609] shadow-[2px_2px_0px_#000609]'
                  : 'text-[#000609] hover:bg-[#0a65db]/10'
              }`}
            >
              <Bot className={`w-3.5 h-3.5 ${activeTrack === 'advanced' ? 'text-white' : 'text-[#0a65db]'}`} />
              <span>ADVANCED TRACK</span>
            </button>
          </div>

          {/* Gamification Stats */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Streak Pill */}
            <div className="flex items-center space-x-1.5 bg-[#ffd23f] px-3.5 py-1.5 rounded-full border-2 border-[#000609] text-[#000609] text-xs font-black" title="Study Streak">
              <Flame className="w-4 h-4 fill-[#ee4623] text-[#ee4623]" />
              <span>{progress.streakDays}D STREAK</span>
            </div>

            {/* Level & XP Box */}
            <div className="flex items-center space-x-3 bg-[#fffefb] px-3.5 py-1.5 rounded-full border-2 border-[#000609] text-xs">
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-[#0a65db]" />
                <span className="font-black text-[#000609] uppercase">LVL {levelInfo.level}</span>
              </div>
              <div className="h-4 w-[1.5px] bg-[#000609]" />
              <div className="flex flex-col justify-center">
                <div className="flex justify-between text-[10px] text-[#000609] font-bold gap-2">
                  <span className="text-[#0a65db]">{progress.totalXp} XP</span>
                  <span>{levelInfo.currentLevelXp}/{levelInfo.nextLevelXp}</span>
                </div>
                <div className="w-16 h-2 bg-[#fff9f0] rounded-full overflow-hidden border border-[#000609] mt-0.5">
                  <div 
                    className="h-full bg-[#0a65db] transition-all duration-300"
                    style={{ width: `${levelInfo.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Trophy Button */}
            <button
              onClick={onOpenAchievements}
              className="relative p-2 rounded-full bg-[#fffefb] hover:bg-[#ffd23f] border-2 border-[#000609] text-[#000609] transition-colors"
              title="View Trophy Cabinet"
            >
              <Trophy className="w-5 h-5" />
              {progress.unlockedAchievements.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ee4623] text-white font-black text-[10px] w-4.5 h-4.5 rounded-full border border-[#000609] flex items-center justify-center">
                  {progress.unlockedAchievements.length}
                </span>
              )}
            </button>

          </div>

        </div>

        {/* Track Progress Bar */}
        <div className="mt-3 pt-2 border-t border-[#000609]/20 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center space-x-2 text-[#000609]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0a65db]" />
            <span>Progress: <strong>{completedTrackTopicsCount} of {totalTrackTopicsCount}</strong> topics checked</span>
          </div>
          <div className="flex items-center space-x-3 w-1/3 max-w-xs">
            <div className="w-full bg-[#fff9f0] h-2.5 rounded-full overflow-hidden border border-[#000609]">
              <div 
                className={`h-full transition-all duration-500 ${
                  activeTrack === 'basic' ? 'bg-[#ee4623]' : 'bg-[#0a65db]'
                }`}
                style={{ width: `${trackProgressPercent}%` }}
              />
            </div>
            <span className="font-black text-[#000609] min-w-[32px] text-right">{trackProgressPercent}%</span>
          </div>
        </div>

      </div>
    </header>
  );
};
