const steps = [
  {
    num: "01",
    title: "Book a Free Call",
    desc: "We hop on a quick call to review your current site, understand your goals, and answer all your questions.",
  },
  {
    num: "02",
    title: "Get a Fixed Quote",
    desc: "Based on your site's technology and scope, you receive a clear fixed price. No hidden fees ever.",
  },
  {
    num: "03",
    title: "We Build the Renovation",
    desc: "Our team gets to work. You'll see progress updates and can give feedback along the way.",
  },
  {
    num: "04",
    title: "Launch & Handover",
    desc: "You approve the final result, we go live, and hand over full control with a clear walkthrough.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-5">
            Process
          </span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold tracking-tight">
            Simple. Transparent. Efficient.
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            From first contact to a live, modern website — here's exactly how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#0f0f1a] border border-white/[0.07] flex items-center justify-center font-[family-name:var(--font-space)] text-lg font-bold text-purple-400 mb-6 hover:bg-purple-500/10 hover:border-purple-500 hover:shadow-[0_0_24px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-default">
                {step.num}
              </div>
              <h3 className="font-[family-name:var(--font-space)] text-base font-bold mb-2.5">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
