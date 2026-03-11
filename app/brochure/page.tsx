import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import ElisaSensitivityGraph from '@/components/brochure/ElisaSensitivityGraph';
import ElisaDiseaseGraph from '@/components/brochure/ElisaDiseaseGraph';
import ElisaIfnBetaGraph from '@/components/brochure/ElisaIfnBetaGraph';
import ElisaComparisonTable from '@/components/brochure/ElisaComparisonTable';
import ActivityHumanMouseGraph from '@/components/brochure/ActivityHumanMouseGraph';
import Huh75Graph from '@/components/brochure/Huh75Graph';
import NeutralizationGraph from '@/components/brochure/NeutralizationGraph';

export const metadata: Metadata = {
    title: 'PBL Assay Science | 4-Page Brochure',
    description: 'Premium scientific brochure for PBL Assay Science',
};

// 8.5in x 11in = 816px x 1056px (@96dpi) -> Scaled for screen
const PageContainer = ({ children, pageNum, side }: { children: React.ReactNode, pageNum: number, side: 'left' | 'right' }) => (
    <div className={`relative w-[8.5in] h-[11in] bg-white flex flex-col overflow-hidden ${side === 'left' ? 'border-r border-slate-100' : ''}`}>

        {/* Safe Area/Bleed Indicator */}
        <div className="absolute inset-0 p-[0.6in] flex flex-col">
            {children}
        </div>

        {/* Page Number */}
        <div className={`absolute bottom-6 ${side === 'left' ? 'left-8' : 'right-8'} text-[10px] text-slate-400 font-mono font-bold`}>
            {pageNum}
        </div>
    </div>
);

