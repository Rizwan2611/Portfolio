import React from 'react';
import { EDITORIAL_OPINION, TESTIMONIAL_LETTERS } from '../../data/newspaperData';
import { MessageSquareQuote, Star } from 'lucide-react';

export const LettersEditorial: React.FC = () => {
  return (
    <section id="editorial" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--text-muted)]">
            SECTION E • OPINION, EDITORIAL & LETTERS TO THE EDITOR
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            PHILOSOPHY MANIFESTO & READER ENDORSEMENTS
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Perspectives on engineering craft, architectural discipline, and verified peer testimonials."
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Editorial Essay (Col 1-7) */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] lg:pr-8 pb-6 lg:pb-0">
            
            <div className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-6 shadow-sm">
              <div className="font-typewriter text-xs uppercase text-[var(--accent-red)] font-bold mb-1">
                PRESS EDITORIAL MANIFESTO
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-black text-[var(--text-main)] leading-tight mb-2">
                {EDITORIAL_OPINION.title}
              </h3>

              <div className="flex items-center justify-between font-typewriter text-xs text-[var(--text-muted)] border-b border-[var(--border-dark)] pb-2 mb-4">
                <span>{EDITORIAL_OPINION.author}</span>
                <span>{EDITORIAL_OPINION.date}</span>
              </div>

              <div className="columns-newspaper-2 text-base leading-relaxed font-body text-justify space-y-4">
                {EDITORIAL_OPINION.essay.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? 'drop-cap mb-4' : 'mb-4'}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Signature Seal */}
              <div className="mt-6 pt-4 border-t border-[var(--border-dark)] flex items-center justify-between font-typewriter text-xs">
                <div>
                  <div className="font-masthead text-2xl font-bold text-[var(--text-main)]">Rizwan Salmani</div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase">Editor-in-Chief & Lead Developer</div>
                </div>
                <div className="stamp-seal text-[10px]">CRAFT CERTIFIED</div>
              </div>

            </div>

          </div>

          {/* Reader Letters & Endorsements (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="font-sc font-bold text-lg text-[var(--text-main)] uppercase border-b-2 border-[var(--border-dark)] pb-2 flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-[var(--accent-red)]" />
              <span>LETTERS TO THE EDITOR (TESTIMONIALS)</span>
            </div>

            <div className="space-y-4">
              {TESTIMONIAL_LETTERS.map((letter) => (
                <div key={letter.id} className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-4 shadow-xs">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-amber-600">
                      {[...Array(letter.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-typewriter text-[10px] text-[var(--text-muted)]">{letter.date}</span>
                  </div>

                  {/* Letter Content */}
                  <p className="font-serif italic text-sm text-[var(--text-main)] leading-relaxed mb-3">
                    "{letter.content}"
                  </p>

                  {/* Author Sign-off */}
                  <div className="border-t border-[var(--border-light)] pt-2 flex items-center justify-between font-typewriter text-xs">
                    <div>
                      <div className="font-bold text-[var(--text-main)]">{letter.sender}</div>
                      <div className="text-[10px] text-[var(--text-muted)]">{letter.role} • {letter.organization}</div>
                    </div>
                    <span className="text-[10px] text-[var(--accent-red)] font-bold uppercase">{letter.location}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
