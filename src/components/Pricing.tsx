import Icon from "@/components/Icon";

const plans = [
  {
    icon: "code",
    tech: "HTML / CSS / JS",
    sub: "Static or hand-coded websites",
    price: "€100",
    note: "Fixed fee · One-time payment",
    featured: false,
    features: [
      "Full visual reskin",
      "Mobile-responsive redesign",
      "Modern typography & color system",
      "Performance optimization",
      "Post-launch support (7 days)",
    ],
  },
  {
    icon: "settings",
    tech: "WordPress",
    sub: "WordPress-powered websites",
    price: "€200",
    note: "Fixed fee · One-time payment",
    featured: true,
    features: [
      "Theme renovation or custom reskin",
      "Mobile-responsive redesign",
      "Plugin & performance audit",
      "Modern UI components",
      "SEO basics setup",
      "Post-launch support (14 days)",
    ],
  },
  {
    icon: "folder_open",
    tech: "Open-Source CMS",
    sub: "Joomla, Drupal, PrestaShop & others",
    price: "€150",
    note: "Fixed fee · One-time payment",
    featured: false,
    features: [
      "Template renovation or reskin",
      "Mobile-responsive redesign",
      "Modern visual overhaul",
      "Performance improvements",
      "Post-launch support (10 days)",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-5">
            Pricing
          </span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold tracking-tight">
            Fixed fees. Zero surprises.
          </h2>
          <p className="text-slate-400 mt-4 text-sm max-w-md mx-auto leading-relaxed">
            Prices vary based on your site&apos;s technology and complexity.
            All projects start with a free discovery call.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.tech}
              className={`reveal relative flex flex-col p-9 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-gradient-to-b from-purple-500/[0.07] to-[#08080f] border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.1)]"
                  : "bg-[#08080f] border-white/[0.07] hover:border-purple-500/30"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Icon name={plan.icon} className="text-purple-400" size="sm" />
                </div>
                <span className="font-[family-name:var(--font-space)] font-bold text-base">{plan.tech}</span>
              </div>
              <p className="text-xs text-slate-500 mb-7">{plan.sub}</p>

              <div
                className={`font-[family-name:var(--font-space)] text-5xl font-bold mb-1.5 leading-none ${
                  plan.featured ? "gradient-text" : "text-slate-100"
                }`}
              >
                {plan.price}
              </div>
              <p className="text-xs text-slate-500 mb-8">{plan.note}</p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-[10px] font-bold">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`w-full text-center font-[family-name:var(--font-space)] text-sm font-semibold py-3 rounded-xl transition-all duration-200 ${
                  plan.featured
                    ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] hover:-translate-y-0.5"
                    : "border border-white/10 text-slate-300 hover:border-purple-500/40 hover:text-purple-400 hover:bg-purple-500/5"
                }`}
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="reveal text-center mt-10">
          <p className="text-slate-500 text-sm">
            Have a more complex site?{" "}
            <a href="#book" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
              Let&apos;s talk →
            </a>{" "}
            — we&apos;ll give you a tailored quote.
          </p>

        </div>

      </div>
    </section>
  );
}
