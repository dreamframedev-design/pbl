import Link from 'next/link';
import BannerHero from '@/components/BannerHero';

export default function SmcAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BannerHero 
        title="SMC Assay Services"
      />

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

      {/* Bottom CTA */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              href="/speak-to-a-scientist"
              className="inline-flex items-center justify-center px-10 py-5 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out text-lg"
            >
              Talk to a Scientist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
