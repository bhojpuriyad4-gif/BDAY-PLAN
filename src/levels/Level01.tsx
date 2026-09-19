import React, { useState } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { sound } from '../utils/audio';

interface Level01Props {
  onComplete: () => void;
  onBack: () => void;
}

interface FloatingHeart {
  id: number;
  top: string;
  left?: string;
  right?: string;
  colorClass: string;
  glowClass: string;
  size: string;
  iconSize: string;
  sparkle?: string;
  animDuration: string;
  animDelay: string;
}

const INITIAL_HEARTS: FloatingHeart[] = [
  {
    id: 1,
    top: '18%',
    left: '16%',
    colorClass: 'text-pink-400',
    glowClass: 'shadow-[0_0_24px_rgba(244,114,182,0.6)]',
    size: 'w-14 h-14',
    iconSize: 'text-[38px]',
    sparkle: '✦',
    animDuration: '4s',
    animDelay: '0s',
  },
  {
    id: 2,
    top: '32%',
    left: '42%',
    colorClass: 'text-pink-300',
    glowClass: 'shadow-[0_0_32px_rgba(255,175,211,0.7)]',
    size: 'w-16 h-16',
    iconSize: 'text-[48px]',
    sparkle: '✨',
    animDuration: '5s',
    animDelay: '0.5s',
  },
  {
    id: 3,
    top: '22%',
    right: '22%',
    colorClass: 'text-purple-300',
    glowClass: 'shadow-[0_0_28px_rgba(221,184,255,0.65)]',
    size: 'w-14 h-14',
    iconSize: 'text-[40px]',
    sparkle: '♡',
    animDuration: '4.5s',
    animDelay: '1.2s',
  },
  {
    id: 4,
    top: '52%',
    left: '24%',
    colorClass: 'text-pink-200',
    glowClass: 'shadow-[0_0_20px_rgba(255,175,211,0.5)]',
    size: 'w-12 h-12',
    iconSize: 'text-[32px]',
    animDuration: '3.8s',
    animDelay: '0.8s',
  },
  {
    id: 5,
    top: '48%',
    right: '32%',
    colorClass: 'text-pink-400',
    glowClass: 'shadow-[0_0_30px_rgba(244,114,182,0.65)]',
    size: 'w-16 h-16',
    iconSize: 'text-[46px]',
    sparkle: '✦',
    animDuration: '4.2s',
    animDelay: '1.5s',
  },
  {
    id: 6,
    top: '12%',
    right: '10%',
    colorClass: 'text-purple-200',
    glowClass: 'shadow-[0_0_22px_rgba(221,184,255,0.5)]',
    size: 'w-12 h-12',
    iconSize: 'text-[34px]',
    animDuration: '5.2s',
    animDelay: '0.3s',
  },
  {
    id: 7,
    top: '10%',
    left: '34%',
    colorClass: 'text-pink-300',
    glowClass: 'shadow-[0_0_20px_rgba(255,175,211,0.5)]',
    size: 'w-12 h-12',
    iconSize: 'text-[32px]',
    sparkle: '✨',
    animDuration: '4.7s',
    animDelay: '1.8s',
  },
];

