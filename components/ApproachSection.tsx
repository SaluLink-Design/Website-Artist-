const pillars = [
  {
    number: "I",
    title: "Strategy First",
    description:
      "Long-term thinking before short-term wins. Every decision is measured against the career arc we are building together — not just the next opportunity.",
  },
  {
    number: "II",
    title: "Culture & Commercial Balance",
    description:
      "Authenticity plus brand value. We ensure artists remain culturally credible while unlocking premium commercial opportunities that align with who they are.",
  },
  {
    number: "III",
    title: "Sustainable Growth",
    description:
      "Longevity, relevance, and financial stability. We build careers that last — not moments that fade — by focusing on the foundations that drive lasting impact.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-surface py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Philosophy</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-20 max-w-xl">
          Our Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="bg-surface p-10 lg:p-14 relative overflow-hidden group">
              {/* Large numeral background */}
              <span className="absolute -top-4 -right-4 font-display text-[120px] font-bold text-white/[0.02] leading-none select-none group-hover:text-white/[0.04] transition-colors duration-500">
                {pillar.number}
              </span>
              <span className="text-white/40 text-xs tracking-[0.3em] font-mono block mb-8">
                {pillar.number}
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-5 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
