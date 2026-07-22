import type { Metadata } from "next";
import { business } from "@/lib/config";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Complaints Procedure",
  description: "How to submit a complaint to Beaconpay Solutions and how we will handle it.",
};

export default function ComplaintsPage() {
  return (
    <>
      <Hero title="Complaints Procedure" subtitle="Legal" description="How we handle complaints and work to resolve them fairly." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Complaints Procedure" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="complaints-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="complaints-heading" className="text-xl font-bold text-white mb-3">Our commitment</h2>
              <p>Beaconpay Solutions is committed to resolving complaints fairly and promptly. We take all complaints seriously and use them to improve our service.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">How to submit a complaint</h2>
              <p>Please send your complaint by email to <a href={`mailto:${business.email}`} className="text-white hover:underline">{business.email}</a> or use the request a call back form. Include your name, contact details, a clear description of your complaint and any relevant reference information.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Acknowledgement</h2>
              <p>We will acknowledge your complaint within five business days of receipt and let you know the next steps.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Investigation</h2>
              <p>We will investigate your complaint thoroughly, which may involve reviewing relevant records and speaking with the team members involved.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Response</h2>
              <p>We aim to provide a final response within four weeks of receiving your complaint. If we need more time, we will let you know and explain why.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Escalation</h2>
              <p>If you are not satisfied with our response, please let us know and we will review the matter further. We will explain any further options available to you.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Record keeping</h2>
              <p>We keep records of complaints securely and use them to identify improvements to our service.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Data protection</h2>
              <p>Complaints are handled in accordance with our <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
