import { useState, useEffect, useCallback } from "react";
import {
  Maximize2,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_LINK } from "./site";
import { WhatsAppIcon } from "./floating-actions";

import w1 from "@/assets/work/w1.jpg";
import w2 from "@/assets/work/w2.jpg";
import w3 from "@/assets/work/w3.jpg";
import w4 from "@/assets/work/w4.jpg";
import w5 from "@/assets/work/w5.jpg";
import w6 from "@/assets/work/w6.jpg";
import w7 from "@/assets/work/w7.jpg";
import w8 from "@/assets/work/w8.jpg";
import w9 from "@/assets/work/w9.jpg";
import w10 from "@/assets/work/w10.jpg";
import w11 from "@/assets/work/w11.jpg";
import w12 from "@/assets/work/w12.jpg";

import w_shanmugam from "@/assets/work/w_shanmugam.jpg";
import w_giripriya from "@/assets/work/w_giripriya.jpg";
import w_vivalayam_workshop from "@/assets/work/w_vivalayam_workshop.jpg";
import w_vivalayam_night from "@/assets/work/w_vivalayam_night.jpg";
import w_vibhavari from "@/assets/work/w_vibhavari.jpg";
import w_evs_illam from "@/assets/work/w_evs_illam.jpg";
import w_sreelakam from "@/assets/work/w_sreelakam.jpg";
import w_punniyamoorthy from "@/assets/work/w_punniyamoorthy.jpg";
import w_shanthi_villa from "@/assets/work/w_shanthi_villa.jpg";
import w_lahari_house from "@/assets/work/w_lahari_house.jpg";
import w_sairam_agastya from "@/assets/work/w_sairam_agastya.jpg";
import w_annai_illam from "@/assets/work/w_annai_illam.jpg";
import w_vr_illam_day from "@/assets/work/w_vr_illam_day.jpg";
import w_vr_illam_night from "@/assets/work/w_vr_illam_night.jpg";
import w_ayras_nest from "@/assets/work/w_ayras_nest.jpg";
import w_struzon from "@/assets/work/w_struzon.jpg";
import w_fliqzo from "@/assets/work/w_fliqzo.jpg";

