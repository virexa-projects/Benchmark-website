import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import { BenchmarkLogo } from "@/components/benchmark-logo";
import { WhatsAppIcon } from "@/components/floating-actions";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

// ============================================================
// CONTACT DETAILS
// ============================================================

export const PHONE = "+91 98427 67222";

export const PHONE_LINK = "tel:+919842767222";

export const WHATSAPP_LINK =
  "https://wa.me/919842767222?text=Hello%20Kannan%20B%20(Benchmark%20Name%20Boards)%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20name%20board.";

export const EMAIL = "benchmarknameplates@gmail.com";

export const ADDRESS =
  "6-1, Sowripalayam Road, Ramanathapuram, Coimbatore — 641045";

export const GOOGLE_MAPS_LINK =
  "https://www.google.com/search?q=benchmark+name+boards+in+coimbatore";

// ============================================================
// NAVIGATION
// ============================================================

const NAV = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About Us",
  },
  {
    to: "/portfolio",
    label: "Portfolio",
  },
  {
    to: "/contact",
    label: "Contact Us",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    href: WHATSAPP_LINK,
    icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/benchmark_coimbatore/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/benchmark.coimbatore",
    icon: FaFacebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@benchmark5974",
    icon: FaYoutube,
  },
] as const;

// ============================================================
// SITE HEADER
// ============================================================

