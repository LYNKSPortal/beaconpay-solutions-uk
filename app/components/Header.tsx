"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/config";

function Logo() {
  return (
    <Link href="/" className="flex items-center focus-visible:outline-offset-4">
      <Image
        src="/logo.png"
        alt="Beaconpay"
        width={200}
        height={40}
        className="w-[250px] h-auto"
        priority
      />
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: navigation.services,
    },
    { label: "Industries", href: "/industries" },
    {
      label: "Resources",
      href: "/resources",
      children: navigation.resources,
    },
    { label: "FAQs", href: "/faqs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled ? "glass shadow-lg" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-md focus-visible:text-white"
                  onFocus={() => item.children && setOpenDropdown(item.label)}
                  onBlur={() => setOpenDropdown(null)}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                  aria-haspopup={item.children ? "menu" : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2 w-64">
                    <div className="glass-card rounded-xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-white/5 hover:text-teal"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/request-a-call-back"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal to-sky px-4 py-2.5 text-sm font-semibold text-navy-900 hover:from-sky hover:to-teal focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 transition-all duration-300 glow-teal"
            >
              Request a Call Back
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/5"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-16 bottom-0 glass border-t border-white/10 overflow-y-auto">
          <nav className="px-4 py-6 space-y-1" aria-label="Mobile primary">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-3 text-base font-medium text-slate-200 rounded-xl cursor-pointer hover:bg-white/5 hover:text-teal transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-slate-300 hover:text-teal hover:bg-white/5 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-slate-200 rounded-xl hover:bg-white/5 hover:text-teal transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                href="/request-a-call-back"
                className="block w-full text-center rounded-xl bg-gradient-to-r from-teal to-sky px-4 py-3 text-base font-semibold text-navy-900 hover:from-sky hover:to-teal transition-all duration-300 glow-teal"
                onClick={() => setMobileOpen(false)}
              >
                Request a Call Back
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
