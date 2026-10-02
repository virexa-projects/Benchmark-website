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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-09-29T09:12:43.562Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"641-8llWObBOPfn6nzP/Sqh3A84+NKg\"",
		"mtime": "2026-10-01T10:24:16.903Z",
		"size": 1601,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"641-8llWObBOPfn6nzP/Sqh3A84+NKg\"",
		"mtime": "2026-10-01T10:24:16.902Z",
		"size": 1601,
		"path": "../public/favicon.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"657-xw4bh8BBjz8JdRze3eFqm1A0BFk\"",
		"mtime": "2026-10-01T10:24:16.904Z",
		"size": 1623,
		"path": "../public/favicon.ico"
	},
	"/benchmark/bm_09_portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"2823a-RRmSwOTp/y/vqBegXEcpV4WjsFs\"",
		"mtime": "2026-10-01T13:17:08.113Z",
		"size": 164410,
		"path": "../public/benchmark/bm_09_portrait.jpg"
	},
	"/benchmark/bm_08_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"11157-icUdJMdvGyDQi1i2SPqHXshHxTw\"",
		"mtime": "2026-10-01T13:17:12.607Z",
		"size": 69975,
		"path": "../public/benchmark/bm_08_landscape.jpg"
	},
	"/benchmark/bm_10_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"9d78-2affCOJuVlzxnB6w7t0ns91Gz38\"",
		"mtime": "2026-10-01T13:17:03.537Z",
		"size": 40312,
		"path": "../public/benchmark/bm_10_landscape.jpg"
	},
	"/benchmark/bm_13_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"faa54-UYDBNnSeSc8Xn+QAINI2nL4JVP8\"",
		"mtime": "2026-10-01T13:18:34.689Z",
		"size": 1026644,
		"path": "../public/benchmark/bm_13_landscape.jpg"
	},
	"/benchmark/bm_14_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"17824d-uJqZUO06iivfcMM5mpY+04djD2g\"",
		"mtime": "2026-10-01T13:18:28.475Z",
		"size": 1540685,
		"path": "../public/benchmark/bm_14_landscape.jpg"
	},
	"/benchmark/bm_18_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"108ab9-wvu+TzQmTkMc4H856d4QFkjjZAA\"",
		"mtime": "2026-10-01T13:19:40.915Z",
		"size": 1084089,
		"path": "../public/benchmark/bm_18_landscape.jpg"
	},
	"/benchmark/bm_20_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1663d2-rwSqf6hVRgS15EtN5Fw9nBSeJPs\"",
		"mtime": "2026-10-01T13:18:31.618Z",
		"size": 1467346,
		"path": "../public/benchmark/bm_20_landscape.jpg"
	},
	"/benchmark/bm_02_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cefbb-MmCKL5k83dJhvqi2eebiYpz+vuw\"",
		"mtime": "2026-10-01T13:21:38.473Z",
		"size": 1896379,
		"path": "../public/benchmark/bm_02_landscape.jpg"
	},
	"/benchmark/bm_01_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e6031-QYT8GP/xlwxDOvjhqt5cqVpU7Fw\"",
		"mtime": "2026-10-01T13:21:15.624Z",
		"size": 1990705,
		"path": "../public/benchmark/bm_01_landscape.jpg"
	},
	"/benchmark/bm_06_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1be995-VZS+FQmy7lCtlA2wzXRrG5VxvSw\"",
		"mtime": "2026-10-01T13:21:53.564Z",
		"size": 1829269,
		"path": "../public/benchmark/bm_06_landscape.jpg"
	},
	"/benchmark/bm_15_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cd471-+d8m2ksXiou98PBxsPhdRGAgJgQ\"",
		"mtime": "2026-10-01T13:17:37.885Z",
		"size": 1889393,
		"path": "../public/benchmark/bm_15_landscape.jpg"
	},
	"/benchmark/bm_04_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"19b859-iYsVm6c5oIIHJ/s74sbkrtTGbuM\"",
		"mtime": "2026-10-01T13:22:11.773Z",
		"size": 1685593,
		"path": "../public/benchmark/bm_04_landscape.jpg"
	},
	"/benchmark/bm_24_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"e1cd-psa2QoEdWaz09IJ3NKIG4xGiE3A\"",
		"mtime": "2026-10-01T13:16:57.378Z",
		"size": 57805,
		"path": "../public/benchmark/bm_24_landscape.jpg"
	},
	"/benchmark/bm_22_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"e593-a5P38ArEYS8ThevOMtgDvWaH1GA\"",
		"mtime": "2026-10-01T13:21:51.870Z",
		"size": 58771,
		"path": "../public/benchmark/bm_22_landscape.jpg"
	},
	"/benchmark/bm_25_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a533-+N7gfkN/K6XUQaozzUujOAI1zLM\"",
		"mtime": "2026-10-01T13:20:28.367Z",
		"size": 107827,
		"path": "../public/benchmark/bm_25_landscape.jpg"
	},
	"/benchmark/bm_21_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d5316-G8Gny5L/dAoMaAxpoSjdBImdL6E\"",
		"mtime": "2026-10-01T13:16:53.471Z",
		"size": 1921814,
		"path": "../public/benchmark/bm_21_landscape.jpg"
	},
	"/benchmark/bm_26_portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d5af-8Ftxc5CB3OB60B9fX4VXjhGmf7s\"",
		"mtime": "2026-10-01T13:20:35.779Z",
		"size": 185775,
		"path": "../public/benchmark/bm_26_portrait.jpg"
	},
	"/benchmark/bm_27_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"11189-vozgJ+6pjlwURQxwz5kWcpKWsj0\"",
		"mtime": "2026-10-01T13:20:39.474Z",
		"size": 70025,
		"path": "../public/benchmark/bm_27_landscape.jpg"
	},
	"/benchmark/bm_28_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"21bd1-h/jy3Mzw9MkF8izN+PhK5xw0qn0\"",
		"mtime": "2026-10-01T13:20:22.156Z",
		"size": 138193,
		"path": "../public/benchmark/bm_28_landscape.jpg"
	},
	"/benchmark/bm_05_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"221de1-NsDckyzAffORBI8pRQ4z5VCJ14M\"",
		"mtime": "2026-10-01T13:21:01.025Z",
		"size": 2235873,
		"path": "../public/benchmark/bm_05_landscape.jpg"
	},
	"/benchmark/bm_11_portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"217325-YfA/G89KPc2lGZDop+RGfQJ6tOs\"",
		"mtime": "2026-10-01T13:18:58.589Z",
		"size": 2192165,
		"path": "../public/benchmark/bm_11_portrait.jpg"
	},
	"/benchmark/bm_12_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"2139a7-yAr50eOY7tvG9OmB1QTIqN79Yxk\"",
		"mtime": "2026-10-01T13:18:44.587Z",
		"size": 2177447,
		"path": "../public/benchmark/bm_12_landscape.jpg"
	},
	"/benchmark/bm_17_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"2658c3-L54mdhxherGtOLziJQY1ZTlqOz0\"",
		"mtime": "2026-10-01T13:20:08.846Z",
		"size": 2513091,
		"path": "../public/benchmark/bm_17_landscape.jpg"
	},
	"/benchmark/bm_19_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"27a55e-s7YzquQzXB3bfIj3xOeh1I8BMgs\"",
		"mtime": "2026-10-01T13:21:29.040Z",
		"size": 2598238,
		"path": "../public/benchmark/bm_19_landscape.jpg"
	},
	"/benchmark/bm_07_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"2baea7-s1bTHK3Kp+k5h7Pg2TokDrJeZ5I\"",
		"mtime": "2026-10-01T13:20:57.238Z",
		"size": 2862759,
		"path": "../public/benchmark/bm_07_landscape.jpg"
	},
	"/benchmark/bm_03_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"37b2a6-0I8vpECVWvDqK1M8+nJnX4iUNI0\"",
		"mtime": "2026-10-01T13:21:47.104Z",
		"size": 3650214,
		"path": "../public/benchmark/bm_03_landscape.jpg"
	},
	"/benchmark/bm_30_portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"34422-VhPd3WIWfnehD0cshWMUER7LLeg\"",
		"mtime": "2026-10-01T13:22:35.019Z",
		"size": 214050,
		"path": "../public/benchmark/bm_30_portrait.jpg"
	},
	"/benchmark/bm_31_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a364-NyfYZk9zBaRd5BIwrsUFIp2h+MM\"",
		"mtime": "2026-10-01T13:22:29.869Z",
		"size": 238436,
		"path": "../public/benchmark/bm_31_landscape.jpg"
	},
	"/benchmark/bm_32_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"20e94-xOxf0ABBvHFWhNBMCe82TW+rbGo\"",
		"mtime": "2026-10-01T13:23:39.165Z",
		"size": 134804,
		"path": "../public/benchmark/bm_32_landscape.jpg"
	},
	"/benchmark/bm_33_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"26dd4-iLV0oUMLT6ebJXYws++eELKS0x0\"",
		"mtime": "2026-10-01T13:23:51.177Z",
		"size": 159188,
		"path": "../public/benchmark/bm_33_landscape.jpg"
	},
	"/benchmark/bm_34_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ca01-mNtmKGMV2I2HHTDeCOmqYt16YsM\"",
		"mtime": "2026-10-01T13:24:02.655Z",
		"size": 248321,
		"path": "../public/benchmark/bm_34_landscape.jpg"
	},
	"/benchmark/bm_35_portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"23e68-do3uwZo/SSmckIY4Jf2XdbgAJrA\"",
		"mtime": "2026-10-01T13:24:51.511Z",
		"size": 147048,
		"path": "../public/benchmark/bm_35_portrait.jpg"
	},
	"/assets/about-s0M5kBIk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2733-cqowy7UetrIkWCw+puAiI9gadpE\"",
		"mtime": "2026-10-02T05:47:31.940Z",
		"size": 10035,
		"path": "../public/assets/about-s0M5kBIk.js"
	},
	"/assets/benchmark-logo-Cwl4B9Rj.jpg": {
		"type": "image/jpeg",
		"etag": "\"175f-YcD0gGnpTi6QpCHrYWNstoZp8zQ\"",
		"mtime": "2026-10-02T05:47:31.975Z",
		"size": 5983,
		"path": "../public/assets/benchmark-logo-Cwl4B9Rj.jpg"
	},
	"/assets/admin-BsfD0iw0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b473-SmA3tnOWbJlLAlc168TmSMgoOmA\"",
		"mtime": "2026-10-02T05:47:31.940Z",
		"size": 46195,
		"path": "../public/assets/admin-BsfD0iw0.js"
	},
	"/assets/chevron-right-SOw9kogH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73-NScA7DF65S/3NDdtwuOFYkPZIeQ\"",
		"mtime": "2026-10-02T05:47:31.940Z",
		"size": 115,
		"path": "../public/assets/chevron-right-SOw9kogH.js"
	},
	"/assets/circle-check-CMt2uULG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-8Z1ex5CWZmtXAyjoZoXpgaii3gc\"",
		"mtime": "2026-10-02T05:47:31.941Z",
		"size": 163,
		"path": "../public/assets/circle-check-CMt2uULG.js"
	},
	"/assets/contact-CTm6xdzD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32c8-+Elt5gKBWuCIA04Xw1MowIIuOOs\"",
		"mtime": "2026-10-02T05:47:31.941Z",
		"size": 13e3,
		"path": "../public/assets/contact-CTm6xdzD.js"
	},
	"/assets/content-store-DuwqPT6K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7111-jSxbpzRNf803k06eoeaAYaAyV/k\"",
		"mtime": "2026-10-02T05:47:31.942Z",
		"size": 28945,
		"path": "../public/assets/content-store-DuwqPT6K.js"
	},
	"/assets/eye-B9CcuLrN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f1-2txVs3ixs2vp8Z8Wwq0bjQZlMf4\"",
		"mtime": "2026-10-02T05:47:31.942Z",
		"size": 241,
		"path": "../public/assets/eye-B9CcuLrN.js"
	},
	"/assets/index-CSvwgSen.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"618a2-L3H4zLH2f3SiQzewZGn18oM+/H4\"",
		"mtime": "2026-10-02T05:47:31.940Z",
		"size": 399522,
		"path": "../public/assets/index-CSvwgSen.js"
	},
	"/assets/lock-ozz0fPe8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"306-rYhWQ5bPCIpguVdOCF4MW9f7X70\"",
		"mtime": "2026-10-02T05:47:31.942Z",
		"size": 774,
		"path": "../public/assets/lock-ozz0fPe8.js"
	},
	"/assets/mobile-dock-BdCg9O5X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"960-HOkQZ8eix2cMN6mVDBXPMwi6N3k\"",
		"mtime": "2026-10-02T05:47:31.944Z",
		"size": 2400,
		"path": "../public/assets/mobile-dock-BdCg9O5X.js"
	},
	"/benchmark/bm_23_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a0303-ybggRVa/OXUGegUIiN41HTyZDUY\"",
		"mtime": "2026-10-01T13:21:03.968Z",
		"size": 2753283,
		"path": "../public/benchmark/bm_23_landscape.jpg"
	},
	"/assets/portfolio-DluCbnAR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"421-MNLLCCLoL0S5b/1FkmiLjyfT270\"",
		"mtime": "2026-10-02T05:47:31.945Z",
		"size": 1057,
		"path": "../public/assets/portfolio-DluCbnAR.js"
	},
	"/benchmark/bm_16_landscape.jpg": {
		"type": "image/jpeg",
		"etag": "\"445645-kbgEqjD7ZjRhimixRGrvo4QYgrQ\"",
		"mtime": "2026-10-01T13:19:21.221Z",
		"size": 4478533,
		"path": "../public/benchmark/bm_16_landscape.jpg"
	},
	"/assets/privacy-policy-DPqo5EuI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3417-RwM9EqKhL1zN54pLrnI8lT07MPQ\"",
		"mtime": "2026-10-02T05:47:31.945Z",
		"size": 13335,
		"path": "../public/assets/privacy-policy-DPqo5EuI.js"
	},
	"/assets/routes-Ce6eB_7V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e24-qtFdiT0dZB8z8d6KMp8sMCz2NPE\"",
		"mtime": "2026-10-02T05:47:31.947Z",
		"size": 3620,
		"path": "../public/assets/routes-Ce6eB_7V.js"
	},
	"/assets/scroll-reveal-Bu5oK5Ab.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a1-QS+t04du38HzupU61rYb2TuECz4\"",
		"mtime": "2026-10-02T05:47:31.952Z",
		"size": 1185,
		"path": "../public/assets/scroll-reveal-Bu5oK5Ab.js"
	},
	"/assets/sparkles-BmacHPLe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1df-BcSnPwDHgVjkZ97PIvwA52fPJh4\"",
		"mtime": "2026-10-02T05:47:31.955Z",
		"size": 479,
		"path": "../public/assets/sparkles-BmacHPLe.js"
	},
	"/assets/terms-and-conditions-3lKBozFt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fa1-eKycO0zTsiqymWW4cMTg3CbkXAw\"",
		"mtime": "2026-10-02T05:47:31.960Z",
		"size": 16289,
		"path": "../public/assets/terms-and-conditions-3lKBozFt.js"
	},
	"/assets/styles-a57ZVdjJ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c66d-PJ5ngeA4fJPQaThc73jKZyFK9SY\"",
		"mtime": "2026-10-02T05:47:31.983Z",
		"size": 116333,
		"path": "../public/assets/styles-a57ZVdjJ.css"
	},
	"/assets/w1-Ds9lggxD.jpg": {
		"type": "image/jpeg",
		"etag": "\"22813-wO4fSeIV/R4yC8Hxp8R+kuctKgc\"",
		"mtime": "2026-10-02T05:47:31.987Z",
		"size": 141331,
		"path": "../public/assets/w1-Ds9lggxD.jpg"
	},
	"/assets/w2-CZ9qoL2s.jpg": {
		"type": "image/jpeg",
		"etag": "\"22a20-ifCAPlEpAs04Pw9kvmUoMly6jCw\"",
		"mtime": "2026-10-02T05:47:31.988Z",
		"size": 141856,
		"path": "../public/assets/w2-CZ9qoL2s.jpg"
	},
	"/assets/w4-DbLAE5ip.jpg": {
		"type": "image/jpeg",
		"etag": "\"32929-XOpQm5v6LNN+TC/F5pwbngFPCno\"",
		"mtime": "2026-10-02T05:47:31.989Z",
		"size": 207145,
		"path": "../public/assets/w4-DbLAE5ip.jpg"
	},
	"/assets/w9-3TZedEz1.jpg": {
		"type": "image/jpeg",
		"etag": "\"191e6-140LJ7YXz5CYHPfQKNDrUqyL8zg\"",
		"mtime": "2026-10-02T05:47:31.991Z",
		"size": 102886,
		"path": "../public/assets/w9-3TZedEz1.jpg"
	},
	"/assets/w6-436m-RqM.jpg": {
		"type": "image/jpeg",
		"etag": "\"22b3d-8EP7pinqsfiQavpq/2TfYRXwNwY\"",
		"mtime": "2026-10-02T05:47:31.991Z",
		"size": 142141,
		"path": "../public/assets/w6-436m-RqM.jpg"
	},
	"/assets/w5-CyTc42Tx.jpg": {
		"type": "image/jpeg",
		"etag": "\"266e3-ETxMAC5bX5SEWSnqSMu61SvbcAs\"",
		"mtime": "2026-10-02T05:47:31.990Z",
		"size": 157411,
		"path": "../public/assets/w5-CyTc42Tx.jpg"
	},
	"/assets/w_annai_illam-Bl_yPjdG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b840-4cLDf760TFzMffPkF/QhdmDE7Iw\"",
		"mtime": "2026-10-02T05:47:31.992Z",
		"size": 112704,
		"path": "../public/assets/w_annai_illam-Bl_yPjdG.jpg"
	},
	"/assets/w_evs_illam-DndjzbnV.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f8a2-sMPLd2mp5q8aPqgKkOeuYaTt6s0\"",
		"mtime": "2026-10-02T05:47:31.994Z",
		"size": 194722,
		"path": "../public/assets/w_evs_illam-DndjzbnV.jpg"
	},
	"/assets/w_ayras_nest-De8rzAby.jpg": {
		"type": "image/jpeg",
		"etag": "\"fee6-j2pL4zQx5USpfQovUSKt/dBP1sc\"",
		"mtime": "2026-10-02T05:47:31.994Z",
		"size": 65254,
		"path": "../public/assets/w_ayras_nest-De8rzAby.jpg"
	},
	"/assets/w_fliqzo-19HrgrOy.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2bf-hpNDVeaGmre+WsOjgGoh5Np2koE\"",
		"mtime": "2026-10-02T05:47:31.995Z",
		"size": 45759,
		"path": "../public/assets/w_fliqzo-19HrgrOy.jpg"
	},
	"/assets/w_giripriya-DP2-PlYq.jpg": {
		"type": "image/jpeg",
		"etag": "\"1593c-GVHFv378mFeL7+FOnqCLQFhw5Ww\"",
		"mtime": "2026-10-02T05:47:31.995Z",
		"size": 88380,
		"path": "../public/assets/w_giripriya-DP2-PlYq.jpg"
	},
	"/assets/w_lahari_house-BP4tF_vz.jpg": {
		"type": "image/jpeg",
		"etag": "\"153fa-0l3cU7bqKiQRPow63evgpcXRGrQ\"",
		"mtime": "2026-10-02T05:47:31.996Z",
		"size": 87034,
		"path": "../public/assets/w_lahari_house-BP4tF_vz.jpg"
	},
	"/assets/w_punniyamoorthy-BaEMFvdt.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eb62-J0zqtWfqADrJeFfu21J1FXPZ0xs\"",
		"mtime": "2026-10-02T05:47:31.996Z",
		"size": 125794,
		"path": "../public/assets/w_punniyamoorthy-BaEMFvdt.jpg"
	},
	"/assets/w_sairam_agastya-lu7cbXfL.jpg": {
		"type": "image/jpeg",
		"etag": "\"15196-KK6JTDFhCH9vMQ6GygAgr/2fAPM\"",
		"mtime": "2026-10-02T05:47:31.998Z",
		"size": 86422,
		"path": "../public/assets/w_sairam_agastya-lu7cbXfL.jpg"
	},
	"/assets/optimal-Am7-uU8i.png": {
		"type": "image/png",
		"etag": "\"231146-h75+7K4e/VkMa2yaGlLgt+wtXnQ\"",
		"mtime": "2026-10-02T05:47:31.982Z",
		"size": 2298182,
		"path": "../public/assets/optimal-Am7-uU8i.png"
	},
	"/assets/kannan4-COw0wKEI.png": {
		"type": "image/png",
		"etag": "\"2372ef-01Pv1xj4WUHrUQNHtDV02g0s8/g\"",
		"mtime": "2026-10-02T05:47:31.978Z",
		"size": 2323183,
		"path": "../public/assets/kannan4-COw0wKEI.png"
	},
	"/assets/w_shanthi_villa-B4Day4N1.jpg": {
		"type": "image/jpeg",
		"etag": "\"23570-ITnFDhMcRZDNOq/SF8IQvPg+DdI\"",
		"mtime": "2026-10-02T05:47:32.001Z",
		"size": 144752,
		"path": "../public/assets/w_shanthi_villa-B4Day4N1.jpg"
	},
	"/assets/w_struzon-BwjgowyF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c192-5C3vjQUlR/QB66G5XBt4fXCncYA\"",
		"mtime": "2026-10-02T05:47:32.007Z",
		"size": 115090,
		"path": "../public/assets/w_struzon-BwjgowyF.jpg"
	},
	"/assets/w_shanmugam-DCD9JuNd.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa96-j5ccYT9hJzcWOu/ATAKYG+pCLWs\"",
		"mtime": "2026-10-02T05:47:31.998Z",
		"size": 109206,
		"path": "../public/assets/w_shanmugam-DCD9JuNd.jpg"
	},
	"/assets/w_vibhavari-CqYuHtxH.jpg": {
		"type": "image/jpeg",
		"etag": "\"28b82-SONP0dxOKiogqxvJ94WU1c2s5cw\"",
		"mtime": "2026-10-02T05:47:32.008Z",
		"size": 166786,
		"path": "../public/assets/w_vibhavari-CqYuHtxH.jpg"
	},
	"/assets/w_vivalayam_night-8C0Ixqk1.jpg": {
		"type": "image/jpeg",
		"etag": "\"11165-E4PxKx4v1DHCITlo6+cyWGW90sI\"",
		"mtime": "2026-10-02T05:47:32.009Z",
		"size": 69989,
		"path": "../public/assets/w_vivalayam_night-8C0Ixqk1.jpg"
	},
	"/assets/w_vivalayam_workshop-BS1GVKA8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1191c-cRUSw8wBH6q5ssMO5G+r/EaabRM\"",
		"mtime": "2026-10-02T05:47:32.010Z",
		"size": 71964,
		"path": "../public/assets/w_vivalayam_workshop-BS1GVKA8.jpg"
	},
	"/assets/w_vr_illam_day-DMjA9OWc.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c951-pns8YM0tbqFahqKEFzdQG/l2hfk\"",
		"mtime": "2026-10-02T05:47:32.011Z",
		"size": 117073,
		"path": "../public/assets/w_vr_illam_day-DMjA9OWc.jpg"
	},
	"/assets/x-DxL10BsH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90ee-oyJZk+ipAJZh7eRDlH8UgiLTSlg\"",
		"mtime": "2026-10-02T05:47:31.962Z",
		"size": 37102,
		"path": "../public/assets/x-DxL10BsH.js"
	},
	"/assets/w_sreelakam-CtwqAXxt.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b493-hmJHhP1Cc1hFUv7otwrRMTAldI0\"",
		"mtime": "2026-10-02T05:47:32.006Z",
		"size": 242835,
		"path": "../public/assets/w_sreelakam-CtwqAXxt.jpg"
	},
	"/assets/w_vr_illam_night-DF0GbMGd.jpg": {
		"type": "image/jpeg",
		"etag": "\"19732-/ZpWT8v40bWN6ayS14TLvYqud7A\"",
		"mtime": "2026-10-02T05:47:32.012Z",
		"size": 104242,
		"path": "../public/assets/w_vr_illam_night-DF0GbMGd.jpg"
	},
	"/assets/BM-DqhUH6qc.jpg": {
		"type": "image/jpeg",
		"etag": "\"3aeb04-ZVNB9plebcpc2IQ8G8vST/CEzJI\"",
		"mtime": "2026-10-02T05:47:31.974Z",
		"size": 3861252,
		"path": "../public/assets/BM-DqhUH6qc.jpg"
	},
	"/benchmark/bm_29_portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"87f259-eXFTe/p+3V20uB4Esb4VRkIEQpc\"",
		"mtime": "2026-10-01T13:22:25.981Z",
		"size": 8909401,
		"path": "../public/benchmark/bm_29_portrait.jpg"
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
