'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCatalog from '@/components/ProductCatalog';
import { Download, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function InterferonDecoyReceptorPage() {
  const [selectedPackSize, setSelectedPackSize] = useState('12185-1');
  const [expandedSections, setExpandedSections] = useState({
    productInfo: true,
    documentation: true,
    specifications: false,
    techInfo: false,
    citations: false,
  });

  // Product data matching the legacy site
  const catalogProducts = [
    {
      catalogNo: '12185-1',
      description: 'Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein',
      packSize: '10 µg',
      documents: [
        { label: '12185-1 CoA', url: '#' },
        { label: '12185 SDS', url: '#' },
      ],
      price: '$315.00',
    },
    {
      catalogNo: '12185-2',
      description: 'Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein',
      packSize: '100 µg',
      documents: [
        { label: '12185-2 CoA', url: '#' },
        { label: '12185 SDS', url: '#' },
      ],
      price: '$1,200.00',
    },
  ];

  // Activity data for the graph (IU/mg) - exact values from HTML template
  const activityData = [
    { subtype: 'α1', activity: 1.2e7 },
    { subtype: 'α2', activity: 8.5e6 },
    { subtype: 'α4', activity: 6.3e6 },
    { subtype: 'α5', activity: 4.2e6 },
    { subtype: 'α6', activity: 3.1e6 },
    { subtype: 'α7', activity: 2.8e6 },
    { subtype: 'α8', activity: 2.5e6 },
    { subtype: 'α9', activity: 2.1e6 },
    { subtype: 'α10', activity: 1.9e6 },
    { subtype: 'α11', activity: 1.6e6 },
    { subtype: 'α12', activity: 1.4e6 },
    { subtype: 'α13', activity: 1.2e6 },
    { subtype: 'α14', activity: 1.0e6 },
    { subtype: 'Lim', activity: 8.5e5 },
  ];

  const maxActivity = Math.max(...activityData.map(d => d.activity));
  const minActivity = Math.min(...activityData.map(d => d.activity));

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const selectedProduct = catalogProducts.find(p => p.catalogNo === selectedPackSize) || catalogProducts[0];

  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section with BannerHero */}
      <header className="relative pt-40 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-10 flex items-center gap-2 text-[10px] font-black text-cyan-600 uppercase tracking-[0.4em]">
            <Link href="/products" className="hover:text-cyan-700">Products</Link>
            <span className="text-slate-300">/</span>
            <Link href="/products/proteins" className="hover:text-cyan-700">Proteins</Link>
            <span className="text-slate-300">/</span>
            <span>Interferon Decoy Receptor</span>
          </nav>
          
          <h1 className="text-5xl md:text-[80px] font-black tracking-tighter leading-[0.85] mb-12 max-w-6xl">
            <span className="text-[#002776]">Mouse Interferon Alpha All-Subtype</span><br/>
            <span className="text-slate-300 italic font-light font-serif text-4xl md:text-6xl">Neutralizing Viral Protein</span>
          </h1>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Catalog No.</span>
              <span className="text-lg font-mono font-bold text-[#002776]">12185</span>
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <Link href="#" className="text-sm font-semibold text-cyan-600 underline decoration-cyan-200 underline-offset-8">
              1 Peer-Reviewed Citations
            </Link>
          </div>
        </div>
      </header>

      {/* Product Purchase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Activity Graph */}
            <div className="lg:col-span-7 group glass-card p-1 rounded-[3.5rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[3.3rem] p-10 h-full flex flex-col shadow-sm">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-2xl font-bold text-[#002776] flex items-center gap-3">Activity Profile (IU/mg)</h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Validated Antagonism</span>
                </div>
                
                <div className="relative h-80 mb-12 flex items-end justify-between gap-1.5 border-b-2 border-slate-100 pb-4">
                  {activityData.map((item, index) => {
                    const heightPercent = (item.activity / maxActivity) * 100;
                    const barHeight = Math.max(heightPercent, 10); // Minimum 10% height
                    return (
                      <div 
                        key={index} 
                        className={`flex-1 bg-gradient-to-t from-[#002776] ${index === 0 ? 'to-cyan-500' : 'to-cyan-400'} rounded-t-lg`}
                        style={{ 
                          height: `${barHeight}%`,
                          filter: index === 0 ? 'drop-shadow(0 0 8px rgba(0, 240, 243, 0.4))' : 'none'
                        }}
                      ></div>
                    );
                  })}
                  
                  <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between text-[9px] font-black text-slate-300">
                    <span>1.2E+07</span>
                    <span>1.0E+04</span>
                  </div>
                  
                  <div className="absolute -bottom-10 left-0 right-0 flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest px-1">
                    {activityData.map((item, index) => (
                      <span key={index}>{item.subtype}</span>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 font-light mt-4 leading-relaxed">
                  C12R IFN Antagonist neutralizes All 14 Mouse IFN-Alpha subtypes, plus Mouse Limitin, Mouse IFN-Kappa, and Rat IFN-Alpha 1.
                </p>
              </div>
            </div>

            {/* Purchase Options - Dark Mode Portal */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(0,240,243,0.15)_0,transparent_50%)]"></div>
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2">Available Now</div>
                  <div className="text-6xl font-black mb-10">
                    {selectedProduct.price} <span className="text-sm font-normal text-slate-400 ml-2">USD</span>
                  </div>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-4">Pack Size</label>
                      <div className="grid grid-cols-2 gap-3">
                        {catalogProducts.map((product) => (
                          <button
                            key={product.catalogNo}
                            onClick={() => setSelectedPackSize(product.catalogNo)}
                            className={`py-5 border-2 rounded-2xl text-xs font-bold transition-all ${
                              selectedPackSize === product.catalogNo
                                ? 'border-cyan-400 bg-cyan-400/10 text-white'
                                : 'border-white/10 hover:border-white/30 text-slate-400'
                            }`}
                          >
                            {product.packSize}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-6 bg-[#00F0F3] text-[#002776] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-cyan-400/30">
                    Add to Inquiry Cart →
                  </button>
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Weight</p>
                  <p className="text-base font-bold">32 KDa</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Purity</p>
                  <p className="text-base font-bold">≥95%</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Endotoxin</p>
                  <p className="text-base font-bold">&lt; 1 EU/µg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Sections with Glass Cards */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          
          {/* Product Specificity */}
          <div className="glass-card rounded-[3rem] p-12 glow-border transition-all duration-500 specular-glass">
            <h2 className="text-3xl font-bold mb-10 text-[#002776] border-b border-slate-100 pb-6">Product Specificity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-6">Neutralizes:</h4>
                <ul className="space-y-4 text-[14px] text-slate-600 font-light">
                  <li className="flex gap-4">✓ <span>All mouse and human IFN-Alpha subtypes</span></li>
                  <li className="flex gap-4">✓ <span>Human IFN-Beta, IFN-Omega</span></li>
                  <li className="flex gap-4">✓ <span>Rat IFN-Alpha 1</span></li>
                  <li className="flex gap-4">✓ <span>Mouse limitin</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-6">Does Not Neutralize (Tested ≥100X):</h4>
                <ul className="space-y-4 text-[14px] text-slate-400 font-light">
                  <li className="flex gap-4">✕ <span>Mouse IFN-Beta</span></li>
                  <li className="flex gap-4">✕ <span>Human IFN-Gamma, IFN-Lambda 1, 2, 3</span></li>
                  <li className="flex gap-4">✕ <span>Rat IFN-Alpha 14</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="glass-card rounded-[3rem] p-12 glow-border transition-all duration-500 specular-glass">
            <h2 className="text-3xl font-bold mb-10 text-[#002776] border-b border-slate-100 pb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-slate-600 font-light">
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-[#002776] mb-1">Formulation</p>
                  <p>Supplied frozen in phosphate-buffered saline (PBS) containing 0.1% Bovine Serum Albumin (BSA)</p>
                </div>
                <div>
                  <p className="font-bold text-[#002776] mb-1">Purity</p>
                  <p>≥95% by SDS-PAGE stained by Coomassie Blue.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-[#002776] mb-1">Storage</p>
                  <p>Store at -70°C or below; avoid repeated freeze/thaw cycles.</p>
                </div>
                <div>
                  <p className="font-bold text-[#002776] mb-1">Bioactivity</p>
                  <p>Measured by neutralization of interferon in a cytopathic effect inhibition assay.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Background */}
          <div className="glass-card rounded-[3rem] p-12 glow-border transition-all duration-500 specular-glass">
            <h2 className="text-3xl font-bold mb-10 text-[#002776] border-b border-slate-100 pb-6">Technical Background</h2>
            <div className="prose prose-slate text-slate-600 font-light leading-relaxed space-y-6">
              <p>C12R is a secreted protein from Mousepox (Ectromelia) virus that functions as a decoy receptor for mouse IFN-Alpha. It binds to mouse IFN-Alpha with high affinity and blocks its biological activity, allowing the virus to evade the host immune response during viral infection.</p>
              <p>This protein has been extensively characterized and is widely used in research to neutralize mouse IFN-Alpha activity in vitro and in vivo. It is particularly useful for studying the role of Type I interferons in immune responses and viral pathogenesis.</p>
              <p className="text-xs italic text-slate-400">References: Smith and Alcami, J.Vir. 2002; Xu et al. JEM 2008</p>
            </div>
          </div>

          {/* Documentation and Citations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-[3rem] p-10 glow-border transition-all duration-500 specular-glass">
              <h3 className="font-bold mb-6 text-[#002776]">Documentation</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between text-xs font-bold text-slate-600">
                  12185-1 Certificate of Analysis (CoA) <span className="text-cyan-500">Download ↓</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between text-xs font-bold text-slate-600">
                  12185 Safety Data Sheet (SDS) <span className="text-cyan-500">Download ↓</span>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-[3rem] p-10 glow-border transition-all duration-500 specular-glass">
              <h3 className="font-bold mb-6 text-[#002776]">Citations</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                <strong>1.</strong> Lee, S. et al., (2019), "A Secreted Viral Nonstructural Protein Determines Intestinal Norovirus Pathogenesis," <em>Cell Host Microbe</em> 25(6):845.
              </p>
              <Link href="#" className="text-[10px] font-black text-cyan-600 uppercase">View Publication →</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Product Catalog Table */}
      <ProductCatalog products={catalogProducts} />

      {/* Final CTA Section */}
      <section className="pt-32 pb-12 bg-slate-50 text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Scientific Consultation</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Ready to start your study?</h2>
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
