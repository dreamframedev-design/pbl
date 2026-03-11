"use client";

import Image from "next/image";
import { GeistSans } from "geist/font/sans";

export default function PosterA() {
    return (
        <div className={`relative w-[1000px] h-[1000px] bg-[#001830] text-white overflow-hidden flex flex-col ${GeistSans.className}`}>

            {/* Background - Technical/Precision Grid */}
            <div className="absolute inset-0 bg-[#001830] z-0">
                {/* Subtle Grid Lines - Static & Precise */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '125px 125px', // Larger grid for print readability
                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' // Fade out towards bottom
                    }}
                />
            </div>

            {/* Header Section (Top 350px) */}
            <div className="relative z-20 h-[380px] p-16 flex flex-col justify-between border-b-[3px] border-[#00F0F3] bg-[#001830]">
                <div className="flex justify-between items-start">
                    <Image
                        src="/images/pbl icon updated_pbl logo updated.svg"
                        alt="PBL Assay Science"
                        width={320}
                        height={90}
                        className="brightness-0 invert opacity-100"
                        priority
                    />
                    <div className="text-right">
                        <p className="text-[#00F0F3] text-lg tracking-[0.35em] uppercase font-bold mb-2">Bioanalytical Services</p>
                        <div className="h-[2px] w-full bg-[#00F0F3]" />
                    </div>
                </div>

                <h1 className="text-[5.5rem] font-light tracking-tight leading-[0.9] max-w-5xl mt-auto">
                    Supporting biomarker-driven <br />
                    <span className="font-bold text-[#00F0F3]">drug decisions.</span>
                </h1>
            </div>

            {/* Main Content - Cinematic Columns (Bottom) */}
            <div className="flex-1 grid grid-cols-3 divide-x-[3px] divide-[#001830] relative z-10 bg-[#001830]">

                {/* Column 1: Antibodies */}
                <div className="relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gray-900">
                        <Image
                            src="/images/products-antibodies hero.webp"
                            alt="Antibodies"
                            fill
                            className="object-cover opacity-80 scale-105"
                            priority
                        />
                    </div>
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001830] via-[#001830]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-12 pb-20">
                        <div className="h-[4px] w-20 bg-[#00F0F3] mb-8" />
                        <h3 className="text-5xl font-bold mb-4 tracking-tight">Antibodies</h3>
                        <p className="text-white/90 text-2xl font-light leading-snug">
                            Monoclonal &<br />Polyclonal
                        </p>
                    </div>
                </div>

                {/* Column 2: Interferons */}
                <div className="relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gray-900">
                        <Image
                            src="/images/products-proteins hero.webp"
                            alt="Interferons"
                            fill
                            className="object-cover opacity-80 scale-105"
                            priority
                        />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001830] via-[#001830]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-12 pb-20">
                        <div className="h-[4px] w-20 bg-[#00F0F3] mb-8" />
                        <h3 className="text-5xl font-bold mb-4 tracking-tight">Interferons</h3>
                        <p className="text-white/90 text-2xl font-light leading-snug">
                            Cytokines &<br />Growth Factors
                        </p>
                    </div>
                </div>

                {/* Column 3: ELISA Kits */}
                <div className="relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gray-900">
                        <Image
                            src="/images/ELISAs Kits Hero.webp"
                            alt="ELISA"
                            fill
                            className="object-cover opacity-80 scale-105"
                            style={{ objectPosition: 'center' }}
                            priority
                        />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001830] via-[#001830]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-12 pb-20">
                        <div className="h-[4px] w-20 bg-[#00F0F3] mb-8" />
                        <h3 className="text-5xl font-bold mb-4 tracking-tight">ELISA Kits</h3>
                        <p className="text-white/90 text-2xl font-light leading-snug">
                            Global Standard<br />for Detection
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer Strip */}
            <div className="h-20 bg-[#00F0F3] flex justify-between items-center px-16 text-[#001830] relative z-30">
                <span className="font-extrabold tracking-[0.2em] uppercase text-xl">Est. 1990</span>
                <span className="font-extrabold tracking-[0.2em] uppercase text-2xl">Lean On Us.</span>
            </div>

        </div>
    );
}
