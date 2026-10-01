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
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  emitContentChange();
}

export function resetStoredProjects() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PROJECTS_STORAGE_KEY);
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
  localStorage.setItem(SLIDES_STORAGE_KEY, JSON.stringify(slides));
  emitContentChange();
}

export function resetStoredSlides() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SLIDES_STORAGE_KEY);
  emitContentChange();
}

export function useProjects(): [Project[], (projects: Project[]) => void, () => void] {
  const [projects, setProjectsState] = useState<Project[]>(INITIAL_PROJECTS);

  useEffect(() => {
    setProjectsState(getStoredProjects());

    const handleChange = () => {
      setProjectsState(getStoredProjects());
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
    setSlidesState(getStoredSlides());

    const handleChange = () => {
      setSlidesState(getStoredSlides());
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

// Convert uploaded browser file to persistent base64 Data URL
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
