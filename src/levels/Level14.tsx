import React, { useState } from 'react';
import { LEVEL_14_DATA } from '../data/birthdayData';

interface Level14Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level14: React.FC<Level14Props> = ({ onComplete, onBack }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const isSolved = selectedOptionId === 'stargazing';

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-16 flex flex-col items-center select-none">
      {/* Top Navigation & Stage HUD */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#181b27] hover:bg-[#272936] transition-all text-[#dac0c3] hover:text-white shadow-sm border border-white/5 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-0.5 text-pink-300">
              arrow_back
            </span>
            <span className="text-sm font-semibold">Back</span>
          </button>
          <div className="flex items-center gap-1.5 bg-[#272936] px-3.5 py-1 rounded-full border border-white/5">
            <span className="text-[11px] font-bold text-purple-300 uppercase tracking-widest">
              Synchrony • Chapter Mind
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 14 / 21
              </span>
              <span className="font-script-whisper text-purple-300 text-xs">
                66.6% journey
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#313442] overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 shadow-[0_0_12px_rgba(255,143,163,0.8)] transition-all duration-700"
                style={{ width: '66.66%' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-1 bg-[#181b27] px-2.5 py-1 rounded-full border border-white/5 shadow-inner">
            <span
              className="material-symbols-outlined text-[17px] text-pink-400"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span
              className="material-symbols-outlined text-[17px] text-pink-400"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span
              className="material-symbols-outlined text-[17px] text-pink-400"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="material-symbols-outlined text-[17px] text-white/20">
              favorite
            </span>
            <span className="material-symbols-outlined text-[17px] text-white/20">
              favorite
            </span>
          </div>
        </div>
      </div>

      {/* Stage Header Section */}
      <div className="relative mt-2 mb-8 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#272936] text-pink-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-pink-500/20">
          <span className="material-symbols-outlined text-[14px]">
            psychology
          </span>
          Mental Link Active
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center justify-center flex-wrap gap-x-2">
          Guess What I&apos;m Thinking{' '}
          <span className="font-caveat text-pink-300 drop-shadow-[0_0_10px_rgba(255,186,195,0.6)]">
            👀
          </span>
        </h1>
        <p className="font-script-whisper text-purple-200 mt-1 text-base sm:text-lg">
          {LEVEL_14_DATA.thoughtHint}
        </p>
        <span className="text-xs text-pink-300/80 font-medium mt-1">
          Telepathy test in progress... 🔮
        </span>
      </div>

      {/* Main Game Stage Canvas */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Left Handwritten Whisper Margin (Desktop) */}
        <div className="hidden lg:flex flex-col items-end absolute -left-20 top-28 z-20 pointer-events-none transform -rotate-6 max-w-[150px]">
          <span className="font-script-whisper text-pink-300 text-lg leading-tight">
            Focus closely on the stars...
          </span>
          <svg className="w-12 h-10 text-pink-300/80 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 50 40">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 5 10 Q 30 15 42 32" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 33 30 L 42 32 L 42 22" />
          </svg>
        </div>

        {/* Right Handwritten Whisper Margin (Desktop) */}
        <div className="hidden lg:flex flex-col items-start absolute -right-20 top-60 z-20 pointer-events-none transform rotate-3 max-w-[160px]">
          <svg className="w-12 h-10 text-purple-300/80 mb-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 50 40">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 45 35 Q 20 25 10 10" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 8 20 L 10 10 L 20 12" />
          </svg>
          <span className="font-script-whisper text-purple-200 text-base leading-tight">
            You might actually know me too well. ♡
          </span>
        </div>

        {/* Stage Container */}
        <div className="w-full bg-[#181b27]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top Bar inside stage */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-white/5">
            <span className="px-3 py-1 rounded-full bg-[#272936] text-purple-300 text-xs font-bold tracking-wider">
              {LEVEL_14_DATA.roundTitle}
            </span>
            <div className="flex items-center gap-1 text-xs text-yellow-300 font-bold bg-[#edc157]/10 px-3 py-1 rounded-full border border-yellow-400/20">
              <span className="material-symbols-outlined text-[14px]">favorite</span>
              Bonus Heart Available
            </div>
          </div>

          {/* Thought Bubble Visualization */}
          <div className="flex flex-col items-center justify-center my-4 relative">
            {/* Thought Cloud Container */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#25283a] to-[#1c1e2d] border border-pink-400/20 shadow-[0_0_35px_rgba(255,143,163,0.15)] max-w-lg w-full text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-pink-300">
                <span className="text-2xl">💭</span>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  auto_awesome
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {LEVEL_14_DATA.thoughtHeading}
              </h2>
              <p className="font-script-whisper text-pink-200 text-base sm:text-lg">
                {isSolved ? LEVEL_14_DATA.successHint : LEVEL_14_DATA.thoughtHint}
              </p>
            </div>

            {/* Little Cloud Puffs leading down */}
            <div className="flex flex-col items-center gap-1.5 my-2">
              <div className="w-4 h-4 rounded-full bg-[#25283a] border border-pink-400/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#25283a] border border-pink-400/20" />
            </div>

            {/* Cute Mascot Silhouette / Indicator */}
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#272936] border border-white/10 text-xs text-purple-200 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-pink-400 animate-pulse">
                sensors
              </span>
              <span className="font-mono tracking-wider text-[11px] uppercase">
                {isSolved ? 'Vibe Synced 100%' : 'Transmitting Vibe...'}
              </span>
            </div>
          </div>

          {/* 4 Choices Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {LEVEL_14_DATA.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              const isOptionCorrect = option.isCorrect;

              let btnStyle =
                'bg-[#141622]/90 border-white/5 hover:border-pink-300/30 hover:bg-[#1f2233] text-white';

              if (isSelected) {
                if (isOptionCorrect) {
                  btnStyle =
                    'bg-[#272936] border-pink-400 shadow-[0_0_25px_rgba(255,143,163,0.45)] text-pink-100 scale-[1.02]';
                } else {
                  btnStyle =
                    'bg-[#272936] border-purple-400/50 shadow-[0_0_15px_rgba(192,132,252,0.3)] text-purple-100';
                }
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(option.id)}
                  className={`relative text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[105px] ${btnStyle}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{option.emoji}</span>
                      <div>
                        <span className="text-[10px] font-bold text-pink-300/80 uppercase tracking-widest block">
                          {option.optionLabel}
                        </span>
                        <p className="font-bold text-base leading-snug">{option.title}</p>
                      </div>
                    </div>
                    {isSelected && (
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isOptionCorrect ? 'bg-pink-400 text-[#5f1127]' : 'bg-purple-400 text-gray-900'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          {isOptionCorrect ? 'check' : 'close'}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-[#dac0c3] mt-2 leading-relaxed">
                    {option.description}
                  </p>

                  {option.solvedTag && isSelected && isOptionCorrect && (
                    <div className="mt-2.5">
                      <span className="inline-block text-[11px] font-bold px-3 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">
                        {option.solvedTag}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Keepsake Drawer (Shows when solved) */}
          {isSolved && (
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-fadeIn">
              {/* Polaroid */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative bg-white text-gray-900 p-3 pb-5 rounded-lg shadow-2xl transform -rotate-2 w-56">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffdf9b]/50 rounded-xs" />
                  <img
                    src={LEVEL_14_DATA.polaroid.imageUrl}
                    alt="Telepathy Memory"
                    className="w-full h-44 object-cover rounded-xs"
                  />
                  <div className="mt-2 text-center">
                    <p className="font-script-whisper text-xs font-bold text-gray-800">
                      {LEVEL_14_DATA.polaroid.title}
                    </p>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                      {LEVEL_14_DATA.polaroid.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Celebration Note */}
              <div className="md:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-400/20 border border-pink-400/30 text-pink-300 text-xs font-bold">
                    Mind Sync Rate: 100%
                  </span>
                  <span className="text-xs text-purple-300 font-script-whisper">
                    Act III: Deepest Thoughts
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  “You actually guessed it immediately! ♡”
                </h3>
                <p className="text-xs sm:text-sm text-[#dac0c3] leading-relaxed">
                  It&apos;s scary how you don&apos;t even have to hesitate. You picked the exact memory that was looping in my head all evening. Ready for the next revelation?
                </p>

                {/* Telepathy Mini Stats */}
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="p-2 rounded-lg bg-[#202333] text-center border border-white/5">
                    <span className="text-[10px] text-gray-400 block uppercase">Guessed In</span>
                    <span className="text-xs font-bold text-pink-300">1 Tap</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#202333] text-center border border-white/5">
                    <span className="text-[10px] text-gray-400 block uppercase">Telepathy</span>
                    <span className="text-xs font-bold text-purple-300">Infinite</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#202333] text-center border border-white/5">
                    <span className="text-[10px] text-gray-400 block uppercase">Next Act</span>
                    <span className="text-xs font-bold text-yellow-300">Lvl 15</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Ribbon & Next Level Button */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 bg-[#1c1f2c] px-4 py-2 rounded-full border border-white/5">
              <span className="material-symbols-outlined text-[18px] text-pink-300">
                psychology
              </span>
              <span className="text-[11px] font-bold tracking-wider text-white">
                {isSolved
                  ? 'LEVEL COMPLETE ✨ MIND LINK ESTABLISHED'
                  : 'READ MY MIND TO UNLOCK'}
              </span>
            </div>

            <button
              onClick={onComplete}
              disabled={!isSolved}
              type="button"
              className={`group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-base shadow-[0_8px_24px_-4px_rgba(255,143,163,0.5)] transition-all ${
                isSolved
                  ? 'bg-pink-400 hover:bg-pink-300 text-[#5f1127] cursor-pointer hover:scale-105 active:scale-95 animate-pulse'
                  : 'bg-white/10 text-white/40 cursor-not-allowed opacity-60'
              }`}
            >
              <span>Continue to Level 15</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
