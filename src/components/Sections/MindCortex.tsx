import React, { useState } from 'react';
import { soundManager } from '../../utils/audio';
import { Brain, Compass, CheckCircle2 } from 'lucide-react';

interface MindNode {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  essay: string[];
  principles: string[];
  quote: string;
}

const MIND_NODES: MindNode[] = [
  {
    id: 'cs-core',
    title: 'CHAPTER 4.1: COMPUTER SCIENCE RIGOR & ALGORITHM ELEGANCE',
    category: 'FUNDAMENTALS',
    subtitle: 'Why deep data structures and time complexity analysis dictate software longevity',
    essay: [
      'In a world increasingly accustomed to abstractions layered upon abstractions, true engineering power comes from mastering the fundamental building blocks of Computer Science.',
      'Understanding how binary trees balance, how graph traversals scale across distributed nodes, and how memory locality impacts CPU L1/L2 cache lines is what separates code that merely runs from code that scales effortlessly.',
    ],
    principles: [
      'Algorithmic Efficiency (O(1) & O(N log N) target guarantees)',
      'Thread Safety & Lock-Free Atomic Memory Access',
      'Clean Code Aesthetics & Self-Documenting Abstractions',
    ],
    quote: 'Simplicity is prerequisite for reliability. — Edsger W. Dijkstra',
  },
  {
    id: 'ai-cortex',
    title: 'CHAPTER 4.2: NEURAL AI ARCHITECTURES & VECTOR SPACE SEARCH',
    category: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Bridging Large Language Models, Hybrid RAG Context Retrieval & Autonomous Agents',
    essay: [
      'Artificial intelligence is not a magic black box; it is linear algebra, high-dimensional geometry, and probability distribution sampling executing at scale.',
      'My research and development focus centers on making AI systems explainable and responsive — building real-time vector embedding graphs, hybrid dense/sparse retrieval engines, and autonomous agent loops.',
    ],
    principles: [
      'Retrieval-Augmented Generation (RAG) with sub-50ms latency',
      'High-Dimensional Vector Embeddings & Similarity Metrics',
      'Multi-Agent Coordination & Function Calling Tools',
    ],
    quote: 'The best way to predict the future of AI is to invent transparent models.',
  },
  {
    id: 'creative-webgl',
    title: 'CHAPTER 4.3: CREATIVE TECHNOLOGY & WEBGL SHADER CRAFT',
    subtitle: 'Transforming mathematical equations into 60 FPS interactive GPU visuals',
    category: 'CREATIVE TECH',
    essay: [
      'The browser is a canvas for cinematic storytelling. By pairing raw GLSL fragment shaders with Web Audio frequency analysis, web applications transform from static document viewers into immersive digital worlds.',
      'Instanced rendering, custom framebuffer passes, and Web Workers allow complex 3D scenes to run at a solid 60 FPS across mobile and desktop devices alike.',
    ],
    principles: [
      'GPU Instanced Mesh Rendering for 50,000+ simultaneous elements',
      'Custom Procedural GLSL Raymarching & Fragment Noise Shaders',
      'Procedural Web Audio API Synthesis without heavy media assets',
    ],
    quote: 'Design is not just what it looks like. Design is how it works. — Steve Jobs',
  },
  {
    id: 'ux-craft',
    title: 'CHAPTER 4.4: HUMAN-CENTERED UX & EDITORIAL TYPOGRAPHY',
    subtitle: 'Crafting digital publication experiences that captivate readers at first glance',
    category: 'UI/UX CRAFT',
    essay: [
      'Software should feel alive. Micro-animations, responsive typographic grids, tactile sound feedback, and harmonious color palettes create an emotional connection between the reader and the interface.',
      'By treating code as an editorial publication, every button click becomes a tactile page turn, and every page section tells a cohesive story.',
    ],
    principles: [
      'Fluid Physics-Based Spring Animations & Page Turns',
      'Harmonious Typographic Scale & Editorial Grid Alignment',
      'Sensory Tactile Sound Design (Web Audio API)',
    ],
    quote: 'God is in the details. — Mies van der Rohe',
  },
];

export const MindCortex: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('cs-core');
  const activeNode = MIND_NODES.find((n) => n.id === activeNodeId) || MIND_NODES[0];

  return (
    <section id="mind" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold">
            STAGE 4 • EXPLORE THE MIND & PHILOSOPHY
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            THE NEURAL MIND CORTEX & ENGINEERING PHILOSOPHY
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Click any thought node to inspect Rizwan Salmani's mental models, CS principles, and AI vision."
          </div>
        </div>

        {/* Mind Cortex Layout: Nodes Grid + Essay Notebook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Thought Nodes List (Col 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-sc font-bold text-xs uppercase text-[var(--text-muted)] tracking-wider mb-2">
              SELECT A THOUGHT CORTEX NODE:
            </div>

            {MIND_NODES.map((node) => {
              const isSelected = activeNodeId === node.id;
              return (
                <div
                  key={node.id}
                  data-cursor="EXPLORE"
                  onClick={() => {
                    soundManager.playTypewriter();
                    setActiveNodeId(node.id);
                  }}
                  className={`border-2 p-4 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[var(--accent-red)] bg-[var(--bg-paper-card)] shadow-md translate-x-1'
                      : 'border-[var(--border-dark)] bg-[var(--bg-primary)] hover:bg-[var(--bg-paper-card)]'
                  }`}
                >
                  <div className="flex items-center justify-between font-typewriter text-[10px] font-bold text-[var(--accent-red)] uppercase mb-1">
                    <span>{node.category}</span>
                    {isSelected && <span className="stamp-seal text-[8px] py-0 px-1">ACTIVE CORTEX</span>}
                  </div>

                  <h3 className="font-headline font-bold text-lg text-[var(--text-main)] leading-snug">
                    {node.title.split(': ')[1]}
                  </h3>

                  <p className="font-serif italic text-xs text-[var(--text-muted)] mt-1 line-clamp-1">
                    {node.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Thought Node Essay Notebook (Col 6-12) */}
          <div className="lg:col-span-7 border-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-6 shadow-md relative">
            
            {/* Header */}
            <div className="border-b-2 border-[var(--border-dark)] pb-3 mb-4">
              <div className="font-typewriter text-xs font-bold text-[var(--accent-red)] uppercase mb-1 flex items-center gap-1.5">
                <Brain className="w-4 h-4" />
                <span>{activeNode.title}</span>
              </div>
              <h3 className="font-headline text-2xl font-black text-[var(--text-main)]">
                {activeNode.subtitle}
              </h3>
            </div>

            {/* Essay Paragraphs */}
            <div className="space-y-4 font-body text-base leading-relaxed text-justify mb-6">
              {activeNode.essay.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Core Guiding Principles */}
            <div className="border-2 border-[var(--border-dark)] bg-[var(--bg-primary)] p-4 mb-4">
              <div className="font-sc font-bold text-xs uppercase text-[var(--accent-red)] mb-2 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                <span>CORE GUIDING CS PRINCIPLES:</span>
              </div>
              <ul className="space-y-2 font-typewriter text-xs text-[var(--text-main)]">
                {activeNode.principles.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Quote */}
            <blockquote className="border-l-4 border-[var(--accent-red)] pl-4 py-2 italic font-serif text-sm text-[var(--text-main)] bg-[var(--bg-accent)]">
              "{activeNode.quote}"
            </blockquote>

          </div>

        </div>

      </div>
    </section>
  );
};
