import React, { useState } from 'react';
import { LEVEL_21_DATA } from '../data/birthdayData';
import { Level21ConstellationMoment } from '../types';

interface Level21Props {
  onComplete: () => void;
  onBack: () => void;
  onNavigateToMemories?: () => void;
}

export const Level21: React.FC<Level21Props> = ({
  onComplete,
  onBack,
  onNavigateToMemories,
}) => {
  const [selectedMoment, setSelectedMoment] = useState<Level21ConstellationMoment | null>(null);
  const [candlesBlown, setCandlesBlown] = useState<boolean>(false);
  const [revealedGiftHint, setRevealedGiftHint] = useState<boolean>(false);
  const [wishMade, setWishMade] = useState<boolean>(false);

  const handleMakeWish = () => {
    setWishMade(true);
    onComplete();
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-24 flex flex-col items-center select-none animate-fadeIn">
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
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
              Act VI • The Grand Finale
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 21 / 21
              </span>
              <span className="text-[11px] font-medium text-amber-300">100% Ascended</span>
            </div>
            <div className="w-full h-1.5 bg-[#181b27] rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 rounded-full w-full shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-pink-400">
            {[1, 2, 3].map((h) => (
              <span key={h} className="material-symbols-outlined text-[18px] fill-current">
                favorite
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Window with Starlight Room & Warm Atmosphere */}
      <div className="w-full mt-4 mb-10 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#18192e] to-[#0f111f] shadow-2xl relative">
        {/* Hero Background Image */}
        <div className="relative w-full h-[320px] sm:h-[400px]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBx3ERcN3t8oJN-AlyrKhheLOx2CggLPSEql3gB-g9BswcHqWJa8tMvCRbjCoDxzMPoA0k6BjGOZx7kzHM4bA13u0QQoPTuELttlCEhlL2xk5shB3P42Wm5eF5R-r9W1wMV1PYETaolneTnYfp9mOIkUAwLAlCX7WocSQsS09vU5qhfPvONfdgBLSDL55kXiDBmPq_lgtJKV4tmhTRX0kQkGhftUzOGjq2e8g7u4weenbglZaOjbH9"
            alt="Starlight city view"
            className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f111f] via-[#0f111f]/60 to-transparent" />

          {/* Floating Content Over Hero */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-200 text-xs shadow-lg mb-3 backdrop-blur-md">
              <span className="text-pink-300">✦</span>
              <span className="font-semibold uppercase tracking-widest text-[11px]">
                WELCOME TO LEVEL 21
              </span>
              <span className="text-pink-300">✦</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]">
              The Final <span className="font-caveat text-pink-300 font-bold">Chapter</span> ♡
            </h1>

            <p className="font-caveat text-2xl sm:text-3xl text-pink-200 mt-2 max-w-xl drop-shadow">
              {LEVEL_21_DATA.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#ddd7eb] mt-3 font-medium max-w-md bg-black/40 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              {LEVEL_21_DATA.starlightQuote}
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 1: THE 21 MOMENTS CONSTELLATION
          ========================================== */}
      <div className="w-full mb-12 rounded-3xl bg-[#131625]/90 border border-white/10 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">stars</span>
              <span>Constellation of 21 Milestones</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Every Step That Brought You Here
            </h2>
          </div>
          <span className="text-xs text-[#9d97ac] font-mono bg-white/5 px-3 py-1.5 rounded-full border border-white/5 self-start sm:self-auto">
            Tap any star to view memory
          </span>
        </div>

        {/* 21 Moments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
          {LEVEL_21_DATA.moments.map((moment) => {
            const isCrown = moment.isCrown;
            return (
              <div
                key={moment.id}
                onClick={() => setSelectedMoment(moment)}
                className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between min-h-[110px] group ${
                  isCrown
                    ? 'bg-gradient-to-b from-amber-500/20 to-pink-500/20 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105'
                    : 'bg-[#181a2b]/80 border-white/10 hover:border-pink-400/40 hover:bg-[#1f2238] hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-[#8e899b]">
                  <span>#{moment.numberStr}</span>
                  {isCrown && (
                    <span className="text-amber-300 text-[12px] font-bold">👑</span>
                  )}
                </div>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 my-1 ${
                    isCrown
                      ? 'bg-amber-400 text-amber-950 shadow-[0_0_10px_rgba(251,191,36,0.8)]'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {moment.icon}
                  </span>
                </div>

                <div className="w-full">
                  <span className="text-xs font-bold text-white group-hover:text-pink-200 block truncate">
                    {moment.title}
                  </span>
                  <span className="text-[9px] text-[#9a94a6] truncate block">
                    {moment.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Moment Inspection Modal if tapped */}
      {selectedMoment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-[#1b1e32] border border-pink-400/30 p-6 text-center shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 mx-auto mb-3 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
              <span className="material-symbols-outlined text-[24px]">
                {selectedMoment.icon}
              </span>
            </div>
            <span className="text-[10px] font-mono text-pink-300 uppercase tracking-widest font-semibold">
              Milestone #{selectedMoment.numberStr}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">{selectedMoment.title}</h3>
            <p className="text-xs text-[#b8b2c7] mt-1 mb-4">{selectedMoment.tag}</p>
            <p className="text-sm text-[#dfd9ed] leading-relaxed italic bg-white/5 p-3 rounded-xl border border-white/5">
              “One of the 21 reasons this journey belongs to you. Every moment was handcrafted with all my love.”
            </p>
            <button
              onClick={() => setSelectedMoment(null)}
              className="mt-5 w-full py-2.5 rounded-full bg-pink-500 hover:bg-pink-400 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
          SECTION 2: FINAL HANDWRITTEN BIRTHDAY LETTER
          ========================================== */}
      <div className="w-full mb-12 rounded-3xl bg-[#fbf6ec] text-[#2c2420] p-6 sm:p-10 shadow-2xl border-4 border-[#e9dfcc] relative overflow-hidden">
        {/* Subtle washi tape & stamp accents */}
        <div className="absolute -top-3 right-12 w-32 h-6 bg-[#f7d6dc]/90 border border-pink-300/40 rounded-sm shadow rotate-2 pointer-events-none" />
        <div className="absolute top-6 right-6 flex flex-col items-center p-2 rounded bg-[#f5ecdd] border border-dashed border-[#b89574] text-[#865d3d] text-[10px] font-mono">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span className="font-bold">LETTER NO. 21</span>
        </div>

        {/* Letter Marginalia */}
        <div className="flex items-center justify-between border-b border-[#e1d3be] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8d796b]">
            <span className="material-symbols-outlined text-[16px]">edit_note</span>
            <span>written with so much love ✎...</span>
          </div>
          <span className="font-caveat text-xl text-pink-700 mr-24 sm:mr-28">
            forever your #1 fan ♡
          </span>
        </div>

        {/* Salutation */}
        <h2 className="text-2xl sm:text-3xl font-bold font-caveat text-[#4a2e2b] mb-4">
          {LEVEL_21_DATA.finalLetter.salutation}
        </h2>

        {/* Letter Body Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#3a2c26]">
          <p>{LEVEL_21_DATA.finalLetter.p1}</p>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f3e9d8] border-l-4 border-pink-500 font-caveat text-xl sm:text-2xl text-[#522a30]">
            {LEVEL_21_DATA.finalLetter.p2}
          </div>
          <p>{LEVEL_21_DATA.finalLetter.p3}</p>
        </div>

        {/* Sign-off */}
        <div className="mt-8 pt-6 border-t border-[#e1d3be] flex flex-col items-end">
          <span className="font-caveat text-2xl text-[#522a30]">
            {LEVEL_21_DATA.finalLetter.closing}
          </span>
          <span className="font-caveat text-3xl font-bold text-pink-600 drop-shadow-sm">
            {LEVEL_21_DATA.finalLetter.senderName} ♡
          </span>
        </div>
      </div>

      {/* ==========================================
          SECTION 3: BIRTHDAY CELEBRATION & 21 CANDLES CAKE
          ========================================== */}
      <div className="w-full mb-12 rounded-3xl bg-[#131625]/90 border border-white/10 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Cake Centerpiece & Hanging Polaroids */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* Hanging Polaroids Pair */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {LEVEL_21_DATA.cakeScene.hangingPolaroids.map((polaroid, idx) => (
              <div
                key={idx}
                className={`bg-[#0c0e18] p-2.5 rounded-xl border border-white/15 shadow-xl transition-transform hover:scale-105 ${polaroid.rotation}`}
              >
                <div className="w-28 sm:w-36 aspect-[4/3] rounded-lg overflow-hidden bg-black/40">
                  <img
                    src={polaroid.imageUrl}
                    alt={polaroid.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-caveat text-sm text-pink-200 block text-center mt-1.5">
                  {polaroid.caption}
                </span>
              </div>
            ))}
          </div>

          {/* Birthday Cake Image */}
          <div className="relative w-56 sm:w-64 aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_30px_rgba(251,191,36,0.3)] group">
            <img
              src={LEVEL_21_DATA.cakeScene.cakeImageUrl}
              alt="Birthday cake with 21 candles"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {candlesBlown && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-3">
                <span className="material-symbols-outlined text-amber-300 text-[36px] animate-bounce">
                  sparkles
                </span>
                <span className="font-caveat text-xl text-white font-bold">
                  Candles Blown Out!
                </span>
                <span className="text-[10px] text-pink-200">Your wish has been cast ♡</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Midnight Ritual & Blow Candles Action */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs w-fit">
            <span className="material-symbols-outlined text-[15px]">cake</span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">
              {LEVEL_21_DATA.cakeScene.wishesBadge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            {LEVEL_21_DATA.cakeScene.ritualHeading}
          </h3>

          <p className="text-xs sm:text-sm text-[#cfc8de] leading-relaxed">
            {LEVEL_21_DATA.cakeScene.ritualText}
          </p>

          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-2xl bg-[#1a1d2e] border border-white/5 text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                {LEVEL_21_DATA.cakeScene.yearsRadiance}
              </span>
              <span className="block text-[11px] text-[#9d97ac] mt-1 uppercase font-semibold">
                Years of Radiance
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1a1d2e] border border-white/5 text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-pink-300 font-mono">
                {LEVEL_21_DATA.cakeScene.momentsAhead}
              </span>
              <span className="block text-[11px] text-[#9d97ac] mt-1 uppercase font-semibold">
                Moments Ahead
              </span>
            </div>
          </div>

          <button
            onClick={handleBlowCandles}
            disabled={candlesBlown}
            className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
              candlesBlown
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 cursor-default'
                : 'bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 hover:from-amber-300 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(251,191,36,0.4)]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              {candlesBlown ? 'done_all' : 'air'}
            </span>
            <span>{candlesBlown ? 'Candles Blown Out ♡' : 'Blow Out the 21 Candles 🎂'}</span>
          </button>
        </div>
      </div>

      {/* ==========================================
          SECTION 4: PHYSICAL GIFT CONNECTION CARD
          ========================================== */}
      <div className="w-full mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-900/25 via-purple-900/25 to-[#1a1d2e] border border-pink-400/30 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shrink-0 shadow-[0_0_18px_rgba(244,114,182,0.4)]">
            <span className="material-symbols-outlined text-[30px]">card_giftcard</span>
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-pink-300 uppercase block font-semibold">
              Real World Crossover • Tangible Love
            </span>
            <h4 className="font-caveat text-2xl sm:text-3xl text-white mt-0.5">
              {LEVEL_21_DATA.offlineGift.heading}
            </h4>
            <p className="text-xs sm:text-sm text-[#cac4d7] mt-1 max-w-xl leading-relaxed">
              {LEVEL_21_DATA.offlineGift.text}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
          <button
            onClick={() => setRevealedGiftHint(true)}
            className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(244,114,182,0.4)] flex items-center gap-2 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">redeem</span>
            <span>{LEVEL_21_DATA.offlineGift.buttonLabel}</span>
          </button>

          {revealedGiftHint && (
            <div className="px-4 py-2 rounded-xl bg-[#1b1e32] border border-amber-400/30 text-amber-200 text-xs font-semibold shadow animate-fadeIn text-center">
              {LEVEL_21_DATA.offlineGift.secretHint}
            </div>
          )}
        </div>
      </div>

      {/* ==========================================
          SECTION 5: FINAL WISH & GRAND COMPLETION
          ========================================== */}
      <div className="w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#191c2f] via-[#121422] to-[#0a0c16] border-2 border-pink-400/40 text-center shadow-[0_0_50px_rgba(244,114,182,0.3)] relative overflow-hidden flex flex-col items-center">
        {/* Heart Pulse Centerpiece */}
        <button
          onClick={handleMakeWish}
          className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_35px_rgba(244,114,182,0.8)] transition-transform hover:scale-110 cursor-pointer mb-6"
          type="button"
          aria-label="Make birthday wish"
        >
          <div className="absolute inset-0 rounded-full bg-pink-400/40 animate-ping pointer-events-none" />
          <span className="material-symbols-outlined text-[44px] sm:text-[52px] fill-current">
            favorite
          </span>
        </button>

        <span className="text-xs font-mono tracking-widest text-pink-300 uppercase font-bold">
          {wishMade ? 'WISH RECORDED IN THE STARS' : 'TAP TO MAKE YOUR 21ST WISH 💫'}
        </span>

        {wishMade ? (
          <p className="font-caveat text-3xl sm:text-4xl text-pink-200 mt-2 max-w-xl animate-fadeIn">
            {LEVEL_21_DATA.finalWishMessage}
          </p>
        ) : (
          <p className="text-xs sm:text-sm text-[#b9b3c7] mt-1 max-w-md">
            Close your eyes, take a breath, and tap the glowing heart above to seal your 21st birthday wish into our forever constellation.
          </p>
        )}

        <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 mb-3">
            <span className="material-symbols-outlined text-[15px]">check_circle</span>
            21 / 21 Levels Complete • Adventure Ascended
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            {LEVEL_21_DATA.completionTitle}
          </h3>

          <p className="text-xs sm:text-sm text-[#cfc8de] leading-relaxed mt-3">
            {LEVEL_21_DATA.completionText}
          </p>
        </div>

        {/* Final Navigation Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10 cursor-pointer flex items-center gap-2"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">dashboard</span>
            <span>Return to Dashboard</span>
          </button>

          {onNavigateToMemories && (
            <button
              onClick={onNavigateToMemories}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(244,114,182,0.5)] cursor-pointer flex items-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">auto_stories</span>
              <span>Open Memories Vault 📖</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
