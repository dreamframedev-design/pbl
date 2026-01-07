'use client';

import { useState, FormEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, ShoppingCart, User, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState('All');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Check if a path is active (for top nav)
  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Check if a dropdown link is active (exact match or parent of current path)
  const isDropdownActive = (href: string) => {
    if (!pathname) return false;
    if (href === pathname) return true;
    // Also highlight if current path is a child of this href
    if (pathname.startsWith(href) && href !== '/') {
      // Make sure it's not just a partial match (e.g., /products shouldn't match /product)
      const nextChar = pathname[href.length];
      return nextChar === '/' || nextChar === undefined;
    }
    return false;
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const params = new URLSearchParams({
        q: searchQuery.trim(),
        ...(searchCategory !== 'All' && { category: searchCategory }),
      });
      router.push(`/search?${params.toString()}`);
    }
  };

  const searchCategories = [
    { value: 'All', label: 'All' },
    { value: 'Assay Kits', label: 'Assay Kits' },
    { value: 'Proteins', label: 'Proteins' },
    { value: 'Antibodies', label: 'Antibodies' },
    { value: 'Services', label: 'Services' },
    { value: 'Resources', label: 'Resources' },
  ];

  return (
    <header className="sticky top-0 z-[100] glass-header">
      {/* Main Header Bar */}
      <div className="max-w-[1600px] mx-auto px-8 py-5 flex items-center gap-12">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl font-black text-[#002776] tracking-tighter">
            PBL <span className="font-light text-slate-400">ASSAY SCIENCE</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-3xl relative">
          <form onSubmit={handleSearch} className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 h-12 overflow-hidden">
            {/* Category Dropdown */}
            <div className="relative h-full z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                }}
                onBlur={() => setTimeout(() => setCategoryDropdownOpen(false), 200)}
                className="bg-slate-200/50 px-5 h-full text-[10px] font-black text-[#002776] border-r border-slate-200 uppercase tracking-widest hover:bg-slate-200 transition-colors flex items-center gap-2"
              >
                {searchCategories.find(cat => cat.value === searchCategory)?.label || 'All'}
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            
            {/* Dropdown Menu - Outside form to avoid overflow clipping */}
            {categoryDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-[200] py-1">
                {searchCategories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSearchCategory(category.value);
                      setCategoryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      searchCategory === category.value
                        ? 'bg-primary-navy/10 text-primary-navy font-medium'
                        : 'text-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}

            {/* Search Input with Icon */}
            <div className="flex-1 relative h-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 60+ technical products, proteins, and services..."
                className="w-full bg-transparent pl-10 pr-5 text-sm outline-none h-full"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#058A9F] hover:bg-cyan-500 h-full px-6 text-white transition-colors flex items-center rounded-r-xl"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Request a Quote Button - Next to Search */}
        <Link
          href="/speak-to-a-scientist"
          className="bg-gradient-to-r from-[#058A9F] to-[#00B8C0] px-8 py-3 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-xl shadow-cyan-500/20 flex-shrink-0"
        >
          Request a Quote
        </Link>

        {/* Icons - Far Right */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href="/cart"
            className="relative p-2 text-gray-700 hover:text-primary-navy transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link
            href="/contact-us"
            className="p-2 text-gray-700 hover:text-primary-navy transition-colors"
            aria-label="Contact us"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="/user/login"
            className="p-2 text-gray-700 hover:text-primary-navy transition-colors"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Navigation Bar - Row Below with Dropdowns */}
      <nav className="max-w-[1600px] mx-auto px-8 flex gap-10">
        <ul className="flex items-center gap-1 lg:gap-4 h-full">
              {/* Products Dropdown */}
              <li
                className="nav-item relative py-4"
                onMouseEnter={() => setOpenDropdown('products')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/products"
                  className="flex items-center gap-2 text-xs font-black text-[#002776] uppercase tracking-[0.2em]"
                >
                  PRODUCTS
                  <ChevronDown className="w-3 h-3" />
                </Link>
                {openDropdown === 'products' && (
                  <div className="mega-menu absolute left-0 w-[1200px] bg-white rounded-2xl p-12 grid grid-cols-4 gap-12 border border-slate-100">
                    {/* Assay Kits Column */}
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Assay Kits</h4>
                      <div className="space-y-4">
                        <Link 
                          href="/products/assay-kits" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/products/assay-kits')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          All Assay Kits
                        </Link>
                        <Link 
                          href="/products/assay-kits/cell-based-assays" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/products/assay-kits/cell-based-assays')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Cell-Based Assays
                        </Link>
                        <div>
                          <Link 
                            href="/products/assay-kits/interferon-elisas" 
                            className={`phosphor-link block text-xs font-semibold font-bold mb-2 ${
                              isDropdownActive('/products/assay-kits/interferon-elisas')
                                ? 'text-[#058A9F]'
                                : 'text-slate-600'
                            }`}
                          >
                            Interferon (IFN) ELISA Kits
                          </Link>
                          <div className="pl-4 border-l border-slate-100 space-y-2">
                            <div>
                              <Link 
                                href="/products/assay-kits/interferon-elisas/human" 
                                className={`block text-[11px] font-semibold mb-1 ${
                                  isDropdownActive('/products/assay-kits/interferon-elisas/human')
                                    ? 'text-[#058A9F]'
                                    : 'hover:text-[#058A9F]'
                                }`}
                              >
                                Human Interferon ELISAs
                              </Link>
                              <div className="pl-3 space-y-1">
                                <Link 
                                  href="/products/assay-kits/interferon-elisas/human/ifn-alpha" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/assay-kits/interferon-elisas/human/ifn-alpha')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Human IFN-Alpha ELISA Kits
                                </Link>
                                <Link 
                                  href="/products/assay-kits/interferon-elisas/human/ifn-beta" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/assay-kits/interferon-elisas/human/ifn-beta')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Human IFN-Beta ELISA Kits
                                </Link>
                                <Link 
                                  href="/products/assay-kits/interferon-elisas/human/ifn-gamma-receptor" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/assay-kits/interferon-elisas/human/ifn-gamma-receptor')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Human IFN-Gamma Receptor ELISA
                                </Link>
                              </div>
                            </div>
                            <div>
                              <Link 
                                href="/products/assay-kits/interferon-elisas/mouse" 
                                className={`block text-[11px] font-semibold mb-1 ${
                                  isDropdownActive('/products/assay-kits/interferon-elisas/mouse')
                                    ? 'text-[#058A9F]'
                                    : 'hover:text-[#058A9F]'
                                }`}
                              >
                                Mouse Interferon ELISAs
                              </Link>
                              <div className="pl-3 space-y-1">
                                <Link 
                                  href="/products/assay-kits/interferon-elisas/mouse/ifn-alpha" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/assay-kits/interferon-elisas/mouse/ifn-alpha')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Mouse IFN-Alpha ELISAs
                                </Link>
                                <Link 
                                  href="/products/assay-kits/interferon-elisas/mouse/ifn-beta" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/assay-kits/interferon-elisas/mouse/ifn-beta')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Mouse IFN-Beta ELISAs
                                </Link>
                                <Link 
                                  href="/products/assay-kits/interferon-elisas/mouse/ifn-lambda" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/assay-kits/interferon-elisas/mouse/ifn-lambda')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Mouse IFN-Lambda ELISA
                                </Link>
                              </div>
                            </div>
                            <Link 
                              href="/products/assay-kits/interferon-elisas/non-human" 
                              className={`block text-[11px] font-semibold ${
                                isDropdownActive('/products/assay-kits/interferon-elisas/non-human')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Non-Human Interferon ELISAs
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link 
                            href="/products/assay-kits/interleukin-elisas" 
                            className={`phosphor-link block text-xs font-semibold font-bold mb-2 ${
                              isDropdownActive('/products/assay-kits/interleukin-elisas')
                                ? 'text-[#058A9F]'
                                : 'text-slate-600'
                            }`}
                          >
                            Interleukin (IL) ELISA Kits
                          </Link>
                          <div className="pl-4 border-l border-slate-100 space-y-2">
                            <Link 
                              href="/products/assay-kits/interleukin-elisas/human-il-15" 
                              className={`block text-[11px] ${
                                isDropdownActive('/products/assay-kits/interleukin-elisas/human-il-15')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Human IL-15 ELISA
                            </Link>
                            <Link 
                              href="/products/assay-kits/interleukin-elisas/human-il-22" 
                              className={`block text-[11px] ${
                                isDropdownActive('/products/assay-kits/interleukin-elisas/human-il-22')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Human IL-22 ELISA
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proteins Column */}
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Proteins</h4>
                      <div className="space-y-4">
                        <Link 
                          href="/products/proteins" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/products/proteins')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          All Proteins
                        </Link>
                        <Link 
                          href="/products/proteins/cytokines-growth-factors" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/products/proteins/cytokines-growth-factors')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Cytokines and Growth Factors
                        </Link>
                        <div className="pl-4 border-l border-slate-100 space-y-1">
                          <Link 
                            href="/products/proteins/cytokines-growth-factors/ecoli-cho" 
                            className={`block text-[11px] ${
                              isDropdownActive('/products/proteins/cytokines-growth-factors/ecoli-cho')
                                ? 'text-[#058A9F]'
                                : 'hover:text-[#058A9F]'
                            }`}
                          >
                            E.coli & CHO Expressed
                          </Link>
                          <Link 
                            href="/products/proteins/cytokines-growth-factors/human-cell" 
                            className={`block text-[11px] ${
                              isDropdownActive('/products/proteins/cytokines-growth-factors/human-cell')
                                ? 'text-[#058A9F]'
                                : 'hover:text-[#058A9F]'
                            }`}
                          >
                            Human Cell-Expressed
                          </Link>
                        </div>
                        <Link 
                          href="/products/proteins/interferon-decoy-receptor" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/products/proteins/interferon-decoy-receptor')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Interferon Decoy Receptor
                        </Link>
                        <div>
                          <Link 
                            href="/products/proteins/interferons" 
                            className={`phosphor-link block text-xs font-semibold font-bold mb-2 ${
                              isDropdownActive('/products/proteins/interferons')
                                ? 'text-[#058A9F]'
                                : 'text-slate-600'
                            }`}
                          >
                            Interferons
                          </Link>
                          <div className="pl-4 border-l border-slate-100 space-y-2">
                            <div>
                              <Link 
                                href="/products/proteins/interferons/human" 
                                className={`block text-[11px] font-semibold mb-1 ${
                                  isDropdownActive('/products/proteins/interferons/human')
                                    ? 'text-[#058A9F]'
                                    : 'hover:text-[#058A9F]'
                                }`}
                              >
                                Human IFN Proteins
                              </Link>
                              <div className="pl-3 space-y-1">
                                <Link 
                                  href="/products/proteins/interferons/human/ifn-alpha" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/proteins/interferons/human/ifn-alpha')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Human IFN-Alpha
                                </Link>
                                <Link 
                                  href="/products/proteins/interferons/human/ifn-beta" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/proteins/interferons/human/ifn-beta')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Human IFN-Beta
                                </Link>
                                <Link 
                                  href="/products/proteins/interferons/human/other" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/proteins/interferons/human/other')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Other Human IFNs
                                </Link>
                              </div>
                            </div>
                            <div>
                              <Link 
                                href="/products/proteins/interferons/mouse" 
                                className={`block text-[11px] font-semibold mb-1 ${
                                  isDropdownActive('/products/proteins/interferons/mouse')
                                    ? 'text-[#058A9F]'
                                    : 'hover:text-[#058A9F]'
                                }`}
                              >
                                Mouse IFN Proteins
                              </Link>
                              <div className="pl-3 space-y-1">
                                <Link 
                                  href="/products/proteins/interferons/mouse/ifn-alpha" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/proteins/interferons/mouse/ifn-alpha')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Mouse IFN-Alpha
                                </Link>
                                <Link 
                                  href="/products/proteins/interferons/mouse/ifn-beta" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/proteins/interferons/mouse/ifn-beta')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Mouse IFN-Beta
                                </Link>
                                <Link 
                                  href="/products/proteins/interferons/mouse/ifn-lambda" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/proteins/interferons/mouse/ifn-lambda')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Mouse IFN-Lambda
                                </Link>
                              </div>
                            </div>
                            <Link 
                              href="/products/proteins/interferons/rat" 
                              className={`block text-[11px] font-semibold ${
                                isDropdownActive('/products/proteins/interferons/rat')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Rat IFN Proteins
                            </Link>
                            <Link 
                              href="/products/proteins/interferons/mammalian" 
                              className={`block text-[11px] font-semibold ${
                                isDropdownActive('/products/proteins/interferons/mammalian')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Mammalian IFN Proteins
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Antibodies Column */}
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Antibodies</h4>
                      <div className="space-y-4">
                        <Link 
                          href="/products/antibodies" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/products/antibodies')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          All Antibodies
                        </Link>
                        <div>
                          <Link 
                            href="/products/antibodies/monoclonal" 
                            className={`phosphor-link block text-xs font-semibold font-bold mb-2 ${
                              isDropdownActive('/products/antibodies/monoclonal')
                                ? 'text-[#058A9F]'
                                : 'text-slate-600'
                            }`}
                          >
                            Monoclonal Antibodies (MAbs)
                          </Link>
                          <div className="pl-4 border-l border-slate-100 space-y-2">
                            <div>
                              <Link 
                                href="/products/antibodies/monoclonal/anti-human-ifn" 
                                className={`block text-[11px] font-semibold mb-1 ${
                                  isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn')
                                    ? 'text-[#058A9F]'
                                    : 'hover:text-[#058A9F]'
                                }`}
                              >
                                Anti-Human IFN MAbs
                              </Link>
                              <div className="pl-3 space-y-1">
                                <Link 
                                  href="/products/antibodies/monoclonal/anti-human-ifn/receptor" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn/receptor')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Anti-Human IFN Receptor MAbs
                                </Link>
                                <Link 
                                  href="/products/antibodies/monoclonal/anti-human-ifn/ifn-alpha" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn/ifn-alpha')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Anti-Human IFN-Alpha MAbs
                                </Link>
                                <Link 
                                  href="/products/antibodies/monoclonal/anti-human-ifn/ifn-beta" 
                                  className={`block text-[11px] ${
                                    isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn/ifn-beta')
                                      ? 'text-[#058A9F]'
                                      : 'hover:text-[#058A9F]'
                                  }`}
                                >
                                  Anti-Human IFN-Beta MAbs
                                </Link>
                              </div>
                            </div>
                            <Link 
                              href="/products/antibodies/monoclonal/anti-mouse-ifn" 
                              className={`block text-[11px] font-semibold ${
                                isDropdownActive('/products/antibodies/monoclonal/anti-mouse-ifn')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Anti-Mouse IFN MAbs
                            </Link>
                            <Link 
                              href="/products/antibodies/monoclonal/anti-porcine-ifn" 
                              className={`block text-[11px] font-semibold ${
                                isDropdownActive('/products/antibodies/monoclonal/anti-porcine-ifn')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Anti-Porcine IFN MAbs
                            </Link>
                            <Link 
                              href="/products/antibodies/monoclonal/labeled" 
                              className={`block text-[11px] font-semibold ${
                                isDropdownActive('/products/antibodies/monoclonal/labeled')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Labeled Anti-IFN MAbs
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link 
                            href="/products/antibodies/polyclonal" 
                            className={`phosphor-link block text-xs font-semibold font-bold mb-2 ${
                              isDropdownActive('/products/antibodies/polyclonal')
                                ? 'text-[#058A9F]'
                                : 'text-slate-600'
                            }`}
                          >
                            Polyclonal Antibodies (PAbs)
                          </Link>
                          <div className="pl-4 border-l border-slate-100 space-y-2">
                            <Link 
                              href="/products/antibodies/polyclonal/anti-human-ifn" 
                              className={`block text-[11px] ${
                                isDropdownActive('/products/antibodies/polyclonal/anti-human-ifn')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Anti-Human IFN PAbs
                            </Link>
                            <Link 
                              href="/products/antibodies/polyclonal/anti-mouse-ifn" 
                              className={`block text-[11px] ${
                                isDropdownActive('/products/antibodies/polyclonal/anti-mouse-ifn')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Anti-Mouse IFN PAbs
                            </Link>
                            <Link 
                              href="/products/antibodies/polyclonal/anti-rat-ifn" 
                              className={`block text-[11px] ${
                                isDropdownActive('/products/antibodies/polyclonal/anti-rat-ifn')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Anti-Rat IFN PAbs
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Featured Content Column */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                      <span className="text-[9px] font-black text-cyan-600 uppercase tracking-widest mb-2 block">New Technical Guide</span>
                      <h5 className="text-sm font-bold text-[#002776] mb-2">High-Sensitivity ELISAs</h5>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">View our performance data for IL-15 and IL-22 quantification.</p>
                      <Link href="/resources" className="text-[10px] font-black text-[#058A9F] uppercase tracking-widest">Learn More →</Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Services Dropdown */}
              <li
                className="nav-item relative py-4"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-xs font-black text-[#002776] uppercase tracking-[0.2em]"
                >
                  SERVICES
                  <ChevronDown className="w-3 h-3" />
                </Link>
                {openDropdown === 'services' && (
                  <div className="mega-menu absolute left-0 w-[600px] bg-white rounded-2xl p-10 grid grid-cols-2 gap-10 border border-slate-100">
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-4">Core Services</h4>
                      <div className="space-y-4">
                        <Link 
                          href="/services/assay-development" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/services/assay-development')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Assay Development
                        </Link>
                        <div>
                          <Link 
                            href="/services/biomarker-sample-analysis" 
                            className={`phosphor-link block text-xs font-semibold font-bold mb-2 ${
                              isDropdownActive('/services/biomarker-sample-analysis')
                                ? 'text-[#058A9F]'
                                : 'text-slate-600'
                            }`}
                          >
                            Biomarker Sample Analysis
                          </Link>
                          <div className="pl-4 border-l border-slate-100 space-y-2">
                            <Link 
                              href="/services/biomarker-sample-analysis/simoa" 
                              className={`block text-[11px] ${
                                isDropdownActive('/services/biomarker-sample-analysis/simoa')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              SIMOA Assay Services
                            </Link>
                            <Link 
                              href="/services/biomarker-sample-analysis/smc" 
                              className={`block text-[11px] ${
                                isDropdownActive('/services/biomarker-sample-analysis/smc')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              SMC Assay Services
                            </Link>
                            <Link 
                              href="/services/biomarker-sample-analysis/multiplex-elisa" 
                              className={`block text-[11px] ${
                                isDropdownActive('/services/biomarker-sample-analysis/multiplex-elisa')
                                  ? 'text-[#058A9F]'
                                  : 'hover:text-[#058A9F]'
                              }`}
                            >
                              Multiplex ELISA Assay Services
                            </Link>
                          </div>
                        </div>
                        <Link 
                          href="/services/cell-based-services" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/services/cell-based-services')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Cell-Based Services
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-4">Additional Services</h4>
                      <div className="space-y-4">
                        <Link 
                          href="/services/custom-production" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/services/custom-production')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Custom Production
                        </Link>
                        <Link 
                          href="/services/antibody-characterization" 
                          className={`phosphor-link block text-xs font-semibold ${
                            isDropdownActive('/services/antibody-characterization')
                              ? 'text-[#058A9F]'
                              : 'text-slate-600'
                          }`}
                        >
                          Antibody Characterization Service
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Resources Dropdown */}
              <li
                className="nav-item relative py-4"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/resources"
                  className="flex items-center gap-2 text-xs font-black text-[#002776] uppercase tracking-[0.2em]"
                >
                  RESOURCES
                  <ChevronDown className="w-3 h-3" />
                </Link>
                {openDropdown === 'resources' && (
                  <div className="mega-menu absolute left-0 w-[800px] bg-white rounded-2xl p-10 grid grid-cols-3 gap-10 border border-slate-100 max-h-[500px] overflow-y-auto">
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-4">General Protocols</h4>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/general-protocols/flow-cytometry-for-ifnar2-on-human-pbmc" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/general-protocols/flow-cytometry-for-ifnar2-on-human-pbmc')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Flow Cytometry For IFNAR2 On Human PBMC
                        </Link>
                        <Link 
                          href="/resources/general-protocols/general-procedure-for-cell-surface-staining" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/general-protocols/general-procedure-for-cell-surface-staining')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          General Procedure For Cell Surface Staining
                        </Link>
                        <Link 
                          href="/resources/general-protocols/general-protein-handling-guide" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/general-protocols/general-protein-handling-guide')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          General Protein Handling Guide
                        </Link>
                        <Link 
                          href="/resources/general-protocols/general-protocol-for-human-interferon-alpha-cytopathic-effect-cpe-assay" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/general-protocols/general-protocol-for-human-interferon-alpha-cytopathic-effect-cpe-assay')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          General Protocol For Human Interferon Alpha Cytopathic Effect (CPE) Assay
                        </Link>
                        <Link 
                          href="/resources/general-protocols/general-spike-and-recovery-protocol-for-elisa" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/general-protocols/general-spike-and-recovery-protocol-for-elisa')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          General Spike and Recovery Protocol For ELISA
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-4">Scientific Articles</h4>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/scientific-articles/a-brief-primer-on-interferons-and-sars-cov-2" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/scientific-articles/a-brief-primer-on-interferons-and-sars-cov-2')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          A Brief Primer on Interferons and SARS-CoV-2
                        </Link>
                        <Link 
                          href="/resources/scientific-articles/interferonopathies-an-overview" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/scientific-articles/interferonopathies-an-overview')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Interferonopathies An Overview
                        </Link>
                        <Link 
                          href="/resources/scientific-articles/mouse-models-of-interferon-associated-diseases" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/scientific-articles/mouse-models-of-interferon-associated-diseases')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Mouse Models of Interferon-Associated Diseases
                        </Link>
                        <Link 
                          href="/resources/scientific-articles/rna-interference-and-interferon-response" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/scientific-articles/rna-interference-and-interferon-response')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          RNA Interference and Interferon Response
                        </Link>
                        <Link 
                          href="/resources/scientific-articles/type-i-ifns-as-readouts-in-non-human-primate-nhp-models" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/scientific-articles/type-i-ifns-as-readouts-in-non-human-primate-nhp-models')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Type I IFNs As Readouts In Non-Human Primate (NHP) Models
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-4">Technical Presentations</h4>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/technical-presentations/binding-and-neutralizing-of-monoclonal-antibodies-to-human-ifn-alpha-subtypes" 
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/technical-presentations/binding-and-neutralizing-of-monoclonal-antibodies-to-human-ifn-alpha-subtypes')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Binding and Neutralizing of Monoclonal Antibodies to Human IFN-Alpha Subtypes
                        </Link>
                        <Link
                          href="/resources/technical-presentations/determination-of-interferons-and-biomarkers-in-influenza-donor-samples"
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/technical-presentations/determination-of-interferons-and-biomarkers-in-influenza-donor-samples')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Determination Of Interferons And Biomarkers in Influenza Donor Samples
                        </Link>
                        <Link
                          href="/resources/technical-presentations/high-sensitivity-human-ifn-beta-autoimmune-disease-sera-validation-study"
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/technical-presentations/high-sensitivity-human-ifn-beta-autoimmune-disease-sera-validation-study')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          High Sensitivity Human IFN-Beta Autoimmune Disease Sera Validation Study
                        </Link>
                        <Link
                          href="/resources/technical-presentations/performance-characterization-of-a-high-sensitivity-human-il-22-elisa-kit"
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/technical-presentations/performance-characterization-of-a-high-sensitivity-human-il-22-elisa-kit')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Performance Characterization of a High Sensitivity Human IL-22 ELISA Kit
                        </Link>
                        <Link
                          href="/resources/technical-presentations/single-molecule-counting-smc-assays-characterization"
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/resources/technical-presentations/single-molecule-counting-smc-assays-characterization')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Single Molecule Counting (SMC) Assays Characterization
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Contact Us - No Dropdown */}
              <li className="py-4">
                <Link
                  href="/contact-us"
                  className="text-xs font-black text-[#002776] uppercase tracking-[0.2em]"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
      </nav>
    </header>
  );
}

