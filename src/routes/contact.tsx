import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_LINK,
  SiteFooter,
  SiteHeader,
  WHATSAPP_LINK,
  GOOGLE_MAPS_LINK,
  FAQSection,
} from "@/components/site";
import { MobileDock } from "@/components/mobile-dock";
import { WhatsAppIcon } from "@/components/floating-actions";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Clock,
  Navigation,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Request a Quote | Benchmark Coimbatore" },
      {
        name: "description",
        content:
          "Consult directly with proprietor B. Kannan, MBA for custom name board design, material selection, and pricing. 6-1 Sowripalayam Road, Ramanathapuram, Coimbatore. Phone: +91 98427 67222.",
      },
      { property: "og:title", content: "Contact Benchmark Name Boards" },
      {
        property: "og:description",
        content:
          "Reach Benchmark Name Boards in Coimbatore for a fast, clear quote and 3D proof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window.location.hash === "#quote-form" || window.location.hash === "#enquire" || window.location.hash === "#form")) {
      const el = document.getElementById("quote-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const clientName = `${firstName} ${lastName}`.trim();
    const msg = `Hello B. Kannan (Benchmark Name Boards),%0A%0AI am requesting a Quote from your website:%0A%0A` +
      `• *Name:* ${encodeURIComponent(clientName)}%0A` +
      `• *Phone / WhatsApp:* ${encodeURIComponent(phone)}%0A` +
      (email ? `• *Email:* ${encodeURIComponent(email)}%0A` : "") +
      (message ? `• *Wording / Dimensions:* ${encodeURIComponent(message)}%0A` : "") +
      `%0APlease share material options and a 3D digital design render.`;

    window.open(`https://wa.me/919842767222?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased pb-14 md:pb-0">
      <SiteHeader />

      {/* Main Hero & Form Section: Exact max-w-7xl px-5 lg:px-10 aligned with top nav */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Typography, Sticky Scroll Atelier Direct Cards */}
          <div className="flex flex-col justify-between lg:col-span-5 lg:sticky lg:top-28 lg:self-start transition-all duration-300">
            <ScrollReveal direction="up" delay={50}>
              <div>
                {/* Tag — Pure luxury minimalist typography */}
                <div className="inline-flex items-center rounded-full border border-[#FFCB00]/70 bg-[#FFCB00]/20 px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#8A6D00] uppercase animate-in fade-in duration-300">
                  Direct Atelier Consultation
                </div>

                <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-4.5xl font-bold leading-[1.12] tracking-tight text-stone-950 text-balance">
                  Get in Touch with Our Atelier.
                </h1>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-600">
                  Share your requirements, wall dimensions, or preferred style. Founder & Proprietor <strong>B. Kannan, MBA</strong> will personally review your project and prepare a tailored material recommendation and 3D digital design render within 24 hours.
                </p>

                {/* Minimalist Contact Direct Cards */}
                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href={PHONE_LINK}
                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 p-4 transition-all hover:border-[#FFCB00] hover:bg-white hover:shadow-xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-white border border-stone-200 text-stone-900">
                        <Phone className="size-4.5 text-[#8A6D00]" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 font-medium">Direct Line (Proprietor Desk)</p>
                        <p className="text-sm sm:text-base font-bold text-stone-950 tracking-tight">{PHONE}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-stone-600 group-hover:translate-x-0.5 transition-transform">Call →</span>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 p-4 transition-all hover:border-[#25D366] hover:bg-white hover:shadow-xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366]">
                        <WhatsAppIcon className="size-5.5 fill-current" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 font-medium">WhatsApp Atelier Desk</p>
                        <p className="text-sm sm:text-base font-bold text-stone-950 tracking-tight">Chat with B. Kannan, MBA</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform">Chat →</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean, Modern Form Card */}
          <div id="quote-form" className="lg:col-span-7 scroll-mt-24">
            <ScrollReveal direction="up" delay={150}>
              <div className="rounded-3xl border border-stone-200 bg-stone-50/50 p-7 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-stone-950">
                      Thank You! Request Dispatched.
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-stone-600">
                      WhatsApp has opened with your inquiry. Proprietor B. Kannan, MBA will review your details and reply shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-stone-950 underline hover:text-[#8A6D00]"
                    >
                      <span>Submit another requirement</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
                        Enquiry
                      </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="first-name" className="text-xs font-medium text-stone-700">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="first-name"
                          required
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="e.g. Anand"
                          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#FFCB00] focus:ring-1 focus:ring-[#FFCB00]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="last-name" className="text-xs font-medium text-stone-700">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="e.g. Kumar"
                          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#FFCB00] focus:ring-1 focus:ring-[#FFCB00]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-phone" className="text-xs font-medium text-stone-700">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98427 67222"
                          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#FFCB00] focus:ring-1 focus:ring-[#FFCB00]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-email" className="text-xs font-medium text-stone-700">
                          Email Address (Optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="anand@example.com"
                          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#FFCB00] focus:ring-1 focus:ring-[#FFCB00]"
                        />
                      </div>
                    </div>

                    {/* Message / Board text */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="project-notes" className="text-xs font-medium text-stone-700">
                        Wording, Approximate Size, or Wall Style Notes
                      </label>
                      <textarea
                        id="project-notes"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. 'The Kannan Villa', approx 2ft x 3ft, warm LED backlight on granite wall"
                        className="rounded-xl border border-stone-200 bg-white p-4 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#FFCB00] focus:ring-1 focus:ring-[#FFCB00] resize-none"
                      />
                    </div>

                    {/* Submit Action — Primary Brand Yellow Style */}
                    <div className="flex flex-col gap-3 pt-2">
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFCB00] hover:bg-[#E5B700] px-6 py-4 text-center text-sm font-bold text-stone-950 shadow-md shadow-[#FFCB00]/25 transition-all active:scale-[0.99]"
                      >
                        <span>Submit Enquiry</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full-Width Interactive Google Map & Atelier Location Section: Exact max-w-7xl px-5 lg:px-10 */}
      <section className="border-t border-stone-200 bg-stone-50/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Description */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={50}>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8A6D00]">
                  Coimbatore Workshop & Design Studio
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
                  Visit Us in Ramanathapuram
                </h2>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  Experience tactile material swatches in person — including 304 Marine Stainless Steel, PVD Titanium Brass & Rose Gold, Cast Acrylic, and Natural Hardwoods.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 shadow-2xs">
                    <MapPin className="size-4 text-[#8A6D00] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-semibold text-stone-950">{ADDRESS}</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">Opp. Sowripalayam Junction, Coimbatore</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 shadow-2xs text-xs">
                    <Clock className="size-4 text-[#8A6D00] shrink-0" />
                    <div>
                      <span className="font-semibold text-stone-950">Visiting Hours: </span>
                      <span className="text-stone-600">Mon – Sat: 9:30 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-stone-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-stone-800 transition-all active:scale-95"
                  >
                    <Navigation className="size-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold text-stone-950 hover:bg-stone-100 transition-colors"
                  >
                    <Phone className="size-3.5 text-[#8A6D00]" />
                    <span>Call Atelier Desk</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Interactive Embedded Google Map */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delay={150}>
                <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-2.5 shadow-md">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-stone-100">
                    <iframe
                      src="https://maps.google.com/maps?q=6-1,+Sowripalayam+Road,+Ramanathapuram,+Coimbatore,+Tamil+Nadu+641045&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Benchmark Name Boards Ramanathapuram Coimbatore Google Maps Studio"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <SiteFooter />
      <MobileDock />
    </div>
  );
}

