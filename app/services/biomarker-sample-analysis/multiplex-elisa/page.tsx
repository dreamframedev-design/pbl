import Link from 'next/link';

export default function MultiplexElisaAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Sample Analysis</span> <span className="text-gray-300">/</span> <span>Multiplex ELISA</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Multiplex ELISA</span> <br/> <span className="font-light text-gray-400 font-serif italic">Assay Services</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Cost-effective multiplex protein biomarker screening using chemiluminescent detection for simultaneous measurement of multiple analytes.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Quansys Bioscience Q-Plex™ Multiplex ELISA Services
            </h2>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <ul className="text-gray-700 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>
                  Cost-effective multiplex protein biomarker screening using
                  chemiluminescent detection
                </li>
                <li>
                  Available panels allow rapid evaluation of cytokine,
                  inflammatory, enteric, and angiogenesis markers
                </li>
                <li>
                  Service executed under fit-for-purpose guidelines allowing
                  client customization
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
              PBL's cost-effective multiplex ELISA service enables simultaneous
              measurement of multiple analytes in individual sample. These
              panels allow an understanding of the immune and other markers in
              study samples stemming particularly from oncology and autoimmunity
              programs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
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

            <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
              Key Features offered by Q-Plex™ Multiplex ELISA Platform
            </h3>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <ul className="text-gray-700 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>Up to 20 analytes can be measured in a single sample</li>
                <li>
                  96-well plate ELISA format allows simultaneous analysis of up
                  to 80 samples in a single run
                </li>
                <li>
                  Reliable assay with &lt;20% CV in serum, plasma, cell culture
                  media, and other matrices
                </li>
                <li>
                  Small volumes of only 50 ul required to quantify all analytes
                  in a single assay
                </li>
                <li>
                  Extensive chemokine and cytokine panels available for human,
                  mouse, rat, non-human primate, and other species
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 font-light italic mb-8">
              Powered by Quansys Biosciences' Q-Plex™ technology, Logan, Utah.
            </p>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <h4 className="text-lg font-semibold text-primary-navy mb-4">
                Citation
              </h4>
              <ol className="text-sm text-gray-700 font-light space-y-2 list-decimal list-inside">
                <li>
                  Krupp K.T. <em>et al.</em>, (2024), "Single administration of
                  a psychedelic [(R)-DOI] influences coping strategies to an
                  escapable social stress", <em>Neuropharmacology</em>, PMID:
                  38636726, DOI:{' '}
                  <a
                    href="https://doi.org/10.1016/j.neuropharm.2024.109949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1016/j.neuropharm.2024.109949
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
