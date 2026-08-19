import { useState, useEffect } from 'react';
import type { ThemeMode, Article } from './types';
import { PaperUnfoldIntro } from './components/Intro/PaperUnfoldIntro';
import { Masthead } from './components/Header/Masthead';
import { BreakingTicker } from './components/Header/BreakingTicker';
import { MarketTicker } from './components/Header/MarketTicker';
import { SectionNav, type SectionId } from './components/Navigation/SectionNav';
import { HeroFrontPage } from './components/Sections/HeroFrontPage';
import { FeaturedProjects } from './components/Sections/FeaturedProjects';
import { TechSkills } from './components/Sections/TechSkills';
import { CertificationsArchive } from './components/Sections/CertificationsArchive';
import { ClassifiedsContact } from './components/Sections/ClassifiedsContact';
import { ArticleModal } from './components/Modals/ArticleModal';
import { SearchModal } from './components/Modals/SearchModal';
import { ClippingsDrawer } from './components/Modals/ClippingsDrawer';
import { CustomInkCursor } from './components/Interactive/CustomInkCursor';
import { NewspaperFooter } from './components/Footer/NewspaperFooter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [hasUnfolded, setHasUnfolded] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('sepia');
  const [activeSection, setActiveSection] = useState<SectionId>('frontpage');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rizwan_times_clippings');
      return saved ? JSON.parse(saved) : ['lead-story-rizwan'];
    } catch {
      return ['lead-story-rizwan'];
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isClippingsOpen, setIsClippingsOpen] = useState(false);

  // Sync theme changes to body element class
  useEffect(() => {
    document.body.className = `theme-${currentTheme} font-serif antialiased selection:bg-[#DECBB3] selection:text-[#171615]`;
  }, [currentTheme]);

  // GSAP ScrollTrigger Animations for broadsheet sections
  useEffect(() => {
    if (!hasUnfolded) return;

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0.9, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [hasUnfolded]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('rizwan_times_clippings', JSON.stringify(bookmarkedIds));
    } catch {
      // Ignore
    }
  }, [bookmarkedIds]);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectSection = (sec: SectionId) => {
    setActiveSection(sec);
    const element = document.getElementById(sec);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-400 newspaper-crease relative">
      
      {/* Desktop-only subtle ink cursor */}
      <CustomInkCursor />

      {/* Hero Opening Cover Curtain */}
      {!hasUnfolded && (
        <PaperUnfoldIntro onUnfold={() => setHasUnfolded(true)} />
      )}

      {/* Breaking News Marquee */}
      <BreakingTicker onSelectHeadline={() => setIsSearchOpen(true)} />

      {/* Main Newspaper Masthead */}
      <Masthead
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenClippings={() => setIsClippingsOpen(true)}
        clippingCount={bookmarkedIds.length}
        onPrint={() => window.print()}
      />

      {/* Tech Stock Commodities Bar */}
      <MarketTicker />

      {/* Sticky Section Navigator */}
      <SectionNav activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* Essential Portfolio Sections */}
      <main className="w-full">
        {/* SECTION 1: Introduction and Bio */}
        <HeroFrontPage
          onOpenArticle={setSelectedArticle}
          onToggleBookmark={handleToggleBookmark}
          isBookmarked={bookmarkedIds.includes('lead-story-rizwan')}
        />

        {/* SECTION 2: Selected Work and Case Studies */}
        <FeaturedProjects
          onOpenArticle={setSelectedArticle}
          onToggleBookmark={handleToggleBookmark}
          bookmarkedIds={bookmarkedIds}
        />

        {/* SECTION 3: Skills, Tools & Certifications */}
        <TechSkills />
        <CertificationsArchive />

        {/* SECTION 4: Contact Information */}
        <ClassifiedsContact />
      </main>

      {/* Newspaper Footer */}
      <NewspaperFooter onSelectSection={handleSelectSection} />

      {/* Modals & Overlays */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onToggleBookmark={handleToggleBookmark}
        isBookmarked={selectedArticle ? bookmarkedIds.includes(selectedArticle.id) : false}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={setSelectedArticle}
      />

      <ClippingsDrawer
        isOpen={isClippingsOpen}
        onClose={() => setIsClippingsOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onRemoveBookmark={handleToggleBookmark}
        onSelectArticle={setSelectedArticle}
      />

    </div>
  );
}

export default App;
