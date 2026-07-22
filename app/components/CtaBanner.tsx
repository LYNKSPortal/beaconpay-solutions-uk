import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export default function CtaBanner({
  title = "Let's Make Payroll Simpler",
  description = "Speak with Beaconpay Solutions about your payroll, contractor or workforce requirements.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-300 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-a-call-back"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-sky px-5 py-3 text-base font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
            >
              Request a Call Back
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
