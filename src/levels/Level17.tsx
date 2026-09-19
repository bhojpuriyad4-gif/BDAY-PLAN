import React, { useState } from 'react';
import { LEVEL_17_DATA } from '../data/birthdayData';

interface Level17Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level17: React.FC<Level17Props> = ({ onComplete, onBack }) => {
  const [collectedCount, setCollectedCount] = useState<number>(
    LEVEL_17_DATA.initialCollectedCount
  );
  const [caughtStarIds, setCaughtStarIds] = useState<number[]>([]);
  const [isJarSealed, setIsJarSealed] = useState<boolean>(false);
  const [sparkleMessage, setSparkleMessage] = useState<string | null>(null);

  const handleCatchStar = (starId: number) => {
    if (caughtStarIds.includes(starId)) return;

    setCaughtStarIds((prev) => [...prev, starId]);
    setCollectedCount((prev) => {
      const next = Math.min(LEVEL_17_DATA.totalStars, prev + 1);
      if (next === LEVEL_17_DATA.totalStars) {
        setSparkleMessage('All 7 starlight wishes caught! Now tap "Keep it safe ✨" to seal the jar.');
      } else {
        setSparkleMessage(`✨ Star captured into the jar! (${next} of 7)`);
      }
      return next;
    });

    setTimeout(() => {
      setSparkleMessage(null);
    }, 3000);
  };

  const handleSealJar = () => {
    setIsJarSealed(true);
  };

