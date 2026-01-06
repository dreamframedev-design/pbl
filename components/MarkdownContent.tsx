import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-primary-navy prose-headings:font-bold prose-p:text-gray-700 prose-p:font-light prose-p:leading-relaxed prose-a:text-secondary-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-navy prose-strong:font-semibold">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Style tables with off-white background
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-background-offwhite rounded-lg overflow-hidden border-collapse">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-primary-navy text-white">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-200">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-accent-cyan/10 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-700">{children}</td>
          ),
          // Style lists with off-white background
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 bg-background-offwhite p-4 rounded-lg my-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 bg-background-offwhite p-4 rounded-lg my-4">
              {children}
            </ol>
          ),
          // Handle links - convert internal links to Next.js Link
          a: ({ href, children }) => {
            if (href?.startsWith('http')) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-teal hover:text-primary-navy transition-colors font-medium underline"
                >
                  {children}
                </a>
              );
            }
            // For internal links, use Next.js Link (you may need to adjust this)
            return (
              <Link
                href={href || '#'}
                className="text-secondary-teal hover:text-primary-navy transition-colors font-medium underline"
              >
                {children}
              </Link>
            );
          },
          // Style code blocks
          code: (props: any) => {
            const { inline, children } = props;
            if (inline) {
              return (
                <code className="bg-background-offwhite px-2 py-1 rounded text-sm font-mono text-primary-navy">
                  {children}
                </code>
              );
            }
            return (
              <code className="block bg-background-offwhite p-4 rounded-lg overflow-x-auto my-4">
                {children}
              </code>
            );
          },
          // Style blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-secondary-teal pl-4 italic text-gray-600 my-4 bg-background-offwhite py-2 rounded-r">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

