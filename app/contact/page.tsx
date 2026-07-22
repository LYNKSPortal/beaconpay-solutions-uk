import type { Metadata } from "next";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactPanel from "../components/ContactPanel";
import ContactForm from "../components/forms/ContactForm";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "Contact Beaconpay Solutions",
  description: "Get in touch with Beaconpay Solutions for PAYE, CIS, umbrella, contractor and outsourced payroll support across the UK.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Beaconpay Solutions"
        subtitle="Contact"
        description="If you have a question about our payroll services or would like to discuss your requirements, contact our team."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 id="contact-heading" className="text-2xl font-bold text-white mb-6">Send us an enquiry</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactPanel />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
