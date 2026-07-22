import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["payroll-outsourcing"];

export const metadata: Metadata = {
  title: "Outsourced Payroll Services UK",
  description: "Outsource your payroll administration to Beaconpay Solutions for reliable PAYE processing, RTI submissions, reporting and employee support.",
};

export default function PayrollOutsourcingPage() {
  return <ServicePageTemplate service={service} />;
}
