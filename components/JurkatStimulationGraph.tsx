'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const STIMULATION_DATA = [
  { condition: 'Control', value: 0, error: 0 },
  { condition: 'PHA', value: 240, error: 15 },
  { condition: 'PMA', value: 5, error: 5 },
  { condition: 'PHA/PMA', value: 640, error: 40 },
];

export default function JurkatStimulationGraph() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white rounded-[2.5rem] shadow-inner border border-slate-100/50 overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-xl font-bold text-[#002776] tracking-tight">IL-3 Stimulation using Jurkat Cells</h4>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mt-1">Jurkat Cell Analysis</p>
        </div>
        <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Technique</span>
          <div className="text-[10px] font-bold text-[#002776]">Cell Culture Bioassay</div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[350px] pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={STIMULATION_DATA} margin={{ top: 20, right: 20, bottom: 50, left: 20 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00F0F3" />
                <stop offset="100%" stopColor="#002776" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
              dataKey="condition" 
              stroke="#94a3b8"
              fontSize={10}
              fontWeight={700}
              axisLine={false}
              tickLine={false}
              label={{ value: 'Jurkat Cell Stimulation', position: 'bottom', offset: 20, fill: '#64748b', fontSize: 10, fontWeight: 900, textAnchor: 'middle', letterSpacing: '0.1em' }}
            />

            <YAxis 
              stroke="#94a3b8"
              fontSize={10}
              fontWeight={700}
              domain={[0, 700]}
              axisLine={false}
              tickLine={false}
              label={{ value: 'IL-3 (pg/ml)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10, fontWeight: 900, textAnchor: 'middle', letterSpacing: '0.1em' }}
            />
            
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }}
            />

            <Bar 
              dataKey="value" 
              radius={[8, 8, 0, 0]}
              barSize={45}
            >
              {STIMULATION_DATA.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.condition === 'Control' ? '#e2e8f0' : 'url(#barGradient)'}
                  className="transition-all duration-500 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
        <div className="flex gap-4">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00F0F3]"></div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Stimulated</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Basal</span>
           </div>
        </div>
        <p className="text-[10px] italic text-slate-400">Validated: MSD-ECL Technology</p>
      </div>
    </div>
  );
}

