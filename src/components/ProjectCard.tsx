import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, category, location, year, image, index }: ProjectCardProps) => {
  return (
    <motion.article 
      className="project-card group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-4">
        <img 
          src={image} 
          alt={title}
          className="project-image w-full h-full object-cover transition-transform duration-700"
        />
        <div className="project-overlay absolute inset-0 bg-foreground/10 opacity-0 transition-opacity duration-500" />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div className="space-y-1">
          <span className="meta-text">{id}</span>
          <h3 className="text-lg md:text-xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            {title}
          </h3>
        </div>
        
        <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground">
          <span>{category}</span>
          <span>{location}</span>
          <span>{year}</span>
        </div>
      </div>
      
      <span className="link-underline text-sm mt-3 inline-block text-muted-foreground group-hover:text-foreground transition-colors">
        View Case Study
      </span>
    </motion.article>
  );
};

export default ProjectCard;
