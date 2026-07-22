import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, AlertTriangle } from "lucide-react";
import { articles } from "@/lib/data";
import Hero from "../../../components/Hero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CtaBanner from "../../../components/CtaBanner";
import JsonLd from "../../../components/JsonLd";
import { business } from "@/lib/config";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: { "@type": "Organization", name: article.author || business.name },
    publisher: { "@type": "Organization", name: business.name, logo: `${business.website}/web-app-manifest-512x512.png` },
    datePublished: article.publishedAt,
    url: `${business.website}/resources/payroll-insights/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleStructuredData} />
      <Hero
        title={article.title}
        subtitle={article.category}
        description={article.summary}


      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: "Resources", href: "/resources" },
          { label: "Payroll Insights", href: "/resources/payroll-insights" },
          { label: article.title },
        ]} />
      </div>

      <article className="py-12 lg:py-16 bg-navy-900" aria-labelledby="article-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 pb-8 border-b border-white/10">
            <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-teal-300 mb-3">{article.category}</span>
            <h1 id="article-heading" className="text-3xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              {article.author && <span>By {article.author}</span>}
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {article.publishedAt}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readingTime}</span>
            </div>
          </header>

          <div className="prose-custom text-slate-200 leading-relaxed mb-10">
            <p>{article.summary}</p>
            <p>
              This guide is provided for general information purposes and does not constitute legal, tax, accounting, financial or employment-status advice. If you need advice specific to your circumstances, you should speak to a qualified professional adviser.
            </p>
            <p>
              Beaconpay Solutions provides practical payroll support to businesses, contractors and agencies across the UK. For tailored assistance, please{" "}
              <Link href="/contact" className="text-white hover:underline font-medium">contact our team</Link>{" "}
              or{" "}
              <Link href="/request-a-call-back" className="text-white hover:underline font-medium">request a call back</Link>.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-amber-400 bg-white/5 p-4 text-sm text-slate-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <p>
                Payroll rules and obligations can change. This article reflects our understanding at the time of publication and should not replace professional advice.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/resources/payroll-insights" className="inline-flex items-center gap-2 text-white font-semibold hover:text-teal-400">
              <ArrowLeft className="h-4 w-4" />
              Back to Payroll Insights
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
