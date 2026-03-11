'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import BrochureGraphCard from './BrochureGraphCard';

const DATA = [
    { group: 'Healthy', pbl: 95, comp: 5 },
    { group: 'Atopic', pbl: 90, comp: 2 },
    { group: 'Psoriasis', pbl: 98, comp: 0 },
    { group: 'SLE', pbl: 85, comp: 8 },
    { group: 'RA', pbl: 92, comp: 4 },
];

export default function ElisaDiseaseGraph() {
    return (
        <BrochureGraphCard
            title="Real-World Disease Patient Serum Testing"
            subtitle="Endogenous detection"
            badge="Comparative Study"
            validatedText="Near-100% detectability vs failed detection in other kits"
            height="h-64"
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA} margin={{ top: 20, right: 10, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="group"
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        tickMargin={10}
                        interval={0}
                    />
                    <YAxis
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        label={{ value: '% Detectability', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 8, fontWeight: 900 }}
                    />
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} iconSize={8} />
                    <Bar dataKey="pbl" name="PBL IL-22 Kit" fill="#002776" radius={[4, 4, 0, 0]} barSize={15} />
                    <Bar dataKey="comp" name="Competitor Kit" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={15} />
                </BarChart>
            </ResponsiveContainer>
        </BrochureGraphCard>
    );
}
