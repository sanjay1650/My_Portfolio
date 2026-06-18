import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Laptop, Server, Database, Wrench, Link2, Settings } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map categories to icons
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'languages':
      return <Code2 className="w-4 h-4" />;
    case 'frontend':
      return <Laptop className="w-4 h-4" />;
    case 'backend':
      return <Server className="w-4 h-4" />;
    case 'database':
      return <Database className="w-4 h-4" />;
    case 'tools':
      return <Wrench className="w-4 h-4" />;
    case 'integration':
      return <Link2 className="w-4 h-4" />;
    case 'methodologies':
      return <Settings className="w-4 h-4" />;
    default:
      return <Code2 className="w-4 h-4" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? portfolioData.skillCategories 
    : portfolioData.skillCategories.filter(c => c.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 }
    }
  } as const;

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                    : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-white hover:bg-slate-800/60 hover:border-slate-700/80 shadow-sm'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Category Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((catGroup) => (
              <motion.div
                layout
                key={catGroup.category}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/60">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-slate-200 tracking-wide">
                    {catGroup.category}
                  </h3>
                </div>

                {/* Skill Chips List */}
                <motion.div 
                  className="flex flex-wrap gap-2.5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {catGroup.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="px-3 py-2 rounded-xl bg-slate-950/50 border border-slate-800/60 text-slate-300 text-xs sm:text-sm font-medium hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 flex items-center justify-between shadow-sm"
                      whileHover={{ y: -2 }}
                    >
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
