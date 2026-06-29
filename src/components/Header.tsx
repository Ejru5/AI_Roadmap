import React, { useState } from 'react';
import { Zap, Cpu, Trophy, Flame, Award, CheckCircle2, Menu, X } from 'lucide-react';
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
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const levelInfo = getLevelInfo(progress.totalXp);
  const trackProgressPercent = totalTrackTopicsCount > 0 
    ? Math.round((completedTrackTopicsCount / totalTrackTopicsCount) * 100) 
    : 0;

  return (
    <>
      {/* Sticky Main Header */}
      <header className="sticky top-0 z-40 bg-[#fff9f0]/95 backdrop-blur-sm border-b-2 border-[#000609]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3">
          
          {/* Top Bar Flex Row */}
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Brand Mark (Removed Subtitle Text) */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#000609] bg-[#0a65db] relative flex items-center justify-center shrink-0">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#ffd23f] rounded-full border border-[#000609]" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ee4623]" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-[#000609] font-display flex items-center gap-2">
                  AI ROADMAP <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-[#ffd23f] text-[#000609] border border-[#000609] font-bold uppercase tracking-wider">QUEST LAB</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation & Stats (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-4">
              
              {/* Path Switcher Tabs */}
              <div className="flex items-center gap-2 p-1 bg-[#fff9f0] border-2 border-[#000609] rounded-full">
                <button
                  onClick={() => setActiveTrack('basic')}
                  className={`flex items-center space-x-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
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
                  className={`flex items-center space-x-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                    activeTrack === 'advanced'
                      ? 'bg-[#0a65db] text-white border border-[#000609] shadow-[2px_2px_0px_#000609]'
                      : 'text-[#000609] hover:bg-[#0a65db]/10'
                  }`}
                >
                  <Cpu className={`w-3.5 h-3.5 ${activeTrack === 'advanced' ? 'text-white' : 'text-[#0a65db]'}`} />
                  <span>ADVANCED TRACK</span>
                </button>
              </div>

              {/* Stats & Trophy */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5 bg-[#ffd23f] px-3.5 py-1.5 rounded-full border-2 border-[#000609] text-[#000609] text-xs font-black">
                  <Flame className="w-3.5 h-3.5 fill-[#ee4623] text-[#ee4623]" />
                  <span>{progress.streakDays}D</span>
                </div>

                <div className="flex items-center space-x-3 bg-[#fffefb] px-3 py-1.5 rounded-full border-2 border-[#000609] text-xs">
                  <div className="flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5 text-[#0a65db]" />
                    <span className="font-black text-[#000609] uppercase">LVL {levelInfo.level}</span>
                  </div>
                  <div className="h-3.5 w-[1.5px] bg-[#000609]" />
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-between text-[9px] text-[#000609] font-bold gap-2">
                      <span className="text-[#0a65db]">{progress.totalXp} XP</span>
                      <span>{levelInfo.currentLevelXp}/{levelInfo.nextLevelXp}</span>
                    </div>
                    <div className="w-14 h-1.5 bg-[#fff9f0] rounded-full overflow-hidden border border-[#000609]">
                      <div 
                        className="h-full bg-[#0a65db] transition-all duration-300"
                        style={{ width: `${levelInfo.progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenAchievements}
                  className="relative p-1.5 rounded-full bg-[#fffefb] hover:bg-[#ffd23f] border-2 border-[#000609] text-[#000609] transition-colors"
                  title="View Trophy Cabinet"
                >
                  <Trophy className="w-4.5 h-4.5" />
                  {progress.unlockedAchievements.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#ee4623] text-white font-black text-[9px] w-4 h-4 rounded-full border border-[#000609] flex items-center justify-center">
                      {progress.unlockedAchievements.length}
                    </span>
                  )}
                </button>
              </div>

            </div>

            {/* Mobile Actions: Compact Quick Level Pill & Drawer Toggle Button */}
            <div className="flex md:hidden items-center space-x-2">
              <div className="flex items-center space-x-1 bg-[#ffd23f] px-2.5 py-1 rounded-full border-2 border-[#000609] text-xs font-black">
                <Award className="w-3.5 h-3.5 text-[#000609]" />
                <span>LVL {levelInfo.level}</span>
              </div>

              <button
                onClick={() => setIsMobileDrawerOpen(true)}
                className="p-2 rounded-full bg-[#fffefb] border-2 border-[#000609] text-[#000609] hover:bg-[#ffd23f] transition-colors"
                aria-label="Open side menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Desktop Track Progress Bar */}
          <div className="hidden md:flex mt-2.5 pt-2 border-t border-[#000609]/20 items-center justify-between text-xs font-medium">
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

      {/* Mobile Side Panel (Drawer) Overlay & Container */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end bg-[#000609]/60 backdrop-blur-xs animate-fade-in">
          
          <div className="absolute inset-0" onClick={() => setIsMobileDrawerOpen(false)} />

          <div className="relative w-4/5 max-w-xs h-full bg-[#fff9f0] border-l-4 border-[#000609] p-5 flex flex-col justify-between shadow-2xl overflow-y-auto">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-[#000609] pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 border-2 border-[#000609] bg-[#0a65db] relative flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#ffd23f] rounded-full border border-[#000609]" />
                  </div>
                  <span className="font-black font-display text-base uppercase text-[#000609]">Menu & Stats</span>
                </div>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1.5 rounded-full bg-[#fffefb] border-2 border-[#000609] text-[#000609] hover:bg-[#ee4623] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-[#000609]/70 tracking-wider">Select Learning Track</label>
                <div className="flex flex-col gap-2 bg-[#fffefb] p-2 border-2 border-[#000609] rounded-2xl">
                  <button
                    onClick={() => { setActiveTrack('basic'); setIsMobileDrawerOpen(false); }}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      activeTrack === 'basic'
                        ? 'bg-[#ee4623] text-white border-2 border-[#000609] shadow-[2px_2px_0px_#000609]'
                        : 'text-[#000609] hover:bg-[#ffd23f]/30'
                    }`}
                  >
                    <Zap className={`w-4 h-4 ${activeTrack === 'basic' ? 'text-white fill-white' : 'text-[#ee4623]'}`} />
                    <span>BASIC TRACK</span>
                  </button>

                  <button
                    onClick={() => { setActiveTrack('advanced'); setIsMobileDrawerOpen(false); }}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      activeTrack === 'advanced'
                        ? 'bg-[#0a65db] text-white border-2 border-[#000609] shadow-[2px_2px_0px_#000609]'
                        : 'text-[#000609] hover:bg-[#0a65db]/10'
                    }`}
                  >
                    <Cpu className={`w-4 h-4 ${activeTrack === 'advanced' ? 'text-white' : 'text-[#0a65db]'}`} />
                    <span>ADVANCED TRACK</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-[#000609]/70 tracking-wider">Your Stats</label>
                
                <div className="flex items-center justify-between bg-[#ffd23f] p-3 border-2 border-[#000609] shadow-[2px_2px_0px_#000609]">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-5 h-5 fill-[#ee4623] text-[#ee4623]" />
                    <span className="font-black text-xs text-[#000609] uppercase">Study Streak</span>
                  </div>
                  <span className="font-black text-sm text-[#000609]">{progress.streakDays}D</span>
                </div>

                <div className="bg-[#fffefb] p-3 border-2 border-[#000609] space-y-2 shadow-[2px_2px_0px_#000609]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <Award className="w-4 h-4 text-[#0a65db]" />
                      <span className="font-black text-xs text-[#000609] uppercase">Level {levelInfo.level}</span>
                    </div>
                    <span className="text-xs font-bold text-[#0a65db]">{progress.totalXp} XP</span>
                  </div>
                  <div className="w-full bg-[#fff9f0] h-2.5 rounded-full overflow-hidden border border-[#000609]">
                    <div 
                      className="h-full bg-[#0a65db] transition-all duration-300"
                      style={{ width: `${levelInfo.progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="bg-[#fffefb] p-3 border-2 border-[#000609] space-y-2 shadow-[2px_2px_0px_#000609]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#000609]">
                    <span>Track Progress</span>
                    <span>{trackProgressPercent}%</span>
                  </div>
                  <div className="w-full bg-[#fff9f0] h-2.5 rounded-full overflow-hidden border border-[#000609]">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        activeTrack === 'basic' ? 'bg-[#ee4623]' : 'bg-[#0a65db]'
                      }`}
                      style={{ width: `${trackProgressPercent}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-[#000609]/70 font-medium text-right">
                    {completedTrackTopicsCount} / {totalTrackTopicsCount} topics completed
                  </p>
                </div>

              </div>

              <button
                onClick={() => { onOpenAchievements(); setIsMobileDrawerOpen(false); }}
                className="w-full py-3 px-4 bg-[#fffefb] hover:bg-[#ffd23f] border-2 border-[#000609] font-black text-xs uppercase tracking-wider text-[#000609] flex items-center justify-center space-x-2 shadow-[2px_2px_0px_#000609] transition-colors"
              >
                <Trophy className="w-4 h-4 text-[#000609]" />
                <span>View Trophy Cabinet ({progress.unlockedAchievements.length})</span>
              </button>

            </div>

            <div className="pt-4 border-t-2 border-[#000609] text-center text-[10px] font-bold text-[#000609]/60 uppercase">
              AI Roadmap • Quest Edition
            </div>

          </div>
        </div>
      )}
    </>
  );
};
