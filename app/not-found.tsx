import Link from "next/link";
import { Home, Briefcase, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 px-4 py-20 text-center" aria-labelledby="not-found-heading">
      <div className="max-w-xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-sky text-navy-900 mb-6 glow-teal">
          <span className="text-4xl font-bold" aria-hidden="true">404</span>
        </div>
        <h1 id="not-found-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-lg text-slate-300 mb-8">The page may have moved or no longer exists.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-sky px-5 py-3 text-base font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal">
            <Home className="h-4 w-4" />
            Return Home
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white hover:bg-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300">
            <Briefcase className="h-4 w-4" />
            View Services
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-slate-200 hover:bg-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300">
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
