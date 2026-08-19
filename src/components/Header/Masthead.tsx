import React, { useState, useEffect } from 'react';
import { NEWSPAPER_META } from '../../data/newspaperData';
import type { ThemeMode } from '../../types';
import { 
  Printer, 
  Search, 
  Bookmark, 
  Clock 
} from 'lucide-react';

interface MastheadProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenSearch: () => void;
  onOpenClippings: () => void;
  clippingCount: number;
  onPrint: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({
  currentTheme,
  onThemeChange,
  onOpenSearch,
  onOpenClippings,
  clippingCount,
  onPrint,
}) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-[var(--bg-primary)] border-b-4 border-[var(--border-dark)] pt-4 pb-2 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls & Meta Bar */}
        <div className="flex flex-wrap items-center justify-between text-xs font-typewriter border-b border-[var(--border-light)] pb-2 mb-3 gap-2">
          
          {/* Live Dateline Clock */}
          <div className="flex items-center gap-2 text-[var(--text-muted)] font-semibold">
            <Clock className="w-3.5 h-3.5 text-[var(--accent-red)]" />
            <span>{timeString} GMT • MUMBAI • INDIA</span>
          </div>

          {/* Theme & Controls Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Selector Dropdown */}
            <div className="flex items-center gap-1 bg-[var(--bg-paper-card)] border border-[var(--border-dark)] px-2 py-1 rounded-sm shadow-xs">
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-bold">Edition:</span>
              <select
                value={currentTheme}
                onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
                className="bg-transparent font-typewriter text-xs font-bold focus:outline-none cursor-pointer text-[var(--text-main)]"
              >
                <option value="sepia" className="bg-[#E9DFC9] text-[#171615]">1920 Aged Sepia</option>
                <option value="newsprint" className="bg-[#E5E5E5] text-[#121212]">1970 Classic Newsprint</option>
                <option value="night" className="bg-[#12100E] text-[#F3E9D5]">Night Press Edition</option>
                <option value="broadside" className="bg-[#F9F6F0] text-[#050505]">High-Contrast Broadside</option>
              </select>
            </div>

            {/* Search Launcher */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1 px-2 py-1 border border-[var(--border-dark)] bg-[var(--bg-paper-card)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
              title="Search Newspaper Archives"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-bold">Archive Search</span>
            </button>

            {/* Clippings Drawer Button */}
            <button
              onClick={onOpenClippings}
              className="flex items-center gap-1 px-2 py-1 border border-[var(--border-dark)] bg-[var(--bg-paper-card)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm relative"
              title="Saved Newspaper Clippings"
            >
              <Bookmark className="w-3.5 h-3.5 text-[var(--accent-red)]" />
              <span className="hidden sm:inline font-bold">Clippings</span>
              {clippingCount > 0 && (
                <span className="bg-[var(--accent-red)] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {clippingCount}
                </span>
              )}
            </button>

            {/* Print Mode Button */}
            <button
              onClick={onPrint}
              className="flex items-center gap-1 px-2 py-1 border border-[var(--border-dark)] bg-[var(--accent-red)] text-white hover:opacity-90 transition-opacity rounded-sm font-bold"
              title="Print Special Edition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Press</span>
            </button>
          </div>
        </div>

        {/* Newspaper Title / Masthead Banner */}
        <div className="text-center my-3 relative">
          
          {/* Top Decorative Filigree Rule */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-typewriter tracking-widest text-[var(--text-muted)] mb-1 uppercase font-bold">
            <span className="h-px bg-[var(--border-dark)] flex-1"></span>
            <span>VOL. {NEWSPAPER_META.volumeNo} • ISSUE {NEWSPAPER_META.editionNo} • {NEWSPAPER_META.editionName} • EST. {NEWSPAPER_META.established}</span>
            <span className="h-px bg-[var(--border-dark)] flex-1"></span>
          </div>

          {/* Main Newspaper Title */}
          <h1 className="font-masthead text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[var(--text-main)] font-black uppercase drop-shadow-sm select-none my-1">
            {NEWSPAPER_META.title}
          </h1>

          {/* Subtitle Motto & Volume Meta */}
          <div className="flex flex-wrap items-center justify-between border-y-2 border-double border-[var(--border-dark)] py-1.5 my-2 text-xs sm:text-sm font-sc font-bold tracking-wider text-[var(--text-main)]">
            <div className="hidden sm:block text-left font-typewriter text-xs">
              <span>VOL. {NEWSPAPER_META.volumeNo} • ISSUE {NEWSPAPER_META.editionNo}</span>
            </div>
            <div className="w-full sm:w-auto text-center font-serif italic text-xs md:text-sm flex-1 px-4">
              "{NEWSPAPER_META.motto}"
            </div>
            <div className="hidden sm:block text-right font-typewriter text-xs">
              <span>MUMBAI • INDIA</span>
            </div>
          </div>

          {/* Dateline Bar */}
          <div className="text-[11px] font-typewriter text-center uppercase tracking-widest text-[var(--text-muted)] font-semibold">
            {NEWSPAPER_META.dateline}
          </div>
        </div>

      </div>
    </header>
  );
};
