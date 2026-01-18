import { motion } from "framer-motion";
import heroStudio from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen p-6 md:p-8 lg:p-12">
      {/* Logo */}
      <div className="col-span-1 lg:col-span-12 pt-4">
        <motion.h1 
          className="monogram"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          J&K
        </motion.h1>
      </div>

      {/* Hero Image */}
      <motion.div 
        className="col-span-1 lg:col-span-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img 
          src={heroStudio} 
          alt="Design Studio"
          className="w-full h-[50vh] lg:h-[70vh] object-cover"
        />
      </motion.div>

      {/* Bio & Contact */}
      <motion.div 
        className="col-span-1 lg:col-span-5 flex flex-col justify-between py-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="space-y-8">
          <p className="editorial-text max-w-md">
            I'm an independent designer specializing in brand identity and digital experiences. 
            I create work that is conceptually rigorous, formally restrained, and culturally engaged. 
            With over a decade of experience, I balance intuition and intention—designing systems 
            that adapt, connect, and endure.
          </p>

          <div className="space-y-4 text-sm">
            <a 
              href="https://instagram.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline block"
            >
              @yourhandle
            </a>
            <a 
              href="mailto:hello@yoursite.com"
              className="link-underline block"
            >
              hello@yoursite.com
            </a>
            <div className="text-foreground/80">
              <p>123 Creative Street</p>
              <p>Studio 101</p>
              <p>New York, NY 10001</p>
            </div>
            <a 
              href="tel:+11234567890"
              className="link-underline block"
            >
              +1 (123) 456-7890
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 mt-12 lg:mt-0">
          <a href="#work" className="link-underline text-sm font-medium">
            Work
          </a>
          <a href="#about" className="link-underline text-sm font-medium">
            About
          </a>
        </nav>
      </motion.div>
    </section>
  );
};

export default HeroSection;
