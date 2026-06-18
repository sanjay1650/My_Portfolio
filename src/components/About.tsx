import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, ShieldAlert, Binary } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map highlights to Lucide icons
const highlightIcons = [
  <Cpu className="w-6 h-6 text-blue-400" />,
  <Globe className="w-6 h-6 text-cyan-400" />,
  <Database className="w-6 h-6 text-emerald-400" />,
  <ShieldAlert className="w-6 h-6 text-purple-400" />,
  <Binary className="w-6 h-6 text-pink-400" />
];

export const About: React.FC = () => {
  const { bio, highlights } = portfolioData.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  } as const;

  return (
    <section id="about" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div 
            className="lg:col-span-8 lg:col-start-2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg text-slate-350 leading-relaxed font-sans font-light">
              {bio}
            </p>
          </motion.div>
        </div>

        {/* Highlight Focus Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.title}
              className="glass-card p-6 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 hover:scale-[1.03] border-slate-800/80"
              variants={itemVariants}
            >
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 shadow-inner flex items-center justify-center">
                {highlightIcons[idx] || <Cpu className="w-6 h-6 text-cyan-400" />}
              </div>
              <h3 className="text-base font-display font-semibold text-slate-200 tracking-wide">
                {highlight.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
