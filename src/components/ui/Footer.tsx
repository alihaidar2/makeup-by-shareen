const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#1e0f09] text-[#fdf8f5]/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase">
        <p className="font-[family-name:var(--font-cormorant)] text-[#c9a98c]/70 text-base normal-case tracking-wide not-italic">
          Makeup by Shareen
        </p>
        <p>&copy; {year} All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-[#c9a98c] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#c9a98c] transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-[#c9a98c] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
