import { motion } from "framer-motion";

const GalleryPlaceholder = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-32 w-full">
      <motion.div
        className="w-full aspect-[16/7] bg-muted/30 border border-border flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground text-sm tracking-wide uppercase">
          Photo Gallery — Coming Soon
        </p>
      </motion.div>
    </section>
  );
};

export default GalleryPlaceholder;
