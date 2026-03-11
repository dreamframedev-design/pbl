'use client';

import React from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell, Legend
} from 'recharts';
import BrochureGraphCard from './BrochureGraphCard';

const MS_DATA = [
    // IFN Beta 1b Treated (High) - Navy
    { x: 1, y: 120, type: '1b' }, { x: 1, y: 300, type: '1b' }, { x: 1, y: 80, type: '1b' }, { x: 1, y: 450, type: '1b' },
    // IFN Beta 1a Treated (High) - Cyan
    { x: 2, y: 200, type: '1a' }, { x: 2, y: 600, type: '1a' }, { x: 2, y: 150, type: '1a' }, { x: 2, y: 800, type: '1a' },
    // MS No IFN (Low) - Slate
    { x: 3, y: 5, type: 'no' }, { x: 3, y: 2, type: 'no' }, { x: 3, y: 8, type: 'no' }, { x: 3, y: 1, type: 'no' },
    // NHS (Healthy - Zero/Low) - Light Slate
    { x: 4, y: 0.5, type: 'nhs' }, { x: 4, y: 0.2, type: 'nhs' }, { x: 4, y: 0.8, type: 'nhs' }, { x: 4, y: 0.1, type: 'nhs' },
];

export default function ElisaIfnBetaGraph() {
    return (
        <BrochureGraphCard
            title="Levels of IFN-Beta in Human Sera"
            subtitle="MS Patient Sera Analysis"
            badge="Specific Detection"
            validatedText="Accurate quantification in complex matrices"
            height="h-64"
        >
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 10, bottom: 20, left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        type="category" dataKey="x" name="Group" allowDuplicatedCategory={false}
                        ticks={[1, 2, 3, 4]}
                        tickFormatter={(v) => {
                            if (v === 1) return 'MS (1b)';
                            if (v === 2) return 'MS (1a)';
                            if (v === 3) return 'MS (No Tx)';
                            if (v === 4) return 'Healthy';
                            return '';
                        }}
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        tickMargin={10}
                    />
                    <YAxis
                        type="number" dataKey="y" name="Concentration"
                        scale="log" domain={[0.1, 1000]}
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        label={{ value: '[IFN-Beta] pg/ml', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 8, fontWeight: 900 }}
                        tickFormatter={(val) => val === 0.1 ? '0' : val}
                    />
                    <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <ReferenceLine y={1} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'LLOQ', position: 'right', fill: '#ef4444', fontSize: 8 }} />

                    <Scatter name="Patients" data={MS_DATA}>
                        {MS_DATA.map((entry, index) => {
                            let color = '#cbd5e1'; // NHS
                            if (entry.type === '1b') color = '#002776'; // Navy
                            if (entry.type === '1a') color = '#00F0F3'; // Cyan
                            if (entry.type === 'no') color = '#64748b'; // Slate

                            return <Cell key={index} fill={color} />;
                        })}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </BrochureGraphCard>
    );
}
