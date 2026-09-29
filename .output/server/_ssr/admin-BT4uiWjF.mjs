import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleAlert, C as GripVertical, D as ExternalLink, E as EyeOff, F as ArrowUp, L as ArrowLeft, R as ArrowDown, S as Image, T as Eye, _ as Mail, a as Trash2, b as Layers, c as SlidersHorizontal, d as RotateCcw, f as Plus, g as MapPin, i as TriangleAlert, k as CircleCheck, l as ShieldCheck, m as PenLine, n as X, r as Upload, s as Sparkles, u as Search, v as LogOut, y as Lock } from "../_libs/lucide-react.mjs";
import { a as useProjects, i as useCategories, o as useSlides, r as fileToDataUrl } from "./content-store-DLrG9bqg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BT4uiWjF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AUTH_STORAGE_KEY = "benchmark_admin_auth_session";
var ADMIN_EMAIL = "admin@gmail.com";
var ADMIN_PASS = "admin@123";
function AdminStudio() {
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(false);
	const [loginEmail, setLoginEmail] = (0, import_react.useState)("");
	const [loginPassword, setLoginPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [loginError, setLoginError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem(AUTH_STORAGE_KEY) === "true") setIsAuthenticated(true);
	}, []);
	const handleLogin = (e) => {
		e.preventDefault();
		if (loginEmail.trim().toLowerCase() === ADMIN_EMAIL && loginPassword === ADMIN_PASS) {
			sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
			setIsAuthenticated(true);
			setLoginError("");
		} else setLoginError("Invalid credentials. Use admin@gmail.com / admin@123");
	};
	const handleLogout = () => {
		sessionStorage.removeItem(AUTH_STORAGE_KEY);
		setIsAuthenticated(false);
		setLoginEmail("");
		setLoginPassword("");
	};
	const [activeTab, setActiveTab] = (0, import_react.useState)("slides");
	const [projects, setProjects, resetProjects] = useProjects();
	const [slides, setSlides, resetSlides] = useSlides();
	const [categories, setCategories, resetCategories] = useCategories();
	const [isCategoryModalOpen, setIsCategoryModalOpen] = (0, import_react.useState)(false);
	const [newCatLabel, setNewCatLabel] = (0, import_react.useState)("");
	const [draggedCatIdx, setDraggedCatIdx] = (0, import_react.useState)(null);
	const [confirmDialog, setConfirmDialog] = (0, import_react.useState)({
		isOpen: false,
		title: "",
		message: "",
		onConfirm: () => {}
	});
	const [toastMsg, setToastMsg] = (0, import_react.useState)(null);
	const showToast = (msg) => {
		setToastMsg(msg);
		setTimeout(() => setToastMsg(null), 3e3);
	};
	const handleAddCategory = (e) => {
		e.preventDefault();
		const clean = newCatLabel.trim();
		if (!clean) return;
		if (categories.filter((c) => c.id !== "all").length >= 8) {
			alert(`Maximum of 8 categories reached. Keeping categories under 8 ensures the website navigation bar and filter tabs remain clean and uncluttered.`);
			return;
		}
		const id = clean.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
		if (categories.some((c) => c.id === id || c.label.toLowerCase() === clean.toLowerCase())) {
			alert("A category with this name already exists.");
			return;
		}
		setCategories([...categories, {
			id,
			label: clean
		}]);
		setNewCatLabel("");
		showToast(`Category "${clean}" added!`);
	};
	const requestDeleteCategory = (id, label) => {
		if (id === "all") {
			alert("The 'All Works' tab cannot be removed.");
			return;
		}
		setConfirmDialog({
			isOpen: true,
			title: `Delete Category "${label}"?`,
			message: `Are you sure you want to delete the "${label}" category tab?`,
			detail: "Existing project cards will remain safe in your portfolio database.",
			confirmText: "Yes, Delete Category",
			badge: "Category Tab",
			onConfirm: () => {
				setCategories(categories.filter((c) => c.id !== id));
				showToast(`Category "${label}" deleted.`);
			}
		});
	};
	const handleMoveCategory = (index, direction) => {
		const targetIdx = direction === "up" ? index - 1 : index + 1;
		if (targetIdx < 0 || targetIdx >= categories.length) return;
		const newCats = [...categories];
		const [moved] = newCats.splice(index, 1);
		if (!moved) return;
		newCats.splice(targetIdx, 0, moved);
		setCategories(newCats);
	};
	const handleCategoryDragStart = (idx) => {
		setDraggedCatIdx(idx);
	};
	const handleCategoryDrop = (dropIndex) => {
		if (draggedCatIdx === null || draggedCatIdx === dropIndex) return;
		const newCats = [...categories];
		const [moved] = newCats.splice(draggedCatIdx, 1);
		if (!moved) return;
		newCats.splice(dropIndex, 0, moved);
		setCategories(newCats);
		setDraggedCatIdx(null);
		showToast("Category order updated!");
	};
	const [editingSlide, setEditingSlide] = (0, import_react.useState)(null);
	const [isNewSlide, setIsNewSlide] = (0, import_react.useState)(false);
	const slideFileRef = (0, import_react.useRef)(null);
	const handleOpenNewSlide = () => {
		setEditingSlide({
			id: "slide-" + Date.now(),
			img: "",
			title: "",
			category: "Residential & Villas",
			materials: "SS 304 · PVD Gold · Acrylic",
			location: "Coimbatore, Tamil Nadu",
			lighting: "Warm Golden Backlit (3000K)"
		});
		setIsNewSlide(true);
	};
	const handleSaveSlide = (e) => {
		e.preventDefault();
		if (!editingSlide) return;
		if (!editingSlide.img) {
			alert("Please upload or provide an image for the slide.");
			return;
		}
		const cleanedLocation = editingSlide.location?.trim() || "Coimbatore";
		const slideToSave = {
			...editingSlide,
			location: cleanedLocation,
			title: editingSlide.title?.trim() || cleanedLocation,
			category: editingSlide.category || "Name Boards",
			materials: editingSlide.materials || "Premium Signage",
			lighting: editingSlide.lighting || "Illuminated / Non-Lit"
		};
		if (isNewSlide) {
			setSlides([slideToSave, ...slides]);
			showToast("Hero slide created successfully!");
		} else {
			setSlides(slides.map((s) => s.id === slideToSave.id ? slideToSave : s));
			showToast("Hero slide updated!");
		}
		setEditingSlide(null);
	};
	const requestDeleteSlide = (slide) => {
		setConfirmDialog({
			isOpen: true,
			title: "Delete Hero Slide?",
			message: `Are you sure you want to remove this slide from the showcase?`,
			detail: slide.title ? `"${slide.title}"` : "This slide will no longer rotate on the homepage hero.",
			itemPreview: slide.img,
			confirmText: "Yes, Delete Slide",
			badge: "Hero Slide",
			onConfirm: () => {
				setSlides(slides.filter((s) => s.id !== slide.id));
				showToast("Hero slide removed.");
			}
		});
	};
	const requestClearSlidePhoto = () => {
		if (!editingSlide) return;
		setConfirmDialog({
			isOpen: true,
			title: "Clear Slide Photo?",
			message: "Are you sure you want to remove the current image from this slide?",
			detail: "You will need to upload or paste a new image before saving.",
			itemPreview: editingSlide.img,
			confirmText: "Yes, Clear Photo",
			badge: "Photography",
			onConfirm: () => {
				setEditingSlide({
					...editingSlide,
					img: ""
				});
				showToast("Photo cleared from slide editor.");
			}
		});
	};
	const handleMoveSlide = (index, direction) => {
		const targetIdx = direction === "up" ? index - 1 : index + 1;
		if (targetIdx < 0 || targetIdx >= slides.length) return;
		const newSlides = [...slides];
		const [moved] = newSlides.splice(index, 1);
		if (!moved) return;
		newSlides.splice(targetIdx, 0, moved);
		setSlides(newSlides);
	};
	const handleSlideImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file || !editingSlide) return;
		try {
			const dataUrl = await fileToDataUrl(file);
			setEditingSlide({
				...editingSlide,
				img: dataUrl
			});
		} catch {
			alert("Failed to process image file.");
		}
	};
	const [editingProject, setEditingProject] = (0, import_react.useState)(null);
	const [isNewProject, setIsNewProject] = (0, import_react.useState)(false);
	const [galleryFilter, setGalleryFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const projectFilesRef = (0, import_react.useRef)(null);
	const handleOpenNewProject = () => {
		setEditingProject({
			id: "p-" + Date.now(),
			images: [],
			title: "",
			category: "residential",
			categoryLabel: "Residential & Villas",
			materials: [
				"SS 304 Satin",
				"PVD Gold",
				"Cast Acrylic"
			],
			lighting: "Non-Illuminated Daylight",
			hasLED: false,
			ledColor: "none",
			location: "Coimbatore, Tamil Nadu",
			clientType: "Private Villa",
			description: "",
			dimensions: "24 in × 12 in",
			mounting: "Standoff studs with expansion bolts"
		});
		setIsNewProject(true);
	};
	const handleSaveProject = (e) => {
		e.preventDefault();
		if (!editingProject) return;
		if (editingProject.images.length === 0) {
			alert("Please upload at least one image for the project.");
			return;
		}
		const cleanedLocation = editingProject.location?.trim() || "Coimbatore";
		const catOption = categories.find((c) => c.id === editingProject.category);
		const updated = {
			...editingProject,
			location: cleanedLocation,
			title: editingProject.title?.trim() || cleanedLocation,
			categoryLabel: catOption ? catOption.label : editingProject.category,
			materials: editingProject.materials?.length ? editingProject.materials : ["Custom Architectural Signage"],
			lighting: editingProject.lighting || "Custom Finish",
			dimensions: editingProject.dimensions || "Custom Size"
		};
		if (isNewProject) {
			setProjects([updated, ...projects]);
			showToast("Gallery photo added!");
		} else {
			setProjects(projects.map((p) => p.id === updated.id ? updated : p));
			showToast("Gallery photo updated!");
		}
		setEditingProject(null);
	};
	const requestDeleteProject = (proj) => {
		setConfirmDialog({
			isOpen: true,
			title: "Delete Portfolio Project?",
			message: `Are you sure you want to delete "${proj.title}" from the gallery?`,
			detail: "This project card, specifications, and associated photography will be permanently deleted.",
			itemPreview: proj.images[0],
			confirmText: "Yes, Delete Project",
			badge: proj.categoryLabel || proj.category,
			onConfirm: () => {
				setProjects(projects.filter((p) => p.id !== proj.id));
				showToast("Project deleted from gallery.");
			}
		});
	};
	const handleProjectImageUpload = async (e) => {
		const files = e.target.files;
		if (!files || files.length === 0 || !editingProject) return;
		try {
			const dataUrls = [];
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				if (!file) continue;
				const dataUrl = await fileToDataUrl(file);
				dataUrls.push(dataUrl);
			}
			setEditingProject({
				...editingProject,
				images: [...editingProject.images, ...dataUrls]
			});
		} catch {
			alert("Failed to process uploaded images.");
		}
	};
	const requestRemoveProjectImage = (index) => {
		if (!editingProject) return;
		const targetImg = editingProject.images[index];
		setConfirmDialog({
			isOpen: true,
			title: `Delete Photo #${index + 1}?`,
			message: "Are you sure you want to remove this photo from the project card?",
			detail: "The photo will be removed from this project's interactive slideshow.",
			itemPreview: targetImg,
			confirmText: "Yes, Remove Photo",
			badge: `Photo #${index + 1}`,
			onConfirm: () => {
				const newImgs = [...editingProject.images];
				newImgs.splice(index, 1);
				setEditingProject({
					...editingProject,
					images: newImgs
				});
				showToast("Photo removed from project.");
			}
		});
	};
	const requestResetDefaults = () => {
		setConfirmDialog({
			isOpen: true,
			title: "Reset Workshop Defaults?",
			message: "Restore all hero slides and portfolio projects to original factory defaults?",
			detail: "Any custom images, projects, or text edits made in this browser will be reset.",
			confirmText: "Yes, Reset Everything",
			badge: "Factory Reset",
			onConfirm: () => {
				resetSlides();
				resetProjects();
				showToast("Content restored to original workshop defaults.");
			}
		});
	};
	const requestResetCategories = () => {
		setConfirmDialog({
			isOpen: true,
			title: "Restore Default Categories?",
			message: "Reset all category tabs back to standard workshop categories?",
			detail: "Custom category names and custom drag-and-drop order will be restored.",
			confirmText: "Yes, Restore Categories",
			badge: "Category Reset",
			onConfirm: () => {
				resetCategories();
				showToast("Categories restored to default.");
			}
		});
	};
	const filteredProjects = projects.filter((p) => {
		const matchesCat = galleryFilter === "all" || p.category === galleryFilter;
		const matchesSearch = searchQuery.trim() === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()) || p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
		return matchesCat && matchesSearch;
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#FAF9F6] px-4 py-12 text-stone-900 antialiased selection:bg-amber-500 selection:text-stone-950",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-stone-950 shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900",
						children: "Benchmark Atelier Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs sm:text-sm text-stone-600",
						children: "Secure studio login to manage gallery & hero showcase content"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-stone-200/90 bg-white p-7 sm:p-9 shadow-xl shadow-stone-200/50",
				children: [
					loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-2.5 rounded-2xl bg-rose-50 border border-rose-200 p-3.5 text-xs font-semibold text-rose-700 animate-in fade-in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loginError })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleLogin,
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-stone-700",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-stone-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										value: loginEmail,
										onChange: (e) => setLoginEmail(e.target.value),
										placeholder: "admin@gmail.com",
										className: "w-full rounded-xl border border-stone-300/80 bg-[#FAF9F6] pl-10 pr-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-amber-500 focus:bg-white"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-stone-700",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-stone-500 font-mono",
										children: "admin@123"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-stone-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: showPassword ? "text" : "password",
											value: loginPassword,
											onChange: (e) => setLoginPassword(e.target.value),
											placeholder: "••••••••",
											className: "w-full rounded-xl border border-stone-300/80 bg-[#FAF9F6] pl-10 pr-10 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-amber-500 focus:bg-white"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPassword(!showPassword),
											className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700",
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white py-3.5 text-sm font-semibold shadow-md transition-all active:scale-[0.99]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enter Admin Studio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-amber-400" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 border-t border-stone-100 pt-4 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Return to Public Website" })]
						})
					})
				]
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#FAF9F6] text-stone-900 antialiased font-sans selection:bg-amber-500 selection:text-stone-950",
		children: [
			toastMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-5 right-5 z-50 flex items-center gap-2.5 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: toastMsg })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-stone-200/90 bg-white/95 backdrop-blur-md px-4 sm:px-8 py-3.5 shadow-2xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "group flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline font-medium",
									children: "Public Site"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-stone-200" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-base sm:text-lg font-bold tracking-tight text-stone-900",
									children: "Benchmark Studio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-700",
									children: "Content Manager"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: requestResetDefaults,
								className: "flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5 text-stone-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: "Reset Defaults"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								target: "_blank",
								className: "flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-stone-950 transition-all shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Site" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleLogout,
								className: "flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white hover:bg-rose-50 hover:border-rose-200 hover:text-rose-700 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Logout"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-4 sm:px-8 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-stone-200 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 rounded-2xl bg-stone-100 p-1.5 border border-stone-200/80 w-fit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("slides"),
								className: `flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${activeTab === "slides" ? "bg-white text-stone-900 shadow-sm font-bold" : "text-stone-600 hover:text-stone-900"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Hero Slideshow (",
									slides.length,
									")"
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("gallery"),
								className: `flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${activeTab === "gallery" ? "bg-white text-stone-900 shadow-sm font-bold" : "text-stone-600 hover:text-stone-900"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Portfolio Gallery (",
									projects.length,
									")"
								] })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: activeTab === "slides" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleOpenNewSlide,
								className: "flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Hero Slide" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleOpenNewProject,
								className: "flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Gallery Project" })]
							})
						})]
					}),
					activeTab === "slides" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-stone-900",
							children: "Hero Crystal Glass Showcase"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-stone-500",
							children: "These slides rotate automatically on the right side of the homepage hero. Upload photos or edit specifications below."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: slides.map((slide, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-4 transition-all hover:border-stone-400/80 hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-950 border border-stone-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: slide.img,
									alt: slide.title,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute top-2.5 left-2.5 rounded-md bg-stone-900/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-amber-300",
									children: ["Slide #", idx + 1]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3.5 flex items-center justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-stone-900 font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slide.location })]
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between border-t border-stone-100 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Move slide up",
										disabled: idx === 0,
										onClick: () => handleMoveSlide(idx, "up"),
										className: "rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-30 disabled:hover:bg-transparent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Move slide down",
										disabled: idx === slides.length - 1,
										onClick: () => handleMoveSlide(idx, "down"),
										className: "rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-30 disabled:hover:bg-transparent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setEditingSlide(slide);
											setIsNewSlide(false);
										},
										className: "flex items-center gap-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Delete hero slide",
										onClick: () => requestDeleteSlide(slide),
										className: "rounded-lg p-1.5 text-rose-500 hover:bg-rose-50 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									})]
								})]
							})]
						}, slide.id))
					})] }),
					activeTab === "gallery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap sm:overflow-visible",
								children: [categories.map((c) => {
									const count = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
									const isSelected = galleryFilter === c.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setGalleryFilter(c.id),
										className: `shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${isSelected ? "bg-amber-500 text-stone-950 shadow-xs font-bold" : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"}`,
										children: [
											c.label,
											" (",
											count,
											")"
										]
									}, c.id);
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIsCategoryModalOpen(true),
									className: "shrink-0 whitespace-nowrap flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-amber-50 hover:bg-amber-100/90 px-3.5 py-1.5 text-xs font-bold text-amber-900 transition-all shadow-2xs active:scale-95",
									title: "Add, reorder, or organize portfolio categories",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-3.5 text-amber-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Categories (",
										categories.filter((c) => c.id !== "all").length,
										"/",
										8,
										")"
									] })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-[260px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-stone-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									placeholder: "Search projects, materials, location...",
									className: "w-full rounded-xl border border-stone-200 bg-white pl-9 pr-4 py-2 text-xs text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors shadow-2xs"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: filteredProjects.map((proj) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-4 transition-all hover:border-stone-400/80 hover:shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-950 border border-stone-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: proj.images[0] || "",
										alt: proj.title,
										className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute top-2.5 right-2.5 rounded-md bg-stone-900/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white",
										children: [
											proj.images.length,
											" ",
											proj.images.length === 1 ? "Photo" : "Photos"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3.5 flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-xs text-stone-900 font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proj.location })]
									})
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-end gap-2 border-t border-stone-100 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setEditingProject(proj);
											setIsNewProject(false);
										},
										className: "flex items-center gap-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Project" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Delete gallery project",
										onClick: () => requestDeleteProject(proj),
										className: "rounded-lg p-1.5 text-rose-500 hover:bg-rose-50 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									})]
								})]
							}, proj.id))
						}),
						filteredProjects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-stone-200 bg-white p-12 text-center shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-stone-500",
								children: "No projects found matching your search filter."
							})
						})
					] })
				]
			}),
			editingSlide && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-in fade-in overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative my-8 w-full max-w-2xl rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-stone-100 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-stone-900",
							children: isNewSlide ? "Create Hero Showcase Slide" : "Edit Hero Showcase Slide"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-stone-500 mt-0.5",
							children: "Customize the image and details displayed on the hero crystal acrylic glass board."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingSlide(null),
							className: "rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveSlide,
						className: "mt-6 flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-stone-200/90 bg-[#FAF9F6] p-4.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2",
									children: "Slide Photography"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
									children: [editingSlide.img ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[16/10] w-full sm:w-40 shrink-0 overflow-hidden rounded-xl border border-stone-200 bg-stone-950 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: editingSlide.img,
											alt: "Preview",
											className: "size-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute bottom-1.5 left-1.5 rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400",
											children: "Active Photo"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex aspect-[16/10] w-full sm:w-40 shrink-0 flex-col items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-white text-stone-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] mt-1 font-medium",
											children: "No photo set"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2.5 flex-1 w-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													ref: slideFileRef,
													accept: "image/*",
													onChange: handleSlideImageUpload,
													className: "hidden"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => slideFileRef.current?.click(),
													className: "flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white px-4 py-2.5 text-xs font-semibold shadow-xs transition-all active:scale-95",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: editingSlide.img ? "Replace Photo" : "Upload Photo from Device" })]
												}),
												editingSlide.img && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: requestClearSlidePhoto,
													className: "flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-600 px-3 py-2 text-xs font-semibold transition-colors",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Clear Photo" })]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: editingSlide.img,
												onChange: (e) => setEditingSlide({
													...editingSlide,
													img: e.target.value
												}),
												placeholder: "or paste direct image URL (e.g. https://... or /src/...)",
												className: "w-full rounded-xl border border-stone-300/80 bg-white px-3.5 py-2 text-xs text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 font-mono"
											})
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-bold text-stone-800",
										children: ["Installation Location ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-600",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono text-stone-400",
										children: [editingSlide.location.length, "/40"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									maxLength: 40,
									value: editingSlide.location,
									onChange: (e) => setEditingSlide({
										...editingSlide,
										location: e.target.value
									}),
									placeholder: "e.g. Avinashi Road, Coimbatore",
									className: "rounded-xl border border-stone-300/90 bg-white px-4 py-3 text-sm font-semibold text-stone-900 outline-none focus:border-amber-500 shadow-2xs"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-end gap-3 border-t border-stone-100 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setEditingSlide(null),
									className: "rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-2.5 text-xs font-semibold text-stone-700 transition-colors",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-xl bg-stone-900 hover:bg-stone-800 px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95",
									children: "Save Hero Slide"
								})]
							})
						]
					})]
				})
			}),
			editingProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-in fade-in overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative my-8 w-full max-w-2xl rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-stone-100 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-stone-900",
							children: isNewProject ? "Add New Portfolio Project" : "Edit Portfolio Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-stone-500 mt-0.5",
							children: "Update gallery photos, materials, specifications, and client details."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingProject(null),
							className: "rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveProject,
						className: "mt-6 flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-stone-200/90 bg-[#FAF9F6] p-4.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-bold uppercase tracking-wider text-stone-700",
										children: [
											"Project Photographs (",
											editingProject.images.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-stone-500",
										children: "Multiple photos create an interactive card slideshow"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [
										editingProject.images.map((imgUrl, imgIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "group relative size-22 overflow-hidden rounded-2xl border border-stone-200 bg-stone-950 shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imgUrl,
												alt: `Photo ${imgIdx + 1}`,
												className: "size-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-0 flex flex-col items-center justify-center bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity p-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													"aria-label": `Delete photo ${imgIdx + 1}`,
													onClick: () => requestRemoveProjectImage(imgIdx),
													className: "flex items-center gap-1 rounded-lg bg-rose-600 px-2 py-1 text-[10px] font-bold text-white hover:bg-rose-500",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delete" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[9px] text-stone-300 mt-1",
													children: ["Photo #", imgIdx + 1]
												})]
											})]
										}, imgIdx)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											ref: projectFilesRef,
											multiple: true,
											accept: "image/*",
											onChange: handleProjectImageUpload,
											className: "hidden"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => projectFilesRef.current?.click(),
											className: "flex size-22 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-white text-stone-600 hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50/40 transition-colors shadow-2xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-6 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] mt-1 font-bold",
												children: "Add Photo"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-bold text-stone-800",
										children: ["Installation Location / Landmark ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-600",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono text-stone-400",
										children: [editingProject.location.length, "/50"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									maxLength: 50,
									value: editingProject.location,
									onChange: (e) => setEditingProject({
										...editingProject,
										location: e.target.value
									}),
									placeholder: "e.g. RS Puram, Coimbatore",
									className: "rounded-xl border border-stone-300/90 bg-white px-4 py-3 text-sm font-semibold text-stone-900 outline-none focus:border-amber-500 shadow-2xs"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-end gap-3 border-t border-stone-100 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setEditingProject(null),
									className: "rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-2.5 text-xs font-semibold text-stone-700 transition-colors",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-xl bg-stone-900 hover:bg-stone-800 px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95",
									children: "Save Gallery Photo"
								})]
							})
						]
					})]
				})
			}),
			isCategoryModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-in fade-in overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative my-8 w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-stone-100 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-stone-900",
									children: "Manage Portfolio Categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-amber-100 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-amber-800",
									children: [
										categories.filter((c) => c.id !== "all").length,
										" / ",
										8
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-stone-500 mt-0.5",
								children: "Drag and drop to rearrange order, or add/delete custom categories."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsCategoryModalOpen(false),
								className: "rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAddCategory,
							className: "mt-5 flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold text-stone-800",
								children: "Add New Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										maxLength: 24,
										value: newCatLabel,
										onChange: (e) => setNewCatLabel(e.target.value),
										disabled: categories.filter((c) => c.id !== "all").length >= 8,
										placeholder: categories.filter((c) => c.id !== "all").length >= 8 ? "Maximum limit reached (8/8)" : "e.g. Heritage & Temples",
										className: "w-full rounded-xl border border-stone-300/90 bg-white px-3.5 py-2.5 text-xs font-medium text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all disabled:bg-stone-100 disabled:text-stone-400"
									}), newCatLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-stone-400",
										children: [newCatLabel.length, "/24"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: !newCatLabel.trim() || categories.filter((c) => c.id !== "all").length >= 8,
									className: "flex items-center gap-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-300 text-white px-4 py-2.5 text-xs font-bold shadow-xs transition-all active:scale-95 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add" })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold uppercase tracking-wider text-stone-700",
									children: "Category Order (Drag or use arrows)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-stone-400",
									children: "Synced live to filter bar"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-1",
								children: categories.map((cat, idx) => {
									const isAll = cat.id === "all";
									const isBeingDragged = draggedCatIdx === idx;
									const projectCount = isAll ? projects.length : projects.filter((p) => p.category === cat.id).length;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										draggable: !isAll,
										onDragStart: () => !isAll && handleCategoryDragStart(idx),
										onDragOver: (e) => {
											e.preventDefault();
										},
										onDrop: () => !isAll && handleCategoryDrop(idx),
										className: `group flex items-center justify-between rounded-xl border p-2.5 sm:p-3 transition-all ${isBeingDragged ? "border-amber-400 bg-amber-50/60 opacity-50 shadow-inner" : isAll ? "border-stone-200 bg-stone-50/80" : "border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50/50 shadow-2xs cursor-grab active:cursor-grabbing"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5 min-w-0",
											children: [!isAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-stone-400 hover:text-stone-700 cursor-grab active:cursor-grabbing shrink-0",
												title: "Drag to reorder",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "size-4" })
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-stone-300 text-xs font-mono font-bold w-4 text-center",
												children: "•"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-display text-xs sm:text-sm font-bold text-stone-900 truncate",
														children: cat.label
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-600 shrink-0",
														children: [
															projectCount,
															" ",
															projectCount === 1 ? "project" : "projects"
														]
													}),
													isAll && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-md bg-stone-200/80 px-1.5 py-0.5 text-[9px] font-bold uppercase text-stone-600",
														children: "Pinned"
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1 shrink-0",
											children: !isAll && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "Move category up",
													disabled: idx <= 1,
													onClick: () => handleMoveCategory(idx, "up"),
													className: "rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-20 disabled:hover:bg-transparent",
													title: "Move up",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "Move category down",
													disabled: idx === categories.length - 1,
													onClick: () => handleMoveCategory(idx, "down"),
													className: "rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-20 disabled:hover:bg-transparent",
													title: "Move down",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "Delete category",
													onClick: () => requestDeleteCategory(cat.id, cat.label),
													className: "rounded-lg p-1 text-rose-500 hover:bg-rose-50 transition-colors ml-1",
													title: "Delete category",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
												})
											] })
										})]
									}, cat.id);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between border-t border-stone-100 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: requestResetCategories,
								className: "flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 px-3.5 py-2 text-xs font-semibold text-stone-600 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5 text-stone-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Restore Defaults" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsCategoryModalOpen(false),
								className: "rounded-xl bg-stone-900 hover:bg-stone-800 px-6 py-2 text-xs font-bold text-white shadow-md transition-all active:scale-95",
								children: "Done"
							})]
						})
					]
				})
			}),
			confirmDialog.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-60 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-200",
					role: "dialog",
					"aria-modal": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 border border-rose-200/80 shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-base sm:text-lg font-bold text-stone-900 leading-tight",
											children: confirmDialog.title
										}), confirmDialog.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] font-bold uppercase text-stone-600",
											children: confirmDialog.badge
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs font-semibold text-stone-800 leading-relaxed",
										children: confirmDialog.message
									}),
									confirmDialog.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-stone-500 leading-relaxed",
										children: confirmDialog.detail
									})
								]
							})]
						}),
						confirmDialog.itemPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#FAF9F6] p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-xl border border-stone-200 bg-stone-950",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: confirmDialog.itemPreview,
									alt: "Preview",
									className: "size-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-rose-600 block",
									children: "Target Item"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-stone-700 truncate mt-0.5",
									children: "This item will be permanently removed."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-end gap-2.5 border-t border-stone-100 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setConfirmDialog({
									...confirmDialog,
									isOpen: false
								}),
								className: "flex-1 sm:flex-none rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-700 transition-colors",
								children: confirmDialog.cancelText || "Cancel, Keep It"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									confirmDialog.onConfirm();
									setConfirmDialog({
										...confirmDialog,
										isOpen: false
									});
								},
								className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 text-xs font-bold shadow-md transition-all active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: confirmDialog.confirmText || "Yes, Delete" })]
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminStudio as component };
