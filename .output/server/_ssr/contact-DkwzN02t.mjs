import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { I as ArrowRight, O as Clock, g as MapPin, h as Navigation, k as CircleCheck, p as Phone } from "../_libs/lucide-react.mjs";
import { a as PHONE_LINK, c as WHATSAPP_LINK, i as PHONE, l as WhatsAppIcon, o as SiteFooter, r as GOOGLE_MAPS_LINK, s as SiteHeader, t as ADDRESS } from "./floating-actions-BLnPhOs1.mjs";
import { t as ScrollReveal } from "./scroll-reveal-CS1qqKr5.mjs";
import { t as MobileDock } from "./mobile-dock-B_p7041e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DkwzN02t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && (window.location.hash === "#quote-form" || window.location.hash === "#enquire" || window.location.hash === "#form")) {
			const el = document.getElementById("quote-form");
			if (el) el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		const clientName = `${firstName} ${lastName}`.trim();
		const msg = `Hello B. Kannan (Benchmark Name Boards),%0A%0AI am requesting a Quote from your website:%0A%0A• *Name:* ${encodeURIComponent(clientName)}%0A• *Phone / WhatsApp:* ${encodeURIComponent(phone)}%0A` + (email ? `• *Email:* ${encodeURIComponent(email)}%0A` : "") + (message ? `• *Wording / Dimensions:* ${encodeURIComponent(message)}%0A` : "") + `%0APlease share material options and a 3D digital design render.`;
		window.open(`https://wa.me/919842767222?text=${msg}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-stone-900 antialiased pb-14 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-start gap-10 lg:grid-cols-12 lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col justify-between lg:col-span-5 lg:sticky lg:top-28 lg:self-start transition-all duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
							direction: "up",
							delay: 50,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex items-center rounded-full border border-[#D6B981]/70 bg-[#D6B981]/20 px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#8A6D00] uppercase animate-in fade-in duration-300",
									children: "Direct Consultation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-display text-4xl sm:text-5xl lg:text-4.5xl font-bold leading-[1.12] tracking-tight text-stone-950 text-balance",
									children: "Get in Touch with Our Kannan."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-base sm:text-lg leading-relaxed text-stone-600",
									children: [
										"Share your requirements, wall dimensions, or preferred style. Founder & Proprietor ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "B. Kannan, MBA" }),
										" will personally review your project and prepare a tailored material recommendation and 3D digital design render within 24 hours."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-col gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: PHONE_LINK,
										className: "group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 p-4 transition-all hover:border-[#D6B981] hover:bg-white hover:shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-11 items-center justify-center rounded-xl bg-white border border-stone-200 text-stone-900",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4.5 text-[#8A6D00]" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-stone-500 font-medium",
												children: "Direct Line (Proprietor Desk)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm sm:text-base font-bold text-stone-950 tracking-tight",
												children: PHONE
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-stone-600 group-hover:translate-x-0.5 transition-transform",
											children: "Call →"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WHATSAPP_LINK,
										target: "_blank",
										rel: "noreferrer",
										className: "group flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 p-4 transition-all hover:border-[#25D366] hover:bg-white hover:shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5.5 fill-current" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-stone-500 font-medium",
												children: "WhatsApp Desk"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm sm:text-base font-bold text-stone-950 tracking-tight",
												children: "Chat with B. Kannan, MBA"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform",
											children: "Chat →"
										})]
									})]
								})
							] })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "quote-form",
						className: "lg:col-span-7 scroll-mt-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
							direction: "up",
							delay: 150,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-3xl border border-stone-200 bg-stone-50/50 p-7 sm:p-10 shadow-sm",
								children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-16 text-center animate-in fade-in",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 font-display text-2xl font-bold tracking-tight text-stone-950",
											children: "Thank You! Request Dispatched."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mx-auto mt-2 max-w-sm text-sm text-stone-600",
											children: "WhatsApp has opened with your inquiry. Proprietor B. Kannan, MBA will review your details and reply shortly."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSubmitted(false),
											className: "mt-6 inline-flex items-center gap-2 text-xs font-semibold text-stone-950 underline hover:text-[#8A6D00]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit another requirement" })
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleSubmit,
									className: "flex flex-col gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950",
											children: "Enquiry"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													htmlFor: "first-name",
													className: "text-xs font-medium text-stone-700",
													children: ["First Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-red-500",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "first-name",
													required: true,
													type: "text",
													value: firstName,
													onChange: (e) => setFirstName(e.target.value),
													placeholder: "e.g. Anand",
													className: "rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#D6B981] focus:ring-1 focus:ring-[#D6B981]"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "last-name",
													className: "text-xs font-medium text-stone-700",
													children: "Last Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "last-name",
													type: "text",
													value: lastName,
													onChange: (e) => setLastName(e.target.value),
													placeholder: "e.g. Kumar",
													className: "rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#D6B981] focus:ring-1 focus:ring-[#D6B981]"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													htmlFor: "contact-phone",
													className: "text-xs font-medium text-stone-700",
													children: ["Phone / WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-red-500",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "contact-phone",
													required: true,
													type: "tel",
													value: phone,
													onChange: (e) => setPhone(e.target.value),
													placeholder: "+91 98427 67222",
													className: "rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#D6B981] focus:ring-1 focus:ring-[#D6B981]"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "contact-email",
													className: "text-xs font-medium text-stone-700",
													children: "Email Address (Optional)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "contact-email",
													type: "email",
													value: email,
													onChange: (e) => setEmail(e.target.value),
													placeholder: "anand@example.com",
													className: "rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#D6B981] focus:ring-1 focus:ring-[#D6B981]"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "project-notes",
												className: "text-xs font-medium text-stone-700",
												children: "Wording, Approximate Size, or Wall Style Notes"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												id: "project-notes",
												rows: 4,
												value: message,
												onChange: (e) => setMessage(e.target.value),
												placeholder: "e.g. 'The Kannan Villa', approx 2ft x 3ft, warm LED backlight on granite wall",
												className: "rounded-xl border border-stone-200 bg-white p-4 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-[#D6B981] focus:ring-1 focus:ring-[#D6B981] resize-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-col gap-3 pt-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												className: "group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D6B981] hover:bg-[#E5B700] px-6 py-4 text-center text-sm font-bold text-stone-950 shadow-md shadow-[#D6B981]/25 transition-all active:scale-[0.99]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit Enquiry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
											})
										})
									]
								})
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-stone-200 bg-stone-50/70 py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-12 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
								direction: "up",
								delay: 50,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold uppercase tracking-widest text-[#8A6D00]",
										children: "Coimbatore Workshop & Design Studio"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950",
										children: "Visit Us in Ramanathapuram"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-stone-600 leading-relaxed",
										children: "Experience tactile material swatches in person — including 304 Marine Stainless Steel, PVD Titanium Brass & Rose Gold, Cast Acrylic, and Natural Hardwoods."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-col gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 shadow-2xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-[#8A6D00] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-stone-950",
													children: ADDRESS
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-stone-500 mt-0.5",
													children: "Opp. Sowripalayam Junction, Coimbatore"
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 shadow-2xs text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-[#8A6D00] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-stone-950",
												children: "Visiting Hours: "
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-stone-600",
												children: "Mon – Sat: 9:30 AM – 8:00 PM"
											})] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: GOOGLE_MAPS_LINK,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-xl bg-stone-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-stone-800 transition-all active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open in Google Maps" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: PHONE_LINK,
											className: "inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold text-stone-950 hover:bg-stone-100 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-[#8A6D00]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Desk" })]
										})]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
								direction: "up",
								delay: 150,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-3xl border border-stone-200 bg-white p-2.5 shadow-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-stone-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											src: "https://maps.google.com/maps?q=6-1,+Sowripalayam+Road,+Ramanathapuram,+Coimbatore,+Tamil+Nadu+641045&t=&z=15&ie=UTF8&iwloc=&output=embed",
											width: "100%",
											height: "100%",
											style: { border: 0 },
											allowFullScreen: false,
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade",
											title: "Benchmark Name Boards Ramanathapuram Coimbatore Google Maps Studio",
											className: "size-full object-cover"
										})
									})
								})
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
		]
	});
}
//#endregion
export { Contact as component };
