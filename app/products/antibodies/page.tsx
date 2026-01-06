import Link from 'next/link';
import Image from 'next/image';
import FloatingCTA from '@/components/FloatingCTA';

export default function AntibodiesPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/14.webp"
            alt="Antibodies header background"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
              PBL Offers Monoclonal and Polyclonal Antibodies From Multiple
              Mammalian Species
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-4">
            Monoclonal and polyclonal antibodies are often interchangeable;
            however in some applications, one or the other antibody will give a
            better result.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-4">
            Monoclonal antibodies (MAbs) are monospecific antibodies that are
            the same because they are made by identical immune cells that are
            all clones of a unique parent cell. MAbs have monovalent affinity,
            in that they bind to the same epitope and offer high specificity in
            applications such as ELISA, flow cytometry or epitope mapping where
            specific binding is desirable.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            PBL's MAbs are derived against a range of interferons from various
            mammalian species. They deliver superior product stability and high
            specificity while providing reliable and reproducible results.
          </p>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Monoclonal Antibodies Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/monoclonal" className="block cursor-pointer">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Monoclonal Antibodies
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Monoclonal antibodies (MAbs) are monospecific antibodies that
                are the same because they are made by identical immune cells
                that are all clones of a unique parent cell. MAbs have
                monovalent affinity, in that they bind to the same epitope and
                offer high specificity in applications such as{' '}
                <strong>ELISA</strong>, <strong>flow cytometry</strong> or{' '}
                <strong>epitope mapping</strong> where specific binding is
                desirable.
              </p>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                PBL's MAbs are derived against a range of interferons from
                various mammalian species. They deliver superior{' '}
                <em>product stability</em> and <em>high specificity</em> while
                providing <em>reliable</em> and <em>reproducible results</em>.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/antibodies/monoclonal/anti-human-ifn"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Anti-Human IFN MAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/monoclonal/anti-mouse-ifn"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Anti-Mouse IFN MAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/monoclonal/anti-porcine-ifn"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Anti-Porcine IFN MAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/monoclonal/labeled"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Labeled Anti-IFN MAbs (Human, Mouse)
                  </span>
                </Link>
              </div>
            </div>

            {/* Polyclonal Antibodies Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/polyclonal" className="block cursor-pointer">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Polyclonal Antibodies
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Polyclonal antibodies (PAbs) are obtained using a mixture of
                immunoglobulin molecules secreted against a specific antigen,
                each recognizing a different epitope making them more tolerant
                to small changes in the structure of the antigen. PAbs are
                preferable for neutralization because they target a variety of
                specific epitopes of a particular antigen.
              </p>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                PBL's PAbs are available for use in a range of applications
                including <strong>ELISA</strong>,{' '}
                <strong>neutralization assays</strong>,{' '}
                <strong>western blotting</strong>, <strong>flow cytometry</strong>,{' '}
                <strong>immunoprecipitation</strong>, and{' '}
                <strong>immunohistochemistry</strong>.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/antibodies/polyclonal/anti-human-ifn"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Anti-Human IFN PAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/polyclonal/anti-mouse-ifn"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Anti-Mouse IFN PAbs
                  </span>
                </Link>
                <Link
                  href="/products/antibodies/polyclonal/anti-rat-ifn"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Anti-Rat IFN PAbs
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
