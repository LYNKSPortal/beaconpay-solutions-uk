import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["paye-payroll"];

export const metadata: Metadata = {
  title: "PAYE Payroll Services UK",
  description: "Reliable PAYE payroll processing for UK businesses, including RTI submissions, payslips, statutory payments and pension auto-enrolment support.",
};

export default function PayePayrollPage() {
  return <ServicePageTemplate service={service} />;
}
