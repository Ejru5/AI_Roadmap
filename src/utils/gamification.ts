export interface LevelInfo {
  level: number;
  title: string;
  currentLevelXp: number;
  nextLevelXp: number;
  progressPercent: number;
}

const RANKS = [
  { minXp: 0, title: 'AI Novice 🌱' },
  { minXp: 200, title: 'Prompt Explorer 🔍' },
  { minXp: 500, title: 'Python Scripter 🐍' },
  { minXp: 1000, title: 'Math Initiator 📐' },
  { minXp: 1800, title: 'Neural Apprentice 🧠' },
  { minXp: 2800, title: 'ML Practitioner ⚙️' },
  { minXp: 4000, title: 'Transformer Engineer 🤖' },
  { minXp: 5500, title: 'LLM Architect 🏛️' },
  { minXp: 7500, title: 'GenAI Alchemist 🔮' },
  { minXp: 10000, title: 'AI Grandmaster 👑' }
];

export function getLevelInfo(totalXp: number): LevelInfo {
  const xpPerLevel = 300;
  const level = Math.floor(totalXp / xpPerLevel) + 1;
  const currentLevelXp = totalXp % xpPerLevel;
  const nextLevelXp = xpPerLevel;
  const progressPercent = Math.min(100, Math.floor((currentLevelXp / nextLevelXp) * 100));

  // Determine title based on total XP
  let title = RANKS[0].title;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (totalXp >= RANKS[i].minXp) {
      title = RANKS[i].title;
      break;
    }
  }

  return {
    level,
    title,
    currentLevelXp,
    nextLevelXp,
    progressPercent
  };
}
