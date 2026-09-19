import React from 'react';
import { LEVEL_10_TIMELINE, LEVEL_03_MEMORIES } from '../data/birthdayData';

interface MemoriesViewProps {
  onBack: () => void;
}

export const MemoriesView: React.FC<MemoriesViewProps> = ({ onBack }) => {
  const allPolaroids = [
    ...LEVEL_03_MEMORIES.map((m) => ({
      id: m.id,
      title: m.title,
      image: m.imageUrl,
      caption: m.caption,
    })),
    ...LEVEL_10_TIMELINE.map((t) => ({
      id: t.step,
      title: t.title,
      image: t.imageUrl,
      caption: t.date,
    })),
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 flex flex-col items-center select-none">
      <div className="text-center max-w-xl mx-auto mb-8 relative mt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Our Cherished Memories</span>
          <span className="text-pink-300 font-caveat text-4xl">♡</span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2">
          Snapshots of our favorite laughs, late night adventures, and quiet moments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl z-10">
        {allPolaroids.map((p, idx) => (
          <div
            key={idx}
            className={`bg-[#282c3c] p-3 pb-5 rounded-2xl shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-105 hover:rotate-0 ${
              idx % 2 === 0 ? '-rotate-1' : 'rotate-1'
            }`}
          >
            <div className="w-full h-52 rounded-xl bg-[#111421] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3 px-1">
              <h4 className="font-caveat text-2xl text-pink-200">{p.title}</h4>
              <span className="text-[11px] font-mono text-white/50">{p.caption}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        type="button"
        className="mt-12 px-8 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        <span>Return to Dashboard</span>
      </button>
    </div>
  );
};
