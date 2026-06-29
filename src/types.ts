export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'paper' | 'book' | 'interactive' | 'doc' | 'course';
}

export interface SubTopic {
  id: string;
  title: string;
  details?: string[];
  resources?: Resource[];
  xp: number;
}

export interface TopicSection {
  id: string;
  title: string;
  description?: string;
  subtopics: SubTopic[];
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  tagline: string;
  estimatedTime: string;
  sections: TopicSection[];
  skipNote?: string[];
  xpReward: number;
  badgeId: string;
}

export interface RoadmapTrack {
  id: 'basic' | 'advanced';
  title: string;
  subtitle: string;
  estimatedTime: string;
  phases: Phase[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: 'phase' | 'streak' | 'xp' | 'special';
  requiredXp?: number;
  requiredPhaseId?: string;
  requiredStreak?: number;
}

export interface UserProgress {
  completedTopics: string[]; // array of subtopic IDs
  completedPhases: string[]; // array of phase IDs
  totalXp: number;
  streakDays: number;
  lastLoginDate: string; // YYYY-MM-DD
  unlockedAchievements: string[]; // array of achievement IDs
}
