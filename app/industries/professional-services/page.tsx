import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["professional-services"];

export const metadata: Metadata = {
  title: "Professional Services Payroll UK",
  description: "Reliable PAYE payroll, pension auto-enrolment and reporting for professional services firms from Beaconpay Solutions.",
};

export default function ProfessionalServicesPage() {
  return <IndustryPageTemplate industry={industry} />;
}
