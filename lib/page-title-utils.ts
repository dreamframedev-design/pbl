/**
 * Generate page title from slug segments
 * Converts URL slugs to proper page titles
 */
export function generatePageTitleFromSlug(
  slug: string[],
  category: 'antibodies' | 'proteins' | 'assay-kits' | 'services'
): string {
  if (!slug || slug.length === 0) {
    return category === 'antibodies' ? 'Antibodies' :
           category === 'proteins' ? 'Proteins' :
           category === 'assay-kits' ? 'Assay Kits' : 'Services';
  }

  // Title mappings for common slugs (full path or last segment)
  const titleMappings: Record<string, string> = {
    // Antibodies
    'monoclonal': 'Monoclonal Antibodies (MAbs)',
    'polyclonal': 'Polyclonal Antibodies (PAbs)',
    'anti-human-ifn': 'Anti-Human IFN MAbs',
    'anti-mouse-ifn': 'Anti-Mouse IFN MAbs',
    'anti-porcine-ifn': 'Anti-Porcine IFN MAbs',
    'anti-rat-ifn': 'Anti-Rat IFN PAbs',
    'labeled': 'Labeled Anti-IFN MAbs (Human, Mouse)',
    'anti-human-ifn-alpha': 'Anti-Human IFN-Alpha MAbs',
    'anti-human-ifn-beta': 'Anti-Human IFN-Beta MAbs',
    'anti-human-ifn-receptor': 'Anti-Human IFN Receptor MAbs',
    // Assay Kits
    'interferon-elisas': 'Interferon (IFN) ELISA Kits',
    'interleukin-elisas': 'Interleukin (IL) ELISAs',
    'cell-based-assays': 'Cell-Based Assays',
    'non-human': 'Non-Human Interferon ELISAs',
    // Proteins
    'cytokines-growth-factors': 'Cytokines and Growth Factors',
    'interferon-decoy-receptor': 'Interferon Decoy Receptor',
    'interferons': 'Interferons',
    'human': 'Human IFN Proteins',
    'mouse': 'Mouse IFN Proteins',
    'rat': 'Rat IFN Proteins',
    'mammalian': 'Mammalian IFN Proteins (Non-Human, Non-Mouse)',
  };

  // Get the last slug segment (the actual page name)
  const lastSegment = slug[slug.length - 1];
  const fullSlug = slug.join('/');

  // Check for compound mappings first (e.g., "anti-human-ifn/anti-human-ifn-alpha")
  // Sort keys by length (longest first) to match longer patterns before shorter ones
  const sortedKeys = Object.keys(titleMappings).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (fullSlug.endsWith(key) || lastSegment === key) {
      return titleMappings[key];
    }
  }

  // Convert kebab-case to Title Case
  const titleCase = lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Handle special cases
  let result = titleCase;
  result = result.replace(/Ifn/g, 'IFN');
  result = result.replace(/Mab/g, 'MAb');
  result = result.replace(/Pab/g, 'PAb');
  result = result.replace(/Elisa/g, 'ELISA');
  result = result.replace(/Il-/g, 'IL-');
  result = result.replace(/Il /g, 'IL ');

  return result;
}

