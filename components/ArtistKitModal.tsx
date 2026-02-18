"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Artist } from "@/data/artists";

interface ArtistKitModalProps {
  artist: Artist;
  onClose: () => void;
}

const ArtistKitModal = ({ artist, onClose }: ArtistKitModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const pages = artist.mediaKitPages ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-gold" />
          <div>
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-0.5">
              Media Kit
            </p>
            <h2 className="font-display text-xl font-bold text-white leading-tight">
              {artist.alias}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase hidden sm:block">
            {pages.length} {pages.length === 1 ? "page" : "pages"}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase border border-white/10 hover:border-white/30 px-4 py-2"
            aria-label="Close media kit"
          >
            <span>Close</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1L11 11M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable image viewer */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-3">
          {pages.map((src, i) => (
            <div
              key={src}
              className="relative w-full select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            >
              <Image
                src={src}
                alt={`${artist.alias} Media Kit — page ${i + 1}`}
                width={1200}
                height={1600}
                className="w-full h-auto block pointer-events-none"
                draggable={false}
                priority={i === 0}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistKitModal;
