import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { WHATSAPP_LINK } from "./site";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15-.201.3-.777.979-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.497-.896-.8-1.501-1.788-1.677-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.635-.929-2.239-.244-.588-.493-.508-.678-.517-.176-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.151.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 2C6.527 2 2.05 6.477 2.05 11.993c0 1.763.461 3.483 1.336 4.999L2 22l5.183-1.359c1.459.796 3.104 1.216 4.859 1.216 5.514 0 9.992-4.477 9.992-9.993 0-2.67-1.039-5.18-2.927-7.068C17.221 2.91 14.71 2 12.042 2z" />
    </svg>
  );
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
