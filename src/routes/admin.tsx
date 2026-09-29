import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  useProjects,
  useSlides,
  useCategories,
  MAX_CUSTOM_CATEGORIES,
  fileToDataUrl,
  type CategoryItem,
} from "@/lib/content-store";
import type { Project } from "@/components/portfolio-section";
import type { SlideItem } from "@/components/hero-slideshow";
import {
  Sparkles,
  Plus,
  Trash2,
  Edit3,
  Upload,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Check,
  X,
  Layers,
  Image as ImageIcon,
  ArrowLeft,
  ExternalLink,
  Search,
  Lock,
  LogOut,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  GripVertical,
  SlidersHorizontal,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Content Studio — Benchmark Name Boards" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminStudio,
});

const AUTH_STORAGE_KEY = "benchmark_admin_auth_session";
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASS = "admin@123";

const CATEGORY_OPTIONS = [
  { value: "residential", label: "Residential & Villas" },
  { value: "corporate", label: "Corporate & Offices" },
  { value: "retail", label: "Retail & Showrooms" },
  { value: "healthcare", label: "Healthcare & Clinics" },
  { value: "banking", label: "Banking & Institutional" },
  { value: "bespoke", label: "Workshop Craft & Bespoke" },
];

const LIGHTING_OPTIONS = [
  "Non-Illuminated Daylight",
  "Warm Golden Backlit (3000K)",
  "Pure Cool Backlit (6500K)",
  "Warm Halo Diffused",
] as const;

