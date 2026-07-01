import type { Metadata } from 'next';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'PBL Team | PBL Assay Science',
  description:
    'Meet the management team, scientific advisory board, and founders of PBL Assay Science.',
};

interface Person {
  name: string;
  role: string;
}

const managementTeam: Person[] = [
  { name: 'Robert Pestka', role: 'Chief Executive Officer' },
  { name: 'Rick Nichols', role: 'Chief Revenue Officer' },
  { name: 'Lori Parro, CPA, MBA', role: 'Chief Financial Officer' },
  { name: 'Alok Pandey, Ph.D.', role: 'Chief Scientific Officer' },
  { name: 'William A. Clark, Ph.D.', role: 'Vice President, Science and Strategic Alliances' },
  { name: 'Hong-Gee Lee, Ph.D.', role: 'Director, Marketing & Product Management' },
  { name: 'Daniela Rotaru', role: 'Managing Director, Products Division' },
  { name: 'Mike Skawinski', role: 'Scientific Advisor' },
  { name: 'Karen Zipf, MS', role: 'Director, Quality' },
  { name: 'Jonathan Ferreira', role: 'Director, Project Management' },
  { name: 'Thomas B. Lavoie, Ph.D.', role: 'Biomarker Consultant' },
];

const advisoryBoard: Person[] = [
  { name: 'Faranhaz Forozan, Ph.D., MB(ASCP)', role: 'SAB Member' },
  { name: 'Michael D. Howell, Ph.D.', role: 'SAB Member' },
  { name: 'Ilia Ichetovkin, Ph.D.', role: 'SAB Member' },
  { name: 'Terence Ryan, Ph.D.', role: 'SAB Member' },
];

const founders: Person[] = [
  { name: 'Joan Pestka', role: 'Founder & Executive Manager' },
  { name: 'Sidney Pestka, M.D.', role: 'Founder & Chairman Emeritus (In memoriam, 1936 – 2016)' },
];

function initials(name: string) {
  const parts = name.replace(/,.*$/, '').split(' ').filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase();
}

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500 hover:-translate-y-1 flex flex-col items-start">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#002776] to-[#058A9F] flex items-center justify-center text-white font-bold text-lg mb-6">
        {initials(person.name)}
      </div>
      <h3 className="text-lg font-bold text-[#002776] leading-tight">{person.name}</h3>
      <p className="text-sm text-secondary-teal font-medium mt-2">{person.role}</p>
    </div>
  );
}

export default function PBLTeamPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'PBL Team']}
        titleLines={['The people', 'behind the']}
        accent="science."
        image="scientists in lab dark neon.webp"
        imageAlt="PBL Assay Science team"
      />

      {/* Guiding quote */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-light font-serif italic text-[#058A9F] leading-relaxed">
            &ldquo;We believe people deserve new and improved interventions to treat disease
            and improve human health.&rdquo;
          </p>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
              Management Team
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
              Scientific Advisory Board
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
              Founders
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {founders.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}
