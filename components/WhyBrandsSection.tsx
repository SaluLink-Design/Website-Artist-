const reasons = [
  "Deep understanding of youth culture and Amapiano influence",
  "Corporate-level professionalism and execution",
  "Artists positioned as strategic brand partners",
  "Reliable campaign delivery",
  "Long-term partnership mindset",
];

const WhyBrandsSection = () => {
  return (
    <section className="bg-background py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: reasons list */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Brand Value</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-14">
              Why Brands Work With Us
            </h2>

            <ul className="space-y-6">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 border border-gold flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-gold rounded-none" />
                  </span>
                  <span className="text-white/70 text-base leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: statement card */}
          <div className="relative">
            <div className="border border-border p-10 lg:p-14">
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-white/15 font-display text-8xl font-bold leading-none block mb-8">&ldquo;</span>
              <p className="font-display text-xl lg:text-2xl text-white leading-relaxed font-medium">
                We connect brands with culturally relevant artists through strategic,
                measurable, and impactful partnerships.
              </p>
              <div className="mt-10 pt-8 border-t border-border flex items-center gap-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Artist Global Connect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrandsSection;
