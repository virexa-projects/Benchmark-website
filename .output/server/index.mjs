globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/arrow-right-CXZHe7Dx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-MaBDDtOdJpJ+mT03/8PTxpa34z4\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 156,
		"path": "../public/assets/arrow-right-CXZHe7Dx.js"
	},
	"/assets/circle-check-BdJHxIwd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-nuMasS4QckE+b6Iw8qoOEYoujDQ\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 169,
		"path": "../public/assets/circle-check-BdJHxIwd.js"
	},
	"/assets/admin-Cat_HmnS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8aa-g1Xmo7HNkvAwSRG72gPwGRQ13/E\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 43178,
		"path": "../public/assets/admin-Cat_HmnS.js"
	},
	"/assets/about-Cr759XHv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"341f-azCnjBxrWUJvlGe8soThnamXNCY\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 13343,
		"path": "../public/assets/about-Cr759XHv.js"
	},
	"/assets/eye-BzgqkzFe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-pmvnT6DKDnpRrclcd7u1tVcJwfA\"",
		"mtime": "2026-09-29T09:26:40.970Z",
		"size": 247,
		"path": "../public/assets/eye-BzgqkzFe.js"
	},
	"/assets/contact-9ub2Ktrh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3104-eDZuUcveABmepvw/BgQN5piZLQE\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 12548,
		"path": "../public/assets/contact-9ub2Ktrh.js"
	},
	"/assets/content-store-qIWoLgve.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69cf-hG/s9ZGW+i/geuNIf+ncGfnZLDo\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 27087,
		"path": "../public/assets/content-store-qIWoLgve.js"
	},
	"/assets/mobile-dock-1gvBlR4Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"635-ecyNi/QgXHRLks6smhOp0QzbgOM\"",
		"mtime": "2026-09-29T09:26:40.970Z",
		"size": 1589,
		"path": "../public/assets/mobile-dock-1gvBlR4Z.js"
	},
	"/assets/portfolio-C8PlVrSE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c9-HTD/6if46s+E5OPZmmj1Ps+Cot0\"",
		"mtime": "2026-09-29T09:26:40.972Z",
		"size": 1481,
		"path": "../public/assets/portfolio-C8PlVrSE.js"
	},
	"/assets/routes-ByjtdbQT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ca-pq45hbtkchdbDUKkqA4w+D+kkh0\"",
		"mtime": "2026-09-29T09:26:40.972Z",
		"size": 5322,
		"path": "../public/assets/routes-ByjtdbQT.js"
	},
	"/assets/benchmark-logo-Cwl4B9Rj.jpg": {
		"type": "image/jpeg",
		"etag": "\"175f-YcD0gGnpTi6QpCHrYWNstoZp8zQ\"",
		"mtime": "2026-09-29T09:26:40.976Z",
		"size": 5983,
		"path": "../public/assets/benchmark-logo-Cwl4B9Rj.jpg"
	},
	"/assets/scroll-reveal-BW4_AL0I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a7-ZG9ay3oSpDEcvbvPA5X2d1AbPQk\"",
		"mtime": "2026-09-29T09:26:40.972Z",
		"size": 1191,
		"path": "../public/assets/scroll-reveal-BW4_AL0I.js"
	},
	"/assets/sparkles-BqzsBCKB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e5-PbGBh/WRyyNAkwGor/r7eNvgFuU\"",
		"mtime": "2026-09-29T09:26:40.974Z",
		"size": 485,
		"path": "../public/assets/sparkles-BqzsBCKB.js"
	},
	"/assets/map-pin-Djrf8DM8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9157-HtoWau1IIgyaGCsYoXiqmqIHc04\"",
		"mtime": "2026-09-29T09:26:40.970Z",
		"size": 37207,
		"path": "../public/assets/map-pin-Djrf8DM8.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-09-29T09:12:43.562Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/w1-Ds9lggxD.jpg": {
		"type": "image/jpeg",
		"etag": "\"22813-wO4fSeIV/R4yC8Hxp8R+kuctKgc\"",
		"mtime": "2026-09-29T09:26:40.981Z",
		"size": 141331,
		"path": "../public/assets/w1-Ds9lggxD.jpg"
	},
	"/assets/styles-CMPvz7At.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c312-K2HEWWasfm0YD+1FvQ74W+GLXUM\"",
		"mtime": "2026-09-29T09:26:40.979Z",
		"size": 115474,
		"path": "../public/assets/styles-CMPvz7At.css"
	},
	"/assets/index-CmLKu3Q-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"582a4-wS1cE+P+G8Jimdrddjzn4k0hpIE\"",
		"mtime": "2026-09-29T09:26:40.960Z",
		"size": 361124,
		"path": "../public/assets/index-CmLKu3Q-.js"
	},
	"/assets/w5-SSQ8VGPX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d-9GZVgUSO49grpEx6wtFylC05fLM\"",
		"mtime": "2026-09-29T09:26:40.974Z",
		"size": 77,
		"path": "../public/assets/w5-SSQ8VGPX.js"
	},
	"/assets/w11-DXugiut_.jpg": {
		"type": "image/jpeg",
		"etag": "\"35a35-A6BelbDeQ4befzcf5CfdlB93tuM\"",
		"mtime": "2026-09-29T09:26:40.983Z",
		"size": 219701,
		"path": "../public/assets/w11-DXugiut_.jpg"
	},
	"/assets/w2-CZ9qoL2s.jpg": {
		"type": "image/jpeg",
		"etag": "\"22a20-ifCAPlEpAs04Pw9kvmUoMly6jCw\"",
		"mtime": "2026-09-29T09:26:40.985Z",
		"size": 141856,
		"path": "../public/assets/w2-CZ9qoL2s.jpg"
	},
	"/assets/w5-CyTc42Tx.jpg": {
		"type": "image/jpeg",
		"etag": "\"266e3-ETxMAC5bX5SEWSnqSMu61SvbcAs\"",
		"mtime": "2026-09-29T09:26:40.992Z",
		"size": 157411,
		"path": "../public/assets/w5-CyTc42Tx.jpg"
	},
	"/assets/w4-DbLAE5ip.jpg": {
		"type": "image/jpeg",
		"etag": "\"32929-XOpQm5v6LNN+TC/F5pwbngFPCno\"",
		"mtime": "2026-09-29T09:26:40.989Z",
		"size": 207145,
		"path": "../public/assets/w4-DbLAE5ip.jpg"
	},
	"/assets/w6-436m-RqM.jpg": {
		"type": "image/jpeg",
		"etag": "\"22b3d-8EP7pinqsfiQavpq/2TfYRXwNwY\"",
		"mtime": "2026-09-29T09:26:40.998Z",
		"size": 142141,
		"path": "../public/assets/w6-436m-RqM.jpg"
	},
	"/assets/w8-B0DkETEs.jpg": {
		"type": "image/jpeg",
		"etag": "\"33ede-HMCa2eEke1U7ImlSBfOdguLM5XE\"",
		"mtime": "2026-09-29T09:26:40.998Z",
		"size": 212702,
		"path": "../public/assets/w8-B0DkETEs.jpg"
	},
	"/assets/w9-3TZedEz1.jpg": {
		"type": "image/jpeg",
		"etag": "\"191e6-140LJ7YXz5CYHPfQKNDrUqyL8zg\"",
		"mtime": "2026-09-29T09:26:41.000Z",
		"size": 102886,
		"path": "../public/assets/w9-3TZedEz1.jpg"
	},
	"/assets/w_ayras_nest-De8rzAby.jpg": {
		"type": "image/jpeg",
		"etag": "\"fee6-j2pL4zQx5USpfQovUSKt/dBP1sc\"",
		"mtime": "2026-09-29T09:26:41.002Z",
		"size": 65254,
		"path": "../public/assets/w_ayras_nest-De8rzAby.jpg"
	},
	"/assets/w_annai_illam-Bl_yPjdG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b840-4cLDf760TFzMffPkF/QhdmDE7Iw\"",
		"mtime": "2026-09-29T09:26:41.000Z",
		"size": 112704,
		"path": "../public/assets/w_annai_illam-Bl_yPjdG.jpg"
	},
	"/assets/w_evs_illam-DndjzbnV.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f8a2-sMPLd2mp5q8aPqgKkOeuYaTt6s0\"",
		"mtime": "2026-09-29T09:26:41.002Z",
		"size": 194722,
		"path": "../public/assets/w_evs_illam-DndjzbnV.jpg"
	},
	"/assets/w_fliqzo-19HrgrOy.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2bf-hpNDVeaGmre+WsOjgGoh5Np2koE\"",
		"mtime": "2026-09-29T09:26:41.004Z",
		"size": 45759,
		"path": "../public/assets/w_fliqzo-19HrgrOy.jpg"
	},
	"/assets/w_giripriya-DP2-PlYq.jpg": {
		"type": "image/jpeg",
		"etag": "\"1593c-GVHFv378mFeL7+FOnqCLQFhw5Ww\"",
		"mtime": "2026-09-29T09:26:41.004Z",
		"size": 88380,
		"path": "../public/assets/w_giripriya-DP2-PlYq.jpg"
	},
	"/assets/w_lahari_house-BP4tF_vz.jpg": {
		"type": "image/jpeg",
		"etag": "\"153fa-0l3cU7bqKiQRPow63evgpcXRGrQ\"",
		"mtime": "2026-09-29T09:26:41.006Z",
		"size": 87034,
		"path": "../public/assets/w_lahari_house-BP4tF_vz.jpg"
	},
	"/assets/w_sairam_agastya-lu7cbXfL.jpg": {
		"type": "image/jpeg",
		"etag": "\"15196-KK6JTDFhCH9vMQ6GygAgr/2fAPM\"",
		"mtime": "2026-09-29T09:26:41.009Z",
		"size": 86422,
		"path": "../public/assets/w_sairam_agastya-lu7cbXfL.jpg"
	},
	"/assets/w_punniyamoorthy-BaEMFvdt.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eb62-J0zqtWfqADrJeFfu21J1FXPZ0xs\"",
		"mtime": "2026-09-29T09:26:41.008Z",
		"size": 125794,
		"path": "../public/assets/w_punniyamoorthy-BaEMFvdt.jpg"
	},
	"/assets/w_shanmugam-DCD9JuNd.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa96-j5ccYT9hJzcWOu/ATAKYG+pCLWs\"",
		"mtime": "2026-09-29T09:26:41.011Z",
		"size": 109206,
		"path": "../public/assets/w_shanmugam-DCD9JuNd.jpg"
	},
	"/assets/w_shanthi_villa-B4Day4N1.jpg": {
		"type": "image/jpeg",
		"etag": "\"23570-ITnFDhMcRZDNOq/SF8IQvPg+DdI\"",
		"mtime": "2026-09-29T09:26:41.013Z",
		"size": 144752,
		"path": "../public/assets/w_shanthi_villa-B4Day4N1.jpg"
	},
	"/assets/w_vivalayam_night-8C0Ixqk1.jpg": {
		"type": "image/jpeg",
		"etag": "\"11165-E4PxKx4v1DHCITlo6+cyWGW90sI\"",
		"mtime": "2026-09-29T09:26:41.017Z",
		"size": 69989,
		"path": "../public/assets/w_vivalayam_night-8C0Ixqk1.jpg"
	},
	"/assets/w_struzon-BwjgowyF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c192-5C3vjQUlR/QB66G5XBt4fXCncYA\"",
		"mtime": "2026-09-29T09:26:41.015Z",
		"size": 115090,
		"path": "../public/assets/w_struzon-BwjgowyF.jpg"
	},
	"/assets/w_sreelakam-CtwqAXxt.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b493-hmJHhP1Cc1hFUv7otwrRMTAldI0\"",
		"mtime": "2026-09-29T09:26:41.015Z",
		"size": 242835,
		"path": "../public/assets/w_sreelakam-CtwqAXxt.jpg"
	},
	"/assets/w_vivalayam_workshop-BS1GVKA8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1191c-cRUSw8wBH6q5ssMO5G+r/EaabRM\"",
		"mtime": "2026-09-29T09:26:41.017Z",
		"size": 71964,
		"path": "../public/assets/w_vivalayam_workshop-BS1GVKA8.jpg"
	},
	"/assets/w_vibhavari-CqYuHtxH.jpg": {
		"type": "image/jpeg",
		"etag": "\"28b82-SONP0dxOKiogqxvJ94WU1c2s5cw\"",
		"mtime": "2026-09-29T09:26:41.015Z",
		"size": 166786,
		"path": "../public/assets/w_vibhavari-CqYuHtxH.jpg"
	},
	"/assets/w_vr_illam_day-DMjA9OWc.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c951-pns8YM0tbqFahqKEFzdQG/l2hfk\"",
		"mtime": "2026-09-29T09:26:41.017Z",
		"size": 117073,
		"path": "../public/assets/w_vr_illam_day-DMjA9OWc.jpg"
	},
	"/assets/w_vr_illam_night-DF0GbMGd.jpg": {
		"type": "image/jpeg",
		"etag": "\"19732-/ZpWT8v40bWN6ayS14TLvYqud7A\"",
		"mtime": "2026-09-29T09:26:41.019Z",
		"size": 104242,
		"path": "../public/assets/w_vr_illam_night-DF0GbMGd.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_TpNixa = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_TpNixa
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
