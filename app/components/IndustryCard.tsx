import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  href: string;
}

export default function IndustryCard({ title, description, href }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)] focus-visible:ring-2 focus-visible:ring-sky"
    >
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky transition-colors">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed flex-1 mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky group-hover:text-teal transition-colors">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
