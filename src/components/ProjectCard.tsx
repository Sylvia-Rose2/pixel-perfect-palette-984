import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { DetailImage } from "@/data/projects";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  date?: string;
  imagePosition?: string;
  description: string;
  fullDescription?: string;
  links?: { label: string; url: string }[];
  image: string;
  detailImages?: (string | DetailImage)[];
  detailVideos?: string[];
  index: number;
}

const ProjectCard = ({ title, category, date, description, fullDescription, links, image, imagePosition, detailImages, detailVideos, index }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const hasExpandedContent = fullDescription || (detailImages && detailImages.length > 0) || (detailVideos && detailVideos.length > 0);

  const openLightbox = (src: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxSrc(src);
  };

  const closeLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxSrc(null);
  };

  return (
    <>
      <motion.article 
        className="group cursor-pointer border-t border-border py-6 sm:py-8 md:py-10 lg:py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true, margin: "-50px" }}
        onClick={() => hasExpandedContent && setIsOpen(!isOpen)}
      >
        <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left: Title & Date */}
          <div className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
              {title}
            </h3>
            {date && (
              <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-1 tracking-wide">
                {date}
              </p>
            )}
          </div>
          
          {/* Middle: Description */}
          <div className="col-span-4 sm:col-span-4 md:col-span-5 lg:col-span-6">
            <p className="text-xs sm:text-sm leading-relaxed text-foreground mb-1">
              {description}
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/70 mb-3 sm:mb-4 italic">
              {category}
            </p>
            {hasExpandedContent && (
              <span className="link-underline text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
                {isOpen ? "Close" : "Learn More"}
              </span>
            )}
          </div>
          
          {/* Right: Image */}
          <div className="col-span-4 sm:col-span-2 md:col-span-4 lg:col-span-4">
            <div
              className="relative overflow-hidden aspect-[4/3] cursor-zoom-in"
              onClick={(e) => openLightbox(image, e)}
            >
              <img 
                src={image} 
                alt={title}
                style={imagePosition ? { objectPosition: `center ${imagePosition}` } : undefined}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && hasExpandedContent && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 sm:pt-10 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                {/* Spacer to align with middle column */}
                <div className="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-2" />
                
                <div className="col-span-4 sm:col-span-6 md:col-span-9 lg:col-span-10 space-y-8">
                  {/* Full description */}
                  {fullDescription && (
                    <div className="max-w-2xl space-y-4">
                      {fullDescription.split("\n\n").map((paragraph, i) => {
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                          return (
                            <h4 key={i} className="text-sm sm:text-base font-semibold text-foreground mt-6">
                              {paragraph.replace(/\*\*/g, "")}
                            </h4>
                          );
                        }
                        return (
                          <p key={i} className="text-xs sm:text-sm leading-relaxed text-foreground/80">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  )}

                  {/* Links */}
                  {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-xs sm:text-sm font-medium text-foreground"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Media gallery */}
                  {((detailImages && detailImages.length > 0) || (detailVideos && detailVideos.length > 0)) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {detailImages?.map((img, i) => {
                        const src = typeof img === "string" ? img : img.src;
                        const caption = typeof img === "string" ? undefined : img.caption;
                        const isWide = i === 0 && (detailImages.length % 2 !== 0);
                        return (
                          <div
                            key={i}
                            className={`relative overflow-hidden cursor-zoom-in ${isWide ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                            onClick={(e) => openLightbox(src, e)}
                          >
                            <img
                              src={src}
                              alt={caption || `${title} — detail ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {caption && (
                              <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] sm:text-xs px-3 py-1.5 tracking-wide">
                                {caption}
                              </span>
                            )}
                          </div>
                        );
                      })}
                      {detailVideos?.map((vid, i) => (
                        <div key={`vid-${i}`} className="relative overflow-hidden sm:col-span-2 aspect-video">
                          <video
                            src={vid}
                            controls
                            className="w-full h-full object-contain bg-black/5"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              src={lightboxSrc}
              alt="Expanded view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
