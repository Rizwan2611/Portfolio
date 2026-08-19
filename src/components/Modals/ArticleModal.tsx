import React, { useEffect } from 'react';
import type { Article } from '../../types';
import { soundManager } from '../../utils/audio';
import { 
  X, 
  Bookmark, 
  ExternalLink, 
  Code2, 
  Calendar, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onToggleBookmark: (articleId: string) => void;
  isBookmarked: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onToggleBookmark,
  isBookmarked,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-primary)] border-4 border-double border-[var(--border-dark)] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-[var(--border-dark)] p-4 bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase font-bold text-[var(--accent-red)] flex items-center gap-2">
            <span className="bg-[var(--accent-red)] text-white px-2 py-0.5 rounded-xs">PRESS ARCHIVE #882</span>
            <span>{article.category}</span>
          </div>

          <div className="flex items-center gap-3 font-typewriter text-xs">
            <button
              onClick={() => {
                soundManager.playStampEffect();
                onToggleBookmark(article.id);
              }}
              className="flex items-center gap-1 border border-[var(--border-dark)] px-2 py-1 bg-[var(--bg-primary)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[var(--accent-red)] text-[var(--accent-red)]' : ''}`} />
              <span className="font-bold">{isBookmarked ? 'Clipped' : 'Save Clip'}</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPageTurn();
                onClose();
              }}
              className="p-1 border border-[var(--border-dark)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
              title="Close Article"
            >
              <X className="w-5 h-5 text-[var(--text-main)]" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Article Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Article Header */}
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-[var(--text-main)] leading-tight mb-2">
              {article.title}
            </h2>
            {article.subtitle && (
              <p className="font-serif italic text-lg text-[var(--text-muted)] border-b border-[var(--border-light)] pb-2 mb-3">
                {article.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between text-xs font-typewriter text-[var(--text-muted)] border-b border-[var(--border-dark)] pb-2">
              <span>{article.author}</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {article.image && (
            <div className="border-2 border-[var(--border-dark)] p-2 bg-[var(--bg-paper-card)]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full max-h-96 object-cover photo-halftone"
              />
              {article.caption && (
                <div className="mt-2 text-xs font-typewriter italic text-[var(--text-muted)] text-center">
                  {article.caption}
                </div>
              )}
            </div>
          )}

          {/* Metrics */}
          {article.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-typewriter">
              {article.metrics.map((m) => (
                <div key={m.label} className="border border-[var(--border-dark)] p-3 bg-[var(--bg-paper-card)] text-center">
                  <div className="text-xl font-bold text-[var(--accent-red)]">{m.value}</div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Article Full Paragraphs */}
          <div className="space-y-4 font-body text-lg leading-relaxed text-justify">
            {article.content.map((p, idx) => (
              <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                {p}
              </p>
            ))}
          </div>

          {/* Architecture Notes Box */}
          {article.architectureNotes && (
            <div className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-4">
              <h4 className="font-sc font-bold text-sm uppercase text-[var(--text-main)] border-b border-[var(--border-dark)] pb-2 mb-3">
                TECHNICAL ARCHITECTURE SPECIFICATIONS:
              </h4>
              <ul className="space-y-2 font-typewriter text-xs">
                {article.architectureNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="pt-4 border-t border-[var(--border-dark)] flex flex-wrap items-center justify-between font-typewriter text-xs gap-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-[var(--bg-accent)] border border-[var(--border-dark)] px-2 py-0.5 font-bold">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {article.demoUrl && (
                <a
                  href={article.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-[var(--border-dark)] text-[var(--bg-primary)] px-3 py-1.5 font-sc font-bold uppercase tracking-wider hover:bg-[var(--accent-red)] transition-colors rounded-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              {article.githubUrl && (
                <a
                  href={article.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 border border-[var(--border-dark)] px-3 py-1.5 font-sc font-bold uppercase tracking-wider hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
