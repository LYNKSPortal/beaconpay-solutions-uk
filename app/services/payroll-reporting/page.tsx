import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["payroll-reporting"];

export const metadata: Metadata = {
  title: "Payroll Reporting Services UK",
  description: "Clear payroll reporting services from Beaconpay Solutions, including gross-to-net reports, PAYE and National Insurance summaries and year-end documents.",
};

export default function PayrollReportingPage() {
  return <ServicePageTemplate service={service} />;
}
