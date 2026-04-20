const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#book", label: "Book a Call" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-[family-name:var(--font-space)] text-xl font-bold text-slate-100 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              DI ProCrafts
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              We renovate old websites and make them look stunning and modern.
              Fixed fees, any platform.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://calendly.com/di-procrafts-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  Schedule a call
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@di-procrafts.com"
                  className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  hello@di-procrafts.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@di-procrafts.com"
                  className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
                >
                  support@di-procrafts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-white/[0.07]">
          <span className="text-xs text-slate-600">
            © 2026 DI ProCrafts · di-procrafts.com
          </span>

        </div>

      </div>
    </footer>
  );
}
