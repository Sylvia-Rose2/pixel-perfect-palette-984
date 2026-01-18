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
    id: "FW001",
    title: "Design Methodology",
    category: "Brand Identity",
    description: "Our design methodology is rooted in our core values. We combine a wide spectrum of tools and theories with a good portion of generosity.",
    image: project1,
  },
  {
    id: "FW002",
    title: "Studio Space",
    category: "Technology",
    description: "Our studio spaces are important in facilitating our collaborative working process. You'll find the same fundamental elements in the layout of all our offices.",
    image: project2,
  },
  {
    id: "FW003",
    title: "Sustainability",
    category: "Luxury",
    description: "At the heart of all of our work is a commitment to shaping the built environment both in the service of humanism and the longevity of our planet.",
    image: project3,
  },
  {
    id: "FW004",
    title: "Collaboration",
    category: "Real Estate",
    description: "We thrive on rich collaborations to push our thinking. A continuous state of reinvention, driven by our partners in the process, is essential to our work.",
    image: project4,
  },
  {
    id: "FW005",
    title: "Transpositioning",
    category: "Creative Agency",
    description: "We practice a self-defined trans-disciplinary process in which different professionals exchange roles in order to explore differing perspectives.",
    image: project5,
  },
  {
    id: "FW006",
    title: "Innovation",
    category: "Health & Wellness",
    description: "Innovation drives our creative process. We constantly explore new materials, technologies, and methodologies to deliver exceptional results.",
    image: project6,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="px-6 md:px-8 lg:px-12 py-20 lg:py-32 max-w-6xl mx-auto">
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
