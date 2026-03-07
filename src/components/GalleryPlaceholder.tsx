import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

const images: { src: string; position?: string; rotate?: number }[] = [
  { src: galleryWawPainting, position: "center 100%" },       // 1 - show bottom
  { src: galleryLeafLamp, position: "center 70%" },             // 2 - show more bottom
  { src: galleryBeehiveProgress },                              // 3
  { src: galleryImg3572 },                                      // 4
  { src: gallerySammyTopo },                                    // 5
  { src: galleryCalligraphy, rotate: -90 },                     // 6 - rotated CCW
  { src: galleryRockingCardboard },                             // 7
  { src: galleryImg2632, position: "center 20%" },             // 8 - show top
  { src: galleryShiftVase, position: "center 60%" },           // 9 - show more middle/bottom
  { src: galleryWeaving },                                      // 10
  { src: galleryIsuProgress },                                  // 11
  { src: galleryImg3485 },                                      // 12
  { src: galleryCardboardPrototype, position: "center 60%" },  // 13 - shift down slightly
  { src: galleryButterflyDrawings, rotate: -90 },               // 14 - rotated CCW
  { src: galleryImg9495, position: "center 70%" },             // 15 - show more bottom
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (lightboxOpen) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, lightboxOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
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
    <>
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-28 w-full">
        {/* Section header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-widest">
            Process & Practice
          </h2>
          <p className="text-xs text-muted-foreground mt-2 max-w-md">
            A look at how things come together — from early prototypes and material tests to finished pieces, alongside personal art and explorations
          </p>
        </div>

        {/* Slideshow */}
        <div
          className="relative w-full aspect-[3/2] sm:aspect-[16/10] overflow-hidden bg-muted/20 group cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
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
                src={images[current].src}
                alt={`Studio & process photo ${current + 1}`}
                className="w-full h-full object-cover"
                style={{
                  ...(images[current].position ? { objectPosition: images[current].position } : {}),
                  ...(images[current].rotate ? { transform: `rotate(${images[current].rotate}deg)` } : {}),
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
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
                onClick={(e) => {
                  e.stopPropagation();
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.img
              key={current}
              src={images[current].src}
              alt="Expanded view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              style={images[current].rotate ? { transform: `rotate(${images[current].rotate}deg)` } : undefined}
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

export default Gallery;
