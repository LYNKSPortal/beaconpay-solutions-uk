import type { Metadata } from "next";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Anti-Bribery Policy",
  description: "Beaconpay Solutions anti-bribery and corruption policy.",
};

export default function AntiBriberyPage() {
  return (
    <>
      <Hero title="Anti-Bribery Policy" subtitle="Legal" description="Our commitment to preventing bribery and corruption." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Anti-Bribery Policy" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="policy-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8 text-slate-200 leading-relaxed">
            <div>
              <h2 id="policy-heading" className="text-xl font-bold text-white mb-3">Introduction</h2>
              <p>Beaconpay Solutions is committed to conducting business ethically, transparently and in compliance with applicable anti-bribery and corruption laws. We do not tolerate bribery or corruption in any form.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Scope</h2>
              <p>This policy applies to all employees, directors, contractors, consultants, agents and anyone acting on behalf of Beaconpay Solutions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">What is bribery?</h2>
              <p>Bribery involves offering, giving, receiving or soliciting something of value as an inducement to influence an action or decision improperly. It can take many forms, including cash, gifts, hospitality, charitable donations or employment opportunities.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Our standards</h2>
              <ul>
                <li>We do not offer, promise or accept bribes.</li>
                <li>We do not make facilitation payments.</li>
                <li>We do not give or receive gifts or hospitality that could improperly influence business decisions.</li>
                <li>We maintain accurate records of all financial transactions.</li>
                <li>We comply with all applicable anti-bribery laws.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Reporting concerns</h2>
              <p>Any concerns about bribery or corruption should be reported to <a href="mailto:support@beaconpaysolutions.co.uk" className="text-white hover:underline">support@beaconpaysolutions.co.uk</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Consequences</h2>
              <p>Any breach of this policy may result in disciplinary action and could lead to termination of employment or business relationships. It may also result in civil or criminal liability.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Review</h2>
              <p>This policy will be reviewed regularly and updated as necessary.</p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-amber-400 bg-white/5 p-4 text-sm text-slate-200">
            <p><strong>Internal note:</strong> This policy must be reviewed and legally verified before publication.</p>
          </div>
        </div>
      </section>
    </>
  );
}
