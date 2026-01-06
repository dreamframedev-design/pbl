'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    link: '/resources/general-protocols/flow-cytometry-for-ifnar2-on-human-pbmc',
  },
  {
    title: 'General Procedure For Cell Surface Staining',
    category: 'General Protocols',
    link: '/resources/general-protocols/general-procedure-for-cell-surface-staining',
  },
  {
    title: 'General Protocol For Human Interferon Alpha Cytopathic Effect (CPE) Assay',
    category: 'General Protocols',
    link: '/resources/general-protocols/general-protocol-for-human-interferon-alpha-cytopathic-effect-cpe-assay',
  },
  {
    title: 'Determination Of Interferons And Biomarkers In Influenza Donor Samples',
    category: 'Technical Presentations',
    link: '/resources/technical-presentations/determination-of-interferons-and-biomarkers-in-influenza-donor-samples',
  },
  {
    title: 'Performance Characterization of a High Sensitivity Human IL-22 ELISA Kit',
    category: 'Technical Presentations',
    link: '/resources/technical-presentations/performance-characterization-of-a-high-sensitivity-human-il-22-elisa-kit',
  },
  {
    title: 'High Sensitivity Human IFN-Beta Autoimmune Disease Sera Validation Study',
    category: 'Technical Presentations',
    link: '/resources/technical-presentations/high-sensitivity-human-ifn-beta-autoimmune-disease-sera-validation-study',
  },
  {
    title: 'Single Molecule Counting (SMC) Assays Characterization',
    category: 'Technical Presentations',
    link: '/resources/technical-presentations/single-molecule-counting-smc-assays-characterization',
  },
  {
    title: 'Binding and Neutralizing of Monoclonal Antibodies to Human IFN-Alpha Subtypes',
    category: 'Technical Presentations',
    link: '/resources/technical-presentations/binding-and-neutralizing-of-monoclonal-antibodies-to-human-ifn-alpha-subtypes',
  },
  {
    title: 'Interferonopathies An Overview',
    category: 'Scientific Articles',
    link: '/resources/scientific-articles/interferonopathies-an-overview',
  },
  {
    title: 'A Brief Primer on Interferons and SARS-CoV-2',
    category: 'Scientific Articles',
    link: '/resources/scientific-articles/a-brief-primer-on-interferons-and-sars-cov-2',
  },
];

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

export default function ResourcesFilter() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredResources =
    activeFilter === 'All'
      ? resources
      : resources.filter((resource) => resource.category === activeFilter);

  return (
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
  );
}

