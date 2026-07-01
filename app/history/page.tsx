import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'History | PBL Assay Science',
  description:
    'Founded in 1990 by Dr. Sidney Pestka and Joan Pestka, PBL Assay Science has grown from a family basement laboratory into a trusted worldwide source for high-quality assays, proteins, and antibodies.',
};

interface Milestone {
  year: string;
  text: string;
}

interface EraImage {
  src: string;
  caption: string;
}

interface Era {
  range: string;
  images?: EraImage[];
  milestones: Milestone[];
}

const eras: Era[] = [
  {
    range: '1990 – 1994',
    images: [
      { src: 'first-elisa-immunoassays.jpg', caption: 'PBL’s first ELISA-based immunoassays' },
    ],
    milestones: [
      { year: '1990', text: 'Dr. Sidney Pestka and Joan Pestka found Pestka Biomedical Laboratories.' },
      { year: '1991', text: 'Launches first human and mouse interferon proteins, antibodies, and immunoassay kits available for sale including Human IFN Alpha-2a, Mouse IFN-Beta, Anti-Human IFN Alpha (sheep polyclonal), and Human IFN-Alpha ELISA Kit.' },
      { year: '1991', text: 'Introduces Universal™ Type I IFN, a human IFN-Alpha hybrid protein demonstrating activity on multiple mammalian species, that can be used in cross-species comparative studies and when native-species proteins are not readily available.' },
      { year: '1993', text: 'Robert Pestka joins the family business as Director of Corporate Development.' },
    ],
  },
  {
    range: '1995 – 1999',
    milestones: [
      { year: '1995', text: 'Doubles number of interferons, antibodies, ELISA kits and other proteins in product line.' },
      { year: '1997', text: 'Expands sales channels for worldwide distribution of PBL products.' },
      { year: '1998', text: 'Releases first direct-to-customer catalog showcasing PBL’s products to researchers around the world.' },
      { year: '1999', text: 'Establishes Bioanalytical Services Division to develop immunoassays and perform biomarker sample analysis.' },
    ],
  },
  {
    range: '2000 – 2004',
    milestones: [
      { year: '2000', text: 'Expands product range to include pioneering Human IFN Alpha Multi-Subtype Serum ELISA.' },
      { year: '2000', text: 'Introduces first-to-market Mouse IFN-Alpha ELISA Kit.' },
      { year: '2002', text: 'Increases capacity of manufacturing and research facilities to meet growing customer needs.' },
    ],
  },
  {
    range: '2005 – 2009',
    images: [
      { src: 'interferonsource-elisa-kits.jpg', caption: 'PBL InterferonSource ELISA Kits' },
    ],
    milestones: [
      { year: '2005', text: 'Launches first-to-market Mouse IFN-Beta ELISA Kit.' },
      { year: '2006', text: 'Changes name to PBL InterferonSource to emphasize the expertise PBL provides to customers.' },
      { year: '2009', text: 'Introduces Cynomolgus/Rhesus IFN-Alpha ELISA Kit, the first ELISA designed to quantify non-human primate IFN-Alpha.' },
      { year: '2009', text: 'Launches High Sensitivity Serum ELISA for Human IFN Beta, the first ELISA that quantifies basal levels of endogenous IFN-Beta in healthy donors and disease patients.' },
    ],
  },
  {
    range: '2010 – 2014',
    images: [
      { src: 'holiday-party-2014.jpg', caption: 'The PBL team — Holiday Party, 2014' },
    ],
    milestones: [
      { year: '2010', text: 'Implements major product improvement initiative in response to customer feedback.' },
      { year: '2011', text: 'Adds Quansys Q-Plex™ multiplex arrays to portfolio for simultaneous quantification of cytokines and other biomarkers.' },
      { year: '2011', text: 'Introduces Forte BioOctet technology to enhance custom assay development capabilities.' },
      { year: '2013', text: 'Serves as early adopter of Singulex (now MilliporeSigma) Erenna® system to bring ultra-sensitive biomarker assays to clients.' },
      { year: '2013', text: 'Changes name to PBL Assay Science to signify growth beyond interferons into assay-related products & bioanalytical services.' },
    ],
  },
  {
    range: '2015 – 2019',
    images: [
      { src: 'verikine-ifn-alpha-kit.jpg', caption: 'VeriKine Human IFN-Alpha Multi-Subtype ELISA Kit' },
      { src: 'smcxpro.jpg', caption: 'MilliporeSigma SMCxPRO® at PBL Assay Science' },
    ],
    milestones: [
      { year: '2015', text: 'Launches first Human IFN-Alpha All Subtype ELISA Kit, High Sensitivity, the only ELISA that can detect the full range of human IFN-alpha subtypes in healthy donors and disease patients.' },
      { year: '2015', text: 'Named as Preferred Provider by Quanterix to develop and run ultra-sensitive biomarker assays on the SIMOA® HD-1 platform.' },
      { year: '2017', text: 'Introduces Human Type I IFN Neutralizing Antibody Mixture, a proprietary, cost-effective product designed to block the entire spectrum of human Type I IFN signaling.' },
      { year: '2017', text: 'Implements sensitive multiplexed protein quantification services on Meso Scale Diagnostics (MSD) MESO QuickPlex SQ 120MM platform, expanding PBL’s analyte menu to several hundred protein targets.' },
      { year: '2017', text: 'Launches Mouse IFN-Alpha All Subtype ELISA Kit, High Sensitivity, the only high sensitivity ELISA that quantifies all mouse IFN-Alpha subtypes.' },
      { year: '2019', text: 'Adopts second-generation MilliporeSigma SMCxPRO® to detect and quantify low-abundance biomarkers with speed and precision in a compact design that eliminates microfluidics complications.' },
    ],
  },
  {
    range: '2020 – Future',
    images: [
      { src: 'simoa-hd-x.jpg', caption: 'Quanterix SIMOA® HD-X at PBL Assay Science' },
    ],
    milestones: [
      { year: '2020', text: 'PBL maintains ongoing bioanalytical services operations to meet client needs as COVID-19 pandemic escalates.' },
      { year: '2020', text: 'Launches best-in-class VeriKine-HS™ Human IL-22 ELISA Kit, the only ELISA able to quantify basal levels of IL-22 in both healthy-donor and disease-state samples.' },
      { year: '2020', text: 'Offers first ultra-sensitive biomarker assay development and detection services on the fully automated Quanterix SIMOA® HD-X immunoassay platform.' },
      { year: '2020', text: 'Introduces best-in-class VeriKine-HS™ Total Human IL-15 ELISA Kit, the only ELISA that quantifies basal levels of free IL-15 and IL-15/IL15-Rα complex, the predominant form found in the blood.' },
      { year: '2022', text: 'Increases bioanalytical services business 70% over a 2-year period, highlighting how PBL collaborates with study leads and researchers to expedite their clinical studies and internal R&D efforts.' },
      { year: '2025', text: 'Enhances Quality Assurance and Quality Control procedures and documentation to meet evolving regulatory requirements and bioanalytical services client requests.' },
    ],
  },
];

