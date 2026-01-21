import Link from 'next/link';
import { Target, TrendingUp, Layers } from 'lucide-react';

export default function SmcAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Analysis</span> <span className="text-gray-300">/</span> <span className="break-words">SMC</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-[#002776]">
            Single Molecule Counting (SMCxPRO & Erenna) Assay Services: Sensitive Cytokine Testing
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            MilliporeSigma Single Molecule Counting (SMCxPRO® & Erenna®)
          </p>
        </div>
      </header>

      {/* Feature Cards */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-cyan-500 mb-8 font-black text-xs" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>sub-pg/ml</div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Ultra-Sensitive Detection</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Cytokine analysis utilizing Single Molecule Counting technology enables sub-pg/ml sensitivity for accurate measurement of low abundance biomarkers in normal or disease sera/plasma.
                </p>
              </div>
            </div>

            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-blue-500 mb-8" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <TrendingUp className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Wide Dynamic Range</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Minimal sample dilution requirement with 4-Log+ dynamic range. High precision cytokine immunoassays provide reproducible data.
                </p>
              </div>
            </div>

            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-slate-400 mb-8" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <Layers className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Extensive Analyte Menu</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Extensive analyte menu of over 40 different cytokine assays covering several disease areas including IFN-γ, IL-1a, IL-1b, IL-4, IL-6, IL-8, IL-10, IL-13, IL-15, IL-17A, IL-17F, IL-17 heterodimer, IL-23, GLP-1, and TNF-α.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-[#002776]">Advanced Cytokine Detection</h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Employing MilliporeSigma's <strong className="text-[#002776]">Single Molecule Counting</strong>{' '}
              (SMC) technology with robust microparticle-based SMCxPRO® &
              Erenna® immunoassays, PBL's cytokine detection services can
              provide scientists with sub-pg/ml level measurements of
              low-abundance analytes in healthy or disease sera and plasma.
            </p>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              MilliporeSigma's SMC (Single Molecule Counting) technology in
              conjunction with robust microparticle (MP) based sandwich
              immunoassays enables accurate, high-precision baseline
              quantification of low-abundance analytes at or below
              sub-picogram concentrations. Accurately measuring low-abundance
              analytes present in complex matrices is essential for the
              profiling and characterization of cytokines and other biomarker
              analytes.
            </p>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              An increased understanding of the role and regulation of cytokines
              in disease states results from greater profiling and
              characterization of their activities in biological responses. This
              technology can be instrumental in furthering our collective
              understanding of low-abundance cytokines in complex matrices.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-slate-600 font-light">
                <strong>Figure 1.</strong> Median levels of IL-1b (Interleukin
                1 Beta) in Plasma Samples (Heparin, Citrate and EDTA)
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="glass-card p-10 rounded-[3rem] shadow-2xl space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Key Features</span>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">1</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Enables <strong>sub-pg/ml sensitivity</strong> for accurate measurement of low abundance biomarkers in serum, plasma or other complex matrices.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">2</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Requires minimal sample dilution with a <strong>4-Log+ dynamic range</strong>.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">3</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Provides high precision and reproducible data.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">4</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Extensive analyte menu of over <strong>30 different cytokine assays</strong> covering several disease areas.</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic pt-4">Powered by SMCxPRO<sup>®</sup> & Erenna® Immunoassay Systems, MilliporeSigma Inc., Burlington, MA, USA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citations Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-10 tracking-tight text-[#002776]">Scientific Citations</h3>
          <div className="space-y-6">

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Passeron, T. <em>et al.</em>, (2023), "A Phase{' '}
                <strong>IIIb</strong>, Multicentre, Interventional,
                Randomised, Placebo-Controlled Clinical Trial Investigating
                the Efficacy and Safety of Guselkumab for the Treatment of
                Nonpustular Palmoplanter Psoriasis (G-PLUS)",{' '}
                <em>Dermatologic Therapy</em>, DOI:{' '}
                <a
                  href="https://doi.org/10.1155/2023/9967747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1155/2023/9967747
                </a>
              </p>
              <a href="https://doi.org/10.1155/2023/9967747" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Morita, A. <em>et al.</em>, (2022), "Effect of guselkumab on
                serum biomarkers in Japanese palmoplanter pustulosis patients
                in randomized phase 3 study", <em>JEADV Clinical Practice</em>,
                DOI:{' '}
                <a
                  href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/jvc2.73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1002/jvc2.73
                </a>
              </p>
              <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/jvc2.73" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Speak to a Scientist</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            PBL's Customer Support Team is ready to assist by email, phone, or chat.
          </p>
          <a
            href="https://www.pblassaysci.com/speak-to-a-scientist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Speak to a Scientist
          </a>
        </div>
      </section>
    </main>
  );
}
