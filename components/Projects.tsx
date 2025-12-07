import React from 'react';
import { PROJECTS, ICONS } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
            title="Featured Projects" 
            subtitle="Development Portfolio"
            icon={<ICONS.Code size={32} />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-all duration-300 flex flex-col group h-full">
              <div className="p-1 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:from-accent group-hover:to-blue-600 transition-all duration-500 h-1"></div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-textDim mt-1">{project.type} • {project.period}</p>
                  </div>
                  {project.role && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded border border-accent/20">
                      {project.role}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                   {project.description.map((desc, dIdx) => (
                     <li key={dIdx} className="text-textLight text-sm leading-relaxed flex gap-2">
                       <span className="text-gray-600 mt-1">•</span>
                       {desc}
                     </li>
                   ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-800">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs font-mono text-blue-300 bg-blue-900/20 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};