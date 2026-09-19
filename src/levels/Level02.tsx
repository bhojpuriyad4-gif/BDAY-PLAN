import React, { useState } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { LEVEL_02_CARDS } from '../data/birthdayData';
import { sound } from '../utils/audio';

interface Level02Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level02: React.FC<Level02Props> = ({ onComplete, onBack }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [revealedClue, setRevealedClue] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleSelectCard = (card: (typeof LEVEL_02_CARDS)[0]) => {
    sound.playFlip();
    setSelectedCardId(card.id);

    if (card.isCorrect) {
      sound.playVictory();
      setRevealedClue(true);
      setFeedbackMessage(null);
    } else {
      sound.playSoftBuzzer();
      setFeedbackMessage(card.message);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center">
      <LevelHeader levelNumber={2} onBack={onBack} />

      {/* Header text */}
      <div className="text-center max-w-xl mx-auto mb-8 relative select-none">
        <span className="font-caveat text-xl sm:text-2xl text-amber-200 block mb-1">
          Chapter of Intuition ✨
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Pick One</span>
          <span className="text-amber-300 text-3xl sm:text-4xl">✨</span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          One of these cards has the next clue. Choose wisely!
        </p>
      </div>

      {/* Main cards layout with side doodles */}
      <div className="relative w-full flex items-center justify-center my-4">
        {/* Left doodle */}
        <div className="hidden lg:block absolute left-4 xl:left-8 top-1/3 -rotate-6 select-none pointer-events-none">
          <span className="font-caveat text-2xl xl:text-3xl text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
            Trust your heart ♡
          </span>
        </div>

        {/* Right doodle */}
        <div className="hidden lg:block absolute right-4 xl:right-8 top-1/3 rotate-6 text-right select-none pointer-events-none">
          <span className="font-caveat text-xl xl:text-2xl text-pink-200/90 drop-shadow-[0_0_8px_rgba(244,114,182,0.3)]">
            ...choices lead<br />to better stories.
          </span>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-10">
          {LEVEL_02_CARDS.map((card) => {
            const isSelected = selectedCardId === card.id;
            return (
              <div
                key={card.id}
                onClick={() => handleSelectCard(card)}
                className={`p-6 rounded-2xl bg-[#151826]/70 border transition-all duration-300 backdrop-blur-xl flex flex-col items-center justify-between min-h-[360px] text-center cursor-pointer shadow-xl relative overflow-hidden group hover:-translate-y-1 ${
                  isSelected && card.isCorrect
                    ? 'border-pink-400 shadow-[0_0_30px_rgba(244,114,182,0.45)] bg-[#1e2232]'
                    : isSelected && !card.isCorrect
                    ? 'border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.3)] bg-[#1a1424]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Top card header */}
                <div className="w-full flex items-center justify-between text-xs text-[#8e8697]">
                  <span className="font-mono tracking-wider">{card.num}</span>
                  <span className="text-amber-200">{card.badge}</span>
                </div>

                {/* Center glowing symbol */}
                <div className="my-6 flex flex-col items-center">
                  <div
                    className={`w-28 h-28 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg ${card.circleBg}`}
                    style={{ boxShadow: `0 0 25px ${card.glowColor}` }}
                  >
                    <span
                      className="material-symbols-outlined text-[48px]"
                      style={{
                        fontVariationSettings: card.icon === 'favorite' ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-caveat text-3xl text-white mt-5">
                    {card.title}
                  </h3>
                </div>

                {/* Select button */}
                <button
                  type="button"
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected && card.isCorrect
                      ? 'bg-pink-400 text-[#400014] shadow-[0_0_15px_rgba(244,114,182,0.5)]'
                      : isSelected && !card.isCorrect
                      ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40'
                      : 'bg-white/5 text-[#b9b4c7] border border-white/10 group-hover:bg-white/10 group-hover:text-white'
                  }`}
                >
                  {isSelected && card.isCorrect
                    ? 'Card Unlocked ♡'
                    : isSelected
                    ? 'Try Another'
                    : 'Select Card'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gentle feedback message if wrong card selected */}
      {feedbackMessage && !revealedClue && (
        <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-sm max-w-md text-center font-medium animate-fadeIn">
          {feedbackMessage}
        </div>
      )}

      {/* Clue Unlocked card when correct card chosen */}
      {revealedClue && (
        <div className="w-full max-w-2xl mt-8 p-6 rounded-2xl bg-[#151826]/90 border border-pink-400/40 backdrop-blur-xl shadow-[0_0_30px_rgba(244,114,182,0.25)] flex flex-col items-center text-center animate-fadeIn">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300 shadow-sm border border-pink-400/30">
              <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
            </div>
            <div className="text-left">
              <span className="text-[11px] font-semibold text-pink-300 uppercase tracking-widest block">
                CLUE UNLOCKED ✨
              </span>
              <h4 className="text-lg font-semibold text-white">
                Something was waiting behind this one...
              </h4>
            </div>
          </div>

          {/* Quote container */}
          <div className="w-full py-5 px-6 my-3 rounded-2xl bg-[#080a13]/80 border border-white/5 shadow-inner">
            <p className="font-caveat text-3xl sm:text-4xl text-pink-200 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
              “Check under your favorite pillow tonight!” ♡
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-3">
            <span className="text-xs text-[#b9b4c7] flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px] text-pink-300">
                check_circle
              </span>
              Clue recorded to your Journey Book
            </span>

            <button
              onClick={onComplete}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
              type="button"
            >
              <span>CONTINUE TO LEVEL 03</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      {/* Bottom handwritten note */}
      <div className="mt-10 select-none text-center">
        <span className="font-caveat text-2xl text-pink-200/70">
          Take your time exploring every tiny surprise ♡
        </span>
      </div>
    </div>
  );
};
