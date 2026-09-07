const categories = ["All", "Bridal", "Editorial", "Events", "Glam"];

const BLOB_BASE = "https://stmakeupbyshareen.blob.core.windows.net/images";

const portfolioItems = [
  {
    id: 1,
    file: "img-7720-vsco.webp",
    category: "Bridal",
    label: "Garden Bridal",
    alt: "Bride with soft romantic makeup holding a pastel bouquet outdoors",
  },
  {
    id: 2,
    file: "img-4536.webp",
    category: "Editorial",
    label: "Soft Smoky Portrait",
    alt: "Editorial portrait with a smoky eye and warm nude lip",
  },
  {
    id: 3,
    file: "e4683d64-b9a7-455a-ab02-09f8064f40c2.webp",
    category: "Glam",
    label: "Radiant Natural Glow",
    alt: "Soft glam makeup with luminous skin and a glossy nude lip",
  },
  {
    id: 4,
    file: "8e93a634-6026-4bca-8734-252d489ae127-vsco.webp",
    category: "Glam",
    label: "Evening Glam",
    alt: "Evening glam makeup with a bronzed smoky eye and berry lip",
  },
  {
    id: 5,
    file: "img-4908.webp",
    category: "Editorial",
    label: "Bold Editorial Pink",
    alt: "Bold editorial look with a pink shimmer eye and red lip",
  },
];

// Tinted backdrop shown behind each tile while its photo loads
const accentColors = [
  "var(--bg-surface)",
  "var(--burgundy-med)",
  "var(--bg-mid)",
  "var(--bg-surface)",
  "var(--bg)",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-[var(--rose)] mb-4">
            My Work
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[var(--cream)] leading-tight">
            Portfolio
          </h2>
          <div className="w-12 h-px bg-[var(--rose)] mx-auto mt-6" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-colors ${
                cat === "All"
                  ? "bg-[var(--rose)] text-[var(--charcoal)]"
                  : "border border-[var(--rose)]/30 text-[var(--cream-muted)]/60 hover:border-[var(--rose)] hover:text-[var(--rose)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className="relative aspect-[3/4] group overflow-hidden cursor-pointer"
              style={{ backgroundColor: accentColors[i % accentColors.length] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BLOB_BASE}/${item.file}`}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--bg)]/0 group-hover:bg-[var(--bg)]/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <p className="font-[family-name:var(--font-cormorant)] text-[var(--pure-white)] text-xl font-light">
                    {item.label}
                  </p>
                  <p className="text-[var(--pure-white)]/60 text-xs tracking-widest uppercase mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[var(--cream-muted)]/50 mb-6">
            Follow along for daily inspiration and behind-the-scenes moments.
          </p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-[var(--rose)] text-[var(--rose)] text-xs tracking-widest uppercase hover:bg-[var(--rose)] hover:text-[var(--charcoal)] transition-colors"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
