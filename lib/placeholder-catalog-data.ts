import { CatalogProduct } from '@/components/ProductCatalog';

/**
 * Placeholder catalog data for product pages that should have catalog tables
 * but don't have them in the markdown files yet
 */
export function getPlaceholderCatalogData(pagePath: string): CatalogProduct[] | null {
  // Map page paths to placeholder catalog data
  const catalogDataMap: Record<string, CatalogProduct[]> = {
    // Interferon (IFN) ELISA Kits
    'interferon-elisas': [
      {
        catalogNo: '41110-1',
        description: 'Human IFN-Alpha Multi-Subtype ELISA Kit (Serum, Plasma, TCM)',
        packSize: '1 x 96-well plate',
        documents: [
          { label: '41110-1 CoA & Protocol (One-Page)' },
          { label: '41110 Protocol (Full)' },
          { label: '41110-1 CoA' },
          { label: '41110-2 CoA' },
          { label: '41110 SDS' },
        ],
        price: '$625.00',
      },
      {
        catalogNo: '41110-2',
        description: 'Human IFN-Alpha Multi-Subtype ELISA Kit (Serum, Plasma, TCM)',
        packSize: '5 x 96-well plates',
        documents: [
          { label: '41110-1 CoA & Protocol (One-Page)' },
          { label: '41110 Protocol (Full)' },
          { label: '41110-1 CoA' },
          { label: '41110-2 CoA' },
          { label: '41110 SDS' },
        ],
        price: '$2,810.00',
      },
      {
        catalogNo: '41105-1',
        description: 'Human IFN-Alpha Multi-Subtype ELISA Kit (TCM)',
        packSize: '1 x 96-well plate',
        documents: [
          { label: '41105 Protocol (Full)' },
          { label: '41105-1 CoA' },
          { label: '41105-2 CoA' },
          { label: '41105 SDS' },
        ],
        price: '$625.00',
      },
      {
        catalogNo: '41105-2',
        description: 'Human IFN-Alpha Multi-Subtype ELISA Kit (TCM)',
        packSize: '5 x 96-well plates',
        documents: [
          { label: '41105 Protocol (Full)' },
          { label: '41105-1 CoA' },
          { label: '41105-2 CoA' },
          { label: '41105 SDS' },
        ],
        price: '$2,810.00',
      },
    ],
    
    // Human IFN-Alpha ELISA Kits
    'human/ifn-alpha': [
      {
        catalogNo: '41135-1',
        description: 'VeriKine-HS Human IFN-Alpha ELISA Kit (All-Subtype)',
        packSize: '1 x 96-well plate',
        documents: [
          { label: '41135-1 CoA & Protocol' },
          { label: '41135 Protocol (Full)' },
          { label: '41135 Product Flyer' },
          { label: '41135 SDS' },
        ],
        price: '$695.00',
      },
      {
        catalogNo: '41135-2',
        description: 'VeriKine-HS Human IFN-Alpha ELISA Kit (All-Subtype)',
        packSize: '5 x 96-well plates',
        documents: [
          { label: '41135-1 CoA & Protocol' },
          { label: '41135 Protocol (Full)' },
          { label: '41135 Product Flyer' },
          { label: '41135 SDS' },
        ],
        price: '$3,125.00',
      },
    ],

    // Human IFN-Beta ELISA Kits
    'human/ifn-beta': [
      {
        catalogNo: '41410-1',
        description: 'Human IFN-Beta ELISA Kit (Serum, Plasma, TCM)',
        packSize: '1 x 96-well plate',
        documents: [
          { label: '41410-1 CoA & Protocol' },
          { label: '41410 Protocol (Full)' },
          { label: '41410 SDS' },
        ],
        price: '$625.00',
      },
      {
        catalogNo: '41410-2',
        description: 'Human IFN-Beta ELISA Kit (Serum, Plasma, TCM)',
        packSize: '5 x 96-well plates',
        documents: [
          { label: '41410-1 CoA & Protocol' },
          { label: '41410 Protocol (Full)' },
          { label: '41410 SDS' },
        ],
        price: '$2,810.00',
      },
    ],

    // Cell-Based Assays
    'cell-based-assays': [
      {
        catalogNo: '51100-7',
        description: 'iLite Human Type I IFN Responsive Cells',
        packSize: '1 vial',
        documents: [
          { label: '51100-7 CoA' },
        ],
        price: '$1,875.00',
      },
    ],

    // Interleukin (IL) ELISA Kits
    'interleukin-elisas': [
      {
        catalogNo: '41701-1',
        description: 'Human IL-22 ELISA, High Sensitivity (Serum, Plasma, TCM)',
        packSize: '1 x 96-well plate',
        documents: [
          { label: 'Performance Characterization of a High Sensitivity Human IL-22 ELISA Kit' },
          { label: '41701-1 Technical Data Sheet' },
          { label: '41701-1 CoA & Protocol (One-Page)' },
          { label: '41701 SDS' },
        ],
        price: '$675.00',
      },
      {
        catalogNo: '41702-1',
        description: 'Total Human IL-15 ELISA Kit, High Sensitivity (Serum, Plasma, TCM)',
        packSize: '1 x 96-well plate',
        documents: [
          { label: '41702-1 CoA & Protocol (One-Page)' },
          { label: '41702-1 Technical Data Sheet' },
          { label: 'Poster Presentation' },
          { label: '41702 SDS' },
        ],
        price: '$675.00',
      },
    ],

    // Proteins - Interferons
    'interferons/human': [
      {
        catalogNo: '11100-1',
        description: 'Human IFN-Alpha 2a, E.coli Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '11100-1 CoA' },
          { label: '11100 SDS' },
        ],
        price: '$315.00',
      },
      {
        catalogNo: '11200-1',
        description: 'Human IFN-Alpha 2b, E.coli Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '11200-1 CoA' },
          { label: '11200 SDS' },
        ],
        price: '$315.00',
      },
      {
        catalogNo: '11410-1',
        description: 'Human IFN-Beta, CHO Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '11410-1 CoA' },
          { label: '11410 SDS' },
        ],
        price: '$412.00',
      },
      {
        catalogNo: '11510-1',
        description: 'Human IFN-Gamma, E.coli Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '11510-1 CoA' },
          { label: '11510 SDS' },
        ],
        price: '$315.00',
      },
    ],

    'interferons/mouse': [
      {
        catalogNo: '12100-1',
        description: 'Mouse IFN-Alpha, Mammalian Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '12100-1 CoA' },
          { label: '12100 SDS' },
        ],
        price: '$412.00',
      },
      {
        catalogNo: '12400-1',
        description: 'Mouse IFN-Beta, Mammalian Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '12400-1 CoA' },
          { label: '12400 SDS' },
        ],
        price: '$412.00',
      },
      {
        catalogNo: '12500-1',
        description: 'Mouse IFN-Gamma, E.coli Expressed',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '12500-1 CoA' },
          { label: '12500 SDS' },
        ],
        price: '$315.00',
      },
      {
        catalogNo: '12820-1',
        description: 'Mouse IL-28B/IFN-Lambda 3',
        packSize: '25 μg',
        documents: [
          { label: '12820-1 CoA' },
          { label: '12820 SDS' },
        ],
        price: '$695.00',
      },
    ],

    'interferons/rat': [
      {
        catalogNo: '13101-1',
        description: 'Rat IFN-Alpha 1, Mammalian',
        packSize: '10 μg',
        documents: [
          { label: '13101-1 CoA' },
          { label: '13101 SDS' },
        ],
        price: '$412.00',
      },
      {
        catalogNo: '13114-1',
        description: 'Rat IFN-Alpha 14, Mammalian',
        packSize: '10 μg',
        documents: [
          { label: '13114-1 CoA' },
          { label: '13114 SDS' },
        ],
        price: '$412.00',
      },
      {
        catalogNo: '13400-1',
        description: 'Rat IFN-Beta',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '13400-1 CoA' },
          { label: '13400 SDS' },
        ],
        price: '$534.00',
      },
      {
        catalogNo: '13500-1',
        description: 'Rat IFN-Gamma',
        packSize: '10 μg',
        documents: [
          { label: '13500-1 CoA' },
          { label: '13500 SDS' },
        ],
        price: '$310.00',
      },
    ],

    'interferons/mammalian': [
      {
        catalogNo: '16105-1',
        description: 'Cynomolgus IFN-Alpha 2 (Ile 16), Mammalian',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '16105-1 CoA' },
          { label: '16105 SDS' },
        ],
        price: '$478.00',
      },
      {
        catalogNo: '14110-1',
        description: 'Rhesus/Cynomolgus IFN-Alpha 2',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '14110-1 CoA' },
          { label: '14110 SDS' },
        ],
        price: '$351.00',
      },
      {
        catalogNo: '15100-1',
        description: 'Feline IFN-Alpha',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '15100-1 CoA' },
          { label: '15100-1 SDS' },
        ],
        price: '$335.00',
      },
      {
        catalogNo: '17105-1',
        description: 'Porcine IFN-Alpha',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '17105-1 CoA' },
          { label: '17105 SDS' },
        ],
        price: '$437.00',
      },
      {
        catalogNo: '19616-1',
        description: 'Bovine IFN-Tau 2, Mammalian',
        packSize: '1 x 10⁵ units',
        documents: [
          { label: '19616-1 CoA' },
          { label: '19616 SDS' },
        ],
        price: '$310.00',
      },
    ],

    // Cytokines and Growth Factors
    'cytokines-growth-factors': [
      {
        catalogNo: '11965-1',
        description: 'Human Erythropoietin (EPO), Ultrapure',
        packSize: '10 μg',
        documents: [
          { label: '11965-1 CoA' },
          { label: '11965 SDS' },
        ],
        price: '$503.00',
      },
      {
        catalogNo: '11950-1',
        description: 'Human IL-2, E.coli Expressed',
        packSize: '10 μg',
        documents: [
          { label: '11950-1 CoA' },
          { label: '11950 SDS' },
        ],
        price: '$315.00',
      },
      {
        catalogNo: '11960-1',
        description: 'Human IL-6, E.coli Expressed',
        packSize: '10 μg',
        documents: [
          { label: '11960-1 CoA' },
          { label: '11960 SDS' },
        ],
        price: '$315.00',
      },
    ],

    // Antibodies - Monoclonal
    'monoclonal/anti-human-ifn/anti-human-ifn-alpha': [
      {
        catalogNo: '21100-1',
        description: 'Anti-Human IFN-Alpha, Clone MMHA-2 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21100-1 CoA' },
          { label: '21100 SDS' },
        ],
        price: '$401.00',
      },
      {
        catalogNo: '21100-2',
        description: 'Anti-Human IFN-Alpha, Clone MMHA-2 (MAb)',
        packSize: '500 μg',
        documents: [
          { label: '21100-1 CoA' },
          { label: '21100 SDS' },
        ],
        price: '$670.00',
      },
      {
        catalogNo: '21105-1',
        description: 'Anti-Human IFN-Alpha, Clone MMHA-1 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21105-1 CoA' },
          { label: '21105 SDS' },
        ],
        price: '$381.00',
      },
      {
        catalogNo: '21112-1',
        description: 'Anti-Human IFN-Alpha, Clone MMHA-11 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21112-1 CoA' },
          { label: '21112 SDS' },
        ],
        price: '$351.00',
      },
    ],

    'monoclonal/anti-human-ifn/anti-human-ifn-beta': [
      {
        catalogNo: '21400-1',
        description: 'Anti-Human IFN-Beta, Clone MMHB-3 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21400-1 CoA' },
          { label: '21400 SDS' },
        ],
        price: '$239.00',
      },
      {
        catalogNo: '21405-1',
        description: 'Anti-Human IFN-Beta, Clone MMHB-1 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21405-1 CoA' },
          { label: '21405 SDS' },
        ],
        price: '$224.00',
      },
      {
        catalogNo: '21410-1',
        description: 'Anti-Human IFN-Beta, Clone MMHB-2 (MAb)',
        packSize: '500 μg',
        documents: [
          { label: '21410-1 CoA' },
          { label: '21410 SDS' },
        ],
        price: '$2,995.00',
      },
      {
        catalogNo: '21450-1',
        description: 'Anti-Human IFN-Beta, Clone MMHB-12 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21450-1 CoA' },
          { label: '21450 SDS' },
        ],
        price: '$224.00',
      },
      {
        catalogNo: '21455-1',
        description: 'Anti-Human IFN-Beta, Clone MMHB-13 (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21455-1 CoA' },
          { label: '21455 SDS' },
        ],
        price: '$224.00',
      },
    ],

    'monoclonal/anti-human-ifn/anti-human-ifn-receptor': [
      {
        catalogNo: '21600-1',
        description: 'Anti-Human IFN Receptor, Type I (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21600-1 CoA' },
          { label: '21600 SDS' },
        ],
        price: '$450.00',
      },
      {
        catalogNo: '21610-1',
        description: 'Anti-Human IFN Receptor, Type II (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21610-1 CoA' },
          { label: '21610 SDS' },
        ],
        price: '$450.00',
      },
      {
        catalogNo: '21620-1',
        description: 'Anti-Human IFN Receptor, Type III (MAb)',
        packSize: '50 μg',
        documents: [
          { label: '21620-1 CoA' },
          { label: '21620 SDS' },
        ],
        price: '$450.00',
      },
    ],

    'monoclonal/anti-mouse-ifn': [
      {
        catalogNo: '22100-1',
        description: 'Anti-Mouse IFN-Alpha, Clone RMMA-1 (MAb)',
        packSize: '250 μg',
        documents: [
          { label: '22100-1 CoA' },
          { label: '22100-1 SDS' },
        ],
        price: '$569.00',
      },
      {
        catalogNo: '22100-3',
        description: 'FITC Conjugated Anti-Mouse IFN-Alpha, Clone RMMA-1 (MAb)',
        packSize: '25 μg',
        documents: [
          { label: '22100-3 CoA' },
          { label: '22100-3 SDS' },
        ],
        price: '$478.00',
      },
      {
        catalogNo: '22400-1',
        description: 'Anti-Mouse IFN-Beta, Clone RMMB-1 (MAb)',
        packSize: '250 μg',
        documents: [
          { label: '22400-1 CoA' },
          { label: '22400 SDS' },
        ],
        price: '$412.00',
      },
      {
        catalogNo: '22500-1',
        description: 'Anti-Mouse IFN-Gamma, Clone RMMG-1 (MAb)',
        packSize: '500 μg',
        documents: [
          { label: '22500-1 CoA' },
          { label: '22500 SDS' },
        ],
        price: '$412.00',
      },
    ],

    'monoclonal/anti-porcine-ifn': [
      {
        catalogNo: '27100-1',
        description: 'Anti-Pig IFN-Alpha, Clone K9 (MAb)',
        packSize: '500 μg',
        documents: [
          { label: '27100-1 CoA' },
          { label: '27100 MSDS' },
        ],
        price: '$396.00',
      },
      {
        catalogNo: '27105-1',
        description: 'Anti-Pig IFN-Alpha, Clone F17 (MAb)',
        packSize: '500 μg',
        documents: [
          { label: '27105-1 CoA' },
          { label: '27105 MSDS' },
        ],
        price: '$396.00',
      },
    ],

    'monoclonal/labeled': [
      {
        catalogNo: '22100-3',
        description: 'FITC Conjugated Anti-Mouse IFN-Alpha, Clone RMMA-1 (MAb)',
        packSize: '25 μg',
        documents: [
          { label: '22100-3 CoA' },
          { label: '22100-3 SDS' },
        ],
        price: '$478.00',
      },
    ],

    // Polyclonal Antibodies
    'polyclonal/anti-human-ifn': [
      {
        catalogNo: '31101-1',
        description: 'Anti-Human IFN-Alpha, Rabbit Serum (PAb)',
        packSize: '1 x 10⁵ units',
        documents: [{ label: '31101-1 CoA' }, { label: '31101 SDS' }],
        price: '$315.00',
      },
      {
        catalogNo: '31110-1',
        description: 'Anti-Human IFN-Alpha, Sheep Serum (PAb)',
        packSize: '1 x 10⁵ units',
        documents: [{ label: '31110-1 CoA' }, { label: '31110 SDS' }],
        price: '$351.00',
      },
      {
        catalogNo: '31135-1',
        description: 'Anti-Human IFN-Alpha (All Subtypes), Rabbit Serum (PAb)',
        packSize: '1 x 10⁵ units',
        documents: [{ label: '31135-1 CoA' }, { label: '31135 SDS' }],
        price: '$351.00',
      },
      {
        catalogNo: '31401-1',
        description: 'Anti-Human IFN-Beta, Sheep Serum (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '31401-1 CoA' }, { label: '31401 SDS' }],
        price: '$351.00',
      },
      {
        catalogNo: '31405-1',
        description: 'Anti-Human IFN-Beta, Rabbit IgG, protein A purified (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '31405-1 CoA' }, { label: '31405 SDS' }],
        price: '$335.00',
      },
      {
        catalogNo: '31410-1',
        description: 'Anti-Human IFN-Beta, Rabbit Serum (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '31410-1 CoA' }, { label: '31410 SDS' }],
        price: '$320.00',
      },
      {
        catalogNo: '31420-1',
        description: 'Anti-Human IFN-Beta, Goat IgG, Affinity Purified (PAb)',
        packSize: '100 μg',
        documents: [{ label: '31420-1 CoA' }, { label: '31420 SDS' }],
        price: '$1,295.00',
      },
      {
        catalogNo: '31500-1',
        description: 'Anti-Human IFN-Gamma, Rabbit Serum (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '31500-1 CoA' }, { label: '31500 SDS' }],
        price: '$198.00',
      },
      {
        catalogNo: '39000-1',
        description: 'Human Type I IFN Neutralizing Antibody Mixture',
        packSize: '0.2 ml',
        documents: [{ label: '39000-1 CoA' }, { label: '39000 SDS' }],
        price: '$711.00',
      },
    ],
    'polyclonal/anti-mouse-ifn': [
      {
        catalogNo: '32100-1',
        description: 'Anti-Mouse IFN-Alpha, Rabbit Serum (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '32100-1 CoA' }, { label: '32100 SDS' }],
        price: '$478.00',
      },
      {
        catalogNo: '32120-1',
        description: 'Anti-Mouse IFN-Alpha, Chicken IgY, Purified (PAb)',
        packSize: '500 μg',
        documents: [{ label: '32120-1 CoA' }, { label: '32120 SDS' }],
        price: '$381.00',
      },
      {
        catalogNo: '32400-1',
        description: 'Anti-Mouse IFN-Beta, Rabbit Serum (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '32400-1 CoA' }, { label: '32400 SDS' }],
        price: '$401.00',
      },
      {
        catalogNo: '32401-1',
        description: 'Anti-Mouse IFN-Beta, Rabbit IgG, Protein A purified (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '32401-1 CoA' }, { label: '32401 SDS' }],
        price: '$467.00',
      },
      {
        catalogNo: '32500-1',
        description: 'Anti-Mouse IFN-Gamma, Rabbit Serum (PAb)',
        packSize: '2 x 10⁴ units',
        documents: [{ label: '32500-1 CoA' }, { label: '32500 SDS' }],
        price: '$300.00',
      },
    ],
    'polyclonal/anti-rat-ifn': [
      {
        catalogNo: '33100-1',
        description: 'Anti-Rat IFN-Alpha, Rabbit IgG, Protein A Purified (PAb)',
        packSize: '500 μg',
        documents: [{ label: '33100-1 CoA' }, { label: '33100 SDS' }],
        price: '$1,000.00',
      },
      {
        catalogNo: '33400-1',
        description: 'Anti-Rat IFN-Beta, Rabbit IgG, Protein A purified (PAb)',
        packSize: '500 μg',
        documents: [{ label: '33400-1 CoA' }, { label: '33400 SDS' }],
        price: '$1,000.00',
      },
    ],
  };

  // Try to find matching data
  for (const [key, data] of Object.entries(catalogDataMap)) {
    if (pagePath.includes(key)) {
      return data;
    }
  }

  return null;
}

