'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCatalog from '@/components/ProductCatalog';
import { Download, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function InterferonDecoyReceptorPage() {
  const [selectedPackSize, setSelectedPackSize] = useState('12185-1');
  const [quantity, setQuantity] = useState(1);
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

  // Activity data for the graph (IU/mg) - matching screenshot values
  const activityData = [
    { subtype: 'a1', activity: 1.2e7 },
    { subtype: 'a2', activity: 8.5e6 },
    { subtype: 'a4', activity: 6.3e6 },
    { subtype: 'a5', activity: 4.2e6 },
    { subtype: 'a6', activity: 3.1e6 },
    { subtype: 'a7', activity: 2.8e6 },
    { subtype: 'a8', activity: 2.5e6 },
    { subtype: 'a9', activity: 2.1e6 },
    { subtype: 'a10', activity: 1.9e6 },
    { subtype: 'a11', activity: 1.6e6 },
    { subtype: 'a12', activity: 1.4e6 },
    { subtype: 'a13', activity: 1.2e6 },
    { subtype: 'a14', activity: 1.0e6 },
    { subtype: 'Limitin', activity: 8.5e5 },
  ];

  const maxActivity = Math.max(...activityData.map(d => d.activity));
  const minActivity = Math.min(...activityData.map(d => d.activity));

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const selectedProduct = catalogProducts.find(p => p.catalogNo === selectedPackSize) || catalogProducts[0];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background-lavender/20 via-white to-background-periwinkle/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-headline-primary leading-normal mb-6 pb-2">
              Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein
            </h1>
            <div className="mb-4 flex items-center gap-4">
              <span className="text-lg font-semibold text-primary-navy">Catalog Number: </span>
              <span className="text-lg font-mono text-secondary-teal font-bold">12185</span>
              <Link href="#" className="text-sm text-secondary-teal hover:text-accent-cyan underline">
                1 Citations
              </Link>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-6">
              C12R IFN Antagonist neutralizes All 14 Mouse IFN-Alpha subtypes, plus Mouse Limitin, Mouse IFN-Kappa, and Rat IFN-Alpha 1. Also suitable for Western Blot.
            </p>
          </div>
        </div>
      </section>

      {/* Product Purchase Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
            {/* Activity Graph */}
            <div className="bg-white rounded-2xl border-2 border-gray-200/50 p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-primary-navy mb-6">Activity of C12R (IU/mg)</h2>
              <div className="w-full">
                <div className="relative h-80 mb-4 border-b-2 border-gray-300 flex items-end justify-between gap-1">
                  {activityData.map((item, index) => {
                    // Calculate height as percentage of max activity, ensuring minimum visibility
                    const heightPercent = (item.activity / maxActivity) * 100;
                    const barHeight = Math.max(heightPercent, 8); // Minimum 8% height
                    return (
                      <div key={index} className="flex flex-col items-center flex-1 group relative h-full">
                        <div className="flex-1 w-full flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-secondary-teal via-secondary-teal/90 to-accent-cyan rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
                            style={{
                              height: `${barHeight}%`,
                              minHeight: '12px',
                              animation: `slideUp 0.8s ease-out ${index * 0.05}s both`,
                            }}
                            title={`${item.subtype}: ${item.activity.toExponential(2)} IU/mg`}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                              {item.activity.toExponential(2)} IU/mg
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 font-medium transform -rotate-45 origin-top-left whitespace-nowrap mt-2 h-8 flex items-start">
                          {item.subtype}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-xs text-gray-600 mb-2 px-2">
                  <span>1.00E+04</span>
                  <span>1.00E+08</span>
                </div>
                <p className="text-sm text-gray-600 italic mt-4 text-center">
                  C12R Mouse IFN-Alpha Decoy Receptor Neutralizing Activities (IU/mg)
                </p>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="bg-white rounded-2xl border-2 border-gray-200/50 p-6 shadow-xl">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-navy mb-4">
                  {selectedProduct.price}
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-primary-navy mb-3">Pack Size</label>
                  <div className="flex gap-3">
                    {catalogProducts.map((product) => (
                      <button
                        key={product.catalogNo}
                        onClick={() => setSelectedPackSize(product.catalogNo)}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedPackSize === product.catalogNo
                            ? 'border-secondary-teal bg-secondary-teal/5 text-secondary-teal font-semibold'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-secondary-teal/50'
                        }`}
                      >
                        <div className="font-medium">{product.packSize}</div>
                        <div className="text-xs mt-1 font-mono">{product.catalogNo}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-primary-navy mb-3">Quantity</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 border-2 border-gray-200 rounded-lg hover:border-secondary-teal transition-colors"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-3 py-2 text-center border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal/30 focus:border-secondary-teal"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 border-2 border-gray-200 rounded-lg hover:border-secondary-teal transition-colors"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button className="w-full btn-primary text-lg py-4">
                  ADD TO CART →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible Sections */}
      <section className="section-padding bg-gradient-to-br from-background-skyBlue/20 via-white to-background-lavender/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {/* Product Info */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection('productInfo')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary-navy">Product Info</h2>
                {expandedSections.productInfo ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSections.productInfo && (
                <div className="px-6 pb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-primary-navy mb-3">Tested Applications</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Neutralization</li>
                        <li>Western Blot (WB)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary-navy mb-3">Specificity</h3>
                      <div className="space-y-3 text-gray-700">
                        <div>
                          <p className="font-medium mb-2">Neutralizes:</p>
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>All mouse and human IFN-Alpha subtypes</li>
                            <li>Human IFN-Beta, IFN-Omega</li>
                            <li>Rat IFN-Alpha 1</li>
                            <li>Mouse limitin</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Does not neutralize the following when tested at ≥100X the typical neutralizing dose:</p>
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Mouse IFN-Beta</li>
                            <li>Human IFN-Gamma, IFN-Lambda 1, IFN-Lambda 2, IFN-Lambda 3</li>
                            <li>Rat IFN-Alpha 14</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary-navy mb-3">Activity (EC50)</h3>
                      <p className="text-gray-700">0.3 - 11.5 ng/ml (varies by subtype)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Documentation */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection('documentation')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary-navy">Documentation</h2>
                {expandedSections.documentation ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSections.documentation && (
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-semibold text-primary-navy mb-4">Certificate of Analysis (CoA) and Safety Data Sheet (SDS)</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary-teal/5 to-accent-cyan/5 hover:from-secondary-teal/10 hover:to-accent-cyan/10 border border-secondary-teal/20 hover:border-secondary-teal/40 rounded-lg transition-all duration-200 group"
                    >
                      <Download className="h-4 w-4 text-secondary-teal" />
                      <span className="text-sm font-medium text-primary-navy group-hover:text-secondary-teal">
                        12185-1 CoA (12185-1 Certificate of Analysis)
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary-teal/5 to-accent-cyan/5 hover:from-secondary-teal/10 hover:to-accent-cyan/10 border border-secondary-teal/20 hover:border-secondary-teal/40 rounded-lg transition-all duration-200 group"
                    >
                      <Download className="h-4 w-4 text-secondary-teal" />
                      <span className="text-sm font-medium text-primary-navy group-hover:text-secondary-teal">
                        12185-2 CoA (12185-2 Certificate of Analysis)
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-secondary-teal/5 to-accent-cyan/5 hover:from-secondary-teal/10 hover:to-accent-cyan/10 border border-secondary-teal/20 hover:border-secondary-teal/40 rounded-lg transition-all duration-200 group"
                    >
                      <Download className="h-4 w-4 text-secondary-teal" />
                      <span className="text-sm font-medium text-primary-navy group-hover:text-secondary-teal">
                        12185 SDS (12185 Safety Data Sheet)
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection('specifications')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary-navy">Specifications</h2>
                {expandedSections.specifications ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSections.specifications && (
                <div className="px-6 pb-6">
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Formulation</h3>
                      <p>Supplied frozen in phosphate-buffered saline (PBS) containing 0.1% Bovine Serum Albumin (BSA)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Molecular Weight</h3>
                      <p>32 KDa</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Purity</h3>
                      <p>≥95% by SDS-PAGE stained by Coomassie Blue. Endotoxin level &lt; 1 EU/µg</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Bioactivity</h3>
                      <p>Measured by neutralization of interferon in a cytopathic effect inhibition assay</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Storage</h3>
                      <p>For retention of full activity store at -70°C or below and avoid repeated freeze/thaw cycles</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tech Info & Data */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection('techInfo')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary-navy">Tech Info & Data</h2>
                {expandedSections.techInfo ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSections.techInfo && (
                <div className="px-6 pb-6">
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3">Background</h3>
                      <p className="leading-relaxed mb-2">
                        C12R is a secreted protein from Mousepox (Ectromelia) virus that functions as a decoy receptor for mouse IFN-Alpha. It binds to mouse IFN-Alpha with high affinity and blocks its biological activity, allowing the virus to evade the host immune response during viral infection.
                      </p>
                      <p className="leading-relaxed mb-2">
                        This protein has been extensively characterized and is widely used in research to neutralize mouse IFN-Alpha activity in vitro and in vivo. It is particularly useful for studying the role of Type I interferons in immune responses and viral pathogenesis.
                      </p>
                      <p className="leading-relaxed text-sm text-gray-600 italic">
                        References: Smith and Alcami, J.Vir. 2002; Xu et al. JEM 2008
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Citations */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection('citations')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-2xl font-bold text-primary-navy">Citations</h2>
                {expandedSections.citations ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSections.citations && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary-teal pl-4 py-2">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>1.</strong> Lee, S. et al., (2019), "A Secreted Viral Nonstructural Protein Determines Intestinal Norovirus Pathogenesis," <em>Cell Host Microbe</em> 25(6):845, PMID: 31130511, DOI: 10.1016/j.chom.2019.04.005{' '}
                        <a href="#" className="text-secondary-teal hover:text-accent-cyan underline inline-flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Table */}
      <ProductCatalog products={catalogProducts} />

      {/* Bottom CTA */}
      <section className="section-padding bg-gradient-to-br from-background-lavender/20 via-white to-background-periwinkle/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Link
            href="/speak-to-a-scientist"
            className="btn-primary"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>

    </main>
  );
}
