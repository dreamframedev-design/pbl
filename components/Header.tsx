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
    { value: 'Products', label: 'Products' },
    { value: 'Services', label: 'Services' },
    { value: 'Resources', label: 'Resources' },
    { value: 'Blog', label: 'Blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      {/* Top Bar */}
      <div className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary-navy font-sans">
                PBL Assay Science
              </h1>
            </Link>

            {/* Search Bar - Center (Amazon-style, prominent) */}
            <div className="flex-1 max-w-2xl mx-4 lg:mx-8 hidden md:block">
              <form onSubmit={handleSearch} className="relative flex items-stretch">
                {/* Category Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                    onBlur={() => setTimeout(() => setCategoryDropdownOpen(false), 200)}
                    className="flex items-center gap-1 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-sm text-gray-700 font-medium transition-colors min-w-[120px] justify-between"
                  >
                    <span>{searchCategories.find(cat => cat.value === searchCategory)?.label || 'All'}</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {categoryDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-1">
                      {searchCategories.map((category) => (
                        <button
                          key={category.value}
                          type="button"
                          onClick={() => {
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
                </div>

                {/* Search Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, services..."
                    className="w-full px-4 py-2.5 pl-11 pr-12 rounded-none border-l-0 border-r-0 border-y border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy transition-all duration-200 text-sm shadow-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-secondary-teal hover:bg-secondary-teal/90 text-white rounded-r-lg border-l-0 border border-secondary-teal transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Mobile Search Icon */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary-navy transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Icons - Right */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2 text-gray-700 hover:text-primary-navy transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </Link>

              {/* Contact */}
              <Link
                href="/contact-us"
                className="p-2 text-gray-700 hover:text-primary-navy transition-colors"
                aria-label="Contact us"
              >
                <Mail className="h-5 w-5" />
              </Link>

              {/* Login/Signup */}
              <Link
                href="/user/login"
                className="p-2 text-gray-700 hover:text-primary-navy transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Row Below with Dropdowns */}
      <nav className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-14">
            <ul className="flex items-center gap-1 lg:gap-4 h-full">
              {/* Products Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setOpenDropdown('products')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/products"
                  className={`h-full flex items-center gap-1 text-sm font-medium border-b-2 transition-colors px-2 ${
                    isActive('/products')
                      ? 'text-primary-navy border-primary-navy'
                      : 'text-gray-700 hover:text-primary-navy border-transparent hover:border-primary-navy'
                  }`}
                >
                  Products
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Link>
                {openDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-0 w-[1200px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 grid grid-cols-3 gap-8 max-h-[600px] overflow-y-auto">
                    {/* Assay Kits Column */}
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3 text-sm uppercase tracking-wide">Assay Kits</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            href="/products/assay-kits" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/assay-kits')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            All Assay Kits
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/products/assay-kits/cell-based-assays" 
                            className={`text-sm transition-colors block py-1 ${
                              isDropdownActive('/products/assay-kits/cell-based-assays')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Cell-Based Assays
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/products/assay-kits/interferon-elisas" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/assay-kits/interferon-elisas')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            Interferon (IFN) ELISA Kits
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/products/assay-kits/interferon-elisas/human" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/assay-kits/interferon-elisas/human')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Human Interferon ELISAs
                              </Link>
                              <ul className="ml-3 mt-1 space-y-1">
                                <li>
                                  <Link 
                                    href="/products/assay-kits/interferon-elisas/human/ifn-alpha" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/assay-kits/interferon-elisas/human/ifn-alpha')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Human IFN-Alpha ELISA Kits
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/assay-kits/interferon-elisas/human/ifn-beta" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/assay-kits/interferon-elisas/human/ifn-beta')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Human IFN-Beta ELISA Kits
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/assay-kits/interferon-elisas/human/ifn-gamma-receptor" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/assay-kits/interferon-elisas/human/ifn-gamma-receptor')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Human IFN-Gamma Receptor ELISA
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link 
                                href="/products/assay-kits/interferon-elisas/mouse" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/assay-kits/interferon-elisas/mouse')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Mouse Interferon ELISAs
                              </Link>
                              <ul className="ml-3 mt-1 space-y-1">
                                <li>
                                  <Link 
                                    href="/products/assay-kits/interferon-elisas/mouse/ifn-alpha" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/assay-kits/interferon-elisas/mouse/ifn-alpha')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Mouse IFN-Alpha ELISAs
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/assay-kits/interferon-elisas/mouse/ifn-beta" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/assay-kits/interferon-elisas/mouse/ifn-beta')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Mouse IFN-Beta ELISAs
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/assay-kits/interferon-elisas/mouse/ifn-lambda" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/assay-kits/interferon-elisas/mouse/ifn-lambda')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Mouse IFN-Lambda ELISA
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link 
                                href="/products/assay-kits/interferon-elisas/non-human" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/assay-kits/interferon-elisas/non-human')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Non-Human Interferon ELISAs
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link 
                            href="/products/assay-kits/interleukin-elisas" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/assay-kits/interleukin-elisas')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            Interleukin (IL) ELISA Kits
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/products/assay-kits/interleukin-elisas/human-il-15" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/products/assay-kits/interleukin-elisas/human-il-15')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Human IL-15 ELISA
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/assay-kits/interleukin-elisas/human-il-22" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/products/assay-kits/interleukin-elisas/human-il-22')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Human IL-22 ELISA
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* Proteins Column */}
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3 text-sm uppercase tracking-wide">Proteins</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            href="/products/proteins" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/proteins')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            All Proteins
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/products/proteins/cytokines-growth-factors" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/proteins/cytokines-growth-factors')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Cytokines and Growth Factors
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/products/proteins/cytokines-growth-factors/ecoli-cho" 
                                className={`text-xs transition-colors block py-0.5 ${
                                  isDropdownActive('/products/proteins/cytokines-growth-factors/ecoli-cho')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                E.coli & CHO Expressed
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/proteins/cytokines-growth-factors/human-cell" 
                                className={`text-xs transition-colors block py-0.5 ${
                                  isDropdownActive('/products/proteins/cytokines-growth-factors/human-cell')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Human Cell-Expressed
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link 
                            href="/products/proteins/interferon-decoy-receptor" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/proteins/interferon-decoy-receptor')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Interferon Decoy Receptor
                          </Link>
                        </li>
                        <li className="pt-2">
                          <Link 
                            href="/products/proteins/interferons" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/proteins/interferons')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            Interferons
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/products/proteins/interferons/human" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/proteins/interferons/human')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Human IFN Proteins
                              </Link>
                              <ul className="ml-3 mt-1 space-y-1">
                                <li>
                                  <Link 
                                    href="/products/proteins/interferons/human/ifn-alpha" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/proteins/interferons/human/ifn-alpha')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Human IFN-Alpha
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/proteins/interferons/human/ifn-beta" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/proteins/interferons/human/ifn-beta')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Human IFN-Beta
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/proteins/interferons/human/other" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/proteins/interferons/human/other')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Other Human IFNs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link 
                                href="/products/proteins/interferons/mouse" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/proteins/interferons/mouse')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Mouse IFN Proteins
                              </Link>
                              <ul className="ml-3 mt-1 space-y-1">
                                <li>
                                  <Link 
                                    href="/products/proteins/interferons/mouse/ifn-alpha" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/proteins/interferons/mouse/ifn-alpha')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Mouse IFN-Alpha
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/proteins/interferons/mouse/ifn-beta" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/proteins/interferons/mouse/ifn-beta')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Mouse IFN-Beta
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/proteins/interferons/mouse/ifn-lambda" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/proteins/interferons/mouse/ifn-lambda')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Mouse IFN-Lambda
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link 
                                href="/products/proteins/interferons/rat" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/proteins/interferons/rat')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Rat IFN Proteins
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/proteins/interferons/mammalian" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/proteins/interferons/mammalian')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Mammalian IFN Proteins
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* Antibodies Column */}
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3 text-sm uppercase tracking-wide">Antibodies</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            href="/products/antibodies" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/antibodies')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            All Antibodies
                          </Link>
                        </li>
                        <li className="pt-2">
                          <Link 
                            href="/products/antibodies/monoclonal" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/antibodies/monoclonal')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            Monoclonal Antibodies (MAbs)
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/products/antibodies/monoclonal/anti-human-ifn" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Anti-Human IFN MAbs
                              </Link>
                              <ul className="ml-3 mt-1 space-y-1">
                                <li>
                                  <Link 
                                    href="/products/antibodies/monoclonal/anti-human-ifn/receptor" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn/receptor')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Anti-Human IFN Receptor MAbs
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/antibodies/monoclonal/anti-human-ifn/ifn-alpha" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn/ifn-alpha')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Anti-Human IFN-Alpha MAbs
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    href="/products/antibodies/monoclonal/anti-human-ifn/ifn-beta" 
                                    className={`text-xs transition-colors block py-0.5 ${
                                      isDropdownActive('/products/antibodies/monoclonal/anti-human-ifn/ifn-beta')
                                        ? 'text-secondary-teal font-semibold'
                                        : 'text-gray-600 hover:text-secondary-teal'
                                    }`}
                                  >
                                    Anti-Human IFN-Beta MAbs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link 
                                href="/products/antibodies/monoclonal/anti-mouse-ifn" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/monoclonal/anti-mouse-ifn')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Anti-Mouse IFN MAbs
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/antibodies/monoclonal/anti-porcine-ifn" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/monoclonal/anti-porcine-ifn')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Anti-Porcine IFN MAbs
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/antibodies/monoclonal/labeled" 
                                className={`text-sm font-medium transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/monoclonal/labeled')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-700 hover:text-secondary-teal'
                                }`}
                              >
                                Labeled Anti-IFN MAbs
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="pt-2">
                          <Link 
                            href="/products/antibodies/polyclonal" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/products/antibodies/polyclonal')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            Polyclonal Antibodies (PAbs)
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/products/antibodies/polyclonal/anti-human-ifn" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/polyclonal/anti-human-ifn')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Anti-Human IFN PAbs
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/antibodies/polyclonal/anti-mouse-ifn" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/polyclonal/anti-mouse-ifn')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Anti-Mouse IFN PAbs
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/products/antibodies/polyclonal/anti-rat-ifn" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/products/antibodies/polyclonal/anti-rat-ifn')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Anti-Rat IFN PAbs
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* Services Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`h-full flex items-center gap-1 text-sm font-medium border-b-2 transition-colors px-2 ${
                    isActive('/services')
                      ? 'text-primary-navy border-primary-navy'
                      : 'text-gray-700 hover:text-primary-navy border-transparent hover:border-primary-navy'
                  }`}
                >
                  Services
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Link>
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-0 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 grid grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            href="/services/assay-development" 
                            className={`text-sm transition-colors block py-1 ${
                              isDropdownActive('/services/assay-development')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Assay Development
                          </Link>
                        </li>
                        <li className="pt-2">
                          <Link 
                            href="/services/biomarker-sample-analysis" 
                            className={`text-sm font-medium transition-colors block py-1 ${
                              isDropdownActive('/services/biomarker-sample-analysis')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-primary-navy hover:text-secondary-teal'
                            }`}
                          >
                            Biomarker Sample Analysis
                          </Link>
                          <ul className="ml-3 mt-1 space-y-1">
                            <li>
                              <Link 
                                href="/services/biomarker-sample-analysis/simoa" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/services/biomarker-sample-analysis/simoa')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                SIMOA Assay Services
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/services/biomarker-sample-analysis/smc" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/services/biomarker-sample-analysis/smc')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                SMC Assay Services
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/services/biomarker-sample-analysis/multiplex-elisa" 
                                className={`text-sm transition-colors block py-0.5 ${
                                  isDropdownActive('/services/biomarker-sample-analysis/multiplex-elisa')
                                    ? 'text-secondary-teal font-semibold'
                                    : 'text-gray-600 hover:text-secondary-teal'
                                }`}
                              >
                                Multiplex ELISA Assay Services
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link 
                            href="/services/cell-based-services" 
                            className={`text-sm transition-colors block py-1 ${
                              isDropdownActive('/services/cell-based-services')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Cell-Based Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            href="/services/custom-production" 
                            className={`text-sm transition-colors block py-1 ${
                              isDropdownActive('/services/custom-production')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Custom Production
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/services/antibody-characterization" 
                            className={`text-sm transition-colors block py-1 ${
                              isDropdownActive('/services/antibody-characterization')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-700 hover:text-secondary-teal'
                            }`}
                          >
                            Antibody Characterization Service
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* Resources Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/resources"
                  className={`h-full flex items-center gap-1 text-sm font-medium border-b-2 transition-colors px-2 ${
                    isActive('/resources')
                      ? 'text-primary-navy border-primary-navy'
                      : 'text-gray-700 hover:text-primary-navy border-transparent hover:border-primary-navy'
                  }`}
                >
                  Resources
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Link>
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-0 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 grid grid-cols-3 gap-6 max-h-[500px] overflow-y-auto">
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3 text-sm uppercase tracking-wide">General Protocols</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link 
                            href="/resources/general-protocols/flow-cytometry-ifnar2" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/general-protocols/flow-cytometry-ifnar2')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Flow Cytometry For IFNAR2
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/general-protocols/cell-surface-staining" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/general-protocols/cell-surface-staining')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Cell Surface Staining
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/general-protocols/protein-handling" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/general-protocols/protein-handling')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Protein Handling Guide
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/general-protocols/cpe-assay" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/general-protocols/cpe-assay')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            CPE Assay Protocol
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/general-protocols/spike-recovery" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/general-protocols/spike-recovery')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Spike and Recovery Protocol
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3 text-sm uppercase tracking-wide">Scientific Articles</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link 
                            href="/resources/scientific-articles/interferons-sars-cov2" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/scientific-articles/interferons-sars-cov2')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Interferons and SARS-CoV-2
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/scientific-articles/interferonopathies" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/scientific-articles/interferonopathies')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Interferonopathies Overview
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/scientific-articles/mouse-models" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/scientific-articles/mouse-models')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Mouse Models of IFN Diseases
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/scientific-articles/rna-interference" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/scientific-articles/rna-interference')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            RNA Interference and IFN
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/scientific-articles/nhp-models" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/scientific-articles/nhp-models')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            NHP Models
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-3 text-sm uppercase tracking-wide">Technical Presentations</h3>
                      <ul className="space-y-1">
                        <li>
                          <Link 
                            href="/resources/technical-presentations/monoclonal-antibodies-ifn-alpha" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/technical-presentations/monoclonal-antibodies-ifn-alpha')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Monoclonal Antibodies to IFN-Alpha
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/technical-presentations/influenza-biomarkers" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/technical-presentations/influenza-biomarkers')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            Influenza Biomarkers
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/technical-presentations/ifn-beta-autoimmune" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/technical-presentations/ifn-beta-autoimmune')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            IFN-Beta Autoimmune Study
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/technical-presentations/il-22-elisa" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/technical-presentations/il-22-elisa')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            IL-22 ELISA Characterization
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/resources/technical-presentations/smc-assays" 
                            className={`text-xs transition-colors block py-0.5 ${
                              isDropdownActive('/resources/technical-presentations/smc-assays')
                                ? 'text-secondary-teal font-semibold'
                                : 'text-gray-600 hover:text-secondary-teal'
                            }`}
                          >
                            SMC Assays Characterization
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* Contact Us - No Dropdown */}
              <li>
                <Link
                  href="/contact-us"
                  className={`h-full flex items-center text-sm font-medium border-b-2 transition-colors px-2 ${
                    isActive('/contact-us')
                      ? 'text-primary-navy border-primary-navy'
                      : 'text-gray-700 hover:text-primary-navy border-transparent hover:border-primary-navy'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

