export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5ede5]"
    >
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#e8d5c4]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] rounded-full bg-[#d4b8a0]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-[#8b5e3c] mb-6">
          Professional Makeup Artistry
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light leading-tight text-[#2c1810] mb-6">
          Beauty that tells{" "}
          <em className="italic font-normal text-[#8b5e3c]">your</em> story
        </h1>
        <p className="font-[family-name:var(--font-lato)] text-base md:text-lg text-[#2c1810]/60 max-w-xl mx-auto leading-relaxed mb-10">
          From intimate bridal looks to bold editorial concepts — Shareen crafts
          makeup that makes you feel confidently, unmistakably yourself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#8b5e3c] text-white text-sm tracking-widest uppercase hover:bg-[#7a5234] transition-colors"
          >
            Book a Session
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3.5 border border-[#8b5e3c] text-[#8b5e3c] text-sm tracking-widest uppercase hover:bg-[#8b5e3c]/10 transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#2c1810]/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-[#8b5e3c]/40 animate-pulse" />
      </div>
    </section>
  );
}
