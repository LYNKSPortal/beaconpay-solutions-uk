"use client";

import { useState, useSyncExternalStore, useCallback, useMemo } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type Consent = {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "beaconpay_cookie_consent";

function getSnapshot(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(CONSENT_KEY);
}

function getServerSnapshot(): string | null {
  return null;
}

function subscribe(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("cookieconsentchange", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("cookieconsentchange", handler);
  };
}

function parseConsent(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Consent;
    if (typeof parsed.essential === "boolean") return parsed;
    return null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const rawConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const consent = useMemo(() => parseConsent(rawConsent), [rawConsent]);
  const [showManage, setShowManage] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const save = useCallback((values: Consent) => {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(values));
    window.dispatchEvent(new CustomEvent("cookieconsentchange", { detail: values }));
    setShowManage(false);
    setBannerDismissed(false);
  }, []);

  const showBanner = !consent && !bannerDismissed;

  const acceptAll = () => save({ essential: true, analytics: true, functional: true, marketing: true });
  const rejectNonEssential = () => save({ essential: true, analytics: false, functional: false, marketing: false });

  if (!showBanner && !showManage) {
    return (
      <button
        onClick={() => setShowManage(true)}
        className="fixed bottom-4 left-4 z-50 text-xs text-slate-300 hover:text-white underline"
        aria-label="Manage cookie preferences"
      >
        Cookie settings
      </button>
    );
  }

  return (
    <>
      {showBanner && !showManage && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 shadow-lg shadow-teal/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-slate-300 max-w-3xl">
                <p>
                  We use essential cookies to make this website work. With your consent, we may also use analytics and functional cookies to improve your experience. Read our{" "}
                  <Link href="/cookie-policy" className="font-medium text-white hover:underline">
                    Cookie Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowManage(true)}
                  className="text-sm font-medium text-slate-300 hover:text-teal transition-colors"
                >
                  Manage preferences
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="text-sm font-medium text-slate-300 hover:text-teal transition-colors"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal to-sky px-4 py-2 text-sm font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showManage && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 p-4">
          <div role="dialog" aria-label="Manage cookie preferences" className="glass-card rounded-2xl shadow-xl shadow-teal/5 max-w-lg w-full p-6">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Cookie preferences</h2>
              <button
                type="button"
                onClick={() => setShowManage(false)}
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                save({
                  essential: true,
                  analytics: formData.get("analytics") === "on",
                  functional: formData.get("functional") === "on",
                  marketing: formData.get("marketing") === "on",
                });
              }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                <input type="checkbox" id="essential" name="essential" checked disabled className="mt-1 rounded border-white/20 bg-white/5 text-teal focus:ring-teal/30" />
                <div>
                  <label htmlFor="essential" className="font-medium text-slate-100">Essential</label>
                  <p className="text-sm text-slate-300">Required for the website to function. Cannot be disabled.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                <input type="checkbox" id="analytics" name="analytics" defaultChecked={!!consent?.analytics} className="mt-1 rounded border-white/20 bg-white/5 text-teal focus:ring-teal/30" />
                <div>
                  <label htmlFor="analytics" className="font-medium text-slate-100">Analytics</label>
                  <p className="text-sm text-slate-300">Help us understand how visitors use our website.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                <input type="checkbox" id="functional" name="functional" defaultChecked={!!consent?.functional} className="mt-1 rounded border-white/20 bg-white/5 text-teal focus:ring-teal/30" />
                <div>
                  <label htmlFor="functional" className="font-medium text-slate-100">Functional</label>
                  <p className="text-sm text-slate-300">Enable enhanced functionality and personalisation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                <input type="checkbox" id="marketing" name="marketing" defaultChecked={!!consent?.marketing} className="mt-1 rounded border-white/20 bg-white/5 text-teal focus:ring-teal/30" />
                <div>
                  <label htmlFor="marketing" className="font-medium text-slate-100">Marketing</label>
                  <p className="text-sm text-slate-300">Used to deliver relevant marketing (not currently used).</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300"
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal to-sky px-4 py-2 text-sm font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300"
                >
                  Reject non-essential
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
