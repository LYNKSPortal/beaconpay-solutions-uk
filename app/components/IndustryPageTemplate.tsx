import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Industry } from "@/lib/data";
import { servicesBySlug } from "@/lib/data";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import FaqAccordion from "./FaqAccordion";
import CtaBanner from "./CtaBanner";

interface IndustryPageTemplateProps {
  industry: Industry;
}

export default function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const relatedServices = industry.relatedServices.map((slug) => servicesBySlug[slug]).filter(Boolean);

  return (
    <>
      <Hero
        title={`${industry.label} Payroll Support`}
        subtitle={industry.label}
        description={industry.shortDescription}

      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.label }]} />
      </div>

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">How we support {industry.label.toLowerCase()}</h2>
            <p className="text-lg text-slate-200 leading-relaxed">{industry.description}</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="challenges-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="challenges-heading" className="text-2xl font-bold text-white mb-6">Common payroll challenges</h2>
              <ul className="space-y-3">
                {industry.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">How we can help</h2>
              <ul className="space-y-3">
                {industry.howWeHelp.map((item) => (
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

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">Relevant services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.12)]"
                >
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-sky/20 text-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-sky group-hover:text-navy-900 transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1">{service.label}</h3>
                    <p className="text-sm text-slate-300 line-clamp-2">{service.shortDescription}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-teal transition-colors mt-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white/5 text-white" aria-labelledby="cta-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="cta-section-heading" className="text-2xl sm:text-3xl font-bold mb-4">Tailored payroll support for {industry.label.toLowerCase()}</h2>
              <p className="text-slate-300 mb-6">
                Speak with our team to discuss how we can support your payroll needs in the {industry.label.toLowerCase()} sector.
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
              <p className="text-slate-300 mb-4">Request a call back and our team will contact you to discuss your requirements.</p>
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

      <section className="py-12 lg:py-16 bg-navy-900" aria-labelledby="faqs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">Related FAQs</h2>
          <div className="max-w-3xl">
            <FaqAccordion faqs={industry.faqs} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
