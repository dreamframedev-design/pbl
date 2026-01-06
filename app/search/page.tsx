'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import FloatingCTA from '@/components/FloatingCTA';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  category: 'Products' | 'Services' | 'Resources' | 'Blog' | 'Other';
}

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');

  const searchCategories = [
    { value: 'All', label: 'All' },
    { value: 'Products', label: 'Products' },
    { value: 'Services', label: 'Services' },
    { value: 'Resources', label: 'Resources' },
    { value: 'Blog', label: 'Blog' },
  ];

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const params = new URLSearchParams({
          q: query,
          ...(category !== 'All' && { category }),
        });
        const response = await fetch(`/api/search?${params.toString()}`);
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query, category]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      q: query,
      ...(category !== 'All' && { category }),
    });
    router.push(`/search?${params.toString()}`);
  };

  const categoryColors = {
    Products: 'bg-blue-100 text-blue-800',
    Services: 'bg-teal-100 text-teal-800',
    Resources: 'bg-purple-100 text-purple-800',
    Blog: 'bg-green-100 text-green-800',
    Other: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingCTA />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-navy to-primary-navy/90 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            Search Results
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Category Dropdown */}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                {searchCategories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              
              {/* Search Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, services..."
                  className="w-full px-4 py-3 pl-11 pr-12 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              
              {/* Search Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-secondary-teal hover:bg-secondary-teal/90 text-white rounded-lg border border-secondary-teal transition-colors font-medium"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-navy"></div>
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : query.trim() ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  {results.length === 0
                    ? 'No results found'
                    : `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
                </p>
              </div>

              {results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      className="block group p-6 bg-white border border-gray-200 rounded-lg hover:border-secondary-teal hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-primary-navy group-hover:text-secondary-teal transition-colors">
                              {result.title}
                            </h3>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[result.category]}`}
                            >
                              {result.category}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{result.snippet}</p>
                          <div className="mt-3 flex items-center text-secondary-teal text-sm font-medium">
                            View page
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-background-offwhite rounded-lg">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    Try different keywords or browse our{' '}
                    <Link href="/products" className="text-secondary-teal hover:underline">
                      products
                    </Link>
                    {' '}or{' '}
                    <Link href="/services" className="text-secondary-teal hover:underline">
                      services
                    </Link>
                    .
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-background-offwhite rounded-lg">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start your search</h3>
              <p className="text-gray-600">
                Enter a search term above to find products, services, and resources.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-navy"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}

