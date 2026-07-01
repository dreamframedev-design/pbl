import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, MapPin } from 'lucide-react';
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
  image: string;
}

const events: EventItem[] = [
  {
    name: 'WRIB — Workshop on Recent Issues in Bioanalysis',
    dates: 'April 13–17, 2026',
    location: 'Dallas, Texas',
    href: 'https://www.wrib.org/',
    image: 'dallas.jpg',
  },
  {
    name: 'DDN East — Drug Discovery Networking Conference',
    dates: 'May 7–8, 2026',
    location: 'Philadelphia, PA',
    href: 'https://nexus-conference.com/ddneast/',
    image: 'philadelphia.jpg',
  },
  {
    name: 'AAPS National Biotechnology Conference (NBC)',
    dates: 'May 11–14, 2026',
    location: 'San Diego, CA',
    href: 'https://www.aaps.org/nbc',
    image: 'san-diego.jpg',
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
              Where to Find Us
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <a
                key={event.name}
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* City image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={`/images/events/${event.image}`}
                    alt={`${event.location} skyline`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002776]/80 via-[#002776]/10 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-semibold tracking-wide">{event.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 p-7">
                  <p className="text-xs font-black text-secondary-teal uppercase tracking-[0.2em] mb-3">
                    {event.dates}
                  </p>
                  <h3 className="text-lg font-bold text-[#002776] leading-snug group-hover:text-secondary-teal transition-colors flex-1">
                    {event.name}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002776] group-hover:gap-3 transition-all">
                    Visit event site
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}
