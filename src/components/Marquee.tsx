const items = [
  "WordPress", "HTML / CSS / JS", "Joomla", "Drupal",
  "Wix", "OpenCart", "PrestaShop", "Ghost", "Webflow",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-surface py-4">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <span className="text-purple-500 text-base">⚡</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
