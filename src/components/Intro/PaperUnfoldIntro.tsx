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
    <div className="fixed inset-0 z-50 bg-black text-white font-serif overflow-hidden select-none flex flex-col justify-between items-center">
      
      {/* 1. Full-Page SVG Cover Background with Darkness Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg
          viewBox="0 0 1024 1024"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full pointer-events-none"
        >
          <g
            className={`transition-all duration-[1200ms] ${
              step === 4 ? 'opacity-0' : 'opacity-65'
            }`}
            style={{
              transformOrigin: '512px 512px',
              transform: step === 4 
                ? 'scale(8)'
                : 'scale(1)',
              willChange: 'transform, opacity',
              transitionTimingFunction: step === 4 ? 'cubic-bezier(0.22, 1, 0.36, 1)' : 'ease-out',
            }}
          >
            <image
              href="/scattered_newspapers.png"
              x="0"
              y="0"
              width="1024"
              height="1024"
            />
          </g>
        </svg>

        {/* High-Contrast Vignette & Dark Tint Overlay */}
        <div className={`absolute inset-0 bg-black/65 transition-opacity duration-1000 pointer-events-none ${
          step === 4 ? 'opacity-0' : 'opacity-100'
        }`}></div>
      </div>

      {/* 2. Broadsheet Double Rule Frame Overlay */}
      <div className={`absolute inset-3 sm:inset-6 border-4 border-double border-[#E9DFC9]/80 pointer-events-none transition-opacity duration-1000 z-10 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-full h-full border border-[#E9DFC9]/40 p-2"></div>
      </div>

      {/* Skip Button Top Right */}
      <div className="relative z-30 w-full flex justify-end p-4 sm:p-6">
        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase bg-black/80 border border-[#E9DFC9] text-[#E9DFC9] px-4 py-2 hover:bg-[#8A6A3D] hover:text-white transition-all shadow-md backdrop-blur-md rounded-xs cursor-pointer"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Centered High-Contrast Text Plate Container */}
      <div className={`relative z-30 max-w-3xl mx-auto text-center px-4 sm:px-8 w-full my-auto transition-all duration-1000 ${
        step === 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        
        {/* Editorial Dark Card Backdrop for Perfect Text Readability */}
        <div className="bg-black/80 backdrop-blur-md border-2 border-[#E9DFC9]/70 p-6 sm:p-10 shadow-2xl rounded-xs">
          
          {/* Metadata Reveal */}
          <div className={`transition-all duration-600 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
            <div className="flex items-center justify-center gap-2 text-xs font-typewriter tracking-widest text-amber-300 font-bold uppercase mb-2">
              <span>{NEWSPAPER_META.editionName} • VOL. {NEWSPAPER_META.volumeNo} • ISSUE {NEWSPAPER_META.editionNo}</span>
            </div>
          </div>

          {/* Masthead Title */}
          <div className={`transition-all duration-600 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <h1 className="font-ciguatera text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F3E9D5] tracking-tight drop-shadow-xl my-2">
              {NEWSPAPER_META.title}
            </h1>
            <div className="w-full h-1 bg-[#E9DFC9]/80 my-3"></div>
          </div>

          {/* Headline Typewriter Reveal (Strictly Once) */}
          <div className="min-h-14 my-2 flex items-center justify-center">
            {step >= 2 && (
              <h2 className="font-ciguatera text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-2xl">
                {headlineText}
                <span className="animate-pulse text-amber-400 font-normal">|</span>
              </h2>
            )}
          </div>

          {/* Subtitle Reveal */}
          <div className={`transition-all duration-600 transform ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="font-serif italic text-sm sm:text-lg text-[#F3E9D5]/90 max-w-xl mx-auto drop-shadow-md mt-3 leading-relaxed">
              "A Computer Science student exploring software, data, artificial intelligence and creative technology."
            </p>
          </div>

        </div>

      </div>

      {/* Footer Dateline Bar */}
      <div className={`relative z-30 text-center font-typewriter text-xs text-[#E9DFC9] border-t border-[#E9DFC9]/40 pt-3 pb-6 uppercase tracking-widest font-semibold transition-opacity duration-1000 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        {NEWSPAPER_META.dateline} • EST. {NEWSPAPER_META.established}
      </div>

    </div>
  );
};
