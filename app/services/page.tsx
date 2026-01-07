import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/17.webp"
            alt="ASSAY SERVICES"
            fill
            className="object-cover image-shadow-lg"
            priority
          />
        </div>

        {/* ASSAY SERVICES Title on Image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide drop-shadow-sm">
            <span className="text-[#002776]">ASSAY</span> <span className="text-[#04849C]">SERVICES</span>
          </h1>
        </div>

        {/* Content Below Image */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 lg:pb-20 mt-auto pt-32 lg:pt-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-sm">
              <span className="text-[#002776]">Let Us Do It</span> <span className="text-[#04849C]">For You</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Assay Development */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">AD</div>
                </div>
                <Link href="/services/assay-development" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Assay Development
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8 flex-grow">
                  Immunoassay Design & Development from Antibody Screening &
                  Proof-of-Concept Feasibility to Validation & Characterization.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services/assay-development"
                    className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    View Services <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Biomarker Sample Analysis */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">BSA</div>
                </div>
                <Link href="/services/biomarker-sample-analysis" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Biomarker Sample Analysis
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8 flex-grow">
                  Sensitive biomarker detection on a variety of singleplex and
                  multiplex assay platforms (MSD, Simoa®, Erenna®, SMCxPRO®,
                  ELISA), from one sample to thousands.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services/biomarker-sample-analysis"
                    className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    View Services <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cell-Based Services */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">CBS</div>
                </div>
                <Link href="/services/cell-based-services" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Cell-Based Services
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8 flex-grow">
                  Assays measuring Cytokine & Chemokine Bioactivity, Cytokine
                  Release, NAb Activity, Proliferation & Anti-Proliferation,
                  Antiviral Activity including CPE inhibition assays.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services/cell-based-services"
                    className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    View Services <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom Production */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">CP</div>
                </div>
                <Link href="/services/custom-production" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Custom Production
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8 flex-grow">
                  Expression, Purification & Characterization of Proteins &
                  Monoclonals; Antibody & Protein Labeling; Immunoassay (ELISA)
                  Manufacturing.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services/custom-production"
                    className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    View Services <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Antibody Characterization Service */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">ACS</div>
                </div>
                <Link href="/services/antibody-characterization" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Antibody Characterization Service
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8 flex-grow">
                  Real-time BLI-based biophysical characterization of antibody
                  affinities, association/dissociation rates, epitope binning, and
                  antibody screening for specific applications.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/services/antibody-characterization"
                    className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    View Services <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-gradient-to-br from-background-lavender/20 via-white to-background-periwinkle/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-headline-primary mb-12 lg:mb-16 text-center">
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
