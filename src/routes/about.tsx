import { createFileRoute } from "@tanstack/react-router";
import {
  FAQSection,
  SiteFooter,
  SiteHeader,
  WHATSAPP_LINK,
  PHONE,
  ADDRESS,
  GOOGLE_MAPS_LINK,
} from "@/components/site";
import { MobileDock } from "@/components/mobile-dock";
import { ProprietorSection } from "@/components/proprietor-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Award,
  ShieldCheck,
  Shield,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  Compass,
  Eye,
  Star,
  Users,
  Building2,
  UserCheck,
} from "lucide-react";

import w4 from "@/assets/work/w4.jpg";
import w5 from "@/assets/work/w5.jpg";
import BM from "@/assets/work/BM.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Benchmark Name Boards | The Standard for Signage" },
      {
        name: "description",
        content:
          "Benchmark — Name Boards — founded in 2015 by B. Kannan, MBA in Coimbatore. Transforming ordinary signboards into impactful identity solutions for homes and businesses.",
      },
      {
        property: "og:title",
        content: "About Benchmark Name Boards — The Standard for Signage",
      },
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

const ABOUT_STATS = [
  {
    stat: "10+",
    title: "Years of experience in making premium quality signage only.",
    desc: "",
  },
  {
    stat: "1000+",
    title: "Signages successfully installed.",
    desc: "",
  },
  {
    stat: "0",
    title: "Dissatisfied Customers in Benchmark.",
    desc: "",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#FFFDF4] text-stone-900 pb-14 md:pb-0">
      <SiteHeader />

      {/* Hero: Centered About Us & Four Stat Cards Matching Image */}
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-16 lg:px-10 lg:pt-22">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          {/* Image - 8 Columns */}
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-x md:col-span-8">
            <img
              src={BM}
              alt="Benchmark workshop floor with 3D letters being fabricated"
              className="aspect-[6/3] w-full object-fit transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content - 4 Columns */}
          <div className="flex flex-col items-start justify-center md:col-span-4">
            <ScrollReveal direction="up" delay={50}>
              <h1 className="font-display text-2xl font-bold leading-relaxed text-stone-950">
                Benchmark-Name Boards
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120}>
              <div className="mt-1 space-y-1 text-sm leading-relaxed text-stone-600">
                <p>The Standard for Signage.</p>

                <p>
                  Every brand deserves signage that reflects its true value. Our
                  work combines design, durability, and innovation to create
                  signage that captures attention and builds trust.
                </p>

                <ul className="mt-3 list-inside list-disc space-y-4 text-sm leading-relaxed text-stone-600">
                  <li>
                    Using superior materials and modern finishes, each board is
                    crafted to stand out with sophistication.
                  </li>

                  <li>
                    Designed to enhance visibility, reflect your personal style,
                    and ensure long-lasting durability.
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-12 md:items-center pt-24">
          {/* Image - 8 Columns */}

          {/* Content - 4 Columns */}
          <div className="flex flex-col items-start justify-center md:col-span-4">
            <ScrollReveal direction="up" delay={120}>
              <div className="mt-1 space-y-1 text-sm leading-relaxed text-stone-600">
                <p>
                  we offer both illuminated (LED) and non-lit signage making &
                  installing for the following segments:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-4 text-sm leading-relaxed text-stone-600">
                  <li>
                    Garment Showroom Signage 
                  </li>
                  <li>
                    Hospitals Signage 
                  </li>
                  <li>
                    Hotel Signage 

                  </li>
                  <li>
                    Jewelry showroom Signage 
                  </li>
                  <li>
                    Software Companies Signage

                  </li>
                  <li>
                    Commercial shops Signage 

                  </li>
                  <li>
                    Corporate Signage
                  </li>
                  <li>
                    Temple Signage
                  </li>
                  <li>
                    Residential & more
                  </li>

                </ul>
              </div>
            </ScrollReveal>
          </div>
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-x md:col-span-8">
            <img
              src={BM}
              alt="Benchmark workshop floor with 3D letters being fabricated"
              className="aspect-[6/3] w-full object-fit transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

         <ProprietorSection />

        {/* Four Cards Matching Image */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ABOUT_STATS.map((item, index) => {
            // const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                direction="up"
                delay={100 + index * 70}
              >
                <div className="relative h-full rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all hover:shadow-md hover:border-stone-200">
                  {/* Top-Right Small Icon Box */}
                  {/* <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex size-9 sm:size-10 items-center justify-center rounded-xl sm:rounded-2xl border border-stone-200/80 bg-stone-50/60 text-stone-500">
                    <Icon className="size-4.5" />
                  </div> */}

                  {/* Left-Aligned Number, Title, and Description */}
                  <div className="pr-8 pt-1">
                    <span className="font-display text-2xl font-bold text-stone-950 leading-relaxed block">
                      {item.stat}
                    </span>
                    <h2 className="mt-3 font-display text-sm font-bold text-stone-950 leading-relaxed leading-snug">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="up" delay={100}>
            <div className="h-full rounded-3xl  bg-white p-8 lg:p-10 shadow-xs hover:shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D6B981]/20 text-[#8A6D00] mb-6">
                <Eye className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold leading-relaxed text-stone-950">
                Our Vision
              </h3>
              <h2 className="mt-2 font-display text-sm font-bold text-stone-950 leading-relaxed leading-snug">
                To be the most trusted name in premium signage, setting new
                standards in quality, elegance, and visibility.
              </h2>
              {/* <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                Setting new standards in quality, elegance, and visibility for
                residential and architectural name boards.
              </p> */}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="h-full rounded-3xl  bg-white p-8 lg:p-10 shadow-xs hover:shadow-xs">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D6B981]/20 text-[#8A6D00] mb-6">
                <Target className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold leading-relaxed text-stone-950">
                Our Mission
              </h3>
              <p className="mt-2 font-display text-sm font-bold text-stone-950 leading-relaxed leading-snug">
                Creating signage that reflects excellence, enhances visibility,
                and builds lasting brand value.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About the Proprietor: B. Kannan, MBA */}
     

      {/* <FAQSection /> */}
      <SiteFooter />
      <MobileDock />
    </div>
  );
}
