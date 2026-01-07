import { readFile, readdir, stat } from 'fs/promises';
import { join } from 'path';

const OLD_SITE_REF_PATH = join(process.cwd(), 'docs', 'old-site-reference');

interface MarkdownContent {
  content: string;
  title: string;
}

/**
 * Maps URL slug to file path in old-site-reference
 * Examples:
 * - ['monoclonal', 'anti-human-ifn'] -> 'Monoclonal Antibodies (MAbs)/Anti-Human IFN MAbs'
 * - ['human', 'ifn-alpha'] -> 'Human IFN Proteins/Human IFN-Alpha'
 */
function slugToPath(slug: string[], category: 'antibodies' | 'proteins' | 'assay-kits' | 'services'): string {
  const categoryMap: Record<string, string> = {
    'antibodies': 'Products/antibodies',
    'proteins': 'Products/proteins',
    'assay-kits': 'Products/Assay Kits',
    'services': 'Services',
  };

  const basePath = categoryMap[category] || categoryMap['products'];

  // Handle empty slug (shouldn't happen, but safety check)
  if (!slug || slug.length === 0) {
    return basePath;
  }

  // Convert slug segments to title case and handle special mappings
  const pathSegments: string[] = [];
  
  for (let i = 0; i < slug.length; i++) {
    const segment = slug[i];
    const prevSegment = i > 0 ? slug[i - 1] : '';
    const nextSegment = i < slug.length - 1 ? slug[i + 1] : '';

    // Handle common mappings
    const mappings: Record<string, string> = {
      'monoclonal': 'Monoclonal Antibodies (MAbs)',
      'polyclonal': 'Polyclonal Antibodies (PAbs)',
      'anti-human-ifn': prevSegment === 'monoclonal' ? 'Anti-Human IFN MAbs' : 'Anti-Human IFN PAbs',
      'anti-mouse-ifn': prevSegment === 'monoclonal' ? 'Anti-Mouse IFN MAbs' : 'Anti-Mouse IFN PAbs',
      'anti-porcine-ifn': 'Anti-Porcine IFN MAbs',
      'anti-rat-ifn': 'Anti-Rat IFN PAbs',
      'labeled': 'Labeled Anti-IFN MAbs (Human, Mouse)',
      'interferon-elisas': 'Interferon IFN ELISA kits',
      'interleukin-elisas': 'Interleukin (IL) ELISAs',
      'human': prevSegment === 'interferons' ? 'Human IFN Proteins' : 
               prevSegment === 'interferon-elisas' ? 'Human Interferon ELISAs' :
               prevSegment === 'mouse' ? 'Human' : 'Human',
      'mouse': prevSegment === 'interferons' ? 'Mouse IFN Proteins' :
               prevSegment === 'interferon-elisas' ? 'Mouse Interferon ELISAs' : 'Mouse',
      'rat': 'Rat IFN Proteins',
      'mammalian': 'Mammalian IFN Proteins (Non-Human, Non-Mouse)',
      'cytokines-growth-factors': 'Cytokines and Growth Factors',
      'interferon-decoy-receptor': 'Interferon Decoy Receptor',
      'cell-based-assays': 'Cell-based Assays',
      'human-il-15': 'Human IL-15 ELISA',
      'human-il-22': 'Human IL-22 ELISA',
      'non-human': 'Non-Human Interferon ELISAs',
      'interferons': 'Interferons',
      'ifn-alpha': 'Human IFN-Alpha',
      'ifn-beta': 'Human IFN-Beta',
      'ifn-gamma': 'Human IFN-Gamma',
      'ifn-lambda': 'Human IFN-Lambda',
    };

    if (mappings[segment]) {
      pathSegments.push(mappings[segment]);
    } else {
      // Convert kebab-case to Title Case
      const titleCase = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      pathSegments.push(titleCase);
    }
  }

  return join(basePath, ...pathSegments);
}

/**
 * Find markdown file in directory, handling various naming patterns
 */
async function findMarkdownFile(dirPath: string): Promise<string | null> {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        return join(dirPath, entry.name);
      }
      
      // If it's a directory, try to find index file
      if (entry.isDirectory()) {
        const subDirPath = join(dirPath, entry.name);
        const subEntries = await readdir(subDirPath, { withFileTypes: true });
        for (const subEntry of subEntries) {
          if (subEntry.isFile() && subEntry.name.endsWith('.md')) {
            return join(subDirPath, subEntry.name);
          }
        }
      }
    }
    
    return null;
  } catch {
    return null;
  }
}

/**
 * Extract title from markdown content (first h1 or first line)
 */
