import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["hospitality"];

export const metadata: Metadata = {
  title: "Hospitality Payroll Services UK",
  description: "Flexible payroll services for hospitality businesses with seasonal, variable-hour and temporary staff from Beaconpay Solutions.",
};

export default function HospitalityPage() {
  return <IndustryPageTemplate industry={industry} />;
}
