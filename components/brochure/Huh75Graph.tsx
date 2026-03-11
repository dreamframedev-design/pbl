'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import BrochureGraphCard from './BrochureGraphCard';

const DATA = [
    { name: 'HLR1', val: 378, color: '#a855f7' },
    { name: 'HLR14', val: 1888, color: '#002776' }, // High - Navy
    { name: 'HLR9', val: 1080, color: '#00F0F3' },  // Mid - Cyan
    { name: 'HLR8', val: 1609, color: '#3b82f6' },  // Mid-High - Blue
    { name: 'HLR6', val: 1168, color: '#64748b' },
    { name: 'HLR5', val: 245, color: '#94a3b8' },
    { name: '2° ctl', val: 213, color: '#cbd5e1' },
];

export default function Huh75Graph() {
    return (
        <BrochureGraphCard
            title="Anti-human IFNLR1 Antibody"
            subtitle="Flow Cytometry Analysis (Huh7.5)"
            badge="Fit-for-purpose"
            validatedText="Collaborated with IFN researchers for validation"
            height="h-64"
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={DATA} margin={{ top: 10, right: 30, bottom: 0, left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" hide />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={40}
                        stroke="#64748b" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                    />
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="val" radius={[0, 4, 4, 0]} barSize={12}>
                        {DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-end">
                {DATA.map((d, i) => (
                    <div key={i} className="text-[8px] font-mono text-slate-400">
                        <span className="font-bold text-slate-600">{d.val}</span> MFI
                    </div>
                ))}
            </div>
        </BrochureGraphCard>
    );
}
