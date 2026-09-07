export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-mid)]"
    >
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--bg-surface)]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] rounded-full bg-[var(--bg)]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-[var(--rose)] mb-6">
          Professional Makeup Artistry
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light leading-tight text-[var(--cream)] mb-6">
          Beauty that tells{" "}
          <em className="italic font-normal text-[var(--rose)]">your</em> story
        </h1>
        <p className="font-[family-name:var(--font-lato)] text-base md:text-lg text-[var(--cream-muted)]/60 max-w-xl mx-auto leading-relaxed mb-10">
          From intimate bridal looks to bold editorial concepts — Shareen crafts
          makeup that makes you feel confidently, unmistakably yourself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[var(--burgundy)] text-[var(--cream)] text-sm tracking-widest uppercase hover:bg-[var(--burgundy-med)] transition-colors"
          >
            Book a Session
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3.5 border border-[var(--rose)] text-[var(--rose)] text-sm tracking-widest uppercase hover:bg-[var(--rose)]/10 transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--cream-muted)]/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-[var(--rose)]/40 animate-pulse" />
      </div>
    </section>
  );
}
