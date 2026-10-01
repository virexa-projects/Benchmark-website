import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site";
import { MobileDock } from "@/components/mobile-dock";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "@/components/hero-slideshow";
import { useSlides } from "@/lib/content-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benchmark — Name Boards — | The Standard for Signage | Coimbatore" },
      {
        name: "description",
        content:
          "Benchmark — Name Boards — The Standard for Signage. Combining design, durability, and innovation to create premium illuminated (LED) and non-lit signage in Coimbatore since 2015.",
      },
      { property: "og:title", content: "Benchmark — Name Boards — | The Standard for Signage" },
      {
        property: "og:description",
        content:
          "Every brand deserves signage that reflects its true value. Premium custom name boards crafted by B. Kannan, MBA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [slides] = useSlides();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Guarantee valid slides list with fallback
  const rawList = slides && slides.length > 0 ? slides : SLIDES;
  const activeSlides =
    rawList.filter((s) => Boolean(s && (s.img || s.mobileImg))).length > 0
      ? rawList.filter((s) => Boolean(s && (s.img || s.mobileImg)))
      : SLIDES;

  const safeIndex = currentIndex >= activeSlides.length ? 0 : currentIndex;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);

  // Auto slide smoothly every 5.5s
  useEffect(() => {
    if (isPaused || activeSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, activeSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlides.length]);

  return (
    <div className="h-screen h-[100dvh] max-h-screen overflow-hidden bg-[#FFFDF4] text-foreground antialiased selection:bg-amber-500 selection:text-stone-950 flex flex-col">
      <SiteHeader />

      {/* Main Home Showcase Section — Matches header width with visible soft shadow */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-3 sm:py-4 pb-18 md:pb-4 min-h-0 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl flex flex-col items-center px-0 sm:px-4 md:px-10 justify-center min-h-0 py-2">
          {/* Showcase Card Wrapper with white border/space like portfolio card */}
          <div className="w-full aspect-[2/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[calc(100dvh-8.5rem)] md:max-h-[calc(100vh-7.5rem)] rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-white p-2 sm:p-2.5 md:p-2 border border-stone-200/90 shadow-2xs">
            <div
              className="relative size-full rounded-xl sm:rounded-2xl lg:rounded-[24px] overflow-hidden bg-stone-900 select-none group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                if (touch) {
                  touchStartX.current = touch.clientX;
                }
              }}
              onTouchEnd={(e) => {
                const changedTouch = e.changedTouches[0];
                if (touchStartX.current !== null && changedTouch) {
                  const diff = touchStartX.current - changedTouch.clientX;
                  if (diff > 50) nextSlide();
                  else if (diff < -50) prevSlide();
                }
                touchStartX.current = null;
              }}
            >
              {/* Photographic Slides: Image fits layout edge-to-edge */}
              {activeSlides.map((slide, index) => {
                const isActive = index === safeIndex;
                const desktopPhoto = slide.img || slide.mobileImg || "";
                const mobilePhoto = slide.mobileImg || slide.img || "";

                return (
                  <div
                    key={slide.id || index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    {/* Main image fits layout edge-to-edge with separate desktop & mobile support */}
                    <picture className="relative z-10 size-full block">
                      {mobilePhoto && (
                        <source media="(max-width: 767px)" srcSet={mobilePhoto} />
                      )}
                      <img
                        src={desktopPhoto}
                        alt={slide.title || "Benchmark Signage"}
                        className="size-full object-cover object-center"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </picture>

                    {/* Gentle base gradient for contrast with controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                  </div>
                );
              })}

              {/* Prev and Next Buttons INSIDE slide show at the bottom center */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={prevSlide}
                  className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-black/85 text-white hover:bg-black border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer backdrop-blur-md"
                >
                  <ChevronLeft className="size-5 sm:size-6" />
                </button>

                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={nextSlide}
                  className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-black/85 text-white hover:bg-black border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer backdrop-blur-md"
                >
                  <ChevronRight className="size-5 sm:size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile Dock */}
      <MobileDock />
    </div>
  );
}
