"use client";

import { useEffect } from "react";
import Icon from "@/components/Icon";

const perks = [
  { icon: "calendar_month", text: "Free 30-minute discovery call" },
  { icon: "screen_share",   text: "We review your site live on the call" },
  { icon: "assignment",     text: "You get a clear scope & fixed price" },
  { icon: "lock",           text: "Zero pressure, zero commitment" },
];

export default function BookCall() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="book" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Info */}
          <div className="reveal">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-6">
              Book a Call
            </span>
            <h2 className="font-[family-name:var(--font-space)] text-4xl font-bold leading-tight tracking-tight mb-5">
              Let&apos;s talk about{" "}
              <span className="gradient-text">your website</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Pick a time that works for you. In 30 minutes, we&apos;ll review your
              current site, discuss what&apos;s possible, and give you a clear fixed
              quote — no obligations.
            </p>

            <ul className="flex flex-col gap-4">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3.5 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Icon name={p.icon} className="text-purple-400" size="sm" />
                  </div>
                  <span className="text-slate-300">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendly embed */}
          <div className="reveal [transition-delay:150ms] rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0f0f1a]">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/di-procrafts-support/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f0f1a&text_color=f1f5f9&primary_color=a855f7"
              style={{ minWidth: "320px", height: "680px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
