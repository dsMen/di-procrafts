import Icon from "@/components/Icon";

const services = [
  {
    icon: "palette",
    title: "Visual Reskin",
    desc: "Complete visual overhaul: new colors, typography, spacing, and layout aligned with modern design standards.",
    tags: ["New UI", "Typography", "Color system"],
  },
  {
    icon: "smartphone",
    title: "Mobile-First Responsive",
    desc: "Your renovated site will look and work perfectly on any screen size: phone, tablet, or desktop.",
    tags: ["Responsive", "Mobile-first", "All devices"],
  },
  {
    icon: "bolt",
    title: "Performance Boost",
    desc: "Optimized assets, cleaner code, and better structure so your site loads faster and ranks better on Google.",
    tags: ["Speed", "SEO basics", "Optimization"],
  },
  {
    icon: "build",
    title: "CMS-Aware Renovations",
    desc: "We work within your existing CMS: WordPress, Joomla, Drupal, or any open-source platform. No migration needed.",
    tags: ["WordPress", "Joomla", "Drupal", "+more"],
  },
  {
    icon: "desktop_windows",
    title: "Static Site Modernization",
    desc: "Have a hand-coded HTML/CSS site? We'll modernize it while keeping your content perfectly intact.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "handshake",
    title: "Handover & Support",
    desc: "You get a clean handover, walkthrough, and short-term support post-launch. We don't just deliver and disappear.",
    tags: ["Handover", "Walkthrough", "Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-5">
            What we do
          </span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold tracking-tight">
            One service. Any platform.
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            We specialize in a single thing: making old websites look stunning,
            regardless of the tech behind them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative p-8 bg-[#08080f] border border-white/[0.07] rounded-2xl hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(168,85,247,0.12)] transition-all duration-300 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <Icon name={s.icon} className="text-purple-400" size="lg" />
                </div>
                <h3 className="font-[family-name:var(--font-space)] text-base font-bold mb-2.5">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
