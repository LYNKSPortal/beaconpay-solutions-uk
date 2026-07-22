import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["construction"];

export const metadata: Metadata = {
  title: "Construction Payroll and CIS Services UK",
  description: "CIS and PAYE payroll support for construction businesses, contractors and subcontractors across the UK from Beaconpay Solutions.",
};

export default function ConstructionPage() {
  return <IndustryPageTemplate industry={industry} />;
}
