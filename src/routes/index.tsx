import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { MobileDock } from "@/components/mobile-dock";
import { ArrowRight } from "lucide-react";

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
  const [isNight, setIsNight] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-amber-500 selection:text-stone-950 flex flex-col">
      <SiteHeader />

      {/* Hero Section — Perfectly Aligned with Top Nav & Full-Bleed Right Half */}
      <section
        className={`relative flex-1 flex flex-col justify-center overflow-hidden transition-colors duration-700 ease-in-out min-h-[calc(100vh-5rem)] ${
          isNight
            ? "bg-[#0E0F12] text-white"
            : "bg-white text-stone-900"
        }`}
      >
        {/* Soft Ambient Warm Lighting Radial Glow — only in night mode */}
        {isNight && (
          <>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none bg-amber-500/15 opacity-100" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-stone-800/30 opacity-100" />
          </>
        )}

        {/* Content Container aligned identically with Top Nav */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-10 py-10 lg:py-16 my-auto">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Exactly Aligned with Logo */}
            <div className="lg:col-span-6 max-w-xl">
              {/* Top Eyebrow Badge */}
              <div className="animate-hero-1 inline-flex items-center gap-2.5 rounded-full border border-[#FFCB00]/70 bg-[#FFCB00]/20 px-4 py-1.5 shadow-2xs backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCB00] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#FFCB00]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00] dark:text-[#FFCB00]">
                  The Standard for Signage · Est. 2015
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="animate-hero-2 mt-6 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-balance text-stone-950 dark:text-white">
                Every brand deserves signage that reflects its{" "}
                <span className="text-[#FFCB00] font-extrabold">
                  true value
                </span>
                .
              </h1>

              {/* Narrative Body Copy */}
              <p className="animate-hero-3 mt-5 text-base sm:text-[17px] leading-[1.68] text-stone-600 dark:text-stone-300 font-normal">
                Our work combines design, durability, and innovation to create signage that captures attention and builds trust. Using superior materials and modern finishes, each board is crafted to stand out with sophistication — offered in both illuminated (LED) and non-lit designs.
              </p>

              {/* CTAs: Logo Yellow #FFCB00 Enquire Now & Ghost Gallery */}
              <div className="animate-hero-4 mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  hash="quote-form"
                  className="group relative inline-flex items-center justify-center rounded-full bg-[#FFCB00] hover:bg-[#E5B700] px-7 py-4 text-sm font-bold text-stone-950 shadow-md shadow-[#FFCB00]/30 transition-all hover:shadow-lg hover:shadow-[#FFCB00]/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Enquire Now</span>
                </Link>

                <Link
                  to="/gallery"
                  className="group inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/90 dark:bg-stone-900/80 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-stone-900 dark:text-white transition-all hover:bg-stone-50 dark:hover:bg-stone-800 hover:border-[#FFCB00] dark:hover:border-[#FFCB00] active:scale-[0.98]"
                >
                  <span>View Gallery</span>
                  <ArrowRight className="size-4 text-[#B38800] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Luxury Stat Modules with Subtle Dividers */}
              <div className="animate-hero-5 mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-stone-200/90 dark:border-stone-800 pt-7">
                <div className="flex flex-col">
                  <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white">
                    Since 2015
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Coimbatore Atelier
                  </p>
                </div>

                <div className="flex flex-col border-l border-stone-200/80 dark:border-stone-800 pl-4 sm:pl-6">
                  <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white">
                    500+
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Bespoke Boards
                  </p>
                </div>

                <div className="flex flex-col border-l border-stone-200/80 dark:border-stone-800 pl-4 sm:pl-6">
                  <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white">
                    100%
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    In-House Craft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full-Bleed Edge-to-Edge Image on Desktop, seamlessly taking 50% */}
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 min-h-[460px] sm:min-h-[560px] lg:min-h-full h-full overflow-hidden bg-stone-950 border-t lg:border-t-0 lg:border-l border-stone-200/80 dark:border-stone-800/80">
          <HeroSlideshow isNight={isNight} setIsNight={setIsNight} />
        </div>
      </section>

      {/* Sticky Mobile Dock */}
      <MobileDock />
    </div>
  );
}

