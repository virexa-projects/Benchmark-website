import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import slide1 from "@/assets/work/1000038064.jpg.jpeg";
import slide2 from "@/assets/work/1000038071.jpg.jpeg";
import slide3 from "@/assets/work/1000038073.jpg.jpeg";
import slide4 from "@/assets/work/1000038085.jpg.jpeg";
import slide5 from "@/assets/work/1000038090.jpg.jpeg";
import slide6 from "@/assets/work/1000098713.jpg.jpeg";
import slide7 from "@/assets/work/1000098716.jpg.jpeg";
import slide8 from "@/assets/work/1000315704.jpg.jpeg";
import slide9 from "@/assets/work/1000331144.jpg.jpeg";
import slide10 from "@/assets/work/1000342891.jpg.jpeg";

export interface SlideItem {
  id: string;
  img: string; // Desktop / Primary photo
  mobileImg?: string; // Dedicated Mobile photo (optional)
  title: string;
  category: string;
  materials: string;
  location: string;
  lighting: string;
}

export const SLIDES: SlideItem[] = [
  {
    id: "s1",
    img: "/benchmark/bm_08_landscape.jpg",
    mobileImg: "/benchmark/bm_29_portrait.jpg",
    title: "வாழ்க வளமுடன் — VR Illam",
    category: "Residential & Villas",
    materials: "3D Mirror Gold PVD",
    location: "Race Course, Coimbatore",
    lighting: "Warm Golden Backlit",
  },
  {
    id: "s2",
    img: "/benchmark/bm_10_landscape.jpg",
    mobileImg: "/benchmark/bm_09_portrait.jpg",
    title: "Fliqzo Sign",
    category: "Retail & Showrooms",
    materials: "PVD Brass Gold Rim",
    location: "RS Puram, Coimbatore",
    lighting: "Warm Golden Backlit",
  },
  {
    id: "s3",
    img: "/benchmark/bm_02_landscape.jpg",
    mobileImg: "/benchmark/bm_11_portrait.jpg",
    title: "Dr. Kind's Clinic & Medical Care",
    category: "Hospitals & Healthcare",
    materials: "3D High-Gloss Acrylic Letters",
    location: "Avinashi Road, Coimbatore",
    lighting: "Non-Illuminated Daylight",
  },
  {
    id: "s4",
    img: "/benchmark/bm_04_landscape.jpg",
    mobileImg: "/benchmark/bm_26_portrait.jpg",
    title: "Sri Siddhartha Convention Center (SSCC)",
    category: "Hotels & Convention Halls",
    materials: "Warm Golden Backlit Monument",
    location: "Salem — Coimbatore Highway",
    lighting: "Warm Halo Diffused",
  },
  {
    id: "s5",
    img: "/benchmark/bm_05_landscape.jpg",
    mobileImg: "/benchmark/bm_30_portrait.jpg",
    title: "Gainup & Tech Park Monolith",
    category: "Corporate & Offices",
    materials: "3D Precision Channel Letters",
    location: "Saravanampatti Tech Zone, Coimbatore",
    lighting: "Pure Cool Backlit",
  },
  {
    id: "s6",
    img: "/benchmark/bm_06_landscape.jpg",
    mobileImg: "/benchmark/bm_35_portrait.jpg",
    title: "Spintex & Textile Monument",
    category: "Garments & Textiles",
    materials: "Weatherproof ACP & 3D Titanium Gold",
    location: "Tiruppur — Coimbatore Textile Hub",
    lighting: "Illuminated Halo Glow",
  },
  {
    id: "s7",
    img: "/benchmark/bm_07_landscape.jpg",
    mobileImg: "/benchmark/bm_09_portrait.jpg",
    title: "Heritage Emblem Sign",
    category: "Temple & Heritage",
    materials: "Natural Brass & Gold Finish",
    location: "Kovaipudur, Coimbatore",
    lighting: "Warm Golden Backlit",
  },
  {
    id: "s8",
    img: "/benchmark/bm_12_landscape.jpg",
    mobileImg: "/benchmark/bm_29_portrait.jpg",
    title: "Giripriya Teakwood & Gold",
    category: "Residential & Villas",
    materials: "Teakwood Finish & PVD Gold",
    location: "Saibaba Colony, Coimbatore",
    lighting: "Non-Illuminated Daylight",
  },
];

import { useSlides } from "@/lib/content-store";

interface HeroSlideshowProps {
  isNight?: boolean;
  setIsNight?: (v: boolean) => void;
}

export function HeroSlideshow({ isNight = false }: HeroSlideshowProps) {
  const [slides] = useSlides();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 35, isHovering: false });
  const cardRef = useRef<HTMLDivElement>(null);

  // Guarantee valid slides list with fallback
  const rawList = slides && slides.length > 0 ? slides : SLIDES;
  const activeSlides = rawList.filter((s) => Boolean(s && s.img)).length > 0
    ? rawList.filter((s) => Boolean(s && s.img))
    : SLIDES;

  // Auto slide smoothly every 5.5s
  useEffect(() => {
    if (isPaused || activeSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, activeSlides.length]);

  const safeIndex = currentIndex >= activeSlides.length ? 0 : currentIndex;
  const current = activeSlides[safeIndex] || activeSlides[0] || SLIDES[0];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, isHovering: true });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setMousePos({ x: 50, y: 35, isHovering: false });
  };

  return (
    <div
      ref={cardRef}
      className="absolute inset-0 w-full h-full overflow-hidden group select-none bg-stone-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive Specular Glare Shimmer — ONLY ON HOVER */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none z-30 transition-opacity duration-300 ${
          mousePos.isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 30%, transparent 65%)`,
          }}
        />
      </div>

      {/* Edge-to-Edge Photographic Slides (Full Cover) */}
      {activeSlides.map((slide, index) => {
        const isActive = index === safeIndex;
        return (
          <div
            key={slide.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <picture className="size-full">
              {slide.mobileImg && (
                <source media="(max-width: 768px)" srcSet={slide.mobileImg} />
              )}
              <img
                src={slide.img}
                alt={slide.location || slide.title || "Benchmark Signage"}
                className={`size-full object-cover transition-transform duration-7000 ease-out brightness-100 contrast-[1.04] saturate-[1.08] ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </picture>

            {/* Subtle Cinematic Vignette at Base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Navigation Arrows: ONLY DISPLAYED ON HOVER */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xl transition-all hover:bg-black hover:scale-110 active:scale-95 border border-white/30 shadow-2xl"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xl transition-all hover:bg-black hover:scale-110 active:scale-95 border border-white/30 shadow-2xl"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* ONLY LOCATION TEXT DISPLAYED ON IMAGE */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/25 px-4.5 py-2.5 sm:px-5 sm:py-3 text-white shadow-2xl">
          <MapPin className="size-4 text-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
            {current?.location || "Coimbatore, Tamil Nadu"}
          </span>
        </div>
      </div>
    </div>
  );
}
