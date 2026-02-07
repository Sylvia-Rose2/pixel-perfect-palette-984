import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: "SR001",
    title: "Stereographica Prototype",
    category: "Mathematical Art & Design",
    description: "Physical models executing stereographic projection in artistic form. When light is positioned at one specific point, it casts a precise and unexpected shadow. Designed using CAD, Processing, Grasshopper, and TouchDesigner.",
    image: project1,
  },
  {
    id: "SR002",
    title: "Water Education Exhibit",
    category: "Exhibit Design & Fabrication",
    description: "Custom interactive science exhibit for the San Luis Valley featuring a 3×3-foot 3D-printed map with 300+ integrated LEDs. Developed through CU Boulder's We Are Water program in collaboration with Alamosa community.",
    image: project2,
  },
  {
    id: "SR003",
    title: "MCA Exhibition Work",
    category: "Art Fabrication & Technology",
    description: "Assisted Denver artist Sammy Lee fabricating pieces for her MCA solo exhibition—including a giant microphone from scaffolding with paper casting, and sensor-integrated interactive lighting systems.",
    image: project3,
  },
  {
    id: "SR004",
    title: "Cardinal Arcana",
    category: "Creative Integrated Technology",
    description: "A tech-infused take on classic magic. This miniature stage conceals RFID technology beneath its surface to pull off a card reveal trick, making for an entertaining party trick with the right sleight of hand.",
    image: project4,
  },
  {
    id: "SR005",
    title: "Hyperbolic Beehive",
    category: "Computational Origami",
    description: "Inspired by hyperbolic geometry, this large origami piece was laser-scored and hand-folded, finished with gold pigments against black paper. A second piece now lives in the Human Design Hotel in Montreal.",
    image: project5,
  },
  {
    id: "SR006",
    title: "Origami Floor Chair",
    category: "Material Study & Design",
    description: "A completely flat-folding chair designed using origami principles. Cut from ¼-inch plywood with integrated magnets in a sewn shell—easy to store and supports up to 200 lbs.",
    image: project6,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-32 w-full">
      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
        {/* Bottom border for the last item */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default WorkSection;
