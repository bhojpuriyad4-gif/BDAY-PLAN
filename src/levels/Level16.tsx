import React, { useState } from 'react';
import { LEVEL_16_DATA } from '../data/birthdayData';
import { Level16Letter } from '../types';

interface Level16Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level16: React.FC<Level16Props> = ({ onComplete, onBack }) => {
  const [openedLetterIds, setOpenedLetterIds] = useState<string[]>(['miss']);
  const [activeLetter, setActiveLetter] = useState<Level16Letter | null>(null);

  const handleOpenLetter = (letter: Level16Letter) => {
    setActiveLetter(letter);
    if (!openedLetterIds.includes(letter.id)) {
      setOpenedLetterIds((prev) => [...prev, letter.id]);
    }
  };

  const isAnyLetterRead = openedLetterIds.length > 0;

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
              Act IV • Love & Magic
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 16 / 21
              </span>
              <span className="text-[11px] font-medium text-[#dac0c3]">76% Unlocked</span>
            </div>
            <div className="w-full h-1.5 bg-[#181b27] rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full w-[76%] transition-all duration-500 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
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

      {/* Main Header & Soft Intro */}
      <div className="w-full mt-4 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs w-fit">
            <span className="material-symbols-outlined text-[15px]">mail</span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">
              Cozy Correspondence • Chapter {LEVEL_16_DATA.chapter}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>Letters From Me</span>
            <span className="text-pink-400 font-caveat text-4xl sm:text-5xl drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
              ♡
            </span>
          </h1>

          <p className="text-[#c5bed3] text-sm sm:text-base leading-relaxed max-w-2xl mt-1">
            {LEVEL_16_DATA.subtitle}
          </p>
        </div>