  const isComplete = collectedCount >= LEVEL_17_DATA.totalStars || isJarSealed;

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-20 flex flex-col items-center select-none animate-fadeIn">
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
              Act IV • Celestial Wishes
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 17 / 21
              </span>
              <span className="text-[11px] font-medium text-[#dac0c3]">81% Unlocked</span>
            </div>
            <div className="w-full h-1.5 bg-[#181b27] rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full w-[81%] transition-all duration-500 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-pink-400">
            {[1, 2, 3, 4, 5].map((h) => (
              <span key={h} className="material-symbols-outlined text-[17px] fill-current">
                favorite
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full mt-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs w-fit">
            <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">
              Starlight Archive • Chapter {LEVEL_17_DATA.chapter}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>{LEVEL_17_DATA.title}</span>
          </h1>

          <p className="text-[#c5bed3] text-sm sm:text-base leading-relaxed max-w-2xl mt-1">
            {LEVEL_17_DATA.subtitle}
          </p>
        </div>

        {/* Catch little stars hint banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e2236] border border-pink-400/30 text-pink-200 text-xs shadow-md self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
          <span className="font-semibold">{LEVEL_17_DATA.instruction}</span>
          <span className="material-symbols-outlined text-[16px] text-pink-300 animate-spin-slow">
            flare
          </span>
        </div>
      </div>

      {/* Main Layout: Celestial Sky Box (Left/Center) + Starlight Keepsake Vault (Right) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Center: Interactive Celestial Sky Box */}
        <div className="lg:col-span-8 rounded-3xl bg-[#131625]/90 border border-white/10 p-5 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col">
          {/* Ambient Cosmic Lights */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Sky Header with Collected Stars Progress */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-300 text-[20px]">
                stars
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                Stars Collected: {collectedCount} / {LEVEL_17_DATA.totalStars} ✨
              </span>
            </div>

            {/* 7 Glowing Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: LEVEL_17_DATA.totalStars }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    i < collectedCount
                      ? 'bg-gradient-to-r from-amber-300 to-pink-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] scale-110'
                      : 'bg-white/10 border border-white/10'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Celestial Sky Canvas with Jar and Floating Stars */}
          <div className="relative w-full h-[400px] sm:h-[460px] my-6 rounded-2xl bg-gradient-to-b from-[#090b16] via-[#101224] to-[#171a2e] border border-white/10 overflow-hidden flex items-center justify-center shadow-inner starfield">
            {/* Glowing Crescent Moon */}
            <div className="absolute top-6 left-8 pointer-events-none opacity-85">
              <svg className="w-16 h-16 text-amber-100 drop-shadow-[0_0_15px_rgba(254,240,138,0.7)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.3 2a10 10 0 0 0-.19 20 10 10 0 0 0 8.52-4.75 8 8 0 1 1-8.33-15.25z" />
              </svg>
            </div>

            {/* Notification toast if star collected */}
            {sparkleMessage && (
              <div className="absolute top-4 inset-x-4 mx-auto w-fit px-4 py-1.5 rounded-full bg-pink-500/30 border border-pink-400/40 text-pink-100 text-xs font-semibold backdrop-blur-md shadow-lg animate-bounce z-20">
                {sparkleMessage}
              </div>
            )}

            {/* 3 Wandering Clickable Stars */}
            {LEVEL_17_DATA.wanderingStars.map((star) => {
              const isCaught = caughtStarIds.includes(star.id);
              if (isCaught) return null;

              return (
                <button
                  key={star.id}
                  onClick={() => handleCatchStar(star.id)}
                  style={{
                    top: star.top,
                    left: star.left,
                    right: star.right,
                    bottom: star.bottom,
                  }}
                  className={`absolute z-20 group p-3 rounded-full cursor-pointer transition-transform duration-300 hover:scale-125 focus:outline-none`}
                  title="Click to catch this wandering star!"
                  type="button"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-pink-400/30 blur-md group-hover:bg-pink-400/60 animate-ping" />
                    <span
                      className={`material-symbols-outlined text-[32px] ${star.color} drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] animate-pulse`}
                    >
                      {star.icon}
                    </span>
                    <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1b1f33] text-pink-200 border border-pink-400/40 shadow">
                      Catch Me! ✨
                    </span>
                  </div>
                </button>
              );
            })}

            {/* The Wishing Glass Jar in Center */}
            <div className="relative flex flex-col items-center z-10 select-none">
              {/* Wooden Cork Stopper */}
              <div className="w-16 h-7 rounded-t-lg bg-[#b4885c] border-2 border-[#835934] shadow-md relative z-10 flex items-center justify-center">
                {/* Tied Pink Ribbon Bow */}
                <div className="absolute -bottom-1 w-20 h-3 bg-pink-400/90 rounded-full border border-pink-300/60 shadow flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-200 border border-pink-500 shadow-sm" />
                </div>
              </div>

              {/* Glass Jar Body */}
              <div className="w-44 sm:w-52 h-64 sm:h-72 rounded-b-[40px] rounded-t-xl bg-gradient-to-b from-white/15 via-white/5 to-white/20 border-2 border-white/30 backdrop-blur-md shadow-[0_0_35px_rgba(244,114,182,0.25)] relative overflow-hidden flex flex-col items-center justify-between p-4">
                {/* Glass reflection streak */}
                <div className="absolute top-2 left-3 w-3 h-52 bg-white/20 rounded-full blur-[1px] -rotate-6 pointer-events-none" />
                <div className="absolute top-2 right-4 w-1.5 h-44 bg-white/10 rounded-full blur-[1px] rotate-6 pointer-events-none" />

                {/* Internal Swirling Magic Orb */}
                <div className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/25 to-amber-300/25 blur-xl pointer-events-none animate-pulse" />

                {/* Stars bouncing inside the jar */}
                <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-3 p-3 overflow-hidden">
                  {Array.from({ length: collectedCount }).map((_, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center animate-bounce"
                      style={{ animationDuration: `${2 + (idx % 3) * 0.5}s` }}
                    >
                      <span className="material-symbols-outlined text-[26px] text-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.9)]">
                        star
                      </span>
                    </div>
                  ))}
                </div>

                {/* Label on the Jar */}
                <div className="relative z-10 px-3 py-1 rounded-md bg-[#fdfaf3] border border-[#e4d6c4] text-[#422c23] shadow-md rotate-1 flex flex-col items-center">
                  <span className="font-caveat text-base font-bold text-pink-700">
                    for our dreams ♡
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-[#78695d]">
                    Level 17 Starlight
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row Below Sky */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-[#b8b2c7]">
              {collectedCount < LEVEL_17_DATA.totalStars
                ? 'Click the 3 wandering stars in the sky to fill the jar.'
                : 'All stars captured! The jar is glowing with infinite magic.'}
            </p>

            <button
              onClick={handleSealJar}
              className={`px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                isJarSealed
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(244,114,182,0.4)]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isJarSealed ? 'verified' : 'favorite'}
              </span>
              <span>{isJarSealed ? 'Jar Safely Sealed ♡' : 'Keep it safe ✨'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Polaroid Keepsake & Notes */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Polaroid Card */}
          <div className="rounded-3xl bg-[#161828]/95 border border-white/10 p-5 shadow-2xl relative group">
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#edd8d0]/80 border border-pink-300/30 rounded-sm shadow-sm rotate-2 pointer-events-none" />

            <div className="bg-[#0b0d17] p-3 rounded-2xl border border-white/10 shadow-inner flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative">
                <img
                  src={LEVEL_17_DATA.polaroid.imageUrl}
                  alt="Jar of wishes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-white mt-3">{LEVEL_17_DATA.polaroid.title}</h3>
              <p className="font-caveat text-xl text-pink-200 text-center my-1">
                {LEVEL_17_DATA.polaroid.quote}
              </p>
              <span className="text-[10px] text-[#8e899b] uppercase tracking-wider">
                {LEVEL_17_DATA.polaroid.sealDate}
              </span>
            </div>
          </div>

          {/* A Gentle Reminder Whimsical Note */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1d1f30] to-[#141624] border border-pink-500/20 shadow-lg relative">
            <div className="flex items-center gap-2 text-pink-300 text-xs uppercase tracking-wider font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">magic_button</span>
              <span>A Gentle Reminder</span>
            </div>
            <p className="text-sm text-[#cfc8de] leading-relaxed">
              Every light in this jar is a wish that belongs to our tomorrow. Whenever you look up at the night sky, remember that someone is wishing for your happiness with every breath.
            </p>
            <div className="mt-3 text-right">
              <span className="font-caveat text-lg text-pink-300">
                make a wish and store it safely 💫
              </span>
            </div>
          </div>

          {/* Quick Archive Stats Bento */}
          <div className="p-4 rounded-2xl bg-[#141626]/80 border border-white/5 flex items-center justify-between text-xs text-[#9d97ac]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-pink-400 text-[18px]">wb_twilight</span>
              <span>Jar Radiance: 100% Glow</span>
            </div>
            <span className="font-mono text-purple-300">Next: Level 18</span>
          </div>
        </div>
      </div>

      {/* Completion Area Banner */}
      {isComplete && (
        <div className="w-full mt-10 p-6 rounded-3xl bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-amber-500/10 border border-pink-400/30 flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl animate-fadeIn">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shrink-0 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
              <span className="material-symbols-outlined text-[26px]">stars</span>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-pink-300 uppercase block font-semibold">
                Milestone Unlocked • Celestial Keepsake
              </span>
              <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2 mt-0.5">
                <span>Wish safely stored in the stars ♡</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#cac4d7] mt-0.5 max-w-xl">
                Your magic is now woven into the night sky. The adventure continues to unfold.
              </p>
            </div>
          </div>

          <button
            onClick={onComplete}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            type="button"
          >
            <span>Continue to Level 18</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
};
