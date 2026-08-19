import React, { useState, useEffect, useRef } from 'react';
import { FastForward } from 'lucide-react';
import { NEWSPAPER_META } from '../../data/newspaperData';

interface PaperUnfoldIntroProps {
  onUnfold: () => void;
}

export const PaperUnfoldIntro: React.FC<PaperUnfoldIntroProps> = ({ onUnfold }) => {
  const [step, setStep] = useState(0); // 0: Background, 1: Masthead, 2: Headline typewriter, 3: Subtitle, 4: Auto-Zoom Unfold
  const [headlineText, setHeadlineText] = useState('');
  const hasTypedRef = useRef(false);
  const fullHeadline = 'THE DIGITAL BUILDER';

  useEffect(() => {
    // 1. Masthead & Metadata appear (300ms)
    const t1 = setTimeout(() => {
      setStep(1);
    }, 300);

    // 2. Typewriter headline reveals (800ms)
    const t2 = setTimeout(() => {
      setStep(2);
    }, 800);

    // 3. Subtitle appears (1800ms)
    const t3 = setTimeout(() => {
      setStep(3);
    }, 1800);

    // 4. Smooth zoom into broadsheet headline (2500ms)
    const t4 = setTimeout(() => {
      setStep(4);
    }, 2500);

    // 5. Complete zoom & transition into main portfolio (3500ms - Total 3.5s)
    const t5 = setTimeout(() => {
      onUnfold();
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onUnfold]);

  // Smooth Typewriter headline reveal (45ms per char)
  useEffect(() => {
    if (step < 2 || hasTypedRef.current) return;
    hasTypedRef.current = true;

    let charIdx = 0;
    const interval = setInterval(() => {
      if (charIdx <= fullHeadline.length) {
        setHeadlineText(fullHeadline.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(interval);
      }
    }, 45); // Smooth 45ms typing pace

    return () => clearInterval(interval);
  }, [step]);

  const handleSkip = () => {
    setStep(4);
    setTimeout(() => {
      onUnfold();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#E9DFC9] text-[#171615] font-serif overflow-hidden select-none flex flex-col items-center justify-between p-4 sm:p-6">
      
      {/* 1. Full-Bleed Scattered Broadsheet Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="/scattered_newspapers.png"
          alt="Scattered Newspapers Cover"
          className={`w-full h-full object-cover transition-all duration-[1200ms] ${
            step === 4 ? 'opacity-0 scale-150' : 'opacity-25 scale-100'
          }`}
          style={{
            willChange: 'transform, opacity',
            transitionTimingFunction: step === 4 ? 'cubic-bezier(0.22, 1, 0.36, 1)' : 'ease-out',
          }}
        />

        {/* Sepia Tint Overlay */}
        <div className={`absolute inset-0 bg-[#E9DFC9]/60 mix-blend-multiply transition-opacity duration-1000 pointer-events-none ${
          step === 4 ? 'opacity-0' : 'opacity-100'
        }`}></div>
      </div>

      {/* 2. Broadsheet Double Rule Frame Overlay */}
      <div className={`absolute inset-3 sm:inset-6 border-4 border-double border-[#171615]/80 pointer-events-none transition-opacity duration-1000 z-10 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-full h-full border border-[#171615]/40 p-2"></div>
      </div>

      {/* Skip Button Top Right */}
      <div className="relative z-30 w-full flex justify-end">
        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase bg-[#171615] text-[#E9DFC9] px-4 py-2 hover:bg-[#8A6A3D] hover:text-white transition-all shadow-md rounded-xs cursor-pointer"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Full-Viewport Broadsheet Typography Container */}
      <div className={`relative z-30 max-w-5xl mx-auto text-center px-4 w-full my-auto transition-all duration-1000 flex flex-col items-center justify-center ${
        step === 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        
        {/* Edition Metadata */}
        <div className={`transition-all duration-600 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="text-xs sm:text-sm font-typewriter tracking-widest text-[#8A6A3D] font-bold uppercase mb-2">
            {NEWSPAPER_META.editionName} • VOL. {NEWSPAPER_META.volumeNo} • ISSUE {NEWSPAPER_META.editionNo}
          </div>
        </div>

        {/* Grand Masthead Title */}
        <div className={`transition-all duration-600 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <h1 className="font-ciguatera text-6xl sm:text-8xl md:text-9xl font-black uppercase text-[#171615] tracking-tight leading-none my-2 drop-shadow-xs">
            {NEWSPAPER_META.title}
          </h1>
          <div className="w-full max-w-3xl mx-auto h-1.5 bg-[#171615] my-3"></div>
        </div>

        {/* Headline Typewriter Reveal */}
        <div className="my-2 flex items-center justify-center min-h-[3.5rem]">
          {step >= 2 && (
            <h2 className="font-ciguatera text-3xl sm:text-5xl md:text-6xl font-black text-[#171615] uppercase tracking-tight leading-tight">
              {headlineText}
              <span className="animate-pulse text-[#8A6A3D] font-normal">|</span>
            </h2>
          )}
        </div>

        {/* Subtitle Reveal */}
        <div className={`transition-all duration-600 transform ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-serif italic text-base sm:text-2xl text-[#514A42] max-w-3xl mx-auto mt-3 leading-relaxed">
            "A Computer Science student exploring software, data, artificial intelligence and creative technology."
          </p>
        </div>

      </div>

      {/* Footer Dateline Bar */}
      <div className={`relative z-30 text-center font-typewriter text-xs text-[#171615] uppercase tracking-widest font-semibold transition-opacity duration-1000 w-full ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="max-w-md mx-auto border-t border-[#171615]/40 pt-2">
          {NEWSPAPER_META.dateline} • EST. {NEWSPAPER_META.established}
        </div>
      </div>

    </div>
  );
};
