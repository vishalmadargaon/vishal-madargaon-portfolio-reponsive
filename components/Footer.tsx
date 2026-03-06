import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 md:py-20 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">V</div>
              <span className="text-xl md:text-2xl font-bold tracking-tighter">Vishal Madargaon</span>
            </div>
            <p className="text-sm md:text-base text-gray-400 max-w-sm mb-6 md:mb-8 leading-relaxed">
              Available for internships and full-time roles starting June 2026. 
              Let's build something intelligent together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="mailto:vishalmadargaon120@gmail.com" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                <Mail size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Links</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="resume.pdf" className="hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400">
              <li>Bengaluru, Karnataka</li>
              <li>+91 9035550285</li>
              <li>vishalmadargaon120@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} Vishal Madargaon. Built with React, Tailwind, and Gemini.
          </p>
          <div className="flex gap-4 md:gap-8 text-xs md:text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;