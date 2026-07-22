import type { Metadata } from "next";
import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import FeatureGrid from "../components/FeatureGrid";
import CareersForm from "../components/forms/CareersForm";
import ComingSoonBadge from "../components/ComingSoonBadge";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "Careers at Beaconpay Solutions",
  description: "Explore career opportunities at Beaconpay Solutions and join our UK payroll services team.",
};

const benefits = [
  { title: "Supportive working environment", description: "A professional and collaborative workplace.", icon: Users },
  { title: "Training and development", description: "Opportunities to build your payroll knowledge and skills.", icon: GraduationCap },
  { title: "Career progression opportunities", description: "Clear paths for growth as the business expands.", icon: TrendingUp },
  { title: "Professional standards", description: "We value accuracy, integrity and excellent service.", icon: Briefcase },
];

const areas = [
  "Payroll Administration",
  "PAYE and CIS Payroll",
  "Customer Support",
  "Compliance",
  "Finance and Accounts",
  "Business Administration",
  "Sales and Business Development",
  "Marketing",
  "Operations",
];

const qualities = [
  "Strong attention to detail",
  "Clear communication",
  "Professional attitude",
  "Reliability",
  "Customer focus",
  "Ability to work independently and within a team",
  "Willingness to learn",
];

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Careers at Beaconpay Solutions"
        subtitle="Careers"
        description="Build your career with a growing payroll services team."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Careers" }]} />
      </div>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl" id="intro-heading">
            At Beaconpay Solutions, we believe that excellent service starts with capable, committed and supportive people. We aim to create a professional working environment where team members can develop their knowledge, contribute ideas and provide meaningful support to our clients.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="why-work-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-work-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
          <FeatureGrid features={benefits} columns={2} />
          <p className="mt-6 text-sm text-slate-300 text-center">Benefits may vary by role and will be explained during the recruitment process.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="areas-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">Areas of Opportunity</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {areas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What We Look For</h2>
              <ul className="space-y-3">
                {qualities.map((quality) => (
                  <li key={quality} className="flex items-start gap-2 text-slate-200">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
                    {quality}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="vacancies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="vacancies-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">Current Vacancies</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
            <div className="mb-4 flex justify-center">
              <ComingSoonBadge />
            </div>
            <p className="text-slate-200">There are currently no advertised vacancies. We welcome speculative applications from talented professionals interested in joining Beaconpay Solutions.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="apply-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="apply-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">Apply</h2>
              <p className="text-slate-200 mb-6">
                Send your CV and a short covering message to{" "}
                <a href="mailto:support@beaconpaysolutions.co.uk" className="text-white hover:underline font-medium">support@beaconpaysolutions.co.uk</a>.
              </p>
              <p className="text-sm text-slate-300 mb-6">
                Your application will be handled in accordance with our{" "}
                <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a>.
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">Equal Opportunities</h3>
              <p className="text-slate-200">
                Beaconpay Solutions is committed to providing equal opportunities and welcomes applications from suitably qualified candidates from all backgrounds.
              </p>
            </div>
            <div>
              <CareersForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
