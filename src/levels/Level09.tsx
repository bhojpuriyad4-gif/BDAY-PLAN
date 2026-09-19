import React, { useState } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { LEVEL_09_ITEMS } from '../data/birthdayData';
import { sound } from '../utils/audio';

interface Level09Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level09: React.FC<Level09Props> = ({ onComplete, onBack }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const targetCount = 7;

  const correctSelected = selectedIds.filter((id) => {
    const itm = LEVEL_09_ITEMS.find((i) => i.id === id);
    return itm?.isCorrect;
  }).length;

  const isCompleted = correctSelected >= targetCount;

  const handleToggleItem = (item: (typeof LEVEL_09_ITEMS)[0]) => {
    if (isCompleted) return;

    if (selectedIds.includes(item.id)) {
      setSelectedIds(selectedIds.filter((id) => id !== item.id));
      return;
    }

    sound.playHeartPop();
    const nextList = [...selectedIds, item.id];
    setSelectedIds(nextList);

    const newCorrect = nextList.filter((id) => {
      const itm = LEVEL_09_ITEMS.find((i) => i.id === id);
      return itm?.isCorrect;
    }).length;

    if (newCorrect >= targetCount) {
      sound.playVictory();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader
        levelNumber={9}
        onBack={onBack}
        rightSlot={
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151826]/70 border border-white/5 backdrop-blur-md shadow-sm">
            <span className="text-pink-300 text-xs">♡</span>
            <span className="text-[13px] font-semibold text-white/90">
              {correctSelected} / {targetCount} found
            </span>
          </div>
        }
      />

      {/* Header title */}
      <div className="text-center max-w-xl mx-auto mb-8 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Things That Remind Me of You</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Tap the 7 special little things that belong uniquely to us!
        </p>
      </div>

      {/* 12 Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl z-10">
        {LEVEL_09_ITEMS.map((item) => {
          const isSelected = selectedIds.includes(item.id);

          return (
            <button
              key={item.id}
              onClick={() => handleToggleItem(item)}
              type="button"
              className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center min-h-[110px] text-center cursor-pointer relative overflow-hidden group ${
                isSelected && item.isCorrect
                  ? 'bg-pink-500/20 border-pink-400 text-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.4)] scale-105'
                  : isSelected && !item.isCorrect
                  ? 'bg-amber-500/10 border-amber-400/40 text-amber-200'
                  : 'bg-[#151826]/70 border-white/5 text-[#b9b4c7] hover:border-white/20 hover:text-white hover:bg-[#1c2030]'
              }`}
            >
              {/* Checkmark when selected */}
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      item.isCorrect ? 'text-pink-300' : 'text-amber-300'
                    }`}
                  >
                    {item.isCorrect ? 'favorite' : 'close'}
                  </span>
                </div>
              )}

              <span className="text-2xl sm:text-3xl mb-1.5 transform group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <span className="text-xs sm:text-sm font-medium leading-tight">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Celebration Container when 7 found */}
      {isCompleted && (
        <div className="w-full max-w-md mt-8 p-6 rounded-2xl bg-[#151826]/95 border border-pink-400/40 shadow-[0_0_30px_rgba(244,114,182,0.3)] text-center flex flex-col items-center animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300 mb-2">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
          </div>
          <h3 className="text-2xl font-bold text-white">You Know Us So Well! ✨</h3>
          <p className="font-caveat text-2xl text-pink-200 my-1">
            "Every single one of these has your name written all over it."
          </p>
          <button
            onClick={onComplete}
            className="mt-4 px-8 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
            type="button"
          >
            <span>CONTINUE TO LEVEL 10</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
};
