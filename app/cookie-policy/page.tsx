import type { Metadata } from "next";
import { business } from "@/lib/config";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about how Beaconpay Solutions uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Hero title="Cookie Policy" subtitle="Legal" description="Information about cookies and how you can manage your preferences." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="cookie-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="cookie-heading" className="text-xl font-bold text-white mb-3">What are cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help the website function and remember your preferences.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Essential cookies</h2>
              <p>These cookies are necessary for the website to work. They cannot be disabled. They include cookies that support security and basic navigation.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Analytics cookies</h2>
              <p>With your consent, analytics cookies help us understand how visitors use the website so we can improve it. We only use analytics services that process data responsibly.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Functional cookies</h2>
              <p>With your consent, functional cookies enable enhanced features and personalisation, such as remembering your preferences.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Marketing cookies</h2>
              <p>Marketing cookies are not currently used on this website. If this changes, we will update this policy and request your consent.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Third-party cookies</h2>
              <p>Some cookies may be set by trusted third-party providers that help us operate or improve the website. We do not share cookie data for advertising purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Cookie duration</h2>
              <p>Cookies may be session cookies (deleted when you close your browser) or persistent cookies (stored for a longer period according to their purpose).</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Consent management</h2>
              <p>When you first visit our website, you will be given the option to accept or manage cookies. You can change your preferences at any time by clicking the cookie settings link in the footer of the page.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">How to change cookie settings</h2>
              <p>You can also manage or delete cookies through your browser settings. For more information, consult your browser&apos;s help documentation.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Contact details</h2>
              <p>If you have questions about this Cookie Policy, please contact us at <a href={`mailto:${business.email}`} className="text-white hover:underline">{business.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
