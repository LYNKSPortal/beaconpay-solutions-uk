import type { Metadata } from "next";
import { industries } from "@/lib/data";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import IndustryCard from "../components/IndustryCard";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "Industries We Support",
  description: "Beaconpay Solutions provides flexible payroll support for contractors, recruitment agencies and organisations across UK industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Industries We Support"
        subtitle="Industries"
        description="Beaconpay Solutions provides flexible payroll support for contractors, agencies and organisations across a range of UK industries."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industries" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="industries-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="industries-list-heading" className="sr-only">Industries we support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                title={industry.label}
                description={industry.shortDescription}
                href={industry.href}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
