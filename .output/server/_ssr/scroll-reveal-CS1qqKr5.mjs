import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scroll-reveal-CS1qqKr5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollReveal({ children, className = "", delay = 0, duration = 750, direction = "up", distance = 36, threshold = .05, once = false }) {
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (!("IntersectionObserver" in window)) {
			setIsVisible(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setIsVisible(true);
				if (once) observer.unobserve(el);
			} else if (!once) setIsVisible(false);
		}, {
			threshold,
			rootMargin: "0px 0px -10px 0px"
		});
		observer.observe(el);
		return () => {
			observer.disconnect();
		};
	}, [threshold, once]);
	const getTransform = () => {
		if (isVisible) return "translate3d(0, 0, 0) scale(1)";
		switch (direction) {
			case "up": return `translate3d(0, ${distance}px, 0) scale(0.985)`;
			case "down": return `translate3d(0, -${distance}px, 0) scale(0.985)`;
			case "left": return `translate3d(${distance}px, 0, 0)`;
			case "right": return `translate3d(-${distance}px, 0, 0)`;
			default: return "translate3d(0, 0, 0)";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: isVisible ? 1 : 0,
			transform: getTransform(),
			filter: isVisible ? "blur(0px)" : "blur(4px)",
			transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
			willChange: "opacity, transform, filter"
		},
		children
	});
}
//#endregion
export { ScrollReveal as t };