export const Level01: React.FC<Level01Props> = ({ onComplete, onBack }) => {
  const [collectedHearts, setCollectedHearts] = useState<number[]>([]);
  const [showVictory, setShowVictory] = useState(false);
  const targetScore = 5;

  const score = Math.min(targetScore, collectedHearts.length);

  const handleHeartClick = (id: number) => {
    if (collectedHearts.includes(id)) return;
    sound.playHeartPop();
    const nextList = [...collectedHearts, id];
    setCollectedHearts(nextList);

    if (nextList.length >= targetScore) {
      setTimeout(() => {
        sound.playVictory();
        setShowVictory(true);
      }, 350);
    }
  };

  const handleReplay = () => {
    setCollectedHearts([]);
    setShowVictory(false);
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center">
      {/* Header bar */}
      <LevelHeader
        levelNumber={1}
        onBack={onBack}
        rightSlot={
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#151826]/70 border border-white/5 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-1 text-pink-300">
              {[1, 2, 3, 4, 5].map((idx) => (
                <span
                  key={idx}
                  className={`material-symbols-outlined text-[18px] transition-all duration-300 ${
                    idx <= score ? 'text-pink-400 scale-110' : 'text-white/20'
                  }`}
                  style={{
                    fontVariationSettings: `'FILL' ${idx <= score ? 1 : 0}`,
                  }}
                >
                  favorite
                </span>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-white/90 select-none">
              {score} / {targetScore}
            </span>
            <div className="w-16 h-1.5 rounded-full bg-[#080a13] border border-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(244,114,182,0.6)]"
                style={{ width: `${(score / targetScore) * 100}%` }}
              />
            </div>
          </div>
        }
      />

      {/* Title & Mission Note */}
      <div className="text-center max-w-xl mx-auto mb-6 relative select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-200 mb-2 shadow-sm">
          <span className="text-pink-300 text-xs">✨</span>
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Mini-Challenge 01
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Catch the Hearts</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal inline-block drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Tap 5 floating hearts before they drift away into the starry midnight sky!
        </p>
      </div>

      {/* Night Sky Game Stage Container */}
      <div className="relative w-full h-[520px] md:h-[580px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#080a13] via-[#111421] to-[#1e2232] border border-white/[0.08] shadow-2xl flex items-center justify-center select-none group">
        {/* Ambient Backlight & Stardust Glows */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(244,114,182,0.18)_0%,_transparent_60%)]" />
        <div className="absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />

        {/* Twinkling Micro Constellations (Inline SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-70" xmlns="http://www.w3.org/2000/svg">
          <g className="text-pink-200" fill="currentColor">
            <circle className="animate-pulse" cx="12%" cy="22%" r="1.5" />
            <circle cx="28%" cy="14%" r="2" />
            <circle cx="45%" cy="30%" r="1.2" />
            <circle className="animate-pulse" cx="78%" cy="18%" r="2.5" />
            <circle cx="88%" cy="38%" r="1.5" />
            <circle cx="18%" cy="65%" r="1.5" />
            <circle cx="62%" cy="12%" r="1.8" />
            <circle className="animate-pulse" cx="92%" cy="72%" r="2" />
          </g>
          <g className="text-pink-200/20" stroke="currentColor" strokeDasharray="2 3" strokeWidth="0.75">
            <line x1="12%" x2="28%" y1="22%" y2="14%" />
            <line x1="28%" x2="45%" y1="14%" y2="30%" />
            <line x1="78%" x2="62%" y1="18%" y2="12%" />
          </g>
        </svg>

        {/* Hand-Drawn Arrow & Annotation (Bottom Left) */}
        <div className="absolute bottom-16 left-6 md:left-14 pointer-events-none z-20 flex flex-col items-start text-pink-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <span className="font-caveat text-3xl md:text-4xl text-pink-300 -rotate-6 font-normal drop-shadow-[0_0_10px_rgba(244,114,182,0.4)]">
            Click on the hearts! ♡
          </span>
          <svg
            className="w-16 h-14 -mt-1 ml-6 text-pink-400 opacity-90 -scale-y-100 rotate-12"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.5"
            viewBox="0 0 70 60"
          >
            <path d="M10 50 C 25 35, 45 35, 55 12" strokeDasharray="3 3" />
            <path d="M42 12 L 55 12 L 56 25" />
          </svg>
        </div>

        {/* Whimsical Encouragement (Bottom Right) */}
        <div className="absolute bottom-8 right-6 md:right-14 pointer-events-none z-20 text-right">
          <span className="font-caveat text-2xl md:text-3xl text-amber-200 drop-shadow-[0_0_10px_rgba(255,226,76,0.4)] block tracking-wider -rotate-1 font-normal">
            You got this, birthday girl! ✨
          </span>
        </div>

        {/* City Skyline Silhouette Backdrop (Bottom) */}
        <div className="absolute bottom-0 inset-x-0 h-36 pointer-events-none z-10 flex items-end">
          <svg className="w-full h-full text-[#080a13] opacity-95" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1200 180">
            <path d="M0 180 L0 140 L35 140 L35 110 L55 110 L55 140 L90 140 L90 85 L120 85 L120 140 L160 140 L160 120 L185 120 L185 140 L230 140 L230 70 L260 70 L260 50 L270 50 L270 70 L290 70 L290 140 L350 140 L350 95 L395 95 L395 140 L440 140 L440 115 L470 115 L470 140 L520 140 L520 60 L540 40 L550 40 L550 60 L570 60 L570 140 L640 140 L640 100 L680 100 L680 140 L730 140 L730 80 L765 80 L765 140 L820 140 L820 120 L860 120 L860 140 L910 140 L910 65 L935 65 L945 45 L955 65 L980 65 L980 140 L1040 140 L1040 90 L1080 90 L1080 140 L1130 140 L1130 110 L1165 110 L1165 140 L1200 140 L1200 180 Z" />
            <rect fill="#ffe24c" height="6" opacity="0.6" width="4" x="245" y="80" />
            <rect fill="#ffe24c" height="6" opacity="0.8" width="4" x="275" y="90" />
            <rect fill="#ffafd3" height="5" opacity="0.75" width="5" x="535" y="75" />
            <rect fill="#ffe24c" height="6" opacity="0.7" width="4" x="745" y="95" />
            <rect fill="#ffe24c" height="6" opacity="0.85" width="4" x="930" y="85" />
            <rect fill="#ffafd3" height="5" opacity="0.6" width="4" x="960" y="105" />
          </svg>
        </div>

        {/* Floating Hearts Field */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {INITIAL_HEARTS.map((heart) => {
            const isCollected = collectedHearts.includes(heart.id);
            return (
              <button
                key={heart.id}
                onClick={() => handleHeartClick(heart.id)}
                aria-label={`Catch Heart ${heart.id}`}
                style={{
                  top: heart.top,
                  left: heart.left,
                  right: heart.right,
                  animation: `bounce ${heart.animDuration} ease-in-out infinite ${heart.animDelay}`,
                }}
                className={`heart-btn absolute ${heart.size} rounded-full flex items-center justify-center ${
                  heart.colorClass
                } bg-[#151826]/30 backdrop-blur-sm ${heart.glowClass} hover:scale-125 active:scale-95 transition-all duration-300 cursor-pointer ${
                  isCollected ? 'scale-150 opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                type="button"
              >
                <span
                  className={`material-symbols-outlined ${heart.iconSize} drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                {heart.sparkle && (
                  <span className="absolute -top-1 -right-1 text-amber-200 text-xs animate-ping">
                    {heart.sparkle}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Victory Pop-up Overlay */}
        {showVictory && (
          <div className="absolute inset-0 z-40 bg-[#0b0e18]/85 backdrop-blur-xl flex items-center justify-center p-6 transition-all duration-500 animate-fadeIn">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#1e2232]/95 border border-white/10 shadow-2xl text-center flex flex-col items-center transform transition-transform duration-500 scale-100">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(244,114,182,0.5)]">
                <span
                  className="material-symbols-outlined text-pink-300 text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <span className="font-caveat text-4xl sm:text-5xl text-pink-300 drop-shadow-[0_0_12px_rgba(255,175,211,0.6)] font-normal">
                Level Complete! ✨
              </span>
              <p className="text-xl sm:text-2xl text-white mt-1 font-semibold">
                You caught all 5 hearts!
              </p>
              <p className="text-sm text-[#b9b4c7] mt-2 mb-6 max-w-xs italic">
                “Your smile is the brightest constellation in my entire universe.”
              </p>

              {/* Reward Polaroid Keepsake */}
              <div className="w-48 bg-[#2c3144] p-2.5 pb-5 rounded-lg border border-white/10 shadow-xl -rotate-2 mb-6 hover:rotate-0 transition-transform">
                <div className="w-full h-32 rounded bg-[#151826] overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Starlit memory"
                    src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=600&auto=format&fit=crop"
                  />
                  <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-[#080a13]/80 text-purple-200 text-[10px] font-medium">
                    Memory #01
                  </div>
                </div>
                <p className="font-caveat text-xl text-pink-200 text-center mt-2.5">
                  Starlit walks with you ♡
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={handleReplay}
                  className="flex-1 px-4 py-3 rounded-full bg-[#151826]/80 border border-white/10 text-white font-semibold text-sm hover:bg-[#282c3c] transition-all shadow-sm cursor-pointer"
                  type="button"
                >
                  Play Again
                </button>
                <button
                  onClick={handleContinue}
                  className="flex-1 flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(244,114,182,0.5)] transition-all cursor-pointer"
                  type="button"
                >
                  <span>Continue to Level 02</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Milestone Story Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-[#151826]/60 border border-white/[0.06] backdrop-blur-md shadow-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-pink-300 text-[24px]">favorite</span>
          <div>
            <h4 className="text-sm text-white font-semibold">Milestone Clue</h4>
            <p className="text-xs text-[#b9b4c7] mt-0.5 leading-relaxed">
              Catching hearts unlocks genuine notes and sweet photo memories from our archives.
            </p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#151826]/60 border border-white/[0.06] backdrop-blur-md shadow-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-purple-300 text-[24px]">timer</span>
          <div>
            <h4 className="text-sm text-white font-semibold">No Time Limit</h4>
            <p className="text-xs text-[#b9b4c7] mt-0.5 leading-relaxed">
              Take your sweet time, listen to the music, and tap at your own romantic pace.
            </p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#151826]/60 border border-white/[0.06] backdrop-blur-md shadow-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-amber-200 text-[24px]">cake</span>
          <div>
            <h4 className="text-sm text-white font-semibold">21 Surprises Ahead</h4>
            <p className="text-xs text-[#b9b4c7] mt-0.5 leading-relaxed">
              Surprise 01 of 21 is just the spark of tonight's interactive adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
