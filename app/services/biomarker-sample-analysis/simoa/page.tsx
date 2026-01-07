import Link from 'next/link';
import { Zap, Lightbulb, BarChart3 } from 'lucide-react';

export default function SimoaAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Analysis</span> <span className="text-gray-300">/</span> <span>SIMOA</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">SIMOA</span> <br/> <span className="font-light text-gray-400 font-serif italic">Assay Services</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Single Molecule Array (Simoa) technology for ultrasensitive biomarker detection with <strong className="text-[#002776]">femtogram per milliliter sensitivity.</strong>
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
                }}>fg/ml</div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Ultrasensitive Quantitation</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Ultrasensitive fg/ml LLOQ for low abundance analyte quantitation. Essential for baseline detection in normal and disease states.
                </p>
              </div>
            </div>

            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-blue-500 mb-8" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <Lightbulb className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Neurobiological Panels</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Robust immunoassays for markers such as Neurofilament Light Chain (NF-L), Amyloid peptides (Aβ), and Tau protein.
                </p>
              </div>
            </div>

            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover-glow">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 stat-badge rounded-2xl flex items-center justify-center text-slate-400 mb-8" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <BarChart3 className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Digital Precision</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  High precision digital ELISA provides accurate and reproducible data for critical therapeutic candidates.
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
            <h2 className="text-4xl font-bold tracking-tight text-[#002776]">Analytical Partnership</h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Understanding the role of protein biomarkers in various disease
              states is essential, as are the most robust tools for examining
              your therapeutic candidates modulate these biomarkers. For your
              sample testing needs, PBL can help you measure your analyte(s) of
              interest that are in low abundance or in difficult matrices. Our
              scientists communicate with you building a <strong className="text-[#002776]">transparent,
              collaborative environment</strong> and eliminating costly project missteps.
            </p>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm italic text-lg text-[#058A9F] font-medium">
              "We strive to be a partner you can trust"
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="glass-card p-10 rounded-[3rem] shadow-2xl space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Key Features</span>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">1</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Single well digital ELISA with femtogram per milliliter (fg/ml) sensitivity for quantitation of many low abundance analytes.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">2</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Compatible with various sample matrices such as CSF, serum, and plasma.</p>
                </div>
                <div className="flex gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">3</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">Provides a high degree of precision, accuracy, and reproducibility with &lt; 10% inter-assay CV and intra-assay CV.</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic pt-4">Powered by Quanterix Single Molecule Array technology, Lexington, MA, U.S.A.</p>
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
                Murphy, D.P. <em>et al.</em>, (2024), "Chronic consequences
                of ischemic stroke: Profiling brain injury and inflammation
                in a mouse model with reperfusion", <em>Physiol Rep.</em>{' '}
                12(12):e16118, PMID: 38923318, DOI:{' '}
                <a
                  href="https://doi.org/10.14814/phy2.16118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.14814/phy2.16118
                </a>
              </p>
              <a href="https://doi.org/10.14814/phy2.16118" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Yan, J. <em>et al.</em>, (2024), "Twin interface inhibitor
                FP802 stops loss of motor neurons and mitigates disease
                progression in a mouse model of ALS", <em>Cell Rep Med.</em>{' '}
                101413, PMID: 38325382, DOI:{' '}
                <a
                  href="https://doi.org/10.1016/j.xcrm.2024.101413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1016/j.xcrm.2024.101413
                </a>
              </p>
              <a href="https://doi.org/10.1016/j.xcrm.2024.101413" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Loppi, S.H. <em>et al.</em>, (2023), "Increased fatty acid
                metabolism and decreased glycolysis are hallmarks of metabolic
                reprogramming within microglia in degenerating white matter
                during recovery from experimental stroke", <em>J. Cerebral
                Blood Flow & Metabolism</em>, 0(0):1, DOI:{' '}
                <a
                  href="https://dx.doi.org/10.1177/0271678X231157298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1177/0271678X231147298
                </a>
              </p>
              <a href="https://dx.doi.org/10.1177/0271678X231157298" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Giannisis, A. <em>et al.</em>, (2022), "Plasma apolipoprotein
                E levels in longitudinally followed patients with mild
                cognitive impairment and Alzheimer's disease",{' '}
                <em>Alzheimer's Research & Therapy</em>, 14:115, DOI:{' '}
                <a
                  href="https://doi.org/10.1186/s13195-022-01058-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1186/s13195-022-01058-9
                </a>
              </p>
              <a href="https://doi.org/10.1186/s13195-022-01058-9" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Hay, M. <em>et al.</em> (2021), "Serum Neurofilament Light is
                elevated in COVID-19 Positive Adults in the ICU and is
                associated with Co-Morbid Cardiovascular Disease,
                Neurologivcal Complications, and Acuity of Illness",{' '}
                <em>Cardiol Cardiovasc Med.</em>, 5(5):551, DOI:{' '}
                <a
                  href="https://doi.org/10.26502/fccm.92920221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.26502/fccm.92920221
                </a>
              </p>
              <a href="https://doi.org/10.26502/fccm.92920221" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Hoyer-Kimura, C. <em>et al.</em> (2021), "Neurofilament light:
                a possible prognostic biomarker for treatment of vascular
                contributions to cognitive impairment and dementia",{' '}
                <em>J. Neuroinflammation</em>, 18(1):236, DOI:{' '}
                <a
                  href="https://doi.org/10.1186/s12974-021-02281-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1186/s12974-021-02281-1
                </a>
              </p>
              <a href="https://doi.org/10.1186/s12974-021-02281-1" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Chiappelli, J. <em>et al.</em>, (2018), "Influence of plasma
                cytokines on kynurenine and kynurenic acid in schizophrenia",{' '}
                <em>Neuropaschopharmacology</em>, 43:1675, DOI:{' '}
                <a
                  href="https://doi.org/10.1038/s41386-018-0038-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.1038/s41386-018-0038-4
                </a>
              </p>
              <a href="https://doi.org/10.1038/s41386-018-0038-4" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-400 transition-all">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Zanin-Zhorov, A. <em>et al.</em>, (2017), "Selective Oral
                ROCK2 Inhibitor Reduces Clinical Scores in Patients with
                Psoriasis Vulgaris and Normalizes Skin Pathology via
                Concurrent Regulation of IL-17 and IL-10", <em>J. Immunol.</em>{' '}
                198(10):3809, DOI:{' '}
                <a
                  href="https://doi.org/10.4049/jimmunol.1602142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  10.4049/jimmunol.1602142
                </a>
              </p>
              <a href="https://doi.org/10.4049/jimmunol.1602142" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-2 block">View Publication →</a>
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
