import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["logistics"];

export const metadata: Metadata = {
  title: "Logistics Payroll Services UK",
  description: "PAYE payroll support for logistics, transport and warehouse businesses, including weekly pay and overtime from Beaconpay Solutions.",
};

export default function LogisticsPage() {
  return <IndustryPageTemplate industry={industry} />;
}
