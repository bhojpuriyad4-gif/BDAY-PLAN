import React, { useRef } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { LEVEL_10_TIMELINE } from '../data/birthdayData';
import { sound } from '../utils/audio';

interface Level10Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level10: React.FC<Level10Props> = ({ onComplete, onBack }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleFinish = () => {
    sound.playVictory();
    onComplete();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader levelNumber={10} onBack={onBack} />

      {/* Header title */}
      <div className="text-center max-w-xl mx-auto mb-6 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Our Timeline</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Scroll through our journey together, one cherished chapter at a time.
        </p>
      </div>

      {/* Desktop Scroll Controls */}
      <div className="hidden md:flex items-center justify-end w-full max-w-5xl gap-2 mb-2">
        <button
          onClick={() => handleScroll('left')}
          className="w-9 h-9 rounded-full bg-[#151826]/80 border border-white/10 flex items-center justify-center text-[#b9b4c7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Scroll Left"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="w-9 h-9 rounded-full bg-[#151826]/80 border border-white/10 flex items-center justify-center text-[#b9b4c7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Scroll Right"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>

      {/* Horizontal Scroll on desktop / Stack on mobile */}
      <div
        ref={scrollContainerRef}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-stretch gap-6 overflow-x-auto pb-6 scrollbar-thin px-2 py-4"
      >
        {LEVEL_10_TIMELINE.map((item, idx) => (
          <div
            key={item.step}
            className="w-72 sm:w-80 shrink-0 p-5 rounded-3xl bg-[#151826]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            {/* Step badge & date */}
            <div className="flex items-center justify-between text-xs text-[#8e8697] mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-300 font-medium border border-pink-400/20">
                Chapter {idx + 1}
              </span>
              <span className="font-mono text-white/70">{item.date}</span>
            </div>

            {/* Polaroid Photo */}
            <div className="w-full bg-[#282c3c] p-2.5 pb-4 rounded-2xl shadow-md border border-white/10 my-2 -rotate-1 group-hover:rotate-0 transition-transform">
              <div className="w-full h-44 rounded-xl bg-[#111421] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-caveat text-xl text-pink-200 text-center mt-3">
                {item.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-[#b9b4c7] mt-3 leading-relaxed text-center">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Final Celebration Card at end of Level 10 */}
      <div className="w-full max-w-xl mt-8 p-8 rounded-3xl bg-[#151826]/95 border border-pink-400/40 shadow-[0_0_40px_rgba(244,114,182,0.3)] text-center flex flex-col items-center animate-fadeIn">
        <span className="font-caveat text-4xl sm:text-5xl text-pink-300 drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
          Look how far we've come... ♡
        </span>
        <p className="text-sm text-white/90 mt-2 max-w-md font-medium leading-relaxed">
          10 unforgettable chapters completed. Every single memory has led us right here to your 21st birthday celebration.
        </p>

        <div className="w-full h-[1px] bg-white/10 my-6" />

        <button
          onClick={handleFinish}
          className="px-8 py-3.5 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all cursor-pointer flex items-center gap-2"
          type="button"
        >
          <span>Complete Level 10 & Return to Dashboard</span>
          <span className="material-symbols-outlined text-[18px]">celebration</span>
        </button>
      </div>
    </div>
  );
};
