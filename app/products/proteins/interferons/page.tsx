import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';

export default function InterferonsPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
              Interferons
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              PBL offers a range of interferons from different species and of different classes including multiple IFN-Alpha and IFN-Beta subtypes. Our interferons are high purity, provide consistent performance and biological activity, and are suitable for use in a range of research applications.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Categories Grid - Internal Navigation */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Human IFN Proteins Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/interferons/human" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Human IFN Proteins
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Human Interferon proteins for Type I, II and III.
              </p>
              <div className="space-y-2">
                <Link
                  href="/products/proteins/interferons/human/ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item flex items-center"
                >
                  <span className="mr-2">→</span>
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">Human IFN-Alpha</span>
                </Link>
                <Link
                  href="/products/proteins/interferons/human/ifn-beta"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item flex items-center"
                >
                  <span className="mr-2">→</span>
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">Human IFN-Beta</span>
                </Link>
                <Link
                  href="/products/proteins/interferons/human/other"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item flex items-center"
                >
                  <span className="mr-2">→</span>
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">Other Human IFNs</span>
                </Link>
              </div>
            </div>

            {/* Mouse IFN Proteins Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/interferons/mouse" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Mouse IFN Proteins
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Mouse Interferon Alpha, Beta, and Lambda proteins.
              </p>
              <div className="space-y-2">
                <Link
                  href="/products/proteins/interferons/mouse/ifn-alpha"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item flex items-center"
                >
                  <span className="mr-2">→</span>
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">Mouse IFN-Alpha</span>
                </Link>
                <Link
                  href="/products/proteins/interferons/mouse/ifn-beta"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item flex items-center"
                >
                  <span className="mr-2">→</span>
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">Mouse IFN-Beta</span>
                </Link>
                <Link
                  href="/products/proteins/interferons/mouse/ifn-lambda"
                  className="block p-3 rounded-lg bg-white hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item flex items-center"
                >
                  <span className="mr-2">→</span>
                  <span className="text-sm text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">Mouse IFN-Lambda</span>
                </Link>
              </div>
            </div>

            {/* Mammalian IFN Proteins Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/interferons/mammalian" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Mammalian IFN Proteins (Non-Human, Non-Mouse)
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Cynomolgus, Rhesus, Feline, Porcine, and Bovine Interferon proteins.
              </p>
            </div>

            {/* Rat IFN Proteins Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/interferons/rat" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Rat IFN Proteins
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6 text-sm">
                Type I and II rat interferon proteins for life science research.
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

