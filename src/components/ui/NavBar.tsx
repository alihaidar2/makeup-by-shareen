"use client";

import { useState, useEffect } from "react";

type NavLink = { label: string; href: string; external?: boolean };

const links: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shareenartistry/",
    external: true,
  },
];

const externalProps = (link: NavLink) =>
  link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fdf8f5]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-widest uppercase text-[#8b5e3c]"
        >
          Shareen Artistry
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...externalProps(l)}
                className="text-sm tracking-widest uppercase text-[#2c1810]/70 hover:text-[#8b5e3c] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 bg-[#3b0c0d] text-[#fdfae3] text-sm tracking-widest uppercase hover:bg-[#4a1010] transition-colors"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2c1810] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2c1810] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2c1810] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf8f5] border-t border-[#e8d5c4] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...externalProps(l)}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#2c1810]/70 hover:text-[#8b5e3c] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 bg-[#3b0c0d] text-[#fdfae3] text-sm tracking-widest uppercase text-center hover:bg-[#4a1010] transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
