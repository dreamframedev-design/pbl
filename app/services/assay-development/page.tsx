import Image from 'next/image';
import Link from 'next/link';

export default function AssayDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/18.webp"
            alt="Assay Development Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Assay Development
            </h1>
          </div>
        </div>
      </section>

      {/* Three-Box Service Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Box 1: Cell-Based Assay Development */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                Cell-Based Assay Development
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Cell-based assay development services offered, but not limited to, include:
              </p>
              <ul className="text-gray-700 leading-relaxed font-light space-y-3 list-disc list-inside flex-grow">
                <li>Custom cytopathic effect, anti-proliferative, and growth promotion assays</li>
                <li>Development of reporter gene systems or identification of cell lines to monitor activity of the compound of interest</li>
                <li>Neutralization of bioactivity by antibodies which is relevant to identification of bioactive monoclonal antibodies (MAbs) and monitoring of immunogenicity</li>
              </ul>
            </div>

            {/* Box 2: Immunoassay Development */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                Immunoassay Development
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Custom immunoassays and ELISAs to support:
              </p>
              <ul className="text-gray-700 leading-relaxed font-light space-y-3 list-disc list-inside flex-grow">
                <li>Pharmacokinetic and pharmacodynamic studies</li>
                <li>Toxicity and immunogenicity studies</li>
                <li>Direct, sandwich, or competitive ELISA assay development</li>
              </ul>
            </div>

            {/* Box 3: Assay Optimization Service */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                Assay Optimization Service
              </h3>
              <ul className="text-gray-700 leading-relaxed font-light space-y-3 list-disc list-inside flex-grow">
                <li>Specificity and cross-reactivity assessment</li>
                <li>Analytic and dynamic range optimization</li>
                <li>Reduction of matrix effects (serum, plasma, tissue culture media)</li>
                <li>Reduction of inter- and intra-assay variability</li>
                <li>Standard calibration</li>
                <li>Assay stability assessment</li>
                <li>Protocol optimization</li>
              </ul>
            </div>
          </div>

          {/* Bottom Sentence */}
          <div className="max-w-7xl mx-auto text-center pt-8 border-t border-gray-200">
            <p className="text-lg md:text-xl text-gray-700 font-light italic">
              Multiple developed assays have been transferred to regulated environments.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-to-br from-background-periwinkle/20 via-white to-background-lavender/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Link
            href="/speak-to-a-scientist"
            className="btn-primary"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}

