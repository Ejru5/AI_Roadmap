import React from 'react';
import { Check, Video, FileText, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import type { SubTopic, Resource } from '../types';

interface TopicItemProps {
  subtopic: SubTopic;
  isCompleted: boolean;
  onToggle: (id: string, xp: number) => void;
}

const getResourceIcon = (type: Resource['type']) => {
  switch (type) {
    case 'video': return <Video className="w-3.5 h-3.5 text-[#ee4623]" />;
    case 'paper': return <FileText className="w-3.5 h-3.5 text-[#0a65db]" />;
    case 'book': return <BookOpen className="w-3.5 h-3.5 text-[#000609]" />;
    case 'interactive': return <Sparkles className="w-3.5 h-3.5 text-[#ee4623]" />;
    case 'course': return <GraduationCap className="w-3.5 h-3.5 text-[#0a65db]" />;
    default: return null;
  }
};

export const TopicItem: React.FC<TopicItemProps> = ({ subtopic, isCompleted, onToggle }) => {
  return (
    <div 
      className={`p-4 transition-all border-b border-[#000609] last:border-b-0 ${
        isCompleted 
          ? 'bg-[#ffd23f]/15 text-[#000609]' 
          : 'bg-[#fffefb] hover:bg-[#fff9f0] text-[#000609]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        
        {/* Checkbox & Content */}
        <div className="flex items-start space-x-3.5 flex-1">
          {/* Sharp 0px Bauhaus Checkbox */}
          <button
            onClick={() => onToggle(subtopic.id, subtopic.xp)}
            className={`mt-0.5 w-5 h-5 rounded-none border-2 border-[#000609] flex items-center justify-center shrink-0 transition-colors ${
              isCompleted
                ? 'bg-[#000609] text-[#ffd23f]'
                : 'bg-[#fff9f0] hover:bg-[#ffd23f]/50'
            }`}
          >
            {isCompleted && <Check className="w-4 h-4 stroke-[3]" />}
          </button>

          <div>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <h4 className={`font-bold text-sm sm:text-base font-body ${isCompleted ? 'line-through opacity-70' : 'text-[#000609]'}`}>
                {subtopic.title}
              </h4>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-[#ffd23f] text-[#000609] border border-[#000609]">
                +{subtopic.xp} XP
              </span>
            </div>

            {/* Bullet Details */}
            {subtopic.details && subtopic.details.length > 0 && (
              <ul className="mt-2 space-y-1 text-xs text-[#000609]/80 list-disc list-inside font-medium leading-relaxed">
                {subtopic.details.map((detail, idx) => (
                  <li key={idx}>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Ghost Links with Triangle Marker */}
            {subtopic.resources && subtopic.resources.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3 pt-2 border-t border-[#000609]/10">
                {subtopic.resources.map((res, rIdx) => (
                  <a
                    key={rIdx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#000609] hover:text-[#0a65db] transition-colors group"
                  >
                    {getResourceIcon(res.type)}
                    <span>{res.title}</span>
                    <span className="text-[#0a65db] group-hover:translate-x-0.5 transition-transform">▸</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
