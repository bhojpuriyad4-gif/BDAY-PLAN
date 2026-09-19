import React from 'react';

interface WhisperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhisperModal: React.FC<WhisperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#080a13]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#151826] border border-pink-400/40 shadow-[0_0_50px_rgba(244,114,182,0.3)] text-center flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shadow-md mb-3">
          <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            favorite
          </span>
        </div>

        <span className="font-caveat text-3xl text-pink-300">
          A Birthday Whisper ♡
        </span>

        <p className="text-sm text-white/90 my-3 leading-relaxed">
          “In case nobody told you today: you are wonderful, you are loved beyond words, and the world is infinitely better with you in it.”
        </p>

        <button
          onClick={onClose}
          type="button"
          className="mt-3 px-6 py-2 rounded-full bg-pink-400 text-[#400014] font-semibold text-xs hover:bg-pink-300 transition-all cursor-pointer shadow-md"
        >
          Keep in my heart ♡
        </button>
      </div>
    </div>
  );
};
