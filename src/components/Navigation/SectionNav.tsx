import React from 'react';
import { soundManager } from '../../utils/audio';
import { 
  User, 
  Briefcase, 
  Cpu, 
  Send 
} from 'lucide-react';

export type SectionId = 
  | 'frontpage' 
  | 'projects' 
  | 'skills' 
  | 'contact';

interface SectionNavProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
}

export const SECTIONS: { id: SectionId; label: string; pageNum: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'frontpage', label: '01. Intro & Bio', pageNum: 'P. 1', icon: User },
  { id: 'projects', label: '02. Selected Work', pageNum: 'P. 2', icon: Briefcase },
  { id: 'skills', label: '03. Skills & Certifications', pageNum: 'P. 3', icon: Cpu },
  { id: 'contact', label: '04. Contact Info', pageNum: 'P. 4', icon: Send },
];

export const SectionNav: React.FC<SectionNavProps> = ({ activeSection, onSelectSection }) => {
  return (
    <nav className="w-full bg-[var(--bg-primary)] border-b-2 border-[var(--border-dark)] sticky top-0 z-40 shadow-xs backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-2 gap-2">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  soundManager.playPageTurn();
                  onSelectSection(sec.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-sc font-bold transition-all whitespace-nowrap border-b-2 rounded-t-sm ${
                  isActive
                    ? 'border-[var(--accent-red)] bg-[var(--bg-paper-card)] text-[var(--text-main)] shadow-xs scale-102'
                    : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-accent)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--accent-red)]' : ''}`} />
                <span>{sec.label}</span>
                <span className="text-[10px] opacity-60 font-typewriter ml-0.5">({sec.pageNum})</span>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
};
