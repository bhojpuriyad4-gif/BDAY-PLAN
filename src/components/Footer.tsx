import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-[#080a13]/90 border-t border-white/5 backdrop-blur-md py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 text-[#b9b4c7] text-xs">
          <span className="font-caveat text-xl text-pink-300 font-bold">
            Twenty One Little Surprises
          </span>
          <span className="text-white/20">•</span>
          <span>Created with all my heart</span>
          <span className="text-pink-400 text-[10px]">✦</span>
        </div>
        <div className="flex items-center gap-3 text-[#b9b4c7] text-xs">
          <span className="flex items-center gap-1 text-pink-200">
            <span className="material-symbols-outlined text-[13px]">favorite</span>
            21 / 21 Milestones
          </span>
          <span className="text-white/20">|</span>
          <span>Happy 21st Birthday, My Love</span>
        </div>
      </div>
    </footer>
  );
};
