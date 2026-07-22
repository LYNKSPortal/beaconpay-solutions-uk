import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { services } from "@/lib/data";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCard from "../components/ServiceCard";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "Payroll Services",
  description: "Explore Beaconpay Solutions' payroll services, including PAYE, CIS, umbrella, contractor and outsourced payroll for UK businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Payroll Services Built Around Your Needs"
        subtitle="Services"
        description="Beaconpay Solutions provides payroll and contractor support services for individuals, agencies and organisations across the UK. Explore our services below to find the most suitable solution for your requirements."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-list-heading" className="sr-only">Our payroll services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.label}
                description={service.shortDescription}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="help-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-teal-400 mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h2 id="help-heading" className="text-2xl font-bold text-white mb-3">Not sure which service you need?</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our team can help you identify the most appropriate service based on your workforce, payment arrangements and administrative needs.
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/request-a-call-back"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  Speak to Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
