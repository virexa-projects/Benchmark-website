import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site";
import { PortfolioSection } from "@/components/portfolio-section";
import { MobileDock } from "@/components/mobile-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Installed Gallery — Real Name Boards & Signage | Benchmark Coimbatore" },
      {
        name: "description",
        content:
          "Browse real Benchmark installations: 3D and flat letter name boards in stainless steel 304, PVD gold, copper, ACP and cast acrylic in Coimbatore.",
      },
      { property: "og:title", content: "Installed Gallery — Benchmark Name Boards" },
      {
        property: "og:description",
        content:
          "Real installed name boards and signage crafted by Benchmark in Coimbatore since 2012.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div className="min-h-screen bg-white text-stone-900 pb-14 md:pb-0">
      <SiteHeader />

      {/* Gallery Header — Exact max-w-7xl px-5 lg:px-10 alignment with top nav */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-8 lg:px-10 lg:pt-16">
        <ScrollReveal direction="up" delay={50}>
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#FFCB00]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#8A6D00]">
              Installed Portfolio
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <h1 className="mt-2.5 max-w-3xl font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            Gallery Grid
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={250}>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-500">
            Handcrafted architectural name boards installed across Coimbatore and Tamil Nadu. Hover over any board to view its installation location, or click to enlarge.
          </p>
        </ScrollReveal>
      </section>

      {/* Full Interactive Portfolio — Exact max-w-7xl px-5 lg:px-10 */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
        <PortfolioSection />
      </section>

      <SiteFooter />
      <MobileDock />
    </div>
  );
}

