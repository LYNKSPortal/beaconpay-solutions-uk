import type { Metadata } from "next";
import { business } from "@/lib/config";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Beaconpay Solutions privacy policy explains how we collect, use, store and protect personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "22 July 2026";

  return (
    <>
      <Hero title="Privacy Policy" subtitle="Legal" description="How we collect, use, store and protect personal information." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="privacy-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-300 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="privacy-heading" className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>Beaconpay Solutions is committed to protecting personal information and handling it responsibly. This Privacy Policy explains how we collect, use, store and protect personal information when individuals visit our website, contact us, apply for a role or use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Data Controller</h2>
              <p>Beaconpay Solutions is the controller of personal information unless we are acting as a processor on behalf of a payroll client.</p>
              <ul className="mt-2 space-y-1">
                <li>Registered company name: {business.legalEntity}</li>
                <li>Company number: {business.companyNumber}</li>
                <li>Date of incorporation: {business.dateOfIncorporation}</li>
                <li>Registered office: {business.registeredOffice}</li>
                <li>ICO registration number: {business.icoNumber}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Information We May Collect</h2>
              <ul>
                <li>Name</li>
                <li>Contact details</li>
                <li>Company information</li>
                <li>Enquiry information</li>
                <li>Employment and payroll information</li>
                <li>National Insurance number where necessary</li>
                <li>Tax and payroll records</li>
                <li>Bank details where required for service delivery</li>
                <li>Identity or right-to-work information where applicable</li>
                <li>Recruitment information and CVs</li>
                <li>Website usage information, IP address, device and browser information</li>
                <li>Cookie data</li>
                <li>Communication records</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. How Information Is Collected</h2>
              <ul>
                <li>Direct contact</li>
                <li>Website forms</li>
                <li>Client onboarding</li>
                <li>Service delivery</li>
                <li>Recruitment applications</li>
                <li>Cookies and analytics</li>
                <li>Third parties acting lawfully</li>
                <li>Employers, agencies or contractors supplying necessary payroll information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. How Information Is Used</h2>
              <ul>
                <li>Responding to enquiries</li>
                <li>Delivering payroll services</li>
                <li>Managing client relationships</li>
                <li>Processing payroll</li>
                <li>Communicating with workers and clients</li>
                <li>Meeting legal and regulatory obligations</li>
                <li>Preventing fraud</li>
                <li>Maintaining security</li>
                <li>Improving the website</li>
                <li>Recruitment</li>
                <li>Handling complaints</li>
                <li>Establishing or defending legal claims</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Lawful Bases</h2>
              <p>We rely on one or more of the following lawful bases, depending on the processing activity: contract, legal obligation, legitimate interests, consent, vital interests where relevant, and employment-law obligations where special category data applies.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Special Category and Sensitive Information</h2>
              <p>Payroll or employment services may require information relating to health, statutory leave or other sensitive matters. Such information is processed only where lawful and necessary.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Sharing Personal Information</h2>
              <p>We may share personal information with HMRC, pension providers, banks and payment providers, payroll software providers, cloud hosting providers, IT and security providers, professional advisers, regulators, government bodies, courts or law enforcement, recruitment platforms, and clients or agencies where necessary to provide services. We do not sell personal data.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. International Transfers</h2>
              <p>Some providers may process information outside the UK. Where required, appropriate safeguards will be used.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">10. Security</h2>
              <p>We use appropriate technical and organisational measures to protect personal information. No system can be guaranteed to be completely secure.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">11. Retention</h2>
              <p>Information is retained only for as long as required for service, legal, tax, employment, regulatory, accounting and dispute purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">12. Cookies</h2>
              <p>For more information, please see our <a href="/cookie-policy" className="text-white hover:underline">Cookie Policy</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">13. Individual Rights</h2>
              <p>You may have rights including access, rectification, erasure, restriction of processing, objection, data portability, withdrawal of consent, and rights relating to automated decision-making. These rights may be subject to legal limitations.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">14. Complaints</h2>
              <p>If you have concerns about how we handle your information, please contact us at <a href={`mailto:${business.email}`} className="text-white hover:underline">{business.email}</a>. You may also complain to the Information Commissioner&apos;s Office.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">15. Changes</h2>
              <p>This policy may be updated from time to time. The latest version will appear on this page.</p>
            </div>
          </div>

          {/* Legal review reminder */}
          <div className="mt-12 rounded-lg border-l-4 border-amber-400 bg-white/5 p-4 text-sm text-slate-200">
            <p><strong>Internal note:</strong> This privacy policy must be reviewed by a qualified UK data protection professional before launch.</p>
          </div>
        </div>
      </section>
    </>
  );
}
