"use client";

import { useState } from "react";
import Image from "next/image";
import { artists, Artist } from "@/data/artists";
import ArtistKitModal from "@/components/ArtistKitModal";

const ArtistRoster = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <section id="artists" className="bg-surface py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Our Roster</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Our Artists
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            We represent a curated roster of Amapiano artists shaping sound, culture,
            and lifestyle. Each artist is strategically developed for both creative
            excellence and commercial relevance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {artists.map((artist, index) => (
            <div key={artist.id} className="group border border-border hover:border-gold/40 transition-colors duration-300">
              {/* Artist photo — clickable if mediaKit exists */}
              <button
                onClick={() => artist.mediaKitPages && setSelectedArtist(artist)}
                className={`relative overflow-hidden h-[420px] lg:h-[500px] w-full block${artist.mediaKitPages ? " cursor-pointer" : " cursor-default"}`}
                tabIndex={artist.mediaKitPages ? 0 : -1}
                aria-label={artist.mediaKitPages ? `View ${artist.alias} media kit` : undefined}
              >
                <Image
                  src={artist.image}
                  alt={`${artist.alias} – ${artist.roles[0]}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {/* Alias watermark */}
                <p className="absolute bottom-4 left-6 right-6 font-display text-[44px] sm:text-[52px] font-bold leading-[1.05] text-white/20 select-none pointer-events-none break-words">
                  {artist.alias.toUpperCase()}
                </p>
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                {/* Hover prompt — slides up on card hover */}
                {artist.mediaKitPages && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-sm border-t border-gold/30 px-6 py-4 flex items-center justify-between">
                      <span className="text-white text-xs tracking-[0.25em] uppercase">
                        View Media Kit
                      </span>
                      <span className="flex items-center gap-2 text-white text-[10px] tracking-[0.2em] uppercase">
                        Tap name or image
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </button>

              {/* Card content */}
              <div className="p-8 lg:p-10">
                {/* Roles */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {artist.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[10px] tracking-[0.2em] uppercase border border-gold/40 text-white/70 px-2.5 py-1"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Name — clickable if mediaKit exists */}
                {artist.mediaKitPages ? (
                  <button
                    onClick={() => setSelectedArtist(artist)}
                    className="text-left group/name block mb-1"
                  >
                    <h3 className="font-display text-3xl font-bold text-white leading-tight group-hover/name:text-gold transition-colors duration-200">
                      {artist.alias}
                    </h3>
                  </button>
                ) : (
                  <h3 className="font-display text-3xl font-bold text-white mb-1 leading-tight">
                    {artist.alias}
                  </h3>
                )}
                <p className="text-white/30 text-sm tracking-wider mb-2">{artist.name}</p>
                <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">
                  {artist.origin}
                </p>

                {/* View media kit link */}
                {artist.mediaKitPages && (
                  <button
                    onClick={() => setSelectedArtist(artist)}
                    className="flex items-center gap-2 text-gold/70 hover:text-gold text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 mb-6"
                  >
                    <span className="w-4 h-px bg-current" />
                    View Media Kit
                  </button>
                )}

                {!artist.mediaKitPages && <div className="mb-6" />}

                {/* Bio */}
                <p className="text-white/50 text-sm leading-relaxed mb-8">{artist.bio}</p>

                {/* Known for */}
                {artist.knownFor && (
                  <div className="mb-8">
                    <p className="text-xs tracking-[0.2em] uppercase text-white/25 mb-3">
                      Known For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {artist.knownFor.map((hit) => (
                        <span key={hit} className="text-xs text-white/60 bg-background border border-border px-3 py-1.5">
                          {hit}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Associated acts */}
                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/25 mb-3">
                    Associated Acts
                  </p>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {artist.associatedActs.join(" · ")}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/25 mb-4">
                    Bookings &amp; Enquiries
                  </p>
                  <div className="space-y-1.5">
                    {artist.bookingEmail && (
                      <a
                        href={`mailto:${artist.bookingEmail}`}
                        className="block text-white/60 text-sm hover:text-white transition-colors"
                      >
                        {artist.bookingEmail}
                      </a>
                    )}
                    {artist.generalEmail && (
                      <a
                        href={`mailto:${artist.generalEmail}`}
                        className="block text-white/40 text-sm hover:text-white transition-colors"
                      >
                        {artist.generalEmail}
                      </a>
                    )}
                    <div className="flex flex-wrap gap-4 pt-1">
                      {artist.bookingPhone.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-white/40 text-sm hover:text-white transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media kit modal */}
      {selectedArtist && (
        <ArtistKitModal
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}
    </section>
  );
};

export default ArtistRoster;
