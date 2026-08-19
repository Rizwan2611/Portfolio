import React from 'react';
import { soundManager } from '../../utils/audio';
import { ShieldCheck, FileCheck } from 'lucide-react';

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  sealText: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-ai-ml',
    title: 'ADVANCED ARTIFICIAL INTELLIGENCE & DEEP LEARNING SPECIALIZATION',
    issuer: 'Stanford & DeepLearning.AI Press Bureau',
    date: '2025',
    credentialId: 'CERT-AI-9984',
    skills: ['PyTorch', 'Vector Embeddings', 'Transformer Architectures', 'RAG Search'],
    sealText: 'HIGHEST DISTINCTION',
  },
  {
    id: 'cert-fullstack-arch',
    title: 'PRINCIPAL FULL-STACK SYSTEM ARCHITECTURE CERTIFICATION',
    issuer: 'Global Computer Science Standards Board',
    date: '2024',
    credentialId: 'CERT-ARCH-4402',
    skills: ['React 19', 'TypeScript Core', 'Distributed Node.js', 'System Design'],
    sealText: 'AUDITED & APPROVED',
  },
  {
    id: 'cert-webgl-creative',
    title: 'HIGH-PERFORMANCE WEBGL & CREATIVE GPU CODING',
    issuer: 'International Creative Technology Guild',
    date: '2023',
    credentialId: 'CERT-GL-1209',
    skills: ['GLSL Shaders', 'Three.js', 'Instanced Mesh Rendering', 'Web Workers'],
    sealText: 'MASTER CRAFTSMAN',
  },
];

export const CertificationsArchive: React.FC = () => {
  return (
    <section id="certifications" className="w-full py-10 border-b-4 border-double border-[var(--border-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-y-2 border-double border-[var(--border-dark)] py-2 mb-8 text-center bg-[var(--bg-paper-card)]">
          <div className="font-typewriter text-xs uppercase tracking-widest text-[var(--accent-red)] font-bold">
            SECTION 09 • CERTIFICATIONS & VERIFIED ARCHIVES
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-[var(--text-main)] tracking-tight">
            VERIFIED CERTIFICATIONS & ACADEMIC ACCREDITATIONS
          </h2>
          <div className="font-serif italic text-sm text-[var(--text-muted)] mt-1">
            "Formal accreditations in Artificial Intelligence, System Architecture, and Creative Computing."
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="border-2 border-[var(--border-dark)] bg-[var(--bg-paper-card)] p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between font-typewriter text-[10px] font-bold text-[var(--text-muted)] border-b border-[var(--border-light)] pb-2 mb-3">
                  <span className="flex items-center gap-1 text-[var(--accent-red)]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.credentialId}</span>
                  </span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="font-headline text-xl font-bold text-[var(--text-main)] mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="font-serif italic text-xs text-[var(--text-muted)] mb-4">
                  Issued by {cert.issuer}
                </p>

                <div className="space-y-1.5 font-typewriter text-xs mb-4">
                  <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase">VERIFIED COMPETENCIES:</div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((s) => (
                      <span key={s} className="bg-[var(--bg-primary)] border border-[var(--border-dark)] px-2 py-0.5 text-[10px] font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stamp Seal */}
              <div className="pt-3 border-t border-[var(--border-light)] flex items-center justify-between font-typewriter text-xs">
                <span className="stamp-seal text-[8px] py-0.5 px-2">{cert.sealText}</span>
                <button
                  onClick={() => soundManager.playStampEffect()}
                  className="flex items-center gap-1 font-bold text-[var(--text-main)] underline hover:text-[var(--accent-red)] text-[10px]"
                >
                  <FileCheck className="w-3 h-3" />
                  <span>Verify Record</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
