import Link from "next/link";
import { ArrowRight, CheckCircle2, CheckCircle } from "lucide-react";
import { services, industries } from "@/lib/data";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ServiceCard from "./components/ServiceCard";
import IndustryCard from "./components/IndustryCard";
import FeatureGrid from "./components/FeatureGrid";
import FaqAccordion from "./components/FaqAccordion";
import CtaBanner from "./components/CtaBanner";
import JsonLd from "./components/JsonLd";
import { business } from "@/lib/config";

const aboutPoints = [
  "Tailored solutions",
  "Clear communication",
  "Accurate processing",
  "Ongoing support",
];

const howItWorks = [
  { title: "Tell Us What You Need", description: "Speak with our team about your workforce, payment schedule and payroll requirements." },
  { title: "We Set Up Your Service", description: "We create a structured payroll solution based on your organisation or contractor needs." },
  { title: "We Manage the Process", description: "Our team supports your payroll administration, reporting and ongoing queries." },
];

const whyChoose = [
  { title: "Experienced payroll support", description: "A team that understands the details of UK payroll administration." },
  { title: "UK-focused payroll knowledge", description: "Processes built around PAYE, National Insurance, HMRC and current UK obligations." },
  { title: "Transparent communication", description: "Clear updates and straightforward answers to your payroll questions." },
  { title: "Secure handling of information", description: "Careful management of payroll data and employee records." },
  { title: "Flexible service options", description: "Services tailored to the size and shape of your organisation." },
  { title: "Responsive customer service", description: "Approachable support when you need assistance." },
];

const faqPreview = [
  { question: "What payroll services do you provide?", answer: "We offer umbrella payroll, PAYE payroll, CIS payroll, contractor payroll, recruitment agency payroll, payroll outsourcing, reporting and compliance support." },
  { question: "Who can use Beaconpay Solutions?", answer: "We support contractors, recruitment agencies, construction businesses, healthcare providers, logistics companies, hospitality businesses, professional services firms and SMEs." },
  { question: "Can you support weekly and monthly payroll?", answer: "Yes. We can process weekly, fortnightly, four-weekly and monthly payroll cycles." },
  { question: "Do you support PAYE and CIS payroll?", answer: "Yes. We provide both PAYE and CIS payroll administration and can manage mixed workforces." },
  { question: "How can I request a call back?", answer: "Use our request a call back form. We aim to respond within one business day." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${business.website}/#organization`,
      name: business.name,
      url: business.website,
      logo: `${business.website}/web-app-manifest-512x512.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${business.website}/#website`,
      url: business.website,
      name: business.name,
      publisher: { "@id": `${business.website}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero
        title="Reliable Payroll and Contractor Solutions Across the UK"
        description="Beaconpay Solutions provides accurate, compliant and dependable payroll services for contractors, recruitment agencies and businesses throughout the United Kingdom. From umbrella payroll and PAYE processing to CIS administration and outsourced payroll support, our experienced team makes payroll straightforward."
        ctaLabel="Request a Call Back"
      />
      <TrustStrip />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-navy-900" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-4 backdrop-blur-sm">Our services</p>
            <h2 id="services-heading" className="text-3xl font-bold text-white mb-4">Payroll services for every workforce</h2>
            <p className="text-lg text-slate-300">From umbrella payroll and PAYE to CIS and outsourced support, we help businesses and contractors stay on top of payroll.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.label}
                description={service.shortDescription}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white hover:bg-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-navy" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-4 backdrop-blur-sm">About us</p>
              <h2 id="about-heading" className="text-3xl font-bold text-white mb-4">Payroll Support Built Around Your Business</h2>
              <p className="text-lg text-slate-300 mb-6">
                At Beaconpay Solutions, we understand that payroll accuracy, compliance and communication matter. Our services are designed to reduce administration, support your workforce and give you greater confidence in your payroll processes.
              </p>
              <ul className="space-y-3 mb-8">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-teal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white hover:bg-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300">
                About Beaconpay Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-sm">
              <div className="space-y-4">
                <div className="h-3 w-3/4 rounded bg-white/5" />
                <div className="h-3 w-1/2 rounded bg-white/5" />
                <div className="h-3 w-5/6 rounded bg-white/5" />
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="h-8 w-8 rounded bg-teal/20 mb-2" />
                    <div className="h-2 w-16 rounded bg-teal/20" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="h-8 w-8 rounded bg-sky/20 mb-2" />
                    <div className="h-2 w-16 rounded bg-sky/20" />
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="h-8 w-8 rounded bg-gradient-to-br from-violet/30 to-sky/30 mb-2" />
                    <div className="h-2 w-16 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-navy-900" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-4 backdrop-blur-sm">How it works</p>
            <h2 id="how-heading" className="text-3xl font-bold text-white mb-4">Three simple steps to simpler payroll</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal to-sky text-navy-900 font-bold text-lg glow-teal">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-16 lg:py-24 bg-navy" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-4 backdrop-blur-sm">Industries</p>
            <h2 id="industries-heading" className="text-3xl font-bold text-white mb-4">Who we support</h2>
            <p className="text-lg text-slate-300">We provide flexible payroll support for organisations and individuals across a range of UK sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} title={industry.label} description={industry.shortDescription} href={industry.href} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 lg:py-24 bg-navy-900" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-4 backdrop-blur-sm">Why Beaconpay Solutions</p>
            <h2 id="why-heading" className="text-3xl font-bold text-white mb-4">A payroll partner you can depend on</h2>
          </div>
          <FeatureGrid features={whyChoose.map((item) => ({ ...item, icon: CheckCircle }))} columns={3} />
        </div>
      </section>


      {/* FAQs Preview */}
      <section className="py-16 lg:py-24 bg-navy-900" aria-labelledby="faqs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-4 backdrop-blur-sm">FAQs</p>
              <h2 id="faqs-heading" className="text-3xl font-bold text-white mb-4">Common questions</h2>
              <p className="text-slate-300 mb-6">Quick answers to the questions we are asked most often.</p>
              <Link href="/faqs" className="inline-flex items-center gap-2 text-white font-semibold hover:text-teal-400">
                View all FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <FaqAccordion faqs={faqPreview} />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
