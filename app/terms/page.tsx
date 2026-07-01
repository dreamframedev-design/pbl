import type { Metadata } from 'next';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'Company Policies, Disclaimers & Terms of Use | PBL Assay Science',
  description:
    "PBL Assay Science's customer bill of rights, warranty, conditions of sale, shipping & handling, product use, and return policy.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'Policies & Terms']}
        titleLines={['Company Policies,', 'Disclaimers &']}
        accent="Terms of Use."
        image="17.webp"
        imageAlt="PBL Assay Science company policies"
      />

      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">
          {/* Guarantee / Customer Bill of Rights */}
          <div>
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-3">
              Guarantee
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">
              Customer Bill of Rights
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
              As part of our ongoing commitment to outstanding customer service, we outline
              below what you can expect from all the employees of PBL.
            </p>
            <ul className="space-y-3">
              {[
                'Polite and courteous service from our customer and technical representatives.',
                'Our top priority at the time you contact us.',
                'The latest technical information and support.',
                'Immediate notification of backorders, product defects and/or updates.',
                'Complete receptiveness to any compliment or complaint concerning our product quality and/or service performance.',
                'Quality products and services.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-slate-600 font-light leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary-teal flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Warranty */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">Warranty</h2>
            <div className="space-y-4 text-base text-slate-600 font-light leading-relaxed">
              <p>
                Information and specifications for PBL products may be found on the data
                sheets provided with each product and at{' '}
                <a
                  href="https://www.pblassaysci.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-teal font-medium underline underline-offset-4 hover:text-[#002776]"
                >
                  https://www.pblassaysci.com
                </a>
                . The information presented is abbreviated and believed to be accurate. All
                products are warranted to meet published specifications when used under
                normal laboratory conditions. If PBL determines that a product does not meet
                specifications, PBL will, at its option, replace the product or issue a
                credit.
              </p>
              <p>
                PBL shall not be held liable for any direct, indirect, incidental, or
                consequential damages, including, without limitation, loss of profit, loss
                of business, or other loss which may be based directly or indirectly upon
                sales, use, or inadequacy of the product for any purpose or by any defect or
                deficiency therein, even if PBL knew or should have known of the possibility
                of such loss.
              </p>
              <p>
                By purchasing products from PBL, buyer agrees that PBL will not be liable for
                damages of any sort resulting from the sale of a product. Liability shall be
                limited to the amount paid to PBL by the buyer for the product. No action,
                regardless of form, arising out of any transaction under a sale may be
                brought by either party more than one year after the injured party has
                knowledge of the occurrence which gave rise to the cause of action.
              </p>
            </div>
          </div>

          {/* Conditions of Sale */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">
              Conditions of Sale
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              All prices are subject to change without notice.
            </p>
          </div>

          {/* Shipping & Handling */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">
              Shipping &amp; Handling
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#8B2981] mb-3">Domestic Shipments</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  To ensure that our products reach you in the best possible condition, PBL
                  ships all of its products on dry ice, ice packs, or at room temperature
                  using overnight shipping. A fee of $35 per order is charged on domestic
                  shipments for ice, handling, and packaging. Shipping fees are additional
                  and will be added to the invoice unless the product is shipped on the
                  recipients&apos; account. For other shipping options, please contact us.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#8B2981] mb-3">International Shipments</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  If you would like us to ship directly to an international address, orders
                  are shipped on dry ice or ice packs, and are shipped via courier service on
                  the recipients&apos; account. A fee of $50 is added to each order for ice,
                  handling and packaging. In addition, bank transfer fees may apply. Courier
                  shipping charges, local import duties and taxes can be billed directly to
                  your courier account or can be invoiced once PBL receives notice of the
                  charges.
                </p>
              </div>
            </div>
          </div>

          {/* Product Use */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">Product Use</h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Products and services offered are{' '}
              <span className="font-bold text-[#002776]">FOR RESEARCH USE ONLY</span>.
              Products are not for resale, not to be used in the production of any kit sold
              commercially, not for administration to humans, and not for use in any
              diagnostic or therapeutic procedure.
            </p>
          </div>

          {/* Return Policy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">Return Policy</h2>
            <div className="space-y-4 text-base text-slate-600 font-light leading-relaxed">
              <p>
                Because of the perishable nature of our products, we do not take products
                back or refund purchases, but we guarantee PBL products meet specifications
                until the expiration dates when used under normal laboratory conditions. In
                cases where an expiration date is not stated on the product datasheet, we
                will warranty the product for a period up to 12 months from the date of
                purchase by the end-user, provided the product is stored according to the
                recommendation storage conditions. We will work with you to assess product
                performance and determine whether product replacement or product credit is
                warranted, to assist as best as we can with your studies and to ensure you
                have a positive customer experience.
              </p>
              <p>
                Incorrectly ordered inventory items can only be replaced for partial credits,
                and shipping and handling fees will not be credited. There are no credits for
                custom and special orders normally stocked as inventory items.
              </p>
            </div>
          </div>

          {/* Contact note */}
          <div className="rounded-[2rem] bg-[#F4F4F9]/60 border border-slate-100 p-8">
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Please{' '}
              <a
                href="mailto:info@pblassaysci.com"
                className="text-secondary-teal font-medium underline underline-offset-4 hover:text-[#002776]"
              >
                e-mail
              </a>{' '}
              or call{' '}
              <a
                href="tel:+17327779123"
                className="text-secondary-teal font-medium underline underline-offset-4 hover:text-[#002776]"
              >
                +1 (732) 777-9123
              </a>{' '}
              PBL Assay Science if you have any questions about our policies.
            </p>
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}
