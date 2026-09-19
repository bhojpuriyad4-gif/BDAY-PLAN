import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { MemoriesView } from './components/MemoriesView';
import { NoteView } from './components/NoteView';
import { WhisperModal } from './components/WhisperModal';

import { Level01 } from './levels/Level01';
import { Level02 } from './levels/Level02';
import { Level03 } from './levels/Level03';
import { Level04 } from './levels/Level04';
import { Level05 } from './levels/Level05';
import { Level06 } from './levels/Level06';
import { Level07 } from './levels/Level07';
import { Level08 } from './levels/Level08';
import { Level09 } from './levels/Level09';
import { Level10 } from './levels/Level10';
import { LevelFuture } from './levels/LevelFuture';

import { BirthdayProgress } from './types';
import { INITIAL_PROGRESS } from './data/birthdayData';

const STORAGE_KEY = 'for_you_birthday_adventure_progress_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'levels' | 'memories' | 'note'>('home');
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [isWhisperOpen, setIsWhisperOpen] = useState<boolean>(false);

  // Initialize progress from localStorage
  const [progress, setProgress] = useState<BirthdayProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROGRESS;
  });

  // Save progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore
    }
  }, [progress]);

  const handleLevelComplete = (levelNum: number) => {
    setProgress((prev) => {
      const completedLevels = prev.completedLevels.includes(levelNum)
        ? prev.completedLevels
        : [...prev.completedLevels, levelNum];

      const nextLevelNum = levelNum + 1;
      const unlockedLevels =
        nextLevelNum <= 21 && !prev.unlockedLevels.includes(nextLevelNum)
          ? [...prev.unlockedLevels, nextLevelNum]
          : prev.unlockedLevels;

      return {
        ...prev,
        completedLevels,
        unlockedLevels,
        lastActiveLevel: nextLevelNum <= 21 ? nextLevelNum : levelNum,
      };
    });

    // Advance to next level or return to dashboard
    if (levelNum < 10) {
      setActiveLevel(levelNum + 1);
    } else {
      setActiveLevel(null);
      setActiveTab('levels');
    }
  };

  const handleSelectLevel = (levelNumber: number) => {
    setActiveLevel(levelNumber);
  };

  const handleBackToDashboard = () => {
    setActiveLevel(null);
    setActiveTab('home');
  };

  const handleResetProgress = () => {
    if (window.confirm('Would you like to reset your adventure to Level 1?')) {
      setProgress(INITIAL_PROGRESS);
      setActiveLevel(null);
    }
  };

  const renderActiveView = () => {
    // If a specific level is open
    if (activeLevel !== null) {
      switch (activeLevel) {
        case 1:
          return <Level01 onComplete={() => handleLevelComplete(1)} onBack={handleBackToDashboard} />;
        case 2:
          return <Level02 onComplete={() => handleLevelComplete(2)} onBack={handleBackToDashboard} />;
        case 3:
          return <Level03 onComplete={() => handleLevelComplete(3)} onBack={handleBackToDashboard} />;
        case 4:
          return <Level04 onComplete={() => handleLevelComplete(4)} onBack={handleBackToDashboard} />;
        case 5:
          return <Level05 onComplete={() => handleLevelComplete(5)} onBack={handleBackToDashboard} />;
        case 6:
          return <Level06 onComplete={() => handleLevelComplete(6)} onBack={handleBackToDashboard} />;
        case 7:
          return <Level07 onComplete={() => handleLevelComplete(7)} onBack={handleBackToDashboard} />;
        case 8:
          return <Level08 onComplete={() => handleLevelComplete(8)} onBack={handleBackToDashboard} />;
        case 9:
          return <Level09 onComplete={() => handleLevelComplete(9)} onBack={handleBackToDashboard} />;
        case 10:
          return <Level10 onComplete={() => handleLevelComplete(10)} onBack={handleBackToDashboard} />;
        default:
          return <LevelFuture levelNumber={activeLevel} onBack={handleBackToDashboard} />;
      }
    }

    // Tabs
    switch (activeTab) {
      case 'memories':
        return <MemoriesView onBack={() => setActiveTab('home')} />;
      case 'note':
        return <NoteView onBack={() => setActiveTab('home')} />;
      case 'home':
      case 'levels':
      default:
        return (
          <Dashboard
            progress={progress}
            onSelectLevel={handleSelectLevel}
            onResetProgress={handleResetProgress}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#080a13] text-white flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-x-hidden font-sans">
      {/* Background Starfield and Ambient Radial Glows */}
      <div className="fixed inset-0 starfield pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar
        currentTab={activeLevel !== null ? 'level' : activeTab}
        onSelectTab={(tab) => {
          setActiveLevel(null);
          setActiveTab(tab as 'home' | 'levels' | 'memories' | 'note');
        }}
        onOpenHeart={() => setIsWhisperOpen(true)}
      />

      {/* Main Experience Body */}
      <main className="relative z-10 pt-20 px-2 sm:px-4 flex-1 flex flex-col items-center">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Birthday Whisper Pop-up Modal */}
      <WhisperModal isOpen={isWhisperOpen} onClose={() => setIsWhisperOpen(false)} />
    </div>
  );
}