export function SiteHeader({ className }: { className?: string } = {}) {
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 shrink-0 border-b border-border/80 bg-[#FFFDF4]/90 backdrop-blur-md transition-all",
        className
      )}
    >
      {/* Main Navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center py-1 transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
          aria-label="Benchmark Name Boards Home"
        >
          <BenchmarkLogo className="origin-left" />
        </Link>

        {/* Right Section: Desktop Navigation + Social Icons + Mobile Menu Toggle */}
        <div className="flex items-center gap-5 lg:gap-7">
          {/* Desktop Navigation moved to right near social icons with letter spacing */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {NAV.map((item) => {
              const isActive = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-full px-3.5 py-1.5 text-sm leading-relaxed  font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-secondary/80 font-bold text-foreground shadow-2xs"
                      : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider between Nav and Social Icons */}
          <div className="hidden h-5 w-px bg-border/80 md:block" />

          {/* Social Icons without outline */}
          <div className="hidden sm:flex items-center gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="flex size-8.5 items-center justify-center text-muted-foreground transition-all duration-200 hover:text-[#D6B981] hover:scale-115 active:scale-95"
                >
                  <Icon className="size-4.5" />
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-9.5 items-center justify-center rounded-xl border border-border bg-card md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              {/* Top line */}
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />

              {/* Bottom line */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="animate-in slide-in-from-top-2 border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV.map((item) => {
              const isActive = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 font-display text-base font-semibold tracking-[0.08em] transition-colors ${
                    isActive
                      ? "bg-secondary font-bold text-[#B38800]"
                      : "text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Contact Actions */}
            <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
              {/* Call */}
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-semibold text-foreground"
              >
                <Phone className="size-4 text-[#D6B981]" />
                <span>Call {PHONE}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20BD5A] active:scale-98"
              >
                <WhatsAppIcon className="size-4.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Enquire */}
              <Link
                to="/contact"
                hash="quote-form"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#D6B981] py-3 text-sm font-bold text-stone-950 shadow-md transition-all hover:bg-[#E5B700] active:scale-98"
              >
                <span>Enquire Now</span>
              </Link>

              {/* Mobile Social Links without outline */}
              <div className="mt-2 flex items-center justify-center gap-5 pt-3 border-t border-border">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="flex size-9 items-center justify-center text-muted-foreground transition-all hover:text-[#D6B981] hover:scale-115 active:scale-95"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

// ============================================================
// SITE FOOTER
// ============================================================

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#5D5D5D]  text-stone-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block">
              <BenchmarkLogo showSubtitle />
            </Link>

            {/* <p className="mt-5 text-sm leading-relaxed text-stone-400">
              Coimbatore&apos;s specialized atelier in premium customized name
              boards. Crafted in SS 304, PVD Gold, Copper, ACP and Cast Acrylic
              — with or without LED halo illumination.
            </p> */}

        

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="flex size-8.5 items-center justify-center text-[#FFFFFF] transition-all hover:text-[#ffffff] hover:scale-115 active:scale-95"
                  >
                    <Icon className="size-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2">
            <p className="text-base font-bold uppercase leading-relaxed  text-[#FFFFFF]">
              Explore
            </p>

            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#FFFFFF]">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors font-medium hover:text-[#FFFFFF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Location */}
          <div className="md:col-span-3">
            <p className="text-base font-bold uppercase leading-relaxed  text-[#FFFFFF]">
              Location
            </p>

            <p className="mt-4 text-sm leading-relaxed font-medium text-[#FFFFFF]">
              {ADDRESS}
            </p>

            

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FFFFFF] hover:underline"
            >
              <MapPin className="size-3" />
              <span>Get Directions →</span>
            </a>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3">
            <p className="text-base font-bold uppercase leading-relaxed  text-[#FFFFFF]">
              Contact Us
            </p>

            <a
              href={PHONE_LINK}
              className="mt-4 block whitespace-nowrap font-display text-sm font-medium tracking-tight text-[#FFFFFF] transition-colors hover:text-[#FFFFFF]"
            >
              {PHONE}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block text-sm text-[#FFFFFF] font-medium transition-colors hover:text-black"
            >
              {EMAIL}
            </a>

            {/* WhatsApp */}
            <div className="mt-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20BD5A] active:scale-95"
              >
                <WhatsAppIcon className="size-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 flex flex-col gap-3 border-t border-stone-200 pt-6 text-sm  text-[#FFFFFF]  items-center justify-between">
          <span>
            © {new Date().getFullYear()} Benchmark Name Boards. All rights
            reserved.
          </span>

        
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// FAQ SECTION
// ============================================================

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What materials do you recommend for outdoor gates exposed to direct rain?",
      a: "We strongly recommend SS 304 Marine Grade Stainless Steel or PVD Titanium Gold with ACP backing. Grade 304 has high nickel content that completely prevents rusting and discoloration, even through harsh Coimbatore monsoon seasons.",
    },
    {
      q: "How are the LED lights powered and are they weatherproof?",
      a: "All our illuminated signs use IP67 sealed weatherproof LED diodes powered by an external 12V DC power transformer. We provide simple wiring instructions or handle the entire electrical connection during on-site installation.",
    },
    {
      q: "Can I see a 3D preview of my name board before fabrication?",
      a: "Yes, absolutely! Once you share your wording and wall dimensions, we produce a digital 3D CAD design showing the exact font, spacing, and finish for your approval before laser cutting begins.",
    },
    {
      q: "What is the typical turnaround time from order to installation?",
      a: "Standard residential name boards take 3–5 working days. Large commercial 3D letter fascias take 7–10 working days including laser cutting, hand finishing, and LED wiring tests.",
    },
    {
      q: "Do you provide installation outside Coimbatore?",
      a: "Yes! We personally install across Coimbatore, Tiruppur, Erode, Salem, and Nilgiris. For other districts in Tamil Nadu, we ship safely in custom wooden crate packaging with complete DIY mounting templates and hardware.",
    },
  ];

  return (
    <section className="section-rule border-t border-stone-200 bg-[#FFFDF4] transition-colors duration-500 dark:border-stone-800 dark:bg-[#0E0F12]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        {/* Heading */}
        <ScrollReveal direction="up" delay={50}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00] dark:text-[#D6B981]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
              Everything You Need to Know
            </h2>

            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Clear answers on materials, weatherproofing, electrical setup,
              and timelines.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ List */}
       
      </div>
    </section>
  );
}