"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you rebuild the site from scratch?",
    a: "Nope, that's exactly the point. We renovate and reskin your existing website. Your content, domain, and hosting stay the same. We only modernize the look, feel, and front-end performance.",
  },
  {
    q: "Will I lose any content or data?",
    a: "Never. We work on a staging/development copy first, so your live site is never at risk. All content, pages, forms, and functionality are preserved throughout the renovation.",
  },
  {
    q: "How long does a renovation take?",
    a: "Typically between 1 to 3 weeks depending on the size and complexity of your website. We'll give you a concrete timeline during the discovery call before any work begins.",
  },
  {
    q: "What if my site has a custom or unusual setup?",
    a: "Book a free call and we'll assess it together. We work with a wide range of technologies and can handle most custom setups. If the scope is larger, we'll provide a custom quote.",
  },
  {
    q: "How do payments work?",
    a: "Payments are handled securely through Dodo Payments. We typically split into two phases: 50% upfront to begin, and 50% upon your approval of the final result before go-live.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We include revision rounds in every project so we get it right. We don't consider a project done until you're satisfied. The final 50% is only paid once you approve the result.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-5">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-[#08080f] border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-purple-500/30" : "border-white/[0.07]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-[family-name:var(--font-space)] text-sm font-semibold hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span
                    className={`text-xs text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-purple-400" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-350 ease-in-out ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
