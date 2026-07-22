import type { Metadata } from "next";
import { servicesBySlug } from "@/lib/data";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const service = servicesBySlug["hmrc-compliance"];

export const metadata: Metadata = {
  title: "HMRC Payroll Compliance Support UK",
  description: "HMRC-focused payroll compliance support from Beaconpay Solutions, including RTI submissions, PAYE records, P45, P60 and CIS return administration.",
};

export default function HmrcCompliancePage() {
  return (
    <ServicePageTemplate
      service={service}
      disclaimer="Information provided through this service is general payroll support and should not be treated as legal or specialist tax advice."
    />
  );
}
