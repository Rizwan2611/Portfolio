import React from 'react';
import { LEAD_STORY } from '../../data/newspaperData';
import type { Article } from '../../types';
import { EditorialPhotoFrame } from '../Interactive/EditorialPhotoFrame';
import { 
  Bookmark, 
  Maximize2, 
  Award, 
  Sparkles, 
  Quote, 
  ExternalLink
} from 'lucide-react';

interface HeroFrontPageProps {
  onOpenArticle: (article: Article) => void;
  onToggleBookmark: (articleId: string) => void;
  isBookmarked: boolean;
}

export const HeroFrontPage: React.FC<HeroFrontPageProps> = ({
  onOpenArticle,
  onToggleBookmark,
  isBookmarked,
}) => {
  return (
    <section className="w-full py-8 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout: 2/3 Main Article + 1/3 Sidebar Clippings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Lead Story (Col 1-8) */}
          <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] lg:pr-8 pb-6 lg:pb-0">
            
            {/* Category & Date Tagline */}
            <div className="flex items-center justify-between font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold mb-2">
              <span className="flex items-center gap-1.5 bg-[var(--accent-red)] text-white px-2 py-0.5 rounded-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SPECIAL FRONT PAGE COVERAGE</span>
              </span>
              <span>{LEAD_STORY.date}</span>
            </div>

            {/* Headline */}
            <h2 
              onClick={() => onOpenArticle(LEAD_STORY)}
              className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[var(--text-main)] hover:text-[var(--accent-red)] cursor-pointer transition-colors leading-tight mb-3"
            >
              {LEAD_STORY.title}
            </h2>

            {/* Subtitle */}
            <p className="font-serif italic text-lg sm:text-xl text-[var(--text-muted)] border-b border-[var(--border-dark)] pb-3 mb-4">
              {LEAD_STORY.subtitle}
            </p>

            {/* Byline & Read time */}
            <div className="flex items-center justify-between text-xs font-typewriter text-[var(--text-muted)] border-b border-[var(--border-light)] pb-2 mb-6">
              <span>{LEAD_STORY.author}</span>
              <div className="flex items-center gap-4">
                <span>{LEAD_STORY.readTime}</span>
                <button
                  onClick={() => onToggleBookmark(LEAD_STORY.id)}
                  className="flex items-center gap-1 text-[var(--text-main)] hover:text-[var(--accent-red)] font-bold"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[var(--accent-red)] text-[var(--accent-red)]' : ''}`} />
                  <span>{isBookmarked ? 'Clipped' : 'Clip Story'}</span>
                </button>
              </div>
            </div>

            {/* Editorial Photograph Treatment Frame */}
            <EditorialPhotoFrame
              imageSrc="/rizwan_photo.png"
              caption="Rizwan Salmani — Computer Science Scholar, Full-Stack Lead & Creative Technologist."
            />

            {/* Lead Story Body Columns */}
            <div className="columns-newspaper-2 text-base leading-relaxed font-body text-justify my-4">
              <p className="drop-cap mb-4">
                {LEAD_STORY.content[0]}
              </p>
              <p className="mb-4">
                {LEAD_STORY.content[1]}
              </p>
              
              {/* Embedded Quote Box */}
              <blockquote className="my-4 p-4 border-y-2 border-double border-[var(--border-dark)] bg-[var(--bg-accent)] font-headline italic text-lg text-[var(--text-main)]">
                <Quote className="w-5 h-5 text-[var(--accent-red)] inline mr-2" />
                "{LEAD_STORY.content[2].replace(/"/g, '')}"
              </blockquote>

              <p className="mb-4">
                {LEAD_STORY.content[3]}
              </p>
              <p className="mb-4">
                {LEAD_STORY.content[4]}
              </p>
            </div>

            {/* Read More Trigger CTA */}
            <div className="mt-6 pt-4 border-t border-[var(--border-light)] flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {LEAD_STORY.tags.map((tag) => (
                  <span key={tag} className="text-xs font-typewriter bg-[var(--bg-accent)] border border-[var(--border-dark)] px-2 py-0.5 font-bold">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenArticle(LEAD_STORY)}
                className="flex items-center gap-2 bg-[var(--border-dark)] text-[var(--bg-primary)] px-4 py-2 text-xs font-sc font-bold uppercase tracking-wider hover:bg-[var(--accent-red)] transition-colors rounded-sm"
              >
                <span>Read Full Investigation</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Sidebar Column (Col 9-12): Key Metrics & Editorial Notice */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Key Metrics Clippings Box */}
            <div className="border-4 border-double border-[var(--border-dark)] p-4 bg-[var(--bg-paper-card)] shadow-xs">
              <div className="flex items-center justify-between border-b-2 border-[var(--border-dark)] pb-2 mb-3">
                <h3 className="font-sc font-extrabold text-base tracking-wider uppercase flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[var(--accent-red)]" />
                  <span>KEY METRICS BULLETIN</span>
                </h3>
                <span className="stamp-seal text-[9px] py-0.5 px-1.5">VERIFIED</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-typewriter">
                {LEAD_STORY.metrics?.map((m) => (
                  <div key={m.label} className="border border-[var(--border-dark)] p-2.5 bg-[var(--bg-primary)] text-center">
                    <div className="text-xl font-black text-[var(--accent-red)]">{m.value}</div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-tight mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Notice Box */}
            <div className="border-2 border-dashed border-[var(--border-dark)] p-4 bg-[var(--bg-primary)]">
              <div className="font-sc font-bold text-xs uppercase tracking-widest text-[var(--accent-red)] mb-1">
                PUBLIC NOTICE
              </div>
              <h4 className="font-headline font-bold text-base mb-2">
                OPEN FOR CS RESEARCH & HIGH-IMPACT COLLABORATION
              </h4>
              <p className="font-serif text-xs leading-relaxed text-[var(--text-muted)] mb-3">
                Rizwan Salmani is currently reviewing select opportunities for full-time CS leadership roles, AI advisory positions, and principal engineering engagements for Q3/Q4 2026.
              </p>
              <a
                href="#classifieds"
                className="inline-flex items-center gap-1 font-typewriter text-xs font-bold text-[var(--text-main)] underline hover:text-[var(--accent-red)]"
              >
                <span>Dispatch a Telegram to Desk</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
