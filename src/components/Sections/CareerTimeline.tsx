import React, { useState } from 'react';
import { soundManager } from '../../utils/audio';
import { History, ChevronRight } from 'lucide-react';

interface TimelinePhase {
  year: string;
  stage: string;
  headline: string;
  summary: string;
  milestones: string[];
}

const TIMELINE_PHASES: TimelinePhase[] = [
  {
    year: '2024',
    stage: 'BEGINNING & CS FOUNDATIONS',
    headline: 'COMPUTER SCIENCE RIGOR & DATA STRUCTURE MASTERY',
    summary: 'Focused heavily on discrete mathematics, object-oriented design, dynamic programming algorithms, and database indexing.',
    milestones: [
      'Mastered low-level algorithms & graph traversal time complexities.',
      'Constructed initial full-stack web applications with React & Node.js.',
      'Achieved top academic rankings in Computer Science coursework.',
    ],
  },
  {
    year: '2025',
    stage: 'BUILDING HIGH-SCALE SYSTEMS',
    headline: 'DISTRIBUTED ARCHITECTURES & FULL-STACK ENGINEERING',
    summary: 'Architected microservices, REST/GraphQL APIs, Redis caching layers, and WebGL interactive interfaces.',
    milestones: [
      'Shipped HyperFlow distributed event bus engine.',
      'Engineered multi-edition CSS theme engines and Web Audio synthesizers.',
      'Optimized main-thread web application rendering performance to 60 FPS.',
    ],
  },
  {
    year: '2026',
    stage: 'DATA + AI & CREATIVE TECH',
    headline: 'NEURAL VECTOR RAG PIPELINES & LLM AGENT WORKFLOWS',
    summary: 'Pioneering machine learning visualizers, vector embedding graphs, and autonomous AI agents.',
    milestones: [
      'Launched AI Mind Matrix 3D real-time neural visualization platform.',
      'Published research papers on neural network explainability.',
      'Built "The Rizwan Times" interactive editorial broadsheet portfolio.',
    ],
  },
  {
    year: 'FUTURE',
    stage: 'SPECIALIZATION IN AI RESEARCH & LEADERSHIP',
    headline: 'LEADING NEXT-GENERATION COMPUTER SCIENCE INNOVATIONS',
    summary: 'Dedicated to advancing trustworthy AI systems, real-time creative computing, and high-impact engineering leadership.',
    milestones: [
      'Targeting principal engineering and AI research advisor roles.',
      'Expanding open-source contributions across AI vector search libraries.',
    ],
  },
];

export const CareerTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(2);

  return (
    <section id="timeline" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold">
            SECTION 08 • ARCHIVAL CHRONICLE & TIMELINE
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            ARCHIVAL DEVELOPMENT TIMELINE (2024 — FUTURE)
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "An archival record documenting Rizwan Salmani’s Computer Science journey."
          </div>
        </div>

        {/* Archival Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {TIMELINE_PHASES.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <div
                key={item.year}
                onClick={() => {
                  soundManager.playTypewriter();
                  setActiveIdx(idx);
                }}
                className={`border-2 p-4 cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[var(--accent-red)] bg-[var(--bg-paper-card)] shadow-md translate-y-1'
                    : 'border-[var(--border-dark)] bg-[var(--bg-primary)] hover:bg-[var(--bg-paper-card)]'
                }`}
              >
                <div className="flex items-center justify-between font-typewriter text-xs font-bold text-[var(--accent-red)] mb-1">
                  <span>{item.year}</span>
                  <span className="text-[10px] text-[var(--text-muted)]">PHASE 0{idx + 1}</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-main)] leading-snug">
                  {item.stage}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Selected Archival Detail Card */}
        <div className="border-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-dark)] pb-3 mb-4 gap-2">
            <div className="flex items-center gap-2 font-typewriter text-xs font-bold text-[var(--accent-red)] uppercase">
              <History className="w-4 h-4" />
              <span>ARCHIVAL RECORD #{TIMELINE_PHASES[activeIdx].year}</span>
            </div>
            <span className="stamp-seal text-[8px] py-0.5 px-2">CONFIRMED DISPATCH</span>
          </div>

          <h3 className="font-headline text-2xl font-black text-[var(--text-main)] mb-2">
            {TIMELINE_PHASES[activeIdx].headline}
          </h3>

          <p className="font-serif text-base leading-relaxed text-[var(--text-muted)] italic mb-4">
            "{TIMELINE_PHASES[activeIdx].summary}"
          </p>

          {/* Key Milestones List */}
          <div className="border-2 border-[var(--border-dark)] bg-[var(--bg-primary)] p-4">
            <div className="font-sc font-bold text-xs uppercase text-[var(--accent-red)] mb-2">
              KEY MILESTONES & DISPATCH HIGHLIGHTS:
            </div>
            <ul className="space-y-2 font-typewriter text-xs text-[var(--text-main)]">
              {TIMELINE_PHASES[activeIdx].milestones.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-red)] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
