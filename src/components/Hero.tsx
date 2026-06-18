import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import sanjayImg from '../assets/sanjay.png';

export const Hero: React.FC = () => {
  const { name, title, subtitle, badges } = portfolioData.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  } as const;

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-radial-gradient">
      {/* Decorative background grid and blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glowing Accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              variants={itemVariants}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Available for Full-Time Roles
            </motion.div>

            {/* Main Greeting */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <h4 className="text-sm sm:text-base md:text-lg font-medium text-cyan-400 font-mono tracking-wider">
                Hi, my name is
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-tight">
                {name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-slate-300">
                {title}
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p 
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-light"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* Tech Badges */}
            <motion.div 
              className="flex flex-wrap gap-2 pt-2"
              variants={itemVariants}
            >
              {badges.map((badge) => (
                <span 
                  key={badge} 
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-900/60 border border-slate-800/80 text-slate-300 shadow-sm hover:border-cyan-500/20 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
              variants={itemVariants}
            >
              <button 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Headshot Photo Display (Right) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
          >
            {/* Background glowing rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-[60px] animate-pulse-slow pointer-events-none" />

            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              
              {/* Decorative Frame border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 rounded-3xl blur opacity-15 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Main Photo Card */}
              <div className="relative glass-card rounded-3xl overflow-hidden p-3 border-slate-800/80 shadow-2xl flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-900 shadow-inner">
                  <img 
                    src={sanjayImg} 
                    alt={name} 
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Tech Tags */}
              
              {/* Tag 1: Role */}
              <motion.div 
                className="absolute -left-6 bottom-10 glass-card px-4 py-2.5 rounded-xl border border-slate-800/80 flex items-center gap-2 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, type: 'spring' }}
                whileHover={{ y: -2 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                <span className="text-[11px] font-semibold font-mono text-slate-200">Java Full-Stack</span>
              </motion.div>

              {/* Tag 2: Backend Icon */}
              <motion.div 
                className="absolute -right-4 top-8 glass-card p-3 rounded-2xl border border-slate-800/80 shadow-lg flex items-center justify-center text-blue-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: 'spring' }}
                whileHover={{ y: -2 }}
              >
                <Server className="w-5 h-5 text-blue-400" />
              </motion.div>

              {/* Tag 3: Code Icon */}
              <motion.div 
                className="absolute -left-4 top-1/3 glass-card p-2.5 rounded-xl border border-slate-800/80 shadow-lg flex items-center justify-center text-cyan-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, type: 'spring' }}
                whileHover={{ y: -2 }}
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
