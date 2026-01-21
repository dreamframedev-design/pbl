import Image from 'next/image';
import Link from 'next/link';

export default function AssayDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/18.webp"
            alt="Assay Development"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span className="break-words">Assay Development</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Assay</span> <br/> <span className="font-light text-gray-400 font-serif italic">Development</span>
          </h1>
        </div>
      </header>

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

      {/* Bottom CTA Section */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}

