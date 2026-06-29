import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Award, CheckCircle, AlertCircle } from 'lucide-react';
import type { Phase } from '../types';
import { TopicItem } from './TopicItem';

interface PhaseCardProps {
  phase: Phase;
  completedTopics: string[];
  onToggleTopic: (id: string, xp: number) => void;
  isUnlocked: boolean;
}

const PHASE_COLORS = ['bg-[#0a65db]', 'bg-[#ee4623]', 'bg-[#ffd23f]', 'bg-[#000609]'];

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  completedTopics,
  onToggleTopic
}) => {
  const [isOpen, setIsOpen] = useState(true);

  // Calculate phase progress
  const allSubtopicIds = phase.sections.flatMap(sec => sec.subtopics.map(st => st.id));
  const totalTopics = allSubtopicIds.length;
  const completedCount = allSubtopicIds.filter(id => completedTopics.includes(id)).length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const isPhaseComplete = progressPercent === 100;

  const accentBg = PHASE_COLORS[phase.number % PHASE_COLORS.length];
  const accentTextColor = accentBg === 'bg-[#ffd23f]' ? 'text-[#000609]' : 'text-white';

  return (
    <div className="border-2 border-[#000609] bg-[#fffefb] overflow-hidden transition-all shadow-[4px_4px_0px_#000609]">
      
      {/* Phase Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none bg-[#fff9f0] hover:bg-[#ffd23f]/20 transition-colors border-b-2 border-[#000609]"
      >
        <div className="flex items-start space-x-4">
          {/* Sharp Bauhaus Geometric Badge */}
          <div className={`w-12 h-12 border-2 border-[#000609] flex items-center justify-center font-display font-black text-lg shrink-0 ${
            isPhaseComplete
              ? 'bg-[#000609] text-[#ffd23f]'
              : `${accentBg} ${accentTextColor}`
          }`}>
            {isPhaseComplete ? <CheckCircle className="w-7 h-7 stroke-[2.5]" /> : `P${phase.number}`}
          </div>

          <div>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#0a65db]">Phase {phase.number}</span>
              <span className="text-[#000609]/40">•</span>
              <div className="flex items-center space-x-1 text-xs text-[#000609]/70 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>{phase.estimatedTime}</span>
              </div>
              <span className="text-[#000609]/40">•</span>
              <div className="flex items-center space-x-1 text-xs text-[#ee4623] font-black">
                <Award className="w-3.5 h-3.5" />
                <span>+{phase.xpReward} XP Quest Reward</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#000609] font-display mt-1">
              {phase.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#000609]/80 font-medium mt-1 max-w-2xl leading-relaxed">
              {phase.tagline}
            </p>
          </div>
        </div>

        {/* Right side Progress & Accordion pill button */}
        <div className="flex items-center justify-between sm:justify-end space-x-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#000609]/20">
          <div className="text-right">
            <div className="text-xs font-black text-[#000609] uppercase">
              {completedCount} / {totalTopics} Completed
            </div>
            <div className="w-28 bg-[#fff9f0] h-3 rounded-full overflow-hidden mt-1.5 border-2 border-[#000609]">
              <div 
                className={`h-full transition-all duration-500 ${
                  isPhaseComplete ? 'bg-[#000609]' : 'bg-[#0a65db]'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button className="px-3 py-1.5 rounded-full bg-[#fff9f0] hover:bg-[#000609] hover:text-white border-2 border-[#000609] text-[#000609] font-bold transition-colors">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-5 sm:p-6 pt-4 space-y-6 bg-[#fffefb]">
          
          {/* Fast-Track Optimization Note */}
          {phase.skipNote && phase.skipNote.length > 0 && (
            <div className="p-4 bg-[#ffd23f]/30 border-2 border-[#000609] text-[#000609] text-xs flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-[#ee4623] shrink-0 mt-0.5" />
              <div>
                <strong className="font-black uppercase tracking-wider block mb-0.5 text-[#000609]">Fast-Track Optimization:</strong>
                <ul className="list-disc list-inside space-y-0.5 font-medium">
                  {phase.skipNote.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Render Sections & Subtopics */}
          {phase.sections.map(section => (
            <div key={section.id} className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0a65db] flex items-center space-x-2 font-display">
                <span className="w-2 h-2 bg-[#ee4623] inline-block" />
                <span>{section.title}</span>
              </h4>

              <div className="border-2 border-[#000609] bg-[#fffefb]">
                {section.subtopics.map(subtopic => (
                  <TopicItem
                    key={subtopic.id}
                    subtopic={subtopic}
                    isCompleted={completedTopics.includes(subtopic.id)}
                    onToggle={onToggleTopic}
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};
