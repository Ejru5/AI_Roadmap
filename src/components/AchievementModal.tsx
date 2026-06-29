import React from 'react';
import { Trophy, Lock, CheckCircle2 } from 'lucide-react';
import { achievementsList } from '../data/achievements';
import type { UserProgress } from '../types';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ isOpen, onClose, progress }) => {
  if (!isOpen) return null;

  const unlockedCount = progress.unlockedAchievements.length;
  const totalCount = achievementsList.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000609]/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#fff9f0] border-4 border-[#000609] w-full max-w-3xl max-h-[85vh] flex flex-col shadow-[8px_8px_0px_#000609] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b-2 border-[#000609] flex items-center justify-between bg-[#fffefb]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-[#000609] bg-[#ffd23f] flex items-center justify-center text-[#000609]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#000609] font-display uppercase tracking-tight">Trophy & Quest Showcase</h2>
              <p className="text-xs text-[#000609]/70 font-medium">Unlocked {unlockedCount} of {totalCount} milestone badges</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#fff9f0] hover:bg-[#000609] hover:text-white border-2 border-[#000609] text-[#000609] font-black text-xs uppercase transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* Grid List */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#fff9f0]">
          {achievementsList.map(item => {
            const isUnlocked = progress.unlockedAchievements.includes(item.id);

            return (
              <div
                key={item.id}
                className={`p-4 border-2 border-[#000609] flex items-start space-x-4 transition-all ${
                  isUnlocked
                    ? 'bg-[#fffefb] shadow-[3px_3px_0px_#000609]'
                    : 'bg-[#fff9f0] opacity-50 grayscale'
                }`}
              >
                <div className={`w-12 h-12 border-2 border-[#000609] flex items-center justify-center text-2xl shrink-0 ${
                  isUnlocked ? 'bg-[#0a65db] text-white' : 'bg-[#fff9f0]'
                }`}>
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-black text-sm text-[#000609] font-display truncate">{item.title}</h3>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-4 h-4 text-[#0a65db] shrink-0" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-[#000609]/50 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-[#000609]/80 mt-1 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t-2 border-[#000609] bg-[#fffefb] text-center text-xs text-[#000609] font-bold uppercase tracking-wider">
          Complete topics and milestone phases to unlock all quest trophies!
        </div>

      </div>
    </div>
  );
};
