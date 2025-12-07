import React from 'react';
import { EDUCATION, CERTIFICATIONS, ICONS } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 scroll-mt-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <SectionHeader 
              title="Education" 
              icon={<ICONS.Database size={32} />}
          />
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-secondary/40 p-6 rounded-xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ICONS.Database size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-accent font-medium mb-1">{edu.degree}</p>
                <div className="flex justify-between items-center text-sm font-mono text-textDim mb-4">
                  <span>{edu.period}</span>
                  <span className="text-white font-bold">{edu.score}</span>
                </div>
                {edu.details && (
                  <p className="text-sm text-textLight italic border-l-2 border-accent pl-3">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
           <SectionHeader 
              title="Certifications" 
              icon={<ICONS.Code size={32} />}
          />
           <div className="space-y-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-gray-700 group-hover:border-accent group-hover:text-accent transition-colors">
                        <span className="font-bold text-xs">{idx + 1}</span>
                    </div>
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-accent transition-colors">{cert.name}</h4>
                  <p className="text-sm text-textDim mb-1">{cert.issuer}</p>
                  <p className="text-xs text-textLight leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};