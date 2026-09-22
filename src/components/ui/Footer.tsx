const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#1e0f09] text-[#fdf8f5]/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase">
        <p className="font-[family-name:var(--font-cormorant)] text-[#c9a98c]/70 text-base normal-case tracking-wide not-italic">
          Shareen Artistry
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 normal-case tracking-normal">
          <a
            href="mailto:shareenmakeupartistry@gmail.com"
            className="hover:text-[#c9a98c] transition-colors"
          >
            shareenmakeupartistry@gmail.com
          </a>
          <a
            href="tel:+12264480802"
            className="hover:text-[#c9a98c] transition-colors"
          >
            226-448-0802
          </a>
        </div>
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

      <p className="mt-6 text-center text-xs tracking-widest uppercase">
        &copy; {year} Shareen Artistry. All rights reserved.
      </p>
      <div className="mt-4 text-center normal-case tracking-normal">
        <a
          href="https://www.haidartechsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[#fdf8f5]/25 hover:text-[#fdf8f5]/40 transition-colors"
        >
          Built by Haidar Tech Solutions
        </a>
      </div>
    </footer>
  );
}
