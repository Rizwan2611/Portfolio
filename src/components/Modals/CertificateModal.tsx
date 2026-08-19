import React from 'react';
import { NEWSPAPER_META } from '../../data/newspaperData';
import { soundManager } from '../../utils/audio';
import { Trophy, X, Printer } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
      
      {/* Certificate Box */}
      <div className="relative w-full max-w-2xl bg-[#f4efe4] text-[#1c1815] border-8 border-double border-[#1c1815] p-6 sm:p-8 shadow-2xl text-center paper-crease">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playPageTurn();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 border border-[#1c1815] hover:bg-[#e9e2d3] transition-colors rounded-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Header */}
        <div className="border-b-2 border-[#1c1815] pb-4 mb-6">
          <div className="font-sc font-bold text-xs uppercase tracking-widest text-[#8b0000] mb-1">
            OFFICIAL PRESS BUREAU CERTIFICATION
          </div>
          <h2 className="font-masthead text-4xl sm:text-5xl font-black text-[#1c1815] uppercase tracking-tight">
            {NEWSPAPER_META.title}
          </h2>
          <div className="font-cinzel font-bold text-sm tracking-wider text-[#5c5248] mt-1">
            READER OF THE MONTH & CERTIFIED TECH INSPECTOR PASS
          </div>
        </div>

        {/* Certificate Body */}
        <div className="space-y-4 my-6">
          <div className="flex justify-center my-2">
            <div className="w-16 h-16 bg-[#8b0000] text-white rounded-full flex items-center justify-center border-4 border-[#1c1815] shadow-md">
              <Trophy className="w-8 h-8" />
            </div>
          </div>

          <p className="font-serif italic text-base sm:text-lg leading-relaxed">
            This official broadside document certifies that the bearer has successfully solved <span className="font-bold font-headline text-[#8b0000]">The Rizwan Times Daily Tech Crossword</span> and demonstrated superior technical literacy.
          </p>

          {/* Stamp Seal */}
          <div className="py-2">
            <div className="stamp-seal text-xs py-1.5 px-4 font-black">
              PRESS PASS #2026 • VERIFIED INK
            </div>
          </div>
        </div>

        {/* Certificate Sign-off */}
        <div className="border-t-2 border-[#1c1815] pt-4 mt-6 flex items-center justify-between font-typewriter text-xs">
          <div className="text-left">
            <div className="font-bold text-[#8b0000]">ISSUED BY:</div>
            <div className="font-masthead text-xl font-bold">Rizwan Salmani</div>
            <div className="text-[10px] text-[#5c5248] uppercase">Editor-in-Chief & Lead Engineer</div>
          </div>

          <button
            onClick={() => {
              soundManager.playStampEffect();
              window.print();
            }}
            className="flex items-center gap-1 border-2 border-[#1c1815] bg-[#1c1815] text-[#f4efe4] px-4 py-2 font-sc font-bold uppercase tracking-wider hover:bg-[#8b0000] transition-colors rounded-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Pass</span>
          </button>
        </div>

      </div>

    </div>
  );
};
