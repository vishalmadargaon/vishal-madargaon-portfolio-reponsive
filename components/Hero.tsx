
import React from 'react';
import { motion } from 'framer-motion';
// Add Smartphone and Zap to the imports from lucide-react
import { ChevronRight, Github, Linkedin, Smartphone, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open to roles June 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Engineering the <br />
            <span className="gradient-text">Future of Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            I bridge the gap between Mobile Dev, Web Dev, and Generative AI. 
            Final-year CS Student @ VTU crafting seamless experiences powered by Gemini.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View My Work <ChevronRight size={18} />
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
            {/* Main Floating Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[2rem] border border-white/10 backdrop-blur-3xl overflow-hidden floating">
              <img 
                src="/components/images/prince.jpeg" 
                alt="Vishal Madargaon" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-12">
                 <div className="text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-2">Android & AI</p>
                    <p className="text-2xl font-bold">Vishal Madargaon</p>
                 </div>
              </div>
            </div>

            {/* Smaller Floating Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 glass-card rounded-2xl p-4 floating-reverse delay-700">
               <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-2">
                 <Smartphone className="text-indigo-400" size={20} />
               </div>
               <p className="text-xs font-bold">Full Stack Developer</p>
               <p className="text-[10px] text-gray-500">GENAI Expert</p>
            </div>

            <div className="absolute -bottom-12 -left-12 w-40 h-40 glass-card rounded-2xl p-4 floating delay-1000">
               <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-2">
                 <Zap className="text-purple-400" size={20} />
               </div>
               <p className="text-xs font-bold">Gen AI</p>
               <p className="text-[10px] text-gray-500">Gemini Pro/Flash</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
