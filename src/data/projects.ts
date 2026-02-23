import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import cardinalArcanaClosed from "@/assets/cardinal-arcana-closed.jpg";
import cardinalArcanaOpen from "@/assets/cardinal-arcana-open.jpg";
import cardinalArcanaVideo from "@/assets/cardinal-arcana.webm";
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
  fullDescription?: string;
  links?: { label: string; url: string }[];
  image: string;
  detailImages?: string[];
  detailVideos?: string[];
}

export const allProjects: Project[] = [
  {
    id: "SR001",
    title: "Stereographica Prototype",
    category: "Mathematical Art & Design",
    date: "December 2025",
    description:
      "Physical models that cast precise, unexpected shadows through stereographic projection—only when light hits one exact point.",
    fullDescription:
      "These physical models execute the mathematical concept of stereographic projection in an artistic form. When light is positioned at one specific point relative to the sculpture, it casts a precise and unexpected shadow—only when the light is in that exact position.\n\nUsing a combination of CAD and computational design tools (Processing, Grasshopper, TouchDesigner), I designed and 3D-printed the models.\n\nThese are prototypes! I'm currently expanding and refining this concept for my graduate thesis. Larger models, refined finishes, and interactive components will hopefully come together for an exhibition in May 2026.\n\n**What is Stereographic Projection?**\n\nStereographic projection is a mathematical technique that maps points from the surface of a sphere onto a flat plane. Imagine a globe with a light source at the North Pole—the shadows cast by points on the sphere's surface create corresponding points on a flat surface below. This projection preserves angles and creates beautiful, often surprising geometric relationships between the curved and flat worlds. While it distorts sizes (things get larger the farther they are from the projection point), it maintains the shapes of small features, making it both mathematically elegant and visually striking.",
    image: spUncenteredGrid,
    detailImages: [spAllmodels, spAtlas, spCenteredgrid, spHexagonal],
  },
  {
    id: "SR002",
    title: "Water Education Exhibit",
    category: "Exhibit Design & Fabrication",
    date: "November 2025",
    description:
      "A custom interactive science exhibit for the San Luis Valley, featuring a 3×3-foot 3D-printed map with 300+ LEDs highlighting water-related geography.",
    fullDescription:
      "A custom interactive science exhibit educating visitors about water in the San Luis Valley. The centerpiece is a 3×3-foot 3D-printed map, assembled from multiple sections and hand-painted, with over 300 integrated LEDs highlighting significant water-related geography and locations. The exhibit also includes a matching educational wall.\n\nThis project was developed through We Are Water, a program under CU Boulder's Cooperative Institute for Research in Environmental Sciences. We collaborated with a local library in Alamosa and community members to ensure the exhibit would be meaningful to the community. Working with three other students, my primary roles included printing, assembling, and painting the map; operating CNC machines for laser-cutting wood and acrylic; prototyping; woodworking; and general assembly, electronics, painting, and gluing.",
    links: [{ label: "More on the exhibit", url: "https://www.alamosacitizen.com/permanent-interactive-exhibit-we-are-water/" }],
    image: project2,
  },
  {
    id: "SR003",
    title: "MCA Exhibition Assistant Work",
    category: "Art Fabrication & Integrated Technology",
    date: "September 2025–2026",
    description:
      "Fabrication and tech integration for Denver artist Sammy Lee's upcoming solo exhibition at the Museum of Contemporary Art.",
    fullDescription:
      "Working as an intern and then assistant, I helped Denver artist Sammy Lee fabricate pieces for her upcoming solo exhibition at the Museum of Contemporary Art (MCA) in Denver. My work included building a giant microphone from scaffolding to finished surface, where we applied paper casting—one of Sammy's signature techniques—to the exterior. For another piece featuring a repurposed airline seat, I helped adorn it in foil tape and disco mirror mosaic, then custom-integrated sensors that allow viewers to interact with the piece and activate special lighting. I also integrated LED lights and buttons into one of Sammy's existing works.\n\nFull images will be added after the exhibition opens in March.",
    links: [{ label: "About the exhibition", url: "https://mcadenver.org/exhibitions/sammy-seung-min-lee" }],
    image: project3,
  },
  {
    id: "SR004",
    title: "Cardinal Arcana",
    category: "Creative Integrated Technology",
    date: "May 2025",
    description:
      "A tech-infused miniature stage that uses hidden RFID technology to perform a card reveal trick—classic magic meets modern electronics.",
    fullDescription:
      "Cardinal Arcana is a tech-infused take on classic magic. This miniature stage conceals integrated technology beneath its surface to pull off a card reveal trick displayed on the screen behind the curtain. The magic lies in the cards and what's hidden below: each card contains a small, undetectable RFID sticker, with an RFID reader positioned under the stage. With the right sleight of hand, this piece makes for an entertaining party trick.",
    image: cardinalArcanaOpen,
    detailImages: [cardinalArcanaClosed],
    detailVideos: [cardinalArcanaVideo],
  },
  {
    id: "SR005",
    title: "Hyperbolic Beehive",
    category: "Computational Origami",
    date: "February 2025",
    description:
      "A large origami piece visualizing a beehive in hyperbolic space—laser-scored, hand-folded, and painted with gold pigments.",
    fullDescription:
      "Inspired by the inverse curvature of hyperbolic geometry, I set out to visualize what a beehive might look like in this non-Euclidean space. To create such a large origami piece with a precise fold pattern, I experimented with laser cutting, finding settings that scored the pattern onto paper without cutting through. This approach made the process more efficient and accurate. I finished the piece by hand-painting gold pigments against the black paper to evoke dripping honey, and added an origami bee for a playful touch.\n\nI created a second piece in summer 2025 that now lives in one of the themed rooms at the Human Design Hotel in Montreal, Canada.",
    image: beehiveFront,
    detailImages: [beehiveBack],
  },
  {
    id: "SR006",
    title: "Isu 6 — Origami Floor Chair",
    category: "Material Study & Design",
    date: "May 2025",
    description:
      "A completely flat-folding chair designed using origami principles—cut from plywood with integrated magnets, supporting up to 200 lbs.",
    fullDescription:
      "Drawing on my knowledge of origami, I designed a completely flat-folding chair to fit under my floor table. After testing the design at smaller scales with paper and cardboard, I digitized the pattern and cut the framework from ¼-inch plywood using a laser cutter. I then integrated magnets into the wood and inserted them into a sewn shell. The final piece is easy to store and, thanks to the magnets and geometric design, can support up to 200 lbs.",
    image: project6,
  },
  {
    id: "SR007",
    title: "Shift Vase",
    category: "Computational Origami",
    date: "July 2025",
    description:
      "An origami shift vase computationally designed and laser-cut—one continuous piece of uncut, folded paper that appears as three separate parts.",
    fullDescription:
      "Using computational design tools (Grasshopper), I recreated the precise mathematical patterns of origami shift vases originally designed by Rebecca Gieseking, then laser-cut the pattern onto paper. The shift illusion makes it appear as three separate pieces glued together, but this is actually one continuous piece of uncut, folded paper.",
    image: project5,
  },
  {
    id: "SR008",
    title: "Kotatsu Rocking Chair",
    category: "Material Study, Design & Fabrication",
    date: "November 2025",
    description:
      "A floor-level rocking chair built from MDF with a hand-knit cushion—supports up to 230 lbs and rocks comfortably.",
    fullDescription:
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
    projectIds: ["SR003", "SR002", "SR004"],
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