function extractTitle(content: string): string {
  // Try to find h1
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1].trim();
  }

  // Try to find first bold text
  const boldMatch = content.match(/\*\*(.+?)\*\*/);
  if (boldMatch) {
    return boldMatch[1].trim();
  }

  // Use first non-empty line
  const firstLine = content.split('\n').find(line => line.trim().length > 0);
  if (firstLine) {
    return firstLine.trim().replace(/^[#*-\s]+/, '').substring(0, 100);
  }

  return 'Untitled';
}

/**
 * Extract first paragraph as description
 */
function extractDescription(content: string): string | undefined {
  const firstParagraphMatch = content.match(/^(?!#|\*|-|\s).*?(\.|\?|!)\s*$/ms);
  if (firstParagraphMatch) {
    return firstParagraphMatch[0].trim().split('\n')[0];
  }
  return undefined;
}

/**
 * Get markdown content for a given slug and category
 */
export async function getMarkdownContent(
  slug: string[],
  category: 'antibodies' | 'proteins' | 'assay-kits' | 'services'
): Promise<MarkdownContent | null> {
  try {
    // Handle empty slug
    if (!slug || slug.length === 0) {
      return null;
    }
    
    // Build path to potential markdown file location
    const relativePath = slugToPath(slug, category);
    const fullPath = join(OLD_SITE_REF_PATH, relativePath);

    // Check if path exists and find markdown file
    try {
      const stats = await stat(fullPath);
      let markdownPath: string | null = null;

      if (stats.isFile() && fullPath.endsWith('.md')) {
        markdownPath = fullPath;
      } else if (stats.isDirectory()) {
        markdownPath = await findMarkdownFile(fullPath);
      }

      if (!markdownPath) {
        return null;
      }

      const content = await readFile(markdownPath, 'utf-8');
      const title = extractTitle(content);

      return { content, title };
    } catch {
      // Path doesn't exist, try alternative locations
      // Try finding in parent directory
      const pathParts = relativePath.split(/[/\\]/);
      for (let i = pathParts.length - 1; i > 0; i--) {
        const tryPath = join(OLD_SITE_REF_PATH, ...pathParts.slice(0, i));
        try {
          const stats = await stat(tryPath);
          if (stats.isDirectory()) {
            const markdownPath = await findMarkdownFile(tryPath);
            if (markdownPath) {
              const content = await readFile(markdownPath, 'utf-8');
              const title = extractTitle(content);
              return { content, title };
            }
          }
        } catch {
          continue;
        }
      }

      return null;
    }
  } catch (error) {
    console.error('Error loading markdown:', error);
    return null;
  }
}

/**
 * Get sub-categories (subdirectories) for a given path
 */
export async function getSubCategories(
  slug: string[],
  category: 'antibodies' | 'proteins' | 'assay-kits' | 'services'
): Promise<Array<{ name: string; slug: string; description?: string }>> {
  try {
    const relativePath = slugToPath(slug, category);
    const fullPath = join(OLD_SITE_REF_PATH, relativePath);

    try {
      const stats = await stat(fullPath);
      if (!stats.isDirectory()) {
        return [];
      }

      const entries = await readdir(fullPath, { withFileTypes: true });
      const subCategories: Array<{ name: string; slug: string; description?: string }> = [];

      for (const entry of entries) {
        if (entry.isDirectory()) {
          // Get a readable name from directory name
          const name = entry.name
            .replace(/\s*PBL Assay Science\s*/gi, '')
            .replace(/\.md$/gi, '')
            .trim();
          
          // Create slug from directory name - handle special cases
          let dirSlug = entry.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
          
          // Handle specific mappings for better URL consistency
          const slugMappings: Record<string, string> = {
            'human-ifn-alpha-elisa-kits': 'human-ifn-alpha-elisa-kits',
            'human-ifn-beta-elisa-kits': 'human-ifn-beta-elisa-kits',
            'human-ifn-gamma-receptor-elisa': 'human-ifn-gamma-receptor-elisa',
            'human-ifn-lambda-elisas': 'human-ifn-lambda-elisas',
          };
          
          // Check if there's a specific mapping, otherwise use the generated slug
          dirSlug = slugMappings[dirSlug] || dirSlug;

          // Try to find a markdown file in the subdirectory for description
          let description: string | undefined;
          try {
            const subDirPath = join(fullPath, entry.name);
            const subEntries = await readdir(subDirPath, { withFileTypes: true });
            for (const subEntry of subEntries) {
              if (subEntry.isFile() && subEntry.name.endsWith('.md')) {
                const mdPath = join(subDirPath, subEntry.name);
                const content = await readFile(mdPath, 'utf-8');
                
                // Split into paragraphs first (before cleaning)
                const rawParagraphs = content.split(/\n\s*\n/).filter(p => p.trim().length > 0);
                
                // Find first meaningful paragraph (skip headers, tables, etc.)
                for (const rawPara of rawParagraphs) {
                  // Skip if it's a header
                  if (/^#{1,6}\s+/.test(rawPara.trim())) continue;
                  // Skip if it looks like a table (has multiple | characters)
                  if ((rawPara.match(/\|/g) || []).length > 2) continue;
                  // Skip if it's too short
                  if (rawPara.trim().length < 30) continue;
                  // Skip if it's just numbers/dollars
                  if (/^[\d\s\$\.]+$/.test(rawPara.trim())) continue;
                  
                  // Clean this paragraph: remove images, links, headers, etc.
                  let cleanPara = rawPara
                    // Remove markdown images ![alt](url)
                    .replace(/!\[.*?\]\(.*?\)/g, '')
                    // Remove markdown links [text](url) but keep text
                    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
                    // Remove headers (# ## ###)
                    .replace(/^#{1,6}\s+/gm, '')
                    // Remove bold/italic markers but keep text
                    .replace(/\*\*([^\*]+)\*\*/g, '$1')
                    .replace(/\*([^\*]+)\*/g, '$1')
                    .replace(/__([^_]+)__/g, '$1')
                    .replace(/_([^_]+)_/g, '$1')
                    // Remove URLs
                    .replace(/https?:\/\/[^\s\)]+/g, '')
                    // Remove markdown table syntax
                    .replace(/\|/g, ' ')
                    // Normalize whitespace (keep single spaces and newlines within paragraph)
                    .replace(/[ \t]+/g, ' ')
                    .replace(/\n+/g, ' ')
                    .trim();
                  
                  // Take the entire first paragraph (it should already be just one sentence)
                  if (cleanPara.length > 0) {
                    description = cleanPara.substring(0, 300);
                    if (description.length === 300) description += '...';
                    break;
                  }
                }
                break;
              }
            }
          } catch {
            // No description found, that's okay
          }

          subCategories.push({
            name,
            slug: dirSlug,
            description,
          });
        }
      }

      return subCategories.sort((a, b) => a.name.localeCompare(b.name));
    } catch {
      return [];
    }
  } catch {
    return [];
  }
}

/**
 * Generate static params for build-time generation (optional, for performance)
 */
export async function getAllSlugs(category: 'antibodies' | 'proteins' | 'assay-kits' | 'services'): Promise<string[][]> {
  // This could be expanded to scan the directory structure
  // For now, return empty array to enable dynamic rendering
  return [];
}

/**
 * Maps resource category and slug to file path in old-site-reference
 */
function resourceSlugToPath(category: string, slug: string[]): string {
  const categoryMap: Record<string, string> = {
    'general-protocols': 'Resources/General Protocols',
    'scientific-articles': 'Resources/Scientific Articles',
    'technical-presentations': 'Resources/Technical Presentations',
  };

  const basePath = categoryMap[category] || 'Resources';
  
  if (!slug || slug.length === 0) {
    return basePath;
  }

  // Convert slug segments to directory names
  // Handle special character conversions
  const pathSegments = slug.map(segment => {
    // Convert kebab-case to Title Case with spaces
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });

  return join(basePath, ...pathSegments);
}

/**
 * Get resource content for a given category and slug
 */
export async function getResourceContent(
  category: string,
  slug: string[]
): Promise<MarkdownContent | null> {
  try {
    if (!slug || slug.length === 0) {
      return null;
    }

    const relativePath = resourceSlugToPath(category, slug);
    const fullPath = join(OLD_SITE_REF_PATH, relativePath);

    try {
      const stats = await stat(fullPath);
      let markdownPath: string | null = null;

      if (stats.isFile() && fullPath.endsWith('.md')) {
        markdownPath = fullPath;
      } else if (stats.isDirectory()) {
        markdownPath = await findMarkdownFile(fullPath);
      }

      if (!markdownPath) {
        return null;
      }

      const content = await readFile(markdownPath, 'utf-8');
      const title = extractTitle(content);

      return { content, title };
    } catch {
      // Try alternative locations
      const pathParts = relativePath.split(/[/\\]/);
      for (let i = pathParts.length - 1; i > 0; i--) {
        const tryPath = join(OLD_SITE_REF_PATH, ...pathParts.slice(0, i));
        try {
          const stats = await stat(tryPath);
          if (stats.isDirectory()) {
            const markdownPath = await findMarkdownFile(tryPath);
            if (markdownPath) {
              const content = await readFile(markdownPath, 'utf-8');
              const title = extractTitle(content);
              return { content, title };
            }
          }
        } catch {
          continue;
        }
      }
      return null;
    }
  } catch (error) {
    console.error('Error loading resource content:', error);
    return null;
  }
}

/**
 * Get all resources for a given category
 */
export async function getResourcesByCategory(category: string): Promise<Array<{
  name: string;
  slug: string;
  description?: string;
  fullPath: string;
}>> {
  const categoryMap: Record<string, string> = {
    'general-protocols': 'Resources/General Protocols',
    'scientific-articles': 'Resources/Scientific Articles',
    'technical-presentations': 'Resources/Technical Presentations',
  };

  const basePath = categoryMap[category] || 'Resources';
  const fullPath = join(OLD_SITE_REF_PATH, basePath);
  const resources: Array<{
    name: string;
    slug: string;
    description?: string;
    fullPath: string;
  }> = [];

  try {
    const entries = await readdir(fullPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDirPath = join(fullPath, entry.name);
        const markdownPath = await findMarkdownFile(subDirPath);
        
        if (markdownPath) {
          const content = await readFile(markdownPath, 'utf-8');
          // Use folder name as the display name (not markdown title)
          const name = entry.name;
          const description = extractDescription(content);
          
          // Create slug from directory name
          const slugSegment = entry.name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');

          resources.push({
            name,
            slug: slugSegment,
            description,
            fullPath: subDirPath,
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading resources for category ${category}:`, error);
  }

  return resources.sort((a, b) => a.name.localeCompare(b.name));
}


