import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/17.webp"
            alt="Assay Services"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Assay</span> <br/> <span className="font-light text-gray-400 font-serif italic">Services</span>
          </h1>
          <p className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold text-[#058A9F] tracking-tight leading-tight">
            Let Us Do It For You
          </p>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Assay Development */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l1.166 3.497a2 2 0 001.898 1.368h10.23a2 2 0 001.898-1.368l1.166-3.497z"/></svg>
                  </div>
                </div>
                <Link href="/services/assay-development" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-3xl font-bold text-[#002776]">Assay Development</h3>
                </Link>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Discovery to Validation</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                  Immunoassay Design & Development from Antibody Screening & Proof-of-Concept Feasibility to Validation & Characterization.
                </p>
                <Link href="/services/assay-development" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Solutions
                </Link>
              </div>
            </div>

            {/* Biomarker Sample Analysis */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  </div>
                </div>
                <Link href="/services/biomarker-sample-analysis" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-3xl font-bold text-[#002776]">Biomarker Sample Analysis</h3>
                </Link>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Simoa, SMC, MSD</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                  Sensitive biomarker detection on a variety of singleplex and multiplex assay platforms (MSD, Simoa®, Erenna®, SMCxPRO®, ELISA), from one sample to thousands.
                </p>
                <Link href="/services/biomarker-sample-analysis" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Services
                </Link>
              </div>
            </div>

            {/* Cell-Based Services */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                  </div>
                </div>
                <Link href="/services/cell-based-services" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-3xl font-bold text-[#002776]">Cell-Based Services</h3>
                </Link>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">NAb & Bioactivity</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                  Assays measuring Cytokine & Chemokine Bioactivity, Cytokine Release, NAb Activity, Proliferation & Anti-Proliferation, Antiviral Activity including CPE inhibition assays.
                </p>
                <Link href="/services/cell-based-services" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Bioassays
                </Link>
              </div>
            </div>

            {/* Custom Production */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                  </div>
                </div>
                <Link href="/services/custom-production" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-3xl font-bold text-[#002776]">Custom Production</h3>
                </Link>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Purification & Labeling</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                  Expression, Purification & Characterization of Proteins & Monoclonals; Antibody & Protein Labeling; Immunoassay (ELISA) Manufacturing.
                </p>
                <Link href="/services/custom-production" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Antibody Characterization Service */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                </div>
                <Link href="/services/antibody-characterization" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h3 className="text-3xl font-bold text-[#002776]">Antibody Characterization Service</h3>
                </Link>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Real-Time BLI Biophysics</p>
                <div className="flex-grow"></div>
                <Link href="/services/antibody-characterization" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                  View Full Service
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-[#002776]">Experience the PBL Difference</h2>
          
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50 group relative">
            <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-all"></div>
            <iframe
              className="absolute inset-0 w-full h-full z-0"
              src="https://www.youtube.com/embed/Hrbtr5JGQhA"
              title="The PBL Difference"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://www.pblassaysci.com/sites/default/files/document/2022-06/assay_services_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#058A9F] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/30"
            >
              <span>Download Services Brochure</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose PBL Section */}
      <section className="py-32 bg-[#F4F4F9]/40 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 tracking-tight text-[#002776]">Why Choose PBL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:border-cyan-400 hover:shadow-xl group text-center">
              <div className="text-cyan-500 font-black text-2xl mb-4 group-hover:scale-110 transition-transform">Cost-Effective</div>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                As a non-regulated bioanalytical lab that grew out of an immunoassay manufacturing company, we do not carry the overhead of regulated CROs. We have experience transferring assays for validation in a regulated environment.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:border-cyan-400 hover:shadow-xl group text-center">
              <div className="text-cyan-500 font-black text-2xl mb-4 group-hover:scale-110 transition-transform">Shorter Timelines</div>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                As a nimble small business, we have the flexibility to start your project with minimal delay and complete work efficiently. We are listed on <a href="https://www.scientist.com" target="_blank" rel="noopener noreferrer" className="text-[#002776] underline hover:text-cyan-600">Scientist.com</a> and <a href="https://www.scienceexchange.com" target="_blank" rel="noopener noreferrer" className="text-[#002776] underline hover:text-cyan-600">ScienceExchange</a> to expedite the onboarding process.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:border-cyan-400 hover:shadow-xl group text-center">
              <div className="text-cyan-500 font-black text-2xl mb-4 group-hover:scale-110 transition-transform">Depth of Understanding</div>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                With 3 decades of experience developing highly sensitive and specific assays, we understand the difficulties you face. Our experts take the time to understand what you want to accomplish and guide your project from beginning to end.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:border-cyan-400 hover:shadow-xl group text-center">
              <div className="text-cyan-500 font-black text-2xl mb-4 group-hover:scale-110 transition-transform">High Quality</div>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                Clients have come to rely upon PBL's defining company characteristics: our high performance standards and the professionalism of our approach. We have successfully completed hundreds of Assay Services projects for clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Scientific Partnership</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}
