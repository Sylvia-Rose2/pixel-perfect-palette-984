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
      className="group cursor-pointer border-t border-border py-6 sm:py-8 md:py-10 lg:py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
        {/* Left: Title */}
        <div className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
          <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
            {title}
          </h3>
        </div>
        
        {/* Middle: Description */}
        <div className="col-span-4 sm:col-span-4 md:col-span-5 lg:col-span-6">
          <p className="text-xs sm:text-sm leading-relaxed text-foreground mb-3 sm:mb-4">
            {description}
          </p>
          <span className="link-underline text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
            Learn More
          </span>
        </div>
        
        {/* Right: Image */}
        <div className="col-span-4 sm:col-span-2 md:col-span-4 lg:col-span-4">
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
