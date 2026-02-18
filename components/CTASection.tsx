import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-background py-32 lg:py-40 overflow-hidden relative">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(201,168,76,0.05),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gold" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Get In Touch</span>
          <span className="w-8 h-px bg-gold" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Let&apos;s Build Strategic Partnerships
        </h2>

        <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          Whether you&apos;re a brand, agency, or platform, we collaborate to create
          culturally powerful and commercially effective partnerships.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto text-sm tracking-[0.15em] uppercase bg-gold text-white px-12 py-4 font-semibold hover:bg-gold-light transition-colors duration-200"
          >
            Partner With Us
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-sm tracking-[0.15em] uppercase border border-white/20 text-white/70 px-12 py-4 hover:border-gold hover:text-gold transition-all duration-200"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
