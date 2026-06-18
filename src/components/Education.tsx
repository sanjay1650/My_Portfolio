import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            Academic <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Education Detail Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-800/80 shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            
            {/* cap icon badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] flex-shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>

            {/* Title Block */}
            <div className="space-y-2 flex-grow">
              <span className="text-xs font-semibold uppercase text-cyan-400 font-mono tracking-wider">
                Undergraduate Degree
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-base sm:text-lg font-medium text-slate-350">
                {edu.institution}
              </h4>
            </div>

            {/* GPA Tag */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] self-start md:self-center">
              <Award className="w-4 h-4" />
              <span className="text-sm font-bold font-mono">{edu.grade}</span>
            </div>

          </div>

          {/* Academic Coordinates and Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800/60 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Duration: {edu.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Location: {edu.location}</span>
            </div>
          </div>

          {/* Additional text highlights */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light">
              <strong>Focus & Coursework:</strong> {edu.note}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
