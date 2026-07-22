import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["payroll-consultancy"];

export const metadata: Metadata = {
  title: "Payroll Consultancy Services UK",
  description: "Practical payroll consultancy from Beaconpay Solutions for process reviews, provider transitions, reporting and scaling your payroll function.",
};

export default function PayrollConsultancyPage() {
  return (
    <ServicePageTemplate
      service={service}
      disclaimer="Our consultancy provides practical payroll guidance and should not replace legal, tax or regulated financial advice."
    />
  );
}
