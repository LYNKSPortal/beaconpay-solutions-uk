import type { MetadataRoute } from "next";
import { business } from "@/lib/config";
import { services, industries, articles } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.website;
  const lastModified = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/resources",
    "/faqs",
    "/careers",
    "/contact",
    "/request-a-call-back",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/accessibility",
    "/complaints",
    "/modern-slavery-statement",
    "/anti-bribery-policy",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}${service.href}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${base}${industry.href}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${base}/resources/payroll-insights/${article.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...industryRoutes, ...articleRoutes];
}
