const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Editorial Shoots" },
  { value: "200+", label: "Weddings" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-[var(--bg-surface)] w-full max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-[var(--rose)]/40">
                <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase">
                  Photo coming soon
                </span>
              </div>
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[var(--rose)]/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-[var(--rose)] mb-4">
              About Shareen
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[var(--cream)] leading-tight mb-6">
              Where artistry meets authenticity
            </h2>
            <p className="text-[var(--cream-muted)]/65 leading-relaxed mb-4">
              Hi, I&apos;m Shareen — a professional makeup artist with over 8 years of
              experience working with brides, models, and everyday women who
              deserve to feel extraordinary.
            </p>
            <p className="text-[var(--cream-muted)]/65 leading-relaxed mb-4">
              My approach is rooted in enhancing your natural beauty rather than
              masking it. Whether you&apos;re walking down the aisle, stepping onto a
              set, or heading to a special event, I tailor every look to your
              unique features and personal style.
            </p>
            <p className="text-[var(--cream-muted)]/65 leading-relaxed mb-10">
              I am certified in advanced techniques and use only premium,
              skin-loving products that photograph beautifully and last all day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[var(--rose)] pl-4">
                  <div className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--rose)]">
                    {s.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-[var(--cream-muted)]/50 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
