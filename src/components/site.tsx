import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Sun,
  Moon,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

import { BenchmarkLogo } from "@/components/benchmark-logo";
import { WhatsAppIcon } from "@/components/floating-actions";
import { ScrollReveal } from "@/components/scroll-reveal";

export const PHONE = "+91 98427 67222";
export const PHONE_LINK = "tel:+919842767222";
export const WHATSAPP_LINK = "https://wa.me/919842767222?text=Hello%20Kannan%20B%20(Benchmark%20Name%20Boards)%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20name%20board.";
export const EMAIL = "benchmarknameplates@gmail.com";
export const ADDRESS = "6-1, Sowripalayam Road, Ramanathapuram, Coimbatore — 641045";
export const GOOGLE_MAPS_LINK = "https://www.google.com/search?q=benchmark+name+boards+in+coimbatore";

// Exact pages requested: Home, About Us, Gallery, Contact Us
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md transition-all">
      {/* Main Navigation Bar — Pure, clean luxury layout */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        {/* Exact Brand Logo matching client uploaded asset */}
        <Link
          to="/"
          className="group flex items-center transition-opacity hover:opacity-90 py-1"
          onClick={() => setOpen(false)}
        >
          <BenchmarkLogo className="origin-left" />
        </Link>

        {/* Desktop Nav: Home, About Us, Industries, Gallery, Contact Us */}
        <nav className="hidden items-center gap-2 lg:gap-3 md:flex">
          {NAV.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm tracking-tight px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "font-semibold text-foreground bg-secondary/80 shadow-2xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: Phone & Enquire Now */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_LINK}
            className="hidden items-center gap-1.5 rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-semibold text-foreground whitespace-nowrap transition-all hover:border-amber-400 hover:bg-secondary sm:flex"
          >
            <Phone className="size-3.5 text-amber-500 shrink-0" />
            <span className="whitespace-nowrap">{PHONE}</span>
          </a>

          <Link
            to="/contact"
            hash="quote-form"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#FFCB00] hover:bg-[#E5B700] px-4.5 py-2 text-xs font-bold text-stone-950 shadow-xs transition-all active:scale-95"
          >
            <span>Enquire Now</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9.5 items-center justify-center rounded-xl border border-border bg-card md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="border-t border-border bg-background px-6 py-6 md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`font-display text-base font-semibold tracking-tight px-3 py-2 rounded-lg transition-colors ${
                  pathname === item.to ? "bg-secondary text-[#B38800] font-bold" : "text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-semibold text-foreground"
              >
                <Phone className="size-4 text-[#FFCB00]" />
                <span>Call {PHONE}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] py-3 text-sm font-bold text-white shadow-md transition-all active:scale-98"
              >
                <WhatsAppIcon className="size-4.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                hash="quote-form"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFCB00] hover:bg-[#E5B700] py-3 text-sm font-bold text-stone-950 shadow-md transition-all active:scale-98"
              >
                <span>Enquire Now</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-[#16171B] text-stone-300 pb-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block">
              <BenchmarkLogo showSubtitle={true} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-stone-400">
              Coimbatore's specialized atelier in premium customized name boards. Crafted in SS 304, PVD Gold, Copper, ACP and Cast Acrylic — with or without LED halo illumination.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-4 text-[#FFCB00]" />
                SS 304 Marine Steel
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="size-4 text-[#FFCB00]" />
                PVD Titanium Gold
              </span>
            </div>

            {/* Social Media Links: Instagram, Facebook, YouTube */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-[#FFCB00] hover:border-[#FFCB00]/40 transition-all active:scale-95 shadow-2xs"
              >
                <Instagram className="size-4.5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-[#FFCB00] hover:border-[#FFCB00]/40 transition-all active:scale-95 shadow-2xs"
              >
                <Facebook className="size-4.5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-[#FFCB00] hover:border-[#FFCB00]/40 transition-all active:scale-95 shadow-2xs"
              >
                <Youtube className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFCB00]">Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-stone-400">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Location */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFCB00]">Workshop & Studio</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">{ADDRESS}</p>
            <p className="mt-2 text-xs font-semibold text-white">Proprietor: B. Kannan, MBA</p>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FFCB00] hover:underline"
            >
              <MapPin className="size-3" />
              <span>View on Google Maps →</span>
            </a>
          </div>

          {/* Direct Reach */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFCB00]">Direct Contact</p>
            <a
              href={PHONE_LINK}
              className="mt-4 block font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-[#FFCB00] whitespace-nowrap"
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-1 block text-xs text-stone-400 transition-colors hover:text-white"
            >
              {EMAIL}
            </a>

            <div className="mt-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all active:scale-95"
              >
                <WhatsAppIcon className="size-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 flex flex-col gap-3 border-t border-stone-800 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Benchmark Name Boards. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Crafted in Coimbatore, Tamil Nadu · Est. 2015 by B. Kannan, MBA</span>
            <Link to="/admin" className="text-stone-500 hover:text-[#FFCB00] transition-colors">
              Atelier Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <section className="section-rule bg-white dark:bg-[#0E0F12] border-t border-stone-200 dark:border-stone-800 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <ScrollReveal direction="up" delay={50}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00] dark:text-[#FFCB00]">Frequently Asked Questions</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
              Everything You Need to Know
            </h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Clear answers on materials, weatherproofing, electrical setup, and timelines.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.q} direction="up" delay={index * 60}>
                <div
                  className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#18191D] transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-display text-base font-semibold tracking-tight text-stone-900 dark:text-white hover:text-[#8A6D00] dark:hover:text-[#FFCB00] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-[#FFCB00] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300 border-t border-stone-100 dark:border-stone-800/80 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

