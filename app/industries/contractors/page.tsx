import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["contractors"];

export const metadata: Metadata = {
  title: "Contractor Payroll Services UK",
  description: "Payroll support for contractors across the UK, including umbrella, PAYE and contractor payroll arrangements from Beaconpay Solutions.",
};

export default function ContractorsPage() {
  return <IndustryPageTemplate industry={industry} />;
}
