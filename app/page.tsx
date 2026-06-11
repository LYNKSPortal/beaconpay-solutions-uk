import { Zap, Shield, Globe, X, Link2, Mail, ChevronRight } from "lucide-react";
import CountdownTimer from "./components/CountdownTimer";

const features = [
  {
    icon: Zap,
    title: "Instant Payments",
    desc: "Process transactions in milliseconds with our cutting-edge infrastructure.",
    color: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "End-to-end encryption and advanced fraud detection keep every payment safe.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Accept and send payments across 150+ countries in 60+ currencies seamlessly.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background layer (z-index 0) ── everything here is strictly behind content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Grid + gradients */}
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-emerald-600/8 rounded-full blur-3xl" />
        {/* Orbiting £ signs — desktop only */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-0 h-0">
            {[
              { cls: "animate-orb1",  color: "text-blue-400",    size: "1.2rem" },
              { cls: "animate-orb2",  color: "text-violet-400",  size: "1.3rem" },
              { cls: "animate-orb3",  color: "text-cyan-400",    size: "1.4rem" },
              { cls: "animate-orb4",  color: "text-emerald-400", size: "1.5rem" },
              { cls: "animate-orb5",  color: "text-sky-400",     size: "1.6rem" },
              { cls: "animate-orb6",  color: "text-indigo-400",  size: "1.7rem" },
              { cls: "animate-orb7",  color: "text-teal-400",    size: "1.8rem" },
              { cls: "animate-orb8",  color: "text-purple-400",  size: "1.9rem" },
              { cls: "animate-orb9",  color: "text-blue-300",    size: "2rem"   },
              { cls: "animate-orb10", color: "text-violet-300",  size: "2.1rem" },
            ].map(({ cls, color, size }) => (
              <span
                key={cls}
                className={`absolute ${cls} ${color} font-black select-none`}
                style={{ fontSize: size }}
              >£</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content layer (z-index 1) ── always on top */}
      <div className="relative flex flex-col items-center text-center px-4 py-20 max-w-5xl w-full mx-auto gap-10" style={{ zIndex: 1 }}>

        {/* Badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-blue-300 uppercase tracking-widest border border-blue-500/20">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Launching Soon
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Logo & Name */}
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="flex flex-col items-center gap-4">
            <div className="relative animate-float">
              <div className="animate-pulse-glow w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5" />
                  <path d="M20 10L28 15V25L20 30L12 25V15L20 10Z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1" />
                  <circle cx="20" cy="20" r="4" fill="white" />
                  <path d="M20 4V10M20 30V36M6 12L12 15M28 25L34 28M6 28L12 25M28 15L34 12" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#060b18] animate-pulse" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                BEACON<span className="shimmer-text">PAY</span>
              </h1>
              <p className="text-slate-400 text-sm font-medium tracking-[0.3em] uppercase mt-1">Solutions</p>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="animate-fade-in-up max-w-2xl" style={{ animationDelay: "200ms" }}>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            The Future of <span className="shimmer-text">Payments</span> is Almost Here
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Beaconpay Solutions is redefining how businesses send, receive, and manage money. Fast, secure, and built for scale.
          </p>
        </div>

        {/* Countdown */}
        <div className="animate-fade-in-up w-full" style={{ animationDelay: "300ms" }}>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4 font-medium">Official Launch In</p>
          <CountdownTimer />
        </div>

        {/* Feature cards */}
        <div className="animate-fade-in-up grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4" style={{ animationDelay: "500ms" }}>
          {features.map(({ icon: Icon, title, desc, color, border, iconColor }) => (
            <div key={title} className={`count-card rounded-2xl p-5 text-left transition-transform duration-200 hover:-translate-y-1`}>
              <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-3 ${iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up flex items-center gap-4" style={{ animationDelay: "600ms" }}>
          {[
            { icon: X, label: "X (Twitter)", href: "#" },
            { icon: Link2, label: "LinkedIn", href: "#" },
            { icon: Mail, label: "Email", href: "mailto:support@beaconpaysolutions.co.uk" },
          ].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} aria-label={label} className="w-10 h-10 count-card rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="animate-fade-in-up text-slate-600 text-xs" style={{ animationDelay: "700ms" }}>
          © {new Date().getFullYear()} BEACONPAY Solutions. All rights reserved.
        </p>
      </div>
    </main>
  );
}
