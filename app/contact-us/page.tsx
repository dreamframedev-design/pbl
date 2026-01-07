import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            PBL's Customer Support Team is ready to assist by email, phone, or chat.
          </p>
        </div>
      </section>

      {/* Contact Categories Grid */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* General Support */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                General Support
              </h3>
              <div className="space-y-4 flex-grow">
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Email</p>
                  <a
                    href="mailto:info@pblassaysci.com"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium break-all"
                  >
                    info@pblassaysci.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Phone</p>
                  <a
                    href="tel:+17327779123"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium"
                  >
                    +1 732-777-9123
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Toll-Free</p>
                  <a
                    href="tel:+18777258881"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium"
                  >
                    +1 877-PBL-8881<br />
                    <span className="text-sm">(+1 877-725-8881)</span>
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Fax</p>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <a
                    href="tel:+17327779141"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium"
                  >
                    +1 732-777-9141
                  </a>
                </div>
              </div>
            </div>

            {/* Order Support */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                Order Support
              </h3>
              <div className="space-y-4 flex-grow">
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Email</p>
                  <a
                    href="mailto:sales@pblassaysci.com"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium break-all"
                  >
                    sales@pblassaysci.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Phone</p>
                  <a
                    href="tel:+17327779123"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium"
                  >
                    +1 732-777-9123 Option 2
                  </a>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-light mb-1">Accounts Payable</p>
                  <a
                    href="mailto:ap@pblbio.com"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium break-all text-sm"
                  >
                    ap@pblbio.com
                  </a>
                  <p className="text-sm text-gray-600 font-light mt-1">
                    Phone: <a href="tel:+17327779123" className="text-primary-navy hover:text-secondary-teal transition-colors font-medium">+1 732-777-9123 Option 4</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Assay Services */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                Assay Services
              </h3>
              <div className="space-y-4 flex-grow">
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Email</p>
                  <a
                    href="mailto:assayservices@pblassaysci.com"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium break-all"
                  >
                    assayservices@pblassaysci.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Phone</p>
                  <a
                    href="tel:+17327779123"
                    className="text-primary-navy hover:text-secondary-teal transition-colors font-medium"
                  >
                    +1 732-777-9123 Option 6
                  </a>
                </div>
              </div>
            </div>

            {/* Distributors */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                Distributors
              </h3>
              <div className="flex-grow flex items-start">
                <Link
                  href="https://www.pblassaysci.com/distributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors duration-300 group/link"
                >
                  <span className="mr-2">View Distributor Information</span>
                  <ExternalLink className="w-5 h-5 transform group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Place an Order */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
            How to Place an Order
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Domestic US Orders */}
            <div className="bg-background-offwhite p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                Domestic US Orders
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                Orders can be placed via the website, e-mail, phone, fax, or mail.
              </p>
            </div>

            {/* International Orders */}
            <div className="bg-background-offwhite p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                International Orders
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                PBL ships globally, and international orders can be placed by e-mail, phone, fax, or mail, but not on the website. We work with a network of distribution partners worldwide to serve our international customers.
              </p>
            </div>
          </div>

          {/* Order Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web */}
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent-cyan/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-primary-navy mb-4">Web</h4>
              <p className="text-gray-700 font-light leading-relaxed text-sm mb-4">
                Browse our products online, add items to your cart, and complete checkout through our secure website. Available for domestic US orders only.
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent-cyan/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-primary-navy mb-4">E-mail</h4>
              <p className="text-gray-700 font-light leading-relaxed text-sm mb-4">
                Send your order to:
              </p>
              <a
                href="mailto:sales@pblassaysci.com"
                className="text-secondary-teal hover:text-primary-navy transition-colors font-medium break-all"
              >
                sales@pblassaysci.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent-cyan/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-primary-navy mb-4">Phone</h4>
              <p className="text-gray-700 font-light leading-relaxed text-sm mb-2">
                <a href="tel:+17327779123" className="text-secondary-teal hover:text-primary-navy transition-colors font-medium">
                  +1 732-777-9123 Option 2
                </a>
              </p>
              <p className="text-gray-700 font-light leading-relaxed text-sm">
                Toll-Free: <a href="tel:+18777258881" className="text-secondary-teal hover:text-primary-navy transition-colors font-medium">+1 877-725-8881 Option 2</a>
              </p>
            </div>

            {/* Fax */}
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent-cyan/30 transition-all duration-300">
              <h4 className="text-xl font-bold text-primary-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Fax
              </h4>
              <a
                href="tel:+17327779141"
                className="text-secondary-teal hover:text-primary-navy transition-colors font-medium"
              >
                +1 732-777-9141
              </a>
            </div>

            {/* Mail */}
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-accent-cyan/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl font-bold text-primary-navy mb-4">Mail</h4>
              <address className="text-gray-700 font-light leading-relaxed text-sm not-italic">
                131 Ethel Road West, Suite 6<br />
                Piscataway, NJ 08854<br />
                USA
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Delivery */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-12 text-center">
            Shipping & Delivery
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Domestic Shipping */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-primary-navy mb-6">
                Domestic US Orders
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed font-light mb-2">
                    Orders received by <strong>1:00 PM EST Monday - Thursday</strong> will typically ship the same day.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light">
                    Orders placed after 1:00 PM on Thursday will ship the following Monday.
                  </p>
                </div>
              </div>
            </div>

            {/* International Shipping */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-primary-navy mb-6">
                International Orders
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                International orders generally ship on Monday or Friday. Please contact us for specific shipping timelines and carrier options for your region.
              </p>
            </div>
          </div>

          {/* Shipping Fees */}
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-navy mb-6">
              Shipping & Ice/Handling Fees
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed font-light">
                <strong>$55 overnight shipping</strong> for domestic orders up to $1000 received by 3:00 PM EST Monday - Thursday.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                <Link href="/contact-us" className="text-secondary-teal hover:text-primary-navy transition-colors font-medium underline">
                  Contact us for international shipping rates
                </Link>.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Shipping fees correspond to the total retail value of your order.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              Please{' '}
              <Link href="/contact-us" className="text-secondary-teal hover:text-primary-navy transition-colors font-medium underline">
                contact customer service
              </Link>{' '}
              for questions about ordering or order status.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

