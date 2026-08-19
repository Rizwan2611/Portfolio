import { useState, useEffect, useCallback } from 'react';
import type { ThemeMode, Article } from './types';
import { PaperUnfoldIntro } from './components/Intro/PaperUnfoldIntro';
import { Masthead } from './components/Header/Masthead';
import { MarketTicker } from './components/Header/MarketTicker';
import { SectionNav, type SectionId, SECTIONS } from './components/Navigation/SectionNav';
import { HeroFrontPage } from './components/Sections/HeroFrontPage';
import { FeaturedProjects } from './components/Sections/FeaturedProjects';
import { TechSkills } from './components/Sections/TechSkills';
import { SignatureTransformation } from './components/Interactive/SignatureTransformation';
import { CertificationsArchive } from './components/Sections/CertificationsArchive';
import { ClassifiedsContact } from './components/Sections/ClassifiedsContact';
import { ArticleModal } from './components/Modals/ArticleModal';
import { SearchModal } from './components/Modals/SearchModal';
import { ClippingsDrawer } from './components/Modals/ClippingsDrawer';
import { CustomInkCursor } from './components/Interactive/CustomInkCursor';
import { NewspaperFooter } from './components/Footer/NewspaperFooter';
import { soundManager } from './utils/audio';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export function App() {
  const [hasUnfolded, setHasUnfolded] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('sepia');
  const [activeSection, setActiveSection] = useState<SectionId>('frontpage');
  const [turnDirection, setTurnDirection] = useState<'forward' | 'backward'>('forward');
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

  const sectionOrder: SectionId[] = ['frontpage', 'projects', 'skills', 'certifications', 'contact'];
  const currentPageIdx = sectionOrder.indexOf(activeSection);

  // Sync theme changes to body element class
  useEffect(() => {
    document.body.className = `theme-${currentTheme} font-serif antialiased selection:bg-[#DECBB3] selection:text-[#171615]`;
  }, [currentTheme]);

  // Completely lock page scroll while intro/welcome curtain is active
  useEffect(() => {
    if (!hasUnfolded) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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

  const goToPage = useCallback((sec: SectionId) => {
    const newIdx = sectionOrder.indexOf(sec);
    const oldIdx = sectionOrder.indexOf(activeSection);
    
    if (newIdx !== oldIdx) {
      soundManager.playPageTurn();
      setTurnDirection(newIdx > oldIdx ? 'forward' : 'backward');
      setActiveSection(sec);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const turnNextPage = useCallback(() => {
    if (currentPageIdx < sectionOrder.length - 1) {
      goToPage(sectionOrder[currentPageIdx + 1]);
    }
  }, [currentPageIdx, goToPage]);

  const turnPrevPage = useCallback(() => {
    if (currentPageIdx > 0) {
      goToPage(sectionOrder[currentPageIdx - 1]);
    }
  }, [currentPageIdx, goToPage]);

  // Keyboard Arrow Page-Turning Controls (Left/Right Arrow Keys)
  useEffect(() => {
    if (!hasUnfolded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSearchOpen || isClippingsOpen || selectedArticle || ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        turnNextPage();
      } else if (e.key === 'ArrowLeft') {
        turnPrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasUnfolded, isSearchOpen, isClippingsOpen, selectedArticle, turnNextPage, turnPrevPage]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-400 newspaper-crease relative perspective-newspaper overflow-x-hidden">
      
      {/* Desktop-only subtle ink cursor */}
      <CustomInkCursor />

      {/* Hero Opening Cover Curtain */}
      {!hasUnfolded && (
        <PaperUnfoldIntro onUnfold={() => setHasUnfolded(true)} />
      )}

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

      {/* Sticky Section Navigator Page Tabs */}
      <SectionNav activeSection={activeSection} onSelectSection={goToPage} />

      {/* Standalone Broadsheet Newspaper Page Viewport */}
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 relative min-h-[85vh]">
        
        {/* Individual Paper Sheet Page Container with 3D Page Turn Animation */}
        <div 
          key={activeSection}
          className={`w-full border-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] shadow-2xl p-4 sm:p-8 min-h-[85vh] relative rounded-xs newspaper-crease ${
            turnDirection === 'forward' ? 'animate-flip-forward' : 'animate-flip-backward'
          }`}
        >
          {/* Top Page Folio Line */}
          <div className="border-b-2 border-double border-[var(--border-dark)] pb-2 mb-6 flex items-center justify-between font-typewriter text-xs text-[var(--text-muted)] uppercase tracking-wider">
            <span>THE RIZWAN TIMES • ISSUE 026</span>
            <span className="font-bold text-[var(--accent-red)] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{SECTIONS[currentPageIdx]?.label} (PAGE 0{currentPageIdx + 1} OF 05)</span>
            </span>
            <span>MUMBAI • INDIA</span>
          </div>

          {/* INDIVIDUAL PAGE 01: Front Page Intro & Bio */}
          {activeSection === 'frontpage' && (
            <HeroFrontPage
              onOpenArticle={setSelectedArticle}
              onToggleBookmark={handleToggleBookmark}
              isBookmarked={bookmarkedIds.includes('lead-story-rizwan')}
            />
          )}

          {/* INDIVIDUAL PAGE 02: Selected Work & Investigations */}
          {activeSection === 'projects' && (
            <FeaturedProjects
              onOpenArticle={setSelectedArticle}
              onToggleBookmark={handleToggleBookmark}
              bookmarkedIds={bookmarkedIds}
            />
          )}

          {/* INDIVIDUAL PAGE 03: Skills Cortex & Transformation */}
          {activeSection === 'skills' && (
            <div className="space-y-8">
              <TechSkills />
              <SignatureTransformation />
            </div>
          )}

          {/* INDIVIDUAL PAGE 04: Certifications & Verified Records */}
          {activeSection === 'certifications' && (
            <CertificationsArchive />
          )}

          {/* INDIVIDUAL PAGE 05: Classifieds & Contact Desk */}
          {activeSection === 'contact' && (
            <ClassifiedsContact />
          )}

          {/* Bottom Page Margin Footer Dateline */}
          <div className="mt-8 pt-3 border-t border-[var(--border-light)] flex items-center justify-between font-typewriter text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            <span>PAGE 0{currentPageIdx + 1} // BROADSHEET EDITION</span>
            <span className="font-bold text-[var(--text-main)]">THE RIZWAN TIMES • PUBLISHED DAILY</span>
            <span>PRESS BUREAU 2026</span>
          </div>

        </div>

      </main>

      {/* Sticky Floating Real Newspaper Page-Turning Controls Bar */}
      <div className="sticky bottom-4 z-40 max-w-2xl mx-auto px-4 pointer-events-auto my-4">
        <div className="bg-[var(--bg-paper-card)] border-4 border-double border-[var(--border-dark)] shadow-2xl p-2 sm:p-3 flex items-center justify-between font-typewriter text-xs rounded-sm backdrop-blur-xs">
          
          {/* Turn Previous Page Button (Flips Left-to-Right) */}
          <button
            onClick={turnPrevPage}
            disabled={currentPageIdx === 0}
            className={`flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 border border-[var(--border-dark)] font-bold transition-all rounded-xs ${
              currentPageIdx === 0
                ? 'opacity-40 cursor-not-allowed bg-[var(--bg-primary)]'
                : 'hover:bg-[var(--accent-red)] hover:text-white bg-[var(--bg-primary)] cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Turn Back to Page 0{currentPageIdx}</span>
            <span className="sm:hidden">Prev Page</span>
          </button>

          {/* Active Page Counter Indicator */}
          <div className="flex flex-col items-center text-center font-bold">
            <div className="flex items-center gap-1.5 text-[var(--accent-red)] uppercase tracking-wider text-[11px] sm:text-xs">
              <BookOpen className="w-4 h-4" />
              <span>PAGE 0{currentPageIdx + 1} OF 05</span>
            </div>
            <span className="text-[9px] text-[var(--text-muted)] font-normal hidden sm:inline">
              ← Turn Left / Right → Keys
            </span>
          </div>

          {/* Turn Next Page Button (Flips Right-to-Left) */}
          <button
            onClick={turnNextPage}
            disabled={currentPageIdx === sectionOrder.length - 1}
            className={`flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 border border-[var(--border-dark)] font-bold transition-all rounded-xs ${
              currentPageIdx === sectionOrder.length - 1
                ? 'opacity-40 cursor-not-allowed bg-[var(--bg-primary)]'
                : 'hover:bg-[var(--accent-red)] hover:text-white bg-[var(--bg-primary)] cursor-pointer'
            }`}
          >
            <span className="hidden sm:inline">Turn Forward to Page 0{currentPageIdx + 2}</span>
            <span className="sm:hidden">Next Page</span>
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* Newspaper Footer */}
      <NewspaperFooter onSelectSection={goToPage} />

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
