import w4 from "@/assets/work/w4.jpg";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProprietorSection() {
  return (
    <section className="section-rule bg-[#5D5D5D] text-white py-20 lg:py-28">
      {/* Exact max-w-7xl px-5 lg:px-10 container matching top nav */}
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Left Column: Proprietor Narrative & Credentials */}
          <div className="lg:col-span-6 xl:col-span-7">
            <ScrollReveal direction="up" delay={50}>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D6B981]">
                About the Proprietor
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                B. Kannan, MBA
              </h2>
              <p className="text-sm font-semibold text-[#D6B981] mt-1">
                Founder, Benchmark — Name Boards —
              </p>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-stone-300">
                With over <strong>7 years of prior experience in the creative advertising industry</strong>, B. Kannan established Benchmark in 2015 with a vision to create premium-quality signage that combines creativity, durability, and modern aesthetics.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
                His expertise in creating customised name boards helps transform ordinary signboards into impactful identity solutions for homes and businesses. Under his leadership, Benchmark has built a reputation for elegant designs, quality craftsmanship, and customer-focused customization.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-stone-800 pt-6 text-xs text-stone-300">
                <div>
                  <p className="font-bold text-white text-sm">Creative Advertising Roots</p>
                  <p className="text-stone-400 mt-1">7+ years advertising background ensuring impactful visual identity.</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Direct Proprietor Guidance</p>
                  <p className="text-stone-400 mt-1">Consult directly with B. Kannan, MBA for customized 3D design proof.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Single High-End Proprietor Image Showcase */}
          <div className="lg:col-span-6 xl:col-span-5">
            <ScrollReveal direction="up" delay={150}>
              <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-800 bg-stone-900/60 shadow-2xl transition-all duration-300 hover:border-[#D6B981]/40">
                <img
                  src={w4}
                  alt="B. Kannan, MBA — Founder & Master Craftsman at Benchmark Name Boards"
                  className="aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle gradient overlay at base for luxury feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                
                {/* Proprietor Identification Label */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
                  <div className="rounded-xl border border-stone-700/60 bg-black/70 backdrop-blur-md px-4 py-2.5">
                    <p className="text-xs font-semibold text-white tracking-tight">B. Kannan, MBA</p>
                    <p className="text-[11px] text-[#D6B981] font-medium">Founder & Proprietor · Est. 2015</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

