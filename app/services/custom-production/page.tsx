import Image from 'next/image';
import Link from 'next/link';
import { FlaskConical, Monitor, Sliders, Sparkles } from 'lucide-react';

export default function CustomProductionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20.webp"
            alt="Custom Production"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span>Custom Production</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Custom</span> <br/> <span className="font-light text-gray-400 font-serif italic">Production</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Expression, Purification & Characterization of Proteins & Monoclonals; Antibody & Protein Labeling; Immunoassay (ELISA) Manufacturing.
          </p>
        </div>
      </header>

      {/* Service Cards Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Service 1: Recombinant Protein Production */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 service-number rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <FlaskConical className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight text-[#002776]">Recombinant Protein Production and Purification</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Bacterial & Mammalian Systems</p>
                <p className="text-slate-500 text-[15px] font-light leading-relaxed mb-8 flex-grow">
                  PBL provides comprehensive recombinant protein production services utilizing both bacterial and mammalian expression systems. Our bacterial expression capabilities offer cost-effective, high-yield production for proteins that do not require complex post-translational modifications. For proteins requiring authentic glycosylation and native folding, our mammalian cell expression systems deliver proteins with full biological activity. All production processes include rigorous purification protocols to ensure high purity, low endotoxin levels, and optimal protein quality for research and therapeutic applications.
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">High Purity / Low Endotoxin</span>
                </div>
              </div>
            </div>

            {/* Service 2: Cytokine and Antibody Production */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 service-number rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <Monitor className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight text-[#002776]">Cytokine and Antibody Production and Characterization</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Biological Activity Validation</p>
                <p className="text-slate-500 text-[15px] font-light leading-relaxed mb-8 flex-grow">
                  Our specialized cytokine and antibody production services leverage decades of expertise in immunological research. We produce high-quality cytokines with authentic post-translational modifications, ensuring full biological activity and proper receptor binding. Our antibody production services encompass both monoclonal and polyclonal antibodies, with comprehensive characterization including specificity testing, affinity determination, and functional validation. All products undergo rigorous quality control to meet the highest standards for research and diagnostic applications.
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Affinity Determination / Functional Validation</span>
                </div>
              </div>
            </div>

            {/* Service 3: Hybridoma and Cell Line Development */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 service-number rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <Sliders className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight text-[#002776]">Hybridoma, Polyclonal Antibody, and Cell Line Development</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Stable Expression Models</p>
                <p className="text-slate-500 text-[15px] font-light leading-relaxed mb-8 flex-grow">
                  PBL offers complete cell line development services, including hybridoma generation for monoclonal antibody production and polyclonal antibody development through immunization protocols. Our hybridoma services include cell fusion, screening, cloning, and stable cell line establishment to deliver monoclonal antibodies with defined specificity and high affinity. For polyclonal antibodies, we manage the entire immunization process and purification workflow. We also develop custom stable cell lines for protein production, reporter assays, and other research applications, ensuring optimal expression levels and long-term stability.
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Defined Specificity / Long-Term Stability</span>
                </div>
              </div>
            </div>

            {/* Service 4: Protein and Antibody Labeling */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 service-number rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>
                  <Sparkles className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight text-[#002776]">Protein and Antibody Labeling and Biophysical Characterization</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Fluorescence & Enzymatic Conjugation</p>
                <p className="text-slate-500 text-[15px] font-light leading-relaxed mb-8 flex-grow">
                  Our labeling services provide conjugation of proteins and antibodies with a wide range of fluorophores, enzymes, biotin, and other tags while preserving biological activity and binding specificity. We employ optimized conjugation protocols to ensure consistent labeling ratios and minimal aggregation. Our biophysical characterization services include analysis of protein stability, aggregation propensity, thermal stability, and structural integrity. Comprehensive characterization reports provide detailed insights into protein quality, enabling informed decisions for research and development applications.
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Optimized Conjugation / Stability Analysis</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
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

