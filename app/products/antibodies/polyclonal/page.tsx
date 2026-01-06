import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';

export default function PolyclonalAntibodiesPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
              Polyclonal Antibodies (PAbs)
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed font-light">
                Polyclonal antibodies (PAbs) are obtained using a mixture of immunoglobulin molecules secreted against a specific antigen, each recognizing a different epitope making them more tolerant to small changes in the structure of the antigen. PAbs are preferable for neutralization because they target a variety of specific epitopes of a particular antigen.
              </p>
              <p className="leading-relaxed font-light">
                PBL's PAbs are available for use in a range of applications including ELISA, neutralization assays, western blotting, flow cytometry, immunoprecipitation, and immunohistochemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle and Sub-Categories Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8">
            Polyclonal Antibodies to Interferon Species and Subtypes
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Anti-Human IFN PAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/polyclonal/anti-human-ifn" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-2 group-hover:text-secondary-teal transition-colors">
                  Anti-Human IFN PAbs
                </h2>
              </Link>
              <p className="text-secondary-teal text-lg font-medium mb-6">Anti-Human Interferon Polyclonal Antibodies</p>
            </div>

            {/* Anti-Mouse IFN PAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/polyclonal/anti-mouse-ifn" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-2 group-hover:text-secondary-teal transition-colors">
                  Anti-Mouse IFN PAbs
                </h2>
              </Link>
              <p className="text-secondary-teal text-lg font-medium mb-6">Anti-Mouse Interferon Polyclonal Antibodies</p>
            </div>

            {/* Anti-Rat IFN PAbs Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/antibodies/polyclonal/anti-rat-ifn" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-2 group-hover:text-secondary-teal transition-colors">
                  Anti-Rat IFN PAbs
                </h2>
              </Link>
              <p className="text-secondary-teal text-lg font-medium mb-6">Anti-Rat Interferon Polyclonal Antibodies</p>
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

