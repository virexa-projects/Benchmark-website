import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as Phone, s as Sparkles } from "../_libs/lucide-react.mjs";
import { a as PHONE_LINK, c as WHATSAPP_LINK, l as WhatsAppIcon } from "./floating-actions-BLnPhOs1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mobile-dock-B_p7041e.js
var import_jsx_runtime = require_jsx_runtime();
function MobileDock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-label": "Quick contact actions",
		className: "fixed bottom-0 left-0 right-0 z-40 block border-t border-stone-200/80 dark:border-stone-800 bg-background/95 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] backdrop-blur-xl md:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.08)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-md items-center justify-between gap-2 px-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: PHONE_LINK,
					className: "flex flex-1 items-center justify-center gap-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-card py-2.5 text-xs font-semibold text-foreground transition-transform active:scale-95 shadow-2xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Now" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WHATSAPP_LINK,
					target: "_blank",
					rel: "noreferrer",
					className: "flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-xs transition-transform active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3.5 fill-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "flex flex-1 items-center justify-center gap-1.5 rounded-full bg-amber-500 py-2.5 text-xs font-bold text-stone-950 shadow-xs transition-transform active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-stone-950" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Quote" })]
				})
			]
		})
	});
}
//#endregion
export { MobileDock as t };
