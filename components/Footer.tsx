import React from 'react';
import { LANGUAGES, INTERESTS, PROFILE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Languages */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Languages</h4>
          <ul className="space-y-3">
            {LANGUAGES.map((lang, idx) => (
              <li key={idx} className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-textLight">{lang.lang}</span>
                <span className="text-xs font-mono text-textDim">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((interest, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary rounded-full text-sm text-textDim border border-gray-800">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="flex flex-col justify-between">
            <div>
                <h4 className="text-white font-bold text-2xl mb-2">{PROFILE.name}</h4>
                <p className="text-textDim text-sm">Thank you for visiting my digital portfolio.</p>
            </div>
            <div className="mt-8 text-xs text-gray-600 font-mono">
                &copy; {new Date().getFullYear()} All Rights Reserved. <br />
                Designed with React & Tailwind CSS.
            </div>
        </div>

      </div>
    </footer>
  );
};