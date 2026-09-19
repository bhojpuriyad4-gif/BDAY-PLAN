import React, { useState } from 'react';
import { LEVEL_20_DATA } from '../data/birthdayData';

interface Level20Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level20: React.FC<Level20Props> = ({ onComplete, onBack }) => {
  const [litNodeIds, setLitNodeIds] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleNode = (id: number) => {
    setLitNodeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLightAll = () => {
    setLitNodeIds([0, 1, 2, 3, 4, 5]);
  };

  const allLit = litNodeIds.length === LEVEL_20_DATA.nodes.length;

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
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
              Act V • The Final Threshold
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 20 / 21
              </span>
              <span className="text-[11px] font-medium text-[#dac0c3]">95% Unlocked</span>
            </div>
            <div className="w-full h-1.5 bg-[#181b27] rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 rounded-full w-[95%] transition-all duration-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs w-fit">
            <span className="material-symbols-outlined text-[15px]">door_front</span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">
              The Penultimate Step • Level {LEVEL_20_DATA.chapter}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>{LEVEL_20_DATA.title}</span>
          </h1>

          <p className="text-[#c5bed3] text-sm sm:text-base leading-relaxed max-w-2xl mt-1">
            {LEVEL_20_DATA.subtitle}
          </p>
        </div>

        {/* Action helper */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e2236] border border-amber-400/30 text-amber-200 text-xs shadow-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-semibold">{LEVEL_20_DATA.instruction}</span>
        </div>
      </div>

      {/* Secret Message Ribbon */}
      <div className="w-full mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-amber-900/30 border border-amber-400/30 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-amber-300 text-[24px] animate-pulse">
            auto_awesome
          </span>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#a8a1b6] uppercase block">
              Secret Celestial Message
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {LEVEL_20_DATA.nodes.map((node) => {
                const isLit = litNodeIds.includes(node.id);
                return (
                  <span
                    key={node.id}
                    className={`font-caveat text-2xl sm:text-3xl transition-all duration-300 ${
                      isLit
                        ? 'text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)] scale-105'
                        : 'text-white/20 blur-[1px]'
                    }`}
                  >
                    {node.word}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <span className="text-xs font-mono text-amber-300 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20 whitespace-nowrap">
          {litNodeIds.length} of {LEVEL_20_DATA.nodes.length} Star Cobblestones Lit
        </span>
      </div>

      {/* Main Celestial Path & Anticipation Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Center: Interactive Path Stage */}
        <div className="lg:col-span-8 rounded-3xl bg-[#131625]/90 border border-white/10 p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col items-center">
          {/* Ambient Starlight Glows */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Glowing Golden Arch: Door 21 */}
          <div className="relative z-10 flex flex-col items-center mt-2 mb-8 group">
            {/* Radiant light beams behind door */}
            <div className="absolute -top-6 w-48 h-48 bg-amber-300/20 rounded-full blur-2xl pointer-events-none animate-pulse" />

            <div className="w-32 sm:w-36 h-48 sm:h-52 rounded-t-full bg-gradient-to-b from-amber-200/90 via-amber-400/60 to-purple-900/80 border-4 border-amber-300 shadow-[0_0_35px_rgba(251,191,36,0.6)] flex flex-col items-center justify-between p-4 relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-400 shadow flex items-center justify-center text-amber-900 mt-2">
                <span className="material-symbols-outlined text-[16px]">key</span>
              </div>

              <div className="text-center my-auto">
                <span className="text-4xl font-extrabold text-white font-mono tracking-tighter drop-shadow-md">
                  21
                </span>
                <span className="font-caveat text-xl text-amber-100 block drop-shadow">
                  Grand Finale
                </span>
              </div>

              <div className="w-full py-1 rounded bg-black/40 text-center text-[9px] font-mono tracking-widest text-amber-200 uppercase">
                Awaits You
              </div>
            </div>

            <span className="text-xs font-bold text-amber-200 mt-3 font-mono tracking-wider">
              ✦ DOOR 21 ✦
            </span>
          </div>

          {/* The Winding Path with 6 Interactive Star Nodes */}
          <div className="w-full max-w-md relative flex flex-col items-center gap-6 py-4">
            {/* SVG Connecting Path Line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              viewBox="0 0 300 450"
              fill="none"
            >
              <path
                d="M150,20 Q220,100 150,180 T150,340 T150,440"
                stroke="url(#pathGlow)"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="pathGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* 6 Cobblestone Star Nodes */}
            <div className="w-full flex flex-col gap-6 relative z-10">
              {LEVEL_20_DATA.nodes.map((node, index) => {
                const isLit = litNodeIds.includes(node.id);
                // Stagger left / right along path
                const alignClass =
                  index % 3 === 0
                    ? 'self-center'
                    : index % 2 === 0
                    ? 'self-end mr-4 sm:mr-8'
                    : 'self-start ml-4 sm:ml-8';

                return (
                  <button
                    key={node.id}
                    onClick={() => toggleNode(node.id)}
                    className={`${alignClass} group p-3 px-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3 shadow-lg ${
                      isLit
                        ? 'bg-gradient-to-r from-[#212438] to-[#1a1d30] border-amber-400/60 shadow-[0_0_18px_rgba(251,191,36,0.35)] scale-105'
                        : 'bg-[#121422]/90 border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                    }`}
                    type="button"
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isLit
                          ? 'bg-amber-400 text-amber-950 shadow-[0_0_12px_rgba(251,191,36,0.8)]'
                          : 'bg-white/10 text-white/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {node.isHeart ? 'favorite' : 'star'}
                      </span>
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono text-[#8c869a] uppercase">
                        Step {node.stepStr}
                      </span>
                      <span
                        className={`font-caveat text-xl font-bold transition-colors ${
                          isLit ? 'text-amber-200' : 'text-[#a39cb2]'
                        }`}
                      >
                        “{node.word}”
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleLightAll}
              className="mt-4 text-xs text-[#8e899b] hover:text-amber-300 underline transition-colors cursor-pointer"
              type="button"
            >
              Illuminate all cobblestones
            </button>
          </div>
        </div>

        {/* Right Column: Polaroid & Chapter Climax Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Polaroid Step 20/21 */}
          <div className="rounded-3xl bg-[#161828]/95 border border-white/10 p-5 shadow-2xl relative group">
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#fde68a]/70 border border-amber-300/30 rounded-sm shadow -rotate-1 pointer-events-none" />

            <div className="bg-[#0b0d17] p-3 rounded-2xl border border-white/10 shadow-inner flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative">
                <img
                  src={LEVEL_20_DATA.polaroid.imageUrl}
                  alt="Almost home"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest mt-3">
                {LEVEL_20_DATA.polaroid.stepTag}
              </span>
              <p className="font-caveat text-2xl text-pink-200 text-center my-1">
                {LEVEL_20_DATA.polaroid.quote}
              </p>
              <span className="text-[11px] text-[#8e899b] font-medium">
                {LEVEL_20_DATA.polaroid.caption}
              </span>
            </div>
          </div>

          {/* Climax Milestone Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1e2238] to-[#141626] border border-amber-400/30 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-wider font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
              <span>{LEVEL_20_DATA.climaxTitle}</span>
            </div>

            <h3 className="text-xl font-bold text-white leading-snug">
              {LEVEL_20_DATA.climaxHeading}
            </h3>

            <p className="text-xs sm:text-sm text-[#cfc8de] leading-relaxed mt-2">
              {LEVEL_20_DATA.climaxText}
            </p>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                20 Milestones Solved
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lock_open</span>
                Door 21 Unsealed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grand Penultimate CTA Banner */}
      <div className="w-full mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-600/20 border-2 border-amber-400/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(251,191,36,0.25)] animate-fadeIn">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/50 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
            <span className="material-symbols-outlined text-[32px]">vpn_key</span>
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block font-bold">
              THE FINAL THRESHOLD UNSEALED
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2 mt-0.5">
              <span>Enter the Final Chapter (Level 21)</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#e0daec] mt-0.5 max-w-xl">
              One final breath. Your grand birthday surprise is right behind this door.
            </p>
          </div>
        </div>

        <button
          onClick={onComplete}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 hover:from-amber-300 hover:via-pink-400 hover:to-purple-500 text-white font-extrabold text-base tracking-wide shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_40px_rgba(244,114,182,0.8)] transition-all flex items-center gap-3 shrink-0 cursor-pointer hover:scale-105"
          type="button"
        >
          <span>Step Into Level 21</span>
          <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
