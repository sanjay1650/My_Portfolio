import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Signature */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-xl font-display font-semibold tracking-wide text-gradient">
              Sanjay Cheerlancha
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Java Full-Stack Developer
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-slate-400 font-medium font-light">
            &copy; 2026 Sanjay Cheerlancha.</p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-6">
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={portfolioData.contact.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 shadow-sm group cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
