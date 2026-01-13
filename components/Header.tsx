'use client';

import { useState, FormEvent, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, ShoppingCart, User, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState('All');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Unified timeout clearing - the "claim" mechanic
  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  // Global header leave - small grace period when leaving header entirely
  const handleHeaderLeave = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setCategoryDropdownOpen(false);
    }, 100);
  }, [clearCloseTimeout]);

  // Menu entry - immediate switch, cancel any pending close
  const handleMenuEnter = useCallback((menu: string) => {
    clearCloseTimeout();
    setOpenDropdown(menu);
  }, [clearCloseTimeout]);

  // Menu leave - short grace period to move to dropdown
  const handleMenuLeave = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, [clearCloseTimeout]);

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
      setIsSearchOpen(false); // Close search overlay after search
      router.push(`/search?${params.toString()}`);
    }
  };

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  // Scroll-reactive header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pixel-perfect dropdown positioning - uses header bottom
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setNavHeight(rect.bottom);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, [isScrolled]); // Recalculate if header changes on scroll

  // Body scroll lock when overlays are open
  useEffect(() => {
    if (mobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Blocks background drag on mobile
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen, isSearchOpen]);

  // Click-outside handler for category dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
    };

    if (categoryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categoryDropdownOpen]);

  const searchCategories = [
    { value: 'All', label: 'All' },
    { value: 'Assay Kits', label: 'Assay Kits' },
    { value: 'Proteins', label: 'Proteins' },
    { value: 'Antibodies', label: 'Antibodies' },
    { value: 'Services', label: 'Services' },
    { value: 'Resources', label: 'Resources' },
  ];

  return (
    <header
      ref={headerRef}
      onMouseLeave={handleHeaderLeave}
      className={`sticky top-0 z-[100] transition-colors duration-300 w-full py-3 ${
        // FORCE solid white background if scrolled, menu is open, dropdown is open, OR search is open
        isScrolled || mobileMenuOpen || isSearchOpen || openDropdown
          ? "bg-white border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Main Header Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-6 lg:gap-12">
        {/* Logo */}
        <Link 
          href="/" 
          className={`brand-link flex-shrink-0 flex flex-col items-start no-underline group z-10 transition-transform duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <svg
            className="brand-logo h-8 sm:h-9 w-auto"
            viewBox="0 0 5306.6733 1228.0721" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="glyph-group">
              <path className="path-pbl" d="M496.0758,91.0395h66.1615v384.2777c7.4668-4.393,14.075-8.0158,20.4155-12.0587,22.9442-14.6295,47.9078-23.5634,74.8061-27.4612,33.3785-4.8368,65.838-1.3969,96.9772,11.4303,17.9604,7.3985,34.3581,17.617,48.8042,30.955,27.6022,25.4848,47.1479,56.0303,58.7215,91.6721,7.7134,23.754,10.5034,48.2772,8.9621,73.1225-1.6429,26.4813-8.3651,51.7734-19.4626,75.97-10.2214,22.2862-23.9904,41.937-41.9674,58.5176-16.663,15.3686-35.8556,26.976-56.1711,36.9364-17.9846,8.8178-36.6276,15.6526-56.5368,17.5971-19.2354,1.8786-38.3944.2847-57.1706-5.1247-28.3893-8.1789-54.1125-21.4924-76.3757-40.7688-34.1197-29.5421-56.2871-66.4993-64.1616-111.1734-2.6899-15.2604-3.9314-30.9588-4.011-46.4664-.409-79.6171-.2099-159.237-.2502-238.856-.0372-73.455-.1711-146.9099-.1508-220.3649.0325-117.5947.148,49.3791.2903-68.2155.004-3.2539.7127-6.5069,1.1195-9.989ZM683.9582,759.7165c15.2678,1.3871,30.3421-2.471,44.7403-9.5346,20.5137-10.0637,37.0115-24.9389,50.0921-43.4128,15.6463-22.0973,25.016-46.6205,24.7166-74.0773-.2534-23.2391-6.107-45.1026-17.5059-65.4583-11.195-19.9918-26.6276-35.738-46.6437-46.8502-25.2664-14.0269-52.3043-17.2123-80.3655-11.8195-23.5348,4.5228-43.8735,15.7047-60.6425,32.7114-11.4454,11.6078-20.1576,25.2361-26.2184,40.5633-9.0434,22.8699-12.7117,46.5173-8.4405,70.6673,5.8386,33.012,22.5777,60.1216,48.4054,81.4687,20.5554,16.9896,43.5749,27.5054,71.862,25.7419Z" />
              <path className="path-pbl" d="M166.6613,788.1513v370.2798c-1.9677.1641-3.4081.3872-4.8487.3889-19.3151.0232-38.6318-.1129-57.9443.1159-4.2562.0503-5.5275-1.6661-5.6374-5.4234-.2817-9.6309-.9553-19.2589-.9572-28.8881-.0489-242.1902-.0313-213.2513-.0256-455.4415.0003-13.3246-.3643-26.6611.0734-39.9713.9236-28.0883,7.3319-54.9864,18.5563-80.752,10.1549-23.3105,23.9551-44.3136,41.7512-62.3395,19.8034-20.0593,43.1162-34.9884,70.4109-43.0076,24.0327-7.0609,48.5387-10.5171,73.6472-9.1541,26.0966,1.4169,50.4474,8.7048,73.0503,21.7284,15.7359,9.0668,29.9762,20.1904,42.3813,33.4373,28.3806,30.3062,47.5079,65.3984,54.3936,106.7494,7.2818,43.7294.5675,85.3522-17.9608,125.3928-10.5306,22.7573-24.9067,42.7284-43.7693,59.0616-29.544,25.5824-63.4891,43.127-101.9734,50.5872-27.8053,5.3901-54.8362,1.1313-80.2181-11.4754-19.3961-9.6337-38.405-20.0472-57.5955-30.0959-.7054-.3693-1.5102-.5486-3.334-1.1926ZM165.1177,633.0942c.5726,6.6016.5697,13.3142,1.8171,19.7856,5.5094,28.5815,18.8242,52.8895,39.5937,73.4766,23.3718,23.1664,50.9774,35.0588,83.8919,34.1198,15.4158-.4397,30.1314-4.1936,43.7705-11.4543,25.9559-13.8176,45.3104-34.3184,58.6272-60.3193,12.2521-23.922,16.8033-49.2422,12.2854-76.1195-5.3302-31.7093-18.9381-58.6193-43.8755-79.3558-26.7704-22.2607-57.6716-30.1006-91.8615-25.8962-32.9586,4.053-58.805,20.7287-78.3874,46.7963-17.4033,23.1671-25.4613,49.8661-25.8615,78.9666Z" />
              <path className="path-pbl" d="M959.0254,91.0397v7.8331c0,91.6204-.0237-25.4384.0076,66.182.0239,69.7963.1833,63.517.1644,133.3134-.0264,98.1148-.1409,196.2295-.2819,294.3442-.0151,10.4687-.5458,20.9356-.6852,31.4053-.4749,35.6612,11.3093,66.8076,34.3999,93.8833,14.5911,17.1093,31.638,30.6268,53.4239,37.2183,5.155,1.5596,10.685,2.0246,16.0846,2.5882,5.4067.5642,10.8663.6217,16.6274.9179v73.6154c-4.883-.3903-9.7756-.4944-14.5768-1.2119-31.1714-4.6576-60.4303-14.6904-86.7353-32.2948-45.4049-30.3869-73.0521-72.7014-82.7511-126.3993-2.4931-13.8024-3.8277-27.9968-3.9118-42.0218-.4558-75.9569-.291-151.9173-.4581-227.8762-.1653-75.1026-.658-74.1292-.6613-149.2316-.0032-72.4366.4708,63.806.6672-8.6308.1291-47.6408.1298-95.2819.2063-142.9228.0172-10.7121.0523-10.7121,10.4353-10.7121,17.3185,0,34.637.0001,51.9555.0002,1.7929,0,3.5858,0,6.0894,0Z" />
            </g>
            <g className="science-group" style={{ transform: 'translateX(24px)' }}>
              <path className="path-science" d="M1207.9645,831.479h-50.5049l146.0742-397.8184h49.7275l146.0732,397.8184h-50.5039l-118.8789-334.8818h-3.1084l-118.8789,334.8818ZM1226.6119,676.0815h203.5713v42.7344h-203.5713v-42.7344Z" />
              <path className="path-science" d="M1762.4752,533.1157c-2.3311-19.6826-11.7861-34.9648-28.3604-45.8428-16.5781-10.8779-36.9072-16.3164-60.9941-16.3164-17.6123,0-32.9912,2.8496-46.1328,8.5469-13.1455,5.6992-23.377,13.5332-30.6914,23.5039-7.3174,9.9727-10.9746,21.3027-10.9746,33.9932,0,10.6201,2.5547,19.7158,7.6719,27.292,5.1143,7.5752,11.6855,13.8574,19.7168,18.8418,8.0273,4.9863,16.4443,9.0654,25.252,12.2373,8.8047,3.1748,16.8994,5.7305,24.2812,7.6729l40.4033,10.8779c10.3584,2.7197,21.916,6.4766,34.6729,11.2666,12.7539,4.792,24.9912,11.2988,36.7129,19.5215,11.7188,8.2246,21.3975,18.7451,29.04,31.5654,7.6387,12.8203,11.46,28.5537,11.46,47.2021,0,21.4971-5.6025,40.9219-16.8018,58.2734-11.2031,17.3555-27.5195,31.1465-48.9502,41.375-21.4346,10.2285-47.4297,15.3457-77.9902,15.3457-28.4912,0-53.127-4.5986-73.9111-13.792-20.7852-9.1934-37.1016-22.0137-48.9502-38.4609-11.8496-16.4443-18.5508-35.5469-20.1055-57.3027h49.7275c1.293,15.0234,6.377,27.4219,15.249,37.1982,8.8682,9.7793,20.1348,17.0303,33.7988,21.7559,13.6611,4.7285,28.3906,7.0898,44.1914,7.0898,18.3867,0,34.8975-3.0107,49.5322-9.0322,14.6328-6.0215,26.2236-14.4385,34.7705-25.252,8.5469-10.8115,12.8203-23.4707,12.8203-37.9756,0-13.209-3.6904-23.9561-11.0723-32.2451-7.3809-8.2861-17.0938-15.0205-29.1367-20.2021-12.043-5.1777-25.0576-9.7119-39.0439-13.5967l-48.9502-13.9863c-31.0791-8.9346-55.6855-21.6885-73.8135-38.2666-18.1318-16.5742-27.1953-38.2666-27.1953-65.0723,0-22.2715,6.0527-41.7305,18.1621-58.3711,12.1074-16.6387,28.4238-29.5898,48.9502-38.8496,20.5234-9.2578,43.4785-13.8887,68.8613-13.8887,25.6406,0,48.4307,4.5645,68.375,13.6943,19.9404,9.1299,35.7715,21.5947,47.4932,37.3926,11.7188,15.8008,17.9014,33.7354,18.5508,53.8066h-46.6191Z" />
              <path className="path-science" d="M2100.944,533.1157c-2.3311-19.6826-11.7861-34.9648-28.3604-45.8428-16.5781-10.8779-36.9072-16.3164-60.9941-16.3164-17.6123,0-32.9912,2.8496-46.1328,8.5469-13.1455,5.6992-23.377,13.5332-30.6914,23.5039-7.3174,9.9727-10.9746,21.3027-10.9746,33.9932,0,10.6201,2.5547,19.7158,7.6719,27.292,5.1143,7.5752,11.6855,13.8574,19.7168,18.8418,8.0273,4.9863,16.4443,9.0654,25.252,12.2373,8.8047,3.1748,16.8994,5.7305,24.2812,7.6729l40.4033,10.8779c10.3584,2.7197,21.916,6.4766,34.6729,11.2666,12.7539,4.792,24.9912,11.2988,36.7129,19.5215,11.7188,8.2246,21.3975,18.7451,29.04,31.5654,7.6387,12.8203,11.46,28.5537,11.46,47.2021,0,21.4971-5.6025,40.9219-16.8018,58.2734-11.2031,17.3555-27.5195,31.1465-48.9502,41.375-21.4346,10.2285-47.4297,15.3457-77.9902,15.3457-28.4912,0-53.127-4.5986-73.9111-13.792-20.7852-9.1934-37.1016-22.0137-48.9502-38.4609-11.8496-16.4443-18.5508-35.5469-20.1055-57.3027h49.7275c1.293,15.0234,6.377,27.4219,15.249,37.1982,8.8682,9.7793,20.1348,17.0303,33.7988,21.7559,13.6611,4.7285,28.3906,7.0898,44.1914,7.0898,18.3867,0,34.8975-3.0107,49.5322-9.0322,14.6328-6.0215,26.2236-14.4385,34.7705-25.252,8.5469-10.8115,12.8203-23.4707,12.8203-37.9756,0-13.209-3.6904-23.9561-11.0723-32.2451-7.3809-8.2861-17.0938-15.0205-29.1367-20.2021-12.043-5.1777-25.0576-9.7119-39.0439-13.5967l-48.9502-13.9863c-31.0791-8.9346-55.6855-21.6885-73.8135-38.2666-18.1318-16.5742-27.1953-38.2666-27.1953-65.0723,0-22.2715,6.0527-41.7305,18.1621-58.3711,12.1074-16.6387,28.4238-29.5898,48.9502-38.8496,20.5234-9.2578,43.4785-13.8887,68.8613-13.8887,25.6406,0,48.4307,4.5645,68.375,13.6943,19.9404,9.1299,35.7715,21.5947,47.4932,37.3926,11.7188,15.8008,17.9014,33.7354,18.5508,53.8066h-46.6191Z" />
              <path className="path-science" d="M2232.1549,831.479h-50.5049l146.0742-397.8184h49.7275l146.0732,397.8184h-50.5039l-118.8789-334.8818h-3.1084l-118.8789,334.8818ZM2250.8024,676.0815h203.5713v42.7344h-203.5713v-42.7344Z" />
              <path className="path-science" d="M2485.8541,433.6606h55.167l110.332,185.7002h4.6621l110.332-185.7002h55.166l-143.7422,233.874v163.9443h-48.1738v-163.9443l-143.7432-233.874Z" />
              <path className="path-science" d="M3255.069,533.1157c-2.3311-19.6826-11.7861-34.9648-28.3604-45.8428-16.5781-10.8779-36.9072-16.3164-60.9941-16.3164-17.6123,0-32.9912,2.8496-46.1328,8.5469-13.1455,5.6992-23.377,13.5332-30.6914,23.5039-7.3174,9.9727-10.9746,21.3027-10.9746,33.9932,0,10.6201,2.5547,19.7158,7.6719,27.292,5.1143,7.5752,11.6855,13.8574,19.7168,18.8418,8.0273,4.9863,16.4443,9.0654,25.252,12.2373,8.8047,3.1748,16.8994,5.7305,24.2812,7.6729l40.4033,10.8779c10.3584,2.7197,21.916,6.4766,34.6729,11.2666,12.7539,4.792,24.9912,11.2988,36.7129,19.5215,11.7188,8.2246,21.3975,18.7451,29.04,31.5654,7.6387,12.8203,11.46,28.5537,11.46,47.2021,0,21.4971-5.6025,40.9219-16.8018,58.2734-11.2031,17.3555-27.5195,31.1465-48.9502,41.375-21.4346,10.2285-47.4297,15.3457-77.9902,15.3457-28.4912,0-53.127-4.5986-73.9111-13.792-20.7852-9.1934-37.1016-22.0137-48.9502-38.4609-11.8496-16.4443-18.5508-35.5469-20.1055-57.3027h49.7275c1.293,15.0234,6.377,27.4219,15.249,37.1982,8.8682,9.7793,20.1348,17.0303,33.7988,21.7559,13.6611,4.7285,28.3906,7.0898,44.1914,7.0898,18.3867,0,34.8975-3.0107,49.5322-9.0322,14.6328-6.0215,26.2236-14.4385,34.7705-25.252,8.5469-10.8115,12.8203-23.4707,12.8203-37.9756,0-13.209-3.6904-23.9561-11.0723-32.2451-7.3809-8.2861-17.0938-15.0205-29.1367-20.2021-12.043-5.1777-25.0576-9.7119-39.0439-13.5967l-48.9502-13.9863c-31.0791-8.9346-55.6855-21.6885-73.8135-38.2666-18.1318-16.5742-27.1953-38.2666-27.1953-65.0723,0-22.2715,6.0527-41.7305,18.1621-58.3711,12.1074-16.6387,28.4238-29.5898,48.9502-38.8496,20.5234-9.2578,43.4785-13.8887,68.8613-13.8887,25.6406,0,48.4307,4.5645,68.375,13.6943,19.9404,9.1299,35.7715,21.5947,47.4932,37.3926,11.7188,15.8008,17.9014,33.7354,18.5508,53.8066h-46.6191Z" />
              <path className="path-science" d="M3691.8883,557.979h-48.1738c-2.8496-13.8555-7.8027-26.0293-14.8594-36.5186-7.0596-10.4893-15.6064-19.3271-25.6406-26.5146-10.0371-7.1875-21.1426-12.5928-33.3135-16.2197-12.1738-3.624-24.8643-5.4385-38.0723-5.4385-24.0869,0-45.876,6.0879-65.3643,18.2588-19.4922,12.1738-34.9648,30.1084-46.4258,53.8066-11.46,23.6982-17.1904,52.7715-17.1904,87.2168s5.7305,63.5186,17.1904,87.2168c11.4609,23.6982,26.9336,41.6357,46.4258,53.8066,19.4883,12.1738,41.2773,18.2598,65.3643,18.2598,13.208,0,25.8984-1.8125,38.0723-5.4395,12.1709-3.624,23.2764-9.0322,33.3135-16.2197,10.0342-7.1865,18.5811-16.0557,25.6406-26.6113,7.0566-10.5537,12.0098-22.6943,14.8594-36.4219h48.1738c-3.627,20.332-10.2314,38.5283-19.8135,54.584-9.585,16.0586-21.498,29.6895-35.7412,40.8887-14.2471,11.2021-30.2061,19.7158-47.8818,25.5439-17.6768,5.8271-36.5527,8.7402-56.623,8.7402-33.9297,0-64.1016-8.2852-90.5195-24.8633-26.418-16.5742-47.2021-40.1426-62.3535-70.7061-15.1514-30.5605-22.7266-66.8213-22.7266-108.7783s7.5752-78.2148,22.7266-108.7783c15.1514-30.5605,35.9355-54.1279,62.3535-70.7061,26.418-16.5742,56.5898-24.8633,90.5195-24.8633,20.0703,0,38.9463,2.9131,56.623,8.7412,17.6758,5.8271,33.6348,14.3438,47.8818,25.543,14.2432,11.2031,26.1562,24.7998,35.7412,40.792,9.582,15.9951,16.1865,34.2207,19.8135,54.6807Z" />
              <path className="path-science" d="M3806.7604,433.6606v397.8184h-48.1738v-397.8184h48.1738Z" />
              <path className="path-science" d="M3894.0738,831.479v-397.8184h240.0898v42.7344h-191.916v134.4189h179.4844v42.7344h-179.4844v135.1963h195.0244v42.7344h-243.1982Z" />
              <path className="path-science" d="M4515.6373,433.6606v397.8184h-46.6191l-216.7803-312.3496h-3.8848v312.3496h-48.1738v-397.8184h46.6201l217.5566,313.127h3.8848v-313.127h47.3965Z" />
              <path className="path-science" d="M4922.0377,557.979h-48.1738c-2.8496-13.8555-7.8027-26.0293-14.8594-36.5186-7.0596-10.4893-15.6064-19.3271-25.6406-26.5146-10.0371-7.1875-21.1426-12.5928-33.3135-16.2197-12.1738-3.624-24.8643-5.4385-38.0723-5.4385-24.0869,0-45.876,6.0879-65.3643,18.2588-19.4922,12.1738-34.9648,30.1084-46.4258,53.8066-11.46,23.6982-17.1904,52.7715-17.1904,87.2168s5.7305,63.5186,17.1904,87.2168c11.4609,23.6982,26.9336,41.6357,46.4258,53.8066,19.4883,12.1738,41.2773,18.2598,65.3643,18.2598,13.208,0,25.8984-1.8125,38.0723-5.4395,12.1709-3.624,23.2764-9.0322,33.3135-16.2197,10.0342-7.1865,18.5811-16.0557,25.6406-26.6113,7.0566-10.5537,12.0098-22.6943,14.8594-36.4219h48.1738c-3.627,20.332-10.2314,38.5283-19.8135,54.584-9.585,16.0586-21.498,29.6895-35.7412,40.8887-14.2471,11.2021-30.2061,19.7158-47.8818,25.5439-17.6768,5.8271-36.5527,8.7402-56.623,8.7402-33.9297,0-64.1016-8.2852-90.5195-24.8633-26.418-16.5742-47.2021-40.1426-62.3535-70.7061-15.1514-30.5605-22.7266-66.8213-22.7266-108.7783s7.5752-78.2148,22.7266-108.7783c15.1514-30.5605,35.9355-54.1279,62.3535-70.7061,26.418-16.5742,56.5898-24.8633,90.5195-24.8633,20.0703,0,38.9463,2.9131,56.623,8.7412,17.6758,5.8271,33.6348,14.3438,47.8818,25.543,14.2432,11.2031,26.1562,24.7998,35.7412,40.792,9.582,15.9951,16.1865,34.2207,19.8135,54.6807Z" />
              <path className="path-science" d="M4987.8063,831.479v-397.8184h240.0898v42.7344h-191.916v134.4189h179.4844v42.7344h-179.4844v135.1963h195.0244v42.7344h-243.1982Z" />
            </g>
          </svg>
          <div className="glow-line"></div>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div ref={categoryDropdownRef} className="hidden md:flex md:flex-grow lg:max-w-2xl relative">
          <form onSubmit={handleSearch} className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 h-10 overflow-hidden w-full">
            {/* Category Dropdown */}
            <div className="relative h-full z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                }}
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
                className="w-full bg-transparent pl-10 pr-5 text-base md:text-sm outline-none h-full"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#058A9F] hover:bg-cyan-500 h-full px-4 text-white transition-colors flex items-center rounded-r-xl"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Spacer: Push everything after this to the far right on mobile/tablet */}
        <div className="flex-1 lg:hidden"></div>

        {/* Right Side Container: Forced to end alignment */}
        <div className="flex items-center justify-end gap-3 sm:gap-4 flex-shrink-0">
          {/* Search Icon Toggle - Mobile */}
          <button 
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setMobileMenuOpen(false);
            }}
            className="p-2 text-[#002776] md:hidden"
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Request a Quote Button - Tablet: Teal gradient */}
          <Link
            href="/speak-to-a-scientist"
            className="hidden sm:flex lg:hidden bg-gradient-to-r from-[#058A9F] to-[#00B8C0] px-4 py-2.5 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-xl shadow-cyan-500/20"
          >
            Request a Quote
          </Link>

          {/* Mobile Menu Button: Explicitly last in the flex row */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setIsSearchOpen(false);
            }}
            className="lg:hidden p-2 text-[#002776] hover:text-primary-navy transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Logic: Request a Quote CTA, icons on far right */}
          <div className="hidden lg:flex items-center gap-x-3 ml-auto">
            <Link
              href="/speak-to-a-scientist"
              className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-[#058A9F] to-[#00B8C0] text-white rounded-xl text-[13px] font-semibold whitespace-nowrap transition-all shadow-md hover:scale-105 hover:shadow-xl shadow-cyan-500/20"
            >
              Request a Quote
            </Link>
            <Link
              href="/cart"
              className="p-1.5 text-gray-700 hover:text-primary-navy transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Link>
            <Link
              href="/contact-us"
              className="p-1.5 text-gray-700 hover:text-primary-navy transition-colors"
              aria-label="Contact us"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="/user/login"
              className="p-1.5 text-gray-700 hover:text-primary-navy transition-colors"
              aria-label="Account"
            >
              <User className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Search Overlay - Mobile */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[150] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Search Overlay */}
          <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-slate-200/50 p-4">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-[#002776]"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Search</span>
            </div>
            
        <form onSubmit={handleSearch} className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 h-12 overflow-hidden relative">
          <div className="relative h-full z-10">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCategoryDropdownOpen(!categoryDropdownOpen);
              }}
              className="bg-slate-200/50 px-3 h-full text-[10px] font-black text-[#002776] border-r border-slate-200 uppercase tracking-widest hover:bg-slate-200 transition-colors flex items-center gap-1"
            >
              {searchCategories.find(cat => cat.value === searchCategory)?.label || 'All'}
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          {categoryDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-[200] py-1">
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
          <div className="flex-1 relative h-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 60+ technical products, proteins, and services..."
              className="w-full bg-transparent pl-10 pr-3 text-base md:text-sm outline-none h-full"
                  autoFocus
            />
          </div>
          <button
            type="submit"
            className="bg-[#058A9F] hover:bg-cyan-500 h-full px-4 text-white transition-colors flex items-center rounded-r-xl"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>
        </div>
      )}

      {/* Navigation Bar - Row Below with Dropdowns - Hidden on mobile */}
      <nav className="hidden lg:flex items-center h-12 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ul className="flex items-center gap-12 flex-nowrap" onMouseEnter={clearCloseTimeout}>
              {/* Home Link */}
              <li className="nav-item" onMouseEnter={() => setOpenDropdown(null)}>
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="relative flex items-center gap-2 text-[13px] font-semibold text-black whitespace-nowrap group/nav py-4"
                >
                  Home
                  <span className={`absolute bottom-2 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}></span>
                </Link>
              </li>
              {/* Products Dropdown */}
              <li
                className="nav-item relative"
                onMouseEnter={() => handleMenuEnter('products')}
              >
                <Link
                  href="/products"
                  onClick={handleLinkClick}
                  className="relative flex items-center gap-2 text-[13px] font-semibold text-black whitespace-nowrap group/nav py-4"
                >
                  Products
                  <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-2 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${isActive('/products') || openDropdown === 'products' ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}></span>
                </Link>
                <AnimatePresence>
                  {openDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="mega-menu fixed left-0 right-0 w-full z-[110]"
                      style={{ top: `${navHeight}px` }}
                      onMouseEnter={clearCloseTimeout}
                    >
                      <div className="bg-white border-b border-slate-100 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8 lg:gap-12">
                    {/* Assay Kits Column */}
                    <div style={{ marginTop: '0' }}>
                      <Link 
                        href="/products/assay-kits" 
                        onClick={handleLinkClick}
                        className="block text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2 hover:text-[#058A9F] transition-colors"
                      >
                        Assay Kits
                      </Link>
                      <div className="space-y-4">
                        <Link 
                          href="/products/assay-kits" 
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                                onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                      <Link 
                        href="/products/proteins" 
                        onClick={handleLinkClick}
                        className="block text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2 hover:text-[#058A9F] transition-colors"
                      >
                        Proteins
                      </Link>
                      <div className="space-y-4">
                        <Link 
                          href="/products/proteins" 
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                                onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                      <Link 
                        href="/products/antibodies" 
                        onClick={handleLinkClick}
                        className="block text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2 hover:text-[#058A9F] transition-colors"
                      >
                        Antibodies
                      </Link>
                      <div className="space-y-4">
                        <Link 
                          href="/products/antibodies" 
                          onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                                onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                                  onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                      <Link href="/resources" onClick={handleLinkClick} className="text-[10px] font-black text-[#058A9F] uppercase tracking-widest">Learn More →</Link>
                    </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Services Dropdown */}
              <li
                className="nav-item relative"
                onMouseEnter={() => handleMenuEnter('services')}
              >
                <Link
                  href="/services"
                  onClick={handleLinkClick}
                  className="relative flex items-center gap-2 text-[13px] font-semibold text-black whitespace-nowrap group/nav py-4"
                >
                  Services
                  <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-2 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${isActive('/services') || openDropdown === 'services' ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}></span>
                </Link>
                <AnimatePresence>
                  {openDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="mega-menu fixed left-0 right-0 w-full z-[110]"
                      style={{ top: `${navHeight}px` }}
                      onMouseEnter={clearCloseTimeout}
                    >
                      <div className="bg-white border-b border-slate-100 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-6 py-10">
                          <div className="max-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    <div>
                      <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-4">Core Services</h4>
                      <div className="space-y-4">
                        <Link 
                          href="/services/assay-development" 
                          onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                              onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Resources Dropdown */}
              <li
                className="nav-item relative"
                onMouseEnter={() => handleMenuEnter('resources')}
              >
                <Link
                  href="/resources"
                  onClick={handleLinkClick}
                  className="relative flex items-center gap-2 text-[13px] font-semibold text-black whitespace-nowrap group/nav py-4"
                >
                  Resources
                  <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-2 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${isActive('/resources') || openDropdown === 'resources' ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}></span>
                </Link>
                <AnimatePresence>
                  {openDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="mega-menu fixed left-0 right-0 w-full z-[110]"
                      style={{ top: `${navHeight}px` }}
                      onMouseEnter={clearCloseTimeout}
                    >
                      <div className="bg-white border-b border-slate-100 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-6 lg:gap-10 max-h-[70vh] overflow-y-auto">
                    <div>
                      <Link
                        href="/resources/general-protocols"
                        onClick={handleLinkClick}
                        className="block mb-4"
                      >
                        <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] hover:text-[#058A9F] transition-colors">General Protocols</h4>
                      </Link>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/general-protocols/flow-cytometry-for-ifnar2-on-human-pbmc" 
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                      <Link
                        href="/resources/scientific-articles"
                        onClick={handleLinkClick}
                        className="block mb-4"
                      >
                        <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] hover:text-[#058A9F] transition-colors">Scientific Articles</h4>
                      </Link>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/scientific-articles/a-brief-primer-on-interferons-and-sars-cov-2" 
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                      <Link
                        href="/resources/technical-presentations"
                        onClick={handleLinkClick}
                        className="block mb-4"
                      >
                        <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] hover:text-[#058A9F] transition-colors">Technical Presentations</h4>
                      </Link>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/technical-presentations/binding-and-neutralizing-of-monoclonal-antibodies-to-human-ifn-alpha-subtypes" 
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
                    <div>
                      <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className="block mb-4"
                      >
                        <h4 className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] hover:text-[#058A9F] transition-colors">Knowledge Hub</h4>
                      </Link>
                      <div className="space-y-3">
                        <Link 
                          href="/blog" 
                          onClick={handleLinkClick}
                          className={`block text-[11px] text-slate-500 ${
                            isDropdownActive('/blog')
                              ? 'text-cyan-500'
                              : 'hover:text-cyan-500'
                          }`}
                        >
                          Scientific Insights Blog
                        </Link>
                      </div>
                    </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Contact Us - No Dropdown */}
              <li className="nav-item" onMouseEnter={() => setOpenDropdown(null)}>
                <Link
                  href="/contact-us"
                  className="relative text-[13px] font-semibold text-black whitespace-nowrap group/nav inline-block py-4"
                >
                  Contact Us
                  <span className={`absolute bottom-2 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${isActive('/contact-us') ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}></span>
                </Link>
              </li>
            </ul>
      </nav>

      {/* Mobile Slide-over Menu Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          {/* 1. Backdrop - ensure this covers everything */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* 2. The Sheet - MUST be solid white to block out the hero text behind it */}
          <div 
            className="fixed right-0 top-0 h-[100dvh] w-[85%] bg-white shadow-2xl flex flex-col z-[210] border-l border-slate-100 specular-glass overflow-hidden"
            style={{ 
              animation: 'slideSheet 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards'
            }}
          >
            {/* Header (Stay Static) */}
            <div className="p-6 flex justify-between items-center border-b border-slate-100 flex-shrink-0">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Knowledge Hub</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#002776]">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-6 py-8">
              <nav className="space-y-6 pb-20">
            {/* Mobile Icons - Shopping Cart, Mail, User */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-primary-navy transition-colors rounded-lg hover:bg-slate-50"
                aria-label="Shopping cart"
              >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-xs font-medium">Cart</span>
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-primary-navy transition-colors rounded-lg hover:bg-slate-50"
                aria-label="Contact us"
              >
                  <Mail className="h-4 w-4" />
                  <span className="text-xs font-medium">Contact</span>
              </Link>
              <Link
                href="/user/login"
                onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-primary-navy transition-colors rounded-lg hover:bg-slate-50"
                aria-label="Account"
              >
                  <User className="h-4 w-4" />
                  <span className="text-xs font-medium">Account</span>
              </Link>
            </div>

            {/* Home Link */}
            <div>
              <Link 
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-lg font-black text-[#002776] uppercase tracking-[0.2em] border-b border-slate-100"
              >
                HOME
              </Link>
            </div>

            {/* Products */}
            <div>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-black text-[#002776] uppercase tracking-[0.2em] border-b border-slate-100"
              >
                PRODUCTS
              </Link>
                <div className="pl-4 pt-3 space-y-4">
                {/* Assay Kits */}
                <div>
                    <Link href="/products/assay-kits" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Assay Kits</Link>
                  <div className="pl-4 space-y-1.5">
                      <Link href="/products/assay-kits" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">All Assay Kits</Link>
                      <Link href="/products/assay-kits/cell-based-assays" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Cell-Based Assays</Link>
                    <div>
                        <Link href="/products/assay-kits/interferon-elisas" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-semibold text-slate-700">Interferon (IFN) ELISA Kits</Link>
                      <div className="pl-3 space-y-1">
                          <Link href="/products/assay-kits/interferon-elisas/human" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Human Interferon ELISAs</Link>
                          <Link href="/products/assay-kits/interferon-elisas/mouse" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Mouse Interferon ELISAs</Link>
                          <Link href="/products/assay-kits/interferon-elisas/non-human" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Non-Human Interferon ELISAs</Link>
                      </div>
                    </div>
                    <div>
                        <Link href="/products/assay-kits/interleukin-elisas" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-semibold text-slate-700">Interleukin (IL) ELISA Kits</Link>
                      <div className="pl-3 space-y-1">
                          <Link href="/products/assay-kits/interleukin-elisas/human-il-15" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Human IL-15 ELISA</Link>
                          <Link href="/products/assay-kits/interleukin-elisas/human-il-22" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Human IL-22 ELISA</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proteins */}
                <div>
                    <Link href="/products/proteins" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Proteins</Link>
                  <div className="pl-4 space-y-1.5">
                      <Link href="/products/proteins" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">All Proteins</Link>
                      <Link href="/products/proteins/cytokines-growth-factors" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Cytokines and Growth Factors</Link>
                      <Link href="/products/proteins/interferon-decoy-receptor" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Interferon Decoy Receptor</Link>
                    <div>
                        <Link href="/products/proteins/interferons" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-semibold text-slate-700">Interferons</Link>
                      <div className="pl-3 space-y-1">
                          <Link href="/products/proteins/interferons/human" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Human IFN Proteins</Link>
                          <Link href="/products/proteins/interferons/mouse" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Mouse IFN Proteins</Link>
                          <Link href="/products/proteins/interferons/rat" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Rat IFN Proteins</Link>
                          <Link href="/products/proteins/interferons/mammalian" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Mammalian IFN Proteins</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Antibodies */}
                <div>
                    <Link href="/products/antibodies" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Antibodies</Link>
                  <div className="pl-4 space-y-1.5">
                      <Link href="/products/antibodies" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">All Antibodies</Link>
                    <div>
                        <Link href="/products/antibodies/monoclonal" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-semibold text-slate-700">Monoclonal Antibodies (MAbs)</Link>
                      <div className="pl-3 space-y-1">
                          <Link href="/products/antibodies/monoclonal/anti-human-ifn" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Anti-Human IFN MAbs</Link>
                          <Link href="/products/antibodies/monoclonal/anti-mouse-ifn" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Anti-Mouse IFN MAbs</Link>
                          <Link href="/products/antibodies/monoclonal/anti-porcine-ifn" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Anti-Porcine IFN MAbs</Link>
                          <Link href="/products/antibodies/monoclonal/labeled" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Labeled Anti-IFN MAbs</Link>
                      </div>
                    </div>
                    <div>
                        <Link href="/products/antibodies/polyclonal" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-semibold text-slate-700">Polyclonal Antibodies (PAbs)</Link>
                      <div className="pl-3 space-y-1">
                          <Link href="/products/antibodies/polyclonal/anti-human-ifn" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Anti-Human IFN PAbs</Link>
                          <Link href="/products/antibodies/polyclonal/anti-mouse-ifn" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Anti-Mouse IFN PAbs</Link>
                          <Link href="/products/antibodies/polyclonal/anti-rat-ifn" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Anti-Rat IFN PAbs</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-black text-[#002776] uppercase tracking-[0.2em] border-b border-slate-100"
              >
                SERVICES
              </Link>
                <div className="pl-4 pt-3 space-y-4">
                <div>
                  <p className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-2 pt-2">Core Services</p>
                  <div className="space-y-1.5">
                      <Link href="/services/assay-development" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Assay Development</Link>
                    <div>
                        <Link href="/services/biomarker-sample-analysis" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-semibold text-slate-700">Biomarker Sample Analysis</Link>
                      <div className="pl-3 space-y-1">
                          <Link href="/services/biomarker-sample-analysis/simoa" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">SIMOA Assay Services</Link>
                          <Link href="/services/biomarker-sample-analysis/smc" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">SMC Assay Services</Link>
                          <Link href="/services/biomarker-sample-analysis/multiplex-elisa" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-[11px] text-slate-500">Multiplex ELISA Assay Services</Link>
                      </div>
                    </div>
                      <Link href="/services/cell-based-services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Cell-Based Services</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#002776] uppercase tracking-[0.2em] mb-2 pt-2">Additional Services</p>
                  <div className="space-y-1.5">
                      <Link href="/services/custom-production" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Custom Production</Link>
                      <Link href="/services/antibody-characterization" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600">Antibody Characterization Service</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <Link
                href="/resources"
                onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-black text-[#002776] uppercase tracking-[0.2em] border-b border-slate-100"
              >
                RESOURCES
              </Link>
                <div className="pl-4 pt-3 space-y-2">
                  <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs text-slate-600">Scientific Insights Blog</Link>
                <Link href="/resources/technical-presentations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs text-slate-600">Technical Presentations</Link>
                <Link href="/resources/general-protocols" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs text-slate-600">General Protocols</Link>
                <Link href="/resources/scientific-articles" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs text-slate-600">Scientific Articles</Link>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-black text-[#002776] uppercase tracking-[0.2em] border-b border-slate-100"
              >
                CONTACT US
              </Link>
            </div>
              </nav>
            </div>

            {/* Bottom Action (Stay Static) */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex-shrink-0">
              <Link
                href="/speak-to-a-scientist"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-5 bg-gradient-to-r from-[#058A9F] to-[#00B8C0] text-white rounded-2xl font-bold text-center shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

