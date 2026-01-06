import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';

export default function MonoclonalAntibodiesPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
              Monoclonal Antibodies (MAbs)
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed font-light">
                Monoclonal and polyclonal antibodies are often interchangeable; however in some applications, one or the other antibody will give a better result.
              </p>
              <p className="leading-relaxed font-light">
                Monoclonal antibodies (MAbs) are monospecific antibodies that are the same because they are made by identical immune cells that are all clones of a unique parent cell. MAbs have monovalent affinity, in that they bind to the same epitope and offer high specificity in applications such as <strong>ELISA</strong>, <strong>flow cytometry</strong> or <strong>epitope mapping</strong> where specific binding is desirable.
              </p>
              <p className="leading-relaxed font-light">
                PBL's MAbs are derived against a range of interferons from various mammalian species. They deliver superior <em>product stability</em> and <em>high specificity</em> while providing <em>reliable</em> and <em>reproducible results</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle and Sub-Categories Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8">
            Monoclonal Antibodies to Interferon Species and Subtypes
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Anti-Human IFN MAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/monoclonal/anti-human-ifn" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-3 group-hover:text-secondary-teal transition-colors">
                  Anti-Human IFN MAbs
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Anti-Human Interferon Monoclonal Antibodies
              </p>
              <div className="space-y-2">
                <Link
                  href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors flex items-center">
                    <span className="mr-2">→</span>
                    Anti-Human IFN-Alpha MAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-beta"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors flex items-center">
                    <span className="mr-2">→</span>
                    Anti-Human IFN-Beta MAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-receptor"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors flex items-center">
                    <span className="mr-2">→</span>
                    Anti-Human IFN Receptor MAbs
                  </span>
                </Link>
              </div>
            </div>

            {/* Anti-Mouse IFN MAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/monoclonal/anti-mouse-ifn" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-3 group-hover:text-secondary-teal transition-colors">
                  Anti-Mouse IFN MAbs
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Anti-Mouse Interferon Monoclonal Antibodies
              </p>
            </div>

            {/* Anti-Porcine IFN MAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/monoclonal/anti-porcine-ifn" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-3 group-hover:text-secondary-teal transition-colors">
                  Anti-Porcine IFN MAbs
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Anti-Porcine Interferon Monoclonal Antibodies
              </p>
            </div>

            {/* Labeled Anti-IFN MAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/monoclonal/labeled" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-3 group-hover:text-secondary-teal transition-colors">
                  Labeled Anti-IFN MAbs
                </h2>
                <p className="text-primary-navy font-bold mb-3">(Human, Mouse)</p>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Labeled Monoclonal Antibodies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-background-offwhite">
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

