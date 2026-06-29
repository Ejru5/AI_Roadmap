# 🤖 Gamified AI Learning Roadmap

An interactive, gamified web application for mastering Artificial Intelligence and Large Language Models. Featuring two distinct learning paths—**Basic Fast-Track** and **Advanced Master Curriculum**—with real-time XP tracking, level progression, unlockable trophies, study streaks, and confetti celebrations.

Designed for instant zero-config deployment on **Vercel**.

![App Screenshot Preview](https://raw.githubusercontent.com/Ejru5/AI_Roadmap/main/public/preview.png) *(Deployable Web UI)*

---

## ✨ Key Features

- **⚡ Dual Learning Tracks:**
  - **Basic Track (Fast-Track):** 9 essential phases focused on modern LLMs, Transformers, Attention mechanics, LoRA fine-tuning, and AI agents.
  - **Advanced Track (Master Curriculum):** 12 comprehensive phases from math foundations and Python OOP to Deep Learning, Computer Vision, Reinforcement Learning, and MLOps.
- **🎮 Gamification Engine:**
  - **XP & Leveling:** Earn XP for completing topics and phases, scaling up through 10 distinct titles from *AI Novice* to *AI Grandmaster*.
  - **Trophy & Quest Cabinet:** Unlock milestone badges (e.g., *Transformer Titan*, *Alignment Wizard*).
  - **Streak Retention:** Daily study streak tracking and automatic local storage synchronization across sessions.
  - **Celebration Effects:** Interactive confetti fireworks upon checking off modules and completing phases.
- **🎨 High-Contrast Print Editorial Design:** High-legibility theme inspired by modern design labs using **Space Grotesk** headlines, hairline borders, and primary accents.

---

## 🛠️ Tech Stack

- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, Space Grotesk & Inter Typography
- **Icons & Effects:** Lucide React, Canvas Confetti

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/Ejru5/AI_Roadmap.git
cd AI_Roadmap
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Deploy to Vercel

This repository is optimized for one-click deployment on Vercel:

1. Import this repository into [Vercel](https://vercel.com).
2. Vercel will automatically detect **Vite**.
3. Click **Deploy**!

---

## 📂 Project Structure

```text
├── public/              # Static assets and favicons
├── src/
│   ├── components/      # UI components (Header, PhaseCard, TopicItem, AchievementModal)
│   ├── data/            # Structured roadmap tracks and achievements JSON/TS data
│   ├── types/           # TypeScript data models and interfaces
│   ├── utils/           # Gamification calculations and XP thresholds
│   ├── App.tsx          # Main application container & state sync
│   └── main.tsx         # Application entry point
├── index.html           # HTML template with Tailwind CSS CDN setup
├── package.json         # Dependencies and build scripts
└── vite.config.ts       # Vite build configuration
```

---

## 📝 License

Distributed under the MIT License. Feel free to fork, customize, and share!
