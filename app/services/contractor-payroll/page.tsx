import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["contractor-payroll"];

export const metadata: Metadata = {
  title: "Contractor Payroll Services UK",
  description: "Flexible contractor payroll services for agencies, consultancies and businesses managing temporary workers across the UK.",
};

export default function ContractorPayrollPage() {
  return <ServicePageTemplate service={service} />;
}
