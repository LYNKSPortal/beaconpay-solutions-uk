import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesBySlug } from "@/lib/data";

interface RelatedServicesProps {
  slugs: string[];
}

export default function RelatedServices({ slugs }: RelatedServicesProps) {
  const related = slugs.map((slug) => servicesBySlug[slug]).filter(Boolean);
  if (related.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Related services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.12)]"
              >
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-sky/20 text-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-sky group-hover:text-navy-900 transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1 group-hover:text-teal transition-colors">{service.label}</h3>
                  <p className="text-sm text-slate-300 line-clamp-2">{service.shortDescription}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-teal transition-colors mt-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
