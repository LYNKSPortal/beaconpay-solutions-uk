import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["cis-payroll"];

export const metadata: Metadata = {
  title: "CIS Payroll Services UK",
  description: "Construction Industry Scheme payroll support from Beaconpay Solutions, including subcontractor verification, CIS deductions and monthly returns.",
};

export default function CisPayrollPage() {
  return <ServicePageTemplate service={service} />;
}
