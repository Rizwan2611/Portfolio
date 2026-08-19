import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface EditorialPhotoFrameProps {
  imageSrc?: string;
  caption?: string;
}

export const EditorialPhotoFrame: React.FC<EditorialPhotoFrameProps> = ({
  imageSrc = '/rizwan_photo.png',
  caption = 'Rizwan Salmani — Computer Science Scholar, Full-Stack Lead & Creative Technologist.',
}) => {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <div className="relative border-4 border-double border-[var(--border-dark)] p-3 sm:p-4 bg-[var(--bg-paper-card)] shadow-lg my-6 paper-crease">
      
      {/* Top Editorial Label Bar */}
      <div className="flex flex-wrap items-center justify-between font-typewriter text-xs border-b border-[var(--border-dark)] pb-2 mb-3 gap-2">
        <div className="flex items-center gap-1.5 font-bold uppercase text-[var(--accent-red)]">
          <ImageIcon className="w-4 h-4" />
          <span>EDITORIAL PRESS PHOTOGRAPH</span>
        </div>

        <div className="flex items-center gap-2 font-typewriter text-[10px] font-bold text-[var(--text-muted)] uppercase">
          <span className="stamp-seal text-[8px] py-0 px-1">AUTHENTIC PORTRAIT</span>
          <span>FILE #2026-PORTRAIT</span>
        </div>
      </div>

      {/* Main Photo Frame - Natural Aspect Ratio & Perfect Centered Framing */}
      <div className="relative border-2 border-[var(--border-dark)] bg-[var(--bg-primary)] overflow-hidden shadow-inner flex items-center justify-center p-2 min-h-[320px] max-h-[520px]">
        <img
          src={imageSrc}
          alt="Rizwan Salmani Portrait"
          onLoad={() => setPhotoLoaded(true)}
          className={`w-full max-h-[480px] object-contain object-center transition-all duration-500 rounded-xs shadow-xs ${
            photoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Caption & Press Metadata */}
      <div className="mt-3 text-xs font-typewriter text-[var(--text-muted)] italic flex flex-wrap items-center justify-between border-t border-[var(--border-light)] pt-2 gap-2">
        <span>{caption}</span>
        <span className="font-bold text-[var(--text-main)] text-[10px]">RIZWAN SALMANI</span>
      </div>

    </div>
  );
};
