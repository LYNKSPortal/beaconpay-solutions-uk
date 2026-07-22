import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface ArticleCardProps {
  title: string;
  summary: string;
  category: string;
  href: string;
  publishedAt: string;
  readingTime: string;
  author?: string;
  featuredImage?: string;
}

export default function ArticleCard({ title, summary, category, href, publishedAt, readingTime, author, featuredImage }: ArticleCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]">
      {featuredImage && (
        <div className="h-40 bg-white/5 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featuredImage} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block self-start rounded-full bg-gradient-to-r from-teal/20 to-sky/20 border border-white/10 px-2.5 py-0.5 text-xs font-medium text-teal mb-3">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal transition-colors">
          <Link href={href} className="focus-visible:outline-none">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">{summary}</p>
        <div className="flex items-center gap-4 text-xs text-slate-300">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </span>
          {author && <span>By {author}</span>}
        </div>
      </div>
    </article>
  );
}
