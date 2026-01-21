'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, Hash, Box, FileText, ShoppingBag } from 'lucide-react';

export interface CatalogProduct {
  catalogNo: string;
  description: string;
  packSize: string;
  documents: Array<{
    label: string;
    url?: string;
  }>;
  price: string;
}

interface ProductCatalogProps {
  title?: string;
  products: CatalogProduct[];
}

export default function ProductCatalog({ title, products }: ProductCatalogProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (catalogNo: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [catalogNo]: Math.max(0, value),
    }));
  };

  if (products.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-background-lavender/25 via-white to-background-periwinkle/25 border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* SECTION HEADER - Master Level Typography */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.4em] mb-4 block">Inventory Control</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002776] leading-tight">
            {title || "Available Configurations"}
          </h2>
        </div>

        {/* DESKTOP ENGINE - Unified at lg: breakpoint */}
        <div className="hidden lg:block relative group">
          {/* Performance Optimized Glow background */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/5 via-transparent to-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 will-change-opacity"></div>
          
          <div className="relative rounded-[2.5rem] border border-slate-200/60 bg-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,39,118,0.1)] overflow-hidden specular-glass">
            <table className="w-full text-left border-collapse" role="table" aria-label="Product catalog">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-6 text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] w-48"><div className="flex items-center gap-2"><Hash className="w-3 h-3 text-cyan-500"/> Catalog No.</div></th>
                  <th className="px-8 py-6 text-[10px] font-black text-[#002776] uppercase tracking-[0.2em]"><div className="flex items-center gap-2"><FileText className="w-3 h-3 text-cyan-500"/> Description</div></th>
                  <th className="px-8 py-6 text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] w-32"><div className="flex items-center gap-2"><Box className="w-3 h-3 text-cyan-500"/> Size</div></th>
                  <th className="px-8 py-6 text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] w-48">Documents</th>
                  <th className="px-8 py-6 text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] text-right">Price</th>
                  <th className="px-8 py-6 text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] text-center w-32">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {products.map((product) => (
                  <tr key={product.catalogNo} className="group/row hover:bg-slate-50/80 transition-all duration-300">
                    <td className="px-8 py-8">
                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#002776] text-white font-mono text-sm font-bold shadow-lg shadow-blue-900/10 group-hover/row:scale-105 transition-transform whitespace-nowrap">
                        {product.catalogNo}
                      </span>
                    </td>
                    <td className="px-8 py-8">
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed group-hover/row:text-[#002776] transition-colors">
                        {product.description}
                      </p>
                    </td>
                    <td className="px-8 py-8 whitespace-nowrap">
                      <span className="text-xs font-black text-slate-400 tracking-tighter uppercase">{product.packSize}</span>
                    </td>
                    <td className="px-8 py-8">
                      <div className="flex flex-col gap-2">
                        {product.documents.map((doc, i) => (
                          <a key={i} href={doc.url || '#'} target={doc.url ? '_blank' : undefined} rel={doc.url ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-600 hover:text-[#002776] transition-colors group/doc">
                            <Download className="w-3 h-3 group-hover/doc:translate-y-0.5 transition-transform"/>
                            <span className="underline decoration-cyan-100 underline-offset-4">{doc.label}</span>
                          </a>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-8 text-right">
                      <div className="text-xl font-black bg-gradient-to-r from-[#002776] to-[#058A9F] bg-clip-text text-transparent">
                        {product.price}
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="relative flex items-center group/input">
                        <input
                          type="number"
                          min="0"
                          aria-label={`Quantity for ${product.catalogNo}`}
                          value={quantities[product.catalogNo] || 0}
                          onChange={(e) => handleQuantityChange(product.catalogNo, parseInt(e.target.value) || 0)}
                          className="w-full h-12 bg-white border border-slate-200 rounded-xl text-center font-bold text-[#002776] focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 outline-none transition-all shadow-inner"
                        />
                        <div className="absolute right-3 opacity-0 group-hover/input:opacity-100 transition-opacity">
                          <ShoppingBag className="w-4 h-4 text-cyan-500"/>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE CARDS - "The Concierge Grid" */}
        <div className="lg:hidden space-y-8">
          {products.map((product) => (
            <div key={product.catalogNo} className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#002776] opacity-10 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-8">
                <span className="px-4 py-2 rounded-xl bg-slate-900 text-white font-mono text-sm font-bold">{product.catalogNo}</span>
                <div className="text-right text-2xl font-black text-[#002776]">{product.price}</div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-6 leading-tight">{product.description}</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8 border-y border-slate-50 py-6">
                 <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Configuration</span>
                    <span className="text-sm font-bold text-slate-600">{product.packSize}</span>
                 </div>
                 <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Quantity</span>
                    <input
                      type="number"
                      min="0"
                      aria-label={`Quantity for ${product.catalogNo}`}
                      value={quantities[product.catalogNo] || 0}
                      onChange={(e) => handleQuantityChange(product.catalogNo, parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-50 border-none rounded-lg h-12 text-center font-bold text-sm"
                    />
                 </div>
              </div>

              <div className="space-y-3">
                 {product.documents.map((doc, i) => (
                   <a key={i} href={doc.url || '#'} target={doc.url ? '_blank' : undefined} rel={doc.url ? 'noopener noreferrer' : undefined} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-all group/doc">
                      <span className="text-xs font-bold text-slate-600 group-hover/doc:text-cyan-600">{doc.label}</span>
                      <Download className="w-4 h-4 text-cyan-500"/>
                   </a>
                 ))}
              </div>
            </div>
          ))}
        </div>

        {/* MASTER CTA FOOTER - Universal Engagement */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-[#002776] rounded-[3rem] shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,240,243,0.15)_0,transparent_50%)]"></div>
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2 tracking-tight text-balance">Request a custom study evaluation</h4>
              <p className="text-blue-200 font-light text-sm max-w-md">Our scientists provide fit-for-purpose assay development tailored to your specific research parameters.</p>
           </div>
           <Link href="/contact-us" className="relative z-10 px-6 md:px-10 py-4 md:py-5 bg-[#00F0F3] text-[#002776] rounded-2xl font-black text-xs md:text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyan-400/20 hover:scale-105 hover:bg-white transition-all whitespace-nowrap">
              Contact Us →
           </Link>
        </div>

      </div>
    </section>
  );
}
