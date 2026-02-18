import Link from "next/link";

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

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wider">
            © {new Date().getFullYear()} Artist Global Connect. All rights reserved.
          </p>
          <p className="text-white/25 text-xs tracking-wider">
            Amapiano Artist Management · Brand Partnerships · Career Building
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
