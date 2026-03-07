import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import galleryWawPainting from "@/assets/gallery-waw-painting.jpg";
import galleryShiftVase from "@/assets/gallery-shift-vase-prototype.jpg";
import gallerySammyTopo from "@/assets/gallery-sammy-topo.jpg";
import galleryRockingCardboard from "@/assets/gallery-rocking-chair-cardboard.jpg";
import galleryIsuProgress from "@/assets/gallery-isu-progress.jpg";
import galleryImg2632 from "@/assets/gallery-img-2632.jpg";
import galleryImg3485 from "@/assets/gallery-img-3485.jpg";
import galleryImg3572 from "@/assets/gallery-img-3572.jpg";
import galleryImg9495 from "@/assets/gallery-img-9495.jpg";
import galleryButterflyDrawings from "@/assets/gallery-butterfly-drawings.jpg";
import galleryBeehiveProgress from "@/assets/gallery-beehive-progress.jpg";
import galleryCalligraphy from "@/assets/gallery-calligraphy.jpg";
import galleryCardboardPrototype from "@/assets/gallery-cardboard-prototype.png";
import galleryWeaving from "@/assets/gallery-weaving.png";
import galleryLeafLamp from "@/assets/gallery-leaf-lamp.png";

const images = [
  galleryWawPainting,
  galleryLeafLamp,
  galleryBeehiveProgress,
  galleryImg3572,
  gallerySammyTopo,
  galleryCalligraphy,
  galleryRockingCardboard,
  galleryImg2632,
  galleryShiftVase,
  galleryWeaving,
  galleryIsuProgress,
  galleryImg3485,
  galleryCardboardPrototype,
  galleryButterflyDrawings,
  galleryImg9495,
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-28 w-full">
      {/* Section header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-widest">
          Studio & Process
        </h2>
        <p className="text-xs text-muted-foreground mt-2 max-w-md">
          Prototyping, fabricating, and problem-solving across disciplines
        </p>
      </div>

      {/* Slideshow */}
      <div className="relative w-full aspect-[16/7] overflow-hidden bg-muted/20 group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[current]}
              alt={`Studio & process photo ${current + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
