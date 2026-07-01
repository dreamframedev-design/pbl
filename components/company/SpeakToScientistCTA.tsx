import Link from 'next/link';

interface SpeakToScientistCTAProps {
  heading?: string;
  body?: string;
}

/**
 * Shared closing call-to-action used across the company / informational
 * pages so every page ends on the same branded note.
 */
export default function SpeakToScientistCTA({
  heading = 'Speak to a Scientist',
  body = "PBL's Customer Support Team is ready to assist by email, phone, or chat.",
}: SpeakToScientistCTAProps) {
  return (
    <section className="pt-28 pb-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#002776]">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-slate-500 mb-12 font-light leading-relaxed">
          {body}
        </p>
        <Link
          href="/speak-to-a-scientist"
          className="inline-flex items-center px-12 py-5 md:px-14 md:py-6 bg-[#002776] text-white rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
        >
          Speak to a Scientist
        </Link>
      </div>
    </section>
  );
}
