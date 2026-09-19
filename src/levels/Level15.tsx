import React, { useState } from 'react';
import { LEVEL_15_CIPHER } from '../data/birthdayData';

interface Level15Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level15: React.FC<Level15Props> = ({ onComplete, onBack }) => {
  const [userInput, setUserInput] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const cleanAnswer = LEVEL_15_CIPHER.decodedAnswer.trim().toUpperCase();

  const handleCheckAnswer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const formatted = userInput.trim().toUpperCase().replace(/\s+/g, ' ');
    if (formatted === cleanAnswer) {
      setIsUnlocked(true);
      setErrorMsg(null);
    } else {
      setErrorMsg('Not quite! Check the symbol chart closely or tap "Give me a hint" ♡');
    }
  };

  const handleClear = () => {
    setUserInput('');
    setErrorMsg(null);
  };

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
              Act III • Chapter Secret
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 15 / 21
              </span>
              <span className="font-script-whisper text-purple-300 text-xs">
                71.4% journey
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#313442] overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 shadow-[0_0_12px_rgba(255,143,163,0.8)] transition-all duration-700"
                style={{ width: '71.4%' }}
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
            lock
          </span>
          Mini Mystery • Chapter: {LEVEL_15_CIPHER.chapter}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center justify-center flex-wrap gap-x-2">
          The Secret Code{' '}
          <span className="font-caveat text-pink-300 drop-shadow-[0_0_10px_rgba(255,186,195,0.6)]">
            🔐
          </span>
        </h1>
        <p className="font-script-whisper text-purple-200 mt-1 text-base sm:text-lg">
          {LEVEL_15_CIPHER.subtitle}
        </p>
      </div>

      {/* Main Two-Column Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl">
        {/* Left Interactive Cipher Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-[#181b27]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Top Ribbon */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-white/5">
              <span className="flex items-center gap-1.5 text-xs font-bold text-pink-300 uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px] animate-spin">
                  auto_awesome
                </span>
                Decode This Cipher
              </span>
              <span className="font-script-whisper text-purple-300 text-xs sm:text-sm">
                whisper of the stars ✨
              </span>
            </div>

            {/* Symbol Translation Table */}
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#dac0c3] block mb-3">
                Symbol Translation Key
              </span>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 p-3 rounded-xl bg-[#12141f] border border-white/5">
                {LEVEL_15_CIPHER.translationTable.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#1a1d2c] border border-white/5 text-center"
                  >
                    <span className={`text-base sm:text-lg ${item.colorClass || 'text-white'}`}>
                      {item.symbol}
                    </span>
                    <span className="text-xs font-mono font-bold text-pink-200 mt-1">
                      {item.letter}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coded Inscription Visual */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-[#1c1f2f] to-[#141624] border border-pink-400/20 text-center shadow-inner mb-6">
              <span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase block mb-4">
                Encoded Inscription
              </span>

              {/* 3 Word Blocks */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-2">
                {LEVEL_15_CIPHER.codedWords.map((word, wIdx) => (
                  <div
                    key={wIdx}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#272936]/80 border border-white/10 shadow-sm"
                  >
                    {word.map((char, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xl sm:text-2xl p-1 font-bold text-yellow-200 drop-shadow-[0_0_8px_rgba(254,240,138,0.4)]"
                      >
                        {char.symbol}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <p className="font-script-whisper text-xs sm:text-sm text-[#dac0c3] mt-3">
                3 short words written in cosmic shorthand ♡
              </p>
            </div>

            {/* Input Form */}
            <form onSubmit={handleCheckAnswer} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#dac0c3] block mb-2">
                  Enter The Secret Message
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => {
                      setUserInput(e.target.value);
                      if (errorMsg) setErrorMsg(null);
                    }}
                    placeholder="type the decoded phrase..."
                    disabled={isUnlocked}
                    className={`w-full px-5 py-3.5 rounded-xl bg-[#12141f] border text-white font-mono text-sm sm:text-base tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all ${
                      isUnlocked
                        ? 'border-pink-400/80 bg-[#1e2233]'
                        : errorMsg
                        ? 'border-rose-500'
                        : 'border-white/10'
                    }`}
                  />
                  {userInput && !isUnlocked && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="absolute right-4 text-xs font-bold text-gray-400 hover:text-white px-2 py-1"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {errorMsg}
                  </p>
                )}

                {showHint && (
                  <div className="mt-3 p-3 rounded-lg bg-[#272936] border border-amber-400/30 text-xs text-amber-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                    <span>{LEVEL_15_CIPHER.hint}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isUnlocked || !userInput.trim()}
                  className={`px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                    isUnlocked
                      ? 'bg-pink-400/20 text-pink-300 border border-pink-400/40 cursor-default'
                      : userInput.trim()
                      ? 'bg-pink-400 hover:bg-pink-300 text-[#5f1127] active:scale-95'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isUnlocked ? 'done_all' : 'lock_open'}
                  </span>
                  <span>{isUnlocked ? 'Unlocked ♡' : 'Unlock ♡'}</span>
                </button>

                {!isUnlocked && (
                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="px-4 py-3 rounded-full bg-[#272936] hover:bg-[#323546] text-[#dac0c3] hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-white/5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-amber-300">
                      lightbulb
                    </span>
                    <span>{showHint ? 'Hide hint' : 'Give me a hint 💡'}</span>
                  </button>
                )}
              </div>
            </form>

            {/* Revelation Card (Revealed upon unlock) */}
            {isUnlocked && (
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#272936] via-[#1f2233] to-[#181a27] border border-pink-400/40 shadow-2xl relative overflow-hidden animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-0.5 rounded-full bg-pink-400/20 text-pink-300 border border-pink-400/30 text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">done_all</span>
                    Unlocked
                  </span>
                  <span className="font-script-whisper text-purple-200 text-sm">
                    {LEVEL_15_CIPHER.revelationSubtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  You found the secret. ♡
                </h3>
                <p className="font-script-whisper text-pink-200 text-lg sm:text-xl leading-relaxed">
                  {LEVEL_15_CIPHER.revelationQuote}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#dac0c3]">
                  <span>Memory Cipher #15 Solved</span>
                  <span className="font-script-whisper text-pink-300">forever & always ✨</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Evidence, Objectives & Keepsake */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Polaroid Evidence Card */}
          <div className="bg-[#181b27]/90 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-xl flex flex-col items-center">
            <div className="relative bg-white text-gray-900 p-3 pb-5 rounded-lg shadow-xl transform rotate-2 w-56">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffdf9b]/50 rounded-xs" />
              <img
                src={LEVEL_15_CIPHER.polaroid.imageUrl}
                alt="Secret Desk"
                className="w-full h-48 object-cover rounded-xs"
              />
              <div className="mt-2.5 text-center">
                <p className="font-script-whisper text-xs font-bold text-gray-800">
                  {LEVEL_15_CIPHER.polaroid.caption}
                </p>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  {LEVEL_15_CIPHER.polaroid.archiveTag}
                </span>
              </div>
            </div>

            <p className="font-script-whisper text-center text-pink-300 text-sm mt-4">
              Look closely at the symbols... ♡
            </p>
            <p className="font-script-whisper text-center text-purple-200 text-xs mt-0.5">
              Our favorite secret is safe here. ✨
            </p>
          </div>

          {/* Act III Objectives Checklist */}
          <div className="bg-[#181b27]/90 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#dac0c3] block mb-3">
              Act III Milestones
            </span>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-pink-200">
                <span className="material-symbols-outlined text-[16px] text-pink-400">
                  check_circle
                </span>
                <span>Lvl 11: Our Constellation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-pink-200">
                <span className="material-symbols-outlined text-[16px] text-pink-400">
                  check_circle
                </span>
                <span>Lvl 12: Build Your Perfect Day</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-pink-200">
                <span className="material-symbols-outlined text-[16px] text-pink-400">
                  check_circle
                </span>
                <span>Lvl 13: The Inside Joke Test</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-pink-200">
                <span className="material-symbols-outlined text-[16px] text-pink-400">
                  check_circle
                </span>
                <span>Lvl 14: Guess What I&apos;m Thinking</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-purple-200">
                <span className="material-symbols-outlined text-[16px] text-yellow-300">
                  {isUnlocked ? 'check_circle' : 'lock'}
                </span>
                <span className={isUnlocked ? 'font-bold text-pink-300' : ''}>
                  Lvl 15: The Secret Code
                </span>
              </div>
            </div>

            {/* Act Progress summary */}
            <div className="mt-5 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-[11px] text-[#dac0c3] mb-1.5">
                <span>Total Journey Progress</span>
                <span className="font-bold text-pink-300">15 / 21</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#12141f] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 shadow-[0_0_8px_rgba(255,143,163,0.8)]"
                  style={{ width: '71.4%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Action Strip */}
      <div className="w-full max-w-6xl mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#181b27]/80 border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2 bg-[#1c1f2c] px-4 py-2 rounded-full border border-white/5">
          <span className="material-symbols-outlined text-[18px] text-pink-300">
            {isUnlocked ? 'verified' : 'key'}
          </span>
          <span className="text-[11px] font-bold tracking-wider text-white">
            {isUnlocked
              ? 'LEVEL COMPLETE ✨ SECRET DECODED'
              : 'CRACK THE CIPHER TO UNLOCK'}
          </span>
        </div>

        <button
          onClick={onComplete}
          disabled={!isUnlocked}
          type="button"
          className={`group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-base shadow-[0_8px_24px_-4px_rgba(255,143,163,0.5)] transition-all ${
            isUnlocked
              ? 'bg-pink-400 hover:bg-pink-300 text-[#5f1127] cursor-pointer hover:scale-105 active:scale-95 animate-pulse'
              : 'bg-white/10 text-white/40 cursor-not-allowed opacity-60'
          }`}
        >
          <span>Continue to Level 16</span>
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
