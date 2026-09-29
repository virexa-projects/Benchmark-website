import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as Sparkles } from "../_libs/lucide-react.mjs";
import { o as SiteFooter, s as SiteHeader } from "./floating-actions-BLnPhOs1.mjs";
import { t as ScrollReveal } from "./scroll-reveal-CS1qqKr5.mjs";
import { t as MobileDock } from "./mobile-dock-B_p7041e.mjs";
import { n as PortfolioSection } from "./content-store-DLrG9bqg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-aPoqhmHY.js
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-stone-900 pb-14 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-5 pt-12 pb-8 lg:px-10 lg:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-[#D6B981]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#8A6D00]",
								children: "Installed Portfolio"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2.5 max-w-3xl font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900",
							children: "Gallery Grid"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						direction: "up",
						delay: 250,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-500",
							children: "Handcrafted architectural name boards installed across Coimbatore and Tamil Nadu. Hover over any board to view its installation location, or click to enlarge."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 pb-24 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
		]
	});
}
//#endregion
export { Gallery as component };
