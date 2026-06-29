import type { Achievement } from '../types';

export const achievementsList: Achievement[] = [
  {
    id: 'badge-first-step',
    title: 'First Step',
    description: 'Complete your first learning topic',
    icon: '⚡',
    category: 'special'
  },
  {
    id: 'badge-streak-3',
    title: 'Consistent Learner',
    description: 'Maintain a 3-day learning streak',
    icon: '🔥',
    category: 'streak',
    requiredStreak: 3
  },
  {
    id: 'badge-streak-7',
    title: 'Unstoppable Momentum',
    description: 'Maintain a 7-day learning streak',
    icon: '🚀',
    category: 'streak',
    requiredStreak: 7
  },
  {
    id: 'badge-xp-1000',
    title: 'Knowledge Apprentice',
    description: 'Accumulate 1,000 Total XP',
    icon: '🌟',
    category: 'xp',
    requiredXp: 1000
  },
  {
    id: 'badge-xp-5000',
    title: 'AI Scholar',
    description: 'Accumulate 5,000 Total XP',
    icon: '💎',
    category: 'xp',
    requiredXp: 5000
  },
  {
    id: 'badge-math-code',
    title: 'Math & Code initiate',
    description: 'Complete Phase 1 of the Basic Roadmap',
    icon: '📐',
    category: 'phase',
    requiredPhaseId: 'b-phase-1'
  },
  {
    id: 'badge-transformer-master',
    title: 'Transformer Titan',
    description: 'Master the Transformer Architecture (Basic Phase 4)',
    icon: '🤖',
    category: 'phase',
    requiredPhaseId: 'b-phase-4'
  },
  {
    id: 'badge-alignment-wizard',
    title: 'Alignment Wizard',
    description: 'Understand RLHF, LoRA & Model Training (Basic Phase 8)',
    icon: '🧙‍♂️',
    category: 'phase',
    requiredPhaseId: 'b-phase-8'
  },
  {
    id: 'badge-ai-builder',
    title: 'Master AI Architect',
    description: 'Complete all phases of the Basic AI Shortcut Track!',
    icon: '🏆',
    category: 'phase',
    requiredPhaseId: 'b-phase-9'
  },
  {
    id: 'badge-math-master',
    title: 'Math Whisperer',
    description: 'Complete Advanced Mathematics Foundations',
    icon: '🧠',
    category: 'phase',
    requiredPhaseId: 'a-phase-1'
  },
  {
    id: 'badge-dl-architect',
    title: 'Deep Learning Pioneer',
    description: 'Master Deep Learning & Neural Networks',
    icon: '🔮',
    category: 'phase',
    requiredPhaseId: 'a-phase-5'
  },
  {
    id: 'badge-genai-titan',
    title: 'GenAI & LLM Grandmaster',
    description: 'Complete Advanced Generative AI & LLMs',
    icon: '👑',
    category: 'phase',
    requiredPhaseId: 'a-phase-9'
  }
];
