import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["umbrella-payroll"];

export const metadata: Metadata = {
  title: "Umbrella Payroll Services UK",
  description: "Beaconpay Solutions provides umbrella payroll services for contractors, offering clear payslips, PAYE deductions and ongoing payroll support across the UK.",
};

export default function UmbrellaPayrollPage() {
  return <ServicePageTemplate service={service} />;
}
