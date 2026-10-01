import w4 from "@/assets/work/kannan4.png";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

export function ProprietorSection({ className }: { className?: string } = {}) {
  return (
    <div className={cn("grid gap-12 md:grid-cols-12 md:items-center pt-20 lg:pt-24", className)}>
      {/* Left Column: Single High-End Proprietor Image Showcase */}
      <div className="md:col-span-5 flex justify-center lg:justify-start">
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

      {/* Right Column: Proprietor Narrative & Credentials */}
      <div className="md:col-span-7">
        <ScrollReveal direction="up" delay={50}>
          <h2 className="font-display text-2xl font-bold leading-relaxed text-stone-950">
            B. Kannan, MBA
          </h2>
          <p className="text-sm font-semibold leading-relaxed text-stone-950 mt-1">
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
        </ScrollReveal>
      </div>
    </div>
  );
}
