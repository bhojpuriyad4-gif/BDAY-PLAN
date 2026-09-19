import React, { useState, useEffect } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audio';

interface Level07Props {
  onComplete: () => void;
  onBack: () => void;
}

const PUZZLE_SIZE = 3; // 3x3
const TOTAL_TILES = PUZZLE_SIZE * PUZZLE_SIZE; // 9

export const Level07: React.FC<Level07Props> = ({ onComplete, onBack }) => {
  // Tile positions array: index is board position (0..8), value is original piece index (0..8)
  const [board, setBoard] = useState<number[]>([1, 0, 2, 4, 3, 5, 7, 6, 8]);
  const [selectedPos, setSelectedPos] = useState<number | null>(null);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const puzzleImage = BIRTHDAY_CONFIG.fallbackPuzzleImage;

  // Check if solved
  const checkSolved = (currentBoard: number[]) => {
    for (let i = 0; i < TOTAL_TILES; i++) {
      if (currentBoard[i] !== i) return false;
    }
    return true;
  };

  const handleTileClick = (pos: number) => {
    if (isSolved) return;

    sound.playFlip();

    if (selectedPos === null) {
      setSelectedPos(pos);
    } else if (selectedPos === pos) {
      setSelectedPos(null);
    } else {
      // Swap selectedPos and pos
      const newBoard = [...board];
      const temp = newBoard[selectedPos];
      newBoard[selectedPos] = newBoard[pos];
      newBoard[pos] = temp;
      setBoard(newBoard);
      setSelectedPos(null);

      if (checkSolved(newBoard)) {
        setIsSolved(true);
        sound.playVictory();
      }
    }
  };

  const handleShuffle = () => {
    const newBoard = [...board];
    // Perform random swaps
    for (let i = 0; i < 6; i++) {
      const a = Math.floor(Math.random() * TOTAL_TILES);
      const b = Math.floor(Math.random() * TOTAL_TILES);
      const t = newBoard[a];
      newBoard[a] = newBoard[b];
      newBoard[b] = t;
    }
    setBoard(newBoard);
    setIsSolved(false);
    setSelectedPos(null);
  };

  const handleAutoSolve = () => {
    const solved = Array.from({ length: TOTAL_TILES }, (_, i) => i);
    setBoard(solved);
    setIsSolved(true);
    sound.playVictory();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader levelNumber={7} onBack={onBack} />

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-6 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Piece by Piece</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Reconstruct our favorite photo memory. Tap one piece, then another to swap!
        </p>
      </div>

      {/* 3x3 Puzzle Arena */}
      <div className="relative w-full max-w-md p-4 sm:p-6 rounded-3xl bg-[#151826]/90 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col items-center">
        <div className="grid grid-cols-3 gap-2 w-72 h-72 sm:w-80 sm:h-80 bg-[#080a13] p-2 rounded-2xl border border-white/10 shadow-inner">
          {board.map((pieceIdx, pos) => {
            const isSelected = selectedPos === pos;
            const originalCol = pieceIdx % PUZZLE_SIZE;
            const originalRow = Math.floor(pieceIdx / PUZZLE_SIZE);
            const posX = (originalCol / (PUZZLE_SIZE - 1)) * 100;
            const posY = (originalRow / (PUZZLE_SIZE - 1)) * 100;

            return (
              <div
                key={pos}
                onClick={() => handleTileClick(pos)}
                className={`relative w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border-2 shadow-md ${
                  isSelected
                    ? 'border-pink-400 scale-105 z-20 shadow-[0_0_15px_rgba(244,114,182,0.7)]'
                    : isSolved
                    ? 'border-emerald-400/50'
                    : 'border-white/10 hover:border-white/40'
                }`}
                style={{
                  backgroundImage: `url(${puzzleImage})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: `${posX}% ${posY}%`,
                }}
              >
                {/* Tile number helper */}
                {!isSolved && (
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/60 text-[10px] text-white/80 font-mono">
                    {pieceIdx + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-4 text-xs">
          <button
            onClick={handleShuffle}
            type="button"
            className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#b9b4c7] hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            Shuffle
          </button>
          <button
            onClick={handleAutoSolve}
            type="button"
            className="px-4 py-1.5 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-400/30 transition-colors cursor-pointer"
          >
            Solve Helper ✨
          </button>
        </div>
      </div>

      {/* Victory State */}
      {isSolved && (
        <div className="mt-6 p-6 rounded-2xl bg-[#151826]/95 border border-pink-400/40 text-center max-w-md animate-fadeIn shadow-2xl flex flex-col items-center">
          <span className="text-3xl">✨</span>
          <h3 className="font-caveat text-3xl text-pink-300 mt-1">
            Puzzle Completed! ♡
          </h3>
          <p className="text-xs text-[#b9b4c7] mt-1 mb-4">
            Every piece of you fits perfectly with me.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3.5 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
            type="button"
          >
            <span>CONTINUE TO LEVEL 08</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
};
