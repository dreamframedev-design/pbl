import Link from 'next/link';
import Image from 'next/image';
import TestimonialsSlider from '@/components/TestimonialsSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.webp"
            alt="Ribbon background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col justify-between min-h-[600px] lg:min-h-[700px] py-16 lg:py-24">
            {/* Headline - Top Left */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
                Fit-for-purpose assay development, customization and execution.
              </h1>
            </div>

            {/* CTAs - Bottom of Hero */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="relative z-10">Products</span>
                <div className="absolute inset-0 bg-primary-navy rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-primary-navy font-medium rounded-xl border-2 border-primary-navy shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                <span className="relative z-10">Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tailored Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/2.webp"
                alt="Scientist in lab"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
                Tailored Services that Meet Your Needs
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                At PBL our 3 decades of assay development experience mean we
                deeply understand the technical challenges you face. Our
                Bioanalytical Services solutions combine subject matter expertise
                with high performance standards, short timelines and cost-effective
                pricing.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-navy mb-1">
                    X
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    days to study start
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-navy mb-1">
                    X%
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    client retention rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-navy mb-1">
                    X
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    projects completed
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/speak-to-a-scientist"
                className="group inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out w-fit"
              >
                Speak to a Scientist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Products that Won't Let You Down */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/3.webp"
                alt="PBL Assay Box"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
                Products that Won't Let You Down
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                PBL products are developed with real-world biology in mind. We
                support you with assays and reagents, i.e., proteins and
                antibodies, that are high quality, consistent and reliable, three
                reasons why our products are frequently cited and validated. Need
                help? We also provide detailed technical information and product
                support, from our scientists to yours.
              </p>

              {/* Featured Products List */}
              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal"></div>
                  </div>
                  <span className="text-gray-700 font-light">Optimized for Variability</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal"></div>
                  </div>
                  <span className="text-gray-700 font-light">High Sensitivity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal"></div>
                  </div>
                  <span className="text-gray-700 font-light">Accurate Quantification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-teal/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal"></div>
                  </div>
                  <span className="text-gray-700 font-light">Full-spec Assay Range and LLOQ</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/products"
                className="group inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out w-fit"
              >
                Go to Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Let Us Do It For You */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-12 lg:mb-16 text-center">
            Let Us Do It For You
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bioanalytical Testing */}
            <div className="group">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/4.webp"
                  alt="Bioanalytical Testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Bioanalytical Testing
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                At PBL we expedite your R&D work by adhering to fit-for-purpose
                guidelines and generating only the data you need. Our team is an
                extension of yours. Our assays are validated under ICH M10
                guidelines and support discovery, pre-clinical studies, and
                exploratory clinical trial endpoints.
              </p>
            </div>

            {/* Assay Development */}
            <div className="group">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/5.webp"
                  alt="Assay Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Assay Development
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                PBL develops assays for research use or to a standard that will
                support GLP validation - the choice is yours. We support
                cell-based assay development, immunoassay development and assay
                optimization. Wherever you are in the research journey, our team
                is here to work alongside you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Quality Products */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-12 lg:mb-16 text-center">
            Quality Products You Won't Find Anywhere Else
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Product 1 */}
            <Link
              href="/assay-kits/human-il-15-elisa-kit-high-sensitivity-serum-plasma-tcm-41702"
              className="group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/6.webp"
                  alt="Total Human IL-15 ELISA Kit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-primary-navy font-medium group-hover:text-secondary-teal transition-colors">
                Total Human IL-15 ELISA Kit
              </p>
            </Link>

            {/* Product 2 */}
            <Link
              href="/assay-kits/elisas/human-interferon-elisas/human-ifn-alpha-elisas"
              className="group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/7.webp"
                  alt="Human IFN Alpha ELISA Kits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-primary-navy font-medium group-hover:text-secondary-teal transition-colors">
                Human IFN Alpha ELISA Kits
              </p>
            </Link>

            {/* Product 3 */}
            <Link
              href="/assay-kits/elisas/mouse-interferon-elisas/mouse-ifn-beta-elisas"
              className="group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/8.webp"
                  alt="Mouse IFN-Beta ELISAs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-primary-navy font-medium group-hover:text-secondary-teal transition-colors">
                Mouse IFN-Beta ELISAs
              </p>
            </Link>

            {/* Product 4 */}
            <Link
              href="/proteins/human-ifn-alpha-alpha2a-11100"
              className="group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/9.webp"
                  alt="Human IFN-Alpha 2a (Alpha A) Protein"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-primary-navy font-medium group-hover:text-secondary-teal transition-colors">
                Human IFN-Alpha 2a (Alpha A) Protein
              </p>
            </Link>

            {/* Product 5 */}
            <Link
              href="/antibodies/human-type-1-ifn-neutralizing-antibody-mixture-39000"
              className="group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/10.webp"
                  alt="Human Type I IFN Neutralizing Antibody Mixture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-primary-navy font-medium group-hover:text-secondary-teal transition-colors">
                Human Type I IFN Neutralizing Antibody Mixture
              </p>
            </Link>

            {/* Product 6 */}
            <Link
              href="/proteins/human-interleukin-15-il15ra-heterodimer-human-cell-expressed-11702"
              className="group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/11.webp"
                  alt="Human Interleukin 15 / IL-15Rα Heterodimer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-primary-navy font-medium group-hover:text-secondary-teal transition-colors">
                Human Interleukin 15 / IL-15Rα Heterodimer
              </p>
            </Link>
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-12 lg:mb-16 text-center">
              Don't Take Our Word For It
            </h2>

            {/* Testimonials Slider */}
            <div className="py-8">
              <TestimonialsSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              href="/speak-to-a-scientist"
              className="group inline-flex items-center justify-center px-10 py-5 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out text-lg"
            >
              Talk to a Scientist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

