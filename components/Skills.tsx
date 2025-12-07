import React from 'react';
import { SKILLS, ICONS } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
            title="Technical Arsenal" 
            subtitle="Core Competencies" 
            icon={<ICONS.Terminal size={32} />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div 
                key={idx} 
                className="bg-secondary p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full group-hover:w-4 transition-all duration-300"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-primary text-textDim text-sm rounded-md border border-gray-700 font-mono hover:text-accent hover:border-accent/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};