import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const gridClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridClasses[columns]}`}>
      {features.map(({ title, description, icon: Icon }) => (
        <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]">
          <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-sky/20 text-teal">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
