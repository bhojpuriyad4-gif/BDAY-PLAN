import React, { useRef, useEffect, useState, useCallback } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { sound } from '../utils/audio';

interface Level04Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level04: React.FC<Level04Props> = ({ onComplete, onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scratchedPercent, setScratchedPercent] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const isDrawing = useRef(false);
  const lastSoundTime = useRef(0);

  // Initialize Canvas
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Beautiful silver & metallic rose-gold foil gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#3a3147');
    grad.addColorStop(0.3, '#5c4b72');
    grad.addColorStop(0.5, '#7e6191');
    grad.addColorStop(0.7, '#5c4b72');
    grad.addColorStop(1, '#2c223a');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Decorative foil pattern with stars & sparkles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Centered foil text
    ctx.fillStyle = 'rgba(255, 215, 235, 0.7)';
    ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Scratch Here to Reveal ♡ ✨', width / 2, height / 2);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentCount = 0;
      const step = 32; // sampling step for performance

      for (let i = 3; i < pixels.length; i += step * 4) {
        if (pixels[i] === 0) {
          transparentCount++;
        }
      }

      const totalSamples = pixels.length / (step * 4);
      const percent = Math.min(100, Math.round((transparentCount / totalSamples) * 100));
      setScratchedPercent(percent);

      if (percent >= 38 && !isRevealed) {
        revealCard();
      }
    } catch {
      // Ignore cross-origin error if any
    }
  };

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    const now = Date.now();
    if (now - lastSoundTime.current > 120) {
      sound.playScratch();
      lastSoundTime.current = now;
    }

    checkScratchPercentage();
  };

  const revealCard = () => {
    setIsRevealed(true);
    setScratchedPercent(100);
    sound.playSparkle();

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isRevealed) return;
    isDrawing.current = true;
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing.current || isRevealed) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isRevealed) return;
    isDrawing.current = true;
    if (e.touches.length > 0) {
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDrawing.current || isRevealed) return;
    if (e.touches.length > 0) {
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <LevelHeader levelNumber={4} onBack={onBack} />

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-6 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Scratch & Reveal</span>
          <span className="text-amber-300 text-3xl sm:text-4xl">✨</span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Scratch the card to see what's hidden!
        </p>
      </div>

      {/* Main Scratch Canvas Container with Side Doodles */}
      <div className="relative w-full max-w-2xl my-2 flex items-center justify-center">
        {/* Floating doodles */}
        <div className="hidden lg:block absolute -left-16 xl:-left-28 top-1/2 -translate-y-1/2 -rotate-6 pointer-events-none text-left">
          <span className="font-caveat text-2xl xl:text-3xl text-pink-300 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
            A little effort for a<br />little surprise ♡
          </span>
        </div>

        <div className="hidden lg:block absolute -right-16 xl:-right-28 top-1/3 rotate-3 pointer-events-none text-left">
          <div className="flex flex-col items-start">
            <span className="font-caveat text-xl xl:text-2xl text-pink-200 drop-shadow-[0_0_8px_rgba(244,114,182,0.3)]">
              Always your<br />greatest fan ♡
            </span>
            <span className="font-caveat text-2xl text-white mt-1 flex items-center gap-1">
              👆 Drag to scratch!
            </span>
          </div>
        </div>

        {/* Card Frame */}
        <div
          ref={containerRef}
          className="relative w-full min-h-[300px] sm:min-h-[340px] rounded-3xl bg-[#151826]/90 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-6 sm:p-8 overflow-hidden flex flex-col justify-between"
        >
          {/* Underlying Revealed Content */}
          <div className="flex flex-col justify-between h-full z-0">
            {/* Top pill */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200 text-xs font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  {isRevealed ? 'lock_open' : 'lock'}
                </span>
                <span>{isRevealed ? 'Surprise Unlocked' : 'Scratch to Unlock'}</span>
              </div>
            </div>

            {/* Inner Content: Polaroid + Message */}
            <div className="flex flex-col sm:flex-row items-center gap-6 my-auto">
              {/* Mini Polaroid */}
              <div className="w-36 sm:w-44 bg-[#282c3c] p-2 pb-4 rounded-xl shadow-xl -rotate-3 border border-white/10 shrink-0">
                <div className="w-full h-28 sm:h-32 rounded bg-[#111421] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
                    alt="Always smiling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-caveat text-lg text-pink-200 text-center mt-2">
                  always smiling ♡
                </p>
              </div>

              {/* Message */}
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-[11px] font-semibold text-pink-300 uppercase tracking-widest block mb-1">
                  SWEET WHISPER
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Your smile is my favorite reason to celebrate.
                </h3>
                <p className="font-caveat text-2xl sm:text-3xl text-pink-300 mt-2 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
                  You're getting closer... Level Complete! ✨
                </p>
              </div>
            </div>

            {/* Bottom footnote */}
            <div className="text-center mt-4">
              <span className="text-xs text-[#b9b4c7] flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                Milestone 4 reward stored in your memory vault
              </span>
            </div>
          </div>

          {/* HTML5 Scratch Foil Overlay */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="absolute inset-0 z-10 w-full h-full cursor-crosshair touch-none transition-opacity duration-500 rounded-3xl"
            />
          )}
        </div>
      </div>

      {/* Status strip below card */}
      <div className="w-full max-w-2xl flex items-center justify-between text-xs text-[#b9b4c7] px-2 mt-3">
        <span className="flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-[14px] text-pink-300">
            auto_awesome
          </span>
          Scratched foil: {scratchedPercent}%
        </span>
        {!isRevealed && (
          <button
            onClick={revealCard}
            type="button"
            className="text-pink-300 hover:text-pink-200 underline cursor-pointer"
          >
            Reveal whole card
          </button>
        )}
      </div>

      {/* Continue button */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <button
          onClick={onComplete}
          disabled={!isRevealed}
          className={`px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
            isRevealed
              ? 'bg-pink-400 text-[#400014] shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:bg-pink-300 hover:scale-105 active:scale-95 cursor-pointer'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">celebration</span>
          <span>CONTINUE TO LEVEL 05</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
        <span className="text-xs text-[#8e8697]">
          17 more surprises waiting for your 21st!
        </span>
      </div>
    </div>
  );
};
