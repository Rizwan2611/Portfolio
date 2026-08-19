import React, { useState } from 'react';
import { TICKER_HEADLINES } from '../../data/newspaperData';
import { Flame } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface BreakingTickerProps {
  onSelectHeadline?: (headline: string) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({ onSelectHeadline }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full bg-[var(--accent-red)] text-white font-typewriter text-xs py-1.5 px-4 overflow-hidden shadow-xs flex items-center border-b border-[var(--border-dark)]">
      {/* Label Badge */}
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider bg-white text-[var(--accent-red)] px-2 py-0.5 rounded-xs shrink-0 mr-3 animate-pulse">
        <Flame className="w-3.5 h-3.5 fill-current" />
        <span>EXTRA! EXTRA!</span>
      </div>

      {/* Marquee Container */}
      <div 
        className="overflow-hidden whitespace-nowrap cursor-pointer flex-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="inline-block transition-transform duration-1000 ease-linear"
          style={{
            animation: isPaused ? 'none' : 'marquee 35s linear infinite',
          }}
        >
          {TICKER_HEADLINES.concat(TICKER_HEADLINES).map((item, idx) => (
            <span
              key={idx}
              onClick={() => {
                soundManager.playTypewriter();
                if (onSelectHeadline) onSelectHeadline(item);
              }}
              className="inline-flex items-center gap-2 mx-6 hover:underline font-semibold"
            >
              <span>{item}</span>
              <span className="text-amber-300 font-bold">•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
