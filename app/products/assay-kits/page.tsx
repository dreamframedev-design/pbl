import Link from 'next/link';
import Image from 'next/image';
import FloatingCTA from '@/components/FloatingCTA';

export default function AssayKitsPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/15.webp"
            alt="Assay Kits header background"
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
              High-performance IFN & Cytokine ELISA Kits are Characterized to
              Provide You with Reliability and Accuracy
            </h1>
          </div>
        </div>
      </section>

      {/* Three-Category Grid Section */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cell-Based Assays Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                Cell-Based Assays
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                Reporter gene cells for measuring interferon bioactivity and
                neutralizing antibodies in research applications.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/assay-kits/cell-based-assays"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    iLite Human Type I IFN Responsive Cells for bioactivity
                    measurement
                  </span>
                </Link>
              </div>
            </div>

            {/* Interferon (IFN) ELISAs Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                Interferon (IFN) ELISAs
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                Immunoassays for the detection and quantification of Type I and
                III IFN in various species.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/assay-kits/interferon-elisas/human"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human Interferon ELISAs
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/mouse"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Mouse Interferon ELISAs
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interferon-elisas/non-human"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Non-Human Interferon ELISAs
                  </span>
                </Link>
              </div>
            </div>

            {/* Interleukin (IL) ELISAs Card */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                Interleukin (IL) ELISAs
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                High-sensitivity ELISA kits for accurate quantification of
                interleukins in serum, plasma, and tissue culture media.
              </p>

              <div className="space-y-3">
                <Link
                  href="/products/assay-kits/interleukin-elisas/human-il-15"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human IL-15 ELISA
                  </span>
                </Link>
                <Link
                  href="/products/assay-kits/interleukin-elisas/human-il-22"
                  className="block p-4 rounded-lg bg-background-offwhite hover:bg-accent-cyan/10 hover:border-accent-cyan/30 border-2 border-transparent transition-all duration-300 group/item"
                >
                  <span className="text-primary-navy font-medium group-hover/item:text-secondary-teal transition-colors">
                    Human IL-22 ELISA
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
