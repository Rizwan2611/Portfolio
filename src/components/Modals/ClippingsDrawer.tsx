import React from 'react';
import { LEAD_STORY, FEATURED_PROJECTS } from '../../data/newspaperData';
import type { Article } from '../../types';
import { soundManager } from '../../utils/audio';
import { Bookmark, X, Trash2, ArrowRight } from 'lucide-react';

interface ClippingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const ClippingsDrawer: React.FC<ClippingsDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onRemoveBookmark,
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  const allArticles = [LEAD_STORY, ...FEATURED_PROJECTS];
  const clippedArticles = allArticles.filter((art) => bookmarkedIds.includes(art.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      
      <div className="w-full max-w-md bg-[var(--bg-primary)] border-l-4 border-[var(--border-dark)] h-full shadow-2xl flex flex-col">
        
        {/* Drawer Header */}
        <div className="p-4 bg-[var(--bg-paper-card)] border-b-2 border-[var(--border-dark)] flex items-center justify-between font-typewriter text-xs">
          <div className="flex items-center gap-2 font-bold uppercase text-[var(--accent-red)]">
            <Bookmark className="w-4 h-4 fill-current" />
            <span>MY CLIPPINGS VAULT ({clippedArticles.length})</span>
          </div>
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

        {/* Clippings List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-typewriter text-xs">
          {clippedArticles.length === 0 ? (
            <div className="py-12 text-center text-[var(--text-muted)] font-serif italic text-sm space-y-2">
              <Bookmark className="w-8 h-8 text-[var(--border-light)] mx-auto" />
              <div>No clippings saved yet.</div>
              <p className="text-xs">Click "Clip Story" on any article to save it to your reading list.</p>
            </div>
          ) : (
            clippedArticles.map((art) => (
              <div
                key={art.id}
                className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-3 relative group shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-1 mb-2">
                  <span className="font-bold text-[var(--accent-red)] uppercase text-[10px]">{art.category}</span>
                  <button
                    onClick={() => {
                      soundManager.playStampEffect();
                      onRemoveBookmark(art.id);
                    }}
                    className="text-[var(--text-muted)] hover:text-rose-700 transition-colors"
                    title="Remove Clipping"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4
                  onClick={() => {
                    soundManager.playPageTurn();
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="font-headline font-bold text-base text-[var(--text-main)] hover:text-[var(--accent-red)] cursor-pointer transition-colors leading-tight mb-1"
                >
                  {art.title}
                </h4>

                <p className="font-serif italic text-xs text-[var(--text-muted)] line-clamp-2 mb-2">
                  {art.summary}
                </p>

                <button
                  onClick={() => {
                    soundManager.playPageTurn();
                    onSelectArticle(art);
                    onClose();
                  }}
                  className="flex items-center gap-1 font-bold text-[var(--text-main)] underline hover:text-[var(--accent-red)] text-[10px]"
                >
                  <span>Read Clipped Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
