import React, { useState } from 'react';
import { ArrowRight, Brain, Cpu, Database, Feather, Printer } from 'lucide-react';

export type TransformationPhase = 'newspaper' | 'ink' | 'print' | 'data' | 'brain';

const PHASES: { id: TransformationPhase; label: string; subLabel: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'newspaper', label: '1. NEWSPAPER', subLabel: 'Fleet St. Broadside', icon: Feather },
  { id: 'ink', label: '2. INK', subLabel: 'Ink & Dither Texture', icon: Printer },
  { id: 'print', label: '3. PRINT', subLabel: 'Halftone Dot Matrix', icon: Printer },
  { id: 'data', label: '4. DATA', subLabel: 'Vector Telemetry', icon: Database },
  { id: 'brain', label: '5. DIGITAL BRAIN', subLabel: 'Neural Vector Cortex', icon: Brain },
];

export const SignatureTransformation: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<TransformationPhase>('newspaper');

  const handleNextPhase = () => {
    const phaseKeys: TransformationPhase[] = ['newspaper', 'ink', 'print', 'data', 'brain'];
    const currIdx = phaseKeys.indexOf(currentPhase);
    const nextIdx = (currIdx + 1) % phaseKeys.length;
    setCurrentPhase(phaseKeys[nextIdx]);
  };

  return (
    <section className="w-full py-8 border-b-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] paper-crease">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-6 text-center bg-[var(--bg-primary)]">
          <div className="flex items-center justify-center gap-2 font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold">
            <Cpu className="w-4 h-4" />
            <span>THE SIGNATURE CREATIVE TRANSFORMATION MOMENT</span>
          </div>
          <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-[var(--text-main)] mt-1">
            FROM PRINTED INK TO NEURAL DIGITAL BRAIN
          </h3>
          <p className="font-serif italic text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
            "Observe how vintage editorial paper transforms into real-time artificial intelligence data streams."
          </p>
        </div>

        {/* Phase Navigation Pipeline Bar */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-6 font-typewriter text-xs">
          {PHASES.map((p, idx) => {
            const Icon = p.icon;
            const isActive = currentPhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentPhase(p.id);
                }}
                className={`p-2 sm:p-3 border-2 text-center transition-all flex flex-col items-center justify-between ${
                  isActive
                    ? 'border-[var(--accent-red)] bg-[var(--accent-red)] text-white shadow-md scale-102 font-bold'
                    : 'border-[var(--border-dark)] bg-[var(--bg-primary)] text-[var(--text-main)] hover:bg-[var(--bg-accent)]'
                }`}
              >
                <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{p.label}</span>
                  <span className="sm:hidden">0{idx + 1}</span>
                </div>
                <span className="text-[9px] opacity-80 mt-1 hidden md:block">{p.subLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage Viewer */}
        <div className="relative border-4 border-double border-[var(--border-dark)] bg-[var(--bg-primary)] p-6 min-h-64 flex flex-col justify-between overflow-hidden shadow-inner">
          
          {/* Phase 1: Newspaper */}
          {currentPhase === 'newspaper' && (
            <div className="space-y-3 font-serif animate-fade-in">
              <div className="font-typewriter text-xs text-[var(--accent-red)] font-bold uppercase">
                PHASE 01 // FLEET STREET PRINTED BROADSIDE
              </div>
              <h4 className="font-headline text-3xl font-black text-[var(--text-main)]">
                The Heritage of Ink, Lead Type & Broadsheet Printing
              </h4>
              <p className="font-body text-base leading-relaxed text-justify drop-cap max-w-3xl">
                Every story begins on paper. For centuries, the broadsheet newspaper was the primary conduit for human knowledge, ideas, and scientific discovery. "The Rizwan Times" inherits this rich editorial tradition.
              </p>
            </div>
          )}

          {/* Phase 2: Ink */}
          {currentPhase === 'ink' && (
            <div className="space-y-3 font-serif animate-fade-in">
              <div className="font-typewriter text-xs text-[var(--accent-red)] font-bold uppercase">
                PHASE 02 // PRESS INK & DITHER TEXTURE
              </div>
              <h4 className="font-headline text-3xl font-black text-[var(--text-main)]">
                Liquid Ink Absorbing into Aged Paper Fibers
              </h4>
              <p className="font-body text-base leading-relaxed text-justify max-w-3xl">
                As press rollers press dark carbon ink into wood pulp fibers, language takes physical form. The subtle dither and ink bleeding give print its tactile warmth and permanence.
              </p>
            </div>
          )}

          {/* Phase 3: Print */}
          {currentPhase === 'print' && (
            <div className="space-y-3 font-serif animate-fade-in">
              <div className="font-typewriter text-xs text-[var(--accent-red)] font-bold uppercase">
                PHASE 03 // HALFTONE DOT MATRIX & SCREEN PRINTING
              </div>
              <h4 className="font-headline text-3xl font-black text-[var(--text-main)]">
                Deconstructing Photographs into Halftone Dot Grids
              </h4>
              <p className="font-body text-base leading-relaxed text-justify max-w-3xl">
                By breaking continuous tone photography into thousands of tiny ink dots, halftone printing bridges physical art and structured raster mathematics — setting the stage for digital pixel displays.
              </p>
            </div>
          )}

          {/* Phase 4: Data */}
          {currentPhase === 'data' && (
            <div className="space-y-3 font-typewriter animate-fade-in text-emerald-950 dark:text-emerald-300">
              <div className="text-xs text-[var(--accent-red)] font-bold uppercase">
                PHASE 04 // VECTOR DATA EMBEDDINGS & BINARY STREAMS
              </div>
              <h4 className="font-headline text-3xl font-black text-[var(--text-main)]">
                Ink Transforms into High-Dimensional Vectors
              </h4>
              <p className="font-body text-base leading-relaxed text-justify max-w-3xl">
                Ink dither resolves into binary telemetry (`[0.98, 0.42, 0.88]`). Words become high-dimensional embedding vectors stored inside Pinecone and PostgreSQL vector tables.
              </p>
            </div>
          )}

          {/* Phase 5: Digital Brain */}
          {currentPhase === 'brain' && (
            <div className="space-y-3 font-typewriter animate-fade-in">
              <div className="text-xs text-[var(--accent-red)] font-bold uppercase flex items-center gap-1">
                <Brain className="w-4 h-4 inline" />
                <span>PHASE 05 // THE INTERACTIVE HUMAN & AI DIGITAL BRAIN</span>
              </div>
              <h4 className="font-headline text-3xl font-black text-[var(--text-main)]">
                The Living Neural Cortex & AI Reasoning Graph
              </h4>
              <p className="font-body text-base leading-relaxed text-justify max-w-3xl">
                The transformation is complete. Printed ink has evolved into an interactive digital neural graph, where readers explore computer science principles, vector loss curves, and AI reasoning chains in real-time.
              </p>
            </div>
          )}

          {/* Bottom Action Controls */}
          <div className="mt-6 pt-3 border-t border-[var(--border-dark)] flex items-center justify-between font-typewriter text-xs">
            <span className="text-[var(--text-muted)] font-bold">
              CURRENT STAGE: {currentPhase.toUpperCase()}
            </span>

            <button
              onClick={handleNextPhase}
              className="flex items-center gap-2 bg-[var(--border-dark)] text-[var(--bg-primary)] px-4 py-2 font-bold uppercase hover:bg-[var(--accent-red)] transition-colors rounded-xs"
            >
              <span>Advance Transformation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
