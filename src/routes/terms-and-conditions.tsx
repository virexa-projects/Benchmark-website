import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, PHONE, PHONE_LINK, EMAIL, ADDRESS, WHATSAPP_LINK } from "@/components/site";
import { MobileDock } from "@/components/mobile-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  FileText,
  CheckCircle,
  Zap,
  Truck,
  Shield,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Benchmark Name Boards | Coimbatore" },
      {
        name: "description",
        content:
          "Read the official Terms and Conditions of Benchmark Name Boards, Coimbatore. Covers custom fabrication, 3D proof approvals, payment terms, warranties, and installation guidelines.",
      },
      { property: "og:title", content: "Terms & Conditions — Benchmark Name Boards" },
      {
        property: "og:description",
        content:
          "Clear, transparent commercial and fabrication terms for our bespoke architectural name boards and signage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  const lastUpdated = "October 2, 2026";

  const keyTerms = [
    {
      icon: CheckCircle,
      title: "3D CAD Proof Sign-Off",
      desc: "Fabrication only begins once you inspect and approve the digital 3D layout, fonts, and dimensions.",
    },
    {
      icon: Zap,
      title: "12V Waterproof LEDs",
      desc: "Illuminated signs utilize IP67 sealed LEDs powered by supplied 12V DC transformers.",
    },
    {
      icon: Truck,
      title: "Safe Crate Delivery",
      desc: "Protected wooden crate packaging and professional on-site mounting across Tamil Nadu.",
    },
    {
      icon: Shield,
      title: "Material Warranty",
      desc: "SS 304 marine-grade anti-rust guarantee and official manufacturer warranty on power drivers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF4] text-stone-900 selection:bg-amber-500 selection:text-stone-950">
      <SiteHeader />

      <main className="pb-24 pt-6 sm:pt-10">
        {/* Breadcrumb & Hero */}
        <section className="mx-auto max-w-5xl px-5 lg:px-8">

          <ScrollReveal direction="up" delay={50}>
            <h1 className="mt-2.5 font-display text-2xl font-bold leading-relaxed text-stone-950">
              Terms & Conditions
            </h1>
            <p className="mt-1 text-xs font-medium text-stone-500">
              Last Updated: <span className="font-semibold text-stone-700">{lastUpdated}</span>
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
              Welcome to <strong className="font-semibold text-stone-900">Benchmark Name Boards</strong>. These Terms & Conditions govern the estimation, digital proofing, custom manufacturing, delivery, and installation of our signage products. By commissioning an order or confirming a quote, you acknowledge and agree to these terms.
            </p>
          </ScrollReveal>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {keyTerms.map((term) => {
              const Icon = term.icon;
              return (
                <div
                  key={term.title}
                  className="rounded-2xl border border-stone-200/90 bg-white p-4 shadow-2xs transition-shadow hover:shadow-xs"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-stone-950">{term.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{term.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto mt-10 max-w-5xl px-5 lg:px-8">
          <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-xs">
            <div className="space-y-8 text-sm leading-relaxed text-stone-600">
              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    1
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Scope of Services
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    Benchmark Name Boards specializes in bespoke architectural signage, residential name plates, commercial 3D illuminated letters, brass monument plaques, and institutional monoliths. Every piece is made to custom specifications according to client dimensions and architectural finish selections.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    2
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Digital Design Proofing & Client Approval
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    Precision is central to our craft. Before CNC laser cutting or metal fabrication begins:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>We prepare a digital 2D/3D CAD design mockup depicting exact letter casing, spelling, language fonts (English, Tamil, Hindi, etc.), spacing, and backing board dimensions.</li>
                    <li>
                      <strong className="font-semibold text-stone-900">Client Responsibility:</strong> The client is solely responsible for meticulously verifying all spellings, names, initials, flat numbers, and phone numbers in the approved proof.
                    </li>
                    <li>
                      Once written sign-off (via WhatsApp or email) is confirmed by the client, laser cutting proceeds. Any spelling corrections requested <em className="italic">after</em> fabrication has commenced will incur additional material recutting charges.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    3
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Materials & Custom Craftsmanship
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    We use premium architectural materials certified for outdoor longevity:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">Stainless Steel:</strong> High-grade SS 304 with superior nickel content to prevent rusting and oxidation.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">PVD Titanium Coating:</strong> Physical Vapor Deposition in Mirror Gold, Rose Gold, Champagne, Copper, and Jet Black.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Cast Acrylic & ACP:</strong> High-density cast virgin acrylic sheets and weather-resistant Aluminium Composite Panels.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Natural Teakwood / Stone:</strong> As natural materials exhibit organic grain patterns and slight color variations, minor natural grain differences are intrinsic to genuine timber and stone products.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    4
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Quotations, Payments & Milestones
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">Quotation Validity:</strong> All formal quotes are valid for 30 days from the date of issue, after which metal commodity price revisions may apply.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Advance Deposit:</strong> Since every item is bespoke and laser cut to custom dimensions, a standard <strong className="font-semibold text-stone-900">50% advance deposit</strong> is required upon design approval to procure raw materials and initiate production.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Final Balance:</strong> The remaining balance is payable prior to courier dispatch, or on the day of on-site installation in Coimbatore.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Payment Modes:</strong> Direct Bank Transfer (NEFT/RTGS/IMPS), UPI, or Company Cheque. Formal GST invoices are issued for all orders.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    5
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Electrical Setup & Power Supply Terms
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    For all illuminated (Warm Golden Backlit, Pure White Halo, Edge Lit) signs:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">12V DC Extra-Low Voltage:</strong> All sign modules operate on safe 12V DC power. A sealed 230V AC to 12V DC power converter (transformer/SMPS) is supplied with every illuminated order.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Direct 230V Mains Warning:</strong> The sign LEDs must <strong className="text-red-600 font-semibold">NEVER</strong> be connected directly to 230V AC household mains without the supplied transformer. Doing so will instantly destroy the LED modules and immediately voids warranty.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Client Wiring Provision:</strong> The client is responsible for providing a functional 230V AC power point, switch, or conduit concealed wire near the installation site.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    6
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Production Timelines & Shipping
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">Fabrication Lead Time:</strong> Standard residential boards take approximately 3–5 working days from proof sign-off. Complex 3D commercial fascias take 7–10 working days.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Local Installation:</strong> Direct workshop mounting service available throughout Coimbatore, Tiruppur, Erode, Salem, and Nilgiris.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Secure Crate Shipping:</strong> Outstation deliveries across Tamil Nadu, Bangalore, Kerala, and Pan-India are packed in multi-layer foam and reinforced wooden crates with full-scale DIY paper mounting stencils and stainless steel fasteners included.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    7
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Warranty & Maintenance
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">SS 304 Rust-Free Assurance:</strong> We guarantee our Grade 304 stainless steel against structural rusting and pitting when maintained per instructions.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Power Supply Warranty:</strong> Standard 1-year replacement warranty on supplied 12V DC power adapters against manufacturing defects.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Cleaning Guidelines:</strong> Wipe surfaces with a soft micro-fiber cloth dampened with mild soapy water. Never use harsh abrasive scouring pads, acid-based toilet/tile cleaners, or bleach on PVD gold, brass, or acrylic surfaces.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    8
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Cancellations & Refunds
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    Because all name boards are uniquely personalized and fabricated to custom text and dimensions, orders cannot be cancelled or refunded once sheet metal cutting or acrylic fabrication has been initiated. If you wish to cancel an order prior to material cutting, any costs incurred for 3D CAD design work will be adjusted against the advance.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    9
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Governing Law & Jurisdiction
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    These terms and all sales transactions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of or in connection with our services shall be subject exclusively to the jurisdiction of the competent courts in <strong className="font-semibold text-stone-900">Coimbatore, Tamil Nadu</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Support Banner */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#5D5D5D] p-5 sm:p-7 text-white sm:flex-row shadow-sm">
              <div>
                <h3 className="text-base font-bold text-white">Have a specific fabrication question or requirement?</h3>
                <p className="mt-1 text-xs text-stone-200">
                  Our founder B. Kannan, MBA is always happy to explain materials, wiring, and mounting.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20BD5A] active:scale-95"
                >
                  <FaWhatsapp className="size-4" />
                  <span>WhatsApp Desk</span>
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <span>Call {PHONE}</span>
                  <ChevronRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileDock />
    </div>
  );
}
