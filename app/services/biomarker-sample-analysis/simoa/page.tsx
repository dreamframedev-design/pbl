import Link from 'next/link';

export default function SimoaAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Sample Analysis</span> <span className="text-gray-300">/</span> <span>SIMOA</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">SIMOA Assay</span> <br/> <span className="font-light text-gray-400 font-serif italic">Services</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Single Molecule Array (Simoa) technology for ultrasensitive biomarker detection with femtogram per milliliter sensitivity.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Single Molecule Array (Simoa) Assay Services
            </h2>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <ul className="text-gray-700 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>Ultrasensitive fg/ml LLOQ for low abundance analyte quantitation</li>
                <li>
                  Robust immunoassays for Neurobiological Markers such as
                  Neurofilament Light Chain (NF-L), Amyloid peptides (Aβ), and
                  Tau protein
                </li>
                <li>
                  High precision digital ELISA provides accurate and
                  reproducible data
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Understanding the role of protein biomarkers in various disease
              states is essential, as are the most robust tools for examining
              your therapeutic candidates modulate these biomarkers. For your
              sample testing needs, PBL can help you measure your analyte(s) of
              interest that are in low abundance or in difficult matrices. Our
              scientists communicate with you building a transparent,
              collaborative environment and eliminating costly project missteps.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8 italic font-medium">
              We strive to be a partner you can trust
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
              Key Features offered by Simoa Platform
            </h3>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <ul className="text-gray-700 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>
                  Single well digital ELISA with femtogram per milliliter
                  (fg/ml) sensitivity for quantitation of many low abundance
                  analytes
                </li>
                <li>
                  Compatible with various sample matrices such as CSF, serum,
                  and plasma
                </li>
                <li>
                  Provides a high degree of precision, accuracy, and
                  reproducibility with &lt; 10% inter-assay CV and intra-assay
                  CV
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 font-light italic mb-8">
              Powered by Quanterix Single Molecule Array technology, Lexington,
              MA, U.S.A.
            </p>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <h4 className="text-lg font-semibold text-primary-navy mb-4">
                Citations
              </h4>
              <ol className="text-sm text-gray-700 font-light space-y-2 list-decimal list-inside">
                <li>
                  Murphy, D.P. <em>et al.</em>, (2024), "Chronic consequences
                  of ischemic stroke: Profiling brain injury and inflammation
                  in a mouse model with reperfusion", <em>Physiol Rep.</em>{' '}
                  12(12):e16118, PMID: 38923318, DOI:{' '}
                  <a
                    href="https://doi.org/10.14814/phy2.16118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.14814/phy2.16118
                  </a>
                </li>
                <li>
                  Yan, J. <em>et al.</em>, (2024), "Twin interface inhibitor
                  FP802 stops loss of motor neurons and mitigates disease
                  progression in a mouse model of ALS", <em>Cell Rep Med.</em>{' '}
                  101413, PMID: 38325382, DOI:{' '}
                  <a
                    href="https://doi.org/10.1016/j.xcrm.2024.101413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1016/j.xcrm.2024.101413
                  </a>
                </li>
                <li>
                  Loppi, S.H. <em>et al.</em>, (2023), "Increased fatty acid
                  metabolism and decreased glycolysis are hallmarks of metabolic
                  reprogramming within microglia in degenerating white matter
                  during recovery from experimental stroke", <em>J. Cerebral
                  Blood Flow & Metabolism</em>, 0(0):1, DOI:{' '}
                  <a
                    href="https://dx.doi.org/10.1177/0271678X231157298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1177/0271678X231147298
                  </a>
                </li>
                <li>
                  Giannisis, A. <em>et al.</em>, (2022), "Plasma apolipoprotein
                  E levels in longitudinally followed patients with mild
                  cognitive impairment and Alzheimer's disease",{' '}
                  <em>Alzheimer's Research & Therapy</em>, 14:115, DOI:{' '}
                  <a
                    href="https://doi.org/10.1186/s13195-022-01058-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1186/s13195-022-01058-9
                  </a>
                </li>
                <li>
                  Hay, M. <em>et al.</em> (2021), "Serum Neurofilament Light is
                  elevated in COVID-19 Positive Adults in the ICU and is
                  associated with Co-Morbid Cardiovascular Disease,
                  Neurologivcal Complications, and Acuity of Illness",{' '}
                  <em>Cardiol Cardiovasc Med.</em>, 5(5):551, DOI:{' '}
                  <a
                    href="https://doi.org/10.26502/fccm.92920221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.26502/fccm.92920221
                  </a>
                </li>
                <li>
                  Hoyer-Kimura, C. <em>et al.</em> (2021), "Neurofilament light:
                  a possible prognostic biomarker for treatment of vascular
                  contributions to cognitive impairment and dementia",{' '}
                  <em>J. Neuroinflammation</em>, 18(1):236, DOI:{' '}
                  <a
                    href="https://doi.org/10.1186/s12974-021-02281-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1186/s12974-021-02281-1
                  </a>
                </li>
                <li>
                  Chiappelli, J. <em>et al.</em>, (2018), "Influence of plasma
                  cytokines on kynurenine and kynurenic acid in schizophrenia",{' '}
                  <em>Neuropaschopharmacology</em>, 43:1675, DOI:{' '}
                  <a
                    href="https://doi.org/10.1038/s41386-018-0038-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1038/s41386-018-0038-4
                  </a>
                </li>
                <li>
                  Zanin-Zhorov, A. <em>et al.</em>, (2017), "Selective Oral
                  ROCK2 Inhibitor Reduces Clinical Scores in Patients with
                  Psoriasis Vulgaris and Normalizes Skin Pathology via
                  Concurrent Regulation of IL-17 and IL-10", <em>J. Immunol.</em>{' '}
                  198(10):3809, DOI:{' '}
                  <a
                    href="https://doi.org/10.4049/jimmunol.1602142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.4049/jimmunol.1602142
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}
