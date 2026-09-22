"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const BLOB_BASE =
  process.env.NEXT_PUBLIC_BLOB_URL ||
  "https://stmakeupbyshareen.blob.core.windows.net/images";

type Look = {
  /** Finished look (card front). */
  front: string;
  /** Process shot revealed on flip (card back). */
  back: string;
};

// One entry per shoot. girl11 has four photos, so it splits into two looks.
const looks: Look[] = [
  {
    front: "girl1/full-size-render-vsco-1.webp",
    back: "girl1/full-size-render-vsco-4.webp",
  },
  {
    front: "girl2/0f72ba02-31b1-43c3-96a3-601df2f2b25d.webp",
    back: "girl2/67381ba8-2344-4792-aa68-293695cb5f4a.webp",
  },
  {
    front: "girl3/43670c0b-ba8d-46b0-8f1d-d6598889fdd3.webp",
    back: "girl3/97859917-c2df-4bf0-aca2-29d85925e5ff.webp",
  },
  {
    front: "girl4/img-4536.webp",
    back: "girl4/img-4542.webp",
  },
  {
    front: "girl5/75b871c7-a2a1-4993-96aa-1b7d3dce4265.webp",
    back: "girl5/f5f755fa-f3a2-43be-811a-375c6bd6aae0.webp",
  },
  {
    front: "girl6/37ec9968-100e-4d73-b900-1cc68ddda746.webp",
    back: "girl6/e4683d64-b9a7-455a-ab02-09f8064f40c2.webp",
  },
  {
    front: "girl7/full-size-render-vsco-3.webp",
    back: "girl7/full-size-render-vsco.webp",
  },
  {
    front: "girl8/01b019f9-2cdd-405d-b388-552aab0ba9c5-vsco.webp",
    back: "girl8/a0855413-f9b7-4e49-9c39-4a646c9830ea-vsco.webp",
  },
  {
    front: "girl9/e0724b5e-a9c3-4c72-ade0-72ecb503f13f.webp",
    back: "girl9/img-3709.webp",
  },
  {
    front: "girl10/8e93a634-6026-4bca-8734-252d489ae127-vsco.webp",
    back: "girl10/dac38b47-3e74-477f-b999-b273f7925aba-vsco.webp",
  },
  {
    front: "girl11/img-7254-vsco.webp",
    back: "girl11/img-7255-vsco.webp",
  },
  {
    front: "girl11/img-7256-vsco.webp",
    back: "girl11/img-7257-vsco.webp",
  },
  {
    front: "girl12/06e7c7fd-3769-4325-959d-d885127024b1.webp",
    back: "girl12/fd734c18-5f23-4d61-93dd-f9d0ceb26ee1.webp",
  },
  {
    front: "girl13/3a90b635-601d-4daa-af7a-4889618dc650.webp",
    back: "girl13/44a0925a-8e4e-46c6-9444-d3ae3c6082ba.webp",
  },
];

const SWIPE_THRESHOLD = 50;
const GAP = 20;
const VISIBLE_DESKTOP = 3;
/** Matches the `calc(100% - 4rem)` card width in the max-width:768px block. */
const MOBILE_INSET = 64;
const MOBILE_QUERY = "(max-width: 768px)";

type Metrics = { cardWidth: number; trackWidth: number; viewportWidth: number };

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  // Set when a touch ends as a swipe, so the tap doesn't also flip the card.
  const swiped = useRef(false);

  // Card and track widths are driven from the measured viewport rather than
  // percentages, so the track can be sized in pixels without the cards
  // resolving their own widths against it.
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const viewportWidth = viewport.offsetWidth;
    if (viewportWidth === 0) return;

    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    const cardWidth = isMobile
      ? viewportWidth - MOBILE_INSET
      : (viewportWidth - (VISIBLE_DESKTOP - 1) * GAP) / VISIBLE_DESKTOP;

    setMetrics({
      cardWidth,
      trackWidth: looks.length * (cardWidth + GAP),
      viewportWidth,
    });
  }, []);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  // Clamped at 0 so the first cards sit flush left instead of leaving a gap.
  const translate = metrics
    ? Math.max(
        0,
        currentIndex * (metrics.cardWidth + GAP) -
          (metrics.viewportWidth / 2 - metrics.cardWidth / 2),
      ) * -1
    : 0;

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(looks.length - 1, index)));
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards((previous) => {
      const next = new Set(previous);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    swiped.current = false;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) <= SWIPE_THRESHOLD) return;
    swiped.current = true;
    goTo(currentIndex + (distance < 0 ? 1 : -1));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="pf-section">
      <div className="max-w-6xl mx-auto px-6">
        <p className="pf-eyebrow">My work</p>
        <h2 className="pf-title">Portfolio</h2>
        <hr className="pf-rule" />
      </div>

      <div
        className="pf-carousel"
        role="group"
        aria-roledescription="carousel"
        aria-label="Portfolio looks"
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className="pf-arrow pf-prev"
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous look"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="pf-viewport"
          ref={viewportRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="pf-track"
            ref={trackRef}
            style={{
              transform: `translateX(${translate}px)`,
              ...(metrics ? { width: `${metrics.trackWidth}px` } : null),
            }}
          >
            {looks.map((look, index) => {
              const isFlipped = flippedCards.has(index);
              const number = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={look.front}
                  className="pf-card"
                  data-active={index === currentIndex}
                  style={
                    metrics
                      ? {
                          flex: `0 0 ${metrics.cardWidth}px`,
                          maxWidth: `${metrics.cardWidth}px`,
                        }
                      : undefined
                  }
                >
                  <button
                    type="button"
                    className="pf-frame"
                    data-flipped={isFlipped}
                    aria-pressed={isFlipped}
                    aria-label={`Look ${number} — ${
                      isFlipped ? "showing the process shot" : "show the process shot"
                    }`}
                    tabIndex={index === currentIndex ? 0 : -1}
                    onClick={() => {
                      // Ignore the tap that ended a swipe.
                      if (swiped.current) {
                        swiped.current = false;
                        return;
                      }
                      toggleFlip(index);
                    }}
                  >
                    <div className="pf-flipper">
                      <div className="pf-face">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${BLOB_BASE}/${look.front}`}
                          alt={`Look ${number} — finished makeup look`}
                          decoding="async"
                        />
                      </div>
                      <div className="pf-face pf-face-back">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${BLOB_BASE}/${look.back}`}
                          alt={`Look ${number} — during application`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <span className="pf-pill">Tap to flip</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="pf-arrow pf-next"
          onClick={() => goTo(currentIndex + 1)}
          disabled={currentIndex === looks.length - 1}
          aria-label="Next look"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="pf-dots">
          {looks.map((look, index) => (
            <button
              key={look.front}
              type="button"
              className="pf-dot"
              data-active={index === currentIndex}
              onClick={() => goTo(index)}
              aria-label={`Go to look ${String(index + 1).padStart(2, "0")}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-[#2c1810]/50 mb-6">
          Follow along for daily inspiration and behind-the-scenes moments.
        </p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 border border-[#3b0c0d] text-[#3b0c0d] text-xs tracking-widest uppercase hover:bg-[#3b0c0d] hover:text-[#fdfae3] transition-colors"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
