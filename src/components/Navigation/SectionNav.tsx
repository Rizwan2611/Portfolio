import React from 'react';
import { soundManager } from '../../utils/audio';
import { 
  User, 
  Briefcase, 
  Cpu, 
  ShieldCheck,
  Send 
} from 'lucide-react';

export type SectionId = 
  | 'frontpage' 
  | 'projects' 
  | 'skills' 
  | 'certifications'
  | 'contact';

interface SectionNavProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
}

export const SECTIONS: { id: SectionId; label: string; pageNum: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'frontpage', label: 'Page 1: Front Page & Bio', pageNum: 'P. 1', icon: User },
  { id: 'projects', label: 'Page 2: Selected Work', pageNum: 'P. 2', icon: Briefcase },
  { id: 'skills', label: 'Page 3: Skills Cortex', pageNum: 'P. 3', icon: Cpu },
  { id: 'certifications', label: 'Page 4: Certifications', pageNum: 'P. 4', icon: ShieldCheck },
  { id: 'contact', label: 'Page 5: Classifieds & Contact', pageNum: 'P. 5', icon: Send },
];

export const SectionNav: React.FC<SectionNavProps> = ({ activeSection, onSelectSection }) => {
  return (
    <nav className="w-full bg-[var(--bg-primary)] border-b-2 border-[var(--border-dark)] sticky top-0 z-40 shadow-xs backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newspaper Page Tabs */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-2 gap-1 sm:gap-2">
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
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-sc font-bold transition-all whitespace-nowrap border-b-2 rounded-t-sm ${
                  isActive
                    ? 'border-[var(--accent-red)] bg-[var(--bg-paper-card)] text-[var(--text-main)] shadow-xs scale-102 font-extrabold'
                    : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-accent)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-[var(--accent-red)]' : ''}`} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
};
