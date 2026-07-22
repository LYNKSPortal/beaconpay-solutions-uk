import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { business } from "@/lib/config";
import JsonLd from "./JsonLd";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = business.website;
  const breadcrumbItems = [
    { name: "Home", item: `${base}/` },
    ...items.map((item) => ({
      name: item.label,
      item: item.href ? `${base}${item.href}` : undefined,
    })),
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="inline-flex flex-wrap items-center gap-2 text-sm text-slate-300 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-white">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              {item.href ? (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-200 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
