'use client';

import React from 'react';
import {
  ComposedChart,
  Scatter,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const IL3_DATA = [
  { pgml: 0.1, intensity: 75 },
  { pgml: 1, intensity: 90 },
  { pgml: 10, intensity: 120 },
  { pgml: 100, intensity: 300 },
  { pgml: 1000, intensity: 1200 },
  { pgml: 10000, intensity: 70000 },
  { pgml: 100000, intensity: 250000 },
].sort((a, b) => a.pgml - b.pgml);

export default function HumanIL3Graph() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white rounded-[2.5rem] shadow-inner border border-slate-100/50 overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-xl font-bold text-[#002776] tracking-tight">Human IL-3 Standard Curve (MSD)</h4>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mt-1">SENSITIVITY VALIDATION</p>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">R² Value</span>
          <div className="text-sm font-mono font-bold text-[#002776]">0.9998</div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[350px] pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            {/* X-Axis: Protein Concentration (Log Scale) */}
            <XAxis 
              type="number" 
              dataKey="pgml" 
              name="Concentration" 
              unit=" pg/ml" 
              scale="log" 
              domain={[0.01, 100000]} 
              stroke="#94a3b8"
              fontSize={10}
              fontWeight={700}
              tickFormatter={(val) => {
                if (val >= 1000) return `${val / 1000}K`;
                return val.toString();
              }}
              label={{ value: '[IL-3] pg/ml', position: 'bottom', offset: 20, fill: '#64748b', fontSize: 10, fontWeight: 900, textAnchor: 'middle', letterSpacing: '0.1em' }}
            />

            {/* Y-Axis: Pixel Intensity (Log Scale) */}
            <YAxis 
              type="number" 
              dataKey="intensity" 
              name="Pixel Intensity" 
              scale="log" 
              domain={[1, 1000000]} 
              stroke="#94a3b8"
              fontSize={10}
              fontWeight={700}
              tickFormatter={(val) => {
                if (val >= 1000000) return `${val / 1000000}M`;
                if (val >= 1000) return `${val / 1000}K`;
                return val.toString();
              }}
              label={{ value: 'Pixel Intensity', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10, fontWeight: 900, textAnchor: 'middle', letterSpacing: '0.1em' }}
            />
            
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }} 
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }}
              formatter={(value: any, name: string) => {
                if (name === 'Concentration') return [`${value} pg/ml`, 'IL-3 Concentration'];
                if (name === 'Pixel Intensity') return [value, 'Pixel Intensity'];
                return [value, name];
              }}
            />

            {/* Connecting Line */}
            <Line 
              type="monotone" 
              data={IL3_DATA} 
              dataKey="intensity" 
              stroke="#00F0F3" 
              strokeWidth={2} 
              dot={false}
              isAnimationActive={false}
            />

            {/* The Plot Points */}
            <Scatter 
              name="Standard Data" 
              data={IL3_DATA} 
              fill="#002776"
              shape={(props: any) => {
                const { cx, cy } = props;
                return (
                  <circle cx={cx} cy={cy} r={5} fill="#002776" stroke="#fff" strokeWidth={2} className="drop-shadow-md" />
                );
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
        <div className="flex gap-4">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00F0F3]"></div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Digital Fit</span>
           </div>
        </div>
        <p className="text-[10px] italic text-slate-400">Validated: MSD QuickPlex SQ 120MM</p>
      </div>
    </div>
  );
}

