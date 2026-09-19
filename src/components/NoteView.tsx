import React from 'react';

interface NoteViewProps {
  onBack: () => void;
}

export const NoteView: React.FC<NoteViewProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-16 flex flex-col items-center select-none">
      <div className="text-center max-w-xl mx-auto mb-8 relative mt-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>A Little Note For You</span>
          <span className="text-pink-300 font-caveat text-4xl">♡</span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2">
          Words from the bottom of my heart, sealed with love.
        </p>
      </div>

      {/* Styled Letter Paper */}
      <div className="relative w-full max-w-2xl bg-[#1e2232]/95 border border-pink-400/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col">
        {/* Postal stamp / seal top right */}
        <div className="absolute top-6 right-6 w-16 h-20 border-2 border-dashed border-pink-400/40 rounded flex flex-col items-center justify-center p-1 rotate-6 bg-pink-500/10">
          <span className="text-pink-300 text-lg">💌</span>
          <span className="text-[9px] font-mono text-pink-300 uppercase mt-1">21st BDAY</span>
        </div>

        <p className="font-caveat text-3xl sm:text-4xl text-pink-300 mb-6">
          To My Favorite Person,
        </p>

        <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed">
          <p>
            Happy 21st Birthday! I wanted to make something that felt like a quiet little sanctuary for just the two of us — full of our inside jokes, songs that remind me of you, and all the milestones we've shared.
          </p>
          <p>
            Thank you for bringing so much warmth, silly laughter, and kindness into my everyday life. Whether we are driving with no destination, eating late-night snacks, or just sitting together doing nothing at all, every second with you is my favorite place to be.
          </p>
          <p>
            Here is to 21 years of your brilliant light, and to a lifetime more of adventures together.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-end text-right">
          <span className="text-xs text-[#8e8697] uppercase tracking-wider">Always & Forever,</span>
          <span className="font-sacramento text-4xl sm:text-5xl text-pink-300 mt-1">
            With all my love ♡
          </span>
        </div>
      </div>

      <button
        onClick={onBack}
        type="button"
        className="mt-8 px-8 py-3 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        <span>Back to Surprises</span>
      </button>
    </div>
  );
};
