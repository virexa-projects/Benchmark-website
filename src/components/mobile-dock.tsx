import { Phone, Sparkles, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "./site";
import { WhatsAppIcon } from "./floating-actions";

export function MobileDock() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 block border-t border-stone-200/80 dark:border-stone-800 bg-background/95 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] backdrop-blur-xl md:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 px-1">
        <a
          href={PHONE_LINK}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-card py-2.5 text-xs font-semibold text-foreground transition-transform active:scale-95 shadow-2xs"
        >
          <Phone className="size-3.5 text-amber-500" />
          <span>Call Now</span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-xs transition-transform active:scale-95"
        >
          <WhatsAppIcon className="size-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-amber-500 py-2.5 text-xs font-bold text-stone-950 shadow-xs transition-transform active:scale-95"
        >
          <Sparkles className="size-3.5 text-stone-950" />
          <span>Get Quote</span>
        </Link>
      </div>
    </aside>
  );
}
