import React from 'react';
import { LevelHeader } from '../components/LevelHeader';

interface LevelFutureProps {
  levelNumber: number;
  onBack: () => void;
}

export const LevelFuture: React.FC<LevelFutureProps> = ({ levelNumber, onBack }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader levelNumber={levelNumber} onBack={onBack} />

      <div className="text-center max-w-lg mx-auto my-12 p-8 sm:p-12 rounded-3xl bg-[#151826]/90 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <span className="material-symbols-outlined text-[32px]">lock</span>
        </div>

        <span className="font-caveat text-4xl sm:text-5xl text-pink-300 drop-shadow-[0_0_12px_rgba(244,114,182,0.5)]">
          Level {levelNumber} is Locked ♡
        </span>

        <p className="text-base text-white/90 font-medium mt-3">
          Complete Level {levelNumber > 1 ? levelNumber - 1 : 1} to unlock this chapter!
        </p>

        <p className="text-xs text-[#b9b4c7] mt-2 max-w-xs leading-relaxed">
          Solve the earlier levels in sequence to reveal our secret notes, starlight wishes, and memories.
        </p>

        <button
          onClick={onBack}
          type="button"
          className="mt-8 px-8 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Dashboard</span>
        </button>
      </div>
    </div>
  );
};
