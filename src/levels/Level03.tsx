import React, { useState } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { LEVEL_03_MEMORIES } from '../data/birthdayData';
import { sound } from '../utils/audio';

interface Level03Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level03: React.FC<Level03Props> = ({ onComplete, onBack }) => {
  const [selectedId, setSelectedId] = useState<string>('A'); // Card A is initially selected or selectable
  const [isChecked, setIsChecked] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const handleCardClick = (id: string) => {
    sound.playFlip();
    setSelectedId(id);
    setIsChecked(false);
    setFeedback(null);
  };

  const handleCheckAnswer = () => {
    const memory = LEVEL_03_MEMORIES.find((m) => m.id === selectedId);
    if (!memory) return;

    setIsChecked(true);
    if (memory.isEarliest) {
      sound.playVictory();
      setFeedback({
        isCorrect: true,
        text: 'That magical morning coffee was the first chapter of our story! You looked so radiant.',
      });
    } else {
      sound.playSoftBuzzer();
      setFeedback({
        isCorrect: false,
        text: 'That was such a special day too, but another memory happened before it! Think earlier... 💭',
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center">
      <LevelHeader levelNumber={3} onBack={onBack} />

      {/* Header text */}
      <div className="text-center max-w-xl mx-auto mb-8 relative select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-200 mb-2 shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            NOSTALGIC TRIVIA
          </span>
          <span className="text-pink-300 text-xs">✦</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Our Memory</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal inline-block drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-base sm:text-lg text-white/90 mt-2 font-medium">
          Which one happened first?
        </p>
      </div>

      {/* 3 Polaroid Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl my-4 z-10 items-center">
        {LEVEL_03_MEMORIES.map((memory) => {
          const isSelected = selectedId === memory.id;
          return (
            <div
              key={memory.id}
              onClick={() => handleCardClick(memory.id)}
              className={`relative cursor-pointer transition-all duration-300 p-4 pb-6 rounded-2xl flex flex-col items-center ${
                isSelected
                  ? 'bg-[#1e1424] border-2 border-pink-400 shadow-[0_0_30px_rgba(244,114,182,0.4)] scale-105 -rotate-1 z-20'
                  : 'bg-[#151826]/80 border border-white/10 hover:border-white/30 hover:scale-[1.02] shadow-xl rotate-1 z-10'
              }`}
            >
              {/* Floating handwriting doodle if present */}
              {memory.doodle && (
                <div
                  className={`absolute -top-7 ${
                    memory.id === 'A' ? '-left-2' : memory.id === 'C' ? '-right-2' : 'left-4'
                  } pointer-events-none select-none`}
                >
                  <span className="font-caveat text-xl text-pink-200 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
                    {memory.doodle}
                  </span>
                </div>
              )}

              {/* Letter badge badge (A, B, C) */}
              <div className="absolute top-6 left-6 z-10 w-7 h-7 rounded-full bg-[#080a13]/80 border border-white/20 text-white font-bold text-xs flex items-center justify-center shadow-md">
                {memory.badge}
              </div>

              {/* Photo area styled like Polaroid */}
              <div className="w-full bg-[#080a13] p-2 rounded-xl overflow-hidden shadow-inner flex flex-col">
                <div className="w-full h-56 rounded-lg overflow-hidden relative">
                  <img
                    src={memory.imageUrl}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle stamp */}
                  <div className="absolute bottom-2 inset-x-2 py-1 px-2 bg-black/60 backdrop-blur-sm rounded text-[11px] text-white/90 text-center font-mono">
                    {memory.caption}
                  </div>
                </div>
              </div>

              {/* Polaroid bottom caption */}
              <h3 className="font-caveat text-2xl sm:text-3xl text-white mt-4 text-center">
                {memory.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Encouragement text */}
      <div className="flex items-center gap-2 mt-6 text-pink-300">
        <span className="font-caveat text-2xl drop-shadow-[0_0_8px_rgba(244,114,182,0.3)]">
          ✦ Think back... you'll get it! ♡
        </span>
      </div>

      {/* Feedback banner */}
      {feedback && (
        <div
          className={`mt-4 p-4 rounded-xl max-w-md text-center text-sm font-medium animate-fadeIn ${
            feedback.isCorrect
              ? 'bg-pink-500/20 border border-pink-400 text-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.3)]'
              : 'bg-amber-500/10 border border-amber-400/30 text-amber-200'
          }`}
        >
          {feedback.text}
        </div>
      )}

      {/* Check Answer / Continue Button */}
      <div className="mt-6">
        {isChecked && feedback?.isCorrect ? (
          <button
            onClick={onComplete}
            className="px-8 py-3.5 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
            type="button"
          >
            <span>CONTINUE TO LEVEL 04</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        ) : (
          <button
            onClick={handleCheckAnswer}
            className="px-8 py-3.5 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
            type="button"
          >
            <span>CHECK ANSWER</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  );
};
