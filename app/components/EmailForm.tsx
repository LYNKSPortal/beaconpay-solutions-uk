"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setMessage("You're on the list! We'll notify you at launch.");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 glass rounded-2xl px-6 py-4 text-emerald-400 font-medium">
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email address"
            className="w-full glass rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-blue-400/50 transition-all duration-200 border border-white/10 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Notify Me
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2 ml-1">{message}</p>
      )}
      <p className="text-slate-500 text-xs mt-3 text-center">
        No spam, ever. Unsubscribe at any time.
      </p>
    </form>
  );
}
