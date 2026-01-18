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
    title: "Paklectre",
    category: "Brand Identity",
    location: "USA",
    year: "2024",
    image: project1,
  },
  {
    id: "FW002",
    title: "TechnTech",
    category: "Technology",
    location: "USA",
    year: "2024",
    image: project2,
  },
  {
    id: "FW003",
    title: "Laneurt",
    category: "Luxury",
    location: "France",
    year: "2023",
    image: project3,
  },
  {
    id: "FW004",
    title: "Architecture Firm",
    category: "Real Estate",
    location: "USA",
    year: "2023",
    image: project4,
  },
  {
    id: "FW005",
    title: "Gerfgnt",
    category: "Creative Agency",
    location: "Germany",
    year: "2022",
    image: project5,
  },
  {
    id: "FW006",
    title: "Wellns Spa",
    category: "Health & Wellness",
    location: "USA",
    year: "2022",
    image: project6,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="px-6 md:px-8 lg:px-12 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 lg:mb-20"
      >
        <p className="editorial-text max-w-2xl">
          I design identity systems that distill clarity from complexity. 
          The right ideas, expressed simply, travel further — and last.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>

      <motion.div 
        className="mt-16 lg:mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a href="#" className="link-underline text-lg font-medium">
          View All Works
        </a>
      </motion.div>
    </section>
  );
};

export default WorkSection;
