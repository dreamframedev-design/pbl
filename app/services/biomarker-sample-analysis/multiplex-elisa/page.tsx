import Link from 'next/link';
import { Grid3x3, Zap, TestTube } from 'lucide-react';

export default function MultiplexElisaAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Analysis</span> <span className="text-gray-300">/</span> <span>Multiplex ELISA</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Multiplex ELISA</span> <br/> <span className="font-light text-gray-400 font-serif italic">Assay Services</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Cost-effective multiplex protein biomarker screening using <strong className="text-[#002776]">chemiluminescent detection</strong> for simultaneous measurement of multiple analytes.
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
                }}>
                  <Grid3x3 className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Cost-Effective Screening</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Cost-effective multiplex protein biomarker screening using chemiluminescent detection. Available panels allow rapid evaluation of cytokine, inflammatory, enteric, and angiogenesis markers.
                </p>
              </div>
            </div>

            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-blue-500 mb-8" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <Zap className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Simultaneous Analysis</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Service executed under fit-for-purpose guidelines allowing client customization. PBL's cost-effective multiplex ELISA service enables simultaneous measurement of multiple analytes in individual sample.
                </p>
              </div>
            </div>

            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-slate-400 mb-8" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <TestTube className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Global Immune Profiling</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  These ELISAs provide chemiluminescent results on each analyte and allow for a global understanding of ongoing immune responses in diseases ranging from cancer to autoimmunity.
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
            <h2 className="text-4xl font-bold tracking-tight text-[#002776]">Quansys Bioscience Q-Plex™ Multiplex ELISA Services</h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              PBL's cost-effective multiplex ELISA service enables simultaneous
              measurement of multiple analytes in individual sample. These
              panels allow an understanding of the immune and other markers in
              study samples stemming particularly from <strong className="text-[#002776]">oncology and autoimmunity
              programs</strong>.
            </p>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              These ELISAs provide chemiluminescent results on each analyte and
              allow for a global understanding of ongoing immune responses in
              diseases ranging from cancer to autoimmunity. Evaluation of one
              given inflammatory molecule in the context of several others,
              repeated measurements of the same cytokine panels in the same
              subjects under different treatment assay conditions, and reliable
              detection of different proteins across a broad range of
              concentrations are just some of the benefits provided by this
              multiplex service.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="glass-card p-10 rounded-[3rem] shadow-2xl space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Key Features</span>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">1</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Up to 20 analytes can be measured in a single sample.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">2</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">96-well plate ELISA format allows simultaneous analysis of up to 80 samples in a single run.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">3</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Reliable assay with &lt;20% CV in serum, plasma, cell culture media, and other matrices.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">4</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Small volumes of only 50 ul required to quantify all analytes in a single assay.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">5</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Extensive chemokine and cytokine panels available for human, mouse, rat, non-human primate, and other species.</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic pt-4">Powered by Quansys Biosciences' Q-Plex™ technology, Logan, Utah.</p>
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
                Krupp K.T. <em>et al.</em>, (2024), "Single administration of
                a psychedelic [(R)-DOI] influences coping strategies to an
                escapable social stress", <em>Neuropharmacology</em>, PMID:
                38636726, DOI:{' '}
                <a
                  href="https://doi.org/10.1016/j.neuropharm.2024.109949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1016/j.neuropharm.2024.109949
                </a>
              </p>
              <a href="https://doi.org/10.1016/j.neuropharm.2024.109949" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Direct Expertise</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Talk to a Scientist</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Initiate Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
