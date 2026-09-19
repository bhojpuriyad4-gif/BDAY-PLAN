import React from 'react';

interface LevelHeaderProps {
  levelNumber: number;
  totalLevels?: number;
  onBack: () => void;
  rightSlot?: React.ReactNode;
}

export const LevelHeader: React.FC<LevelHeaderProps> = ({
  levelNumber,
  totalLevels = 21,
  onBack,
  rightSlot,
}) => {
  return (
    <div className="w-full flex items-center justify-between py-3 mb-4 mt-2 select-none">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151826]/70 border border-white/5 backdrop-blur-md hover:bg-[#1e2232] hover:border-pink-300/30 transition-all text-[#b9b4c7] hover:text-pink-200 cursor-pointer shadow-sm text-sm"
      >
        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-1">
          arrow_back
        </span>
        <span className="text-[13px] font-medium">Back</span>
      </button>

      {/* Level capsule badge */}
      <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#151826]/70 border border-white/5 backdrop-blur-md shadow-sm">
        <span className="text-pink-400 text-xs">♡</span>
        <span className="text-[12px] font-semibold text-purple-200 tracking-wide">
          Level {levelNumber} of {totalLevels}
        </span>
      </div>

      {/* Right Progress indicator or custom right slot */}
      <div>
        {rightSlot ? (
          rightSlot
        ) : (
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#151826]/70 border border-white/5 backdrop-blur-md shadow-sm">
            <span className="text-[13px] font-semibold text-white/90">
              {levelNumber} / {totalLevels}
            </span>
            <div className="w-16 h-1.5 rounded-full bg-[#080a13] border border-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(244,114,182,0.6)]"
                style={{ width: `${(levelNumber / totalLevels) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
