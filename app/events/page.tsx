import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'Events | PBL Assay Science',
  description:
    "Meet PBL at this year's meetings and explore how our Assay Services and Product solutions can support your basic, pre-clinical, and clinical studies.",
};

interface EventItem {
  name: string;
  dates: string;
  location: string;
  href: string;
}

const events: EventItem[] = [
  {
    name: 'WRIB — Workshop on Recent Issues in Bioanalysis',
    dates: 'April 13–17, 2026',
    location: 'Dallas, Texas',
    href: 'https://www.wrib.org/',
  },
  {
    name: 'DDN East — Drug Discovery Networking Conference',
    dates: 'May 7–8, 2026',
    location: 'Philadelphia, PA',
    href: 'https://nexus-conference.com/ddneast/',
  },
  {
    name: 'AAPS National Biotechnology Conference (NBC)',
    dates: 'May 11–14, 2026',
    location: 'San Diego, CA',
    href: 'https://www.aaps.org/nbc',
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'Events']}
        titleLines={['Meet us at', 'the meetings']}
        accent="that move science forward."
        image="21.webp"
        imageAlt="PBL Assay Science events"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            PBL offers a portfolio of reliable, high-value interferon and interleukin
            products, essential for advancing research across various disease indications.
            We also provide comprehensive protein biomarker services, including biomarker
            screening in pre-clinical and clinical samples, immunoassay development on
            ultra-sensitive platforms, and protein expression and purification. Our presence
            at this year&apos;s meetings is an opportunity to explore how our Assay Services
            and Product solutions can support your basic, pre-clinical, and clinical studies.
            Discover the difference PBL quality can make in your research.
          </p>
          <p className="mt-8 text-2xl font-serif italic text-[#058A9F]">Lean On Us.</p>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
              Where to Find Us
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <a
                key={event.name}
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500 hover:-translate-y-1"
              >
                <div className="md:w-56 flex-shrink-0">
                  <p className="text-xs font-black text-secondary-teal uppercase tracking-[0.2em]">
                    {event.dates}
                  </p>
                  <p className="text-sm text-slate-400 font-medium mt-1">{event.location}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#002776] group-hover:text-secondary-teal transition-colors">
                    {event.name}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-secondary-teal transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}
