import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import beehiveFront from "@/assets/beehive-front.jpg";
import beehiveBack from "@/assets/beehive-back.jpg";
import spUncenteredGrid from "@/assets/sp-uncentered-grid.jpg";
import spAllmodels from "@/assets/sp-allmodels.jpg";
import spAtlas from "@/assets/sp-atlas.jpg";
import spCenteredgrid from "@/assets/sp-centeredgrid.jpg";
import spHexagonal from "@/assets/sp-hexagonal.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  date?: string;
  description: string;
  image: string;
  detailImages?: string[];
}

export const allProjects: Project[] = [
  {
    id: "SR001",
    title: "Stereographica Prototype",
    category: "Mathematical Art & Design",
    date: "2024",
    description:
      "Physical models executing stereographic projection in artistic form. When light is positioned at one specific point, it casts a precise and unexpected shadow. Designed using CAD, Processing, Grasshopper, and TouchDesigner.",
    image: spUncenteredGrid,
    detailImages: [spAllmodels, spAtlas, spCenteredgrid, spHexagonal],
  },
  {
    id: "SR002",
    title: "Water Education Exhibit",
    category: "Exhibit Design & Fabrication",
    date: "2024",
    description:
      "Custom interactive science exhibit for the San Luis Valley featuring a 3×3-foot 3D-printed map with 300+ integrated LEDs. Developed through CU Boulder's We Are Water program in collaboration with Alamosa community.",
    image: project2,
  },
  {
    id: "SR003",
    title: "MCA Exhibition Work",
    category: "Art Fabrication & Technology",
    date: "2024",
    description:
      "Assisted Denver artist Sammy Lee fabricating pieces for her MCA solo exhibition—including a giant microphone from scaffolding with paper casting, and sensor-integrated interactive lighting systems.",
    image: project3,
  },
  {
    id: "SR004",
    title: "Cardinal Arcana",
    category: "Creative Integrated Technology",
    date: "2024",
    description:
      "A tech-infused take on classic magic. This miniature stage conceals RFID technology beneath its surface to pull off a card reveal trick, making for an entertaining party trick with the right sleight of hand.",
    image: project4,
  },
  {
    id: "SR005",
    title: "Hyperbolic Beehive",
    category: "Computational Origami",
    date: "2024",
    description:
      "Inspired by hyperbolic geometry, this large origami piece was laser-scored and hand-folded, finished with gold pigments against black paper. A second piece now lives in the Human Design Hotel in Montreal.",
    image: beehiveFront,
    detailImages: [beehiveBack],
  },
  {
    id: "SR006",
    title: "Origami Floor Chair",
    category: "Material Study & Design",
    date: "2024",
    description:
      "A completely flat-folding chair designed using origami principles. Cut from ¼-inch plywood with integrated magnets in a sewn shell—easy to store and supports up to 200 lbs.",
    image: project6,
  },
  {
    id: "SR007",
    title: "Shift Vase",
    category: "Computational Origami",
    date: "July 2025",
    description:
      "Using computational design tools (Grasshopper), I recreated the precise mathematical patterns of origami shift vases originally designed by Rebecca Gieseking, then laser-cut the pattern onto paper. The shift illusion makes it appear as three separate pieces glued together, but this is actually one continuous piece of uncut, folded paper.",
    image: project5,
  },
  {
    id: "SR008",
    title: "Kotatsu Rocking Chair",
    category: "Material Study, Design & Fabrication",
    date: "November 2025",
    description:
      "Another floor-level chair for my floor table, this project challenged and improved my woodworking skills. Built using standard woodshop tools and MDF, the final design features a hand-knit cushion, supports up to 230 lbs, and rocks comfortably.",
    image: project1,
  },
];

export interface Category {
  name: string;
  slug: string;
  projectIds: string[];
}

export const categories: Category[] = [
  {
    name: "Interactive Installations",
    slug: "interactive-installations",
    projectIds: ["SR004", "SR003", "SR002"],
  },
  {
    name: "Computational Design",
    slug: "computational-design",
    projectIds: ["SR005", "SR007", "SR001"],
  },
  {
    name: "Mathematical Art",
    slug: "mathematical-art",
    projectIds: ["SR001", "SR005"],
  },
  {
    name: "Fabrication & Making",
    slug: "fabrication-and-making",
    projectIds: ["SR006", "SR008", "SR002", "SR003"],
  },
  {
    name: "Exhibit Design",
    slug: "exhibit-design",
    projectIds: ["SR002", "SR003"],
  },
];

export function getProjectsByCategory(slug: string): Project[] {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return [];
  return category.projectIds
    .map((id) => allProjects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);
}
