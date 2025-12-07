import React from 'react';
import { PROFILE, ICONS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full font-mono text-sm mb-4">
            Available for Opportunities
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
            {PROFILE.name.split(' ')[0]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
              {PROFILE.name.split(' ')[1]}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-mono text-textDim border-b border-gray-700 pb-6 w-max">
            {PROFILE.role}
          </h2>

          <p className="text-lg text-textLight leading-relaxed max-w-xl border-l-2 border-gray-700 pl-6">
            {PROFILE.summary}
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-textDim hover:text-accent transition-colors group">
              <div className="p-2 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                <ICONS.Mail size={20} />
              </div>
              <span>{PROFILE.email}</span>
            </a>
            <div className="flex items-center gap-3 text-textDim hover:text-accent transition-colors group">
                <div className="p-2 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                 <ICONS.Phone size={20} />
                </div>
              <span>{PROFILE.phone}</span>
            </div>
             <div className="flex items-center gap-3 text-textDim hover:text-accent transition-colors group">
                <div className="p-2 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                 <ICONS.MapPin size={20} />
                </div>
              <span>{PROFILE.location}</span>
            </div>
            <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textDim hover:text-accent transition-colors group">
                <div className="p-2 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                 <ICONS.Linkedin size={20} />
                </div>
              <span>{PROFILE.linkedin}</span>
            </a>
          </div>
        </div>

        {/* Visual Decoration for Right Side */}
        <div className="hidden md:flex justify-center items-center relative">
          <div className="relative w-80 h-80">
             <div className="absolute inset-0 border-2 border-dashed border-gray-700 rounded-full animate-spin-slow"></div>
             <div className="absolute inset-4 border border-gray-700 rounded-full"></div>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-secondary/50 backdrop-blur-sm rounded-full border border-gray-700">
                 <span className="text-6xl font-bold text-white mb-2">9.22</span>
                 <span className="text-accent font-mono uppercase text-sm tracking-widest">CGPA</span>
                 <span className="text-xs text-textDim mt-2">Distinction Holder</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};