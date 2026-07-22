import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["payroll-administration"];

export const metadata: Metadata = {
  title: "Payroll Administration Services UK",
  description: "Practical payroll administration support from Beaconpay Solutions for starters, leavers, tax code updates, deductions and employee records.",
};

export default function PayrollAdministrationPage() {
  return <ServicePageTemplate service={service} />;
}
