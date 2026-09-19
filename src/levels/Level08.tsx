import React, { useState } from 'react';
import { LevelHeader } from '../components/LevelHeader';
import { LEVEL_08_DOORS } from '../data/birthdayData';
import { sound } from '../utils/audio';

interface Level08Props {
  onComplete: () => void;
  onBack: () => void;
}

export const Level08: React.FC<Level08Props> = ({ onComplete, onBack }) => {
  const [selectedDoorId, setSelectedDoorId] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleSelectDoor = (doorId: string) => {
    sound.playFlip();
    setSelectedDoorId(doorId);
  };

  const handleConfirmChoice = () => {
    if (!selectedDoorId) return;
    sound.playSparkle();
    setIsOpened(true);
  };

  const selectedDoor = LEVEL_08_DOORS.find((d) => d.id === selectedDoorId);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col items-center select-none">
      <LevelHeader levelNumber={8} onBack={onBack} />

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-8 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          <span>Choose Your Fate</span>
          <span className="text-pink-300 font-caveat text-4xl sm:text-5xl font-normal drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]">
            ♡
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#b9b4c7] mt-2 font-normal">
          Pick a door...
        </p>
      </div>

      {/* Doors Container with Annotation */}
      <div className="relative w-full max-w-4xl my-2 flex flex-col items-center">
        {/* Annotation doodle top right */}
        <div className="hidden sm:block absolute right-4 -top-8 rotate-6 pointer-events-none select-none text-right">
          <span className="font-caveat text-2xl text-pink-200/90 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
            Every choice leads<br />to something ✨
          </span>
        </div>

        {/* 3 Archway Doors (responsive: stacked on mobile, 3-col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full z-10 px-4">
          {LEVEL_08_DOORS.map((door) => {
            const isSelected = selectedDoorId === door.id;
            const doorOpened = isOpened && isSelected;

            return (
              <div
                key={door.id}
                onClick={() => handleSelectDoor(door.id)}
                className={`flex flex-col items-center cursor-pointer group transition-all duration-300 ${
                  isSelected ? 'scale-105' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Archway Door Frame with Top Decoration */}
                <div className="relative w-56 h-80 sm:w-60 sm:h-88 flex flex-col items-center">
                  {/* Top floral/sparkle decoration */}
                  <div className="absolute -top-4 z-20 text-lg flex items-center gap-1.5 filter drop-shadow">
                    <span>{door.topDecoration}</span>
                  </div>

                  {/* Archway outer wall */}
                  <div
                    className={`w-full h-full rounded-t-full bg-[#151826]/90 border-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center p-3 shadow-2xl ${
                      isSelected
                        ? door.glow
                        : 'border-white/10 hover:border-white/25'
                    }`}
                  >
                    {/* Inner door panel with 3D open transform */}
                    <div
                      className={`w-full h-full rounded-t-full bg-[#0e111d] border border-white/5 flex flex-col items-center justify-between p-4 relative transition-transform duration-700 origin-left ${
                        doorOpened ? '-rotate-y-80 opacity-40' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Top icon and latin name */}
                      <div className="mt-8 flex flex-col items-center">
                        <span className="material-symbols-outlined text-white/80 text-[26px]">
                          {door.icon}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-[#8e8697] uppercase mt-2">
                          {door.latin}
                        </span>
                      </div>

                      {/* Knob & Lower panels */}
                      <div className="w-full mb-4">
                        {/* Door knob */}
                        <div className="w-full flex justify-end pr-2 mb-3">
                          <div className="w-4 h-4 rounded-full bg-amber-300/80 shadow-md border border-amber-200" />
                        </div>
                        {/* 2 recessed panels */}
                        <div className="grid grid-cols-2 gap-2 w-full h-20">
                          <div className="rounded-lg bg-[#080a13] border border-white/[0.04]" />
                          <div className="rounded-lg bg-[#080a13] border border-white/[0.04]" />
                        </div>
                      </div>
                    </div>

                    {/* Revealed message inside door when opened */}
                    {doorOpened && (
                      <div className="absolute inset-0 z-20 rounded-t-full bg-[#1e1424]/95 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                        <span className="text-3xl mb-2">✨</span>
                        <h4 className="font-caveat text-2xl text-pink-300">
                          {door.revealText}
                        </h4>
                        <p className="text-xs text-white/90 mt-2 italic leading-relaxed">
                          "{door.message}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Lantern / candle at base */}
                  <div className="absolute -bottom-2 left-2 w-6 h-8 bg-amber-400/90 rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.8)] flex items-center justify-center text-[10px] border border-amber-200">
                    🕯️
                  </div>
                  <div className="absolute -bottom-2 right-2 w-6 h-8 bg-amber-400/90 rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.8)] flex items-center justify-center text-[10px] border border-amber-200">
                    🕯️
                  </div>
                </div>

                {/* Door title below */}
                <h3 className="text-base font-semibold text-white mt-4">
                  {door.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Action Button: Choose → or Continue to Level 09 */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {isOpened ? (
            <button
              onClick={onComplete}
              className="px-8 py-3.5 rounded-full bg-pink-400 text-[#400014] font-semibold text-sm hover:bg-pink-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(244,114,182,0.5)] transition-all cursor-pointer flex items-center gap-2"
              type="button"
            >
              <span>CONTINUE TO LEVEL 09</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          ) : (
            <button
              onClick={handleConfirmChoice}
              disabled={!selectedDoorId}
              className={`px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedDoorId
                  ? 'bg-pink-400 text-[#400014] shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:bg-pink-300 hover:scale-105 active:scale-95 cursor-pointer'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
              type="button"
            >
              <span>Choose →</span>
            </button>
          )}

          {selectedDoor && !isOpened && (
            <span className="text-xs text-pink-300/80">
              Selected: {selectedDoor.title} Door ♡ Click Choose to open!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
