import React, { useState } from 'react';
import { LEVEL_11_STARS, LEVEL_11_KEEPSAKE } from '../data/birthdayData';

interface Level11Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level11: React.FC<Level11Props> = ({ onComplete, onBack }) => {
  // Current connected count (starts at 1 with Star 1 activated, target is Star 2, or start at 4 if mimicking Stitch preview)
  // Let's start at 1 so the user gets to tap through 2, 3, 4, 5, 6, 7!
  const [connectedCount, setConnectedCount] = useState<number>(1);
  const totalStars = 7;
  const isComplete = connectedCount >= totalStars;

  const handleStarClick = (starId: number) => {
    if (starId === connectedCount + 1) {
      setConnectedCount((prev) => prev + 1);
    }
  };

  const nextStarIndex = Math.min(connectedCount + 1, totalStars);

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
              Act III • Chapter Stars
            </span>
          </div>
        </div>

        {/* Heart Gauges & Stage Tracker */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 11 / 21
              </span>
              <span className="font-script-whisper text-purple-300 text-xs">
                52% journey
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#313442] overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 shadow-[0_0_12px_rgba(255,143,163,0.8)] transition-all duration-700"
                style={{ width: '52.38%' }}
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

      {/* Level Header Section */}
      <div className="relative mt-2 mb-6 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#272936] text-pink-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-pink-500/20">
          <span className="material-symbols-outlined text-[14px] animate-spin">
            auto_awesome
          </span>
          Memory Coordinate • 11
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center justify-center flex-wrap gap-x-2">
          Our Constellation{' '}
          <span className="font-caveat text-pink-300 drop-shadow-[0_0_10px_rgba(255,186,195,0.6)]">
            ♡
          </span>
        </h1>
        <p className="font-script-whisper text-purple-200 mt-1 text-base sm:text-lg">
          Somehow, all these little moments became us. ✨
        </p>
        <div className="flex items-center gap-1.5 mt-2 text-[#dac0c3] text-xs sm:text-sm bg-[#0b0e19]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-sm">
          <span className="material-symbols-outlined text-[16px] text-yellow-300">
            touch_app
          </span>
          <span>Connect the stars (Tap each glowing star in sequence)</span>
        </div>
      </div>

      {/* Interactive Canvas & Stage Arena */}
      <div className="relative w-full max-w-5xl mx-auto px-1 sm:px-4">
        {/* Whimsical Scrapbook Floating Doodles (Desktop Wings) */}
        <div className="hidden lg:flex flex-col items-end absolute -left-16 top-24 z-20 pointer-events-none transform -rotate-6">
          <span className="font-script-whisper text-pink-300 text-xl select-none drop-shadow-[0_2px_8px_rgba(255,186,195,0.4)]">
            Look closely... ♡
          </span>
          <svg
            className="w-16 h-12 text-pink-300/70 mt-1 mr-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 60 40"
          >
            <path d="M 5,5 Q 35,10 45,30" />
            <path d="M 38,28 L 46,31 L 44,20" />
          </svg>
        </div>

        <div className="hidden lg:flex flex-col items-start absolute -right-16 top-40 z-20 pointer-events-none transform rotate-3">
          <svg
            className="w-16 h-14 text-purple-300/70 mb-1 ml-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 60 50"
          >
            <path d="M 50,40 Q 20,35 12,12" />
            <path d="M 10,22 L 12,12 L 22,14" />
          </svg>
          <span className="font-script-whisper text-purple-200 text-base max-w-[190px] select-none leading-tight drop-shadow-[0_2px_8px_rgba(221,184,255,0.4)]">
            Maybe this was always meant to connect. ✨
          </span>
        </div>

        {/* Star Map Stage Viewport */}
        <div
          className="relative w-full h-[480px] sm:h-[550px] rounded-2xl bg-[#0b0e19] border border-white/10 overflow-hidden shadow-[0_16px_50px_-10px_rgba(0,0,0,0.8)] select-none"
          id="starmap-container"
        >
          {/* Ambient Glows Behind Canvas */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#14152e] via-[#0d1021] to-[#080912]" />
          <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-[90px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-600/15 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0b0e19] via-transparent to-transparent pointer-events-none" />

          {/* Crescent Moon & Stars in Sky */}
          <div className="absolute top-6 right-10 flex items-center justify-center pointer-events-none opacity-85">
            <svg
              className="w-12 sm:w-14 h-12 sm:h-14 drop-shadow-[0_0_15px_rgba(255,223,155,0.6)]"
              fill="none"
              viewBox="0 0 50 50"
            >
              <path
                d="M 32 8 C 22 10 16 18 16 28 C 16 38 24 45 35 44 C 20 45 10 32 12 21 C 13 14 18 9 32 8 Z"
                fill="#ffdf9b"
              />
              <circle cx="34" cy="18" fill="#ffffff" opacity="0.8" r="1" />
              <circle cx="28" cy="32" fill="#ffffff" opacity="0.6" r="1.5" />
            </svg>
          </div>

          {/* Dreamy Soft Clouds */}
          <svg
            className="absolute -bottom-6 left-0 right-0 w-full h-32 sm:h-36 opacity-30 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 200"
          >
            <path
              d="M0,130 C150,90 280,140 400,110 C550,70 700,130 850,100 C1000,70 1120,120 1200,100 L1200,200 L0,200 Z"
              fill="#62259b"
            />
            <path
              d="M0,150 C180,120 320,160 480,130 C640,100 780,150 940,120 C1080,100 1150,140 1200,130 L1200,200 L0,200 Z"
              fill="#181b27"
            />
          </svg>

          {/* Distant City Silhouette Skyline */}
          <svg
            className="absolute bottom-0 inset-x-0 w-full h-14 sm:h-16 opacity-40 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 800 60"
          >
            <path
              d="M0,60 L0,48 L20,48 L20,38 L32,38 L32,48 L55,48 L65,30 L75,30 L75,48 L110,48 L120,22 L128,22 L132,48 L170,48 L170,35 L190,35 L195,15 L200,35 L220,35 L220,48 L260,48 L275,28 L290,28 L300,48 L350,48 L360,20 L370,20 L375,48 L420,48 L430,32 L445,32 L450,48 L500,48 L510,12 L515,12 L525,48 L570,48 L580,36 L595,36 L600,48 L640,48 L655,26 L670,26 L675,48 L720,48 L730,34 L745,34 L750,48 L800,48 L800,60 Z"
              fill="#0b0e19"
            />
          </svg>

          {/* Twinkling Micro Stars */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="material-symbols-outlined text-[10px] text-purple-300/40 absolute top-[15%] left-[12%] animate-ping" style={{ animationDuration: '4s' }}>
              star
            </span>
            <span className="material-symbols-outlined text-[12px] text-yellow-300/50 absolute top-[28%] left-[78%] animate-pulse" style={{ animationDuration: '3s' }}>
              star
            </span>
            <span className="material-symbols-outlined text-[8px] text-pink-300/60 absolute top-[62%] left-[22%] animate-ping" style={{ animationDuration: '5s' }}>
              star
            </span>
            <span className="material-symbols-outlined text-[10px] text-purple-300/30 absolute top-[44%] left-[88%] animate-pulse">
              star
            </span>
            <span className="material-symbols-outlined text-[9px] text-pink-300/40 absolute top-[75%] left-[74%]">
              star
            </span>
            <span className="material-symbols-outlined text-[10px] text-white/30 absolute top-[12%] left-[45%] animate-pulse" style={{ animationDuration: '2.5s' }}>
              star
            </span>
          </div>

          {/* HUD Mini Banner Counter */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1f2c]/85 backdrop-blur-md border border-white/10 shadow-md">
            <span className="material-symbols-outlined text-[16px] text-yellow-300 animate-bounce">
              auto_awesome
            </span>
            <span className="text-[11px] font-bold tracking-widest text-white uppercase" id="star-counter">
              {isComplete
                ? 'CONSTELLATION COMPLETE ♡ (7/7)'
                : `${connectedCount} / ${totalStars} STARS CONNECTED`}
            </span>
          </div>

          {/* Constellation SVG Connections Layer */}
          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            id="constellation-svg"
            preserveAspectRatio="none"
            viewBox="0 0 1000 600"
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Faint Guide Lines */}
            <path
              d="M 300 156 L 400 108 L 500 168 L 600 108 L 700 156 L 640 312 L 500 456 L 300 156"
              fill="none"
              stroke="#dac0c3"
              strokeDasharray="4 6"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />

            {/* Glowing Active Neon Pink Lines */}
            <g filter="url(#glow)">
              {/* Line 1-2 */}
              <line
                x1="300"
                y1="156"
                x2="400"
                y2="108"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${connectedCount >= 2 ? 'opacity-100' : 'opacity-10'}`}
                strokeDasharray={connectedCount >= 2 ? 'none' : '5 5'}
              />
              {/* Line 2-3 */}
              <line
                x1="400"
                y1="108"
                x2="500"
                y2="168"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${connectedCount >= 3 ? 'opacity-100' : 'opacity-10'}`}
                strokeDasharray={connectedCount >= 3 ? 'none' : '5 5'}
              />
              {/* Line 3-4 */}
              <line
                x1="500"
                y1="168"
                x2="600"
                y2="108"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${connectedCount >= 4 ? 'opacity-100' : 'opacity-10'}`}
                strokeDasharray={connectedCount >= 4 ? 'none' : '5 5'}
              />
              {/* Line 4-5 */}
              <line
                x1="600"
                y1="108"
                x2="700"
                y2="156"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${connectedCount >= 5 ? 'opacity-100' : 'opacity-15'}`}
                strokeDasharray={connectedCount >= 5 ? 'none' : '5 5'}
              />
              {/* Line 5-6 */}
              <line
                x1="700"
                y1="156"
                x2="640"
                y2="312"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${connectedCount >= 6 ? 'opacity-100' : 'opacity-15'}`}
                strokeDasharray={connectedCount >= 6 ? 'none' : '5 5'}
              />
              {/* Line 6-7 */}
              <line
                x1="640"
                y1="312"
                x2="500"
                y2="456"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${connectedCount >= 7 ? 'opacity-100' : 'opacity-15'}`}
                strokeDasharray={connectedCount >= 7 ? 'none' : '5 5'}
              />
              {/* Line 7-1 (Closing heart) */}
              <line
                x1="500"
                y1="456"
                x2="300"
                y2="156"
                stroke="#ff8fa3"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`transition-all duration-500 ${isComplete ? 'opacity-100' : 'opacity-15'}`}
                strokeDasharray={isComplete ? 'none' : '5 5'}
              />
            </g>
          </svg>

          {/* 7 Glowing Star Interactive Nodes Formed into a Heart Shape */}
          {LEVEL_11_STARS.map((star) => {
            const isConnected = connectedCount >= star.id;
            const isTarget = star.id === connectedCount + 1;

            return (
              <button
                key={star.id}
                type="button"
                onClick={() => handleStarClick(star.id)}
                style={{
                  top: star.topPct,
                  left: star.leftPct,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute z-20 rounded-full flex items-center justify-center font-bold text-xs transition-all focus:outline-none cursor-pointer ${
                  isConnected
                    ? 'w-11 h-11 bg-[#ffbac3] text-[#5f1127] shadow-[0_0_22px_rgba(255,186,195,1)] hover:scale-125'
                    : isTarget
                    ? 'w-12 h-12 bg-[#272936] hover:bg-pink-500/30 text-[#edc157] shadow-[0_0_20px_rgba(237,193,87,0.8)] scale-110 animate-pulse border-2 border-yellow-300'
                    : 'w-10 h-10 bg-[#272936]/70 text-[#dac0c3]/70 hover:scale-105 border border-white/5'
                }`}
                title={`Star ${star.id}`}
              >
                <span className="relative z-10">{star.id}</span>
                {isConnected && (
                  <span className="absolute inset-0 rounded-full bg-pink-400/40 animate-ping" />
                )}
                {isTarget && (
                  <>
                    <span className="absolute -inset-1 rounded-full bg-yellow-400/30 animate-ping" />
                    <span className="absolute inset-0 rounded-full bg-yellow-400/20" />
                  </>
                )}
              </button>
            );
          })}

          {/* Floating Constellation Prompt Ribbon in Sky */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#272936]/85 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-white/10">
            <span className="font-script-whisper text-pink-300 text-xs sm:text-sm">
              {isComplete
                ? 'Constellation completed with stardust ♡'
                : `Next: Tap Star ${nextStarIndex} to weave our sky`}
            </span>
            <span className="material-symbols-outlined text-[16px] text-purple-300 animate-pulse">
              {isComplete ? 'auto_awesome' : 'north_east'}
            </span>
          </div>
        </div>
      </div>

      {/* Scrapbook Polaroid Keepsake & Revealed Message Card */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto w-full px-2">
        {/* Polaroid Keepsake Card */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative bg-white text-[#0b0e19] p-3 pb-6 rounded-lg shadow-[0_16px_35px_rgba(0,0,0,0.5)] transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-64 max-w-full">
            {/* Tape decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#ffdf9b]/40 backdrop-blur-xs rounded-xs transform -rotate-2" />
            <div className="w-full h-56 rounded-xs overflow-hidden bg-[#181b27]">
              <img
                src={LEVEL_11_KEEPSAKE.imageUrl}
                alt="Midnight Stargazing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-script-whisper text-gray-900 text-base font-bold">
                {LEVEL_11_KEEPSAKE.polaroidTitle}
              </p>
              <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">
                {LEVEL_11_KEEPSAKE.coordinates}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Message Card & Completion Transition */}
        <div className="md:col-span-8 flex flex-col gap-4">
          {/* Revealed Note Card */}
          <div className="p-6 rounded-2xl bg-[#181b27]/90 border border-white/10 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-pink-400 text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300">
                Act III • Level 11 Revealed Message
              </span>
            </div>
            <p className="font-script-whisper text-pink-200 text-xl sm:text-2xl leading-relaxed mb-2">
              {LEVEL_11_KEEPSAKE.revealedTitle}
            </p>
            <p className="text-sm text-[#dac0c3] leading-relaxed">
              {LEVEL_11_KEEPSAKE.revealedStory}
            </p>
          </div>

          {/* Action Footer Strip & Level Progress Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-2 bg-[#1c1f2c] px-4 py-2 rounded-full border border-white/5">
              <span
                className="material-symbols-outlined text-[18px] text-yellow-300 animate-spin"
                style={{ animationDuration: '4s' }}
              >
                verified
              </span>
              <span className="text-[11px] font-bold tracking-wider text-white">
                {isComplete ? 'LEVEL COMPLETE ✨' : 'WEAVE THE CONSTELLATION TO UNLOCK'}
              </span>
            </div>

            <button
              onClick={onComplete}
              disabled={!isComplete}
              type="button"
              className={`group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-base shadow-[0_8px_24px_-4px_rgba(255,143,163,0.5)] transition-all ${
                isComplete
                  ? 'bg-pink-400 hover:bg-pink-300 text-[#5f1127] cursor-pointer hover:scale-105 active:scale-95 animate-pulse'
                  : 'bg-white/10 text-white/40 cursor-not-allowed opacity-60'
              }`}
            >
              <span>Continue to Level 12</span>
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
