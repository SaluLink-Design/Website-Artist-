import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 border border-gold flex items-center justify-center">
                <span className="text-white font-display text-xs font-bold tracking-widest">AGC</span>
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-white uppercase">
                Artist Global Connect
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Strategic artist management for the business of music. Where talent meets structure, strategy, and corporate opportunity.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Our Artists", href: "/#artists" },
                { label: "Approach", href: "/#approach" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-6">Get In Touch</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Ready to explore a partnership or work with our artists?
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs tracking-[0.15em] uppercase border border-gold bg-gold text-white px-5 py-2.5 hover:bg-gold-light transition-all duration-200"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Direct Contact Section */}
        <div className="border-t border-border pt-12 mb-12">
          <h3 className="text-white text-xs tracking-[0.25em] uppercase mb-8">Direct Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Artist Bookings — EeQue</p>
              <a
                href="mailto:eeQuebookings@gmail.com"
                className="text-white text-sm hover:text-gold transition-colors tracking-wide"
              >
                eeQuebookings@gmail.com
              </a>
            </div>
            <div>
              <p className="text-white/50 text-xs tracking-[0.15em] uppercase mb-2">Artist Bookings — Masterpiece YVK</p>
              <a
                href="mailto:bookings@yvkrecords.co.za"
                className="text-white text-sm hover:text-gold transition-colors tracking-wide"
              >
                bookings@yvkrecords.co.za
              </a>
            </div>
            <div>
              <p className="text-white/50 text-xs tracking-[0.15em] uppercase mb-2">General Enquiries</p>
              <a
                href="mailto:info@yvkrecords.co.za"
                className="text-white text-sm hover:text-gold transition-colors tracking-wide"
              >
                info@yvkrecords.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/agc-logo.png"
              alt="Artist Global Connect"
              width={48}
              height={48}
              className="object-contain opacity-80"
            />
            <p className="text-white/25 text-xs tracking-wider">
              © {new Date().getFullYear()} Artist Global Connect. All rights reserved.
            </p>
          </div>
          <p className="text-white/25 text-xs tracking-wider">
            Amapiano Artist Management · Brand Partnerships · Career Building
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
