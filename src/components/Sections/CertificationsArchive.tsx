import React, { useState } from 'react';
import { ShieldCheck, FileCheck, ExternalLink, X } from 'lucide-react';

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  sealText: string;
  image?: string;
  isOngoing?: boolean;
  description: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-kaggle-python',
    title: 'KAGGLE CERTIFICATE OF COMPLETION: PYTHON',
    issuer: 'Kaggle (Colin Morris & Alexis Cook, Head of Kaggle Learn)',
    date: 'August 3, 2026',
    credentialId: 'KAGGLE-PY-2026',
    skills: ['Python Core', 'Data Manipulation', 'Functions & Logic', 'Data Science'],
    sealText: 'VERIFIED CERTIFICATE',
    image: '/kaggle_python_certificate.png',
    description: 'Official Kaggle Certificate of Completion awarded to Rizwan Salmani on August 3, 2026, verifying core proficiency in Python programming for Data Science and Machine Learning pipelines.',
  },
];

export const CertificationsArchive: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold">
            SECTION C • CERTIFICATIONS & VERIFIED ARCHIVES
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            VERIFIED CERTIFICATION RECORD
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Official Kaggle certification in Python Programming & Data Science."
          </div>
        </div>

        {/* Certifications Grid (Single Highlighted Featured Certificate Card) */}
        <div className="max-w-2xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => cert.image && setSelectedCert(cert)}
              className="border-4 border-double border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-all relative cursor-pointer hover:border-[var(--accent-red)]"
            >
              <div>
                <div className="flex items-center justify-between font-typewriter text-xs font-bold text-[var(--text-muted)] border-b border-[var(--border-light)] pb-2 mb-3">
                  <span className="flex items-center gap-1.5 text-[var(--accent-red)]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{cert.credentialId}</span>
                  </span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="font-headline text-2xl font-bold text-[var(--text-main)] mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="font-serif italic text-xs sm:text-sm text-[var(--text-muted)] mb-3">
                  Issued by {cert.issuer}
                </p>

                <p className="font-typewriter text-xs text-[var(--text-main)] leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Certificate Preview Image */}
                {cert.image && (
                  <div className="mb-4 border-2 border-[var(--border-dark)] overflow-hidden shadow-xs relative group rounded-xs">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-64 object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-typewriter text-xs font-bold gap-1.5">
                      <ExternalLink className="w-4 h-4" />
                      <span>Click to Enlarge Full Certificate</span>
                    </div>
                  </div>
                )}

                <div className="space-y-1.5 font-typewriter text-xs mb-4">
                  <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase">VERIFIED COMPETENCIES:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="bg-[var(--bg-primary)] border border-[var(--border-dark)] px-2.5 py-1 text-xs font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stamp Seal */}
              <div className="pt-3 border-t border-[var(--border-light)] flex items-center justify-between font-typewriter text-xs">
                <span className="stamp-seal text-[9px] py-0.5 px-2">
                  {cert.sealText}
                </span>
                <button className="flex items-center gap-1 font-bold text-[var(--text-main)] underline hover:text-[var(--accent-red)] text-xs">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>View Original Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Certificate Modal */}
      {selectedCert && selectedCert.image && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-[var(--bg-primary)] border-4 border-double border-[var(--border-dark)] max-w-4xl w-full p-6 shadow-2xl relative animate-scale-up overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-[var(--border-dark)] pb-3 mb-4 font-typewriter">
              <div>
                <span className="text-xs text-[var(--accent-red)] font-bold uppercase">OFFICIAL VERIFIED CERTIFICATE RECORD</span>
                <h3 className="font-headline text-2xl font-bold text-[var(--text-main)]">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 border border-[var(--border-dark)] hover:bg-[var(--bg-accent)] transition-colors rounded-sm"
              >
                <X className="w-5 h-5 text-[var(--text-main)]" />
              </button>
            </div>

            <div className="mb-4 border-2 border-[var(--border-dark)] p-2 bg-white shadow-md">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[60vh] mx-auto"
              />
            </div>

            <div className="font-typewriter text-xs text-[var(--text-muted)] space-y-2 border-t border-[var(--border-light)] pt-3">
              <div><strong className="text-[var(--text-main)]">Recipient:</strong> Rizwan Salmani</div>
              <div><strong className="text-[var(--text-main)]">Issuer:</strong> {selectedCert.issuer}</div>
              <div><strong className="text-[var(--text-main)]">Issued Date:</strong> {selectedCert.date}</div>
              <div><strong className="text-[var(--text-main)]">Credential ID:</strong> {selectedCert.credentialId}</div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
