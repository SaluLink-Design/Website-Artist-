const PositioningSection = () => {
  return (
    <section id="about" className="bg-background py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: label + headline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-gold" />
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase">About</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              More Than Management.{" "}
              <span className="text-white">We Build Careers.</span>
            </h2>

            {/* Decorative border block */}
            <div className="mt-12 border-l-2 border-gold pl-8">
              <p className="text-white/40 text-sm leading-relaxed tracking-wide italic">
                &ldquo;We position Amapiano artists as cultural brands capable of delivering
                value to major companies, institutions, and global platforms.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: body copy */}
          <div className="space-y-6">
            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              Most artist managers focus on securing gigs and short-term wins.
              We focus on building sustainable careers.
            </p>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              Our approach blends creative direction, strategic planning, and corporate
              partnerships to ensure our artists achieve long-term relevance, financial
              stability, and brand equity — beyond just music.
            </p>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              We position Amapiano artists as cultural brands capable of delivering
              value to major companies, institutions, and global platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
