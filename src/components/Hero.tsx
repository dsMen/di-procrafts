export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[480px] h-[480px] rounded-full bg-cyan-400/6 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/25 text-green-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
          Now accepting new projects
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-space)] text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Your website deserves
          <br />
          a{" "}
          <span className="gradient-text">modern makeover</span>
        </h1>

        {/* Sub */}
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
          We take your outdated website (WordPress, plain HTML, any CMS) and
          transform it into a sleek, fast, modern experience.{" "}
          <strong className="text-slate-200 font-semibold">Fixed fees. No surprises.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold font-[family-name:var(--font-space)] px-7 py-3.5 rounded-xl shadow-[0_0_28px_rgba(168,85,247,0.4)] hover:shadow-[0_0_44px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Free Call
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-transparent text-slate-200 font-semibold font-[family-name:var(--font-space)] px-7 py-3.5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/5 transition-all duration-200"
          >
            See Pricing
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10">
          {[
            { value: "€100", label: "Starting price" },
            { value: "100%", label: "Fixed-fee projects" },
            { value: "Any CMS", label: "We handle all stacks" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-[family-name:var(--font-space)] text-2xl font-bold text-slate-100">
                {s.value}
              </span>
              <span className="text-xs text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
