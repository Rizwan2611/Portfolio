import React, { useState, useEffect } from 'react';
import { LEAD_STORY, FEATURED_PROJECTS } from '../../data/newspaperData';
import type { Article } from '../../types';
import { soundManager } from '../../utils/audio';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const allArticles = [LEAD_STORY, ...FEATURED_PROJECTS];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? allArticles
    : allArticles.filter((art) =>
        art.title.toLowerCase().includes(query.toLowerCase()) ||
        art.summary.toLowerCase().includes(query.toLowerCase()) ||
        art.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-2xl bg-[var(--bg-primary)] border-4 border-double border-[var(--border-dark)] shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 bg-[var(--bg-paper-card)] border-b-2 border-[var(--border-dark)] flex items-center gap-3 font-typewriter">
          <Search className="w-5 h-5 text-[var(--accent-red)]" />
          <input
            type="text"
            autoFocus
            placeholder="Search headlines, projects, or technologies..."
            value={query}
            onChange={(e) => {
              soundManager.playTypewriter();
              setQuery(e.target.value);
            }}
            className="flex-1 bg-transparent text-sm font-bold focus:outline-none text-[var(--text-main)] uppercase"
          />
          <button
            onClick={() => {
              soundManager.playPageTurn();
              onClose();
            }}
            className="p-1 border border-[var(--border-dark)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
          >
            <X className="w-5 h-5 text-[var(--text-main)]" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3 font-typewriter text-xs">
          {results.length === 0 ? (
            <div className="py-8 text-center text-[var(--text-muted)] font-serif italic text-sm">
              No press dispatches found matching "{query}". Try searching "React", "AI", or "WebGL".
            </div>
          ) : (
            results.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  soundManager.playPageTurn();
                  onSelectArticle(art);
                  onClose();
                }}
                className="border border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-3 hover:border-[var(--accent-red)] hover:bg-[var(--bg-primary)] cursor-pointer transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-bold text-[var(--accent-red)] uppercase mb-1">
                    {art.category} • {art.date}
                  </div>
                  <div className="font-headline font-bold text-base text-[var(--text-main)] group-hover:text-[var(--accent-red)]">
                    {art.title}
                  </div>
                  <div className="font-serif italic text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">
                    {art.summary}
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-red)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
