import { NextRequest, NextResponse } from 'next/server';
import { readFile, readdir, stat } from 'fs/promises';
import { join } from 'path';

const OLD_SITE_REF_PATH = join(process.cwd(), 'docs', 'old-site-reference');

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  category: 'Products' | 'Services' | 'Resources' | 'Blog' | 'Other';
}

/**
 * Extract title from markdown content
 */
function extractTitle(content: string): string {
  // Try H1 first
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) return h1Match[1].trim();
  
  // Try frontmatter title
  const frontmatterMatch = content.match(/^title:\s*(.+)$/m);
  if (frontmatterMatch) return frontmatterMatch[1].trim();
  
  // Fallback: first line of content
  const firstLine = content.split('\n').find(line => line.trim().length > 0);
  return firstLine?.replace(/^#+\s*/, '').trim() || 'Untitled';
}

/**
 * Extract snippet from content (first paragraph or relevant text)
 */
function extractSnippet(content: string, query: string): string {
  // Remove markdown headers and images
  let cleanContent = content
    .replace(/^#+\s+.+$/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/---[\s\S]*?---/g, '')
    .trim();
  
  // Find the first paragraph with substantial content
  const paragraphs = cleanContent.split(/\n\s*\n/).filter(p => p.trim().length > 50);
  if (paragraphs.length > 0) {
    let snippet = paragraphs[0].trim();
    // Limit length
    if (snippet.length > 200) {
      snippet = snippet.substring(0, 197) + '...';
    }
    return snippet;
  }
  
  // Fallback: first 200 characters
  const text = cleanContent.replace(/\n/g, ' ').trim();
  return text.length > 200 ? text.substring(0, 197) + '...' : text;
}

/**
 * Convert file path to URL
 */
function pathToUrl(filePath: string): { url: string; category: SearchResult['category'] } {
  const relativePath = filePath.replace(OLD_SITE_REF_PATH, '').replace(/\\/g, '/');
  
  // Products
  if (relativePath.includes('/Products/')) {
    const pathParts = relativePath.replace(/^\/Products\//, '').split('/');
    const fileName = pathParts[pathParts.length - 1];
    
    // Remove .md extension
    const cleanName = fileName.replace(/\s+PBL Assay Science\.md$/, '').replace(/\.md$/, '');
    
    // Map to URL structure
    if (pathParts[0] === 'antibodies') {
      // Handle antibodies paths
      if (pathParts.includes('Monoclonal Antibodies (MAbs)')) {
        if (pathParts.includes('Anti-Human IFN MAbs')) {
          return { url: '/products/antibodies/monoclonal/anti-human-ifn', category: 'Products' };
        }
        if (pathParts.includes('Anti-Mouse IFN MAbs')) {
          return { url: '/products/antibodies/monoclonal/anti-mouse-ifn', category: 'Products' };
        }
        if (pathParts.includes('Anti-Porcine IFN MAbs')) {
          return { url: '/products/antibodies/monoclonal/anti-porcine-ifn', category: 'Products' };
        }
        if (pathParts.includes('Labeled Anti-IFN MAbs')) {
          return { url: '/products/antibodies/monoclonal/labeled', category: 'Products' };
        }
      }
      if (pathParts.includes('Polyclonal Antibodies (PAbs)')) {
        if (pathParts.includes('Anti-Human IFN PAbs')) {
          return { url: '/products/antibodies/polyclonal/anti-human-ifn', category: 'Products' };
        }
        if (pathParts.includes('Anti-Mouse IFN PAbs')) {
          return { url: '/products/antibodies/polyclonal/anti-mouse-ifn', category: 'Products' };
        }
        if (pathParts.includes('Anti-Rat IFN PAbs')) {
          return { url: '/products/antibodies/polyclonal/anti-rat-ifn', category: 'Products' };
        }
      }
      return { url: '/products/antibodies', category: 'Products' };
    }
    
    if (pathParts[0] === 'proteins') {
      return { url: '/products/proteins', category: 'Products' };
    }
    
    if (pathParts[0] === 'Assay Kits') {
      return { url: '/products/assay-kits', category: 'Products' };
    }
    
    return { url: '/products', category: 'Products' };
  }
  
  // Services
  if (relativePath.includes('/Services/')) {
    const pathParts = relativePath.replace(/^\/Services\//, '').split('/');
    
    if (pathParts[0] === 'Sample Testing') {
      if (pathParts.includes('SIMOA Assay Services')) {
        return { url: '/services/biomarker-sample-analysis/simoa', category: 'Services' };
      }
      if (pathParts.includes('SMC Assay Services')) {
        return { url: '/services/biomarker-sample-analysis/smc', category: 'Services' };
      }
      if (pathParts.includes('Multiplex ELISA Assay Services')) {
        return { url: '/services/biomarker-sample-analysis/multiplex-elisa', category: 'Services' };
      }
      return { url: '/services/biomarker-sample-analysis', category: 'Services' };
    }
    
    if (pathParts[0] === 'Cell-Based') {
      return { url: '/services/cell-based-services', category: 'Services' };
    }
    
    if (pathParts[0] === 'Custom Production') {
      return { url: '/services/custom-production', category: 'Services' };
    }
    
    if (pathParts[0] === 'Assay Development') {
      return { url: '/services/assay-development', category: 'Services' };
    }
    
    return { url: '/services', category: 'Services' };
  }
  
  // Resources
  if (relativePath.includes('/Resources/')) {
    return { url: '/resources', category: 'Resources' };
  }
  
  // Blog
  if (relativePath.includes('/Blog/')) {
    return { url: '/blog', category: 'Blog' };
  }
  
  return { url: '/', category: 'Other' };
}

/**
 * Recursively read all markdown files
 */
async function getAllMarkdownFiles(dir: string, fileList: string[] = []): Promise<string[]> {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const filePath = join(dir, file);
      const stats = await stat(filePath);
      
      if (stats.isDirectory()) {
        await getAllMarkdownFiles(filePath, fileList);
      } else if (file.endsWith('.md')) {
        fileList.push(filePath);
      }
    }
  } catch (error) {
    // Ignore errors (permissions, etc.)
  }
  
  return fileList;
}

/**
 * Search through markdown files
 */
async function searchMarkdownFiles(query: string, category?: string): Promise<SearchResult[]> {
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();
  
  try {
    const markdownFiles = await getAllMarkdownFiles(OLD_SITE_REF_PATH);
    
    for (const filePath of markdownFiles) {
      try {
        const content = await readFile(filePath, 'utf-8');
        const lowerContent = content.toLowerCase();
        
        // Filter by category if specified
        const { category: fileCategory } = pathToUrl(filePath);
        if (category && category !== 'All' && fileCategory !== category) {
          continue;
        }
        
        // Simple string matching
        if (lowerContent.includes(lowerQuery)) {
          const title = extractTitle(content);
          const { url, category: resultCategory } = pathToUrl(filePath);
          const snippet = extractSnippet(content, query);
          
          results.push({
            title,
            url,
            snippet,
            category: resultCategory,
          });
        }
      } catch (error) {
        // Skip files that can't be read
        continue;
      }
    }
  } catch (error) {
    console.error('Search error:', error);
  }
  
  // Sort by relevance (simple: title matches first)
  results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(lowerQuery);
    const bTitleMatch = b.title.toLowerCase().includes(lowerQuery);
    
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    
    return a.title.localeCompare(b.title);
  });
  
  return results.slice(0, 50); // Limit to 50 results
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'All';
  
  if (!query || query.trim().length === 0) {
    return NextResponse.json({ results: [] });
  }
  
  const results = await searchMarkdownFiles(query.trim(), category as string);
  
  return NextResponse.json({ results });
}

