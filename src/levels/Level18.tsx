import React, { useState } from 'react';
import { LEVEL_18_DATA } from '../data/birthdayData';

interface Level18Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level18: React.FC<Level18Props> = ({ onComplete, onBack }) => {
  const [revealedMemoryIds, setRevealedMemoryIds] = useState<string[]>([
    'stars',
    'laugh',
    'seaside',
    'journey',
    'us',
  ]);
  const [activeMemoryDetail, setActiveMemoryDetail] = useState<string | null>(null);

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
              Act IV • Timeless Reminders
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 18 / 21
              </span>
              <span className="text-[11px] font-medium text-[#dac0c3]">86% Unlocked</span>
            </div>
            <div className="w-full h-1.5 bg-[#181b27] rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full w-[86%] transition-all duration-500 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs w-fit">
            <span className="material-symbols-outlined text-[15px]">auto_stories</span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">
              Sacred Memory Vault • Chapter {LEVEL_18_DATA.chapter}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>{LEVEL_18_DATA.title}</span>
          </h1>

          <p className="text-[#c5bed3] text-sm sm:text-base leading-relaxed max-w-2xl mt-1">
            {LEVEL_18_DATA.subtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e2236] border border-purple-400/30 text-purple-200 text-xs shadow-md">
          <span className="material-symbols-outlined text-[16px] text-pink-400">history_edu</span>
          <span className="font-semibold">5 Vault Keepsakes Unsealed</span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Center: Scrapbook Album */}
        <div className="lg:col-span-8 rounded-3xl bg-[#131625]/90 border border-white/10 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col">
          {/* Subtle warm lighting aura */}
          <div className="absolute top-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Album Title Row */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                <span className="material-symbols-outlined text-[22px]">import_contacts</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-wide">
                  {LEVEL_18_DATA.albumTitle}
                </h2>
                <p className="text-xs text-[#9d97ac]">
                  Memories unsealed: {revealedMemoryIds.length} / 5 • Vault Complete
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-pink-300 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-400/20">
              Forever Protected
            </span>
          </div>

          {/* Scrapbook Pieces Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {/* Memory 1: Photo Tile (Stars) */}
            <div
              onClick={() => setActiveMemoryDetail('stars')}
              className="p-4 rounded-2xl bg-[#181b2d] border border-white/10 shadow-lg relative group cursor-pointer hover:border-pink-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Washi Tape */}
              <div className="absolute -top-2.5 left-8 w-16 h-5 bg-[#f8d7da]/80 border border-pink-300/30 rounded-sm shadow-sm -rotate-2 pointer-events-none" />

              <span className="text-xs font-bold text-pink-200 block mb-2">
                Remember this... 📸
              </span>
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/40 relative">
                <img
                  src={LEVEL_18_DATA.memories[0]?.imageUrl}
                  alt="Under the stars"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-[#b8b2c7] mt-3 font-medium">
                {LEVEL_18_DATA.memories[0]?.subtext}
              </p>
            </div>

            {/* Memory 2: Spilled Coffee Laugh Card */}
            <div
              onClick={() => setActiveMemoryDetail('laugh')}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#1c1f32] to-[#141624] border border-white/10 shadow-lg relative group cursor-pointer hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Washi Tape */}
              <div className="absolute -top-2.5 right-8 w-16 h-5 bg-[#e2d5c3]/80 border border-amber-300/30 rounded-sm shadow-sm rotate-3 pointer-events-none" />

              <div>
                <span className="text-xs font-bold text-amber-200 block mb-2">
                  Remember that laugh... ☕
                </span>
                <p className="font-caveat text-xl sm:text-2xl text-amber-100 leading-snug my-2">
                  {LEVEL_18_DATA.memories[1]?.quote}
                </p>
              </div>
              <span className="text-[11px] text-[#9b94a8]">
                {LEVEL_18_DATA.memories[1]?.subtext}
              </span>
            </div>

            {/* Memory 3: Seaside Photo Tile */}
            <div
              onClick={() => setActiveMemoryDetail('seaside')}
              className="p-4 rounded-2xl bg-[#181b2d] border border-white/10 shadow-lg relative group cursor-pointer hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Washi Tape */}
              <div className="absolute -top-2.5 left-10 w-16 h-5 bg-[#c8d6af]/80 border border-emerald-300/30 rounded-sm shadow-sm -rotate-1 pointer-events-none" />

              <span className="text-xs font-bold text-cyan-200 block mb-2">
                Remember that day... 🌊
              </span>
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/40 relative">
                <img
                  src={LEVEL_18_DATA.memories[2]?.imageUrl}
                  alt="Seaside train"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-[#b8b2c7] mt-3 font-medium">
                {LEVEL_18_DATA.memories[2]?.subtext}
              </p>
            </div>

            {/* Memory 4: Journey Milestone #18 Card */}
            <div
              onClick={() => setActiveMemoryDetail('journey')}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#1c1f32] to-[#141624] border border-white/10 shadow-lg relative group cursor-pointer hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Washi Tape */}
              <div className="absolute -top-2.5 right-10 w-16 h-5 bg-[#f3c65c]/70 border border-yellow-300/30 rounded-sm shadow-sm rotate-2 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-200">
                    Remember how far we've come... 🛤️
                  </span>
                  <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-[11px] font-bold flex items-center justify-center font-mono">
                    18
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#d4cfe1] leading-relaxed my-2">
                  {LEVEL_18_DATA.memories[3]?.quote}
                </p>
              </div>
              <span className="text-[11px] text-[#9b94a8]">
                {LEVEL_18_DATA.memories[3]?.subtext}
              </span>
            </div>
          </div>

          {/* Memory 5: Large Wax Sealed Banner */}
          <div className="mt-5 p-5 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b33951] to-[#7f1d2f] shadow-[0_0_12px_rgba(179,57,81,0.6)] border border-[#e06d84] flex items-center justify-center text-rose-100 shrink-0">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <div>
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider block">
                  Remember us. ♡
                </span>
                <p className="font-caveat text-xl sm:text-2xl text-pink-100 leading-snug mt-0.5">
                  “Every fragile moment was made safe the moment I met you.”
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200 text-xs font-semibold whitespace-nowrap shrink-0">
              Unsealed & Forever True
            </span>
          </div>

          {/* Bottom Script Quote Ribbon */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="font-caveat text-2xl sm:text-3xl text-pink-300 drop-shadow-[0_0_10px_rgba(244,114,182,0.4)]">
              {LEVEL_18_DATA.finalQuote}
            </p>
          </div>
        </div>

        {/* Right Column: Polaroid Keepsake & Authenticated Vault Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Polaroid Frame */}
          <div className="rounded-3xl bg-[#161828]/95 border border-white/10 p-5 shadow-2xl relative group">
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#eed9c4]/80 border border-amber-300/30 rounded-sm shadow -rotate-2 pointer-events-none" />

            <div className="bg-[#0b0d17] p-3 rounded-2xl border border-white/10 shadow-inner flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative">
                <img
                  src={LEVEL_18_DATA.polaroid.imageUrl}
                  alt="Our quiet place"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-caveat text-xl text-pink-200 text-center mt-3 mb-1">
                {LEVEL_18_DATA.polaroid.quote}
              </p>
              <span className="text-[10px] text-[#8e899b] uppercase tracking-wider font-mono">
                {LEVEL_18_DATA.polaroid.archiveTag}
              </span>
            </div>
          </div>

          {/* Vault Reflection Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1d1f30] to-[#141624] border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-pink-300 text-xs uppercase tracking-wider font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Vault Authenticated</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cfc8de] leading-relaxed">
              Whenever the world feels loud or uncertainty creeps in, these five fragments remain anchor points. You are treasured beyond words, today and for all days ahead.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#8e889c]">
              <span>Memory Lock Status:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Permanent
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Completion Area Banner */}
      <div className="w-full mt-10 p-6 rounded-3xl bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-amber-500/10 border border-pink-400/30 flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl animate-fadeIn">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shrink-0 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
            <span className="material-symbols-outlined text-[26px]">stars</span>
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-pink-300 uppercase block font-semibold">
              Level Complete ✨ 18 of 21 Unlocked
            </span>
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2 mt-0.5">
              <span>Your memories are forever secure in this vault ♡</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#cac4d7] mt-0.5 max-w-xl">
              Three final chapters remain. Step forward into the cinema archive.
            </p>
          </div>
        </div>

        <button
          onClick={onComplete}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          type="button"
        >
          <span>Continue to Level 19</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