export interface Project {
  id: string;
  images: string[];
  title: string;
  category: "residential" | "corporate" | "retail" | "healthcare" | "banking" | "bespoke";
  categoryLabel: string;
  materials: string[];
  lighting: string;
  hasLED: boolean;
  ledColor: "warm" | "cool" | "none";
  location: string;
  clientType: string;
  description: string;
  dimensions: string;
  mounting: string;
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "p-vr-illam",
    images: [w_vr_illam_day, w_vr_illam_night],
    title: "வாழ்க வளமுடன் — VR Illam Luxury Architectural Sign",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["3D Mirror Gold PVD", "Matte Charcoal Backplate", "Lord Ganesha Insignia", "Warm LED Halo"],
    lighting: "Warm Golden Backlit (3000K)",
    hasLED: true,
    ledColor: "warm",
    location: "Race Course, Coimbatore",
    clientType: "Luxury Independent Villa",
    description: "Architectural matte charcoal monolith plaque featuring 3D mirror gold PVD Lord Ganesha emblem, traditional Tamil greeting 'வாழ்க வளமுடன்', and intertwined monogram mounted on textured concrete wall with warm night halo backlighting.",
    dimensions: "3 ft × 2 ft",
    mounting: "Concealed rear anchor studs with vibration dampers",
  },
  {
    id: "p-vivalayam",
    images: [w_vivalayam_night, w_vivalayam_workshop],
    title: "Vivalayam — Dr. K. Chockalingam Illuminated Board",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Natural Walnut Finish", "Warm Perimeter LED Halo (3000K)", "Illuminated Peacock Crest", "3D Embossed Letters"],
    lighting: "Warm Golden Backlit (3000K)",
    hasLED: true,
    ledColor: "warm",
    location: "Kovaipudur, Coimbatore",
    clientType: "Doctor's Private Residence",
    description: "Vertical wood-textured monolith sign featuring 3000K warm perimeter halo illumination, glowing peacock motif, and multi-tier acrylic embossed typography installed on exterior entrance pillar.",
    dimensions: "2.5 ft × 4 ft",
    mounting: "Pillar-anchored structural steel frame with concealed 12V driver",
  },
  {
    id: "p-fliqzo",
    images: [w_fliqzo, w8, w11],
    title: "Fliqzo — 3D Warm Golden Halo Channel Sign",
    category: "retail",
    categoryLabel: "Retail & Showrooms",
    materials: ["PVD Brass Gold Rim", "Warm 3000K Halo LEDs", "Laser-Cut Cursive Typography"],
    lighting: "Warm Golden Backlit (3000K)",
    hasLED: true,
    ledColor: "warm",
    location: "RS Puram, Coimbatore",
    clientType: "Luxury Boutique Studio",
    description: "Deep-profile 3D channel script letters with rear warm golden halo diffusion casting an ambient silhouette glow across dark architectural facade walls.",
    dimensions: "6 ft × 2.5 ft",
    mounting: "Individual letter wall standoffs with concealed silicone-sealed wiring",
  },
  {
    id: "p-vibhavari",
    images: [w_vibhavari, w_shanthi_villa],
    title: "Dr. Vibhavari / The Pearl / 76 — 3D Gold on Slate",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["3D PVD Mirror Gold", "Precision Laser Script Letters", "Direct Standoff Anchors"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Avinashi Road, Coimbatore",
    clientType: "Contemporary Designer Villa",
    description: "Individual 3D titanium mirror gold cursive script lettering and door number precision-mounted onto an exterior charcoal textured slate facade.",
    dimensions: "Custom Lettering Scale",
    mounting: "Threaded rear studs inserted into masonry with high-bond epoxy",
  },
  {
    id: "p-struzon",
    images: [w_struzon, w2, w6],
    title: "STRUZON Technologies — 3D Illuminated Campus Sign",
    category: "corporate",
    categoryLabel: "Corporate & Offices",
    materials: ["3D Precision Channel Letters", "Fluted Wall Cladding Mount", "Dual-Tone Acrylic Insignia", "IP67 Cool LEDs"],
    lighting: "Pure Cool Backlit (6500K)",
    hasLED: true,
    ledColor: "cool",
    location: "Saravanampatti IT Corridor, Coimbatore",
    clientType: "Corporate Tech Campus",
    description: "Grand corporate facility facade signage featuring dual-tone illuminated brand insignia and crisp 3D typography installed on exterior architectural louvers.",
    dimensions: "16 ft × 4 ft",
    mounting: "Heavy-duty structural MS frame with anti-rust primer",
  },
  {
    id: "p-shanthi-villa",
    images: [w_shanthi_villa, w_vibhavari],
    title: "Shanthi Villa — Architectural Stucco Monolith",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Laser-Cut Matte Black Metal", "Warm 3000K Cone Downlight", "Exterior Sand Stucco Cladding"],
    lighting: "Warm Halo Diffused",
    hasLED: true,
    ledColor: "warm",
    location: "Vadavalli, Coimbatore",
    clientType: "Architectural Residence",
    description: "Matte black laser-cut metal script lettering set in a custom architectural wall niche with integrated 3000K cone downlight spotlighting.",
    dimensions: "2 ft × 2.5 ft",
    mounting: "Rear pin mounting with floating shadow relief",
  },
  {
    id: "p-evs-illam",
    images: [w_evs_illam, w_annai_illam],
    title: "EVS Illam / # 73 — Gloss White & 3D Mirror Gold",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Cast Gloss White Acrylic", "3D PVD Mirror Gold Letters", "SS Standoff Studs"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Ramanathapuram, Coimbatore",
    clientType: "Modern Residence",
    description: "Pristine high-gloss white acrylic plaque with 3D mirror gold block lettering and accent bar mounted on polished dark granite pillar with stainless steel standoffs.",
    dimensions: "24 in × 12 in",
    mounting: "4 stainless steel standoff bolts with expansion anchors",
  },
  {
    id: "p-giripriya",
    images: [w_giripriya, w_shanmugam],
    title: "Giripriya — Teakwood Capsule with 3D Ganesha",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Teakwood Finish Composite Base", "3D White Laser-Cut Acrylic", "Lord Ganesha Emblem"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Saibaba Colony, Coimbatore",
    clientType: "Residential Villa",
    description: "Curved capsule teakwood backing plate with 3D laser-profiled white acrylic Lord Ganesha crest and fluid script typography mounted on exterior textured compound wall.",
    dimensions: "20 in × 10 in",
    mounting: "Flush screw mounts with brass caps",
  },
  {
    id: "p-shanmugam",
    images: [w_shanmugam, w_ayras_nest],
    title: "Shanmugam Villa — Walnut Board with Peacock Crest",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Natural Walnut Wood Texture", "Multi-Tone Peacock Crest", "3D White Cursive Typography", "SS Standoffs"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Ganapathy, Coimbatore",
    clientType: "Independent Luxury Villa",
    description: "Rich walnut wood-grain contoured backing board featuring a vibrant peacock emblem, 3D raised white script lettering, and 4 corner stainless steel mounting studs.",
    dimensions: "22 in × 12 in",
    mounting: "Stainless steel architectural standoff studs",
  },
  {
    id: "p-sreelakam",
    images: [w_sreelakam, w_punniyamoorthy],
    title: "Sreelakam — Scalloped Wood & 3D Gold Ganesha",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Scalloped Teakwood Texture", "3D Mirror Gold Ganesha", "3D PVD Gold Script"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Peelamedu, Coimbatore",
    clientType: "Heritage Villa",
    description: "Ornamental scalloped wood-grain base plate with 3D PVD mirror gold Ganesha motif and flowing golden script typography.",
    dimensions: "24 in × 12 in",
    mounting: "Direct wall anchors with concealed fasteners",
  },
  {
    id: "p-punniyamoorthy",
    images: [w_punniyamoorthy, w_sreelakam],
    title: "Punniyamoorthy & Tamil Selvi Illam",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Marbled Walnut Composite", "3D Gold Ganesha & Leaf Garland", "3D Gold Typography"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Singanallur, Coimbatore",
    clientType: "Traditional Family Home",
    description: "Marbled walnut plate featuring 3D mirror gold Ganesha flanked by bilateral leaf garlands, with dual-line precision gold lettering.",
    dimensions: "24 in × 14 in",
    mounting: "4-point standoff mounting system",
  },
  {
    id: "p-annai-illam",
    images: [w_annai_illam, w_evs_illam],
    title: "அன்னை இல்லம் — 6/232 D (Travertine Marble)",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["3D High-Gloss Jet Black Acrylic", "Italian Travertine Cladding", "Standoff Spacers"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Kalapatti, Coimbatore",
    clientType: "Contemporary Villa",
    description: "3D laser-cut high-gloss jet black Tamil typography and door number with rear standoff spacers mounted onto natural vein-cut travertine marble wall.",
    dimensions: "30 in × 14 in",
    mounting: "Drilled marble studs with vibration dampers",
  },
  {
    id: "p-sairam",
    images: [w_sairam_agastya, w_giripriya],
    title: "Sairam — Sai Agastya Villa Plaque",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Contoured Timber Arch Plaque", "3D White Acrylic Ganesha", "3D White Lettering"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Thudiyalur, Coimbatore",
    clientType: "Residential Villa",
    description: "Timber-grain plaque with carved crest arch, 3D white Ganesha emblem, and 3D white script lettering mounted on clean outdoor white compound wall.",
    dimensions: "22 in × 12 in",
    mounting: "Compound wall expansion screws",
  },
  {
    id: "p-lahari",
    images: [w_lahari_house, w_vibhavari],
    title: "Lahari House — B3 502 (Venetian Plaster)",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Dark Walnut 3D Acrylic", "Venetian Plaster Mounting", "Custom Font Profile"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Trichy Road, Coimbatore",
    clientType: "Luxury Apartment",
    description: "Raised dark walnut / espresso 3D acrylic script lettering and unit number installed directly onto textured Venetian stucco plaster.",
    dimensions: "20 in × 10 in",
    mounting: "Direct surface adhesive and alignment studs",
  },
  {
    id: "p-ayras",
    images: [w_ayras_nest, w_shanmugam],
    title: "Ayra's Nest — 29 / Sathasivam Sakunthala",
    category: "residential",
    categoryLabel: "Residential & Villas",
    materials: ["Brushed PVD Brass Gold Plate", "Laser-Etched Peacock Plumage", "Matte Black Cursive"],
    lighting: "Non-Illuminated Daylight",
    hasLED: false,
    ledColor: "none",
    location: "Race Course, Coimbatore",
    clientType: "Bespoke Residence",
    description: "Heavy-gauge brushed PVD gold plate featuring laser-etched peacock artwork, divider rule, and deep matte black lettering.",
    dimensions: "24 in × 10 in",
    mounting: "4-corner architectural dome brass screws",
  },
  {
    id: "p-sbi",
    images: [w2, w4, w6],
    title: "State Bank of India — Kattumannarkoil Branch",
    category: "banking",
    categoryLabel: "Banking & Institutional",
    materials: ["3mm Exterior ACP", "3D Raised Letters", "Cast Acrylic Face"],
    lighting: "Pure Cool Backlit (6500K)",
    hasLED: true,
    ledColor: "cool",
    location: "Kattumannarkoil Branch, TN",
    clientType: "Nationalised Bank",
    description: "High-visibility large-format branch board engineered to SBI corporate visual standards with weatherproof IP67 cool white LED modules.",
    dimensions: "18 ft × 4 ft",
    mounting: "Heavy-duty structural MS frame with anti-rust primer",
  },
  {
    id: "p-insight",
    images: [w1, w5, w9],
    title: "Insight Clinic & Diagnostic Centre",
    category: "healthcare",
    categoryLabel: "Healthcare & Clinics",
    materials: ["Marine Grade SS 304", "White ACP Base", "Precision 3D Steel"],
    lighting: "Pure Cool Backlit (6500K)",
    hasLED: true,
    ledColor: "cool",
    location: "Ramanathapuram, Coimbatore",
    clientType: "Medical Practice",
    description: "Crisp, ultra-clean clinic façade signage designed for maximum readability at dusk and night for arriving patients.",
    dimensions: "12 ft × 3.5 ft",
    mounting: "Hidden rear channel mounting on granite exterior",
  },
  {
    id: "p-workshop-craft",
    images: [w4, w5, w1],
    title: "Workshop Master Build: 3D Channel Lettering",
    category: "bespoke",
    categoryLabel: "Workshop Craft",
    materials: ["Heavy SS 304 Returns", "Hand-Bent Deep Channels", "Sealed 12V LED Bus"],
    lighting: "Pure Cool Backlit (6500K)",
    hasLED: true,
    ledColor: "cool",
    location: "Benchmark Workshop, Sowripalayam Rd",
    clientType: "Proprietor Craft Build",
    description: "Behind-the-scenes master craftsmanship showing hand-bent returns, precision solder points, and sealed waterproof LED installation at our Coimbatore facility.",
    dimensions: "Custom 3D Letter Scale",
    mounting: "In-house master fabrication",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "residential", label: "Residential" },
  { id: "corporate", label: "Corporate" },
  { id: "retail", label: "Retail & Showrooms" },
  { id: "healthcare", label: "Healthcare" },
  { id: "banking", label: "Banking & Institutional" },
];

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (project: Project, imgIndex: number) => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const currentImg = project.images[imgIndex] || project.images[0];

  return (
    <div
      onClick={() => onOpenModal(project, imgIndex)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 aspect-[4/3] sm:aspect-square"
    >
      {/* High-Resolution Installation Photo */}
      <img
        src={currentImg}
        alt={project.title}
        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Clean Hover Overlay: Centered Location Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/60 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-2 rounded-full bg-black/75 border border-white/20 px-4 py-2 text-white shadow-xl transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <MapPin className="size-4 text-[#EBB036] shrink-0" />
          <span className="font-semibold text-sm sm:text-base text-white">
            {project.location}
          </span>
        </div>
      </div>

      {/* Multi-Image Quick Navigation Arrows on Hover */}
      {project.images.length > 1 && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            type="button"
            aria-label="Previous image"
            onClick={prevImage}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-all hover:bg-black hover:scale-110 active:scale-95 border border-white/30"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={nextImage}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-all hover:bg-black hover:scale-110 active:scale-95 border border-white/30"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}

import { useProjects, useCategories } from "@/lib/content-store";

export function PortfolioSection({ limit }: { limit?: number }) {
  const [projects] = useProjects();
  const [categories] = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  const activeProjectsList = projects.length > 0 ? projects : ALL_PROJECTS;

  const filteredProjects = activeProjectsList.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleOpenModal = (project: Project, initialImgIndex: number) => {
    const index = displayedProjects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      setActiveProjectIndex(index);
      setModalImgIndex(initialImgIndex);
    }
  };

  const handleCloseModal = () => {
    setActiveProjectIndex(null);
  };

  const handleNextProject = useCallback(() => {
    if (activeProjectIndex === null) return;
    const nextIdx = (activeProjectIndex + 1) % displayedProjects.length;
    setActiveProjectIndex(nextIdx);
    setModalImgIndex(0);
  }, [activeProjectIndex, displayedProjects.length]);

  const handlePrevProject = useCallback(() => {
    if (activeProjectIndex === null) return;
    const prevIdx = (activeProjectIndex - 1 + displayedProjects.length) % displayedProjects.length;
    setActiveProjectIndex(prevIdx);
    setModalImgIndex(0);
  }, [activeProjectIndex, displayedProjects.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (activeProjectIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowRight") {
        handleNextProject();
      } else if (e.key === "ArrowLeft") {
        handlePrevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProjectIndex, handleNextProject, handlePrevProject]);

  const activeProject = activeProjectIndex !== null ? displayedProjects[activeProjectIndex] : null;

  const getWhatsAppForProject = (project: Project) => {
    const text = `Hello Kannan B (Benchmark Name Boards),%0A%0AI would like to enquire about your installed name board in *${encodeURIComponent(project.location)}* seen on your gallery.`;
    return `https://wa.me/919842767222?text=${text}`;
  };

  return (
    <div className="w-full">
      {/* Sticky Filter Bar with Mobile Horizontal Scroll */}
      <div className="sticky top-20 z-30 mb-8 w-full border-b border-stone-200/90 bg-white/95 backdrop-blur-md py-3 shadow-2xs transition-all">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-0.5 sm:flex-wrap sm:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveProjectIndex(null);
              }}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900 active:bg-stone-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: Clean Pure-Image Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Enlarged Lightbox Popup Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Card Next / Prev Floating Arrows */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevProject();
            }}
            className="hidden md:flex fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-stone-950 hover:scale-110 active:scale-95 border border-white/20 shadow-2xl"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              handleNextProject();
            }}
            className="hidden md:flex fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-stone-950 hover:scale-110 active:scale-95 border border-white/20 shadow-2xl"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Modal Container — Large High-Resolution Image Presentation */}
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl lg:max-w-5xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-950 text-white shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-30 flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-black hover:scale-110 border border-white/20"
            >
              <X className="size-5" />
            </button>

            {/* Enlarged Modal Image */}
            <div className="relative flex items-center justify-center bg-black max-h-[72vh] sm:max-h-[76vh] w-full overflow-hidden">
              <img
                src={activeProject.images[modalImgIndex] || activeProject.images[0]}
                alt={activeProject.title}
                className="max-h-[72vh] sm:max-h-[76vh] w-full object-contain"
              />

              {/* Arrow Controls for Multi-Image Projects in Modal */}
              {activeProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImgIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black hover:scale-110 active:scale-95 border border-white/20 shadow-md"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImgIndex((prev) => (prev + 1) % activeProject.images.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black hover:scale-110 active:scale-95 border border-white/20 shadow-md"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Bar: ONLY Location & Enquiry Now */}
            <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="size-4 text-[#EBB036] shrink-0" />
                <span className="font-semibold text-sm sm:text-base text-white">{activeProject.location}</span>
              </div>

              <a
                href={getWhatsAppForProject(activeProject)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#EBB036] hover:bg-[#D4972B] px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-950 shadow-md transition-all active:scale-95 shrink-0"
              >
                <span>Enquire Now</span>
                <ArrowRight className="size-3.5 text-stone-950" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
