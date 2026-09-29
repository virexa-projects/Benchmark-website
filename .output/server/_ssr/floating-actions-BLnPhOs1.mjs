import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as MapPin, j as ChevronUp, p as Phone, t as Youtube, w as Facebook, x as Instagram } from "../_libs/lucide-react.mjs";
import { t as FaWhatsapp } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/floating-actions-BLnPhOs1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var benchmark_logo_default = "/assets/benchmark-logo-Cwl4B9Rj.jpg";
function BenchmarkLogo({ className = "", imgClassName = "h-11 sm:h-13 md:h-14 w-auto object-contain rounded-md shadow-sm border border-stone-700/40" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `inline-flex items-center justify-center select-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: benchmark_logo_default,
			alt: "Benchmark Name Boards",
			className: imgClassName,
			loading: "eager"
		})
	});
}
var PHONE = "+91 98427 67222";
var PHONE_LINK = "tel:+919842767222";
var WHATSAPP_LINK = "https://wa.me/919842767222?text=Hello%20Kannan%20B%20(Benchmark%20Name%20Boards)%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20name%20board.";
var EMAIL = "benchmarknameplates@gmail.com";
var ADDRESS = "6-1, Sowripalayam Road, Ramanathapuram, Coimbatore — 641045";
var GOOGLE_MAPS_LINK = "https://www.google.com/search?q=benchmark+name+boards+in+coimbatore";
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/portfolio",
		label: "Portfolio"
	},
	{
		to: "/contact",
		label: "Contact Us"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group flex items-center py-1 transition-opacity hover:opacity-90",
					onClick: () => setOpen(false),
					"aria-label": "Benchmark Name Boards Home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BenchmarkLogo, { className: "origin-left" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-2 md:flex lg:gap-3",
					children: NAV.map((item) => {
						const isActive = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: `rounded-full px-3.5 py-1.5 text-sm tracking-tight transition-all duration-200 ${isActive ? "bg-secondary/80 font-semibold text-foreground shadow-2xs" : "font-medium text-muted-foreground hover:bg-secondary/40 hover:text-foreground"}`,
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PHONE_LINK,
						className: "hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:border-amber-400 hover:bg-secondary sm:flex",
						"aria-label": `Call ${PHONE}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 shrink-0 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: PHONE })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((value) => !value),
						className: "flex size-9.5 items-center justify-center rounded-xl border border-border bg-card md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative block h-3.5 w-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}` })]
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "animate-in slide-in-from-top-2 border-t border-border bg-background px-6 py-6 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [NAV.map((item) => {
					const isActive = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: `rounded-lg px-3 py-2 font-display text-base font-semibold tracking-tight transition-colors ${isActive ? "bg-secondary font-bold text-[#B38800]" : "text-foreground hover:bg-secondary/50"}`,
						children: item.label
					}, item.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2.5 border-t border-border pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919842767222",
							className: "flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-semibold text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-[#D6B981]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Call ", "+91 98427 67222"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/919842767222?text=Hello%20Kannan%20B%20(Benchmark%20Name%20Boards)%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20name%20board.",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20BD5A] active:scale-98",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4.5 fill-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat on WhatsApp" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							hash: "quote-form",
							onClick: () => setOpen(false),
							className: "flex items-center justify-center gap-2 rounded-xl bg-[#D6B981] py-3 text-sm font-bold text-stone-950 shadow-md transition-all hover:bg-[#E5B700] active:scale-98",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire Now" })
						})
					]
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-stone-800 bg-[#16171B]  text-stone-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BenchmarkLogo, { showSubtitle: true })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-stone-400",
								children: "Coimbatore's specialized atelier in premium customized name boards. Crafted in SS 304, PVD Gold, Copper, ACP and Cast Acrylic — with or without LED halo illumination."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Instagram",
										className: "flex size-9 items-center justify-center rounded-xl border border-stone-800 bg-stone-900 text-stone-400 shadow-2xs transition-all hover:border-[#D6B981]/40 hover:text-[#D6B981] active:scale-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.facebook.com",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Facebook",
										className: "flex size-9 items-center justify-center rounded-xl border border-stone-800 bg-stone-900 text-stone-400 shadow-2xs transition-all hover:border-[#D6B981]/40 hover:text-[#D6B981] active:scale-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.youtube.com",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "YouTube",
										className: "flex size-9 items-center justify-center rounded-xl border border-stone-800 bg-stone-900 text-stone-400 shadow-2xs transition-all hover:border-[#D6B981]/40 hover:text-[#D6B981] active:scale-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4.5" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6B981]",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-col gap-2.5 text-sm text-stone-400",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "transition-colors hover:text-white",
								children: item.label
							}) }, item.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6B981]",
								children: "Workshop & Studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-stone-300",
								children: ADDRESS
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-semibold text-white",
								children: "Proprietor: B. Kannan, MBA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: GOOGLE_MAPS_LINK,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#D6B981] hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View on Google Maps →" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6B981]",
								children: "Direct Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PHONE_LINK,
								className: "mt-4 block whitespace-nowrap font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-[#D6B981]",
								children: PHONE
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "mt-1 block text-xs text-stone-400 transition-colors hover:text-white",
								children: EMAIL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_LINK,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20BD5A] active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3.5 fill-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 flex flex-col gap-3 border-t border-stone-800 pt-6 text-xs text-stone-500  items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Benchmark Name Boards. All rights reserved."
				] })
			})]
		})
	});
}
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "24",
		height: "24",
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15-.201.3-.777.979-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.497-.896-.8-1.501-1.788-1.677-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.635-.929-2.239-.244-.588-.493-.508-.678-.517-.176-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.151.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 2C6.527 2 2.05 6.477 2.05 11.993c0 1.763.461 3.483 1.336 4.999L2 22l5.183-1.359c1.459.796 3.104 1.216 4.859 1.216 5.514 0 9.992-4.477 9.992-9.993 0-2.67-1.039-5.18-2.927-7.068C17.221 2.91 14.71 2 12.042 2z" })
	});
}
function FloatingActions() {
	const [showTopBtn, setShowTopBtn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 320) setShowTopBtn(true);
			else setShowTopBtn(false);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 sm:right-6 bottom-20 md:bottom-7 z-50 flex flex-col items-center gap-3 select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: WHATSAPP_LINK,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "Chat on WhatsApp with Proprietor B. Kannan",
			className: "group relative hidden md:flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all hover:bg-[#20BD5A] hover:scale-110 active:scale-95 ring-4 ring-[#25D366]/20 cursor-pointer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { className: "h-7 w-7 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-stone-900/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100",
				children: "Chat on WhatsApp"
			})]
		}), showTopBtn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Back to top",
			onClick: scrollToTop,
			className: "flex size-11 sm:size-12 items-center justify-center rounded-full bg-white/95 dark:bg-stone-900/95 text-stone-800 dark:text-stone-100 shadow-[0_8px_25px_rgba(0,0,0,0.18)] border border-stone-200/90 dark:border-stone-700/80 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-stone-950 hover:border-amber-400 hover:scale-110 active:scale-95 animate-in fade-in zoom-in duration-300 cursor-pointer",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-5" })
		})]
	});
}
//#endregion
export { PHONE_LINK as a, WHATSAPP_LINK as c, PHONE as i, WhatsAppIcon as l, FloatingActions as n, SiteFooter as o, GOOGLE_MAPS_LINK as r, SiteHeader as s, ADDRESS as t };
