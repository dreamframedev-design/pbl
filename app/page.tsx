import Link from 'next/link';
import Image from 'next/image';
import TestimonialsSlider from '@/components/TestimonialsSlider';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero nice1.webp"
            alt="PBL Assay Science"
            fill
            className="object-cover object-center"
            priority
            style={{ objectPosition: 'center center' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-[1.1] text-[#002776]">
              Fit-for-purpose assay&nbsp;development, <span className="bg-gradient-to-r from-[#002776] to-[#058A9F] bg-clip-text text-transparent">customization and execution.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link
                href="/products"
                className="px-10 py-5 bg-[#002776] text-white rounded-full font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl shadow-blue-900/20 hover:scale-105"
              >
                Go to Products
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  color: '#002776'
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tailored Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/2.webp"
                  alt="Scientist in lab"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold mb-8 leading-tight text-[#002776]">
                Tailored Services that Meet Your Needs
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                At PBL our 3 decades of assay development experience mean we
                deeply understand the technical challenges you face. Our
                Bioanalytical Services solutions combine subject matter expertise
                with high performance standards, short timelines and cost-effective
                pricing.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-8 p-8 rounded-3xl mb-8" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <div>
                  <div className="text-4xl font-bold text-cyan-500 mb-1">
                    X
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    days to study start
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-500 mb-1">
                    X%
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    client retention rate
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-500 mb-1">
                    X
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    projects completed
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/speak-to-a-scientist"
                className="px-10 py-5 bg-[#002776] text-white rounded-full font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl shadow-blue-900/20 w-fit"
              >
                Speak to a Scientist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Products that Won't Let You Down */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/3.webp"
                  alt="PBL Assay Box"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-8 leading-tight text-[#002776]">
                Products that Won't Let You Down
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                PBL products are developed with real-world biology in mind. We
                support you with assays and reagents, i.e., proteins and
                antibodies, that are high quality, consistent and reliable, three
                reasons why our products are frequently cited and validated. Need
                help? We also provide detailed technical information and product
                support, from our scientists to yours.
              </p>

              {/* Featured Products List */}
              <div className="mb-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-600 font-light">Optimized for Variability</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-600 font-light">High Sensitivity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-600 font-light">Accurate Quantification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-600 font-light">Full-spec Assay Range and LLOQ</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/products"
                className="px-10 py-5 bg-[#002776] text-white rounded-full font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl shadow-blue-900/20 w-fit"
              >
                Go to Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Let Us Do It For You */}
      <section className="py-32 bg-[#F4F4F9]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-20 text-[#002776]">
            Let Us Do It For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bioanalytical Testing */}
            <div className="group p-2 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-inner">
                  <Image
                    src="/images/4.webp"
                    alt="Bioanalytical Testing"
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-[#002776]">
                  Bioanalytical Testing
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                  At PBL we expedite your R&D work by adhering to fit-for-purpose
                  guidelines and generating only the data you need. Our team is an
                  extension of yours. Our assays are validated under ICH M10
                  guidelines and support discovery, pre-clinical studies, and
                  exploratory clinical trial endpoints.
                </p>
              </div>
            </div>

            {/* Assay Development */}
            <div className="group p-2 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-inner">
                  <Image
                    src="/images/5.webp"
                    alt="Assay Development"
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-[#002776]">
                  Assay Development
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                  PBL develops assays for research use or to a standard that will
                  support GLP validation - the choice is yours. We support
                  cell-based assay development, immunoassay development and assay
                  optimization. Wherever you are in the research journey, our team
                  is here to work alongside you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Quality Products */}
      <section className="py-32 bg-white overflow-x-hidden" style={{ overflowY: 'visible' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-[#002776] to-[#058A9F] bg-clip-text text-transparent">
            Quality Products You Won't Find Anywhere Else
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {/* Product 1 */}
            <Link
              href="/assay-kits/human-il-15-elisa-kit-high-sensitivity-serum-plasma-tcm-41702"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl mb-6 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-2xl overflow-hidden relative" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <Image
                  src="/images/6.webp"
                  alt="Total Human IL-15 ELISA Kit"
                  fill
                  className="object-cover rounded-3xl transition-transform group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-bold group-hover:text-cyan-600 transition-colors text-[#002776]">
                Total Human IL-15 ELISA Kit
              </h4>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">High-Sensitivity</span>
            </Link>

            {/* Product 2 */}
            <Link
              href="/assay-kits/elisas/human-interferon-elisas/human-ifn-alpha-elisas"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl mb-6 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-2xl overflow-hidden relative" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <Image
                  src="/images/7.webp"
                  alt="Human IFN Alpha ELISA Kits"
                  fill
                  className="object-cover rounded-3xl transition-transform group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-bold group-hover:text-cyan-600 transition-colors text-[#002776]">
                Human IFN Alpha ELISA Kits
              </h4>
            </Link>

            {/* Product 3 */}
            <Link
              href="/assay-kits/elisas/mouse-interferon-elisas/mouse-ifn-beta-elisas"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl mb-6 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-2xl overflow-hidden relative" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <Image
                  src="/images/8.webp"
                  alt="Mouse IFN-Beta ELISAs"
                  fill
                  className="object-cover rounded-3xl transition-transform group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-bold group-hover:text-cyan-600 transition-colors text-[#002776]">
                Mouse IFN-Beta ELISAs
              </h4>
            </Link>

            {/* Product 4 */}
            <Link
              href="/proteins/human-ifn-alpha-alpha2a-11100"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl mb-6 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-2xl overflow-hidden relative" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <Image
                  src="/images/9.webp"
                  alt="Human IFN-Alpha 2a (Alpha A) Protein"
                  fill
                  className="object-cover rounded-3xl transition-transform group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-bold group-hover:text-cyan-600 transition-colors text-[#002776]">
                Human IFN-Alpha 2a (Alpha A) Protein
              </h4>
            </Link>

            {/* Product 5 */}
            <Link
              href="/antibodies/human-type-1-ifn-neutralizing-antibody-mixture-39000"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl mb-6 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-2xl overflow-hidden relative" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <Image
                  src="/images/10.webp"
                  alt="Human Type I IFN Neutralizing Antibody Mixture"
                  fill
                  className="object-cover rounded-3xl transition-transform group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-bold group-hover:text-cyan-600 transition-colors text-[#002776]">
                Human Type I IFN Neutralizing Antibody Mixture
              </h4>
            </Link>

            {/* Product 6 */}
            <Link
              href="/proteins/human-interleukin-15-il15ra-heterodimer-human-cell-expressed-11702"
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl mb-6 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-2xl overflow-hidden relative" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <Image
                  src="/images/12.webp"
                  alt="Human Interleukin 15 / IL-15Rα Heterodimer"
                  fill
                  className="object-cover rounded-3xl transition-transform group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-bold group-hover:text-cyan-600 transition-colors text-[#002776]">
                Human Interleukin 15 / IL-15Rα Heterodimer
              </h4>
            </Link>
          </div>

          {/* Testimonials Section */}
          <div className="mt-32 pt-8">
            <h2 className="text-5xl font-bold mb-16 tracking-tight text-center text-[#002776]">
              Don't Take Our Word For It
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonials Slider - Full Width Section */}
      <section className="py-8 bg-white overflow-x-hidden" style={{ overflowY: 'visible', paddingBottom: '48px' }}>
        <TestimonialsSlider />
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay&nbsp;development, customization and execution.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}

