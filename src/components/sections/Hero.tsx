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
        <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-[#3b0c0d] mb-6">
          Professional Makeup Artistry
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light leading-none tracking-[0.12em] text-[#2c1810] mb-4">
          MAKEUP
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light italic text-[#3b0c0d] mb-6">
          By Shareen
        </p>
        <p className="font-[family-name:var(--font-lato)] text-[0.7rem] md:text-xs tracking-[0.2em] uppercase text-[#2c1810]/50 mb-10">
          Milton · Oakville · Burlington · GTA · London ON
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#3b0c0d] text-[#fdfae3] text-sm tracking-widest uppercase hover:bg-[#4a1010] transition-colors"
          >
            Book a Session
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3.5 border border-[#3b0c0d] text-[#3b0c0d] text-sm tracking-widest uppercase hover:bg-[#3b0c0d]/10 transition-colors"
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
