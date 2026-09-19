import React from 'react';
import { ALL_LEVELS_METADATA } from '../data/birthdayData';
import { BirthdayProgress, LevelMetadata } from '../types';

interface DashboardProps {
  progress: BirthdayProgress;
  onSelectLevel: (levelNumber: number) => void;
  onResetProgress: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  progress,
  onSelectLevel,
  onResetProgress,
}) => {
  const completedCount = progress.completedLevels.length;
  const totalCount = ALL_LEVELS_METADATA.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 flex flex-col items-center select-none">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mt-4 mb-8 relative">
        {/* Decorative ambient aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-pink-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Eyebrow Capsule */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#151826]/80 border border-pink-500/20 text-pink-200 mb-4 shadow-[0_0_15px_rgba(244,114,182,0.15)]">
          <span className="text-pink-300 text-xs">✦</span>
          <span className="text-[11px] font-semibold tracking-widest uppercase">
            A SPECIAL JOURNEY FOR YOUR 21ST
          </span>
          <span className="text-pink-300 text-xs">✦</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2">
          <span className="font-caveat text-pink-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.6)]">
            Happy Birthday Khush
          </span>{' '}
          <span className="text-pink-400 font-caveat">♡</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-white/95 mt-1">
          Twenty One Little Surprises
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-3 font-normal leading-relaxed max-w-lg mx-auto">
          A private little world made of our memories, inside jokes, and everything that makes you, you.
        </p>
      </div>

      {/* Progress Card */}
      <div className="w-full max-w-3xl p-5 sm:p-6 rounded-2xl bg-[#151826]/75 border border-white/5 backdrop-blur-xl shadow-xl mb-12 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#b9b4c7]">
          <span className="flex items-center gap-1.5 text-white">
            <span className="material-symbols-outlined text-pink-400 text-[18px]">
              stars
            </span>
            Your Journey So Far
          </span>
          <span className="text-pink-200 font-semibold font-mono">
            {completedCount} / {totalCount} Milestones Unlocked
          </span>
        </div>

        {/* Glowing Progress Track */}
        <div className="w-full h-2.5 rounded-full bg-[#080a13] border border-white/5 overflow-hidden p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(244,114,182,0.7)]"
            style={{ width: `${Math.max(5, progressPercent)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#8e8697]">
          <span>Level 01: Catch the Hearts</span>
          <span>Level 21: Birthday Grand Finale</span>
        </div>
      </div>

      {/* Level Grid (1–21) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 z-10">
        {ALL_LEVELS_METADATA.map((lvl: LevelMetadata) => {
          const isCompleted = progress.completedLevels.includes(lvl.id);
          const isUnlocked = progress.unlockedLevels.includes(lvl.id);

          return (
            <div
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[220px] backdrop-blur-xl relative overflow-hidden group cursor-pointer ${
                isCompleted
                  ? 'bg-[#181a28]/90 border-pink-400/40 shadow-[0_0_20px_rgba(244,114,182,0.15)] hover:border-pink-300 hover:scale-[1.02]'
                  : isUnlocked
                  ? 'bg-[#151826]/80 border-white/10 hover:border-pink-400/50 hover:bg-[#1a1e30] hover:scale-[1.02] shadow-lg'
                  : 'bg-[#0f121e]/60 border-white/[0.04] opacity-75 hover:opacity-90 hover:border-white/10'
              }`}
            >
              {/* Subtle aura in card */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-pink-500/10 transition-colors" />

              {/* Card top row */}
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs text-[#8e8697] tracking-wider">
                  LEVEL {lvl.numberStr}
                </span>

                {isCompleted ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30 text-[10px] font-semibold">
                    <span className="material-symbols-outlined text-[12px]">favorite</span>
                    COMPLETED
                  </span>
                ) : isUnlocked ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 text-[10px] font-semibold">
                    READY
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 text-[#8e8697] text-[10px]">
                    <span className="material-symbols-outlined text-[12px]">lock</span>
                    LOCKED
                  </span>
                )}
              </div>

              {/* Center icon & title */}
              <div className="my-4 flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-md ${
                    isCompleted
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-400/30'
                      : isUnlocked
                      ? 'bg-white/5 text-purple-300 border border-white/10'
                      : 'bg-white/[0.03] text-white/30 border border-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {lvl.icon}
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-white group-hover:text-pink-200 transition-colors">
                    {lvl.title}
                  </h3>
                  <p className="text-xs text-[#b9b4c7] mt-1 line-clamp-2 leading-relaxed">
                    {lvl.subtitle}
                  </p>
                </div>
              </div>

              {/* Action row at bottom */}
              <div className="flex items-center justify-between text-xs pt-2 border-t border-white/[0.06] text-[#b9b4c7]">
                <span className="text-[11px] text-pink-300/80 font-caveat text-base">
                  {isCompleted ? 'Replay Memory ♡' : isUnlocked ? 'Tap to Play ✨' : 'Unlocks Soon'}
                </span>
                <span className="material-symbols-outlined text-[16px] text-pink-400 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Progress Helper at bottom */}
      <div className="mt-12 text-center">
        <button
          onClick={onResetProgress}
          type="button"
          className="text-xs text-[#8e8697] hover:text-pink-300 underline transition-colors cursor-pointer"
        >
          Reset Adventure Progress
        </button>
      </div>
    </div>
  );
};
