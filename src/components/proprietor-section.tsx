import w4 from "@/assets/work/kannan4.png";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProprietorSection() {
  return (
    <section className=" bg-[#FFFDF4] text-[#000000] py-14 lg:py-16">
      {/* Exact max-w-7xl px-5 lg:px-10 container matching top nav */}
      <div className="mx-auto max-w-7xl  ">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Right Column: Single High-End Proprietor Image Showcase */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start">
            <ScrollReveal direction="up" delay={150} className="w-full max-w-[460px]">
              <div className="rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-2.5 border border-stone-200/90 shadow-2xs">
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={w4}
                    alt="B. Kannan, MBA — Founder & Master Craftsman at Benchmark Name Boards"
                    className="w-full h-[480px] sm:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay at base for luxury feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
          </div>
          {/* Left Column: Proprietor Narrative & Credentials */}
          <div className="lg:col-span-6 xl:col-span-6">
            <ScrollReveal direction="up" delay={50}>
            
              <h2 className="mt-3 font-display text-2xl  font-bold leading-relaxed text-stone-950 text-[#000000]">
                B. Kannan, MBA
              </h2>
              <p className="text-sm font-semibold leading-relaxed text-stone-950 text-[#000000] mt-1">
                Founder of Benchmark 
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                With over 7 years of prior experience in the creative advertising agencies in Chennai, B. Kannan established Benchmark in 2015 with a vision to create premium-quality signage that combines creativity & durability. 

              </p>

              <p className="mt-4 text-sm leading-relaxed text-stone-600">
               His expertise is in creating customized name boards and signage that transform an ordinary name into a distinctive brand identity.

              </p>

              <p className="mt-4 text-sm leading-relaxed text-stone-600">
               Under his leadership, Benchmark has built a strong reputation for elegant designs, quality craftsmanship and customer-focused customization.

              </p>

              {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-stone-800 pt-6 text-xs text-stone-300">
                <div>
                  <p className="font-bold text-white text-sm">Creative Advertising Roots</p>
                  <p className="text-stone-400 mt-1">7+ years advertising background ensuring impactful visual identity.</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Direct Proprietor Guidance</p>
                  <p className="text-stone-400 mt-1">Consult directly with B. Kannan, MBA for customized 3D design proof.</p>
                </div>
              </div> */}
            </ScrollReveal>
          </div>

         
        </div>
      </div>
    </section>
  );
}

