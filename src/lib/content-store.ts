import { useState, useEffect } from "react";
import { ALL_PROJECTS as INITIAL_PROJECTS, type Project } from "@/components/portfolio-section";
import { SLIDES as INITIAL_SLIDES, type SlideItem } from "@/components/hero-slideshow";

const PROJECTS_STORAGE_KEY = "benchmark_custom_projects_v1";
const SLIDES_STORAGE_KEY = "benchmark_custom_slides_v3";
const CATEGORIES_STORAGE_KEY = "benchmark_custom_categories_v1";

export interface CategoryItem {
  id: string;
  label: string;
}

export const MAX_CUSTOM_CATEGORIES = 8;

export const DEFAULT_CATEGORIES: CategoryItem[] = [
  { id: "all", label: "All Works" },
  { id: "garments", label: "Garments" },
  { id: "hospital", label: "Hospital" },
  { id: "hotel", label: "Hotel" },
  { id: "corporate", label: "Corporate" },
  { id: "commercial", label: "Commercial" },
  { id: "temple", label: "Temple" },
  { id: "residential", label: "Residential" },
];

// Helper to notify listeners across tabs / components
function emitContentChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("benchmark_content_updated"));
  }
}

export function getStoredCategories(): CategoryItem[] {
  if (typeof window === "undefined") return DEFAULT_CATEGORIES;
  try {
    const raw = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    if (!raw) return DEFAULT_CATEGORIES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_CATEGORIES;
  } catch {
    return DEFAULT_CATEGORIES;
  }
}

export function setStoredCategories(categories: CategoryItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
  emitContentChange();
}

export function resetStoredCategories() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CATEGORIES_STORAGE_KEY);
  emitContentChange();
}

export function useCategories(): [CategoryItem[], (cats: CategoryItem[]) => void, () => void] {
  const [categories, setCategoriesState] = useState<CategoryItem[]>(DEFAULT_CATEGORIES);

  useEffect(() => {
    setCategoriesState(getStoredCategories());

    const handleChange = () => {
      setCategoriesState(getStoredCategories());
    };

    window.addEventListener("benchmark_content_updated", handleChange);
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener("benchmark_content_updated", handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  const update = (newCats: CategoryItem[]) => {
    setStoredCategories(newCats);
    setCategoriesState(newCats);
  };

  const reset = () => {
    resetStoredCategories();
    setCategoriesState(DEFAULT_CATEGORIES);
  };

  return [categories, update, reset];
}

// -------------------------------------------------------------
// INDEXEDDB ENGINE (High Quota Storage for High-Resolution Photography)
// -------------------------------------------------------------
const DB_NAME = "benchmark_studio_storage";
const DB_VERSION = 1;
const STORE_NAME = "content_store";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB unavailable"));
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function idbGet<T>(key: string): Promise<T | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve((req.result as T) ?? null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function idbSet<T>(key: string, value: T): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // ignore
  }
}

export async function idbDelete(key: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // ignore
  }
}

export function getStoredProjects(): Project[] {
  if (typeof window === "undefined") return INITIAL_PROJECTS;
  try {
    const raw = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) return INITIAL_PROJECTS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_PROJECTS;
  } catch {
    return INITIAL_PROJECTS;
  }
}

export function setStoredProjects(projects: Project[]) {
  if (typeof window === "undefined") return;
  // Always persist to IndexedDB (virtually unlimited quota)
  void idbSet(PROJECTS_STORAGE_KEY, projects);
  // Also try localStorage with QuotaExceededError protection
  try {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.warn("Storage quota limit reached in localStorage; saved in IndexedDB instead.", err);
  }
  emitContentChange();
}

export function resetStoredProjects() {
  if (typeof window === "undefined") return;
  void idbDelete(PROJECTS_STORAGE_KEY);
  try {
    localStorage.removeItem(PROJECTS_STORAGE_KEY);
  } catch {
    // ignore
  }
  emitContentChange();
}

export function getStoredSlides(): SlideItem[] {
  if (typeof window === "undefined") return INITIAL_SLIDES;
  try {
    const raw = localStorage.getItem(SLIDES_STORAGE_KEY);
    if (!raw) return INITIAL_SLIDES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_SLIDES;
  } catch {
    return INITIAL_SLIDES;
  }
}