export default function BrochurePage() {
    return (
        <main className="min-h-screen bg-[#1a1a1a] py-20 overflow-x-auto selection:bg-[#00F0F3] selection:text-[#002776]">

            {/* HEADER */}
            <div className="fixed top-0 left-0 w-full bg-[#111] border-b border-[#333] z-[9999] px-8 py-4 flex justify-between items-center text-white shadow-2xl">
                <h1 className="font-medium tracking-tight">PBL Assay Science <span className="text-gray-500">| Premium Brochure Design</span></h1>
                <div className="text-xs text-gray-500 font-mono">
                    <span className="text-[#00F0F3] mr-2">●</span>Print-Ready Finalization
                </div>
            </div>

            <div className="flex flex-col gap-24 items-center justify-center min-w-max px-20 pt-16 pb-20">

                {/* SPREAD 1: OUTER (Page 4 | Page 1) */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Spread 1: Outer (Back Cover & Front Cover)</span>
                    <div className="flex shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.005]">

                        {/* PAGE 4: Back Cover */}
                        <PageContainer pageNum={4} side="left">
                            <div className="h-full flex flex-col justify-between">
                                {/* Content */}
                                <div>
                                    <h2 className="text-[#002776] text-sm font-black uppercase tracking-[0.2em] mb-12 border-b-2 border-[#00F0F3] pb-4 inline-block">Featured Products</h2>

                                    <div className="flex flex-col gap-10">
                                        {/* SECTION 1 */}
                                        <div className="group">
                                            <h3 className="text-[#002776] font-bold text-base mb-4 flex items-center gap-3">
                                                <div className="w-1.5 h-6 bg-[#00F0F3]"></div>
                                                ELISA Kits
                                            </h3>
                                            <ul className="text-xs text-slate-600 space-y-3 ml-4 leading-relaxed font-medium">
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-[#00F0F3] font-bold">›</span> Human IFN-Alpha All-Subtype High Sensitivity</li>
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-[#00F0F3] font-bold">›</span> Human IL-22 High Sensitivity</li>
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-[#00F0F3] font-bold">›</span> Human IFN-Beta Serum/Plasma</li>
                                            </ul>
                                        </div>

                                        {/* SECTION 2 */}
                                        <div className="group">
                                            <h3 className="text-[#002776] font-bold text-base mb-4 flex items-center gap-3">
                                                <div className="w-1.5 h-6 bg-[#002776]"></div>
                                                Recombinant Proteins
                                            </h3>
                                            <ul className="text-xs text-slate-600 space-y-3 ml-4 leading-relaxed font-medium">
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-[#002776] font-bold">›</span> Universal Type I IFN (Alpha)</li>
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-[#002776] font-bold">›</span> Lot-Tested Human & Mouse Cytokines</li>
                                            </ul>
                                        </div>

                                        {/* SECTION 3 */}
                                        <div className="group">
                                            <h3 className="text-[#002776] font-bold text-base mb-4 flex items-center gap-3">
                                                <div className="w-1.5 h-6 bg-purple-600"></div>
                                                Antibodies
                                            </h3>
                                            <ul className="text-xs text-slate-600 space-y-3 ml-4 leading-relaxed font-medium">
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-purple-600 font-bold">›</span> Anti-Human IFNLR1 for Flow Cytometry</li>
                                                <li className="flex items-start gap-2 group-hover:text-[#002776] transition-colors"><span className="text-purple-600 font-bold">›</span> Human Type I IFN Neutralizing Antibody</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTACT FOOTER */}
                                <div className="mt-8 pt-8 border-t-2 border-slate-100">
                                    <div className="flex items-end justify-between">
                                        <div className="text-[10px] leading-loose text-slate-500 font-medium">
                                            <strong className="text-[#002776] text-sm block mb-2">PBL Assay Science</strong>
                                            131 Ethel Road West, Suite 6<br />
                                            Piscataway, NJ 08854 USA<br />
                                            Phone: +1 732-777-9123<br />
                                            Email: info@pblassaysci.com
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-20 h-20 bg-white border-2 border-[#002776] p-1 flex items-center justify-center rounded-lg shadow-lg">
                                                <svg className="w-14 h-14 text-[#002776]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm8 4h2v2h-2v-2zm-2-4h2v2h-2v-2zm4 0h2v2h-2v-2zm2-2h2v2h-2v-2zm-4-4h6v2h-2v2h-2v-2h-2v-2zm6-2h2v4h-2v-4z" /></svg>
                                            </div>
                                            <span className="text-[#002776] font-bold text-[8px] tracking-wide text-center w-24">Scan to explore our full catalog at pblassaysci.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PageContainer>

                        {/* PAGE 1: Front Cover */}
                        <PageContainer pageNum={1} side="right">
                            <div className="absolute inset-0 w-full h-full">
                                {/* Hero Image Layer - Mask moved DOWN, Image moved UP */}
                                <div className="relative w-[120%] -ml-[10%] h-[75%] mt-0 overflow-hidden rounded-b-[100%] shadow-[0_20px_50px_rgba(0,39,118,0.2)]">
                                    <Image
                                        src="/images/brochure image 1.webp"
                                        alt="Scientific 3D Abstract"
                                        fill
                                        className="object-cover scale-125 -translate-y-24"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002776]/80 via-transparent to-transparent mix-blend-multiply"></div>
                                </div>

                                {/* Logo Overlay - Official Brand Style */}
                                <div className="absolute top-16 left-16 z-10">
                                    <div className="text-[#002776] font-black text-3xl tracking-tighter drop-shadow-md">
                                        PBL <span className="font-light text-[#00F0F3]">Assay Science</span>
                                    </div>
                                </div>

                                {/* Main Text */}
                                <div className="p-16 absolute bottom-[15%] left-0 w-full text-center">
                                    <h1 className="text-[4rem] font-black text-[#002776] leading-[0.9] tracking-tight drop-shadow-sm mb-6">
                                        Turn Real-World<br />
                                        Challenges into
                                    </h1>
                                    <div className="inline-block transform -skew-x-6 hover:scale-105 transition-transform duration-500">
                                        <div className="px-12 py-4 bg-gradient-to-r from-[#002776] via-[#058A9F] to-[#002776] text-white text-[3.5rem] font-black shadow-2xl rounded-sm">
                                            RELIABLE RESULTS
                                        </div>
                                    </div>
                                    <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-[0.3em] opacity-80">35 Years of Cytokine Research Excellence</p>
                                </div>

                                {/* Footer Strip */}
                                <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-[#002776] via-[#00F0F3] to-[#002776]"></div>
                            </div>
                        </PageContainer>
                    </div>
                </div>

                {/* SPREAD 2: INNER (Page 2 | Page 3) */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Spread 2: Inner (High Sensitivity ELISA & Proteins)</span>
                    <div className="flex shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.005]">

                        {/* PAGE 2 */}
                        <PageContainer pageNum={2} side="left">
                            <div className="flex flex-col h-full">
                                {/* Intro Text */}
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-[#002776] leading-tight mb-4">
                                        ELISA Kits that Overcome<br />
                                        <span className="text-cyan-600">Real-World Assay Limitations</span>
                                    </h2>
                                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4 text-justify border-b border-slate-100 pb-4">
                                        Measuring cytokines with ELISA can be challenging in real-world conditions—where analyte levels are often extremely low, similar proteins risk cross-reactivity, and complex matrices like serum or plasma interfere with accuracy. PBL Assay Science’s ELISA kits are designed to overcome these obstacles.
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        {[
                                            { title: 'High-Sensitivity', desc: 'Enables low-abundance cytokine detection for better biological insights.' },
                                            { title: 'Exceptional Specificity', desc: 'Targets endogenous proteins to eliminate false data.' },
                                            { title: 'Superior Matrix-Tolerance', desc: 'Ensures relevant results from complex serum and plasma samples.' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#00F0F3] mt-1.5 shadow-[0_0_10px_#00F0F3] flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-[#002776] uppercase tracking-wide block">{item.title}</span>
                                                    <span className="text-[10px] text-slate-600">{item.desc}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Graph Grid - Top Row */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="h-44">
                                        <ElisaSensitivityGraph />
                                    </div>
                                    <div className="h-44">
                                        <ElisaDiseaseGraph />
                                    </div>
                                </div>

                                {/* Bottom Split Layout: Graph Left, Table Right */}
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <div className="h-full">
                                        <ElisaIfnBetaGraph />
                                    </div>
                                    <div className="h-full flex flex-col">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1 h-3 bg-[#002776]"></div>
                                            <h4 className="text-[10px] font-bold text-[#002776] uppercase tracking-wider">Performance Comparison</h4>
                                        </div>
                                        <div className="flex-1 border border-slate-100 rounded-lg overflow-hidden bg-white shadow-sm">
                                            {/* Static Table Implementation (No Scroll) */}
                                            <table className="w-full text-[8px] text-left">
                                                <thead className="bg-[#002776] text-white">
                                                    <tr>
                                                        <th className="p-2 font-bold">Assay / Kit</th>
                                                        <th className="p-2 font-bold text-center">Specificity</th>
                                                        <th className="p-2 font-bold text-center">Matrix</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    <tr className="bg-slate-50">
                                                        <td className="p-2 font-bold text-[#002776]">PBL 41105</td>
                                                        <td className="p-2 text-center text-[#002776] font-bold">All 12 Subtypes</td>
                                                        <td className="p-2 text-center text-green-600 font-bold">Validated</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-2 text-slate-500">Supplier T</td>
                                                        <td className="p-2 text-center text-slate-400">N/A</td>
                                                        <td className="p-2 text-center text-slate-400">Not spec.</td>
                                                    </tr>
                                                    <tr className="bg-slate-50">
                                                        <td className="p-2 font-bold text-[#002776]">PBL 41415</td>
                                                        <td className="p-2 text-center text-[#002776] font-bold">No Cross-Rx</td>
                                                        <td className="p-2 text-center text-green-600 font-bold">Autoimmune</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-2 text-slate-500">Supplier R</td>
                                                        <td className="p-2 text-center text-slate-400">Low</td>
                                                        <td className="p-2 text-center text-slate-400">Fails</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="p-2 text-[7px] text-slate-400 text-center italic bg-slate-50">
                                                *Full comparative data on file at pblassaysci.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PageContainer>

                        {/* PAGE 3 */}
                        <PageContainer pageNum={3} side="right">
                            <div className="flex flex-col h-full">
                                {/* Intro Text */}
                                <div className="mb-4 pl-4">
                                    <h2 className="text-3xl font-bold text-[#002776] leading-tight mb-4 text-right">
                                        Proteins & Antibodies for<br />
                                        <span className="text-purple-600">Translational Research</span>
                                    </h2>
                                    <div className="flex justify-end mb-4">
                                        <div className="text-xs text-slate-600 leading-relaxed font-medium text-right max-w-lg space-y-2">
                                            <p className="border-r-4 border-purple-500 pr-4">
                                                <strong className="text-[#002776]">Activity Units vs. Mass:</strong> Proteins provided in activity units for accurate dosing based on potency.
                                            </p>
                                            <p className="border-r-4 border-blue-500 pr-4">
                                                <strong className="text-[#002776]">Lot-Specific Bioactivity:</strong> Testing ensures consistent performance.
                                            </p>
                                            <p className="border-r-4 border-[#00F0F3] pr-4">
                                                <strong className="text-[#002776]">Antibody Specificity:</strong> Designed for all-subtype neutralization.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Graph Layout - Compacted to prevent overlap */}
                                <div className="flex-1 flex flex-col gap-4">
                                    {/* Top Row: Activity & Neutralization */}
                                    <div className="grid grid-cols-2 gap-4 h-48">
                                        <ActivityHumanMouseGraph />
                                        <NeutralizationGraph />
                                    </div>

                                    {/* Middle: Flow Cytometry (Wide but Shorter) */}
                                    <div className="h-32 w-4/5 self-center">
                                        <Huh75Graph />
                                    </div>

                                    {/* Spacer to force bottom alignment */}
                                    <div className="flex-1"></div>

                                    {/* Bottom Message Banner - Clearly Separated */}
                                    <div className="py-6 text-center bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-100 mt-4">
                                        <h3 className="text-base font-bold text-[#002776] leading-tight max-w-xl mx-auto">
                                            With PBL Assay Science, trust your data and accelerate discoveries in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">immunology, inflammation, and translational research.</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </PageContainer>
                    </div>
                </div>

            </div>
        </main>
    );
}
