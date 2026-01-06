import { CatalogProduct } from '@/components/ProductCatalog';

/**
 * Parse a markdown table row into a CatalogProduct
 * Handles the markdown table format from old-site-reference
 */
export function parseCatalogTableRow(row: string): CatalogProduct | null {
  // Handle multi-line rows - the format is:
  // Line 1: | catalogNo | description | packSize | - document1
  // Line 2: - document2 | price | |
  const rowLines = row.split('\n').map(line => line.trim()).filter(line => line);
  
  if (rowLines.length === 0) return null;
  
  const firstLine = rowLines[0];
  const cleanFirstLine = firstLine.trim().replace(/^\|/, '').replace(/\|$/, '');
  const firstLineCells = cleanFirstLine.split('|').map((cell) => cell.trim());

  if (firstLineCells.length < 4) return null;

  const catalogNo = firstLineCells[0] || '';
  const description = firstLineCells[1] || '';
  const packSize = firstLineCells[2] || '';
  let documentsCell = firstLineCells[3] || '';
  let price = '';

  // If we have continuation lines, extract price and more documents
  if (rowLines.length > 1) {
    const continuationLine = rowLines[1];
    // Format: "- document2 | price | |"
    if (continuationLine.includes('|')) {
      const continuationCells = continuationLine.split('|').map(cell => cell.trim());
      // The first part is more documents (starts with -)
      if (continuationCells[0] && continuationCells[0].match(/^[-*]\s+/)) {
        documentsCell += '\n' + continuationCells[0];
      }
      // Price is usually in the second cell
      price = continuationCells[1] || '';
    } else {
      // Just more documents, no price on this line
      documentsCell += '\n' + continuationLine;
    }
  } else {
    // Single line format - try to extract price from first line
    price = firstLineCells[4] || '';
  }

  // Skip if catalog number looks invalid
  if (!catalogNo || catalogNo.length < 3) return null;

  // Parse documents (format: "-   CatalogNo-1 CoA\n-   CatalogNo SDS")
  const documents: CatalogProduct['documents'] = [];
  
  // Handle multiple formats:
  // 1. Bullet list: "-   CatalogNo-1 CoA\n-   CatalogNo SDS"
  // 2. Inline: "CatalogNo-1 CoA & Protocol\n-   CatalogNo SDS"
  // The documents cell may contain newlines or be inline
  const docText = documentsCell.trim();
  
  // Split by newlines first
  const docLines = docText.split('\n').map(line => line.trim()).filter(line => line);
  
  for (const line of docLines) {
    // Remove markdown list markers and clean up
    let cleanLine = line.replace(/^[-*]\s+/, '').trim();
    
    // Handle "&" separator in single line
    if (cleanLine.includes(' & ')) {
      const parts = cleanLine.split(' & ').map(p => p.trim()).filter(p => p);
      for (const part of parts) {
        documents.push({ label: part });
      }
    } else if (cleanLine) {
      documents.push({ label: cleanLine });
    }
  }

  // If no documents found but there's content, try to parse inline format
  if (documents.length === 0 && docText) {
    // Try splitting by "&" or "|"
    const parts = docText.split(/[&|]/).map(p => p.trim()).filter(p => p);
    for (const part of parts) {
      const cleanPart = part.replace(/^[-*]\s+/, '').trim();
      if (cleanPart) {
        documents.push({ label: cleanPart });
      }
    }
  }

  // If still no documents, use the whole cell as one document
  if (documents.length === 0 && docText) {
    documents.push({ label: docText });
  }

  return {
    catalogNo,
    description,
    packSize,
    documents,
    price,
  };
}

/**
 * Extract catalog table from markdown content
 */
export function extractCatalogTable(content: string): CatalogProduct[] {
  const products: CatalogProduct[] = [];
  const lines = content.split('\n');

  let inTable = false;
  let headerSkipped = false;
  let currentRowLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect table start (header row with "Catalog No.")
    if (line.includes('Catalog No.') && line.includes('|')) {
      inTable = true;
      headerSkipped = false;
      currentRowLines = [];
      continue;
    }

    // Skip separator row (|---|---|)
    if (inTable && /^\|[\s\-:]+\|/.test(line)) {
      headerSkipped = true;
      currentRowLines = [];
      continue;
    }

    // Parse product rows
    if (inTable && headerSkipped) {
      const trimmedLine = line.trim();
      
      // Check if this is a new row (starts with |)
      if (trimmedLine.startsWith('|')) {
        // Process previous row if it exists
        if (currentRowLines.length > 0) {
          const fullRow = currentRowLines.join('\n');
          const product = parseCatalogTableRow(fullRow);
          if (product && product.catalogNo) {
            products.push(product);
          }
        }
        // Start new row
        currentRowLines = [line];
      } else if (trimmedLine && currentRowLines.length > 0) {
        // Continuation line (documents column often spans multiple lines)
        // Only continue if the line looks like it's part of the table (has dash or starts with catalog-like pattern)
        if (trimmedLine.match(/^[-*]\s+/) || trimmedLine.match(/^\d{5}/)) {
          currentRowLines.push(line);
        } else {
          // This might be the end of the table, process current row and break
          if (currentRowLines.length > 0) {
            const fullRow = currentRowLines.join('\n');
            const product = parseCatalogTableRow(fullRow);
            if (product && product.catalogNo) {
              products.push(product);
            }
          }
          break;
        }
      } else if (!trimmedLine && currentRowLines.length > 0) {
        // Empty line - process current row
        const fullRow = currentRowLines.join('\n');
        const product = parseCatalogTableRow(fullRow);
        if (product && product.catalogNo) {
          products.push(product);
        }
        currentRowLines = [];
        // Check if next non-empty line is still part of table
        let nextNonEmpty = i + 1;
        while (nextNonEmpty < lines.length && !lines[nextNonEmpty].trim()) {
          nextNonEmpty++;
        }
        if (nextNonEmpty < lines.length && !lines[nextNonEmpty].trim().startsWith('|')) {
          break;
        }
      }
    }
  }

  // Process any remaining row
  if (currentRowLines.length > 0) {
    const fullRow = currentRowLines.join('\n');
    const product = parseCatalogTableRow(fullRow);
    if (product && product.catalogNo) {
      products.push(product);
    }
  }

  return products;
}

