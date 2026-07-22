import type { Metadata } from "next";
import { business } from "@/lib/config";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Website terms and conditions for Beaconpay Solutions.",
};

export default function TermsPage() {
  const lastUpdated = "22 July 2026";

  return (
    <>
      <Hero title="Website Terms and Conditions" subtitle="Legal" description="The terms that apply to your use of the Beaconpay Solutions website." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="terms-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-300 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="terms-heading" className="text-xl font-bold text-white mb-3">1. About These Terms</h2>
              <p>These Terms and Conditions govern access to and use of the Beaconpay Solutions website.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. About Us</h2>
              <p>The website is operated by Beaconpay Solutions.</p>
              <ul className="mt-2 space-y-1">
                <li>Registered legal entity: {business.legalEntity}</li>
                <li>Company number: {business.companyNumber}</li>
                <li>Date of incorporation: {business.dateOfIncorporation}</li>
                <li>Registered office: {business.registeredOffice}</li>
                <li>Email: <a href={`mailto:${business.email}`} className="text-white hover:underline">{business.email}</a></li>
                <li>Website: <a href={business.website} className="text-white hover:underline">{business.website}</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Website Use</h2>
              <p>You must not use the website unlawfully, attempt unauthorised access, introduce malware, interfere with website operation, scrape or copy content unlawfully, or misrepresent an affiliation with Beaconpay Solutions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Website Information</h2>
              <p>Website content is general information and does not constitute legal, tax, accounting, financial or employment-status advice.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Service Agreements</h2>
              <p>Payroll services are governed by separate proposals, contracts, schedules or client agreements. Website content does not automatically create a client relationship.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Intellectual Property</h2>
              <p>Website text, graphics, design, branding and original content belong to Beaconpay Solutions or its licensors.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Availability</h2>
              <p>The website may be changed, suspended or unavailable. We do not guarantee uninterrupted access.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Liability</h2>
              <p>Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, fraudulent misrepresentation, or any liability that cannot legally be excluded. Beaconpay Solutions is not responsible for losses caused by reliance on general website information where professional advice should have been obtained.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. Third-Party Links</h2>
              <p>External links are provided for convenience and are not controlled by Beaconpay Solutions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">10. Privacy and Cookies</h2>
              <p>Please see our <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a> and <a href="/cookie-policy" className="text-white hover:underline">Cookie Policy</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">11. Security</h2>
              <p>Users are responsible for maintaining the security of their own devices and accounts.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">12. Changes to These Terms</h2>
              <p>These terms may be revised. The latest version will appear on this page.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">13. Governing Law</h2>
              <p>These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have jurisdiction, subject to any mandatory consumer rights.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">14. Contact</h2>
              <p>For questions about these Terms, contact us at <a href={`mailto:${business.email}`} className="text-white hover:underline">{business.email}</a> or use the request a call back form.</p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-amber-400 bg-white/5 p-4 text-sm text-slate-200">
            <p><strong>Internal note:</strong> These terms must be legally reviewed before launch.</p>
          </div>
        </div>
      </section>
    </>
  );
}
