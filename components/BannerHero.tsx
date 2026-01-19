import React from 'react';
import Link from 'next/link';

interface BannerHeroProps {
  title?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleSuffix?: string;
  description?: string | React.ReactNode;
  showLine?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function BannerHero({
  title,
  titleLine1,
  titleLine2,
  titleSuffix,
  description,
  showLine = true,
  breadcrumbs,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: BannerHeroProps) {
  // Use provided line breaks or fall back to title prop
  const line1 = titleLine1 || title || '';
  const line2 = titleLine2;
  
  return (
    <header className={`relative pt-32 pb-20 overflow-hidden bg-[#FBFBFE] ${className}`} style={{
      background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.03) 0, transparent 50%)'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-300">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-cyan-700 break-words">{crumb.label}</Link>
                ) : (
                  <span className="break-words">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        
        <h1 className={`text-6xl md:text-8xl font-bold tracking-tight mb-6 ${titleClassName}`}>
          {line2 ? (
            <>
              <span className="text-[#002776]">{line1}</span> <br/> <span className="text-[#04849C]">{line2}</span>
              {titleSuffix && (
                <span className="font-light text-gray-400 font-serif italic"> {titleSuffix}</span>
              )}
            </>
          ) : (
            <>
              <span className="text-[#002776]">{line1}</span>
              {titleSuffix && (
                <>
                  <br/>
                  <span className="font-light text-gray-400 font-serif italic">{titleSuffix}</span>
                </>
              )}
            </>
          )}
        </h1>
        
        {showLine && (
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
        )}
        
        {description && (
          <div className={`max-w-2xl text-xl md:text-2xl text-gray-600 font-light leading-relaxed ${descriptionClassName}`}>
            {typeof description === 'string' ? <p>{description}</p> : description}
          </div>
        )}
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/50 to-transparent -skew-x-12 transform translate-x-1/4"></div>
    </header>
  );
}

