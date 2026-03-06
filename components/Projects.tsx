import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Featured Projects</h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl">
              Showcasing the intersection of Mobile ecosystems and Generative AI to solve complex industry challenges.
            </p>
          </div>
          <a href="#" className="text-sm md:text-base text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-2 underline underline-offset-8">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;