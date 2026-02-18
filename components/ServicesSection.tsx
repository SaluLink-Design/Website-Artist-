const services = [
  {
    number: "01",
    title: "Artist Management",
    description:
      "End-to-end career management and long-term artist development — from strategic planning to day-to-day operations.",
  },
  {
    number: "02",
    title: "Brand Partnerships & Sponsorships",
    description:
      "Strategic brand deals, endorsements, and partnerships that create genuine value for artists and brands alike.",
  },
  {
    number: "03",
    title: "Corporate Activations & Campaign Strategy",
    description:
      "Artist placement in high-value brand activations and campaigns designed for maximum cultural and commercial impact.",
  },
  {
    number: "04",
    title: "Commercial Strategy & Positioning",
    description:
      "Artist brand building within the corporate ecosystem — ensuring artists become powerful commercial entities.",
  },
  {
    number: "05",
    title: "Creative Direction & Brand Image",
    description:
      "Public image, narrative, and positioning across platforms — crafting a consistent, premium brand story.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-surface py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">What We Do</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Services &amp; Capabilities
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            A full-spectrum management operation built for artists serious about
            long-term relevance and commercial impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-surface p-10 group hover:bg-background transition-colors duration-300"
            >
              <span className="text-white/30 text-xs tracking-[0.3em] font-mono mb-6 block">
                {service.number}
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300 leading-snug">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-8 w-6 h-px bg-gold/40 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
            </div>
          ))}
          {/* Filler cell to complete grid */}
          <div className="bg-surface hidden lg:flex items-center justify-center p-10">
            <span className="text-white/10 font-display text-6xl font-bold tracking-tight">AGC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
