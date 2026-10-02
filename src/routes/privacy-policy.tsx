import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader, PHONE, PHONE_LINK, EMAIL, ADDRESS, WHATSAPP_LINK } from "@/components/site";
import { MobileDock } from "@/components/mobile-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Image as ImageIcon,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Benchmark Name Boards | Coimbatore" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Benchmark Name Boards, Coimbatore. Learn how we safeguard your architectural site photos, contact details, and custom signage design specifications.",
      },
      { property: "og:title", content: "Privacy Policy — Benchmark Name Boards" },
      {
        property: "og:description",
        content:
          "Our commitment to protecting your personal data, site photos, and custom signage requirements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const lastUpdated = "October 2, 2026";

  const keyPoints = [
    {
      icon: Lock,
      title: "No Data Selling",
      desc: "We never sell, rent, or lease your personal contact details or design files to any third party.",
    },
    {
      icon: ImageIcon,
      title: "Site Photo Confidentiality",
      desc: "Photos and measurements you send for 3D layout proofs are treated with strict confidentiality.",
    },
    {
      icon: MessageSquare,
      title: "Direct Founder Service",
      desc: "All design consultations and quotes are handled directly by Proprietor B. Kannan, MBA.",
    },
    {
      icon: EyeOff,
      title: "Portfolio Privacy Choice",
      desc: "You have full freedom to request that photos of your installed private residence remain unlisted.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF4] text-stone-900 selection:bg-amber-500 selection:text-stone-950">
      <SiteHeader />

      <main className="pb-24 pt-6 sm:pt-10">
        {/* Breadcrumb & Hero */}
        <section className="mx-auto max-w-5xl px-5 lg:px-8">
          {/* Breadcrumb */}


          <ScrollReveal direction="up" delay={50}>
            <h1 className="mt-2.5 font-display text-2xl font-bold leading-relaxed text-stone-950">
              Privacy Policy
            </h1>
            <p className="mt-1 text-xs font-medium text-stone-500">
              Last Updated: <span className="font-semibold text-stone-700">{lastUpdated}</span>
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
              At <strong className="font-semibold text-stone-900">Benchmark Name Boards</strong> (“we”, “our”, or “us”), we respect your privacy and are committed to safeguarding the personal and architectural information you share with us. This Privacy Policy details how we collect, utilize, and protect your information when you browse our website, request quotes, or commission custom signage.
            </p>
          </ScrollReveal>

          {/* Quick Key Takeaways Cards */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {keyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="rounded-2xl border border-stone-200/90 bg-white p-4 shadow-2xs transition-shadow hover:shadow-xs"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-stone-950">{point.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{point.desc}</p>
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
                    Information We Collect
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>When you interact with our website or contact our workshop, we may collect the following information:</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">Personal Contact Details:</strong> Name, phone number, WhatsApp contact, email address, and installation or shipping address.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Project Requirements & Site Photos:</strong> Photos of your wall, facade, gate pillars, architectural sketches, dimensional measurements, and preferred typography or logos.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Quotation Inquiries:</strong> Selected signage materials (SS 304 Stainless Steel, PVD Titanium Gold, Acrylic, ACP, Brass, Teakwood), lighting preferences (Warm Backlit, Halo, Daylight), and design notes submitted via our quote form.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Technical Device Data:</strong> Basic standard web analytics such as browser type, operating system, and pages viewed, used solely to ensure fast, responsive page rendering.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    2
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>We use your information strictly for legitimate craftsmanship and customer service purposes:</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>To prepare personalized cost estimates and material recommendations based on your site parameters.</li>
                    <li>To draft digital 2D/3D CAD design mockups for your review and sign-off before manufacturing begins.</li>
                    <li>To laser cut, hand-assemble, wire waterproof 12V LED components, and finish your custom name board.</li>
                    <li>To coordinate on-site installation appointments in Coimbatore, Tiruppur, Erode, Salem, and Nilgiris, or dispatch safely packed wooden crates across Tamil Nadu and India.</li>
                    <li>To answer your support questions directly via telephone or official WhatsApp chat.</li>
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
                    Design Files & Architectural Site Media
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    We acknowledge that photos of your private residence or commercial property represent sensitive personal spaces. Any site images uploaded through our contact forms or shared via WhatsApp are used solely by our fabrication team for dimension scaling, background contrast evaluation, and installation planning.
                  </p>
                  <p>
                    <strong className="font-semibold text-stone-900">Portfolio Photography:</strong> After installation, our team occasionally photographs the finished signage to showcase craftsmanship on our website and social channels. If you prefer that your residence or building photos remain private and unlisted, simply notify us at any time via WhatsApp or email, and we will immediately respect your preference or blur any private identifying numbers.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    4
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Information Sharing & Third Parties
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    We do <strong className="font-semibold text-stone-900">NOT</strong> sell, trade, or monetize your personal information. Data is shared only under strict operational necessity:
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>
                      <strong className="font-semibold text-stone-900">Logistics & Couriers:</strong> Your delivery address and phone number are shared with trusted logistics partners solely for crate transit.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Service Infrastructure:</strong> Secure cloud providers used to process form inquiries with industry-standard encryption in transit.
                    </li>
                    <li>
                      <strong className="font-semibold text-stone-900">Legal Compliance:</strong> If mandated by applicable Indian law, court order, or governmental authorities.
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
                    Data Security & Retention
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    We implement administrative, technical, and physical safeguards to protect your personal information against unauthorized access, alteration, or disclosure. We retain your quotation inquiries and design proofs only as long as necessary to fulfill orders, maintain warranty records, and facilitate repeat orders.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5D5D5D] text-xs font-bold text-white">
                    6
                  </span>
                  <h2 className="font-display text-base font-bold text-stone-950">
                    Your Rights & Control
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>You maintain full control over your information. At any point, you may:</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-stone-600">
                    <li>Request a copy of the design files, invoices, or specifications on file for your project.</li>
                    <li>Request correction or updates to your contact numbers and billing address.</li>
                    <li>Request the deletion of your inquiry details from our active database.</li>
                    <li>Opt out of any non-transactional communications.</li>
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
                    Contacting Our Privacy Lead
                  </h2>
                </div>
                <div className="mt-3 space-y-2.5 pl-8 text-stone-600">
                  <p>
                    If you have questions, feedback, or requests regarding this Privacy Policy or how your personal information is handled, please reach out directly:
                  </p>

                  <div className="mt-3 rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                    <p className="text-sm font-bold text-stone-950">Benchmark Name Boards</p>
                    <p className="text-xs font-medium text-stone-500">Attn: B. Kannan, MBA (Proprietor)</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{ADDRESS}</p>
                    <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                      <a href={PHONE_LINK} className="font-semibold text-amber-700 hover:underline">
                        Phone: {PHONE}
                      </a>
                      <a href={`mailto:${EMAIL}`} className="font-semibold text-amber-700 hover:underline">
                        Email: {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Support Banner */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#5D5D5D] p-5 sm:p-7 text-white sm:flex-row shadow-sm">
              <div>
                <h3 className="text-base font-bold text-white">Need clarification on custom signage or privacy?</h3>
                <p className="mt-1 text-xs text-stone-200">
                  Chat directly with our founder or send your architectural query.
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
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <span>Contact Form</span>
                  <ChevronRight className="size-3.5" />
                </Link>
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
