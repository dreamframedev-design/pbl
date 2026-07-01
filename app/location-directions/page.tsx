import type { Metadata } from 'next';
import { MapPin, Navigation } from 'lucide-react';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'Location & Directions | PBL Assay Science',
  description:
    'PBL Assay Science is located at 131 Ethel Road West, Suite 6, Piscataway, NJ 08854-5900. Find directions from every direction.',
};

const directions: { from: string; text: string }[] = [
  {
    from: 'From the North, South, and East',
    text: 'Take the New Jersey Turnpike to Exit 10. After the toll, proceed to Route 287 North (bear left three times, then right). In 2.2 miles, take Exit 2B (Route 27 South toward New Brunswick). At the third traffic light (0.6 mile), turn right onto Sturgis Road/Talmadge Road. In 1.1 mile, turn left onto Ethel Road after the CON-LUX/Sherwin Williams building. 131 Ethel Road West is 1.8 miles on the left (Note: you will go through one traffic light at Stelton Road). 131 is the second white building on the left after the open field/baseball park. Entrance to the parking lot is after the building. Suite 6 is the second to last unit at the far end of the building.',
  },
  {
    from: 'From the West',
    text: 'Take Route 287 South to Exit 5 (Stelton Road (Route 529)). Bear right on the exit ramp and merge onto Stelton Road. In 1.8 mile, turn right onto Ethel Road West. 131 Ethel Road West is 0.6 miles on the left. 131 is the second white building on the left after the open field/baseball park. Entrance to the parking lot is after the building. Suite 6 is the second to last unit at the far end of the building.',
  },
];

const MAPS_QUERY = encodeURIComponent('131 Ethel Road West, Suite 6, Piscataway, NJ 08854-5900');

export default function LocationDirectionsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'Location & Directions']}
        titleLines={['Find your way', 'to PBL']}
        accent="Assay Science."
        image="19.webp"
        imageAlt="PBL Assay Science location"
      />

      {/* Address + map */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
              Our Address
            </p>
            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-secondary-teal flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-slate-600 font-light mb-4">
                  PBL Assay Science is located at the following address:
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#002776] leading-snug">
                  131 Ethel Road West, Suite 6
                  <br />
                  Piscataway, NJ 08854-5900
                </p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#002776] text-white font-medium rounded-full hover:scale-105 transition-all shadow-lg shadow-[#002776]/20"
            >
              <Navigation className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>

          <div className="rounded-[2.2rem] overflow-hidden border border-slate-100 shadow-image">
            <iframe
              title="PBL Assay Science location map"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
              Directions to PBL Assay Science
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
          </div>

          <div className="space-y-6">
            {directions.map((d) => (
              <div
                key={d.from}
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#8B2981] mb-4">{d.from}</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}
