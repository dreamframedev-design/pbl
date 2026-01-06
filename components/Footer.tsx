import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background-offwhite border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Logo */}
            <Link href="/" className="mb-8">
              <h2 className="text-2xl font-bold text-primary-navy font-sans">
                PBL Assay Science
              </h2>
            </Link>

            {/* Links List */}
            <nav className="flex flex-col gap-3">
              <Link
                href="/shipping"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Shipping
              </Link>
              <Link
                href="/history"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                History
              </Link>
              <Link
                href="/pbl-team"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                PBL Team
              </Link>
              <Link
                href="/distributors"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Distributors
              </Link>
              <Link
                href="/values"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Values
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/events"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Events
              </Link>
              <Link
                href="/careers"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/company-values"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors"
              >
                Company Values
              </Link>
            </nav>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* LinkedIn Icon */}
            <div className="mb-8">
              <Link
                href="https://www.linkedin.com/company/pbl-assay-science"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-navy hover:bg-secondary-teal transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:text-white" />
              </Link>
            </div>

            {/* Address */}
            <address className="not-italic mb-6 text-sm text-primary-navy leading-relaxed">
              131 Ethel Road West Suite 6<br />
              Piscataway, NJ 08854<br />
              United States of America
            </address>

            {/* Phone Numbers */}
            <div className="mb-6 text-sm text-primary-navy">
              <a
                href="tel:+17327779123"
                className="hover:text-secondary-teal transition-colors"
              >
                +1 732-777-9123
              </a>
            </div>

            {/* Blog Link */}
            <div>
              <Link
                href="/blog"
                className="text-sm text-primary-navy hover:text-secondary-teal transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-xs text-neutral-steel text-center">
            © {new Date().getFullYear()} PBL Assay Science. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

