import React, { useState, useRef } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { sound } from '../utils/audio';

interface Level05Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level05: React.FC<Level05Props> = ({ onComplete, onBack }) => {
  const [attempts, setAttempts] = useState(0);
  const [isCaught, setIsCaught] = useState(false);
  const [btnPos, setBtnPos] = useState({ top: 45, left: 50 }); // percentage
  const arenaRef = useRef<HTMLDivElement | null>(null);

  const maxDodges = 4;
  const isTired = attempts >= maxDodges;

  const dodge = () => {
    if (isTired || isCaught) return;

    sound.playFlip();
    setAttempts((prev) => prev + 1);

    // Pick new safe coordinates inside bounding box (15% to 75%)
    const newTop = Math.floor(Math.random() * 55) + 20;
    const newLeft = Math.floor(Math.random() * 50) + 25;
    setBtnPos({ top: newTop, left: newLeft });
  };

  const handleButtonClick = () => {
    if (!isTired && attempts < maxDodges) {
      dodge();
      return;
    }

    // Success! Caught!
    sound.playVictory();
    setIsCaught(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader levelNumber={5} onBack={onBack} />

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-6 relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-200 mb-2 shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            ✦ SURPRISE CHALLENGE ✦
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Catch Me If You Can</span>
          <span className="text-3xl sm:text-4xl">🏃‍♀️</span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Click the button to continue! It shouldn't be too hard... right?
        </p>
      </div>

      {/* Game Arena */}
      <div
        ref={arenaRef}
        className="relative w-full h-[450px] sm:h-[500px] rounded-3xl bg-gradient-to-b from-[#111421] via-[#151826] to-[#1e1424] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between p-6"
      >
        {/* Background ambient stars */}
        <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />

        {/* Left Polaroid Keepsake */}
        <div className="absolute top-6 left-6 z-10 w-36 sm:w-40 bg-[#151826] p-2 pb-4 rounded-xl border border-white/10 shadow-xl -rotate-6 hidden sm:block">
          <div className="w-full h-28 rounded bg-black/40 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop"
              alt="Running couple"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-caveat text-xl text-pink-200 text-center mt-2">
            You always run away ♡
          </p>
        </div>

        {/* Playful Moving Button */}
        <div
          style={{
            position: 'absolute',
            top: `${btnPos.top}%`,
            left: `${btnPos.left}%`,
            transform: 'translate(-50%, -50%)',
            transition: isCaught ? 'all 0.4s ease' : 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="z-30 flex flex-col items-center"
        >
          {/* Teasing annotation above button */}
          {!isCaught && (
            <div className="absolute -top-12 -right-24 whitespace-nowrap -rotate-6 select-none pointer-events-none">
              <span className="font-caveat text-2xl sm:text-3xl text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]">
                {attempts === 0
                  ? 'Click me! ♡'
                  : attempts < maxDodges
                  ? 'Not that easy huh? 😜 ♡'
                  : 'Okay, I am tired now! 🥺 ♡'}
              </span>
            </div>
          )}

          <button
            onClick={handleButtonClick}
            onMouseEnter={dodge}
            onTouchStart={dodge}
            type="button"
            className={`px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide shadow-xl transition-all cursor-pointer flex items-center gap-2 ${
              isCaught
                ? 'bg-emerald-400 text-emerald-950 scale-110 shadow-[0_0_30px_rgba(52,211,153,0.6)]'
                : 'bg-pink-400 text-[#400014] hover:bg-pink-300 shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:scale-105 active:scale-95'
            }`}
          >
            <span>{isCaught ? 'You Caught Me! ♡' : isTired ? 'Click me now! ♡' : 'Click me! ♡'}</span>
            <span className="material-symbols-outlined text-[18px]">
              {isCaught ? 'favorite' : 'touch_app'}
            </span>
          </button>

          {/* Helper caption below button */}
          {!isCaught && attempts > 0 && (
            <span className="text-[11px] font-medium text-pink-200 bg-black/60 px-2.5 py-0.5 rounded-full mt-2 border border-white/10 shadow-sm">
              {isTired ? 'Ready to click!' : 'Almost got it!'}
            </span>
          )}
        </div>

        {/* Mascot Peeking at Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
          <div className="px-3 py-1 rounded-full bg-[#1e2232] border border-white/10 text-pink-200 text-xs font-caveat text-lg mb-1 shadow-md">
            {isCaught ? 'Yay, level unlocked! ✨' : 'Hehe, keep trying! ♡'}
          </div>
          <div className="w-16 h-12 bg-white rounded-t-full flex items-center justify-center shadow-lg relative">
            {/* Cute cat ears */}
            <div className="absolute -top-3 left-1 w-4 h-4 bg-white rotate-45 rounded-sm" />
            <div className="absolute -top-3 right-1 w-4 h-4 bg-white rotate-45 rounded-sm" />
            <span className="text-xl">🐱</span>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 px-2 text-xs text-[#b9b4c7]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-pink-400">touch_app</span>
          <span>
            Attempts: <strong className="text-pink-300 font-semibold">{attempts}</strong> — Hover or click to catch!
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-amber-300">lightbulb</span>
          <span className="italic">
            Hint: Be patient, it gets tired after {maxDodges} dodges! ♡
          </span>
        </div>
      </div>

      {/* Success Victory Card */}
      {isCaught && (
        <div className="w-full max-w-md mt-6 p-6 rounded-2xl bg-[#151826]/95 border border-pink-400/40 shadow-[0_0_30px_rgba(244,114,182,0.3)] flex flex-col items-center text-center animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300 mb-2 shadow-md">
            <span className="material-symbols-outlined text-[28px]">sentiment_very_satisfied</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Fast Reflexes! ✨</h3>
          <p className="font-caveat text-2xl text-pink-200 my-1">
            "You always find a way to my heart."
          </p>
          <button
            onClick={onComplete}
            className="mt-4 px-8 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
            type="button"
          >
            <span>CONTINUE TO LEVEL 06</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
};
