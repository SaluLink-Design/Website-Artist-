import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1A2F70 1px, transparent 1px), linear-gradient(90deg, #1A2F70 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_60%,rgba(26,47,112,0.12),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-gold" />
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium">
                Amapiano Artist Management
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Strategic Artist Management{" "}
              <span className="text-white">for the Business</span> of Music.
            </h1>

            {/* Sub-headline */}
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl mb-6">
              We manage Amapiano artists with a focus on long-term career growth, brand
              partnerships, and commercial strategy — not just bookings and releases.
            </p>

            {/* Supporting line */}
            <p className="text-white/30 text-sm tracking-[0.15em] uppercase mb-12">
              Where talent meets structure, strategy, and corporate opportunity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-sm tracking-[0.15em] uppercase bg-gold text-white px-10 py-4 font-semibold hover:bg-gold-light transition-colors duration-200"
              >
                Partner With Us
              </Link>
              <Link
                href="#artists"
                className="w-full sm:w-auto text-sm tracking-[0.15em] uppercase border border-white/20 text-white/70 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-200"
              >
                Work With Our Artists
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex flex-col items-start gap-2 text-white/20">
              <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>

          {/* Right: Single artist photo */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[340px] h-[400px] border border-white/10 group overflow-hidden">
              <Image
                src="/hero/chley-hero.png"
                alt="Chley Nkosi – Performer, Vocalist & Singer"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="340px"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
            </div>
          </div>

          {/* Mobile: single hero image */}
          <div className="flex lg:hidden items-center justify-center">
            <div className="relative w-64 h-72 border border-white/10 overflow-hidden">
              <Image
                src="/hero/chley-hero.png"
                alt="Chley Nkosi – Performer, Vocalist & Singer"
                fill
                className="object-contain"
                sizes="256px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