function EraImageCard({ image }: { image: EraImage }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={`/images/history/${image.src}`}
          alt={image.caption}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <figcaption className="px-5 py-4 text-xs text-slate-500 font-medium italic">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'History']}
        titleLines={['Three decades', 'of high-quality']}
        accent="science, delivered."
        image="23.webp"
        imageAlt="PBL Assay Science history"
      />

      {/* Intro + first laboratory photo */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
              PBL’s First Laboratory — New Brunswick, New Jersey
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              PBL Assay Science was founded in 1990 by{' '}
              <span className="font-semibold text-[#002776]">Dr. Sidney Pestka</span> and{' '}
              <span className="font-semibold text-[#002776]">Joan Pestka</span> as a
              family-owned business operating out of the basement of their home. From that
              starting point, we have grown into a company that supports researchers
              worldwide with a reliable source of high-quality products and services. Today,
              PBL Assay Science helps researchers solve difficult assay development and
              protein quantification problems and continues to serve as a trusted source for
              high quality, high sensitivity ELISAs as well as interferon proteins and
              antibodies. Our success can be attributed to our commitment to provide reliable
              products and uncompromising quality to our customers.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-image">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src="/images/history/first-laboratory.jpg"
                alt="PBL’s first laboratory in New Brunswick, New Jersey"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-6 py-4 text-xs text-slate-500 font-medium italic bg-white">
              PBL’s first laboratory in New Brunswick, New Jersey
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Founders feature */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <figure className="order-2 lg:order-1 overflow-hidden rounded-[2rem] border border-slate-100 shadow-image">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src="/images/history/founders-1990.jpg"
                alt="Sidney Pestka and Joan Pestka, circa 1990"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-6 py-4 text-xs text-slate-500 font-medium italic bg-white">
              Dr. Sidney Pestka and Joan Pestka, circa 1990
            </figcaption>
          </figure>
          <div className="order-1 lg:order-2">
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
              A Family Legacy
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              What began in a family basement was built on the pioneering interferon research
              of co-founder{' '}
              <span className="font-semibold text-[#002776]">Sidney Pestka, M.D.</span> —
              often called the{' '}
              <span className="italic text-[#8B2981] font-medium">
                &ldquo;father of interferons.&rdquo;
              </span>{' '}
              Together with Joan Pestka, they set out to make the research products he had
              developed available to scientists around the world, planting the seed for what
              PBL Assay Science is today.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {eras.map((era) => (
              <div key={era.range}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#002776] tracking-tight whitespace-nowrap">
                    {era.range}
                  </h2>
                  <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
                </div>

                {era.images && era.images.length > 0 && (
                  <div className={`grid gap-6 mb-10 ${era.images.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1 max-w-md'}`}>
                    {era.images.map((img) => (
                      <EraImageCard key={img.src} image={img} />
                    ))}
                  </div>
                )}

                <ol className="relative border-l-2 border-slate-200 ml-3 space-y-8">
                  {era.milestones.map((m, i) => (
                    <li key={i} className="relative pl-8">
                      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-secondary-teal" />
                      <span className="inline-block text-xs font-black text-secondary-teal uppercase tracking-[0.2em] mb-2">
                        {m.year}
                      </span>
                      <p className="text-base text-slate-600 font-light leading-relaxed">
                        {m.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today / facility feature */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <figure className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-image">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src="/images/history/facility-new-jersey.jpg"
                alt="PBL Assay Science facility, New Jersey"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-6 py-4 text-xs text-slate-500 font-medium italic bg-white">
              PBL Assay Science facility — New Jersey
            </figcaption>
          </figure>
          <div>
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
              Looking Forward
            </p>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              As we look to the future, we will continue to support the researchers around
              the world who rely on PBL Assay Science&apos;s high-quality products and
              bioanalytical services. The vision we had for PBL 35 years ago remains the same
              today:{' '}
              <span className="font-serif italic text-[#058A9F]">
                to enable the scientific community to overcome challenges through the
                high-quality solutions we deliver and the trust we inspire.
              </span>{' '}
              We are all part of the same scientific community that labors to develop new and
              improved interventions to treat disease and improve human health. Thank you for
              trusting PBL Assay Science to help you realize your aspirations.
            </p>
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}
