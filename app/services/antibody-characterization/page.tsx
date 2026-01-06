import Image from 'next/image';
import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';

export default function AntibodyCharacterizationPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/21.webp"
            alt="Antibody Characterization Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Antibody Characterization Service
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction & Feature Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Biophysical Characterization Services
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Affinity Characterization */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Affinity Characterization
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Real-time BLI-based (Bio-layer Interferometry) biophysical characterization of polyclonal and monoclonal antibody affinities (K<sub>d</sub>) for antigen. Comprehensive assessment of antibody-antigen specificity and affinity through advanced biophysical analysis.
              </p>
            </div>

            {/* Association & Dissociation Rates */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Kinetic Analysis
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Quantification of K<sub>on</sub> and K<sub>off</sub> rates for many antibody/antigen pairs underlying their dissociation constants. Detailed measurement of association and dissociation rates of protein-protein interactions.
              </p>
            </div>

            {/* Epitope Binning */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Epitope Binning
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Epitope binning based upon antibody binding to non-overlapping epitopes. Identification of antibodies that bind to distinct regions of the antigen, enabling optimal assay development and therapeutic design.
              </p>
            </div>

            {/* Antibody Screening */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Biophysical Profiling
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Antibody screening to reveal appropriate biophysical profiles for specific applications. Comprehensive characterization services to identify antibodies with optimal properties for your research and development needs.
              </p>
            </div>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                With a wealth of knowledge on immunological interactions, we offer protein biophysical characterization services which can determine the kinetic characterization of protein-protein interactions. PBL offers biophysical characterization of antibody affinity for a ligand or the measurement of antigen:antibody K<sub>on</sub>/K<sub>off</sub> rates.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                To accelerate assay development, we also determine which antibodies bind to antigens in a sandwich format. Binning—determination of antibodies which bind to non-overlapping epitopes—is performed using multiple hybridoma clones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLI Graph Data Showcase */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Bio-Layer Interferometry (BLI) Analysis
            </h2>
            
            {/* Graph Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 border-2 border-gray-200">
                <div className="text-center">
                  <p className="text-gray-500 font-light mb-2">BLI Association/Dissociation Graph</p>
                  <p className="text-sm text-gray-400">[Graph showing IFN binding to surface-immobilized antibody]</p>
                  <p className="text-xs text-gray-400 mt-2">Raw data (blue) • Model response (red)</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed font-light text-center">
                The graph shows the association and dissociation of IFN to a surface-immobilized antibody as determined by real time Biolayer Interferometry (BLI) using varying concentrations of IFN. The raw data is shown in blue and the model response in red. IFN Binding to and Dissociation from a Surface-Immobilized Monoclonal Antibody Evaluated by Bio-Layer Interferometry (BLI).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}

