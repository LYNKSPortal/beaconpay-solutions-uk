import { business } from "@/lib/config";

export default function OpeningHours() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="font-semibold text-white mb-4">Opening hours</h3>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-slate-300">Monday to Friday</dt>
          <dd className="font-medium text-slate-100">{business.openingHours.monday}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-300">Saturday</dt>
          <dd className="font-medium text-slate-100">{business.openingHours.saturday}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-300">Sunday</dt>
          <dd className="font-medium text-slate-100">{business.openingHours.sunday}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-300">Bank holidays</dt>
          <dd className="font-medium text-slate-100">{business.openingHours.bankHolidays}</dd>
        </div>
      </dl>
    </div>
  );
}
