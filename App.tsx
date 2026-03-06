import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // Assuming you have this
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Basic smooth scroll implementation for hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjusted offset for mobile nav
            behavior: 'smooth'
          });
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };
    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="relative selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#ffffff22 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        {/* Make sure <Experience /> is completely responsive inside its own file too! */}
        <Experience /> 
        <Projects />
      </main>

      <Footer />
      
      {/* Floating Action Button (Resume) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
        <a 
          href="#" 
          className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-indigo-600 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="absolute right-full mr-4 px-3 py-1 bg-white text-black text-xs font-bold rounded opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            Download Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;