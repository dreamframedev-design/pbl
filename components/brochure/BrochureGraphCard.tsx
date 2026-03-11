'use client';

import React from 'react';

interface BrochureGraphCardProps {
  title: string;
  subtitle: string;
  badge?: string;
  validatedText?: string;
  children: React.ReactNode;
  height?: string;
}

export default function BrochureGraphCard({
  title,
  subtitle,
  badge,
  validatedText,
  children,
  height = 'h-64'
}: BrochureGraphCardProps) {
  return (
    <div className={`w-full flex flex-col p-4 bg-white rounded-[2rem] shadow-sm border border-slate-100/60 overflow-hidden ${height}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-sm font-bold text-[#002776] tracking-tight leading-tight">{title}</h4>
          <p className="text-[8px] font-black uppercase tracking-[0.15em] text-cyan-600 mt-1">{subtitle}</p>
        </div>
        {badge && (
          <div className="bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
            <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest block text-center">Technique</span>
            <div className="text-[8px] font-bold text-[#002776] whitespace-nowrap">{badge}</div>
          </div>
        )}
      </div>

      <div className="flex-1 w-full min-h-0 relative">
        {children}
      </div>

      {(validatedText) && (
        <div className="mt-3 pt-3 border-t border-slate-50 flex justify-end items-center">
          <p className="text-[8px] italic text-slate-400">{validatedText}</p>
        </div>
      )}
    </div>
  );
}
