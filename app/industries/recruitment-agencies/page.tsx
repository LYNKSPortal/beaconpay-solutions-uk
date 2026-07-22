import type { Metadata } from "next";
import { industriesBySlug } from "@/lib/data";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

const industry = industriesBySlug["recruitment-agencies"];

export const metadata: Metadata = {
  title: "Recruitment Agency Payroll Services UK",
  description: "Scalable payroll services for recruitment agencies placing temporary and contract workers, from Beaconpay Solutions.",
};

export default function RecruitmentAgenciesPage() {
  return <IndustryPageTemplate industry={industry} />;
}
