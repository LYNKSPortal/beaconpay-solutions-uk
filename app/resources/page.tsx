import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Users, Calendar, HelpCircle } from "lucide-react";
import { articles } from "@/lib/data";
import Hero from "../components/Hero";
import Breadcrumbs from "../components/Breadcrumbs";
import ArticleCard from "../components/ArticleCard";
import ComingSoonBadge from "../components/ComingSoonBadge";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "Payroll Resources and Insights",
  description: "Explore payroll guides, insights and resources from Beaconpay Solutions covering PAYE, CIS, umbrella payroll and more.",
};

const resourceCategories = [
  { title: "Payroll Insights", description: "Updates and practical information about UK payroll.", href: "/resources/payroll-insights", icon: BookOpen },
  { title: "PAYE Guides", description: "Guidance for employers managing PAYE payroll.", href: "/resources/guides?category=PAYE Guides", icon: FileText },
  { title: "CIS Guides", description: "Information for construction businesses and subcontractors.", href: "/resources/guides?category=CIS Guides", icon: FileText },
  { title: "Contractor Guidance", description: "Articles for contractors and temporary workers.", href: "/resources/guides?category=Contractor Guidance", icon: Users },
  { title: "Employer Payroll Guidance", description: "Resources to help employers manage payroll effectively.", href: "/resources/guides?category=Employer Payroll Guidance", icon: Calendar },
  { title: "FAQs", description: "Answers to common payroll questions.", href: "/faqs", icon: HelpCircle },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Payroll Resources and Insights"
        subtitle="Resources"
        description="Practical payroll guides, insights and information for businesses, contractors and recruitment agencies across the UK."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Resources" }]} />
      </div>

      <section className="py-12 lg:py-16 bg-navy" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="categories-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Explore by topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              const count = articles.filter((a) => a.category === category.title).length;
              const isComingSoon = count === 0 && category.href.startsWith("/resources/guides");
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-teal-400 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-teal-400">{category.title}</h3>
                    {isComingSoon && <ComingSoonBadge />}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-400">
                    {isComingSoon ? "Notify me" : "Browse"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="articles-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">Payroll Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                summary={article.summary}
                category={article.category}
                href={`/resources/payroll-insights/${article.slug}`}
                publishedAt={article.publishedAt}
                readingTime={article.readingTime}
                author={article.author}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
