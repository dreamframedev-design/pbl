import Link from 'next/link';
import Image from 'next/image';
import FloatingCTA from '@/components/FloatingCTA';

export default function ProteinsPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/16.webp"
            alt="Proteins header background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              With over 30 years of experience developing and manufacturing
              recombinant proteins for life science research, our manufacturing
              and quality standards ensure that our proteins exhibit{' '}
              <strong>lot-to-lot consistency</strong>, as well as high levels of{' '}
              <strong>bioactivity</strong>, high <strong>purity</strong>, and{' '}
              <strong>low endotoxin</strong> levels.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Many of our proteins are sold as units of <strong>activity</strong>{' '}
            per vial instead of in units of mass per vial (µg or mg). Each new
            lot of protein is tested internally using the same bioassay to
            provide a valid activity comparison between lots. (ED<sub>50</sub> is
            the amount of protein required to elicit a 50% maximum response in
            the bioassay.) Providing our proteins by activity instead of mass
            ensures that your results are biologically relevant.
          </p>
        </div>
      </section>

      {/* Three-Category Grid Section */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cytokines and Growth Factors Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/cytokines-growth-factors" className="block cursor-pointer">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Cytokines and Growth Factors
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                PBL offers a comprehensive range of recombinant cytokines and
                growth factors for life science research applications.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/proteins/cytokines-growth-factors/ecoli-cho-expressed"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    E.coli & CHO Expressed Cytokine & Growth Factor
                  </span>
                </Link>
                <Link
                  href="/products/proteins/cytokines-growth-factors/human-cell-expressed"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human Cell-Expressed Cytokines
                  </span>
                </Link>
              </div>
            </div>

            {/* Interferon Decoy Receptor Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/interferon-decoy-receptor" className="block cursor-pointer">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Interferon Decoy Receptor
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                Specialized proteins for interferon research and neutralization
                applications.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/proteins/interferon-decoy-receptor"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein
                  </span>
                </Link>
              </div>
            </div>

            {/* Interferon Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/proteins/interferons" className="block cursor-pointer">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Interferon
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                Comprehensive collection of interferon proteins across multiple
                species for research applications.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/proteins/interferons/human"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human IFN Proteins
                  </span>
                </Link>
                <Link
                  href="/products/proteins/interferons/rat"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Rat IFN Proteins
                  </span>
                </Link>
                <Link
                  href="/products/proteins/interferons/mouse"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mouse IFN Proteins
                  </span>
                </Link>
                <Link
                  href="/products/proteins/interferons/mammalian"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mammalian IFN Proteins (Non-Human, Non-Mouse)
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
