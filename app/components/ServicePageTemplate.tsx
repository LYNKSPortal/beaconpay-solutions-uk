import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/data";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import FaqAccordion from "./FaqAccordion";
import RelatedServices from "./RelatedServices";
import CtaBanner from "./CtaBanner";
import JsonLd from "./JsonLd";

interface ServicePageTemplateProps {
  service: Service;
  breadcrumbs?: { label: string; href?: string }[];
  disclaimer?: string;
}

export default function ServicePageTemplate({ service, breadcrumbs = [{ label: "Services", href: "/services" }, { label: service.label }], disclaimer }: ServicePageTemplateProps) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqStructuredData} />
      <Hero
        title={service.label}
        subtitle={service.label}
        description={service.heroText}

      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Introduction */}
      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">What is {service.label.toLowerCase()}?</h2>
            <p className="text-lg text-slate-200 leading-relaxed">{service.description}</p>
            {disclaimer && (
              <div className="mt-6 rounded-lg border-l-4 border-teal bg-white/5 p-4 text-sm text-slate-200">
                {disclaimer}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Who it's for + What's included */}
      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="included-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="included-heading" className="text-2xl font-bold text-white mb-6">Who this service is for</h2>
              <ul className="space-y-3">
                {service.whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What is included</h2>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-teal/30">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal/20 to-sky/20 text-teal">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <p className="font-medium text-slate-100">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">How the service works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.howItWorks.map((step, index) => (
              <div key={index} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-teal/30">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal to-sky text-navy-900 font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-200 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Beaconpay */}
      <section className="py-12 lg:py-16 bg-white/5 text-white" aria-labelledby="why-beaconpay-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-beaconpay-heading" className="text-2xl sm:text-3xl font-bold mb-4">Why choose Beaconpay Solutions?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We combine practical UK payroll knowledge with responsive support. Our processes are designed to keep your payroll accurate, on time and structured around current UK requirements.
              </p>
              <Link
                href="/request-a-call-back"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-sky px-5 py-3 text-base font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
              >
                Request a Call Back
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-white">Speak to our team</h3>
              <p className="text-slate-300 mb-4">Have questions about {service.label.toLowerCase()}? Request a call back and our team will contact you.</p>
              <Link
                href="/request-a-call-back"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-sky px-5 py-3 text-base font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
              >
                Request a Call Back
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="faqs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">Frequently asked questions</h2>
          <div className="max-w-3xl">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      <RelatedServices slugs={service.relatedServices} />
      <CtaBanner />
    </>
  );
}
