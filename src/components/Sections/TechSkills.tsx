import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/newspaperData';
import { soundManager } from '../../utils/audio';
import { Terminal, Code } from 'lucide-react';

export const TechSkills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILL_CATEGORIES[0].skills[0]);

  return (
    <section id="skills" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold">
            SECTION 07 • THE TECHNOLOGY DESK
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            THE TECHNOLOGY DESK
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Categorized technical capabilities, languages, frameworks, and production experience."
          </div>
        </div>

        {/* Technology Desk Layout: 4 Editorial Columns + Interactive Code Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Technology Desk Categories (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-4 shadow-xs">
                  <div className="border-b border-[var(--border-dark)] pb-2 mb-3">
                    <h3 className="font-sc font-bold text-sm text-[var(--accent-red)] uppercase tracking-wider">
                      {cat.category}
                    </h3>
                    <div className="font-serif italic text-[11px] text-[var(--text-muted)]">
                      {cat.subtitle}
                    </div>
                  </div>

                  {/* Skills List - Editorial Typography (No fake % ratings or progress bars!) */}
                  <div className="space-y-2 font-typewriter text-xs">
                    {cat.skills.map((skill) => {
                      const isSelected = selectedSkill.name === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onClick={() => {
                            soundManager.playTypewriter();
                            setSelectedSkill(skill);
                          }}
                          className={`p-2 border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[var(--accent-red)] bg-[var(--bg-primary)] font-bold text-[var(--accent-red)]'
                              : 'border-[var(--border-light)] bg-[var(--bg-paper-card)] hover:bg-[var(--bg-primary)] text-[var(--text-main)]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Code className="w-3.5 h-3.5 shrink-0" />
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)] font-normal">
                            {skill.experienceYears} Yrs Exp
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lab Code Inspector (Col 8-12) */}
          <div className="lg:col-span-5 border-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-5 shadow-md font-typewriter">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b-2 border-[var(--border-dark)] pb-2 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-red)] uppercase">
                <Terminal className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>LAB CODE INSPECTOR</span>
              </div>
              <span className="stamp-seal text-[8px] py-0 px-1">VERIFIED CODE</span>
            </div>

            {/* Selected Skill Information */}
            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold">SELECTED CAPABILITY:</div>
                <div className="font-headline text-xl font-bold text-[var(--text-main)]">{selectedSkill.name}</div>
              </div>

              <div className="border border-[var(--border-dark)] p-3 bg-[var(--bg-primary)] text-xs leading-relaxed">
                <div className="text-[10px] text-[var(--accent-red)] font-bold uppercase mb-1">PRACTICAL APPLICATION HIGHLIGHT:</div>
                <p className="font-serif italic text-[var(--text-main)]">
                  "{selectedSkill.highlight}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="border border-[var(--border-dark)] p-2 bg-[var(--bg-primary)]">
                  <div className="font-bold text-[var(--text-main)]">{selectedSkill.experienceYears} Years</div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase">Production Exp</div>
                </div>
                <div className="border border-[var(--border-dark)] p-2 bg-[var(--bg-primary)]">
                  <div className="font-bold text-emerald-800 dark:text-emerald-400">Production Ready</div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase">Status</div>
                </div>
              </div>

              {/* Sample Code Snippet */}
              <div className="border-2 border-[var(--border-dark)] bg-black text-emerald-400 p-3 rounded-xs text-[10px] font-mono overflow-x-auto leading-relaxed">
                <div className="text-gray-500 mb-1">// Production Snippet — {selectedSkill.name}</div>
                <div>const capability = new TechnologyCapability('{selectedSkill.name}');</div>
                <div>await capability.executeProductionPipeline(&#123;</div>
                <div className="pl-4">mode: 'high-performance',</div>
                <div className="pl-4">quality: 1.0,</div>
                <div>&#125;);</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
