import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map project index to an aesthetic header decoration
const getProjectAccent = (index: number) => {
  switch (index) {
    case 0:
      return 'from-blue-600 to-cyan-500';
    case 1:
      return 'from-cyan-500 to-purple-500';
    case 2:
      return 'from-purple-600 to-pink-500';
    default:
      return 'from-blue-600 to-cyan-500';
  }
};

const getProjectIcon = (index: number) => {
  switch (index) {
    case 0:
      return <LaptopIcon className="w-5 h-5 text-cyan-400" />;
    case 1:
      return <ServerIcon className="w-5 h-5 text-purple-400" />;
    case 2:
      return <MicroserviceIcon className="w-5 h-5 text-pink-400" />;
    default:
      return <Code2 className="w-5 h-5 text-blue-400" />;
  }
};

const LaptopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
  </svg>
);

const ServerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 3h13.5m-13.5-6h13.5m-13.5-3h13.5m-13.5-3h13.5M3 5.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Z" />
  </svg>
);

const MicroserviceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

export const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 }
    }
  } as const;

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Soft background blob */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glass-card flex flex-col justify-between rounded-2xl overflow-hidden group hover:scale-[1.02] border-slate-800/80"
            >
              <div>
                {/* Visual Top Bar Accent */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${getProjectAccent(idx)}`} />
                
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800 shadow-inner flex items-center justify-center">
                      {getProjectIcon(idx)}
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-bold">Production Ready</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-950/80 border border-slate-900 text-slate-400 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2 border-t border-slate-800/60 pt-5">
                    <span className="text-xs font-semibold text-slate-400 font-mono tracking-wider">KEY IMPLEMENTATIONS:</span>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal font-light">
                          <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex gap-4 border-t border-slate-850/60 bg-slate-950/40">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
                
                {project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
