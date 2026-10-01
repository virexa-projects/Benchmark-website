import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site";
import { PortfolioSection } from "@/components/portfolio-section";
import { MobileDock } from "@/components/mobile-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
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
    <div className="min-h-screen bg-[#FFFDF4] text-stone-900">
      <SiteHeader />

      {/* Gallery Header — Exact max-w-7xl px-5 lg:px-10 alignment with top nav */}
      <section className="mx-auto max-w-7xl px-5 pt-8 pb-8 lg:px-10 lg:pt-10">
        {/* <ScrollReveal direction="up" delay={50}>
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#D6B981]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#8A6D00]">
              Installed Portfolio
            </span>
          </div>
        </ScrollReveal> */}

        <ScrollReveal direction="up" delay={150}>
          <h1 className="mt-2.5 max-w-3xl font-display text-2xl  font-bold leading-relaxed text-stone-900">
            Crafted Signage. Distinctive Spaces.
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={250}>
          <p className="mt-2  text-sm leading-relaxed text-stone-600">
            Explore our collection of premium custom architectural signage, thoughtfully designed to elevate every space.
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

