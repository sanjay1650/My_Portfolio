import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom logos based on provider
const getProviderBadgeColor = (provider: string) => {
  if (provider.includes('JPMorgan')) {
    return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  }
  return 'bg-blue-500/10 text-cyan-400 border-blue-500/20';
};

export const Certifications: React.FC = () => {
  const certifications = portfolioData.certifications;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 }
    }
  } as const;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Background radial highlight */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Virtual Experiences & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:scale-[1.02] border-slate-800/80"
            >
              <div className="space-y-6">
                
                {/* Badge and Metadata */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800 shadow-inner flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${getProviderBadgeColor(cert.provider)}`}>
                    {cert.provider}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-semibold text-white leading-tight">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Issued in {cert.year}</span>
                </div>

                {/* Skill details bullet list */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-800/60">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Footer Verification Placeholder */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>Credential Verified</span>
                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    View Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-500 flex items-center gap-1 cursor-default">
                    Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
