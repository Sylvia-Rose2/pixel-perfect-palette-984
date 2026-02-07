import { motion } from "framer-motion";
import heroStudio from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen p-6 md:p-8 lg:p-12">
      {/* Logo */}
      <div className="col-span-1 lg:col-span-12 pt-4">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="monogram">SR<sup className="text-[0.5em] align-super">2</sup></span>
          <div className="flex flex-col leading-[0.85] text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
            <span>Sylvia</span>
            <span>Robles</span>
          </div>
        </motion.div>
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
          alt="Creative Technology Work"
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
          <div>
            <p className="meta-text mb-2">Creative Technologist & Fabricator</p>
            <p className="editorial-text max-w-md">
              I work at the intersection of math, art, and hands-on making. I use mathematics as both 
              inspiration and educational tool—designing pieces that make abstract concepts tangible 
              and creating interactive experiences that help people see the world through a different lens.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <a 
              href="mailto:aivlysfluffy321@gmail.com"
              className="link-underline block"
            >
              aivlysfluffy321@gmail.com
            </a>
            <div className="text-foreground/80">
              <p>Colorado Based</p>
            </div>
            <a 
              href="tel:+12532520439"
              className="link-underline block"
            >
              (253) 252-0439
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
