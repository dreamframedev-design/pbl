export default function FloatingCTA() {
  return (
    <div className="fixed top-24 right-4 md:right-6 z-[100] animate-fade-in">
      <a
        href="https://www.pblassaysci.com/products/request-quote"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center px-5 py-3 md:px-6 md:py-3 bg-gradient-to-r from-secondary-teal via-secondary-teal to-accent-cyan text-white font-semibold rounded-lg shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300 ease-out whitespace-nowrap text-sm md:text-base"
      >
        <span>REQUEST A QUOTE</span>
      </a>
    </div>
  );
}

