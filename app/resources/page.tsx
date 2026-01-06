'use client';

import Image from 'next/image';
import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';
import { useState } from 'react';

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    'All',
    'Posters',
    'White Papers',
    'Webinars',
    'General Protocols',
    'Technical Presentations',
    'Scientific Articles',
    'Product Literature',
  ];

  // Sample resource data - replace with actual data from your CMS/API
  const resources = [
    {
      title: '41135 CoA & Protocol',
      category: 'Product Literature',
      link: '#',
    },
    {
      title: '41135-1 Certificate of Analysis & Protocol',
      category: 'Product Literature',
      link: '#',
    },
    {
      title: 'MSD-ECL Protein Detection Service',
      category: 'White Papers',
      description: 'Single- and Multiplex Sample Testing Services on the Meso Scale Discovery (MSD) MESO QuickPlex SQ 120',
      link: '#',
    },
    {
      title: 'High Sensitivity Human IFN Alpha All Subtype ELISA',
      category: 'White Papers',
      description: 'Designed to provide low pg/ml (LLOQ 1.95 pg/ml) sensitive quantitation of human interferon alpha in serum, plasma and tissue culture media (TCM)',
      link: '#',
    },
    {
      title: 'High Sensitivity IFN Beta Serum ELISA',
      category: 'White Papers',
      description: 'Designed to measure human interferon beta in healthy and diseased serum, plasma, and tissue culture media with 1.2 pg/ml LLOQ sensitivity',
      link: '#',
    },
    {
      title: 'Non-Human Primate ELISA Kits',
      category: 'Product Literature',
      description: 'ELISA kits for measuring Cynomolgus/Rhesus IFN-alpha and Cynomolgus IFN-beta in serum, plasma, and TCM.',
      link: '#',
    },
    {
      title: 'Flow Cytometry For IFNAR2 On Human PBMC',
      category: 'General Protocols',
      link: '/technical-resources/flow-cytometry-ifnar2-human-pbmc',
    },
    {
      title: 'General Procedure For Cell Surface Staining',
      category: 'General Protocols',
      link: '/technical-resources/general-procedure-cell-surface-staining',
    },
    {
      title: 'General Protocol For Human Interferon Alpha Cytopathic Effect (CPE) Assay',
      category: 'General Protocols',
      link: '/technical-resources/general-protocol-human-interferon-alpha-cpe-assay',
    },
    {
      title: 'Determination Of Interferons And Biomarkers In Influenza Donor Samples',
      category: 'Technical Presentations',
      link: '/technical-resources/determination-interferons-and-biomarkers-influenza-donor-samples',
    },
    {
      title: 'Performance Characterization of a High Sensitivity Human IL-22 ELISA Kit',
      category: 'Technical Presentations',
      link: '/technical-resources/performance-characterization-high-sensitivity-human-il-22-elisa-kit',
    },
    {
      title: 'Interferonopathies An Overview',
      category: 'Scientific Articles',
      link: '/technical-resources/interferonopathies-overview',
    },
    {
      title: 'A Brief Primer on Interferons and SARS-CoV-2',
      category: 'Scientific Articles',
      link: '/technical-resources/brief-primer-interferons-sars-cov-2',
    },
  ];

  const filteredResources =
    activeFilter === 'All'
      ? resources
      : resources.filter((resource) => resource.category === activeFilter);

  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Resources
            </h1>
          </div>
        </div>
      </section>

      {/* Three-Column Entry Portal */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Technical Resources */}
            <Link
              href="#technical-resources"
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                Technical Resources
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Protocols, white papers, presentations, and scientific articles
              </p>
            </Link>

            {/* Column 2: General Protocols */}
            <Link
              href="/technical-resources/general-protocols"
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                General Protocols
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Step-by-step protocols for common laboratory procedures
              </p>
            </Link>

            {/* Column 3: Scientific Articles */}
            <Link
              href="/technical-resources/scientific-articles"
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                Scientific Articles
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Research articles and technical presentations
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Resources Filter System */}
      <section id="technical-resources" className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-12 text-center">
            Technical Resources
          </h2>

          {/* Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-secondary-teal text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-transparent hover:border-accent-cyan/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/20"
                >
                  <h3 className="text-xl font-semibold text-primary-navy mb-2 group-hover:text-secondary-teal transition-colors duration-300">
                    {resource.title}
                  </h3>
                  {resource.description && (
                    <p className="text-gray-600 font-light leading-relaxed">
                      {resource.description}
                    </p>
                  )}
                  <span className="inline-block mt-2 text-sm text-neutral-steel font-medium">
                    {resource.category}
                  </span>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-light">
                  No resources found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

