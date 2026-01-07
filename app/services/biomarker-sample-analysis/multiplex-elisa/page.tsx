import Link from 'next/link';
import BannerHero from '@/components/BannerHero';

export default function MultiplexElisaAssayServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BannerHero 
        title="Multiplex ELISA Assay Services"
      />

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
