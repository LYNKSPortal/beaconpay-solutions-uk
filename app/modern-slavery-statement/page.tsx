import type { Metadata } from "next";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Modern Slavery Statement",
  description: "Beaconpay Solutions modern slavery and human trafficking statement.",
};

export default function ModernSlaveryPage() {
  return (
    <>
      <Hero title="Modern Slavery Statement" subtitle="Legal" description="Our commitment to preventing modern slavery and human trafficking." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Modern Slavery Statement" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="statement-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="statement-heading" className="text-xl font-bold text-white mb-3">Introduction</h2>
              <p>Beaconpay Solutions is committed to preventing acts of modern slavery and human trafficking from occurring within its business and supply chain.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Our policies</h2>
              <p>We are developing and maintaining policies and procedures that reflect our commitment to acting ethically and with integrity in all our business relationships.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Supply chains</h2>
              <p>We expect our suppliers, contractors and business partners to uphold the same standards and to comply with applicable laws relating to modern slavery and human trafficking.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Training and awareness</h2>
              <p>We aim to provide appropriate training and raise awareness among team members so that they can identify and report any concerns relating to modern slavery or human trafficking.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Reporting concerns</h2>
              <p>If you have any concerns, please contact us at <a href="mailto:support@beaconpaysolutions.co.uk" className="text-white hover:underline">support@beaconpaysolutions.co.uk</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Review</h2>
              <p>This statement will be reviewed and updated as our business and obligations develop.</p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-amber-400 bg-white/5 p-4 text-sm text-slate-200">
            <p><strong>Internal note:</strong> This statement must be reviewed and approved by senior management and legally verified before publication.</p>
          </div>
        </div>
      </section>
    </>
  );
}
