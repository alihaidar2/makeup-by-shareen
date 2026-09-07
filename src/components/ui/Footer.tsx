const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--divider)] text-[var(--cream-muted)]/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase">
        <p className="font-[family-name:var(--font-cormorant)] text-[var(--rose)]/70 text-base normal-case tracking-wide not-italic">
          Shareen Artistry
        </p>
        <p>&copy; {year} All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-[var(--rose)] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[var(--rose)] transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-[var(--rose)] transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div className="mt-4 text-center normal-case tracking-normal">
        <a
          href="https://www.haidartechsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[var(--cream-muted)]/25 hover:text-[var(--cream-muted)]/40 transition-colors"
        >
          Built by Haidar Tech Solutions
        </a>
      </div>
    </footer>
  );
}
