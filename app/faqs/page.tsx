import type { Metadata } from "next";
import { faqCategories } from "@/lib/data";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqAccordion from "../components/FaqAccordion";
import CtaBanner from "../components/CtaBanner";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Beaconpay Solutions' payroll, PAYE, CIS, umbrella and contractor services.",
};

export default function FaqsPage() {
  const allFaqs = faqCategories.flatMap((category) => category.faqs);
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
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
        title="Frequently Asked Questions"
        subtitle="FAQs"
        description="Answers to common questions about our payroll services, processes and how we can support you."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "FAQs" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="faqs-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs-heading" className="sr-only">Frequently asked questions</h2>
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-bold text-white mb-5">{category.title}</h3>
                <FaqAccordion faqs={category.faqs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
