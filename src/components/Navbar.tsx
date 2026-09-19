import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenHeart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, onOpenHeart }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    sound.registerMusicCallback((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const handleToggleMusic = () => {
    const newState = sound.toggleMusic();
    setIsPlaying(newState);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e111d]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <span className="font-caveat text-3xl font-bold text-pink-300 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)] transition-transform group-hover:scale-105">
            For You
          </span>
          <span className="text-pink-400 text-lg transition-transform group-hover:scale-125 animate-pulse">
            ♡
          </span>
        </button>

        {/* Navigation pill */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-1 bg-[#151826]/70 rounded-full border border-white/5 backdrop-blur-md">
          <button
            onClick={() => onSelectTab('home')}
            className={`px-4 py-1 text-[13px] font-medium transition-all duration-300 rounded-full cursor-pointer ${
              currentTab === 'home'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/30 shadow-[0_0_12px_rgba(244,114,182,0.25)]'
                : 'text-[#b9b4c7] hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onSelectTab('levels')}
            className={`px-4 py-1 text-[13px] font-medium transition-all duration-300 rounded-full cursor-pointer ${
              currentTab === 'levels'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/30 shadow-[0_0_12px_rgba(244,114,182,0.25)]'
                : 'text-[#b9b4c7] hover:text-white'
            }`}
          >
            Levels
          </button>
          <button
            onClick={() => onSelectTab('memories')}
            className={`px-4 py-1 text-[13px] font-medium transition-all duration-300 rounded-full cursor-pointer ${
              currentTab === 'memories'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/30 shadow-[0_0_12px_rgba(244,114,182,0.25)]'
                : 'text-[#b9b4c7] hover:text-white'
            }`}
          >
            Memories
          </button>
          <button
            onClick={() => onSelectTab('note')}
            className={`px-4 py-1 text-[13px] font-medium transition-all duration-300 rounded-full cursor-pointer ${
              currentTab === 'note'
                ? 'bg-pink-500/20 text-pink-200 border border-pink-500/30 shadow-[0_0_12px_rgba(244,114,182,0.25)]'
                : 'text-[#b9b4c7] hover:text-white'
            }`}
          >
            A Little Note
          </button>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Music Control Button */}
          <button
            onClick={handleToggleMusic}
            aria-label="Ambient background music"
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-pink-300 transition-all shadow-[0_0_12px_rgba(244,114,182,0.15)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isPlaying ? 'music_note' : 'music_off'}
            </span>
            <div className="flex items-end gap-[2px] h-3 px-0.5">
              <div className={`w-0.5 bg-pink-300 rounded-full ${isPlaying ? 'wave-bar-1' : 'h-1'}`} />
              <div className={`w-0.5 bg-pink-300 rounded-full ${isPlaying ? 'wave-bar-2' : 'h-1.5'}`} />
              <div className={`w-0.5 bg-pink-300 rounded-full ${isPlaying ? 'wave-bar-3' : 'h-1'}`} />
            </div>
            <span className="text-[12px] font-medium hidden sm:inline text-[#b9b4c7]">
              {isPlaying ? 'Playing Melody' : 'Song for You'}
            </span>
          </button>

          {/* Heart button */}
          <button
            onClick={onOpenHeart}
            className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shadow-[0_0_12px_rgba(244,114,182,0.3)] transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            title="A birthday whisper"
          >
            <span className="material-symbols-outlined text-[18px]">favorite</span>
          </button>
        </div>
      </div>
    </header>
  );
};
