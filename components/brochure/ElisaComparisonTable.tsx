'use client';

import React from 'react';

const ROW_DATA = [
    { label: "PBL 41115", lloq: "1.02 pg/ml", specificity: "All 12 Human IFN-Alpha Subtypes", endogenous: "Healthy & Disease (Lupus, Flu, COVID) ✓", type: 'pbl' },
    { label: "Supplier A", lloq: "15.6 pg/ml", specificity: "N/A", endogenous: "N/A", type: 'comp' },
    { label: "Supplier B, C", lloq: "4.6 - 150 pg/ml", specificity: "Limited Subtypes", endogenous: "No data shown", type: 'comp' },

    { spacer: true },

    { label: "PBL 41415", lloq: "1.2 pg/ml", specificity: "No interference from sIFNAR2", endogenous: "Validated for autoimmune sera ✓", type: 'pbl' },
    { label: "Supplier A", lloq: "7.8 pg/ml", specificity: "Interference present", endogenous: "Cell/Tissue Supernatant only", type: 'comp' },
    { label: "Supplier B", lloq: "9.38 pg/ml", specificity: "N/A", endogenous: "No data shown", type: 'comp' },

    { spacer: true },

    { label: "PBL 41701 (IL-22)", lloq: "0.78 pg/ml", specificity: "Free IL-22", endogenous: "Near 100% endogenous detectability ✓", type: 'pbl' },
    { label: "Supplier A", lloq: "15.6 pg/ml", specificity: "N/A", endogenous: "Poor endogenous detectability", type: 'comp' },
];

export default function ElisaComparisonTable() {
    return (
        <div className="w-full h-full flex flex-col overflow-hidden bg-white rounded-xl border border-slate-200 text-[6px] md:text-[8px] leading-tight">
            {/* HEADER */}
            <div className="grid grid-cols-4 bg-slate-50 font-bold text-[#002776] border-b border-slate-200">
                <div className="p-2 border-r border-slate-100">Analyte/Kit</div>
                <div className="p-2 border-r border-slate-100">Assay Lowest Point (LLOQ)</div>
                <div className="p-2 border-r border-slate-100">Specificity</div>
                <div className="p-2">Endogenous Sample Measurement</div>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto">
                {ROW_DATA.map((row, i) => {
                    if (row.spacer) return <div key={i} className="h-1 bg-slate-100 border-y border-slate-200" />;

                    const isPBL = row.type === 'pbl';
                    return (
                        <div key={i} className={`grid grid-cols-4 border-b border-slate-50 last:border-0 ${isPBL ? 'bg-yellow-50/50' : 'bg-white'}`}>
                            <div className={`p-2 border-r border-slate-50 font-bold ${isPBL ? 'text-[#002776]' : 'text-slate-500'}`}>{row.label}</div>
                            <div className={`p-2 border-r border-slate-50 ${isPBL ? 'font-semibold text-slate-800' : 'text-slate-500'}`}>{row.lloq}</div>
                            <div className={`p-2 border-r border-slate-50 ${isPBL ? 'text-green-700 font-medium' : 'text-slate-400'}`}>{row.specificity}</div>
                            <div className={`p-2 ${isPBL ? 'text-green-700 font-bold' : 'text-slate-400 italic'}`}>{row.endogenous}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
