import Link from 'next/link';
import Image from 'next/image';
import FloatingCTA from '@/components/FloatingCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/17.webp"
            alt="ASSAY SERVICES"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
        </div>

        {/* ASSAY SERVICES Title on Image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-navy uppercase tracking-wide">
            ASSAY SERVICES
          </h1>
        </div>

        {/* Content Below Image */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 lg:pb-20 mt-auto pt-32 lg:pt-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy leading-tight">
              Let Us Do It For You
            </h2>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Assay Development */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Assay Development
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Immunoassay Design & Development from Antibody Screening &
                Proof-of-Concept Feasibility to Validation & Characterization.
              </p>
              <Link
                href="/services/assay-development"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit group/link"
              >
                <span>Find Out More</span>
              </Link>
            </div>

            {/* Biomarker Sample Analysis */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Biomarker Sample Analysis
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Sensitive biomarker detection on a variety of singleplex and
                multiplex assay platforms (MSD, Simoa®, Erenna®, SMCxPRO®,
                ELISA), from one sample to thousands.
              </p>
              <Link
                href="/services/biomarker-sample-analysis"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit group/link"
              >
                <span>Find Out More</span>
              </Link>
            </div>

            {/* Cell-Based Services */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Cell-Based Services
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Assays measuring Cytokine & Chemokine Bioactivity, Cytokine
                Release, NAb Activity, Proliferation & Anti-Proliferation,
                Antiviral Activity including CPE inhibition assays.
              </p>
              <Link
                href="/services/cell-based-services"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit group/link"
              >
                <span>Find Out More</span>
              </Link>
            </div>

            {/* Custom Production */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Custom Production
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Expression, Purification & Characterization of Proteins &
                Monoclonals; Antibody & Protein Labeling; Immunoassay (ELISA)
                Manufacturing.
              </p>
              <Link
                href="/services/custom-production"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit group/link"
              >
                <span>Find Out More</span>
              </Link>
            </div>

            {/* Antibody Characterization Service */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Antibody Characterization Service
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Real-time BLI-based biophysical characterization of antibody
                affinities, association/dissociation rates, epitope binning, and
                antibody screening for specific applications.
              </p>
              <Link
                href="/services/antibody-characterization"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit group/link"
              >
                <span>Find Out More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Hrbtr5JGQhA"
              title="The PBL Difference"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.pblassaysci.com/sites/default/files/document/2022-06/assay_services_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Download Our Services Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose PBL Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-12 lg:mb-16 text-center">
            Why Choose PBL?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Cost-Effective */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary-teal mb-4">
                Cost-Effective
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                As a non-regulated bioanalytical lab that grew out of an
                immunoassay manufacturing company, we do not carry the overhead
                of regulated CROs. We have experience transferring assays for
                validation in a regulated environment.
              </p>
            </div>

            {/* Shorter Timelines */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary-teal mb-4">
                Shorter Timelines
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                As a nimble small business, we have the flexibility to start
                your project with minimal delay and complete work efficiently.
                We are listed on Scientist.com and ScienceExchange to expedite
                the onboarding process.
              </p>
            </div>

            {/* Depth of Understanding */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary-teal mb-4">
                Depth of Understanding
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                With 3 decades of experience developing highly sensitive and
                specific assays, we understand the difficulties you face. Our
                experts take the time to understand what you want to accomplish
                and guide your project from beginning to end.
              </p>
            </div>

            {/* High Quality */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-teal/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-secondary-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary-teal mb-4">
                High Quality
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Clients have come to rely upon PBL's defining company
                characteristics: our high performance standards and the
                professionalism of our approach. We have successfully completed
                hundreds of Assay Services projects for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              href="/speak-to-a-scientist"
              className="inline-flex items-center justify-center px-10 py-5 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out text-lg"
            >
              Speak to a Scientist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
