import { Mail, Globe } from "lucide-react";
import { business } from "@/lib/config";
import OpeningHours from "./OpeningHours";

export default function ContactPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h3 className="font-semibold text-white mb-4">Contact details</h3>
        <ul className="space-y-4">
          <li>
            <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Mail className="h-5 w-5 text-teal" />
              <span>{business.email}</span>
            </a>
          </li>
          <li>
            <a href={business.website} className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Globe className="h-5 w-5 text-teal" />
              <span>{business.website.replace("https://www.", "")}</span>
            </a>
          </li>
        </ul>
      </div>
      <OpeningHours />
    </div>
  );
}
