import Image from 'next/image';
import Link from 'next/link';
import { Zap, Clock, Grid3x3, ShieldCheck } from 'lucide-react';

export default function AntibodyCharacterizationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/21.webp"
            alt="Antibody Characterization"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span className="break-words">Antibody Characterization</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block text-[#002776]">Antibody Characterization</span>
            <span className="block font-light text-gray-400 font-serif italic">Service</span>
          </h1>
        </div>
      </header>

      {/* Antibody Characterization Service Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Affinity of protein-protein interactions */}
              <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.2rem] p-12 h-full flex flex-col">
                  <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all">
                    <Zap className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Affinity of protein-protein interactions; Antibody-antigen specificity and affinity:</h3>
                  <p className="text-slate-500 text-[15px] font-light leading-relaxed">
                    Real-time BLI-based (Bio-layer Interferometry) biophysical characterization of polyclonal and monoclonal antibody affinities (K<sub>d</sub>) for antigen
                  </p>
                </div>
              </div>

              {/* Association and dissociation rates */}
              <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.2rem] p-12 h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Clock className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Association and dissociation rates of protein-protein interactions:</h3>
                  <p className="text-slate-500 text-[15px] font-light leading-relaxed">
                    Quantification of K<sub>on</sub> and K<sub>off</sub> rates for many antibody/antigen pairs underlying their dissociation constants
                  </p>
                </div>
              </div>

              {/* Epitope binning */}
              <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.2rem] p-12 h-full flex flex-col">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-[#002776] group-hover:text-white transition-all">
                    <Grid3x3 className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Epitope binning</h3>
                  <p className="text-slate-500 text-[15px] font-light leading-relaxed">
                    based upon antibody binding to non-overlapping epitopes
                  </p>
                </div>
              </div>

              {/* Antibody screening */}
              <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.2rem] p-12 h-full flex flex-col">
                  <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#058A9F] mb-8 group-hover:bg-[#058A9F] group-hover:text-white transition-all">
                    <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Antibody screening</h3>
                  <p className="text-slate-500 text-[15px] font-light leading-relaxed">
                    to reveal appropriate biophysical profiles for specific applications
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Body Text */}
          <div className="max-w-4xl space-y-6 text-slate-600 font-light leading-relaxed">
            <p>
              With a wealth of knowledge on immunological interactions, we offer protein biophysical characterization services which can determine the kinetic characterization of protein-protein interactions. PBL offers biophysical characterization of antibody affinity for a ligand or the measurement of antigen:antibody K<sub>on</sub>/K<sub>off</sub> rates. To accelerate assay development, we also determine which antibodies bind to antigens in a sandwich format. Binning—determination of antibodies which bind to non-overlapping epitopes—is performed using multiple hybridoma clones.
            </p>
          </div>
        </div>
      </section>

      {/* BLI Graph Data Showcase */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <p className="text-slate-600 font-light leading-relaxed">
                The graph shows the association and dissociation of IFN to a surface-immobilized antibody as determined by real time Biolayer Interferometry (BLI) using varying concentrations of IFN. The raw data is shown in blue and the model response in red. IFN Binding to and Dissociation from a Surface-Immobilized Monoclonal Antibody Evaluated by Bio-Layer Interferometry (BLI).
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card p-10 rounded-[3rem] shadow-2xl relative overflow-hidden bg-white">
                <div className="aspect-video bg-white rounded-2xl flex flex-col items-center justify-center p-12 text-center relative group border border-slate-200">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#002776_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <div className="w-20 h-20 bg-[#002776] rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.3em] mb-2 text-[#002776]">BLI Association Graph</p>
                  <p className="text-xs text-slate-500 font-light max-w-md leading-relaxed">Association and dissociation of IFN to a surface-immobilized antibody using varying concentrations of IFN to determine antibody affinity.</p>
                </div>
                <div className="mt-6 text-sm text-slate-500 font-light leading-relaxed">
                  Association and dissociation of IFN to a surface-immobilized antibody using varying concentrations of IFN to determine antibody affinity. The raw data are shown in blue and the model response in red.
                </div>
              </div>
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

