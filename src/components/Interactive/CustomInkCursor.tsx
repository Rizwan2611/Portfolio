import React, { useEffect, useState } from 'react';

export const CustomInkCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'normal' | 'interactive' | 'READ' | 'EXPLORE'>('normal');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Determine target hover state
      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorState('normal');
        return;
      }

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'READ') {
        setCursorState('READ');
      } else if (cursorAttr === 'EXPLORE') {
        setCursorState('EXPLORE');
      } else if (
        target.closest('button, a, input, select, textarea, [role="button"]')
      ) {
        setCursorState('interactive');
      } else {
        setCursorState('normal');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Ink Dot / Badge */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-typewriter font-bold text-[9px] uppercase tracking-wider transition-all duration-200 ${
          cursorState === 'normal'
            ? 'w-2.5 h-2.5 rounded-full bg-[var(--accent-red)] opacity-70 shadow-xs'
            : cursorState === 'interactive'
            ? 'w-5 h-5 rounded-full bg-[var(--accent-red)] opacity-40 scale-125'
            : cursorState === 'READ'
            ? 'px-2 py-0.5 rounded-xs bg-[var(--accent-red)] text-white shadow-md scale-110'
            : 'px-2 py-0.5 rounded-xs bg-[var(--border-dark)] text-[var(--bg-primary)] shadow-md scale-110'
        }`}
      >
        {cursorState === 'READ' && <span>READ</span>}
        {cursorState === 'EXPLORE' && <span>EXPLORE</span>}
      </div>
    </div>
  );
};
