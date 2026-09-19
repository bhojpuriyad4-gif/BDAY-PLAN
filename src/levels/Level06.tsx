import React, { useState, useEffect, useRef } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { sound } from '../utils/audio';

interface Level06Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level06: React.FC<Level06Props> = ({ onComplete, onBack }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const duration = 222; // 3:42 in seconds
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    sound.toggleMusic(nextState);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader levelNumber={6} onBack={onBack} />

      {/* Header title */}
      <div className="text-center max-w-xl mx-auto mb-8 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Our Song</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Press play and let the music take you back...
        </p>
      </div>

      {/* Turntable layout with side doodles */}
      <div className="relative w-full flex items-center justify-center my-4">
        {/* Left doodle */}
        <div className="hidden lg:block absolute left-8 xl:left-16 top-1/4 -rotate-6 pointer-events-none text-left">
          <span className="font-caveat text-2xl xl:text-3xl text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
            Some songs just<br />hit different. ♡
          </span>
          <div className="text-pink-400 text-2xl ml-8 mt-1">↗</div>
        </div>

        {/* Right doodle */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/4 rotate-6 pointer-events-none text-right">
          <span className="font-caveat text-2xl xl:text-3xl text-pink-200 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
            This song reminds<br />me of you... ♡
          </span>
          <div className="text-pink-300 text-xl mt-1">♫ ♪</div>
        </div>

        {/* Vinyl Player Casing */}
        <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#151826]/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col items-center relative">
          {/* Turntable Base */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#080a13] border-4 border-[#1e2232] shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Vinyl Record */}
            <div
              className={`relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#0e111d] flex items-center justify-center shadow-2xl border border-white/5 ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
              style={{
                backgroundImage:
                  'radial-gradient(circle, #0e111d 0%, #151826 30%, #0e111d 50%, #1a1e30 70%, #080a13 100%)',
              }}
            >
              {/* Concentric grooved rings */}
              <div className="absolute inset-4 rounded-full border border-white/[0.04]" />
              <div className="absolute inset-8 rounded-full border border-white/[0.05]" />
              <div className="absolute inset-12 rounded-full border border-white/[0.04]" />
              <div className="absolute inset-16 rounded-full border border-white/[0.06]" />

              {/* Pink Center Label */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-400 to-pink-300 border-4 border-pink-200/50 flex flex-col items-center justify-center shadow-lg">
                <span className="text-pink-950 font-bold text-xs">Side A</span>
                <span className="text-pink-900 text-sm">♡</span>
                <span className="text-[9px] text-pink-950 font-semibold tracking-wider uppercase">
                  For You
                </span>
                {/* Spindle hole */}
                <div className="w-3 h-3 rounded-full bg-[#080a13] border border-white/40 mt-0.5" />
              </div>
            </div>

            {/* Stylus / Tone Arm */}
            <div
              className={`absolute top-2 right-4 w-6 h-28 origin-top-right transition-transform duration-700 pointer-events-none ${
                isPlaying ? 'rotate-[26deg]' : 'rotate-[8deg]'
              }`}
            >
              {/* Arm pivot base */}
              <div className="w-6 h-6 rounded-full bg-slate-400 border border-white/40 shadow-md ml-auto" />
              {/* Metallic arm rod */}
              <div className="w-1.5 h-20 bg-gradient-to-b from-slate-300 to-slate-500 rounded-full mx-auto -mt-1 shadow-sm" />
              {/* Cartridge head */}
              <div className="w-3.5 h-5 bg-pink-500/80 rounded-sm mx-auto -mt-1 border border-pink-300" />
            </div>
          </div>

          {/* Scrubber & Progress Bar */}
          <div className="w-full mt-8">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-[#080a13] rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
            <div className="w-full flex items-center justify-between text-xs text-[#8e8697] font-mono mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button
              type="button"
              onClick={() => setCurrentTime(Math.max(0, currentTime - 15))}
              className="text-[#b9b4c7] hover:text-white transition-colors cursor-pointer"
              title="Previous 15s"
            >
              <span className="material-symbols-outlined text-[24px]">skip_previous</span>
            </button>

            <button
              onClick={togglePlayback}
              type="button"
              className="w-14 h-14 rounded-full bg-pink-400 text-[#400014] flex items-center justify-center shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:bg-pink-300 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[32px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTime(Math.min(duration, currentTime + 15))}
              className="text-[#b9b4c7] hover:text-white transition-colors cursor-pointer"
              title="Next 15s"
            >
              <span className="material-symbols-outlined text-[24px]">skip_next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button
          onClick={onComplete}
          className="px-8 py-3.5 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
          type="button"
        >
          <span>Continue</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
