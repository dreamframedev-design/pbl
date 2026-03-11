"use client";

import Image from "next/image";
import { GeistSans } from "geist/font/sans";

export default function PosterB() {
    return (
        <div className={`relative w-[1000px] h-[1000px] bg-[#001830] overflow-hidden flex flex-row ${GeistSans.className}`}>

            {/* Background - Deep Tech Navy */}
            <div className="absolute inset-0 bg-[#001830] z-0">
                {/* Subtle red accent gradient (Connections theme) */}
                <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-b from-[#EF4444]/15 to-transparent blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 opacity-50" />
            </div>

            {/* LEFT COLUMN: Typography & List (50%) */}
            <div className="relative z-20 w-1/2 h-full flex flex-col justify-between p-16 border-r border-white/5 bg-[#001830]/50 backdrop-blur-sm">

                {/* Header */}
                <div>
                    <Image
                        src="/images/pbl icon updated_pbl logo updated.svg"
                        alt="PBL Assay Science"
                        width={300}
                        height={85}
                        className="brightness-0 invert opacity-100 mb-16"
                        priority
                    />

                    <div className="pl-6 border-l-[6px] border-[#EF4444]">
                        <h2 className="text-[#EF4444] text-xl font-bold tracking-[0.3em] uppercase mb-4">The Market Standard</h2>
                        <h1 className="text-white text-[5rem] font-bold leading-[0.9] tracking-tight">
                            Products<br />
                            That Won't<br />
                            Let You<br />
                            Down.
                        </h1>
                    </div>
                </div>

                {/* Product List - Static & Bold */}
                <div className="space-y-6 pl-10">
                    {[
                        "Interferons",
                        "Cytokines",
                        "Antibodies",
                        "ELISA Kits",
                        "Bioanalytical Services"
                    ].map((item, i) => (
                        <div key={item} className="flex items-center gap-6">
                            <div className="h-[3px] w-10 bg-[#EF4444] shadow-[0_0_8px_#EF4444]" />
                            <span className="text-white text-[2.2rem] font-medium tracking-wide whitespace-nowrap">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="pt-8">
                    <p className="text-white/40 tracking-[0.3em] uppercase text-sm font-bold">Est. 1990 — USA</p>
                </div>
            </div>

            {/* RIGHT COLUMN: Hero Window (50%) */}
            <div className="relative z-10 w-1/2 h-full flex items-center justify-center overflow-hidden">

                {/* The "Review/Lens" Circle - Centered in Right Column */}
                <div className="relative w-[550px] h-[550px] rounded-full bg-gradient-to-br from-white to-[#F0F4F8] shadow-[0_20px_100px_rgba(0,0,0,0.5)] flex items-center justify-center border-[16px] border-[#001830] z-20">
                    {/* Molecule Image */}
                    <div className="relative w-full h-full scale-[0.85] translate-y-[2%]">
                        <Image
                            src="/images/1.webp"
                            alt="IFN Molecule"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Badge intersecting the circle edge */}
                    <div className="absolute top-[10%] left-[-40px] w-36 h-36 rounded-full bg-[#EF4444] text-white flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(239,68,68,0.5)] z-30 transform rotate-[-8deg] border-[6px] border-[#001830]">
                        <span className="text-5xl font-black leading-none mt-1">35</span>
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] mt-1 text-white/90">Years</span>
                    </div>
                </div>

                {/* Decorative Elements behind circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-white/10 rounded-full z-0 border-dashed" />

            </div>

            {/* Bottom Tagline Overlay - Watermark */}
            <div className="absolute bottom-12 right-12 z-0 pointer-events-none">
                <p className="text-white text-[4rem] font-black uppercase opacity-[0.03] leading-none tracking-tighter">
                    Lean On Us
                </p>
            </div>

        </div>
    );
}
