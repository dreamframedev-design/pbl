"use client";

import PosterA from "./PosterA";
import PosterB from "./PosterB";
import { GeistSans } from "geist/font/sans";

export default function PostersPage() {
    return (
        <div className={`min-h-screen bg-neutral-950 text-white p-12 overflow-x-hidden ${GeistSans.className}`}>

            <div className="max-w-[1600px] mx-auto mb-12">
                <h1 className="text-4xl font-bold mb-4">PBL 35th Anniversary Hero Assets</h1>
                <p className="text-neutral-400 max-w-2xl">
                    Digital twins of the physical tradeshow backdrops.
                    Designed at 1:1 aspect ratio strictly adhering to the PBL Design System.
                    High-fidelity renders targeting 8K output.
                </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-24 items-start justify-center">
                {/* Poster A Container */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-[#00F0F3] tracking-widest uppercase">Poster A: Bioanalytical Services</h2>
                    <div className="border border-neutral-800 shadow-2xl shadow-[#058A9F]/20 rounded-xl overflow-hidden ring-1 ring-white/10">
                        <div className="scale-[0.6] sm:scale-[0.8] md:scale-100 origin-top-left width-[1000px] height-[1000px]">
                            <PosterA />
                        </div>
                    </div>
                </div>

                {/* Poster B Container */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-[#00F0F3] tracking-widest uppercase">Poster B: Product Authority</h2>
                    <div className="border border-neutral-800 shadow-2xl shadow-[#002776]/40 rounded-xl overflow-hidden ring-1 ring-white/10">
                        <div className="scale-[0.6] sm:scale-[0.8] md:scale-100 origin-top-left width-[1000px] height-[1000px]">
                            <PosterB />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
