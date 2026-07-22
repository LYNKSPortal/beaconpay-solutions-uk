import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["recruitment-agency-payroll"];

export const metadata: Metadata = {
  title: "Recruitment Agency Payroll Services UK",
  description: "Scalable payroll support for recruitment agencies managing temporary and contract workers, including onboarding, PAYE and reporting.",
};

export default function RecruitmentAgencyPayrollPage() {
  return <ServicePageTemplate service={service} />;
}
