import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, description, image, index }: ProjectCardProps) => {
  return (
    <motion.article 
      className="group cursor-pointer border-t border-border py-8 lg:py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left: Title */}
        <div className="md:col-span-3">
          <h3 className="text-sm md:text-base font-medium text-muted-foreground">
            {title}
          </h3>
        </div>
        
        {/* Middle: Description */}
        <div className="md:col-span-5">
          <p className="text-sm md:text-base leading-relaxed text-foreground mb-4">
            {description}
          </p>
          <span className="link-underline text-sm font-medium text-foreground">
            LEARN MORE
          </span>
        </div>
        
        {/* Right: Image */}
        <div className="md:col-span-4">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
