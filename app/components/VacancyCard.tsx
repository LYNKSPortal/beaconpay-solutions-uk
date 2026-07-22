import { MapPin, Clock, Briefcase } from "lucide-react";

interface VacancyCardProps {
  title: string;
  department?: string;
  location?: string;
  contractType?: string;
  description: string;
  closingDate?: string;
  applyHref?: string;
}

export default function VacancyCard({
  title,
  department,
  location,
  contractType,
  description,
  closingDate,
  applyHref = "mailto:support@beaconpaysolutions.co.uk",
}: VacancyCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3 text-sm text-slate-300 mb-4">
        {department && (
          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            {department}
          </span>
        )}
        {location && (
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {location}
          </span>
        )}
        {contractType && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {contractType}
          </span>
        )}
      </div>
      <p className="text-slate-200 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {closingDate && <span className="text-sm text-slate-300">Closing date: {closingDate}</span>}
        <a
          href={applyHref}
          className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
        >
          Apply now
        </a>
      </div>
    </article>
  );
}
