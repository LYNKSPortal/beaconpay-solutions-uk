import type { Metadata } from "next";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import CallbackForm from "../components/forms/CallbackForm";
import OpeningHours from "../components/OpeningHours";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "Request a Call Back",
  description: "Request a call back from Beaconpay Solutions to discuss payroll, PAYE, CIS, umbrella or contractor services for your business.",
};

export default function RequestCallBackPage() {
  return (
    <>
      <Hero
        title="Request a Call Back"
        subtitle="Get in touch"
        description="Whether you are looking for umbrella payroll, PAYE services, CIS support or outsourced payroll administration, our team is here to help."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Request a Call Back" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="callback-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 id="callback-heading" className="text-2xl font-bold text-white mb-6">Arrange a call</h2>
              <CallbackForm />
              <p className="mt-6 text-sm text-slate-300">
                We aim to respond to enquiries within one business day. Requested times are subject to availability. Your information will be used to respond to your enquiry and handled in accordance with our{" "}
                <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a>.
              </p>
            </div>
            <div className="lg:col-span-1">
              <OpeningHours />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
