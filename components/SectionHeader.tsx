import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const SectionHeader: React.FC<Props> = ({ title, subtitle, icon }) => {
  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-accent pl-6 py-2">
      <div className="flex items-center gap-3">
        {icon && <span className="text-accent">{icon}</span>}
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
          {title}
        </h2>
      </div>
      {subtitle && (
        <span className="hidden md:block h-px w-20 bg-gray-700"></span>
      )}
      {subtitle && (
        <p className="text-textDim text-sm uppercase tracking-widest font-mono">
          {subtitle}
        </p>
      )}
    </div>
  );
};