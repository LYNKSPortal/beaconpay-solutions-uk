import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/lib/data";
import Hero from "../../components/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import ArticleCard from "../../components/ArticleCard";
import ComingSoonBadge from "../../components/ComingSoonBadge";
import CtaBanner from "../../components/CtaBanner";

export const metadata: Metadata = {
  title: "Payroll Guides",
  description: "Downloadable and browsable payroll guides from Beaconpay Solutions covering PAYE, CIS, umbrella payroll and more.",
};

export default function GuidesPage() {
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <>
      <Hero
        title="Payroll Guides"
        subtitle="Resources"
        description="Practical guides to help you understand PAYE, CIS, umbrella payroll, contractor arrangements and UK payroll compliance."


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides" }]} />
      </div>

      <section className="py-12 lg:py-20 bg-navy-900" aria-labelledby="guides-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.length > 0 ? (
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h2 id="guides-heading" className="text-xl font-bold text-white mb-6">{category}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.filter((a) => a.category === category).map((article) => (
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
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
              <div className="mb-4 flex justify-center">
                <ComingSoonBadge />
              </div>
              <p className="text-slate-300">No guides available yet. Please check back soon.</p>
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
