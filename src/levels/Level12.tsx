import React, { useState } from 'react';
import { LEVEL_12_PHASES, LEVEL_12_KEEPSAKE } from '../data/birthdayData';

interface Level12Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level12: React.FC<Level12Props> = ({ onComplete, onBack }) => {
  // Store selected option id for each phase: morning, afternoon, evening, night
  const [selections, setSelections] = useState<Record<string, string>>({
    morning: 'breakfast',
    afternoon: 'cafe',
    evening: 'dinner',
    night: 'stargazing',
  });

  const handleSelect = (phaseId: string, optionId: string) => {
    setSelections((prev) => ({
      ...prev,
      [phaseId]: optionId,
    }));
  };

  const selectedCount = Object.keys(selections).length;
  const isComplete = selectedCount === LEVEL_12_PHASES.length;

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
              Chapter III • Cozy Horizons
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 12 / 21
              </span>
              <span className="font-script-whisper text-purple-300 text-xs">
                57.1% journey
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#313442] overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 shadow-[0_0_12px_rgba(255,143,163,0.8)] transition-all duration-700"
                style={{ width: '57.14%' }}
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
            auto_awesome
          </span>
          Interactive Scrapbook Itinerary
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center justify-center flex-wrap gap-x-2">
          Build Your Perfect Day{' '}
          <span className="font-caveat text-pink-300 drop-shadow-[0_0_10px_rgba(255,186,195,0.6)] animate-pulse">
            ♡
          </span>
        </h1>
        <p className="font-script-whisper text-purple-200 mt-1 text-base sm:text-lg">
          If we had one unhurried, magical day together with zero interruptions, what would it look like?
        </p>

        {/* Floating Desktop Doodle */}
        <div className="hidden md:flex items-center gap-2 absolute -right-24 top-2 text-pink-300/80 rotate-6 pointer-events-none">
          <span className="font-script-whisper text-lg">Can we do all of them? 🥺♡</span>
          <svg className="w-8 h-8 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Time of Day Form (4 Phases) */}
      <div className="w-full space-y-8">
        {LEVEL_12_PHASES.map((phase) => {
          const selectedOptionId = selections[phase.id];

          return (
            <div
              key={phase.id}
              className="p-6 rounded-2xl bg-[#181b27]/80 border border-white/10 backdrop-blur-xl shadow-lg relative overflow-hidden"
            >
              {/* Header for Phase */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-pink-300 text-[22px]">
                    {phase.icon}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white tracking-wide">
                      {phase.phaseNumber}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-script-whisper text-purple-200 text-sm">
                    {phase.doodle}
                  </span>
                  <span className="text-base">{phase.tagEmoji}</span>
                </div>
              </div>

              {/* 3 Option Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {phase.options.map((option) => {
                  const isSelected = selectedOptionId === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(phase.id, option.id)}
                      className={`relative text-left p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-[#272936] border-pink-400 shadow-[0_0_20px_rgba(255,143,163,0.35)] scale-[1.02]'
                          : 'bg-[#141622]/90 border-white/5 hover:border-pink-300/30 hover:bg-[#1f2233]'
                      }`}
                    >
                      {/* Check indicator circle */}
                      <div className="flex items-start justify-between">
                        <span className="text-2xl">{option.emoji}</span>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-pink-400 border-pink-400 text-[#5f1127]'
                              : 'border-white/20 text-transparent'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px] font-bold">
                            check
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p
                          className={`font-bold text-sm transition-colors ${
                            isSelected ? 'text-pink-200' : 'text-white'
                          }`}
                        >
                          {option.title}
                        </p>
                        <p className="text-xs text-[#dac0c3] mt-0.5 leading-relaxed">
                          {option.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Itinerary Summary Strip */}
      <div className="w-full mt-8 p-5 rounded-2xl bg-[#202333]/90 border border-white/10 backdrop-blur-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-yellow-300 text-[22px]">
            map
          </span>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Your Perfect Day ♡
            </h3>
            <p className="text-xs text-[#dac0c3]">
              {selectedCount} of 4 moments tailored
            </p>
          </div>
        </div>

        {/* Selected Flow Badges */}
        <div className="flex items-center flex-wrap gap-2 justify-center">
          {LEVEL_12_PHASES.map((phase, idx) => {
            const selectedId = selections[phase.id];
            const opt = phase.options.find((o) => o.id === selectedId);
            return (
              <React.Fragment key={phase.id}>
                <span className="px-3 py-1 rounded-full bg-[#181b27] border border-pink-400/30 text-pink-200 text-xs font-semibold shadow-xs">
                  {opt ? opt.chipLabel : phase.name}
                </span>
                {idx < LEVEL_12_PHASES.length - 1 && (
                  <span className="text-[#dac0c3]/40 text-xs font-bold">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Sentimental Polaroid Keepsake & Handwritten Whisper Area */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-5xl mx-auto w-full">
        {/* Polaroid Card */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative bg-white text-[#0b0e19] p-3 pb-6 rounded-lg shadow-[0_16px_35px_rgba(0,0,0,0.5)] transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-64 max-w-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#ffdf9b]/40 backdrop-blur-xs rounded-xs transform -rotate-2" />
            <div className="w-full h-56 rounded-xs overflow-hidden bg-[#181b27]">
              <img
                src={LEVEL_12_KEEPSAKE.imageUrl}
                alt="Morning Glow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-script-whisper text-gray-900 text-base font-bold">
                {LEVEL_12_KEEPSAKE.polaroidTitle}
              </p>
              <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">
                {LEVEL_12_KEEPSAKE.caption}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Note */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-[#181b27]/90 border border-white/10 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-pink-400 text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300">
                A Secret Whisper
              </span>
            </div>
            <p className="font-script-whisper text-pink-200 text-xl sm:text-2xl leading-relaxed mb-2">
              {LEVEL_12_KEEPSAKE.whisperQuote}
            </p>
            <p className="text-sm text-[#dac0c3] leading-relaxed">
              {LEVEL_12_KEEPSAKE.whisperBody}
            </p>
          </div>

          {/* Completion Ribbon */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-2 bg-[#1c1f2c] px-4 py-2 rounded-full border border-white/5">
              <span
                className="material-symbols-outlined text-[18px] text-yellow-300 animate-spin"
                style={{ animationDuration: '4s' }}
              >
                verified
              </span>
              <span className="text-[11px] font-bold tracking-wider text-white">
                {isComplete
                  ? 'LEVEL COMPLETE ✨ ITINERARY SEALED'
                  : 'CUSTOMIZE ALL 4 PHASES'}
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
              <span>Continue to Level 13</span>
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
