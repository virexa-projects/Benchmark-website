import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { s as SiteHeader } from "./floating-actions-BLnPhOs1.mjs";
import { t as MobileDock } from "./mobile-dock-B_p7041e.mjs";
import { t as HeroSlideshow } from "./content-store-DLrG9bqg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ftxhN0Nu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [isNight, setIsNight] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-amber-500 selection:text-stone-950 flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `relative flex-1 flex flex-col justify-center overflow-hidden transition-colors duration-700 ease-in-out min-h-[calc(100vh-5rem)] ${isNight ? "bg-[#0E0F12] text-white" : "bg-white text-stone-900"}`,
				children: [
					isNight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none bg-amber-500/15 opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-stone-800/30 opacity-100" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-10 py-10 lg:py-16 my-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid items-center gap-10 lg:grid-cols-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-6 max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "animate-hero-1 inline-flex items-center gap-2.5 rounded-full border border-[#D6B981]/70 bg-[#D6B981]/20 px-4 py-1.5 shadow-2xs backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex size-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6B981] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-[#D6B981]" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold uppercase tracking-[0.22em] text-[#8A6D00] dark:text-[#D6B981]",
											children: "The Standard for Signage · Est. 2015"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "animate-hero-2 mt-6 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] tracking-tight text-balance text-stone-950 dark:text-white",
										children: [
											"Every brand deserves signage that reflects its",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#D6B981] font-extrabold",
												children: "true value"
											}),
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "animate-hero-3 mt-5 text-base sm:text-[17px] leading-[1.68] text-stone-600 dark:text-stone-300 font-normal",
										children: "Our work combines design, durability, and innovation to create signage that captures attention and builds trust. Using superior materials and modern finishes, each board is crafted to stand out with sophistication — offered in both illuminated (LED) and non-lit designs."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "animate-hero-4 mt-8 flex flex-wrap items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											hash: "quote-form",
											className: "group relative inline-flex items-center justify-center rounded-full bg-[#D6B981] hover:bg-[#E5B700] px-7 py-4 text-sm font-bold text-stone-950 shadow-md shadow-[#D6B981]/30 transition-all hover:shadow-lg hover:shadow-[#D6B981]/40 hover:scale-[1.02] active:scale-[0.98]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Now" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/portfolio",
											className: "group inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/90 dark:bg-stone-900/80 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-stone-900 dark:text-white transition-all hover:bg-stone-50 dark:hover:bg-stone-800 hover:border-[#D6B981] dark:hover:border-[#D6B981] active:scale-[0.98]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-[#B38800] transition-transform group-hover:translate-x-1" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "animate-hero-5 mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-stone-200/90 dark:border-stone-800 pt-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white",
													children: "Since 2015"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400",
													children: "Coimbatore"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col border-l border-stone-200/80 dark:border-stone-800 pl-4 sm:pl-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white",
													children: "500+"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400",
													children: "Bespoke Boards"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col border-l border-stone-200/80 dark:border-stone-800 pl-4 sm:pl-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 dark:text-white",
													children: "100%"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400",
													children: "In-House Craft"
												})]
											})
										]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 min-h-[460px] sm:min-h-[560px] lg:min-h-full h-full overflow-hidden bg-stone-950 border-t lg:border-t-0 lg:border-l border-stone-200/80 dark:border-stone-800/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
							isNight,
							setIsNight
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
		]
	});
}
//#endregion
export { Home as component };
