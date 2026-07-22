import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["healthcare"];

export const metadata: Metadata = {
  title: "Healthcare Payroll Services UK",
  description: "Reliable PAYE payroll support for healthcare providers with varied shift patterns, statutory payments and reporting.",
};

export default function HealthcarePage() {
  return <IndustryPageTemplate industry={industry} />;
}
