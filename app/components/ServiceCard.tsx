import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] focus-visible:ring-2 focus-visible:ring-sky"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-sky/20 text-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-sky group-hover:text-navy-900 transition-all duration-300 glow-teal">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal transition-colors">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-sky transition-colors">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
