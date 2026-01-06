import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';

export default function InterferonElisasPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
              Interferon (IFN) ELISA Kits
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
              PBL Assay Science's Interferon (IFN) ELISA kits are designed to provide accurate and reproducible quantitation of IFNs in samples from human, mouse, and other species. They have been cited in high impact journals by IFN & Cytokine researchers for over three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Category Grid with Nested Sub-Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Human Interferon ELISAs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/assay-kits/interferon-elisas/human">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 hover:text-secondary-teal transition-colors cursor-pointer">
                  Human Interferon ELISAs
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                ELISA kits target various <strong>human interferon analytes</strong>. Kits range in <em>sensitivity</em> and <em>matrix compatibility</em>.
              </p>

              <div className="space-y-2">
                <Link
                  href="/products/assay-kits/interferon-elisas/human/ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human IFN-Alpha ELISA Kits
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/human/ifn-beta"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human IFN-Beta ELISA Kits
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/human/ifn-gamma-receptor"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human IFN-Gamma Receptor ELISA
                  </span>
                </Link>
              </div>
            </div>

            {/* Mouse Interferon ELISAs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/assay-kits/interferon-elisas/mouse">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 hover:text-secondary-teal transition-colors cursor-pointer">
                  Mouse Interferon ELISAs
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                ELISA kits targeting various <strong>mouse interferon analytes</strong>. Kits range in <em>sensitivity</em> and <em>matrix compatibility</em>.
              </p>

              <div className="space-y-2">
                <Link
                  href="/products/assay-kits/interferon-elisas/mouse/ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mouse IFN-Alpha ELISAs
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/mouse/ifn-beta"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mouse IFN-Beta ELISAs
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/mouse/ifn-lambda"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mouse IFN-Lambda ELISA
                  </span>
                </Link>
              </div>
            </div>

            {/* Non-Human Interferon ELISAs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/assay-kits/interferon-elisas/non-human">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 hover:text-secondary-teal transition-colors cursor-pointer">
                  Non-Human Interferon ELISAs
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                IFN ELISA kits target non-human (cynomolgus/rhesus, pig) analytes and provide accurate sample detection.
              </p>

              <div className="space-y-2">
                <Link
                  href="/products/assay-kits/interferon-elisas/non-human/cynomolgus-rhesus-ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Cynomolgus/Rhesus IFN-Alpha ELISA
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/non-human/pig-ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Pig IFN-Alpha ELISA
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/non-human/cynomolgus-ifn-beta"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Cynomolgus IFN-Beta ELISA
                  </span>
                </Link>
              </div>
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

