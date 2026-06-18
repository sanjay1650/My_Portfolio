import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { location, email, phone } = portfolioData.contact;

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Submission Status State
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      // We will post to Web3Forms API.
      // Users can get their free Access Key at: https://web3forms.com/
      // Using a placeholder/default developer key. The user can swap this easily in their production deployment.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // User should replace this with their Web3Forms key
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-b border-slate-900/30 bg-slate-950/10">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details (Left Column) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-white">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                Feel free to reach out for internship opportunities, project collaborations, or developer job openings. I will try my best to get back to you as soon as possible.
              </p>
            </div>

            {/* Coordinates Grid */}
            <div className="space-y-4">
              
              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 shadow-sm">
                <div className="p-3 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 font-mono">LOCATION</h4>
                  <p className="text-sm font-semibold text-slate-200">{location}</p>
                </div>
              </div>

              {/* Email */}
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group shadow-sm"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:text-cyan-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 font-mono">EMAIL</h4>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{email}</p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group shadow-sm"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:text-cyan-300 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 font-mono">PHONE</h4>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{phone}</p>
                </div>
              </a>

              {/* LinkedIn */}
              
                

            </div>
            <div className="h-4 lg:block hidden" />
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-400 font-mono">YOUR NAME *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-250 text-sm placeholder-slate-550 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner animate-all duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-400 font-mono">YOUR EMAIL *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-250 text-sm placeholder-slate-550 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner animate-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-400 font-mono">SUBJECT</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiry about software developer role"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-250 text-sm placeholder-slate-550 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner animate-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 font-mono">YOUR MESSAGE *</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Sanjay, I would love to connect about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-250 text-sm placeholder-slate-550 focus:outline-none focus:border-cyan-500 transition-colors resize-none shadow-inner animate-all duration-300"
                  />
                </div>

                {/* Submit button / Banners */}
                <div className="space-y-4 pt-2">
                  
                  {/* Status Banner Messages */}
                  <AnimatePresence mode="wait">
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Thank you! Your message was sent successfully.</span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(244,63,94,0.08)]"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
