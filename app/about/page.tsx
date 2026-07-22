import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import FeatureGrid from "../components/FeatureGrid";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Beaconpay Solutions, a UK payroll services provider offering PAYE, CIS, umbrella and contractor payroll support.",
};

const expertise = [
  { title: "PAYE payroll processing", description: "Accurate calculations, deductions and submissions for UK employers.", icon: CheckCircle2 },
  { title: "CIS payroll support", description: "Construction Industry Scheme administration for contractors and subcontractors.", icon: CheckCircle2 },
  { title: "Umbrella payroll", description: "PAYE arrangements for temporary contractors and agency workers.", icon: CheckCircle2 },
  { title: "Contractor payments", description: "Flexible payroll support for contractors and temporary workers.", icon: CheckCircle2 },
  { title: "Recruitment agency payroll", description: "High-volume processing and worker onboarding support.", icon: CheckCircle2 },
  { title: "RTI submissions", description: "Full Payment and Employer Payment Submission support.", icon: CheckCircle2 },
  { title: "Payroll reporting", description: "Clear reports tailored to your organisation's needs.", icon: CheckCircle2 },
  { title: "Starter and leaver administration", description: "Smooth onboarding and leaving processes.", icon: CheckCircle2 },
  { title: "Statutory payments", description: "SSP, SMP, SPP and SAP administration where applicable.", icon: CheckCircle2 },
  { title: "Pension administration support", description: "Auto-enrolment calculations and pension files.", icon: CheckCircle2 },
];

const values = [
  { title: "Integrity", description: "We communicate clearly and aim to provide a transparent service." },
  { title: "Accuracy", description: "We understand the importance of correct payroll calculations and timely processing." },
  { title: "Compliance", description: "We structure our payroll processes around current UK requirements and responsible administration." },
  { title: "Support", description: "We provide approachable and responsive assistance throughout the client relationship." },
];

const whyChoose = [
  { title: "Professional payroll support", description: "Experienced support for day-to-day payroll administration.", icon: CheckCircle2 },
  { title: "Flexible solutions", description: "Services adapted to the size and structure of your organisation.", icon: CheckCircle2 },
  { title: "UK-focused service", description: "Built around PAYE, National Insurance, HMRC and UK payroll obligations.", icon: CheckCircle2 },
  { title: "Secure processes", description: "Careful handling of sensitive payroll and personal information.", icon: CheckCircle2 },
  { title: "Clear communication", description: "Straightforward answers without unnecessary jargon.", icon: CheckCircle2 },
  { title: "Long-term client relationships", description: "Support designed to grow with your business.", icon: CheckCircle2 },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Beaconpay Solutions"
        subtitle="About us"
        description="Your trusted partner for reliable, compliant and efficient payroll support."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </div>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-200" id="intro-heading">
              At Beaconpay Solutions, we specialise in providing reliable, compliant and efficient payroll solutions for contractors, recruitment agencies and businesses across the United Kingdom.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              Our aim is simple: to remove unnecessary complexity from payroll and provide a professional service clients can depend on.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="approach-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-slate-200 leading-relaxed">
                Payroll is not only about calculations. It is about accuracy, communication, deadlines, compliance and trust.
              </p>
              <p className="mt-4 text-slate-200 leading-relaxed">
                We work with our clients to understand their workforce, payment schedules and operational requirements before delivering a service suited to their needs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-200 leading-relaxed">
                To provide straightforward and dependable payroll services that help businesses and contractors operate with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="expertise-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="expertise-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">Our Expertise</h2>
          <FeatureGrid features={expertise} columns={2} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Why Choose Us</h2>
          <FeatureGrid features={whyChoose} columns={3} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
