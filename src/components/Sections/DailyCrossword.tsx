import React, { useState } from 'react';
import { soundManager } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, 
  RotateCcw, 
  Trophy 
} from 'lucide-react';

interface DailyCrosswordProps {
  onOpenCertificate: () => void;
}

export const DailyCrossword: React.FC<DailyCrosswordProps> = ({ onOpenCertificate }) => {
  const solutionGrid = [
    ['R', 'E', 'A', 'C', 'T'],
    ['',  '',  'S', '',  'A'],
    ['',  'V', 'Y', 'T', 'C'],
    ['',  '',  'N', '',  'H'],
    ['N', 'O', 'C', 'E', 'E'],
  ];

  const [userGrid, setUserGrid] = useState<string[][]>([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);

  const [isSolved, setIsSolved] = useState(false);

  const isCellPlayable = (r: number, c: number) => {
    return solutionGrid[r][c] !== '';
  };

  const handleCellChange = (r: number, c: number, value: string) => {
    if (!isCellPlayable(r, c)) return;
    soundManager.playTypewriter();

    const upperVal = value.slice(-1).toUpperCase();
    const newGrid = userGrid.map((rowArr, rowIdx) =>
      rowArr.map((colVal, colIdx) => (rowIdx === r && colIdx === c ? upperVal : colVal))
    );
    setUserGrid(newGrid);

    checkSolution(newGrid);
  };

  const checkSolution = (grid: string[][]) => {
    let allCorrect = true;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (solutionGrid[r][c] !== '' && grid[r][c] !== solutionGrid[r][c]) {
          allCorrect = false;
          break;
        }
      }
    }

    if (allCorrect && !isSolved) {
      setIsSolved(true);
      soundManager.playSuccessChime();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const revealSolution = () => {
    soundManager.playStampEffect();
    setUserGrid(solutionGrid);
    setIsSolved(true);
  };

  const resetPuzzle = () => {
    soundManager.playPageTurn();
    setUserGrid([
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ]);
    setIsSolved(false);
  };

  return (
    <section id="crossword" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--text-muted)]">
            SECTION G • LEISURE & DAILY RECREATION
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            THE RIZWAN TIMES DAILY TECH CROSSWORD
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Test your engineering vocabulary. Complete the puzzle to earn your official Reader Pass!"
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Crossword 5x5 Grid (Col 1-6) */}
          <div className="lg:col-span-6 border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-6 shadow-sm flex flex-col items-center">
            
            <div className="flex items-center justify-between w-full border-b border-[var(--border-dark)] pb-2 mb-4 font-typewriter text-xs">
              <span className="font-bold uppercase text-[var(--text-main)]">5x5 MATRIX PUZZLE #104</span>
              {isSolved && (
                <span className="stamp-seal text-[10px] text-emerald-700 border-emerald-700">SOLVED!</span>
              )}
            </div>

            {/* Grid Render */}
            <div className="grid grid-cols-5 gap-1.5 p-3 bg-[var(--border-dark)] border-2 border-[var(--border-dark)] shadow-md mb-6">
              {userGrid.map((row, rIdx) =>
                row.map((val, cIdx) => {
                  const playable = isCellPlayable(rIdx, cIdx);

                  return (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-typewriter text-lg sm:text-xl font-bold uppercase transition-colors ${
                        !playable
                          ? 'bg-zinc-900 border border-zinc-950'
                          : isSolved
                          ? 'bg-emerald-100 text-emerald-950 border border-emerald-600'
                          : 'bg-[var(--bg-primary)] text-[var(--text-main)] border border-[var(--border-dark)] focus-within:ring-2 focus-within:ring-[var(--accent-red)]'
                      }`}
                    >
                      {/* Cell Number Marker */}
                      {rIdx === 0 && cIdx === 0 && <span className="absolute top-0.5 left-1 text-[9px] font-bold text-gray-500">1</span>}
                      {rIdx === 2 && cIdx === 1 && <span className="absolute top-0.5 left-1 text-[9px] font-bold text-gray-500">2</span>}
                      {rIdx === 4 && cIdx === 0 && <span className="absolute top-0.5 left-1 text-[9px] font-bold text-gray-500">3</span>}
                      {rIdx === 0 && cIdx === 2 && <span className="absolute top-0.5 left-1 text-[9px] font-bold text-gray-500">4</span>}
                      {rIdx === 0 && cIdx === 3 && <span className="absolute top-0.5 left-1 text-[9px] font-bold text-gray-500">5</span>}

                      {playable && (
                        <input
                          type="text"
                          maxLength={1}
                          value={val}
                          disabled={isSolved}
                          onChange={(e) => handleCellChange(rIdx, cIdx, e.target.value)}
                          className="w-full h-full text-center bg-transparent focus:outline-none uppercase font-bold text-[var(--text-main)]"
                        />
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-3 font-typewriter text-xs">
              <button
                onClick={resetPuzzle}
                className="flex items-center gap-1 border border-[var(--border-dark)] px-3 py-1.5 bg-[var(--bg-primary)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Grid</span>
              </button>

              <button
                onClick={revealSolution}
                className="flex items-center gap-1 border border-[var(--border-dark)] px-3 py-1.5 bg-[var(--bg-primary)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Reveal Solution</span>
              </button>

              {isSolved && (
                <button
                  onClick={() => {
                    soundManager.playSuccessChime();
                    onOpenCertificate();
                  }}
                  className="flex items-center gap-1 border-2 border-[var(--accent-red)] bg-[var(--accent-red)] text-white px-3 py-1.5 font-bold hover:opacity-90 transition-opacity rounded-sm shadow-xs animate-bounce"
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Claim Reader Pass</span>
                </button>
              )}
            </div>

          </div>

          {/* Clues Box (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Across Clues */}
            <div className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-5 shadow-xs">
              <h3 className="font-sc font-bold text-base uppercase text-[var(--text-main)] border-b border-[var(--border-dark)] pb-2 mb-3 flex items-center gap-2">
                <span className="bg-[var(--border-dark)] text-[var(--bg-primary)] px-2 py-0.5 text-xs font-typewriter font-bold">ACROSS</span>
                <span>HORIZONTAL CLUES</span>
              </h3>
              
              <ul className="space-y-3 font-typewriter text-xs text-[var(--text-main)]">
                <li className="p-2 border border-[var(--border-light)] bg-[var(--bg-primary)]">
                  <span className="font-bold text-[var(--accent-red)]">1.</span> Popular UI framework created by Meta (5 letters) — <span className="font-bold italic">R_A_T</span>
                </li>
                <li className="p-2 border border-[var(--border-light)] bg-[var(--bg-primary)]">
                  <span className="font-bold text-[var(--accent-red)]">2.</span> Ultra-fast Vite build tool (4 letters) — <span className="font-bold italic">V_T_</span>
                </li>
                <li className="p-2 border border-[var(--border-light)] bg-[var(--bg-primary)]">
                  <span className="font-bold text-[var(--accent-red)]">3.</span> Non-blocking I/O runtime engine (4 letters) — <span className="font-bold italic">N_D_</span>
                </li>
              </ul>
            </div>

            {/* Down Clues */}
            <div className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-5 shadow-xs">
              <h3 className="font-sc font-bold text-base uppercase text-[var(--text-main)] border-b border-[var(--border-dark)] pb-2 mb-3 flex items-center gap-2">
                <span className="bg-[var(--border-dark)] text-[var(--bg-primary)] px-2 py-0.5 text-xs font-typewriter font-bold">DOWN</span>
                <span>VERTICAL CLUES</span>
              </h3>

              <ul className="space-y-3 font-typewriter text-xs text-[var(--text-main)]">
                <li className="p-2 border border-[var(--border-light)] bg-[var(--bg-primary)]">
                  <span className="font-bold text-[var(--accent-red)]">4.</span> Asynchronous JS keyword (5 letters) — <span className="font-bold italic">A_Y_C</span>
                </li>
                <li className="p-2 border border-[var(--border-light)] bg-[var(--bg-primary)]">
                  <span className="font-bold text-[var(--accent-red)]">5.</span> In-memory data storage layer (5 letters) — <span className="font-bold italic">C_C_E</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
