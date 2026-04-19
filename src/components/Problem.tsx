const issues = [
  {
    icon: "📉",
    title: "Losing visitors instantly",
    desc: "53% of users leave if a site looks outdated. First impressions happen in milliseconds.",
  },
  {
    icon: "📱",
    title: "Not mobile-friendly",
    desc: "Most old websites break on phones. Over 60% of web traffic is mobile today.",
  },
  {
    icon: "💰",
    title: "A full rebuild costs a fortune",
    desc: "You don't need to rebuild from scratch. We modernize what you already have — for a fraction of the cost.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Browser mockup */}
          <div className="reveal">
            <div className="bg-[#16162a] border border-white/[0.07] rounded-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-[#0f0f1a] px-4 py-3 flex items-center gap-2 border-b border-white/[0.07]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 bg-white/5 rounded h-5 text-[10px] text-slate-600 flex items-center px-2">
                  youroldsite.com
                </span>
              </div>
              {/* Page skeleton (old-looking) */}
              <div className="p-6 flex flex-col gap-3">
                <div className="h-5 w-3/5 bg-white/[0.04] rounded" />
                <div className="h-24 bg-white/[0.04] rounded" />
                <div className="flex gap-3">
                  <div className="h-14 flex-1 bg-white/[0.04] rounded" />
                  <div className="h-14 flex-1 bg-white/[0.04] rounded" />
                </div>
                <div className="h-3 w-4/5 bg-white/[0.04] rounded" />
                <div className="h-3 w-3/4 bg-white/[0.04] rounded" />
                <div className="h-3 w-1/2 bg-white/[0.04] rounded" />
                <div className="h-9 w-2/5 bg-purple-500/20 rounded mt-1" />
              </div>
            </div>
          </div>

          {/* Problem cards */}
          <div className="reveal [transition-delay:150ms]">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-5">
              The problem
            </span>
            <h2 className="font-[family-name:var(--font-space)] text-4xl font-bold leading-tight tracking-tight mb-8">
              Is your site stuck<br />in a different era?
            </h2>

            <div className="flex flex-col gap-4">
              {issues.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 bg-[#0f0f1a] border border-white/[0.07] rounded-xl hover:border-purple-500/30 hover:bg-[#16162a] transition-all duration-200"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-[family-name:var(--font-space)] text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
