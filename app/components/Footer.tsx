import Link from "next/link";
import Image from "next/image";
import { business, navigation } from "@/lib/config";
import { Mail, Globe, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasSocial = business.social.linkedin || business.social.twitter || business.social.facebook;

  return (
    <footer className="bg-white/5 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center focus-visible:outline-offset-4">
              <Image
                src="/logo.png"
                alt="Beaconpay"
                width={200}
                height={40}
                className="w-[200px] h-auto"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Reliable payroll, PAYE, CIS, umbrella and contractor solutions for businesses, recruitment agencies and professionals across the UK.
            </p>
            {hasSocial && (
              <div className="flex items-center gap-3 pt-2">
                {business.social.linkedin && (
                  <a href={business.social.linkedin} aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                )}
                {business.social.twitter && (
                  <a href={business.social.twitter} aria-label="X (Twitter)" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                )}
                {business.social.facebook && (
                  <a href={business.social.facebook} aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "FAQs", href: "/faqs" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Request a Call Back", href: "/request-a-call-back" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {navigation.services.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-teal" />
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.website} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe className="w-4 h-4 text-teal" />
                  {business.website.replace("https://www.", "")}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-teal mt-0.5" />
                  <div>
                    <p className="text-slate-300">Monday to Friday</p>
                    <p>{business.openingHours.monday}</p>
                    <p className="mt-1">Saturday, Sunday and bank holidays: {business.openingHours.bankHolidays}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {navigation.legal.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-slate-300">
              © {year} {business.name}. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-xs text-slate-300 space-y-1">
            <p>Registered company number: {business.companyNumber}</p>
            <p>Date of incorporation: {business.dateOfIncorporation}</p>
            <p>Registered office: {business.registeredOffice}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
