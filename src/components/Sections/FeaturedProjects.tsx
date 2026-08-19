import React from 'react';
import { FEATURED_PROJECTS } from '../../data/newspaperData';
import type { Article } from '../../types';
import { soundManager } from '../../utils/audio';
import { 
  Bookmark, 
  ExternalLink, 
  Code2, 
  Maximize2, 
  Zap 
} from 'lucide-react';

interface FeaturedProjectsProps {
  onOpenArticle: (article: Article) => void;
  onToggleBookmark: (articleId: string) => void;
  bookmarkedIds: string[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onOpenArticle,
  onToggleBookmark,
  bookmarkedIds,
}) => {
  return (
    <section id="projects" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Banner */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--text-muted)]">
            SECTION 02 • FEATURED INVESTIGATIVE REPORTS & CASE STUDIES
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            SELECTED WORK & CASE STUDIES
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "In-depth analysis of groundbreaking software architectures shipped by Rizwan Salmani."
          </div>
        </div>

        {/* Projects Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((proj, idx) => {
            const isBookmarked = bookmarkedIds.includes(proj.id);
            return (
              <article
                key={proj.id}
                data-cursor="READ"
                className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Article Meta Header */}
                  <div className="flex items-center justify-between font-typewriter text-xs text-[var(--text-muted)] border-b border-[var(--border-light)] pb-2 mb-3">
                    <span className="font-bold text-[var(--accent-red)] uppercase flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 inline" />
                      <span>{proj.category}</span>
                    </span>
                    <div className="flex items-center gap-3">
                      <span>{proj.readTime}</span>
                      <button
                        onClick={() => {
                          soundManager.playStampEffect();
                          onToggleBookmark(proj.id);
                        }}
                        className="hover:text-[var(--accent-red)] transition-colors"
                        title={isBookmarked ? "Remove Clip" : "Save Clip"}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[var(--accent-red)] text-[var(--accent-red)]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => {
                      soundManager.playPageTurn();
                      onOpenArticle(proj);
                    }}
                    className="font-headline text-2xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-red)] cursor-pointer transition-colors leading-snug mb-2"
                  >
                    {proj.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-serif italic text-sm text-[var(--text-muted)] mb-4 border-b border-[var(--border-light)] pb-2">
                    {proj.subtitle}
                  </p>

                  {/* Figure Image Container - Clean HD Visuals */}
                  <div className="relative mb-4 border-2 border-[var(--border-dark)] overflow-hidden bg-black aspect-16/9 shadow-xs">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 opacity-100 contrast-105"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/85 text-white text-[10px] font-typewriter p-1.5 flex items-center justify-between">
                      <span className="line-clamp-1">{proj.caption}</span>
                      <span className="font-bold text-amber-400 shrink-0 ml-2">FIG. {idx + 1}</span>
                    </div>
                  </div>

                  {/* Summary Paragraph */}
                  <p className="font-body text-base leading-relaxed text-justify mb-4">
                    {proj.summary}
                  </p>

                  {/* Metrics Badges */}
                  {proj.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4 font-typewriter text-center">
                      {proj.metrics.map((m) => (
                        <div key={m.label} className="border border-[var(--border-dark)] p-1.5 bg-[var(--bg-primary)]">
                          <div className="font-bold text-sm text-[var(--accent-red)]">{m.value}</div>
                          <div className="text-[9px] text-[var(--text-muted)] uppercase">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-typewriter bg-[var(--bg-accent)] border border-[var(--border-light)] px-2 py-0.5 font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-3 border-t border-[var(--border-dark)] flex items-center justify-between font-typewriter text-xs">
                  <div className="flex items-center gap-3">
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 font-bold text-[var(--text-main)] hover:text-[var(--accent-red)] underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 font-bold text-[var(--text-main)] hover:text-[var(--accent-red)] underline"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      soundManager.playPageTurn();
                      onOpenArticle(proj);
                    }}
                    className="flex items-center gap-1 bg-[var(--border-dark)] text-[var(--bg-primary)] px-3 py-1.5 font-sc font-bold uppercase tracking-wider hover:bg-[var(--accent-red)] transition-colors rounded-sm"
                  >
                    <span>Inspect Case Study</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
