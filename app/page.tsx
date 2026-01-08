'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import CountingBadge from '@/components/CountingBadge';

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth < 768) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5; // 50% of scroll speed
        parallaxRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Stats Bar animation
  useEffect(() => {
    if (!statsSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldAnimateStats) {
            setShouldAnimateStats(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(statsSectionRef.current);
    return () => observer.disconnect();
  }, [shouldAnimateStats]);

  // Intersection Observer for Section Reveals
  useEffect(() => {
    // First pass: check which sections are already visible on mount
    const checkInitialVisibility = () => {
      const initialVisible = new Set<number>();
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
          if (isVisible) {
            initialVisible.add(index);
          }
        }
      });
      if (initialVisible.size > 0) {
        setVisibleSections(initialVisible);
      }
    };

    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(checkInitialVisibility, 50);

    // Set up Intersection Observer for sections not yet visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleSections((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    const observeTimeout = setTimeout(() => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 150);

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(observeTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section - Height accounts for navbar */}
      <section className="relative w-full flex items-center justify-start lg:items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        
        {/* 1. DESKTOP/TABLET BACKGROUND (md+) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/images/hero nice1.webp"
            alt="PBL Assay Science"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* 2. MOBILE BACKGROUND (< md) - Parallax Effect */}
        <div 
          ref={parallaxRef}
          className="block md:hidden absolute inset-0 z-0 will-change-transform" 
          style={{
            background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16 lg:py-20">
          <div className="flex flex-col items-start">
            
            {/* HERO TEXT */}
            <div className="max-w-2xl lg:max-w-4xl w-full">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-[#002776]">
                Fit-for-purpose <span className="whitespace-nowrap">assay development,</span><br className="hidden md:block" />
                <span className="bg-gradient-to-r from-[#002776] to-[#058A9F] bg-clip-text text-transparent"><span className="whitespace-nowrap">customization and</span><br className="md:block lg:hidden" /> execution.</span>
              </h1>
              
              {/* 3. REFINED MOBILE HERO CONTAINER (Inserted between Heading and CTAs) */}
              <div className="mt-10 w-full block md:hidden">
                <div className="relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-cyan-400/40 via-emerald-400/20 to-[#002776]/30 shadow-[0_20px_50px_rgba(0,39,118,0.15)] overflow-hidden">
                  {/* Glossy Overlay Tint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/5 pointer-events-none"></div>
                  
                  <div className="bg-white/80 backdrop-blur-2xl rounded-[2.45rem] p-3">
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-inner border border-white/40">
                      <Image
                        src="/images/1.webp"
                        alt="PBL Mobile Hero"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* HERO CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Link
                  href="/products"
                  className="px-10 py-5 bg-[#002776] text-white rounded-full font-bold text-lg hover:bg-cyan-600 transition-all duration-200 shadow-xl shadow-blue-900/20 hover:scale-105 active:scale-95 text-center"
                >
                  Go to Products
                </Link>
                <Link
                  href="/services"
                  className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 bg-white/80 backdrop-blur-md border border-slate-200 text-[#002776] text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tailored Services */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }}
        className={`py-32 bg-white transition-all duration-1000 ease-out ${visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
      >
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

              {/* Elite Animated Stats Bar */}
              <div 
                ref={statsSectionRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-[3rem] mb-12 relative overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,39,118,0.05)] border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0">
                  <div className="text-5xl font-black text-[#002776] mb-2 tracking-tighter italic">
                    {shouldAnimateStats ? <CountingBadge targetValue={10} suffix="" /> : <span>10</span>}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">days to study start</div>
                </div>

                <div className="relative z-10 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-slate-100 py-8 md:py-0 md:px-8">
                  <div className="text-5xl font-black text-cyan-500 mb-2 tracking-tighter italic">
                    {shouldAnimateStats ? <CountingBadge targetValue={95} suffix="%" /> : <span>95%</span>}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">client retention rate</div>
                </div>

                <div className="relative z-10 flex flex-col items-center md:items-start pt-8 md:pt-0 md:pl-8">
                  <div className="text-5xl font-black text-[#002776] mb-2 tracking-tighter italic">
                    {shouldAnimateStats ? <CountingBadge targetValue={500} suffix="+" /> : <span>500+</span>}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">projects completed</div>
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
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }}
        className={`py-32 bg-white transition-all duration-1000 ease-out ${visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
      >
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
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }}
        className={`py-32 bg-[#F4F4F9]/30 transition-all duration-1000 ease-out ${visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
      >
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
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="py-32 bg-white overflow-x-hidden transition-all duration-1000 ease-out opacity-100 translate-y-0"
        style={{ overflowY: 'visible' }}
      >
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

        </div>
      </section>

      {/* Testimonials Slider - Stripe-Style Section (Header now inside component) */}
      <section className="bg-white overflow-x-hidden" style={{ overflowY: 'visible' }}>
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

