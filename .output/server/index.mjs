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
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"641-8llWObBOPfn6nzP/Sqh3A84+NKg\"",
		"mtime": "2026-10-01T10:24:16.903Z",
		"size": 1601,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"657-xw4bh8BBjz8JdRze3eFqm1A0BFk\"",
		"mtime": "2026-10-01T10:24:16.904Z",
		"size": 1623,
		"path": "../public/favicon.ico"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"641-8llWObBOPfn6nzP/Sqh3A84+NKg\"",
		"mtime": "2026-10-01T10:24:16.902Z",
		"size": 1601,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-09-29T09:12:43.562Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/1000038064.jpg-CR07LS3h.jpeg": {
		"type": "image/jpeg",
		"etag": "\"11157-icUdJMdvGyDQi1i2SPqHXshHxTw\"",
		"mtime": "2026-10-01T12:53:26.043Z",
		"size": 69975,
		"path": "../public/assets/1000038064.jpg-CR07LS3h.jpeg"
	},
	"/assets/1000038073.jpg-BDD8p-T8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"9d78-2affCOJuVlzxnB6w7t0ns91Gz38\"",
		"mtime": "2026-10-01T12:53:26.044Z",
		"size": 40312,
		"path": "../public/assets/1000038073.jpg-BDD8p-T8.jpeg"
	},
	"/assets/1000038071.jpg-d_dgydFk.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2823a-RRmSwOTp/y/vqBegXEcpV4WjsFs\"",
		"mtime": "2026-10-01T12:53:26.044Z",
		"size": 164410,
		"path": "../public/assets/1000038071.jpg-d_dgydFk.jpeg"
	},
	"/assets/1000315704.jpg-DtPh0ve6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"107c4-aPr5GFEaAxp4i7EQS607wIlTpVo\"",
		"mtime": "2026-10-01T12:53:26.105Z",
		"size": 67524,
		"path": "../public/assets/1000315704.jpg-DtPh0ve6.jpeg"
	},
	"/assets/about-LWv_B_sK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2733-uLlET5BV+eCjoBTaEDBNuQc1oBg\"",
		"mtime": "2026-10-01T12:53:25.943Z",
		"size": 10035,
		"path": "../public/assets/about-LWv_B_sK.js"
	},
	"/assets/admin-f5zOeKjE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b704-pu772TETt+iMsL87Yv9bgD7+JdQ\"",
		"mtime": "2026-10-01T12:53:25.944Z",
		"size": 46852,
		"path": "../public/assets/admin-f5zOeKjE.js"
	},
	"/assets/circle-check-CMt2uULG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-8Z1ex5CWZmtXAyjoZoXpgaii3gc\"",
		"mtime": "2026-10-01T12:53:25.945Z",
		"size": 163,
		"path": "../public/assets/circle-check-CMt2uULG.js"
	},
	"/assets/contact-DVL2zXcE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32c8-+6mo0JtiXPE4H8ofQXpvheaMltY\"",
		"mtime": "2026-10-01T12:53:25.946Z",
		"size": 13e3,
		"path": "../public/assets/contact-DVL2zXcE.js"
	},
	"/assets/content-store-BiC-wepR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6331-JKO428hTflK/16m/uviZ7aI4p1U\"",
		"mtime": "2026-10-01T12:53:25.948Z",
		"size": 25393,
		"path": "../public/assets/content-store-BiC-wepR.js"
	},
	"/assets/eye-B9CcuLrN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f1-2txVs3ixs2vp8Z8Wwq0bjQZlMf4\"",
		"mtime": "2026-10-01T12:53:25.948Z",
		"size": 241,
		"path": "../public/assets/eye-B9CcuLrN.js"
	},
	"/assets/benchmark-logo-Cwl4B9Rj.jpg": {
		"type": "image/jpeg",
		"etag": "\"175f-YcD0gGnpTi6QpCHrYWNstoZp8zQ\"",
		"mtime": "2026-10-01T12:53:26.115Z",
		"size": 5983,
		"path": "../public/assets/benchmark-logo-Cwl4B9Rj.jpg"
	},
	"/assets/mobile-dock-9RGUqBZ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95b-v5LGsxyi22ZfIHfksx8BBsc2xRE\"",
		"mtime": "2026-10-01T12:53:25.949Z",
		"size": 2395,
		"path": "../public/assets/mobile-dock-9RGUqBZ0.js"
	},
	"/assets/index-CCQk13vx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6111b-n7xuvOoEkSAsIwaAcX671d3wIzM\"",
		"mtime": "2026-10-01T12:53:25.943Z",
		"size": 397595,
		"path": "../public/assets/index-CCQk13vx.js"
	},
	"/assets/1000098716.jpg-BgombnIf.jpeg": {
		"type": "image/jpeg",
		"etag": "\"faa54-UYDBNnSeSc8Xn+QAINI2nL4JVP8\"",
		"mtime": "2026-10-01T12:53:26.105Z",
		"size": 1026644,
		"path": "../public/assets/1000098716.jpg-BgombnIf.jpeg"
	},
	"/assets/1000331144.jpg-YHYjMBPR.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17824d-uJqZUO06iivfcMM5mpY+04djD2g\"",
		"mtime": "2026-10-01T12:53:26.106Z",
		"size": 1540685,
		"path": "../public/assets/1000331144.jpg-YHYjMBPR.jpeg"
	},
	"/assets/1000342891.jpg-Bf8jdEoz.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1cd471-+d8m2ksXiou98PBxsPhdRGAgJgQ\"",
		"mtime": "2026-10-01T12:53:26.109Z",
		"size": 1889393,
		"path": "../public/assets/1000342891.jpg-Bf8jdEoz.jpeg"
	},
	"/assets/portfolio-BprvHdlM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"421-/okHGVQU1spkU6EOhZtvHzTEg2M\"",
		"mtime": "2026-10-01T12:53:25.953Z",
		"size": 1057,
		"path": "../public/assets/portfolio-BprvHdlM.js"
	},
	"/assets/routes-D3IiiXd6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e00-KnPPeleDDT/0ZbyzQ4cKRk6mUYQ\"",
		"mtime": "2026-10-01T12:53:25.973Z",
		"size": 3584,
		"path": "../public/assets/routes-D3IiiXd6.js"
	},
	"/assets/scroll-reveal-Bu5oK5Ab.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a1-QS+t04du38HzupU61rYb2TuECz4\"",
		"mtime": "2026-10-01T12:53:25.977Z",
		"size": 1185,
		"path": "../public/assets/scroll-reveal-Bu5oK5Ab.js"
	},
	"/assets/sparkles-BmacHPLe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1df-BcSnPwDHgVjkZ97PIvwA52fPJh4\"",
		"mtime": "2026-10-01T12:53:25.977Z",
		"size": 479,
		"path": "../public/assets/sparkles-BmacHPLe.js"
	},
	"/assets/styles-GDgyMQDZ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c10e-sajOQWuqwuYjT1lZP5HubXSRL+E\"",
		"mtime": "2026-10-01T12:53:26.138Z",
		"size": 114958,
		"path": "../public/assets/styles-GDgyMQDZ.css"
	},
	"/assets/w1-Ds9lggxD.jpg": {
		"type": "image/jpeg",
		"etag": "\"22813-wO4fSeIV/R4yC8Hxp8R+kuctKgc\"",
		"mtime": "2026-10-01T12:53:26.139Z",
		"size": 141331,
		"path": "../public/assets/w1-Ds9lggxD.jpg"
	},
	"/assets/w11-DXugiut_.jpg": {
		"type": "image/jpeg",
		"etag": "\"35a35-A6BelbDeQ4befzcf5CfdlB93tuM\"",
		"mtime": "2026-10-01T12:53:26.140Z",
		"size": 219701,
		"path": "../public/assets/w11-DXugiut_.jpg"
	},
	"/assets/1000038085.jpg-Cj3WXHQB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"217325-YfA/G89KPc2lGZDop+RGfQJ6tOs\"",
		"mtime": "2026-10-01T12:53:26.071Z",
		"size": 2192165,
		"path": "../public/assets/1000038085.jpg-Cj3WXHQB.jpeg"
	},
	"/assets/1000098713.jpg-qWpJblG_.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2139a7-yAr50eOY7tvG9OmB1QTIqN79Yxk\"",
		"mtime": "2026-10-01T12:53:26.098Z",
		"size": 2177447,
		"path": "../public/assets/1000098713.jpg-qWpJblG_.jpeg"
	},
	"/assets/w2-CZ9qoL2s.jpg": {
		"type": "image/jpeg",
		"etag": "\"22a20-ifCAPlEpAs04Pw9kvmUoMly6jCw\"",
		"mtime": "2026-10-01T12:53:26.141Z",
		"size": 141856,
		"path": "../public/assets/w2-CZ9qoL2s.jpg"
	},
	"/assets/w5-CyTc42Tx.jpg": {
		"type": "image/jpeg",
		"etag": "\"266e3-ETxMAC5bX5SEWSnqSMu61SvbcAs\"",
		"mtime": "2026-10-01T12:53:26.142Z",
		"size": 157411,
		"path": "../public/assets/w5-CyTc42Tx.jpg"
	},
	"/assets/w4-DbLAE5ip.jpg": {
		"type": "image/jpeg",
		"etag": "\"32929-XOpQm5v6LNN+TC/F5pwbngFPCno\"",
		"mtime": "2026-10-01T12:53:26.141Z",
		"size": 207145,
		"path": "../public/assets/w4-DbLAE5ip.jpg"
	},
	"/assets/w6-436m-RqM.jpg": {
		"type": "image/jpeg",
		"etag": "\"22b3d-8EP7pinqsfiQavpq/2TfYRXwNwY\"",
		"mtime": "2026-10-01T12:53:26.143Z",
		"size": 142141,
		"path": "../public/assets/w6-436m-RqM.jpg"
	},
	"/assets/w8-B0DkETEs.jpg": {
		"type": "image/jpeg",
		"etag": "\"33ede-HMCa2eEke1U7ImlSBfOdguLM5XE\"",
		"mtime": "2026-10-01T12:53:26.144Z",
		"size": 212702,
		"path": "../public/assets/w8-B0DkETEs.jpg"
	},
	"/assets/w9-3TZedEz1.jpg": {
		"type": "image/jpeg",
		"etag": "\"191e6-140LJ7YXz5CYHPfQKNDrUqyL8zg\"",
		"mtime": "2026-10-01T12:53:26.145Z",
		"size": 102886,
		"path": "../public/assets/w9-3TZedEz1.jpg"
	},
	"/assets/w_ayras_nest-De8rzAby.jpg": {
		"type": "image/jpeg",
		"etag": "\"fee6-j2pL4zQx5USpfQovUSKt/dBP1sc\"",
		"mtime": "2026-10-01T12:53:26.149Z",
		"size": 65254,
		"path": "../public/assets/w_ayras_nest-De8rzAby.jpg"
	},
	"/assets/w_annai_illam-Bl_yPjdG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b840-4cLDf760TFzMffPkF/QhdmDE7Iw\"",
		"mtime": "2026-10-01T12:53:26.146Z",
		"size": 112704,
		"path": "../public/assets/w_annai_illam-Bl_yPjdG.jpg"
	},
	"/assets/kannan4-COw0wKEI.png": {
		"type": "image/png",
		"etag": "\"2372ef-01Pv1xj4WUHrUQNHtDV02g0s8/g\"",
		"mtime": "2026-10-01T12:53:26.121Z",
		"size": 2323183,
		"path": "../public/assets/kannan4-COw0wKEI.png"
	},
	"/assets/w_evs_illam-DndjzbnV.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f8a2-sMPLd2mp5q8aPqgKkOeuYaTt6s0\"",
		"mtime": "2026-10-01T12:53:26.150Z",
		"size": 194722,
		"path": "../public/assets/w_evs_illam-DndjzbnV.jpg"
	},
	"/assets/1000038090.jpg-4VxGrxP6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"28867f-6qKCmE8KBPkFmICdS+2T/Ab83fg\"",
		"mtime": "2026-10-01T12:53:26.091Z",
		"size": 2655871,
		"path": "../public/assets/1000038090.jpg-4VxGrxP6.jpeg"
	},
	"/assets/w_fliqzo-19HrgrOy.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2bf-hpNDVeaGmre+WsOjgGoh5Np2koE\"",
		"mtime": "2026-10-01T12:53:26.150Z",
		"size": 45759,
		"path": "../public/assets/w_fliqzo-19HrgrOy.jpg"
	},
	"/assets/w_giripriya-DP2-PlYq.jpg": {
		"type": "image/jpeg",
		"etag": "\"1593c-GVHFv378mFeL7+FOnqCLQFhw5Ww\"",
		"mtime": "2026-10-01T12:53:26.150Z",
		"size": 88380,
		"path": "../public/assets/w_giripriya-DP2-PlYq.jpg"
	},
	"/assets/w_lahari_house-BP4tF_vz.jpg": {
		"type": "image/jpeg",
		"etag": "\"153fa-0l3cU7bqKiQRPow63evgpcXRGrQ\"",
		"mtime": "2026-10-01T12:53:26.152Z",
		"size": 87034,
		"path": "../public/assets/w_lahari_house-BP4tF_vz.jpg"
	},
	"/assets/BM-DqhUH6qc.jpg": {
		"type": "image/jpeg",
		"etag": "\"3aeb04-ZVNB9plebcpc2IQ8G8vST/CEzJI\"",
		"mtime": "2026-10-01T12:53:26.110Z",
		"size": 3861252,
		"path": "../public/assets/BM-DqhUH6qc.jpg"
	},
	"/assets/w_sairam_agastya-lu7cbXfL.jpg": {
		"type": "image/jpeg",
		"etag": "\"15196-KK6JTDFhCH9vMQ6GygAgr/2fAPM\"",
		"mtime": "2026-10-01T12:53:26.154Z",
		"size": 86422,
		"path": "../public/assets/w_sairam_agastya-lu7cbXfL.jpg"
	},
	"/assets/w_punniyamoorthy-BaEMFvdt.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eb62-J0zqtWfqADrJeFfu21J1FXPZ0xs\"",
		"mtime": "2026-10-01T12:53:26.154Z",
		"size": 125794,
		"path": "../public/assets/w_punniyamoorthy-BaEMFvdt.jpg"
	},
	"/assets/w_shanmugam-DCD9JuNd.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa96-j5ccYT9hJzcWOu/ATAKYG+pCLWs\"",
		"mtime": "2026-10-01T12:53:26.156Z",
		"size": 109206,
		"path": "../public/assets/w_shanmugam-DCD9JuNd.jpg"
	},
	"/assets/w_shanthi_villa-B4Day4N1.jpg": {
		"type": "image/jpeg",
		"etag": "\"23570-ITnFDhMcRZDNOq/SF8IQvPg+DdI\"",
		"mtime": "2026-10-01T12:53:26.156Z",
		"size": 144752,
		"path": "../public/assets/w_shanthi_villa-B4Day4N1.jpg"
	},
	"/assets/w_vivalayam_workshop-BS1GVKA8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1191c-cRUSw8wBH6q5ssMO5G+r/EaabRM\"",
		"mtime": "2026-10-01T12:53:26.159Z",
		"size": 71964,
		"path": "../public/assets/w_vivalayam_workshop-BS1GVKA8.jpg"
	},
	"/assets/w_vibhavari-CqYuHtxH.jpg": {
		"type": "image/jpeg",
		"etag": "\"28b82-SONP0dxOKiogqxvJ94WU1c2s5cw\"",
		"mtime": "2026-10-01T12:53:26.158Z",
		"size": 166786,
		"path": "../public/assets/w_vibhavari-CqYuHtxH.jpg"
	},
	"/assets/w_sreelakam-CtwqAXxt.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b493-hmJHhP1Cc1hFUv7otwrRMTAldI0\"",
		"mtime": "2026-10-01T12:53:26.157Z",
		"size": 242835,
		"path": "../public/assets/w_sreelakam-CtwqAXxt.jpg"
	},
	"/assets/w_vivalayam_night-8C0Ixqk1.jpg": {
		"type": "image/jpeg",
		"etag": "\"11165-E4PxKx4v1DHCITlo6+cyWGW90sI\"",
		"mtime": "2026-10-01T12:53:26.159Z",
		"size": 69989,
		"path": "../public/assets/w_vivalayam_night-8C0Ixqk1.jpg"
	},
	"/assets/w_vr_illam_day-DMjA9OWc.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c951-pns8YM0tbqFahqKEFzdQG/l2hfk\"",
		"mtime": "2026-10-01T12:53:26.160Z",
		"size": 117073,
		"path": "../public/assets/w_vr_illam_day-DMjA9OWc.jpg"
	},
	"/assets/x-DxL10BsH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90ee-oyJZk+ipAJZh7eRDlH8UgiLTSlg\"",
		"mtime": "2026-10-01T12:53:25.978Z",
		"size": 37102,
		"path": "../public/assets/x-DxL10BsH.js"
	},
	"/assets/w_vr_illam_night-DF0GbMGd.jpg": {
		"type": "image/jpeg",
		"etag": "\"19732-/ZpWT8v40bWN6ayS14TLvYqud7A\"",
		"mtime": "2026-10-01T12:53:26.161Z",
		"size": 104242,
		"path": "../public/assets/w_vr_illam_night-DF0GbMGd.jpg"
	},
	"/assets/optimal-Am7-uU8i.png": {
		"type": "image/png",
		"etag": "\"231146-h75+7K4e/VkMa2yaGlLgt+wtXnQ\"",
		"mtime": "2026-10-01T12:53:26.135Z",
		"size": 2298182,
		"path": "../public/assets/optimal-Am7-uU8i.png"
	},
	"/assets/w_struzon-BwjgowyF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c192-5C3vjQUlR/QB66G5XBt4fXCncYA\"",
		"mtime": "2026-10-01T12:53:26.158Z",
		"size": 115090,
		"path": "../public/assets/w_struzon-BwjgowyF.jpg"
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
