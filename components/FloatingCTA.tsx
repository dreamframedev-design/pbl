import Link from 'next/link';

export default function FloatingCTA() {
  return (
    <div className="fixed top-24 right-4 md:right-6 z-[100] animate-fade-in">
      <Link
        href="/speak-to-a-scientist"
        className="group inline-flex items-center justify-center px-5 py-3 md:px-6 md:py-3 bg-secondary-teal text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out whitespace-nowrap text-sm md:text-base"
      >
        <span>REQUEST A QUOTE</span>
      </Link>
    </div>
  );
}

