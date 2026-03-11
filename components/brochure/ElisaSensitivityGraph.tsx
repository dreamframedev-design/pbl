'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import BrochureGraphCard from './BrochureGraphCard';

const DATA = [
    { time: '0', pbl: 200, compA: 10, compB: 5 },
    { time: '24', pbl: 8000, compA: 100, compB: 50 },
    { time: '48', pbl: 12000, compA: 200, compB: 100 },
    { time: '72', pbl: 4000, compA: 50, compB: 20 },
];

export default function ElisaSensitivityGraph() {
    return (
        <BrochureGraphCard
            title="High Sensitivity IFN-Alpha All-Subtype Detection"
            subtitle="Better Biological Insights"
            badge="Time Course Study"
            validatedText="Early detection of expression points other kits missed"
            height="h-64"
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA} margin={{ top: 20, right: 10, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="time"
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        label={{ value: 'Time (h)', position: 'bottom', offset: 0, fill: '#64748b', fontSize: 8, fontWeight: 900 }}
                        tickMargin={10}
                    />
                    <YAxis
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        scale="log" domain={[1, 100000]}
                        label={{ value: '[IFN-Alpha] pg/ml', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 8, fontWeight: 900 }}
                        tickFormatter={(val) => val >= 1000 ? `${val / 1000}k` : val}
                    />
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} iconSize={8} />
                    <Bar dataKey="pbl" name="PBL 41135" fill="#002776" radius={[2, 2, 0, 0]} barSize={12} />
                    <Bar dataKey="compA" name="Competitor A" fill="#94a3b8" radius={[2, 2, 0, 0]} barSize={12} />
                    <Bar dataKey="compB" name="Competitor B" fill="#cbd5e1" radius={[2, 2, 0, 0]} barSize={12} />
                </BarChart>
            </ResponsiveContainer>
        </BrochureGraphCard>
    );
}
