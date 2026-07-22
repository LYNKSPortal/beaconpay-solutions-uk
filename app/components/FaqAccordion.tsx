"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-teal/30">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-white group-hover:text-teal">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-teal transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              hidden={!isOpen}
              className={`px-5 ${isOpen ? "pb-5" : "pb-0"}`}
            >
              {isOpen && <p className="text-slate-300 leading-relaxed">{faq.answer}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
