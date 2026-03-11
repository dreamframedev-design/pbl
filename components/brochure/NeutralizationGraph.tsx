'use client';

import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import BrochureGraphCard from './BrochureGraphCard';

// Simulated Sigmoidal Data
const DATA = [
    { x: -3, alpha: 100, beta: 100, omega: 100 },
    { x: -2, alpha: 100, beta: 100, omega: 100 },
    { x: -1, alpha: 95, beta: 98, omega: 96 },
    { x: 0, alpha: 20, beta: 50, omega: 30 },
    { x: 1, alpha: 0, beta: 2, omega: 1 },
    { x: 2, alpha: 0, beta: 0, omega: 0 },
];

export default function NeutralizationGraph() {
    return (
        <BrochureGraphCard
            title="Human Type I IFN Neutralization"
            subtitle="Comprehensive Knockdown"
            badge="Neutralization Data"
            validatedText="Designed for real-world challenges"
            height="h-64"
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={DATA} margin={{ top: 20, right: 10, bottom: 20, left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="x"
                        type="number"
                        ticks={[-3, -2, -1, 0, 1, 2]}
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        label={{ value: 'log IFN (ug/ml)', position: 'bottom', offset: 0, fill: '#64748b', fontSize: 8, fontWeight: 900 }}
                    />
                    <YAxis
                        stroke="#94a3b8" fontSize={8} fontWeight={700} axisLine={false} tickLine={false}
                        label={{ value: '% Neutralization', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 8, fontWeight: 900 }}
                    />
                    <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} iconSize={8} />

                    <Line type="monotone" dataKey="alpha" name="Hu-IFN Alpha 2a" stroke="#002776" strokeWidth={2} dot={true} />
                    <Line type="monotone" dataKey="beta" name="Hu-IFN Beta 1a" stroke="#00F0F3" strokeWidth={2} dot={{ fill: '#00F0F3' }} />
                    <Line type="monotone" dataKey="omega" name="Hu-IFN Omega" stroke="#a855f7" strokeWidth={2} dot={{ r: 4, fill: "#a855f7" }} />
                </LineChart>
            </ResponsiveContainer>
        </BrochureGraphCard>
    );
}
