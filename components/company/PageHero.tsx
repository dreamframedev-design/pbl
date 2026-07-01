import Image from 'next/image';

interface PageHeroProps {
  /** Small uppercase breadcrumb / eyebrow items, rendered left-to-right */
  eyebrow: string[];
  /** Main headline lines (bold) */
  titleLines: string[];
  /** Optional serif-italic accent line rendered under the bold title lines */
  accent?: string;
  /** Optional short supporting sentence under the headline */
  subtitle?: string;
  /** Background image in /public/images */
  image: string;
  imageAlt: string;
  /** Flip the background image horizontally (matches Contact style) */
  flipImage?: boolean;
}

/**
 * Shared hero used across all PBL company / informational pages.
 * Radial brand gradient + photographic background faded behind a
 * white-to-transparent scrim, with a large Open Sauce headline.
 */
export default function PageHero({
  eyebrow,
  titleLines,
  accent,
  subtitle,
  image,
  imageAlt,
  flipImage = false,
}: PageHeroProps) {
  return (
    <header
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)',
      }}
    >
      {/* Background image with white gradient scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/images/${image}`}
          alt={imageAlt}
          fill
          className={`object-cover ${flipImage ? '-scale-x-100' : ''}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30 md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
          {eyebrow.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="text-slate-300">/</span>}
              <span>{item}</span>
            </span>
          ))}
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#002776]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          {accent && (
            <span className="block font-light font-serif italic text-[#058A9F]">
              {accent}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
