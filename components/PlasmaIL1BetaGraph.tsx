'use client';

import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, ReferenceLine, Cell
} from 'recharts';

/**
 * MASTER MAPPING FUNCTION
 * Replicates the "Broken Axis" look from the screenshot.
 * Maps values 0-1 to 0-60% of chart height.
 * Maps values 1-3 to 60-100% of chart height.
 */
const mapY = (val: number) => {
  if (val <= 1) return val * 0.75; // Zoom in on the 0-1 range
  return 0.75 + (val - 1) * 0.125; // Compress the 1-3 range
};

const PLASMA_DATA = [
  // HEPARIN (Target Mean: 0.20)
  { realVal: 0.05, x: 0.94 }, { realVal: 0.13, x: 0.97 }, 
  { realVal: 0.19, x: 1.00 }, { realVal: 0.21, x: 1.03 }, 
  { realVal: 0.55, x: 1.00 }, 

  // CITRATE (Target Mean: 0.09)
  { realVal: 0.07, x: 1.96 }, { realVal: 0.09, x: 2.00 }, { realVal: 0.11, x: 2.04 },
  { realVal: 1.85, x: 2.00 }, { realVal: 2.45, x: 2.00 }, 

  // EDTA (Target Mean: 0.07)
  { realVal: 0.04, x: 2.95 }, { realVal: 0.06, x: 2.98 }, { realVal: 0.08, x: 3.02 }, 
  { realVal: 0.10, x: 3.05 }, { realVal: 0.13, x: 3.00 },
].map(d => ({ ...d, value: mapY(d.realVal) }));

const MEANS = [
  { x: 1, realVal: 0.20 },
  { x: 2, realVal: 0.09 },
  { x: 3, realVal: 0.07 },
].map(m => ({ ...m, value: mapY(m.realVal) }));

export default function PlasmaIL1BetaGraph() {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white rounded-[2.5rem] shadow-inner border border-slate-100/50 overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-xl font-bold text-[#002776] tracking-tight">Plasma [IL-1 beta] Analysis</h4>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mt-1">Anticoagulant Performance</p>
        </div>
        <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Platform</span>
          <div className="text-[10px] font-bold text-[#002776]">Simoa® Ultrasensitive</div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[500px] pb-4">
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart margin={{ top: 40, right: 30, bottom: 50, left: 60 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
              type="number" 
              dataKey="x" 
              ticks={[1, 2, 3]}
              tickFormatter={(v) => v === 1 ? 'Heparin' : v === 2 ? 'Citrate' : 'EDTA'}
              domain={[0.5, 3.5]}
              axisLine={{ stroke: '#cbd5e1', strokeWidth: 2 }}
              tickLine={false}
              fontSize={10}
              fontWeight={900}
              stroke="#94a3b8"
              label={{ value: 'Anticoagulant Type', position: 'bottom', offset: 20, fill: '#64748b', fontSize: 10, fontWeight: 900, letterSpacing: '0.1em' }}
            />

            <YAxis 
              type="number" 
              dataKey="value" 
              domain={[0, 1.1]} // Boundary of our mapped space
              ticks={[0, mapY(0.25), mapY(0.5), mapY(0.75), mapY(2), mapY(3)]}
              tickFormatter={(v) => {
                 if (v === 0) return '0.00';
                 if (v === mapY(0.25)) return '0.25';
                 if (v === mapY(0.5)) return '0.50';
                 if (v === mapY(0.75)) return '0.75';
                 if (v === mapY(2)) return '2';
                 if (v === mapY(3)) return '3';
                 return '';
              }}
              axisLine={{ stroke: '#cbd5e1', strokeWidth: 2 }}
              tickLine={false}
              fontSize={10}
              fontWeight={900}
              stroke="#94a3b8"
              label={{ value: 'Plasma [IL-1 beta] pg/ml', angle: -90, position: 'insideLeft', offset: -40, fill: '#64748b', fontSize: 10, fontWeight: 900 }}
            />
            
            {/* FIXED MEAN LINES: Rigid segments to prevent spanning the whole graph */}
            {MEANS.map((mean, idx) => (
              <ReferenceLine 
                key={idx}
                y={mean.value} 
                stroke="#002776" 
                strokeWidth={3}
                segment={[{ x: mean.x - 0.25, y: mean.value }, { x: mean.x + 0.25, y: mean.value }]}
              />
            ))}

            <Scatter data={PLASMA_DATA}>
              {PLASMA_DATA.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="#002776" 
                  stroke="#fff" 
                  strokeWidth={2} 
                  r={6} 
                  className="drop-shadow-sm hover:fill-[#00F0F3] transition-colors duration-300"
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-4 h-1 bg-[#002776]"></div>
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mean Value</span>
        </div>
        <p className="text-[10px] italic text-slate-400 font-medium">Comparison of detection levels across matrices</p>
      </div>
    </div>
  );
}
