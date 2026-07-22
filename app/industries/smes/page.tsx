import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["smes"];

export const metadata: Metadata = {
  title: "SME Payroll Services UK",
  description: "Straightforward outsourced payroll services for small and medium-sized enterprises from Beaconpay Solutions.",
};

export default function SmesPage() {
  return <IndustryPageTemplate industry={industry} />;
}
