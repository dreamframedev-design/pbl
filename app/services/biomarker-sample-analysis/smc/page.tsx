import Link from 'next/link';

export default function SmcAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Sample Analysis</span> <span className="text-gray-300">/</span> <span>SMC</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">SMC Assay</span> <br/> <span className="font-light text-gray-400 font-serif italic">Services</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Single Molecule Counting (SMCxPRO® & Erenna®) technology for sub-picogram level measurements of low-abundance analytes.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              MilliporeSigma Single Molecule Counting (SMCxPRO® & Erenna®)
            </h2>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <ul className="text-gray-700 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>
                  Cytokine analysis utilizing Single Molecule Counting
                  technology enables sub-pg/ml sensitivity for accurate
                  measurement of low abundance biomarkers in normal or disease
                  sera/plasma
                </li>
                <li>
                  Minimal sample dilution requirement with 4-Log+ dynamic range
                </li>
                <li>
                  High precision cytokine immunoassays provide reproducible data
                </li>
                <li>
                  Extensive analyte menu of over 40 different cytokine assays
                  covering several disease areas including IFN-γ, IL-1a, IL-1b,
                  IL-4, IL-6, IL-8, IL-10, IL-13, IL-15, IL-17A, IL-17F,
                  IL-17 heterodimer, IL-23, GLP-1, and TNF-α
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
              Employing MilliporeSigma's <strong>Single Molecule Counting</strong>{' '}
              (SMC) technology with robust microparticle-based SMCxPRO® &
              Erenna® immunoassays, PBL's cytokine detection services can
              provide scientists with sub-pg/ml level measurements of
              low-abundance analytes in healthy or disease sera and plasma.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
              MilliporeSigma's SMC (Single Molecule Counting) technology in
              conjunction with robust microparticle (MP) based sandwich
              immunoassays enables accurate, high-precision baseline
              quantification of low-abundance analytes at or below
              sub-picogram concentrations. Accurately measuring low-abundance
              analytes present in complex matrices is essential for the
              profiling and characterization of cytokines and other biomarker
              analytes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
              An increased understanding of the role and regulation of cytokines
              in disease states results from greater profiling and
              characterization of their activities in biological responses. This
              technology can be instrumental in furthering our collective
              understanding of low-abundance cytokines in complex matrices.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
              Key Features offered by Single Molecule Counting Technology on
              SMCxPRO and Erenna Platforms
            </h3>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <ul className="text-gray-700 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>
                  Enables <strong>sub-pg/ml sensitivity</strong> for accurate
                  measurement of low abundance biomarkers in serum, plasma or
                  other complex matrices
                </li>
                <li>
                  Requires minimal sample dilution with a{' '}
                  <strong>4-Log+ dynamic range</strong>
                </li>
                <li>Provides high precision and reproducible data</li>
                <li>
                  Extensive analyte menu of over{' '}
                  <strong>30 different cytokine assays</strong> covering several
                  disease areas
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 font-light italic mb-8">
              Powered by SMCxPRO<sup>®</sup> & Erenna® Immunoassay Systems,
              MilliporeSigma Inc., Burlington, MA, USA.
            </p>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <p className="text-sm text-gray-600 font-light mb-2">
                <strong>Figure 1.</strong> Median levels of IL-1b (Interleukin
                1 Beta) in Plasma Samples (Heparin, Citrate and EDTA)
              </p>
            </div>

            <div className="bg-background-offwhite p-6 rounded-xl mb-8">
              <h4 className="text-lg font-semibold text-primary-navy mb-4">
                Citations
              </h4>
              <ol className="text-sm text-gray-700 font-light space-y-2 list-decimal list-inside">
                <li>
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
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1155/2023/9967747
                  </a>
                </li>
                <li>
                  Morita, A. <em>et al.</em>, (2022), "Effect of guselkumab on
                  serum biomarkers in Japanese palmoplanter pustulosis patients
                  in randomized phase 3 study", <em>JEADV Clinical Practice</em>,
                  DOI:{' '}
                  <a
                    href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/jvc2.73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-teal hover:text-primary-navy transition-colors"
                  >
                    10.1002/jvc2.73
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
