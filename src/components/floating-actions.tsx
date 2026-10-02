import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { WHATSAPP_LINK } from "./site";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return <FaWhatsapp className={className} />;
}

export function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-4 sm:right-6 bottom-20 md:bottom-7 z-50 flex flex-col items-center gap-3 select-none">
      {/* Back to Top Floating Button */}
       <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with Proprietor B. Kannan"
        className="group relative hidden md:flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all hover:bg-[#20BD5A] hover:scale-110 active:scale-95 ring-4 ring-[#25D366]/20 cursor-pointer"
      >
        <FaWhatsapp className="h-7 w-7 text-white" />
        {/* <WhatsAppIcon className="size-7 fill-white text-white" /> */}

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-stone-900/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>
      {showTopBtn && (
        
        <button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-white/95 dark:bg-stone-900/95 text-stone-800 dark:text-stone-100 shadow-[0_8px_25px_rgba(0,0,0,0.18)] border border-stone-200/90 dark:border-stone-700/80 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-stone-950 hover:border-amber-400 hover:scale-110 active:scale-95 animate-in fade-in zoom-in duration-300 cursor-pointer"
        >
          <ChevronUp className="size-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Button — Desktop Only */}
     
    </div>
  );
}