export function setStoredSlides(slides: SlideItem[]) {
  if (typeof window === "undefined") return;
  // Always persist to IndexedDB (virtually unlimited quota)
  void idbSet(SLIDES_STORAGE_KEY, slides);
  // Also try localStorage with QuotaExceededError protection
  try {
    localStorage.setItem(SLIDES_STORAGE_KEY, JSON.stringify(slides));
  } catch (err) {
    console.warn("Storage quota limit reached in localStorage; saved in IndexedDB instead.", err);
  }
  emitContentChange();
}

export function resetStoredSlides() {
  if (typeof window === "undefined") return;
  void idbDelete(SLIDES_STORAGE_KEY);
  try {
    localStorage.removeItem(SLIDES_STORAGE_KEY);
  } catch {
    // ignore
  }
  emitContentChange();
}

export function useProjects(): [Project[], (projects: Project[]) => void, () => void] {
  const [projects, setProjectsState] = useState<Project[]>(INITIAL_PROJECTS);

  useEffect(() => {
    // Synchronous initial read from localStorage/fallback
    setProjectsState(getStoredProjects());

    // Asynchronously hydrate from IndexedDB for high-capacity storage
    void idbGet<Project[]>(PROJECTS_STORAGE_KEY).then((idbProjects) => {
      if (idbProjects && Array.isArray(idbProjects) && idbProjects.length > 0) {
        setProjectsState(idbProjects);
      }
    });

    const handleChange = () => {
      void idbGet<Project[]>(PROJECTS_STORAGE_KEY).then((idbProjects) => {
        if (idbProjects && Array.isArray(idbProjects) && idbProjects.length > 0) {
          setProjectsState(idbProjects);
        } else {
          setProjectsState(getStoredProjects());
        }
      });
    };

    window.addEventListener("benchmark_content_updated", handleChange);
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener("benchmark_content_updated", handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  const update = (newProjects: Project[]) => {
    setStoredProjects(newProjects);
    setProjectsState(newProjects);
  };

  const reset = () => {
    resetStoredProjects();
    setProjectsState(INITIAL_PROJECTS);
  };

  return [projects, update, reset];
}

export function useSlides(): [SlideItem[], (slides: SlideItem[]) => void, () => void] {
  const [slides, setSlidesState] = useState<SlideItem[]>(INITIAL_SLIDES);

  useEffect(() => {
    // Synchronous initial read from localStorage/fallback
    setSlidesState(getStoredSlides());

    // Asynchronously hydrate from IndexedDB for high-capacity storage
    void idbGet<SlideItem[]>(SLIDES_STORAGE_KEY).then((idbSlides) => {
      if (idbSlides && Array.isArray(idbSlides) && idbSlides.length > 0) {
        setSlidesState(idbSlides);
      }
    });

    const handleChange = () => {
      void idbGet<SlideItem[]>(SLIDES_STORAGE_KEY).then((idbSlides) => {
        if (idbSlides && Array.isArray(idbSlides) && idbSlides.length > 0) {
          setSlidesState(idbSlides);
        } else {
          setSlidesState(getStoredSlides());
        }
      });
    };

    window.addEventListener("benchmark_content_updated", handleChange);
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener("benchmark_content_updated", handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  const update = (newSlides: SlideItem[]) => {
    setStoredSlides(newSlides);
    setSlidesState(newSlides);
  };

  const reset = () => {
    resetStoredSlides();
    setSlidesState(INITIAL_SLIDES);
  };

  return [slides, update, reset];
}

// Convert uploaded browser file to compressed, optimized base64 Data URL
export function fileToDataUrl(
  file: File,
  maxDimension = 1600,
  quality = 0.82
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (
      !file.type.startsWith("image/") ||
      file.type === "image/gif" ||
      file.type === "image/svg+xml"
    ) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      let { width, height } = img;

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);

      // Try WebP first for optimal compression
      try {
        const webp = canvas.toDataURL("image/webp", quality);
        if (webp && webp.startsWith("data:image/webp")) {
          resolve(webp);
          return;
        }
      } catch {
        // fallback to jpeg
      }

      resolve(canvas.toDataURL("image/jpeg", quality));
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    };

    img.src = objectUrl;
  });
}

