"use client";

const videos = [
  { src: "/videos/IMG_1587.MOV", label: "Live Session" },
  { src: "/videos/IMG_1589.MOV", label: "Behind the Scenes" },
  { src: "/videos/IMG_3008.mp4", label: "Artist Moments" },
  { src: "/videos/IMG_3009.mp4", label: "On Stage" },
  { src: "/videos/IMG_3010.mp4", label: "In the Studio" },
];

const MediaHighlights = () => {
  return (
    <section className="bg-background py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Media</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Artists in Motion
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            Watch our artists bring energy, culture, and talent to life — on stage,
            in the studio, and beyond.
          </p>
        </div>

        {/* Video grid: featured large + 4 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
          {/* Featured video — spans full width on its row */}
          <div className="lg:col-span-2 bg-background group relative">
            <div className="relative w-full aspect-video overflow-hidden">
              <video
                src={videos[0].src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="text-[10px] tracking-[0.25em] uppercase border border-white/20 text-white/70 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                  {videos[0].label}
                </span>
              </div>
            </div>
          </div>

          {/* Remaining 4 videos in 2-column grid */}
          {videos.slice(1).map((video) => (
            <div key={video.src} className="bg-background group relative">
              <div className="relative w-full aspect-video overflow-hidden">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="text-[10px] tracking-[0.25em] uppercase border border-white/20 text-white/70 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                    {video.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center gap-3">
          <span className="w-8 h-px bg-gold/30" />
          <span className="text-white/20 text-xs tracking-[0.25em] uppercase">
            Artist Global Connect — Amplifying &amp; Unleashing Talent
          </span>
        </div>
      </div>
    </section>
  );
};

export default MediaHighlights;
