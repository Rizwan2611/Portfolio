import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, FastForward } from 'lucide-react';
import { NEWSPAPER_META } from '../../data/newspaperData';

interface PaperUnfoldIntroProps {
  onUnfold: () => void;
}

export const PaperUnfoldIntro: React.FC<PaperUnfoldIntroProps> = ({ onUnfold }) => {
  const [step, setStep] = useState(0); // 0: Photo background, 1: Masthead, 2: Headline typewriter, 3: Subtitle, 4: Auto-Zoom Eye
  const [headlineText, setHeadlineText] = useState('');
  const [eyeOrigin, setEyeOrigin] = useState('52.64% 31.08%');
  const hasTypedRef = useRef(false);
  const fullHeadline = 'THE DIGITAL BUILDER';

  // Dynamically calculate exact pupil transform origin relative to rendered viewport bounds
  useEffect(() => {
    const updatePupilOrigin = () => {
      if (typeof window === 'undefined') return;
      const w_screen = window.innerWidth;
      const h_screen = window.innerHeight;
      const w_img = 1024;
      const h_img = 682;
      
      // Exact Subject Left Eye Pupil Coordinates in 1024x682 source photo (x: 539, y: 232)
      const eye_x = 539; 
      const eye_y = 232;

      const scale = Math.max(w_screen / w_img, h_screen / h_img);
      const rendered_w = w_img * scale;
      const rendered_h = h_img * scale;
      
      const crop_x = (rendered_w - w_screen) / 2;
      const crop_y = (rendered_h - h_screen) / 2;
      
      const originX = ((eye_x * scale - crop_x) / w_screen) * 100;
      const originY = ((eye_y * scale - crop_y) / h_screen) * 100;
      
      setEyeOrigin(`${originX.toFixed(2)}% ${originY.toFixed(2)}%`);
    };

    updatePupilOrigin();
    window.addEventListener('resize', updatePupilOrigin);
    return () => window.removeEventListener('resize', updatePupilOrigin);
  }, []);

  useEffect(() => {
    // 1. Masthead & Metadata appear slowly (800ms)
    const t1 = setTimeout(() => {
      setStep(1);
    }, 800);

    // 2. Deliberate Typewriter headline reveals (2000ms)
    const t2 = setTimeout(() => {
      setStep(2);
    }, 2000);

    // 3. Subtitle appears gracefully (4500ms)
    const t3 = setTimeout(() => {
      setStep(3);
    }, 4500);

    // 4. Automatic smooth zoom straight into left eye pupil (6500ms)
    const t4 = setTimeout(() => {
      setStep(4);
    }, 6500);

    // 5. Complete zoom & transition into main portfolio (8700ms)
    const t5 = setTimeout(() => {
      onUnfold();
    }, 8700);

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
    }, 90);

    return () => clearInterval(interval);
  }, [step]);

  const handleSkip = () => {
    setStep(4);
    setTimeout(() => {
      onUnfold();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white font-serif overflow-hidden select-none">
      
      {/* 1. Full-Page Photo Cover Background with Mathematical Left-Eye Pupil Zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/rizwan_photo.png"
          alt="Rizwan Salmani Full Page Portrait"
          className={`w-full h-full object-cover transition-all duration-[2200ms] ease-in-out ${
            step === 4 ? 'scale-[32] opacity-0' : 'scale-100 opacity-85'
          }`}
          style={{
            transformOrigin: eyeOrigin, // Dynamic Responsive Pupil Center
            transitionTimingFunction: step === 4 ? 'cubic-bezier(0.65, 0, 0.35, 1)' : 'ease-out',
          }}
        />
        {/* Editorial Sepia & Vignette Overlays */}
        <div className={`absolute inset-0 bg-[#E9DFC9]/35 mix-blend-multiply transition-opacity duration-1000 ${
          step === 4 ? 'opacity-0' : 'opacity-100'
        }`}></div>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/80 transition-opacity duration-1000 ${
          step === 4 ? 'opacity-0' : 'opacity-100'
        }`}></div>
      </div>

      {/* 2. Broadsheet Double Rule Frame Overlay */}
      <div className={`absolute inset-4 sm:inset-6 border-4 border-double border-[#E9DFC9]/80 pointer-events-none transition-opacity duration-1000 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-full h-full border border-[#E9DFC9]/40 p-2"></div>
      </div>

      {/* Skip Button Top Right */}
      <div className="relative z-20 flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase bg-black/70 border border-[#E9DFC9] text-[#E9DFC9] px-4 py-2 hover:bg-[#8A6A3D] hover:text-white transition-all shadow-md backdrop-blur-xs rounded-xs"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Text Overlay Content (Positioned over full-page photo) */}
      <div className={`relative z-20 max-w-4xl mx-auto text-center my-auto px-4 w-full transition-all duration-1000 ${
        step === 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        
        {/* Metadata Reveal */}
        <div className={`transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 text-xs font-typewriter tracking-widest text-amber-300 font-bold uppercase mb-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{NEWSPAPER_META.editionName} • VOL. {NEWSPAPER_META.volumeNo} • ISSUE {NEWSPAPER_META.editionNo}</span>
          </div>
        </div>

        {/* Masthead Title */}
        <div className={`transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
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
        <div className={`transition-all duration-1000 transform ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-serif italic text-base sm:text-xl text-amber-100/90 max-w-2xl mx-auto drop-shadow-md mb-4">
            "A Computer Science student exploring software, data, artificial intelligence and creative technology."
          </p>
        </div>

      </div>

      {/* Footer Dateline Bar */}
      <div className={`relative z-20 text-center font-typewriter text-xs text-[#E9DFC9]/80 border-t border-[#E9DFC9]/40 pt-3 pb-6 uppercase tracking-widest font-semibold transition-opacity duration-1000 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}>
        {NEWSPAPER_META.dateline} • EST. {NEWSPAPER_META.established}
      </div>

    </div>
  );
};
