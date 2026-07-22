import { ShieldCheck, ClipboardCheck, Lock, Headphones, Clock } from "lucide-react";

const trustItems = [
  { icon: ClipboardCheck, label: "UK Payroll Expertise" },
  { icon: ShieldCheck, label: "HMRC-Focused Processes" },
  { icon: Lock, label: "Secure Data Handling" },
  { icon: Headphones, label: "Dedicated Customer Support" },
  { icon: Clock, label: "Accurate and Timely Processing" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <Icon className="h-5 w-5 text-teal" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
