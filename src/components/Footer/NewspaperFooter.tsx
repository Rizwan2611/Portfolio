import React, { useState } from 'react';
import { NEWSPAPER_META } from '../../data/newspaperData';
import { soundManager } from '../../utils/audio';
import { 
  Code2, 
  Globe, 
  Share2, 
  Mail, 
  ArrowUp, 
  CheckCircle, 
  Send 
} from 'lucide-react';

interface NewspaperFooterProps {
  onSelectSection: (sectionId: any) => void;
}

export const NewspaperFooter: React.FC<NewspaperFooterProps> = ({ onSelectSection }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    soundManager.playStampEffect();
    setSubscribed(true);
    soundManager.playSuccessChime();
  };

  const scrollToTop = () => {
    soundManager.playPageTurn();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[var(--bg-paper-card)] border-t-4 border-double border-[var(--border-dark)] pt-10 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b-2 border-[var(--border-dark)] pb-8 mb-6">
          
          {/* Col 1-5: Masthead & Bio */}
          <div className="md:col-span-5 space-y-3 text-left">
            <h3 className="font-masthead text-3xl font-black uppercase text-[var(--text-main)] text-left">
              {NEWSPAPER_META.title}
            </h3>
            <p className="font-serif italic text-sm text-[var(--text-muted)] leading-relaxed text-left">
              "{NEWSPAPER_META.motto}" — Published independently by Rizwan Salmani. Dedicated to architectural excellence, modern full-stack development, and digital craft.
            </p>
            <div className="font-typewriter text-xs text-[var(--text-muted)] space-y-1 text-left">
              <div>📍 Dateline: {NEWSPAPER_META.dateline}</div>
              <div>⚡ Volume: {NEWSPAPER_META.volumeNo} • Issue No: {NEWSPAPER_META.editionNo}</div>
            </div>
          </div>

          {/* Col 6-8: Quick Section Index - Clean Left-Aligned */}
          <div className="md:col-span-3 space-y-3 font-typewriter text-xs text-left">
            <h4 className="font-sc font-bold text-sm uppercase text-[var(--text-main)] border-b border-[var(--border-dark)] pb-1 text-left">
              SECTION INDEX
            </h4>
            <ul className="space-y-2 font-bold text-left">
              <li className="text-left">
                <button onClick={() => onSelectSection('frontpage')} className="hover:text-[var(--accent-red)] text-left block w-full transition-colors">
                  P. 1 — Intro & Bio
                </button>
              </li>
              <li className="text-left">
                <button onClick={() => onSelectSection('projects')} className="hover:text-[var(--accent-red)] text-left block w-full transition-colors">
                  P. 2 — Selected Work & Case Studies
                </button>
              </li>
              <li className="text-left">
                <button onClick={() => onSelectSection('skills')} className="hover:text-[var(--accent-red)] text-left block w-full transition-colors">
                  P. 3 — Skills, Tools & Certifications
                </button>
              </li>
              <li className="text-left">
                <button onClick={() => onSelectSection('contact')} className="hover:text-[var(--accent-red)] text-left block w-full transition-colors">
                  P. 4 — Contact & Telegram Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Dispatch Newsletter Subscription */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="font-sc font-bold text-sm uppercase text-[var(--text-main)] border-b border-[var(--border-dark)] pb-1 text-left">
              WEEKLY PRESS DISPATCH SUBSCRIPTION
            </h4>
            <p className="font-serif text-xs italic text-[var(--text-muted)] text-left">
              Receive curated articles on React architecture, WebGL shaders, and AI systems directly to your inbox.
            </p>

            {subscribed ? (
              <div className="border border-emerald-700 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 p-3 font-typewriter text-xs flex items-center gap-2 rounded-xs">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>SUBSCRIBED! Welcome to The Rizwan Times dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex font-typewriter text-xs">
                <input
                  type="email"
                  required
                  placeholder="publisher@enterprise.com"
                  value={newsletterEmail}
                  onChange={(e) => {
                    soundManager.playTypewriter();
                    setNewsletterEmail(e.target.value);
                  }}
                  className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-dark)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--accent-red)]"
                />
                <button
                  type="submit"
                  className="bg-[var(--border-dark)] text-[var(--bg-primary)] px-3 py-2 font-bold uppercase hover:bg-[var(--accent-red)] transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/rizwansalmani"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[var(--border-dark)] bg-[var(--bg-primary)] hover:bg-[var(--accent-red)] hover:text-white transition-colors rounded-sm"
                title="GitHub Dispatch"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[var(--border-dark)] bg-[var(--bg-primary)] hover:bg-[var(--accent-red)] hover:text-white transition-colors rounded-sm"
                title="LinkedIn Network"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-[var(--border-dark)] bg-[var(--bg-primary)] hover:bg-[var(--accent-red)] hover:text-white transition-colors rounded-sm"
                title="Twitter / X Desk"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:rizwansalmani.dev@gmail.com"
                className="p-2 border border-[var(--border-dark)] bg-[var(--bg-primary)] hover:bg-[var(--accent-red)] hover:text-white transition-colors rounded-sm"
                title="Email Telegraph"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-wrap items-center justify-between font-typewriter text-xs text-[var(--text-muted)] gap-4">
          <div>
            © {new Date().getFullYear()} THE RIZWAN TIMES. All Rights Reserved. Crafted with React, TypeScript & Web Audio.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 font-bold border border-[var(--border-dark)] px-3 py-1.5 bg-[var(--bg-primary)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm text-[var(--text-main)]"
          >
            <span>Return to Front Page Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--accent-red)]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
