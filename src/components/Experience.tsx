import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Accent Blob */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 py-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-xl space-y-4">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase text-cyan-400 font-mono tracking-wider">
                      {exp.role}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.company}
                    </h3>
                  </div>

                  {/* Date & Location Coordinates */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Job description bullet points */}
                <ul className="space-y-3 pt-2 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
