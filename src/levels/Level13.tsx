import React, { useState } from 'react';
import { LEVEL_13_QUESTIONS, LEVEL_13_KEEPSAKE } from '../data/birthdayData';

interface Level13Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level13: React.FC<Level13Props> = ({ onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showReaction, setShowReaction] = useState<boolean>(false);

  const currentQ = LEVEL_13_QUESTIONS[currentQuestionIndex];
  const selectedKey = selectedAnswers[currentQ.id];

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key,
    }));
    setShowReaction(true);
  };

  const isCurrentCorrect = currentQ.options.find((o) => o.key === selectedKey)?.isCorrect ?? false;
  const isFinalQuestion = currentQuestionIndex === LEVEL_13_QUESTIONS.length - 1;

  const handleNextQuestion = () => {
    if (!isFinalQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowReaction(false);
    }
  };

  const allAnsweredCorrectly = LEVEL_13_QUESTIONS.every((q) => {
    const ansKey = selectedAnswers[q.id];
    return q.options.find((o) => o.key === ansKey)?.isCorrect;
  });

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
            <span className="text-sm font-semibold">Back to Journey</span>
          </button>
          <div className="flex items-center gap-1.5 bg-[#272936] px-3.5 py-1 rounded-full border border-white/5">
            <span className="text-[11px] font-bold text-purple-300 uppercase tracking-widest">
              Act III • Whispers
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 13 / 21
              </span>
              <span className="font-script-whisper text-purple-300 text-xs">
                62% journey
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#313442] overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 shadow-[0_0_12px_rgba(255,143,163,0.8)] transition-all duration-700"
                style={{ width: '61.9%' }}
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
          </div>
        </div>
      </div>

      {/* Stage Header Section */}
      <div className="relative mt-2 mb-8 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#272936] text-pink-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-pink-500/20">
          <span className="material-symbols-outlined text-[14px]">
            celebration
          </span>
          Secret Archive Unlocked
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center justify-center flex-wrap gap-x-2">
          The Inside Joke Test{' '}
          <span className="font-caveat text-pink-300 drop-shadow-[0_0_10px_rgba(255,186,195,0.6)]">
            😂
          </span>
        </h1>
        <p className="font-script-whisper text-purple-200 mt-1 text-base sm:text-lg">
          Let&apos;s see how well you remember our nonsense. ♡
        </p>
      </div>

      {/* Stage Arena with Desktop Margins */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Left Sticky Note Scrapbook Doodle (Desktop) */}
        <div className="hidden lg:flex flex-col items-center absolute -left-20 top-20 z-20 pointer-events-none transform -rotate-6 max-w-[160px]">
          <div className="bg-[#fef9c3] text-[#713f12] p-3 rounded shadow-lg border border-amber-200 text-xs">
            <p className="font-script-whisper font-bold text-sm">
              {LEVEL_13_KEEPSAKE.stickyNote}
            </p>
            <p className="text-[10px] font-mono mt-1 text-amber-800">
              {LEVEL_13_KEEPSAKE.recordTime}
            </p>
          </div>
          <svg className="w-12 h-10 text-amber-300/80 mt-2 mr-6" fill="none" stroke="currentColor" viewBox="0 0 50 40">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 10 5 Q 35 15 40 35" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 33 32 L 40 35 L 43 27" />
          </svg>
          <span className="font-script-whisper text-pink-300 text-sm mt-1">(giggle)</span>
        </div>

        {/* Right Polaroid Scrapbook Doodle (Desktop) */}
        <div className="hidden lg:flex flex-col items-center absolute -right-20 top-16 z-20 pointer-events-none transform rotate-3 max-w-[170px]">
          <div className="bg-white text-gray-900 p-2 pb-3 rounded shadow-xl w-36">
            <img
              src={LEVEL_13_KEEPSAKE.imageUrl}
              alt="Midnight Snack"
              className="w-full h-24 object-cover rounded-xs"
            />
            <p className="font-script-whisper text-center text-xs font-bold mt-1.5 text-gray-800">
              {LEVEL_13_KEEPSAKE.polaroidTitle}
            </p>
          </div>
          <div className="mt-2 bg-[#272936] text-purple-200 px-3 py-1 rounded-full text-xs font-script-whisper shadow-md border border-white/5">
            {LEVEL_13_KEEPSAKE.whisperBubble}
          </div>
        </div>

        {/* Central Quiz Card */}
        <div className="w-full bg-[#181b27]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top Ribbons: Question Progress & Categories */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#272936] text-purple-300 text-xs font-bold tracking-wider">
                Question {currentQuestionIndex + 1} of {LEVEL_13_QUESTIONS.length}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#dac0c3] bg-white/5 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-[14px]">lock_open</span>
                {currentQ.category}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-yellow-300 font-bold bg-[#edc157]/10 px-3 py-1 rounded-full border border-yellow-400/20">
              <span className="material-symbols-outlined text-[14px]">stars</span>
              {currentQ.sweetPoints}
            </div>
          </div>

          {/* Question Title */}
          <div className="mb-6">
            <span className="text-[11px] font-bold text-pink-400 uppercase tracking-widest block mb-1">
              {currentQ.promptNumber}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* 4 Options Matrix (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQ.options.map((option) => {
              const isSelected = selectedKey === option.key;
              const isOptionCorrect = option.isCorrect;

              let btnStyle =
                'bg-[#141622]/90 border-white/5 hover:border-pink-300/30 hover:bg-[#1f2233] text-white';

              if (isSelected) {
                if (isOptionCorrect) {
                  btnStyle =
                    'bg-[#272936] border-pink-400 shadow-[0_0_20px_rgba(255,143,163,0.4)] text-pink-100 scale-[1.01]';
                } else {
                  btnStyle =
                    'bg-[#272936] border-rose-500/70 shadow-[0_0_15px_rgba(244,63,94,0.3)] text-rose-100';
                }
              }

              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => handleSelectOption(option.key)}
                  className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[90px] ${btnStyle}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-pink-300">
                        {option.key}
                      </span>
                      <p className="font-bold text-sm leading-snug">{option.text}</p>
                    </div>
                    {isSelected && (
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isOptionCorrect ? 'bg-pink-400 text-[#5f1127]' : 'bg-rose-500 text-white'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          {isOptionCorrect ? 'check' : 'close'}
                        </span>
                      </div>
                    )}
                  </div>

                  {option.subtext && (
                    <p className="text-xs text-[#dac0c3] mt-2 italic pl-8">
                      {option.subtext}
                    </p>
                  )}

                  {option.badge && isSelected && isOptionCorrect && (
                    <div className="mt-2 pl-8">
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30">
                        {option.badge}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Reaction Box */}
          {showReaction && isCurrentCorrect && (
            <div className="mt-6 p-4 rounded-xl bg-[#272936] border border-pink-400/30 shadow-inner flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentQ.correctReaction.emoji}</span>
                <div>
                  <h4 className="text-sm font-bold text-pink-200">
                    {currentQ.correctReaction.title}
                  </h4>
                  <p className="text-xs text-[#dac0c3] mt-0.5">
                    {currentQ.correctReaction.text}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="px-3 py-1 rounded-full bg-[#181b27] text-[11px] font-bold text-yellow-300 flex items-center gap-1 border border-white/5">
                  <span className="material-symbols-outlined text-[14px]">military_tech</span>
                  {currentQ.correctReaction.loreScore}
                </span>

                {!isFinalQuestion && (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-4 py-1.5 rounded-full bg-pink-400 hover:bg-pink-300 text-[#5f1127] text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Next Question →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Footer Ribbon & Progress Button */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 bg-[#1c1f2c] px-4 py-2 rounded-full border border-white/5">
              <span className="material-symbols-outlined text-[18px] text-pink-300">
                auto_stories
              </span>
              <span className="text-[11px] font-bold tracking-wider text-white">
                {allAnsweredCorrectly
                  ? 'UNLOCKED: MEMORY CAPSULE #13'
                  : 'SELECT THE LORE TRUTH TO PROCEED'}
              </span>
            </div>

            <button
              onClick={onComplete}
              disabled={!allAnsweredCorrectly}
              type="button"
              className={`group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-base shadow-[0_8px_24px_-4px_rgba(255,143,163,0.5)] transition-all ${
                allAnsweredCorrectly
                  ? 'bg-pink-400 hover:bg-pink-300 text-[#5f1127] cursor-pointer hover:scale-105 active:scale-95 animate-pulse'
                  : 'bg-white/10 text-white/40 cursor-not-allowed opacity-60'
              }`}
            >
              <span>Continue to Level 14</span>
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
