import { createFileRoute } from "@tanstack/react-router";
import { FAQSection, SiteFooter, SiteHeader, WHATSAPP_LINK, PHONE, ADDRESS, GOOGLE_MAPS_LINK } from "@/components/site";
import { MobileDock } from "@/components/mobile-dock";
import { ProprietorSection } from "@/components/proprietor-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Award, ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight, Clock, Target, Compass, Eye, Star } from "lucide-react";

import w4 from "@/assets/work/w4.jpg";
import w5 from "@/assets/work/w5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Benchmark Name Boards | The Standard for Signage" },
      {
        name: "description",
        content:
          "Benchmark — Name Boards — founded in 2015 by B. Kannan, MBA in Coimbatore. Transforming ordinary signboards into impactful identity solutions for homes and businesses.",
      },
      { property: "og:title", content: "About Benchmark Name Boards — The Standard for Signage" },
      {
        property: "og:description",
        content:
          "Founded in 2015 by B. Kannan, MBA with over 7 years prior advertising industry experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "100% In-House Precision Craftsmanship",
    desc: "Design, CNC fiber laser cutting, letter depth returns, wiring and hand-finishing all happen inside our Sowripalayam Road workshop. We never outsource quality.",
  },
  {
    n: "02",
    title: "Zero Compromise on Raw Metal",
    desc: "We exclusively specify authentic SS 304 marine alloy (high nickel) and high-grade PVD coatings to ensure your signage remains pristine against weather and sun exposure.",
  },
  {
    n: "03",
    title: "Legibility is the True Luxury",
    desc: "A name board must be instantly legible from a distance in daylight as well as at dusk. We obsess over kerning, letter depth, bevel angles, and optical LED diffusion.",
  },
  {
    n: "04",
    title: "Direct Founder Accountability",
    desc: "When you contact Benchmark, you consult directly with founder B. Kannan, MBA. No sales brokers, no middleman markups — just honest atelier expertise.",
  },
];

const CRAFT_STEPS = [
  {
    step: "01",
    title: "Requirement & 3D CAD Render",
    desc: "We measure your wall or entrance space, check wiring points, and prepare a photorealistic 3D proof showing your exact typography and illuminated finish.",
  },
  {
    step: "02",
    title: "Fiber Laser CNC Profiling",
    desc: "Computer-controlled fiber lasers cut letters with micron precision through SS 304, acrylic, or heavy ACP without burrs or jagged edges.",
  },
  {
    step: "03",
    title: "Hand-Crafted 3D Depth & Polishing",
    desc: "Letters are hand-formed with dimensional returns and hand-polished to mirror gold, hairline brushed, or custom matte patinas.",
  },
  {
    step: "04",
    title: "Weatherproof IP67 LED Assembly",
    desc: "Silicone-sealed LED diodes are installed and tested for continuous burn-in to ensure flawless illumination before leaving the workshop.",
  },
  {
    step: "05",
    title: "Concealed Clean Installation",
    desc: "Our workshop team mounts the board using concealed anchors or brass standoffs with zero wall damage and neat concealed wiring.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-white text-stone-900 pb-14 md:pb-0">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-14 pb-14 lg:px-10 lg:pt-20">
        <ScrollReveal direction="up" delay={50}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6B981]/70 bg-[#D6B981]/20 px-3.5 py-1 text-xs">
            <Award className="size-3.5 text-[#8A6D00] dark:text-[#D6B981]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00] dark:text-[#D6B981]">Our Heritage & Mission</span>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance text-stone-950">
            The Standard for Signage.
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={250}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-stone-600 font-normal">
            Every brand deserves signage that reflects its <span className="text-[#D6B981] font-bold">true value</span>. Our work combines design, durability, and innovation to create signage that captures attention and builds trust.
          </p>
        </ScrollReveal>
      </section>

      {/* Vision & Mission Cards */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="up" delay={100}>
            <div className="h-full rounded-3xl border border-stone-200 bg-stone-50/70 p-8 lg:p-10 shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D6B981]/20 text-[#8A6D00] mb-6">
                <Eye className="size-6" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00]">Our Vision</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
                To be the most trusted name in premium signage.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                Setting new standards in quality, elegance, and visibility for residential and architectural name boards.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="h-full rounded-3xl border border-stone-200 bg-stone-50/70 p-8 lg:p-10 shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D6B981]/20 text-[#8A6D00] mb-6">
                <Target className="size-6" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00]">Our Mission</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
                Reflecting excellence and building lasting brand value.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                Creating signage that reflects excellence, enhances visibility, and builds lasting brand value for homes and enterprises.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workshop Images */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="up" delay={100}>
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xs">
              <img
                src={w4}
                alt="Benchmark workshop floor with 3D letters being fabricated"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <p className="font-display font-bold text-stone-950">In-House Master Channel Fabrication</p>
                <p className="text-xs text-stone-500 mt-1">Hand-bending deep returns for 3D illuminated letters at our Sowripalayam workshop in Coimbatore.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xs">
              <img
                src={w5}
                alt="Completed stainless steel name board"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <p className="font-display font-bold text-stone-950">Finished SS 304 Satin Signage</p>
                <p className="text-xs text-stone-500 mt-1">Hand-inspected for uniform hairline grain, smooth bevels, and zero weld blemishes.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section-rule bg-stone-50/70 border-t border-stone-200 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal direction="up" delay={50}>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00]">Our Code of Craft</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
                  Four Principles We Never Break
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  Using superior materials and modern finishes, each board is crafted to stand out with sophistication, durability, and legibility.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {PRINCIPLES.map((p, idx) => (
                <ScrollReveal key={p.n} direction="up" delay={idx * 100}>
                  <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
                    <span className="font-mono text-xs font-bold text-[#8A6D00]">{p.n}</span>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-stone-950">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600">
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section-rule bg-white border-t border-stone-200 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <ScrollReveal direction="up" delay={50}>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00]">How We Work</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
                From Consultation to Installation
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                A transparent, step-by-step process designed for complete peace of mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CRAFT_STEPS.map((s, idx) => (
              <ScrollReveal key={s.step} direction="up" delay={idx * 80}>
                <div className="h-full rounded-2xl border border-stone-200 bg-stone-50/60 p-5 relative flex flex-col justify-between shadow-2xs">
                  <div>
                    <span className="flex size-8 items-center justify-center rounded-lg bg-[#D6B981]/20 text-xs font-bold text-[#8A6D00]">
                      {s.step}
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-stone-950">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About the Proprietor: B. Kannan, MBA */}
      <ProprietorSection />

      {/* <FAQSection /> */}
      <SiteFooter />
      <MobileDock />
    </div>
  );
}