        {/* Handwritten gentle note card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1d1f30]/90 to-[#141624]/90 border border-pink-500/20 relative shadow-lg">
          <div className="flex items-center gap-2 text-pink-300 text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="material-symbols-outlined text-[16px]">edit_note</span>
            <span>A Gentle Note</span>
          </div>
          <p className="font-caveat text-xl sm:text-2xl text-pink-200 leading-snug">
            {LEVEL_16_DATA.gentleNote}
          </p>
          <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-pink-300/80">
            <span className="font-comfortaa text-[11px]">tucked safely away</span>
            <span className="material-symbols-outlined text-[14px] text-pink-400 animate-pulse">
              favorite
            </span>
          </div>
        </div>
      </div>

      {/* The Nightstand Desk Container */}
      <div className="w-full rounded-3xl bg-[#131625]/85 border border-white/10 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Desk Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
              <span className="material-symbols-outlined text-[22px]">mark_email_read</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">
                {LEVEL_16_DATA.deskTitle}
              </h2>
              <p className="text-xs text-[#9d97ac] font-medium">
                {LEVEL_16_DATA.deskSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-1.5 rounded-full bg-[#1e2236] border border-white/10 text-xs font-semibold text-pink-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-pink-400">markunread_mailbox</span>
              <span>
                Letters Read: {openedLetterIds.length} / {LEVEL_16_DATA.letters.length}
              </span>
            </div>
          </div>
        </div>

        {/* Letters & Keepsake Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {LEVEL_16_DATA.letters.map((letter) => {
            const isRead = openedLetterIds.includes(letter.id);

            return (
              <div
                key={letter.id}
                onClick={() => handleOpenLetter(letter)}
                className={`group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[260px] overflow-hidden ${
                  isRead
                    ? 'bg-gradient-to-br from-[#1c2035]/95 to-[#16192b]/95 border-pink-500/30 shadow-[0_0_25px_rgba(244,114,182,0.12)] hover:border-pink-400/60 hover:-translate-y-1'
                    : 'bg-gradient-to-br from-[#171929]/90 to-[#121422]/90 border-white/10 hover:border-pink-500/30 hover:bg-[#1a1e32] hover:-translate-y-1 shadow-lg'
                }`}
              >
                {/* Vintage postal stamp top right */}
                <div className="absolute top-4 right-4 flex flex-col items-center p-1.5 rounded bg-[#10121d] border border-dashed border-pink-400/40 text-[10px] text-pink-300 shadow-sm">
                  <span className="material-symbols-outlined text-[15px]">{letter.stampIcon}</span>
                  <span className="font-mono text-[9px] font-bold tracking-tighter mt-0.5">
                    {letter.stampText}
                  </span>
                </div>

                {/* Envelope Number & Badge */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-widest text-[#9892a7] uppercase">
                      {letter.envelopeNumber}
                    </span>
                    {isRead ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold border border-pink-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                        Unsealed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 text-[#8a8597] text-[10px] font-medium">
                        Wax Sealed
                      </span>
                    )}
                  </div>

                  {/* Envelope Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-200 transition-colors pr-12 leading-snug">
                    {letter.title}
                  </h3>

                  {/* Wax Seal Centerpiece / Content Preview */}
                  {isRead ? (
                    <div className="mt-4 p-3 rounded-xl bg-[#0e111d]/70 border border-pink-500/15">
                      <p className="font-caveat text-base text-pink-200 line-clamp-2 leading-tight">
                        {letter.p1}
                      </p>
                      <span className="text-[10px] text-[#8e899b] block mt-1">
                        • {letter.dateStr}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-6 flex flex-col items-center justify-center py-2">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b33951] to-[#7f1d2f] shadow-[0_0_15px_rgba(179,57,81,0.5)] border border-[#e06d84] flex items-center justify-center text-rose-100 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">lock</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#8b8599] mt-2">
                        Sealed with wax
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-pink-300 font-medium group-hover:underline flex items-center gap-1">
                    {isRead ? 'Read again' : 'Tap to unfold'}
                    <span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-0.5">
                      {isRead ? 'visibility' : 'arrow_forward'}
                    </span>
                  </span>
                  <span className="text-[11px] text-[#7d778c]">Private Envelope</span>
                </div>
              </div>
            );
          })}

          {/* Keepsake Box #16 Polaroid */}
          <div className="rounded-2xl border border-white/10 bg-[#161828]/90 p-4 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono tracking-widest text-[#9892a7] uppercase">
                Keepsake Box #16
              </span>
              <span className="material-symbols-outlined text-pink-400 text-[18px]">
                inventory_2
              </span>
            </div>

            <div className="bg-[#0b0d17] p-2.5 rounded-xl border border-white/10 shadow-inner flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/40 relative">
                <img
                  src={LEVEL_16_DATA.polaroid.imageUrl}
                  alt="Desk with letters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-caveat text-lg text-pink-200 text-center mt-3 mb-1">
                {LEVEL_16_DATA.polaroid.quote}
              </p>
              <span className="text-[10px] text-[#8e899b] uppercase tracking-wider">
                {LEVEL_16_DATA.polaroid.keepsakeTag}
              </span>
            </div>

            <div className="pt-3 text-center">
              <span className="text-xs text-[#b9b3c7]">
                Saved permanently to your memory box ♡
              </span>
            </div>
          </div>
        </div>

        {/* Milestone Unlocked / Completion Area */}
        {isAnyLetterRead && (
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-amber-500/10 border border-pink-400/30 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl animate-fadeIn">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shrink-0 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
                <span className="material-symbols-outlined text-[26px]">stars</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <span>Level Complete ✨ 16 / 21 Unlocked</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#cac4d7] mt-0.5 max-w-xl">
                  You've unlocked this set of forever letters. You can return and re-read them anytime during your journey.
                </p>
              </div>
            </div>

            <button
              onClick={onComplete}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              type="button"
            >
              <span>Continue to Level 17</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>

      {/* Interactive Letter Modal Drawer */}
      {activeLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#fbf6ec] text-[#2c2420] p-6 sm:p-8 shadow-2xl border-4 border-[#e9dfcc] max-h-[90vh] overflow-y-auto"
            style={{
              backgroundImage: 'radial-gradient(#eedbc4 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {/* Top Washi Tape Decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#f7d6dc]/90 border border-pink-300/40 rounded-sm shadow -rotate-1 pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#e1d3be] pb-4 mb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8d796b] block">
                  Handwritten with care • {activeLetter.dateStr}
                </span>
                <h3 className="text-2xl font-bold font-caveat text-[#4a2e2b] mt-1">
                  {activeLetter.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLetter(null)}
                className="w-8 h-8 rounded-full bg-[#eee3cf] hover:bg-[#e2d3b8] text-[#5e4b3e] flex items-center justify-center transition-colors cursor-pointer"
                type="button"
                aria-label="Close letter"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Letter Body */}
            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#3a2c26]">
              <p>{activeLetter.p1}</p>

              <div className="p-4 rounded-xl bg-[#f2e7d5] border-l-4 border-pink-400 font-caveat text-xl sm:text-2xl text-[#522a30]">
                {activeLetter.p2}
              </div>

              <p>{activeLetter.p3}</p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-4 border-t border-[#e1d3be] flex flex-col items-end">
              <span className="font-caveat text-2xl text-[#522a30]">
                Always & forever yours,
              </span>
              <span className="font-caveat text-3xl font-bold text-pink-600 drop-shadow-sm">
                Me ♡
              </span>
            </div>

            {/* Bottom Fold-back action button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setActiveLetter(null)}
                className="px-6 py-2 rounded-full bg-[#4a2e2b] hover:bg-[#39221f] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow flex items-center gap-1.5 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">drafts</span>
                <span>Fold back into envelope</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
