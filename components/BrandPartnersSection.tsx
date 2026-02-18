const BrandPartnersSection = () => {
  return (
    <section className="bg-background py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Partnerships</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Brand Partners &amp; Activations
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            We collaborate with forward-thinking brands, agencies, and institutions
            to deliver culturally powerful and commercially effective campaigns.
          </p>
        </div>

        {/* Coming soon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface aspect-[3/2] flex flex-col items-center justify-center p-8 group hover:bg-background transition-colors duration-300"
            >
              <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center mb-3 group-hover:border-gold/30 transition-colors">
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-gold/40 transition-colors" />
              </div>
              <span className="text-white/15 text-[10px] tracking-[0.3em] uppercase group-hover:text-white/25 transition-colors">
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-border p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <p className="text-white/60 text-sm leading-relaxed">
              Interested in partnering with us for a brand activation or campaign?
              We&apos;d love to explore what we can create together.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 text-xs tracking-[0.15em] uppercase border border-gold bg-gold text-white px-8 py-3 hover:bg-gold-light transition-all duration-200 whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnersSection;