function AdminStudio() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const session = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim().toLowerCase() === ADMIN_EMAIL && loginPassword === ADMIN_PASS) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Use admin@gmail.com / admin@123");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
    setLoginEmail("");
    setLoginPassword("");
  };

  // Content Store
  const [activeTab, setActiveTab] = useState<"slides" | "gallery">("slides");
  const [projects, setProjects, resetProjects] = useProjects();
  const [slides, setSlides, resetSlides] = useSlides();
  const [categories, setCategories, resetCategories] = useCategories();

  // Category Manager State
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newCatLabel, setNewCatLabel] = useState("");
  const [draggedCatIdx, setDraggedCatIdx] = useState<number | null>(null);

  // Dedicated Delete Confirmation Dialog State
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    detail?: string;
    itemPreview?: string;
    confirmText?: string;
    cancelText?: string;
    badge?: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {},
  });

  // Notification toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Category Reorder & Add/Delete Handlers
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = newCatLabel.trim();
    if (!clean) return;

    const customCats = categories.filter((c) => c.id !== "all");
    if (customCats.length >= MAX_CUSTOM_CATEGORIES) {
      alert(`Maximum of ${MAX_CUSTOM_CATEGORIES} categories reached. Keeping categories under ${MAX_CUSTOM_CATEGORIES} ensures the website navigation bar and filter tabs remain clean and uncluttered.`);
      return;
    }

    const id = clean.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    if (categories.some((c) => c.id === id || c.label.toLowerCase() === clean.toLowerCase())) {
      alert("A category with this name already exists.");
      return;
    }

    setCategories([...categories, { id, label: clean }]);
    setNewCatLabel("");
    showToast(`Category "${clean}" added!`);
  };

  const requestDeleteCategory = (id: string, label: string) => {
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
      },
    });
  };

  const handleMoveCategory = (index: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= categories.length) return;
    const newCats = [...categories];
    const [moved] = newCats.splice(index, 1);
    newCats.splice(targetIdx, 0, moved);
    setCategories(newCats);
  };

  const handleCategoryDragStart = (idx: number) => {
    setDraggedCatIdx(idx);
  };

  const handleCategoryDrop = (dropIndex: number) => {
    if (draggedCatIdx === null || draggedCatIdx === dropIndex) return;
    const newCats = [...categories];
    const [moved] = newCats.splice(draggedCatIdx, 1);
    newCats.splice(dropIndex, 0, moved);
    setCategories(newCats);
    setDraggedCatIdx(null);
    showToast("Category order updated!");
  };

  // -------------------------------------------------------------
  // HERO SLIDES STATE & HANDLERS
  // -------------------------------------------------------------
  const [editingSlide, setEditingSlide] = useState<SlideItem | null>(null);
  const [isNewSlide, setIsNewSlide] = useState(false);
  const slideFileRef = useRef<HTMLInputElement>(null);

  const handleOpenNewSlide = () => {
    setEditingSlide({
      id: "slide-" + Date.now(),
      img: "",
      title: "",
      category: "Residential & Villas",
      materials: "SS 304 · PVD Gold · Acrylic",
      location: "Coimbatore, Tamil Nadu",
      lighting: "Warm Golden Backlit (3000K)",
    });
    setIsNewSlide(true);
  };

  const handleSaveSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSlide) return;

    if (!editingSlide.img) {
      alert("Please upload or provide an image for the slide.");
      return;
    }

    const cleanedLocation = editingSlide.location?.trim() || "Coimbatore";
    const slideToSave: SlideItem = {
      ...editingSlide,
      location: cleanedLocation,
      title: editingSlide.title?.trim() || cleanedLocation,
      category: editingSlide.category || "Name Boards",
      materials: editingSlide.materials || "Premium Signage",
      lighting: editingSlide.lighting || "Illuminated / Non-Lit",
    };

    if (isNewSlide) {
      setSlides([slideToSave, ...slides]);
      showToast("Hero slide created successfully!");
    } else {
      setSlides(slides.map((s) => (s.id === slideToSave.id ? slideToSave : s)));
      showToast("Hero slide updated!");
    }
    setEditingSlide(null);
  };

  const requestDeleteSlide = (slide: SlideItem) => {
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
      },
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
        setEditingSlide({ ...editingSlide, img: "" });
        showToast("Photo cleared from slide editor.");
      },
    });
  };

  const handleMoveSlide = (index: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= slides.length) return;
    const newSlides = [...slides];
    const [moved] = newSlides.splice(index, 1);
    newSlides.splice(targetIdx, 0, moved);
    setSlides(newSlides);
  };

  const handleSlideImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingSlide) return;
    try {
      const dataUrl = await fileToDataUrl(file);
      setEditingSlide({ ...editingSlide, img: dataUrl });
    } catch {
      alert("Failed to process image file.");
    }
  };

  // -------------------------------------------------------------
  // GALLERY PROJECTS STATE & HANDLERS
  // -------------------------------------------------------------
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const projectFilesRef = useRef<HTMLInputElement>(null);

  const handleOpenNewProject = () => {
    setEditingProject({
      id: "p-" + Date.now(),
      images: [],
      title: "",
      category: "residential",
      categoryLabel: "Residential & Villas",
      materials: ["SS 304 Satin", "PVD Gold", "Cast Acrylic"],
      lighting: "Non-Illuminated Daylight",
      hasLED: false,
      ledColor: "none",
      location: "Coimbatore, Tamil Nadu",
      clientType: "Private Villa",
      description: "",
      dimensions: "24 in × 12 in",
      mounting: "Standoff studs with expansion bolts",
    });
    setIsNewProject(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    if (editingProject.images.length === 0) {
      alert("Please upload at least one image for the project.");
      return;
    }

    const cleanedLocation = editingProject.location?.trim() || "Coimbatore";
    const catOption = categories.find((c) => c.id === editingProject.category);
    const updated: Project = {
      ...editingProject,
      location: cleanedLocation,
      title: editingProject.title?.trim() || cleanedLocation,
      categoryLabel: catOption ? catOption.label : editingProject.category,
      materials: editingProject.materials?.length ? editingProject.materials : ["Custom Architectural Signage"],
      lighting: editingProject.lighting || "Custom Finish",
      dimensions: editingProject.dimensions || "Custom Size",
    };

    if (isNewProject) {
      setProjects([updated, ...projects]);
      showToast("Gallery photo added!");
    } else {
      setProjects(projects.map((p) => (p.id === updated.id ? updated : p)));
      showToast("Gallery photo updated!");
    }
    setEditingProject(null);
  };

  const requestDeleteProject = (proj: Project) => {
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
      },
    });
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !editingProject) return;

    try {
      const dataUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dataUrl = await fileToDataUrl(file);
        dataUrls.push(dataUrl);
      }
      setEditingProject({
        ...editingProject,
        images: [...editingProject.images, ...dataUrls],
      });
    } catch {
      alert("Failed to process uploaded images.");
    }
  };

  const requestRemoveProjectImage = (index: number) => {
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
        setEditingProject({ ...editingProject, images: newImgs });
        showToast("Photo removed from project.");
      },
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
      },
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
      },
    });
  };

  // Filtered gallery items
  const filteredProjects = projects.filter((p) => {
    const matchesCat = galleryFilter === "all" || p.category === galleryFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // -------------------------------------------------------------
  // RENDER: LOGIN SCREEN IF NOT AUTHENTICATED
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6] px-4 py-12 text-stone-900 antialiased selection:bg-amber-500 selection:text-stone-950">
        <div className="w-full max-w-md">
          {/* Brand & Studio Heading */}
          <div className="text-center mb-8">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-stone-950 shadow-md">
              <Lock className="size-7" />
            </div>
            <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Benchmark Atelier Admin
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              Secure studio login to manage gallery & hero showcase content
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl border border-stone-200/90 bg-white p-7 sm:p-9 shadow-xl shadow-stone-200/50">
            {loginError && (
              <div className="mb-5 flex items-center gap-2.5 rounded-2xl bg-rose-50 border border-rose-200 p-3.5 text-xs font-semibold text-rose-700 animate-in fade-in">
                <AlertCircle className="size-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-700">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-stone-400" />
                  <input
                    required
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="admin@gmail.com"
                    className="w-full rounded-xl border border-stone-300/80 bg-[#FAF9F6] pl-10 pr-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-stone-700">Password</label>
                  <span className="text-[11px] text-stone-500 font-mono">admin@123</span>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-stone-400" />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-stone-300/80 bg-[#FAF9F6] pl-10 pr-10 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-amber-500 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white py-3.5 text-sm font-semibold shadow-md transition-all active:scale-[0.99]"
              >
                <span>Enter Admin Studio</span>
                <ShieldCheck className="size-4 text-amber-400" />
              </button>
            </form>

            <div className="mt-6 border-t border-stone-100 pt-4 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                <span>Return to Public Website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: AUTHENTICATED LIGHT-THEMED ADMIN STUDIO
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 antialiased font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5 rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300">
          <CheckCircle2 className="size-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Navigation Bar in Clean Light Theme */}
      <header className="sticky top-0 z-40 border-b border-stone-200/90 bg-white/95 backdrop-blur-md px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline font-medium">Public Site</span>
            </Link>

            <div className="h-4 w-px bg-stone-200" />

            <div className="flex items-center gap-2">
              <h1 className="font-display text-base sm:text-lg font-bold tracking-tight text-stone-900">
                Benchmark Studio
              </h1>
              <span className="rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-700">
                Content Manager
              </span>
            </div>
          </div>

          {/* Quick Actions & Logout */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={requestResetDefaults}
              className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors"
            >
              <RotateCcw className="size-3.5 text-stone-500" />
              <span className="hidden md:inline">Reset Defaults</span>
            </button>

            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-stone-950 transition-all shadow-xs"
            >
              <span>View Site</span>
              <ExternalLink className="size-3.5" />
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white hover:bg-rose-50 hover:border-rose-200 hover:text-rose-700 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors"
            >
              <LogOut className="size-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        {/* Uncluttered Section Selector Tabs */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-stone-200 pb-5">
          <div className="flex items-center gap-1.5 rounded-2xl bg-stone-100 p-1.5 border border-stone-200/80 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("slides")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "slides"
                  ? "bg-white text-stone-900 shadow-sm font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Sparkles className="size-4 text-amber-500" />
              <span>Hero Slideshow ({slides.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "gallery"
                  ? "bg-white text-stone-900 shadow-sm font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Layers className="size-4 text-amber-500" />
              <span>Portfolio Gallery ({projects.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === "slides" ? (
              <button
                type="button"
                onClick={handleOpenNewSlide}
                className="flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95"
              >
                <Plus className="size-4" />
                <span>Add Hero Slide</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleOpenNewProject}
                className="flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95"
              >
                <Plus className="size-4" />
                <span>Add Gallery Project</span>
              </button>
            )}
          </div>
        </div>

        {/* ============================================================= */}
        {/* TAB 1: HERO SHOWCASE SLIDES MANAGER (LIGHT THEME) */}
        {/* ============================================================= */}
        {activeTab === "slides" && (
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-stone-900">Hero Crystal Glass Showcase</h2>
              <p className="text-xs text-stone-500">
                These slides rotate automatically on the right side of the homepage hero. Upload photos or edit specifications below.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-4 transition-all hover:border-stone-400/80 hover:shadow-lg"
                >
                  <div>
                    {/* Slide Image Preview */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-950 border border-stone-100">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-md bg-stone-900/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-amber-300">
                        Slide #{idx + 1}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="mt-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-stone-900 font-bold">
                        <MapPin className="size-3.5 text-amber-500 shrink-0" />
                        <span>{slide.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Slide Action Bar */}
                  <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
                    {/* Reorder Buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        aria-label="Move slide up"
                        disabled={idx === 0}
                        onClick={() => handleMoveSlide(idx, "up")}
                        className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-30 disabled:hover:bg-transparent"
                      >
                        <ArrowUp className="size-3.5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Move slide down"
                        disabled={idx === slides.length - 1}
                        onClick={() => handleMoveSlide(idx, "down")}
                        className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-30 disabled:hover:bg-transparent"
                      >
                        <ArrowDown className="size-3.5" />
                      </button>
                    </div>

                    {/* Edit / Delete */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingSlide(slide);
                          setIsNewSlide(false);
                        }}
                        className="flex items-center gap-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800 transition-colors"
                      >
                        <Edit3 className="size-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Delete hero slide"
                        onClick={() => requestDeleteSlide(slide)}
                        className="rounded-lg p-1.5 text-rose-500 hover:bg-rose-50 transition-colors"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* TAB 2: PORTFOLIO GALLERY PROJECTS MANAGER (LIGHT THEME) */}
        {/* ============================================================= */}
        {activeTab === "gallery" && (
          <div>
            {/* Filter & Search Toolbar */}
            <div className="mb-6 flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
              {/* Category Pills & Manager Trigger */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap sm:overflow-visible">
                {categories.map((c) => {
                  const count =
                    c.id === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === c.id).length;
                  const isSelected = galleryFilter === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setGalleryFilter(c.id)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-amber-500 text-stone-950 shadow-xs font-bold"
                          : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      {c.label} ({count})
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(true)}
                  className="shrink-0 whitespace-nowrap flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-amber-50 hover:bg-amber-100/90 px-3.5 py-1.5 text-xs font-bold text-amber-900 transition-all shadow-2xs active:scale-95"
                  title="Add, reorder, or organize portfolio categories"
                >
                  <SlidersHorizontal className="size-3.5 text-amber-700" />
                  <span>
                    Categories ({categories.filter((c) => c.id !== "all").length}/{MAX_CUSTOM_CATEGORIES})
                  </span>
                </button>
              </div>

              {/* Search input */}
              <div className="relative min-w-[260px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects, materials, location..."
                  className="w-full rounded-xl border border-stone-200 bg-white pl-9 pr-4 py-2 text-xs text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 transition-colors shadow-2xs"
                />
              </div>
            </div>

            {/* Gallery Projects Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-4 transition-all hover:border-stone-400/80 hover:shadow-lg"
                >
                  <div>
                    {/* Primary Photo */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-950 border border-stone-100">
                      <img
                        src={proj.images[0] || ""}
                        alt={proj.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 right-2.5 rounded-md bg-stone-900/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white">
                        {proj.images.length} {proj.images.length === 1 ? "Photo" : "Photos"}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="mt-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-stone-900 font-bold">
                        <MapPin className="size-3.5 text-amber-500 shrink-0" />
                        <span>{proj.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-end gap-2 border-t border-stone-100 pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProject(proj);
                        setIsNewProject(false);
                      }}
                      className="flex items-center gap-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800 transition-colors"
                    >
                      <Edit3 className="size-3" />
                      <span>Edit Project</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Delete gallery project"
                      onClick={() => requestDeleteProject(proj)}
                      className="rounded-lg p-1.5 text-rose-500 hover:bg-rose-50 transition-colors"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="rounded-3xl border border-stone-200 bg-white p-12 text-center shadow-xs">
                <p className="text-sm text-stone-500">No projects found matching your search filter.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ============================================================= */}
      {/* MODAL 1: EDIT HERO SLIDE (SENIOR UX / LIGHT THEME) */}
      {/* ============================================================= */}
      {editingSlide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-in fade-in overflow-y-auto">
          <div className="relative my-8 w-full max-w-2xl rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <h3 className="font-display text-lg font-bold text-stone-900">
                  {isNewSlide ? "Create Hero Showcase Slide" : "Edit Hero Showcase Slide"}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Customize the image and details displayed on the hero crystal acrylic glass board.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingSlide(null)}
                className="rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSlide} className="mt-6 flex flex-col gap-5">
              {/* Image Preview & Upload / Replace / Delete Controls */}
              <div className="rounded-2xl border border-stone-200/90 bg-[#FAF9F6] p-4.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                  Slide Photography
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Photo Thumbnail */}
                  {editingSlide.img ? (
                    <div className="relative aspect-[16/10] w-full sm:w-40 shrink-0 overflow-hidden rounded-xl border border-stone-200 bg-stone-950 shadow-sm">
                      <img src={editingSlide.img} alt="Preview" className="size-full object-cover" />
                      <span className="absolute bottom-1.5 left-1.5 rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                        Active Photo
                      </span>
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] w-full sm:w-40 shrink-0 flex-col items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-white text-stone-400">
                      <ImageIcon className="size-7" />
                      <span className="text-[10px] mt-1 font-medium">No photo set</span>
                    </div>
                  )}

                  {/* Actions & URL Input */}
                  <div className="flex flex-col gap-2.5 flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="file"
                        ref={slideFileRef}
                        accept="image/*"
                        onChange={handleSlideImageUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => slideFileRef.current?.click()}
                        className="flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white px-4 py-2.5 text-xs font-semibold shadow-xs transition-all active:scale-95"
                      >
                        <Upload className="size-3.5 text-amber-400" />
                        <span>{editingSlide.img ? "Replace Photo" : "Upload Photo from Device"}</span>
                      </button>

                      {editingSlide.img && (
                        <button
                          type="button"
                          onClick={requestClearSlidePhoto}
                          className="flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-600 px-3 py-2 text-xs font-semibold transition-colors"
                        >
                          <Trash2 className="size-3.5" />
                          <span>Clear Photo</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editingSlide.img}
                        onChange={(e) => setEditingSlide({ ...editingSlide, img: e.target.value })}
                        placeholder="or paste direct image URL (e.g. https://... or /src/...)"
                        className="w-full rounded-xl border border-stone-300/80 bg-white px-3.5 py-2 text-xs text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-800">
                    Installation Location <span className="text-amber-600">*</span>
                  </label>
                  <span className="text-[10px] font-mono text-stone-400">
                    {editingSlide.location.length}/40
                  </span>
                </div>
                <input
                  required
                  type="text"
                  maxLength={40}
                  value={editingSlide.location}
                  onChange={(e) => setEditingSlide({ ...editingSlide, location: e.target.value })}
                  placeholder="e.g. Avinashi Road, Coimbatore"
                  className="rounded-xl border border-stone-300/90 bg-white px-4 py-3 text-sm font-semibold text-stone-900 outline-none focus:border-amber-500 shadow-2xs"
                />
              </div>

              {/* Submit / Cancel Action Bar */}
              <div className="mt-4 flex items-center justify-end gap-3 border-t border-stone-100 pt-5">
                <button
                  type="button"
                  onClick={() => setEditingSlide(null)}
                  className="rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-2.5 text-xs font-semibold text-stone-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-stone-900 hover:bg-stone-800 px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95"
                >
                  Save Hero Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* MODAL 2: EDIT PORTFOLIO GALLERY PROJECT (SENIOR UX / LIGHT THEME) */}
      {/* ============================================================= */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-in fade-in overflow-y-auto">
          <div className="relative my-8 w-full max-w-2xl rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <h3 className="font-display text-lg font-bold text-stone-900">
                  {isNewProject ? "Add New Portfolio Project" : "Edit Portfolio Project"}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Update gallery photos, materials, specifications, and client details.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingProject(null)}
                className="rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="mt-6 flex flex-col gap-5">
              {/* Multi-Image Upload & Management */}
              <div className="rounded-2xl border border-stone-200/90 bg-[#FAF9F6] p-4.5">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Project Photographs ({editingProject.images.length})
                  </label>
                  <span className="text-[11px] text-stone-500">
                    Multiple photos create an interactive card slideshow
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {editingProject.images.map((imgUrl, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="group relative size-22 overflow-hidden rounded-2xl border border-stone-200 bg-stone-950 shadow-xs"
                    >
                      <img src={imgUrl} alt={`Photo ${imgIdx + 1}`} className="size-full object-cover" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity p-1">
                        <button
                          type="button"
                          aria-label={`Delete photo ${imgIdx + 1}`}
                          onClick={() => requestRemoveProjectImage(imgIdx)}
                          className="flex items-center gap-1 rounded-lg bg-rose-600 px-2 py-1 text-[10px] font-bold text-white hover:bg-rose-500"
                        >
                          <Trash2 className="size-3" />
                          <span>Delete</span>
                        </button>
                        <span className="text-[9px] text-stone-300 mt-1">Photo #{imgIdx + 1}</span>
                      </div>
                    </div>
                  ))}

                  <input
                    type="file"
                    ref={projectFilesRef}
                    multiple
                    accept="image/*"
                    onChange={handleProjectImageUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => projectFilesRef.current?.click()}
                    className="flex size-22 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-white text-stone-600 hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50/40 transition-colors shadow-2xs"
                  >
                    <Plus className="size-6 text-amber-500" />
                    <span className="text-[11px] mt-1 font-bold">Add Photo</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-800">
                    Installation Location / Landmark <span className="text-amber-600">*</span>
                  </label>
                  <span className="text-[10px] font-mono text-stone-400">
                    {editingProject.location.length}/50
                  </span>
                </div>
                <input
                  required
                  type="text"
                  maxLength={50}
                  value={editingProject.location}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, location: e.target.value })
                  }
                  placeholder="e.g. RS Puram, Coimbatore"
                  className="rounded-xl border border-stone-300/90 bg-white px-4 py-3 text-sm font-semibold text-stone-900 outline-none focus:border-amber-500 shadow-2xs"
                />
              </div>

              {/* Submit / Cancel Action Bar */}
              <div className="mt-4 flex items-center justify-end gap-3 border-t border-stone-100 pt-5">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-2.5 text-xs font-semibold text-stone-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-stone-900 hover:bg-stone-800 px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95"
                >
                  Save Gallery Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* MODAL 3: CATEGORY MANAGER (DRAG-AND-DROP & MAX LIMIT SAFEGUARD) */}
      {/* ============================================================= */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-in fade-in overflow-y-auto">
          <div className="relative my-8 w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-stone-900">
                    Manage Portfolio Categories
                  </h3>
                  <span className="rounded-full bg-amber-100 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                    {categories.filter((c) => c.id !== "all").length} / {MAX_CUSTOM_CATEGORIES}
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  Drag and drop to rearrange order, or add/delete custom categories.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCategoryModalOpen(false)}
                className="rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Add New Category Form */}
            <form onSubmit={handleAddCategory} className="mt-5 flex flex-col gap-2">
              <label className="text-xs font-bold text-stone-800">Add New Category</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    maxLength={24}
                    value={newCatLabel}
                    onChange={(e) => setNewCatLabel(e.target.value)}
                    disabled={categories.filter((c) => c.id !== "all").length >= MAX_CUSTOM_CATEGORIES}
                    placeholder={
                      categories.filter((c) => c.id !== "all").length >= MAX_CUSTOM_CATEGORIES
                        ? "Maximum limit reached (8/8)"
                        : "e.g. Heritage & Temples"
                    }
                    className="w-full rounded-xl border border-stone-300/90 bg-white px-3.5 py-2.5 text-xs font-medium text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all disabled:bg-stone-100 disabled:text-stone-400"
                  />
                  {newCatLabel && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-stone-400">
                      {newCatLabel.length}/24
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={
                    !newCatLabel.trim() ||
                    categories.filter((c) => c.id !== "all").length >= MAX_CUSTOM_CATEGORIES
                  }
                  className="flex items-center gap-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-300 text-white px-4 py-2.5 text-xs font-bold shadow-xs transition-all active:scale-95 shrink-0"
                >
                  <Plus className="size-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </form>

            {/* Category Drag-and-Drop & Arrow-based Reorder List */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Category Order (Drag or use arrows)
                </label>
                <span className="text-[11px] text-stone-400">Synced live to filter bar</span>
              </div>

              <div className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-1">
                {categories.map((cat, idx) => {
                  const isAll = cat.id === "all";
                  const isBeingDragged = draggedCatIdx === idx;
                  const projectCount = isAll
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length;

                  return (
                    <div
                      key={cat.id}
                      draggable={!isAll}
                      onDragStart={() => !isAll && handleCategoryDragStart(idx)}
                      onDragOver={(e) => {
                        e.preventDefault();
                      }}
                      onDrop={() => !isAll && handleCategoryDrop(idx)}
                      className={`group flex items-center justify-between rounded-xl border p-2.5 sm:p-3 transition-all ${
                        isBeingDragged
                          ? "border-amber-400 bg-amber-50/60 opacity-50 shadow-inner"
                          : isAll
                          ? "border-stone-200 bg-stone-50/80"
                          : "border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50/50 shadow-2xs cursor-grab active:cursor-grabbing"
                      }`}
                    >
                      {/* Left: Drag Handle & Name */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        {!isAll ? (
                          <div
                            className="text-stone-400 hover:text-stone-700 cursor-grab active:cursor-grabbing shrink-0"
                            title="Drag to reorder"
                          >
                            <GripVertical className="size-4" />
                          </div>
                        ) : (
                          <span className="text-stone-300 text-xs font-mono font-bold w-4 text-center">
                            •
                          </span>
                        )}

                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-display text-xs sm:text-sm font-bold text-stone-900 truncate">
                            {cat.label}
                          </span>
                          <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-600 shrink-0">
                            {projectCount} {projectCount === 1 ? "project" : "projects"}
                          </span>
                          {isAll && (
                            <span className="rounded-md bg-stone-200/80 px-1.5 py-0.5 text-[9px] font-bold uppercase text-stone-600">
                              Pinned
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right: Reorder Arrows & Delete */}
                      <div className="flex items-center gap-1 shrink-0">
                        {!isAll && (
                          <>
                            <button
                              type="button"
                              aria-label="Move category up"
                              disabled={idx <= 1}
                              onClick={() => handleMoveCategory(idx, "up")}
                              className="rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-20 disabled:hover:bg-transparent"
                              title="Move up"
                            >
                              <ArrowUp className="size-3.5" />
                            </button>
                            <button
                              type="button"
                              aria-label="Move category down"
                              disabled={idx === categories.length - 1}
                              onClick={() => handleMoveCategory(idx, "down")}
                              className="rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-20 disabled:hover:bg-transparent"
                              title="Move down"
                            >
                              <ArrowDown className="size-3.5" />
                            </button>
                            <button
                              type="button"
                              aria-label="Delete category"
                              onClick={() => requestDeleteCategory(cat.id, cat.label)}
                              className="rounded-lg p-1 text-rose-500 hover:bg-rose-50 transition-colors ml-1"
                              title="Delete category"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
              <button
                type="button"
                onClick={requestResetCategories}
                className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 px-3.5 py-2 text-xs font-semibold text-stone-600 transition-colors"
              >
                <RotateCcw className="size-3.5 text-stone-400" />
                <span>Restore Defaults</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCategoryModalOpen(false)}
                className="rounded-xl bg-stone-900 hover:bg-stone-800 px-6 py-2 text-xs font-bold text-white shadow-md transition-all active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* MODAL 4: DEDICATED DELETE & ACTION CONFIRMATION POP-UP */}
      {/* ============================================================= */}
      {confirmDialog.isOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Warning Icon Header */}
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 border border-rose-200/80 shadow-xs">
                <AlertTriangle className="size-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display text-base sm:text-lg font-bold text-stone-900 leading-tight">
                    {confirmDialog.title}
                  </h3>
                  {confirmDialog.badge && (
                    <span className="rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] font-bold uppercase text-stone-600">
                      {confirmDialog.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs font-semibold text-stone-800 leading-relaxed">
                  {confirmDialog.message}
                </p>
                {confirmDialog.detail && (
                  <p className="mt-1 text-[11px] text-stone-500 leading-relaxed">
                    {confirmDialog.detail}
                  </p>
                )}
              </div>
            </div>

            {/* Optional Thumbnail Preview */}
            {confirmDialog.itemPreview && (
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-stone-200 bg-[#FAF9F6] p-2.5">
                <div className="relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-xl border border-stone-200 bg-stone-950">
                  <img
                    src={confirmDialog.itemPreview}
                    alt="Preview"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                    Target Item
                  </span>
                  <p className="text-xs font-medium text-stone-700 truncate mt-0.5">
                    This item will be permanently removed.
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-end gap-2.5 border-t border-stone-100 pt-4">
              <button
                type="button"
                onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                className="flex-1 sm:flex-none rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-700 transition-colors"
              >
                {confirmDialog.cancelText || "Cancel, Keep It"}
              </button>

              <button
                type="button"
                onClick={() => {
                  confirmDialog.onConfirm();
                  setConfirmDialog({ ...confirmDialog, isOpen: false });
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 text-xs font-bold shadow-md transition-all active:scale-95"
              >
                <Trash2 className="size-3.5" />
                <span>{confirmDialog.confirmText || "Yes, Delete"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
