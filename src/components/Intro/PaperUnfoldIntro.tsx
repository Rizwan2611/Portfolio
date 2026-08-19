import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, FastForward } from 'lucide-react';
import { NEWSPAPER_META } from '../../data/newspaperData';

interface PaperUnfoldIntroProps {
  onUnfold: () => void;
}

export const PaperUnfoldIntro: React.FC<PaperUnfoldIntroProps> = ({ onUnfold }) => {
  const [step, setStep] = useState(0); // 0: Photo background, 1: Masthead, 2: Headline typewriter, 3: Subtitle, 4: Auto-Zoom Eye
  const [headlineText, setHeadlineText] = useState('');
  const hasTypedRef = useRef(false);
  const fullHeadline = 'THE DIGITAL BUILDER';

  // SVG 1024x682 Fixed Canvas Space:
  // Exact Target Coordinates extracted from user's close-up crop: x = 628, y = 185
  const eyeX = 628;
  const eyeY = 185;
  const zoomScale = 30;

  // Exact mathematical translation to pull target eye to SVG viewport center (512, 341)
  const targetTx = 512 - eyeX * zoomScale;
  const targetTy = 341 - eyeY * zoomScale;

  useEffect(() => {
    // 1. Masthead & Metadata appear slowly (1000ms)
    const t1 = setTimeout(() => {
      setStep(1);
    }, 1000);

    // 2. Deliberate Typewriter headline reveals (2500ms)
    const t2 = setTimeout(() => {
      setStep(2);
    }, 2500);

    // 3. Subtitle appears gracefully (5500ms)
    const t3 = setTimeout(() => {
      setStep(3);
    }, 5500);

    // 4. Automatic ultra-slow cinematic zoom straight into user's exact target eye pupil (8500ms)
    const t4 = setTimeout(() => {
      setStep(4);
    }, 8500);

    // 5. Complete zoom & transition into main portfolio (13200ms)
    const t5 = setTimeout(() => {
      onUnfold();
    }, 13200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onUnfold]);

  // Strict Single-Execution Typewriter headline reveal (Runs ONLY ONCE)
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
    }, 110); // Deliberate smooth typing rhythm

    return () => clearInterval(interval);
  }, [step]);

  const handleSkip = () => {
    setStep(4);
    setTimeout(() => {
      onUnfold();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white font-serif overflow-hidden select-none">
      
      {/* 1. Full-Page SVG Framed Cover Photo with 1:1 Vector Space Pupil Zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg
          viewBox="0 0 1024 682"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full pointer-events-none"
        >
          <g
            className={`transition-all duration-[4500ms] ${
              step === 4 ? 'opacity-0' : 'opacity-85'
            }`}
            style={{
              transform: step === 4 
                ? `translate(${targetTx}px, ${targetTy}px) scale(${zoomScale})`
                : 'translate(0px, 0px) scale(1)',
              willChange: 'transform, opacity',
              transitionTimingFunction: step === 4 ? 'cubic-bezier(0.16, 1, 0.3, 1)' : 'ease-out',
            }}
          >
            <image
              href="/rizwan_photo.png"
              x="0"
              y="0"
              width="1024"
              height="682"
            />
          </g>
        </svg>

        {/* Editorial Sepia & Vignette Overlays */}
        <div className={`absolute inset-0 bg-[#E9DFC9]/35 mix-blend-multiply transition-opacity duration-1500 pointer-events-none ${
          step === 4 ? 'opacity-0' : 'opacity-100'
        }`}></div>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/80 transition-opacity duration-1500 pointer-events-none ${
          step === 4 ? 'opacity-0' : 'opacity-100'
        }`}></div>
      </div>

      {/* 2. Broadsheet Double Rule Frame Overlay */}
      <div className={`absolute inset-4 sm:inset-6 border-4 border-double border-[#E9DFC9]/80 pointer-events-none transition-opacity duration-1500 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-full h-full border border-[#E9DFC9]/40 p-2"></div>
      </div>

      {/* Skip Button Top Right */}
      <div className="relative z-20 flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase bg-black/70 border border-[#E9DFC9] text-[#E9DFC9] px-4 py-2 hover:bg-[#8A6A3D] hover:text-white transition-all shadow-md backdrop-blur-xs rounded-xs cursor-pointer"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Text Overlay Content (Positioned over full-page photo) */}
      <div className={`relative z-20 max-w-4xl mx-auto text-center my-auto px-4 w-full transition-all duration-1500 ${
        step === 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        
        {/* Metadata Reveal */}
        <div className={`transition-all duration-1200 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 text-xs font-typewriter tracking-widest text-amber-300 font-bold uppercase mb-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{NEWSPAPER_META.editionName} • VOL. {NEWSPAPER_META.volumeNo} • ISSUE {NEWSPAPER_META.editionNo}</span>
          </div>
        </div>

        {/* Masthead Title */}
        <div className={`transition-all duration-1200 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <h1 className="font-ciguatera text-5xl sm:text-7xl md:text-8xl font-black uppercase text-[#E9DFC9] tracking-tight drop-shadow-lg my-3">
            {NEWSPAPER_META.title}
          </h1>
          <div className="w-full h-1 bg-[#E9DFC9]/80 my-4"></div>
        </div>

        {/* Headline Typewriter Reveal (Strictly Once) */}
        <div className="min-h-16 my-3 flex items-center justify-center">
          {step >= 2 && (
            <h2 className="font-ciguatera text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-xl">
              {headlineText}
              <span className="animate-pulse text-amber-400">|</span>
            </h2>
          )}
        </div>

        {/* Subtitle Reveal */}
        <div className={`transition-all duration-1200 transform ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-serif italic text-base sm:text-xl text-amber-100/90 max-w-2xl mx-auto drop-shadow-md mb-4">
            "A Computer Science student exploring software, data, artificial intelligence and creative technology."
          </p>
        </div>

      </div>

      {/* Footer Dateline Bar */}
      <div className={`relative z-20 text-center font-typewriter text-xs text-[#E9DFC9]/80 border-t border-[#E9DFC9]/40 pt-3 pb-6 uppercase tracking-widest font-semibold transition-opacity duration-1500 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        {NEWSPAPER_META.dateline} • EST. {NEWSPAPER_META.established}
      </div>

    </div>
  );
};
