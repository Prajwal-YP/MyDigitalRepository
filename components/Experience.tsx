import React from 'react';
import { EXPERIENCE, ICONS } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
            title="Professional Experience" 
            subtitle="Career Trajectory"
            icon={<ICONS.Server size={32} />}
        />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-gray-800"></div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 group">
                {/* Left Side: Meta Info */}
                <div className="md:w-[30%] md:text-right md:pr-8 relative">
                   {/* Dot on timeline */}
                   <div className="hidden md:block absolute right-[-36px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10"></div>
                   
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{exp.company}</h3>
                   <p className="text-lg text-textLight font-medium mb-2">{exp.role}</p>
                   <div className="inline-flex items-center gap-2 text-textDim font-mono text-sm bg-secondary px-3 py-1 rounded">
                     <span>{exp.period}</span>
                     <span>•</span>
                     <span>{exp.location}</span>
                   </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-[70%] bg-secondary/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
                  <ul className="space-y-4">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-textLight">
                        <span className="text-accent mt-1.5">▹</span>
                        <span className="leading-relaxed">
                          {point.split(/(:)/).map((part, partIdx) => 
                            // Bold the text before the first colon to highlight key achievements like "Collaboration:"
                            partIdx === 0 && point.includes(':') ? <strong key={partIdx} className="text-white font-semibold">{part}</strong> : part
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};