import React, { useState } from 'react';
import { CLASSIFIED_ADS } from '../../data/newspaperData';
import { soundManager } from '../../utils/audio';
import { 
  Send, 
  Mail, 
  User, 
  CheckCircle2
} from 'lucide-react';

export const ClassifiedsContact: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: 'INQUIRY: Data Analyst / CS Position Offer',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundManager.playTypewriter();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      soundManager.playSuccessChime();

      // Launch email client pre-filled with sender message
      const mailtoUrl = `mailto:rizwansalmani.dev@gmail.com?subject=${encodeURIComponent(
        `[PORTFOLIO TELEGRAM] ${formData.subject} - From ${formData.senderName}`
      )}&body=${encodeURIComponent(
        `Sender Name: ${formData.senderName}\nReturn Email: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="classifieds" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--text-muted)]">
            SECTION F • CLASSIFIED ADS, WANT ADS & DESK CONTACT
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            THE CLASSIFIEDS & PRESS TELEGRAM DESK
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Positions offered, freelance announcements, and direct telegram dispatch to Rizwan Salmani."
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Classified Advertisements Grid (Col 1-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-sc font-bold text-lg text-[var(--text-main)] uppercase border-b-2 border-[var(--border-dark)] pb-2 flex items-center justify-between">
              <span>FEATURED WANT ADS & SERVICES</span>
              <span className="text-xs font-typewriter text-[var(--text-muted)]">STANDARD EDITORIAL AD RATE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLASSIFIED_ADS.map((ad) => (
                <div key={ad.id} className="border-2 border-newspaper-dashed border-[var(--border-dark)] p-4 bg-[var(--bg-paper-card)] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                  <div>
                    <div className="flex items-center justify-between font-typewriter text-[10px] font-bold text-[var(--accent-red)] uppercase border-b border-[var(--border-light)] pb-1 mb-2">
                      <span>{ad.category}</span>
                      {ad.priceTag && <span className="bg-[var(--accent-red)] text-white px-1 rounded-xs">{ad.priceTag}</span>}
                    </div>

                    <h4 className="font-headline text-base font-bold text-[var(--text-main)] mb-2">
                      {ad.title}
                    </h4>

                    <p className="font-typewriter text-xs text-[var(--text-muted)] leading-tight mb-3">
                      {ad.description}
                    </p>
                  </div>

                  <a
                    href={`mailto:${ad.contactEmail}?subject=${encodeURIComponent(ad.title)}`}
                    className="inline-flex items-center gap-1 font-typewriter text-xs font-bold text-[var(--text-main)] hover:text-[var(--accent-red)] underline pt-2 border-t border-[var(--border-light)]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{ad.contactEmail}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Press Telegram Contact Desk Form (Col 7-12) */}
          <div className="lg:col-span-6">
            <div className="border-4 border-double border-[var(--border-dark)] p-6 bg-[var(--bg-paper-card)] shadow-md relative">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-[var(--border-dark)] pb-3 mb-4">
                <div>
                  <h3 className="font-sc font-black text-xl text-[var(--text-main)] uppercase tracking-wider flex items-center gap-2">
                    <Send className="w-5 h-5 text-[var(--accent-red)]" />
                    <span>DISPATCH A PRESS TELEGRAM</span>
                  </h3>
                  <p className="font-serif italic text-xs text-[var(--text-muted)]">
                    Direct telegraph line to Rizwan Salmani's desk.
                  </p>
                </div>
                <div className="stamp-seal text-[9px] hidden sm:block">EXPRESS LINE</div>
              </div>

              {isSent ? (
                <div className="py-8 text-center space-y-4 animate-ink-press">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 border-2 border-emerald-700 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-[var(--text-main)]">
                    TELEGRAM TRANSMITTED SUCCESSFULLY!
                  </h4>
                  <p className="font-serif text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[var(--text-main)]">{formData.senderName}</span>. Your message has been sealed and pre-filled in your mail client addressed to <span className="font-bold text-[var(--accent-red)]">rizwansalmani.dev@gmail.com</span>.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:rizwansalmani.dev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="font-typewriter text-xs font-bold border-2 border-[var(--border-dark)] px-4 py-2 bg-[var(--accent-red)] text-white hover:bg-[var(--text-main)] transition-colors rounded-sm uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Email Client</span>
                    </a>
                    
                    <button
                      onClick={() => {
                        setIsSent(false);
                        setFormData({ senderName: '', senderEmail: '', subject: 'INQUIRY: Data Analyst / CS Position Offer', message: '' });
                      }}
                      className="font-typewriter text-xs font-bold border-2 border-[var(--border-dark)] px-4 py-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm uppercase tracking-wider"
                    >
                      Dispatch Another Telegram
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-typewriter text-xs">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase mb-1 text-[var(--text-main)]">
                        SENDER NAME *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[var(--text-muted)] absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          name="senderName"
                          required
                          placeholder="e.g. Lord Sterling"
                          value={formData.senderName}
                          onChange={handleChange}
                          className="w-full bg-[var(--bg-primary)] border border-[var(--border-dark)] pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[var(--accent-red)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold uppercase mb-1 text-[var(--text-main)]">
                        RETURN EMAIL *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-2.5 top-2.5" />
                        <input
                          type="email"
                          name="senderEmail"
                          required
                          placeholder="sterling@enterprise.com"
                          value={formData.senderEmail}
                          onChange={handleChange}
                          className="w-full bg-[var(--bg-primary)] border border-[var(--border-dark)] pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[var(--accent-red)]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block font-bold uppercase mb-1 text-[var(--text-main)]">
                      TELEGRAM PURPOSE
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-dark)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--accent-red)]"
                    >
                      <option value="INQUIRY: Data Analyst / CS Position Offer">INQUIRY: Data Analyst / CS Position Offer</option>
                      <option value="INQUIRY: Full-Stack / AI Lead Role">INQUIRY: Full-Stack / AI Lead Role</option>
                      <option value="INQUIRY: Data Analytics / ML Consulting">INQUIRY: Data Analytics / ML Consulting</option>
                      <option value="INQUIRY: General Technical Meeting">INQUIRY: General Technical Interview / Meeting</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-bold uppercase mb-1 text-[var(--text-main)]">
                      DISPATCH MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="TYPE TELEGRAM CONTENTS HERE..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-dark)] p-3 text-xs focus:outline-none focus:border-[var(--accent-red)] leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--border-dark)] text-[var(--bg-primary)] py-3 font-sc font-bold uppercase tracking-widest text-sm hover:bg-[var(--accent-red)] transition-colors rounded-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin text-amber-400">⏳</span>
                        <span>TRANSMITTING WIRE DISPATCH...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEAL & TRANSMIT TELEGRAM</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] text-[var(--text-muted)] text-center italic mt-2">
                    🔒 Dispatches directly pre-fill your email client addressed to <strong className="text-[var(--text-main)]">rizwansalmani.dev@gmail.com</strong>.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
