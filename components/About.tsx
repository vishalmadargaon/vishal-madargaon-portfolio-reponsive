import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Trophy } from 'lucide-react'; // Removed Rocket as it was unused

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="relative group mx-auto w-full max-w-md lg:max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black">
              <img 
                src="/components/images/glass.jpeg" 
                alt="Working" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-indigo-600 inline-block"></span>
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10">
              I'm a Computer Science student at VTU with a deep-seated passion for building software that solves real-world problems. 
              From optimizing Android performance at Mind Matrix to empowering farmers through KisanLink, 
              I thrive at the intersection of mobile development and Generative AI. 
              My journey is fueled by a relentless drive to integrate Large Language Models into daily ecosystems, 
              making technology more intuitive and accessible for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="p-5 md:p-6 glass-card rounded-2xl hover:border-indigo-500/50 transition-colors">
                <Dumbbell className="text-indigo-400 mb-3 md:mb-4" size={24} />
                <h3 className="font-bold mb-2 text-base md:text-lg">Fitness Enthusiast</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">I find my focus and discipline at the gym, pushing limits beyond code.</p>
              </div>
              <div className="p-5 md:p-6 glass-card rounded-2xl hover:border-indigo-500/50 transition-colors">
                <Trophy className="text-purple-400 mb-3 md:mb-4" size={24} />
                <h3 className="font-bold mb-2 text-base md:text-lg">Cricket Lover</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">A strategist on the pitch, I love the high stakes and teamwork of a great match.</p>
              </div>
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 md:gap-8">
               <div className="text-center flex-1 sm:flex-none">
                 <p className="text-2xl md:text-3xl font-extrabold text-white">4+</p>
                 <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Internships</p>
               </div>
               <div className="hidden sm:block w-[1px] h-8 md:h-10 bg-white/10"></div>
               <div className="text-center flex-1 sm:flex-none">
                 <p className="text-2xl md:text-3xl font-extrabold text-white">10+</p>
                 <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">AI Projects</p>
               </div>
               <div className="hidden sm:block w-[1px] h-8 md:h-10 bg-white/10"></div>
               <div className="text-center flex-1 sm:flex-none">
                 <p className="text-2xl md:text-3xl font-extrabold text-white">2026</p>
                 <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">Graduating</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;