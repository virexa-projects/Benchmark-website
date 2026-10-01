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

type FitMode = "cover" | "contain";

function Home() {
  const [slides] = useSlides();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fitMode, setFitMode] = useState<FitMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("benchmark_hero_fit_mode") as FitMode | null;
      if (saved === "cover" || saved === "contain") return saved;
    }
    return "cover";
  });
  const touchStartX = useRef<number | null>(null);

  const handleSetFitMode = (mode: FitMode) => {
    setFitMode(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("benchmark_hero_fit_mode", mode);
    }
  };

  // Guarantee valid slides list with fallback
  const rawList = slides && slides.length > 0 ? slides : SLIDES;
  const activeSlides =
    rawList.filter((s) => Boolean(s && s.img)).length > 0
      ? rawList.filter((s) => Boolean(s && s.img))
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

  const objectFitClass =
    fitMode === "cover"
      ? "object-cover"
      : "object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]";

  return (
    <div className="h-screen h-[100dvh] max-h-screen overflow-hidden bg-[#FFFDF4] text-foreground antialiased selection:bg-amber-500 selection:text-stone-950 flex flex-col">
      <SiteHeader />

      {/* Main Home Showcase Section — Matches header width with visible soft shadow */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-3 sm:py-4 pb-18 md:pb-4 min-h-0 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl flex flex-col items-center px-0 sm:px-4 md:px-10 justify-center min-h-0 py-2">
          {/* Showcase Card Wrapper with white border/space like portfolio card */}
          <div className="w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] max-h-[calc(100dvh-8.5rem)] md:max-h-[calc(100vh-7.5rem)] rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-white p-2 sm:p-2.5 md:p-2 border border-stone-200/90 shadow-2xs">
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
              {/* Photographic Slides: Image fits completely to container without cropping */}
              {activeSlides.map((slide, index) => {
                const isActive = index === safeIndex;
                return (
                  <div
                    key={slide.id || index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    {/* Ambient blurred backdrop that seamlessly fills any pillar or letterbox spaces */}
                    {fitMode !== "cover" && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src={slide.img}
                          alt=""
                          className="size-full object-cover blur-2xl opacity-75 scale-110 saturate-125 brightness-95"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                      </div>
                    )}

                    {/* Main image fits based on chosen mode: Fit Layout (cover), Contain, or Stretch (fill) */}
                    <img
                      src={slide.img}
                      alt={slide.title || "Benchmark Signage"}
                      className={`relative z-10 size-full object-center ${objectFitClass}`}
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    {/* Gentle base gradient for contrast with controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                  </div>
                );
              })}

              {/* Fit Mode Switcher: Fit Layout (Cover) / Contain / Stretch */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center rounded-xl bg-black/65 backdrop-blur-md p-1 border border-white/20 text-[10px] sm:text-xs font-semibold text-white/80 shadow-lg">
                <button
                  type="button"
                  onClick={() => handleSetFitMode("cover")}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${fitMode === "cover"
                    ? "bg-amber-400 text-stone-950 font-bold shadow-xs"
                    : "hover:text-white hover:bg-white/10"
                    }`}
                  title="Fit to Layout: Fill completely edge-to-edge with no empty space"
                >
                  Fit Layout
                </button>
                <button
                  type="button"
                  onClick={() => handleSetFitMode("contain")}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${fitMode === "contain"
                    ? "bg-amber-400 text-stone-950 font-bold shadow-xs"
                    : "hover:text-white hover:bg-white/10"
                    }`}
                  title="Contain: Show full uncropped photo with ambient glow"
                >
                  Contain
                </button>
              </div>

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
