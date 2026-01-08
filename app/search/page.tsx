'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, Filter, Database, BookOpen, Layers, Activity } from 'lucide-react';

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
    { value: 'All', label: 'All Categories', icon: <Database className="w-3 h-3" /> },
    { value: 'Products', label: 'Products', icon: <Layers className="w-3 h-3" /> },
    { value: 'Services', label: 'Services', icon: <Activity className="w-3 h-3" /> },
    { value: 'Resources', label: 'Resources', icon: <BookOpen className="w-3 h-3" /> },
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

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'Products': return 'from-blue-500 to-blue-700 text-blue-600 bg-blue-50';
      case 'Services': return 'from-teal-400 to-emerald-600 text-teal-600 bg-teal-50';
      case 'Resources': return 'from-purple-400 to-indigo-600 text-purple-600 bg-purple-50';
      default: return 'from-slate-400 to-slate-600 text-slate-600 bg-slate-50';
    }
  };

  return (
    <main className="min-h-screen bg-[#FBFBFE]">
      {/* 1. UNIFORM HERO SECTION - Corrected Full Width Breakout */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-start overflow-hidden w-screen left-1/2 -ml-[50vw]">
        {/* Background Image - Pinned to absolute edges */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/final search lab hero.webp"
            alt="Search Database header background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-white/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl text-left">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/search" className="hover:text-cyan-700">Search</Link>
            </nav>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-safe">
              <span className="text-[#002776]">Search</span>
              <br className="block" />
              <span className="text-[#04849C]">Database</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
            
            <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
              Access our full library of <span className="text-[#4B5563] font-semibold">technical specifications</span>, 
              research reagents, and specialized assay services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REFINED COMMAND BAR */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-20">
        <div className="glass-card p-2 rounded-[2rem] shadow-2xl">
          <form onSubmit={handleSearch} className="bg-white rounded-[1.8rem] p-2 flex flex-col md:flex-row gap-2">
            {/* Elegant Category Select */}
            <div className="relative group min-w-[200px]">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500">
                <Filter className="w-4 h-4" />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-11 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-xs font-black uppercase tracking-widest text-[#002776] appearance-none focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
              >
                {searchCategories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            {/* Input Engine */}
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Query technical products, clones, or services..."
                className="w-full h-full pl-14 pr-6 py-4 bg-transparent text-[#002776] placeholder-slate-400 font-medium outline-none text-lg"
              />
            </div>
            
            <button
              type="submit"
              className="px-10 py-4 bg-[#002776] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#058A9F] transition-all shadow-lg active:scale-95"
            >
              Execute Search
            </button>
          </form>
        </div>
      </div>

      {/* 3. RESULTS DISPLAY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-12 h-12 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Indexing Results...</p>
            </div>
          ) : query.trim() ? (
            <>
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
                <h2 className="text-sm font-black text-[#002776] uppercase tracking-[0.3em]">
                  {results.length === 0 ? 'No matches found' : `Database results: ${results.length}`}
                </h2>
                <span className="text-xs text-slate-400 italic">Showing matches for "{query}"</span>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      className="group relative block p-[1px] rounded-[2rem] transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(0,39,118,0.2)]"
                    >
                      <div className="bg-white rounded-[1.95rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 border border-slate-100 transition-colors group-hover:border-cyan-100">
                        {/* High-Contrast Category Marker */}
                        <div className={`hidden md:block w-1.5 h-16 rounded-full bg-gradient-to-b ${getCategoryTheme(result.category).split(' ').slice(0,2).join(' ')}`}></div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${getCategoryTheme(result.category).split(' ').slice(2).join(' ')}`}>
                              {result.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#002776] mb-2 group-hover:text-[#058A9F] transition-colors leading-tight">
                            {result.title}
                          </h3>
                          <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2">{result.snippet}</p>
                        </div>

                        <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-500 group-hover:bg-cyan-50/50 transition-all duration-300 flex-shrink-0">
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 glass-card rounded-[3rem] border-dashed">
                  <Search className="h-16 w-16 text-slate-200 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[#002776] mb-4">No Database Entries Found</h3>
                  <p className="text-slate-500 font-light max-w-sm mx-auto mb-8 leading-relaxed">
                    Our technical team is available to help you find specific documents or reagents not listed here.
                  </p>
                  <Link href="/contact-us" className="text-cyan-600 font-black text-[10px] uppercase tracking-widest hover:text-[#002776] transition-colors">
                    Contact Tech Support →
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-32">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Awaiting Search Input</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}

