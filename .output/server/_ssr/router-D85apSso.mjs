import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as FloatingActions } from "./floating-actions-BLnPhOs1.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D85apSso.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CIZttugv.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Benchmark Name Boards — Premium Custom Signage, Coimbatore" },
			{
				name: "description",
				content: "Premium customized name boards in steel, gold, copper, ACP and acrylic, crafted in Coimbatore since 2012."
			},
			{
				name: "author",
				content: "Benchmark Name Boards"
			},
			{
				property: "og:title",
				content: "Benchmark Name Boards"
			},
			{
				property: "og:description",
				content: "Premium customized name boards crafted in Coimbatore since 2012."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-ftxhN0Nu.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Benchmark — Name Boards — | The Standard for Signage | Coimbatore" },
		{
			name: "description",
			content: "Benchmark — Name Boards — The Standard for Signage. Combining design, durability, and innovation to create premium illuminated (LED) and non-lit signage in Coimbatore since 2015."
		},
		{
			property: "og:title",
			content: "Benchmark — Name Boards — | The Standard for Signage"
		},
		{
			property: "og:description",
			content: "Every brand deserves signage that reflects its true value. Premium custom name boards crafted by B. Kannan, MBA."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-IVUIcU_G.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Benchmark Name Boards | The Standard for Signage" },
		{
			name: "description",
			content: "Benchmark — Name Boards — founded in 2015 by B. Kannan, MBA in Coimbatore. Transforming ordinary signboards into impactful identity solutions for homes and businesses."
		},
		{
			property: "og:title",
			content: "About Benchmark Name Boards — The Standard for Signage"
		},
		{
			property: "og:description",
			content: "Founded in 2015 by B. Kannan, MBA with over 7 years prior advertising industry experience."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin-BT4uiWjF.mjs");
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin Content Studio — Benchmark Name Boards" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-DkwzN02t.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Request a Quote | Benchmark Coimbatore" },
		{
			name: "description",
			content: "Consult directly with proprietor B. Kannan, MBA for custom name board design, material selection, and pricing. 6-1 Sowripalayam Road, Ramanathapuram, Coimbatore. Phone: +91 98427 67222."
		},
		{
			property: "og:title",
			content: "Contact Benchmark Name Boards"
		},
		{
			property: "og:description",
			content: "Reach Benchmark Name Boards in Coimbatore for a fast, clear quote and 3D proof."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./portfolio-aPoqhmHY.mjs");
var Route = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Installed Gallery — Real Name Boards & Signage | Benchmark Coimbatore" },
		{
			name: "description",
			content: "Browse real Benchmark installations: 3D and flat letter name boards in stainless steel 304, PVD gold, copper, ACP and cast acrylic in Coimbatore."
		},
		{
			property: "og:title",
			content: "Installed Gallery — Benchmark Name Boards"
		},
		{
			property: "og:description",
			content: "Real installed name boards and signage crafted by Benchmark in Coimbatore since 2012."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	AdminRoute: Route$2.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	PortfolioRoute: Route.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
