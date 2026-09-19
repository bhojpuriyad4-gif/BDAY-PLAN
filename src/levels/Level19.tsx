import React, { useState, useEffect, useRef } from 'react';
import { LEVEL_19_DATA } from '../data/birthdayData';

interface Level19Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level19: React.FC<Level19Props> = ({ onComplete, onBack }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(84); // 01:24
  const [totalTime] = useState<number>(225); // 03:45
  const [volume, setVolume] = useState<number>(80);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState<boolean>(true);
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Playback timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalTime) {
            setIsPlaying(false);
            return totalTime;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalTime]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
              Act V • Vintage Cinema Archive
            </span>
          </div>
        </div>

        {/* Level Tracker & Hearts */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 min-w-[170px]">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                Level 19 / 21
              </span>
              <span className="text-[11px] font-medium text-[#dac0c3]">90% Unlocked</span>
            </div>
            <div className="w-full h-1.5 bg-[#181b27] rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full w-[90%] transition-all duration-500 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
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

      {/* Main Header with Marquee Bulbs Motif */}
      <div className="w-full mt-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs w-fit">
            <span className="material-symbols-outlined text-[15px]">movie</span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">
              Cinematic Chapter • Level {LEVEL_19_DATA.chapter}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>{LEVEL_19_DATA.title}</span>
          </h1>

          <p className="text-[#c5bed3] text-sm sm:text-base leading-relaxed max-w-2xl mt-1">
            {LEVEL_19_DATA.subtitle}
          </p>
        </div>

        {/* Vintage Ticket Premiere Pass Keepsake Badge */}
        <div className="p-3 px-5 rounded-2xl bg-[#1b1e30] border-2 border-dashed border-amber-400/30 flex items-center gap-3 text-xs shadow-lg">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
              Admit Two • Premiere Pass
            </span>
            <span className="font-caveat text-base text-pink-200">
              Row A • Seat 01 & 02 ♡
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold">
            FOREVER
          </span>
        </div>
      </div>

      {/* Main Vintage Cinema Container */}
      <div className="w-full rounded-3xl bg-[#131625]/95 border border-white/10 p-4 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col">
        {/* Film Strip Header Rim */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-[#9892a6]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-white font-bold tracking-widest">REC • 35MM NOSTALGIA ARCHIVE</span>
          </div>
          <span>{LEVEL_19_DATA.prodNumber}</span>
          <span className="hidden sm:inline text-purple-300">4K CINEMA AUDIO</span>
        </div>

        {/* Sprocket Holes Film Border Decoration */}
        <div className="w-full flex justify-between py-2 overflow-hidden opacity-30 select-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-3 h-2 rounded-sm bg-white/40 mx-1 shrink-0" />
          ))}
        </div>

        {/* Cinema Screen Viewport */}
        <div className="relative w-full aspect-[16/9] max-h-[460px] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group flex items-center justify-center">
          {/* Main Poster / Video Slide Still */}
          <img
            src={
              selectedFrameIndex === 0
                ? LEVEL_19_DATA.fallbackPosterUrl
                : LEVEL_19_DATA.stillFrames[selectedFrameIndex - 1]?.imageUrl || LEVEL_19_DATA.fallbackPosterUrl
            }
            alt="Cinema Reel Still"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
          />

          {/* Film Grain & Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

          {/* Top Cinema Overlay Meta */}
          <div className="absolute top-4 inset-x-6 flex items-center justify-between text-xs text-white/90 z-10">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 font-mono text-[11px]">
              Chapter XIX: Memory Reel
            </span>
            <span className="px-3 py-1 rounded-full bg-pink-500/30 backdrop-blur-sm border border-pink-400/40 font-caveat text-sm text-pink-200">
              best watched together under a blanket ♡
            </span>
          </div>

          {/* Title Card Overlay when Paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-black/40 backdrop-blur-[2px]">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-2">
                Now Screening
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-wider drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]">
                {LEVEL_19_DATA.movieTitle}
              </h2>
              <p className="font-caveat text-2xl sm:text-3xl text-pink-300 mt-2 drop-shadow">
                {LEVEL_19_DATA.starring}
              </p>
              <p className="text-xs text-[#d1cbdd] font-medium mt-1">
                {LEVEL_19_DATA.directedBy}
              </p>

              {/* Large Glowing Play Button */}
              <button
                onClick={togglePlay}
                className="mt-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-500/90 hover:bg-pink-400 text-white flex items-center justify-center shadow-[0_0_30px_rgba(244,114,182,0.8)] hover:scale-110 transition-all cursor-pointer group/btn"
                type="button"
                aria-label="Play video"
              >
                <span className="material-symbols-outlined text-[36px] sm:text-[44px] ml-1 fill-current">
                  play_arrow
                </span>
              </button>
            </div>
          )}

          {/* Playing Overlay Subtitles */}
          {isPlaying && subtitlesEnabled && (
            <div className="absolute bottom-6 inset-x-8 flex justify-center z-10">
              <span className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-medium text-xs sm:text-sm text-center shadow-lg">
                “Every quiet ride, every silly laugh, every single frame with you is my favorite.”
              </span>
            </div>
          )}
        </div>

        {/* Sprocket Holes Bottom Decoration */}
        <div className="w-full flex justify-between py-2 overflow-hidden opacity-30 select-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-3 h-2 rounded-sm bg-white/40 mx-1 shrink-0" />
          ))}
        </div>

        {/* Playback Control Bar */}
        <div className="w-full p-4 rounded-2xl bg-[#0f111e] border border-white/10 mt-2 flex flex-col gap-3 shadow-lg">
          {/* Scrubber Timeline */}
          <div className="w-full flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#9892a7] w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={totalTime}
              value={currentTime}
              onChange={handleSeek}
              className="w-full accent-pink-500 cursor-pointer h-1.5 bg-white/10 rounded-full"
            />
            <span className="text-[11px] font-mono text-[#9892a7] w-10">
              {formatTime(totalTime)}
            </span>
          </div>

          {/* Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-400 text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <button
                onClick={() => setCurrentTime((prev) => Math.max(0, prev - 10))}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
                title="Replay 10s"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">replay_10</span>
              </button>

              <span className="text-xs text-[#b8b2c7] hidden md:inline ml-2">
                {LEVEL_19_DATA.sceneDescription}
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              {/* Subtitles Toggle */}
              <button
                onClick={() => setSubtitlesEnabled((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                  subtitlesEnabled
                    ? 'bg-pink-500/30 text-pink-300 border border-pink-400/40'
                    : 'bg-white/5 text-[#888]'
                }`}
                type="button"
              >
                CC
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#9892a7]">
                  {volume === 0 ? 'volume_off' : 'volume_up'}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-16 sm:w-20 accent-pink-500 h-1 bg-white/10 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Film Reel Memory Stills (3 Frames) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[#9892a6] uppercase tracking-wider">
              Film Reel Selection • Tap any frame to project
            </span>
            <span className="text-xs font-caveat text-pink-300">
              35mm negative stills ♡
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LEVEL_19_DATA.stillFrames.map((frame, index) => (
              <div
                key={frame.id}
                onClick={() => setSelectedFrameIndex(index + 1)}
                className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 group ${
                  selectedFrameIndex === index + 1
                    ? 'bg-[#1e2236] border-pink-400/50 shadow-[0_0_15px_rgba(244,114,182,0.2)]'
                    : 'bg-[#151827]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black relative">
                  <img
                    src={frame.imageUrl}
                    alt={frame.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-mono text-white">
                    {frame.roll} • {frame.frame}
                  </div>
                </div>
                <span className="text-xs font-semibold text-white group-hover:text-pink-200 capitalize">
                  {frame.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Revelation Keepsake Card */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#1d1f30] to-[#141624] border border-pink-500/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono text-pink-400 uppercase tracking-widest font-semibold">
              {LEVEL_19_DATA.endCardTitle}
            </span>
            <h3 className="font-caveat text-2xl sm:text-3xl text-white mt-1">
              {LEVEL_19_DATA.endCardQuote}
            </h3>
            <p className="text-xs sm:text-sm text-[#cfc8de] leading-relaxed max-w-2xl mt-1">
              {LEVEL_19_DATA.endCardText}
            </p>
          </div>

          <div className="p-3 px-5 rounded-xl bg-pink-500/10 border border-pink-400/30 text-pink-200 text-xs font-semibold shrink-0 text-center">
            <span>21 Episodes</span>
            <span className="block text-[10px] text-[#9b94a8]">Infinite Sequels Ahead</span>
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
              Level Complete ✨ ARCHIVED
            </span>
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2 mt-0.5">
              <span>Chapter 19 unlocked • 2 more levels until the Grand Finale!</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#cac4d7] mt-0.5 max-w-xl">
              The penultimate door is opening. Step into Level 20.
            </p>
          </div>
        </div>

        <button
          onClick={onComplete}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          type="button"
        >
          <span>Continue to Level 20</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
