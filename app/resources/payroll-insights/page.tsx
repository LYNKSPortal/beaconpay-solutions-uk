import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/lib/data";
import Hero from "../../components/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import ArticleCard from "../../components/ArticleCard";
import CtaBanner from "../../components/CtaBanner";

export const metadata: Metadata = {
  title: "Payroll Insights",
  description: "Read the latest payroll insights, guides and updates from Beaconpay Solutions.",
};

export default function PayrollInsightsPage() {
  return (
    <>
      <Hero
        title="Payroll Insights"
        subtitle="Resources"
        description="Practical payroll guidance, updates and articles for businesses, contractors and agencies across the UK."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Payroll Insights" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="articles-heading" className="sr-only">Payroll articles</h2>
          {articles.length > 0 ? (
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
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-slate-300">No articles available yet. Please check back soon.</p>
            </div>
          )}
          <div className="mt-10">
            <Link href="/resources" className="inline-flex items-center gap-2 text-white font-semibold hover:text-teal-400">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
