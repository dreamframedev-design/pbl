'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell
} from 'recharts';
import BrochureGraphCard from './BrochureGraphCard';

const HUMAN_CELLS = [
    { name: 'Mu Alpha A', val: 0.1 },
    { name: 'Hu Alpha 2a', val: 2.5 },
    { name: 'Universal', val: 2.8 },
];

const MOUSE_CELLS = [
    { name: 'Mu Alpha A', val: 3.5 },
    { name: 'Hu Alpha 2a', val: 0.1 },
    { name: 'Universal', val: 3.2 },
];

const CUSTOM_TOOLTIP = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border border-slate-100 shadow-lg rounded-lg text-xs font-bold text-[#002776]">
                <p>{label}: {payload[0].value > 1 ? 'High Activity' : 'Low Activity'}</p>
            </div>
        );
    }
    return null;
};

export default function ActivityHumanMouseGraph() {
    return (
        <BrochureGraphCard
            title="Universal Type I IFN Cross-Species Activity"
            subtitle="Lot-to-lot Bioactivity Testing"
            badge="Activity Data"
            validatedText="One protein, multiple species applications"
            height="h-64"
        >
            <div className="flex h-full gap-2">
                {/* HUMAN CELLS */}
                <div className="flex-1 flex flex-col">
                    <div className="text-[8px] text-center font-bold text-slate-500 mb-2">Activity on Human Cells</div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={HUMAN_CELLS} margin={{ top: 0, right: 0, bottom: 20, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" tick={false} axisLine={false} />
                            <YAxis hide domain={[0, 4]} />
                            <Tooltip content={CUSTOM_TOOLTIP} />
                            <Bar dataKey="val" fill="#002776" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                                {
                                    HUMAN_CELLS.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 0 ? '#cbd5e1' : (index === 2 ? '#002776' : '#64748b')} />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="w-px bg-slate-100 my-4"></div>

                {/* MOUSE CELLS */}
                <div className="flex-1 flex flex-col">
                    <div className="text-[8px] text-center font-bold text-slate-500 mb-2">Activity on Mouse Cells</div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MOUSE_CELLS} margin={{ top: 0, right: 0, bottom: 20, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" tick={false} axisLine={false} />
                            <YAxis hide domain={[0, 4]} />
                            <Tooltip content={CUSTOM_TOOLTIP} />
                            <Bar dataKey="val" fill="#00F0F3" radius={[4, 4, 0, 0]} isAnimationActive={false} >
                                {
                                    MOUSE_CELLS.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 1 ? '#cbd5e1' : (index === 2 ? '#002776' : '#00F0F3')} />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="flex justify-center gap-4 py-2">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#cbd5e1]"></div><span className="text-[8px]">Inactive</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#002776]"></div><span className="text-[8px] font-bold">Universal IFN</span></div>
            </div>
        </BrochureGraphCard>
    );
}
