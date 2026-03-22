import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Projects({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
            >
              Project Showcase
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              A selection of our successfully delivered and ongoing MEP projects across commercial and residential sectors.
            </motion.p>
          </div>
          {limit && (
            <Link 
              to="/projects" 
              className="hidden md:inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                </div>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium text-slate-900 w-20">Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium text-slate-900 w-20">Value:</span>
                    <span className="text-brand-600 font-semibold">{project.value}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 line-clamp-3" title={project.scope}>
                    <span className="font-medium text-slate-900 block mb-1">Scope of Work:</span>
                    {project.scope}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
