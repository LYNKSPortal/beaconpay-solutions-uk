import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaHref = "/request-a-call-back",
  ctaLabel = "Request a Call Back",
}: HeroProps) {
  const showOrbit = true;
  const orbitingPounds = [
    { radius: "6rem",  duration: "16s",  delay: "0s",    size: "1.2rem", color: "text-sky-400" },
    { radius: "8rem",  duration: "18s",  delay: "-2s",   size: "1.3rem", color: "text-violet-400" },
    { radius: "10rem", duration: "20s",  delay: "-4s",   size: "1.4rem", color: "text-cyan-400" },
    { radius: "12rem", duration: "22s",  delay: "-6s",   size: "1.5rem", color: "text-emerald-400" },
    { radius: "14rem", duration: "24s",  delay: "-8s",   size: "1.6rem", color: "text-blue-400" },
    { radius: "16rem", duration: "26s",  delay: "-10s",  size: "1.7rem", color: "text-indigo-400" },
    { radius: "18rem", duration: "28s",  delay: "-12s",  size: "1.8rem", color: "text-teal-400" },
    { radius: "20rem", duration: "30s",  delay: "-14s",  size: "1.9rem", color: "text-purple-400" },
    { radius: "22rem", duration: "32s",  delay: "-16s",  size: "2rem",   color: "text-sky-300" },
    { radius: "24rem", duration: "34s",  delay: "-18s",  size: "2.1rem", color: "text-violet-300" },
  ];

  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full blur-3xl bg-teal/20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-sky/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-violet/10" />
      </div>
      {showOrbit && (
        <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
          {orbitingPounds.map((config, index) => (
            <span
              key={index}
              className={`orbit-pound ${config.color} select-none`}
              style={{
                "--orbit-radius": config.radius,
                "--orbit-duration": config.duration,
                "--orbit-delay": config.delay,
                fontSize: config.size,
              } as React.CSSProperties}
            >
              £
            </span>
          ))}
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-teal mb-6 backdrop-blur-sm">
              {subtitle}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-sky px-5 py-3 text-base font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
