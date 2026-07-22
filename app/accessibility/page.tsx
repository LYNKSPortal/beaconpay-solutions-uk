import type { Metadata } from "next";
import { business } from "@/lib/config";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Beaconpay Solutions accessibility statement and commitment to an inclusive website.",
};

export default function AccessibilityPage() {
  const lastReviewed = "22 July 2026";

  return (
    <>
      <Hero title="Accessibility Statement" subtitle="Legal" description="Our commitment to making the Beaconpay Solutions website accessible and easy to use." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Accessibility Statement" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="accessibility-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="accessibility-heading" className="text-xl font-bold text-white mb-3">Commitment to accessibility</h2>
              <p>Beaconpay Solutions is committed to making its website accessible to as many people as possible. We aim to follow recognised accessibility good practice and continue to improve the website.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">What we do</h2>
              <ul>
                <li>Use semantic HTML and a logical heading hierarchy</li>
                <li>Provide visible keyboard focus indicators</li>
                <li>Support keyboard navigation through menus, forms and interactive elements</li>
                <li>Use proper labels and instructions on forms</li>
                <li>Build accordions and mobile menus to be keyboard accessible</li>
                <li>Ensure sufficient colour contrast</li>
                <li>Provide alternative text for meaningful images</li>
                <li>Use empty alt text for decorative images</li>
                <li>Include a skip-to-content link</li>
                <li>Maintain responsive layouts that work on desktop, tablet and mobile</li>
                <li>Respect reduced-motion preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Known limitations</h2>
              <p>Despite our efforts, some accessibility issues may remain. If you find a barrier, please let us know so we can address it.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Contact us</h2>
              <p>If you have difficulty using the website or need information in a different format, please contact us at <a href={`mailto:${business.email}`} className="text-white hover:underline">{business.email}</a> or use the request a call back form.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Review date</h2>
              <p>This statement was last reviewed on {lastReviewed}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
