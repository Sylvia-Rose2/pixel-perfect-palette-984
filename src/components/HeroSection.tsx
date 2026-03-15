import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroStudio from "@/assets/portrait-hero.png";
import { categories } from "@/data/projects";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen p-6 md:p-8 lg:p-12">
      {/* Logo */}
      <div className="col-span-1 lg:col-span-12 pt-4">
        <motion.div 
          className="flex items-center gap-4 md:gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="border-[3px] border-foreground px-4 py-2 md:px-5 md:py-3 text-4xl md:text-6xl lg:text-7xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
            SR<sup className="text-[0.5em] align-super">2</sup>
          </span>
          <span className="text-2xl md:text-4xl lg:text-5xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Sylvia Rose Robles: Creative Portfolio
          </span>
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
          </div>
        </div>

      </motion.div>

      {/* Navigation */}
      <motion.nav 
        className="col-span-1 lg:col-span-12 flex gap-8 md:gap-12 items-center border-t border-border pt-6 pb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a href="#about" className="link-underline text-xl md:text-2xl lg:text-3xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          About
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger className="link-underline text-xl md:text-2xl lg:text-3xl tracking-tight flex items-center gap-2 outline-none" style={{ fontFamily: 'var(--font-display)' }}>
            Projects <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-background border border-border">
            {categories.map((cat) => (
              <DropdownMenuItem key={cat.slug} asChild className="text-sm cursor-pointer">
                <Link to={`/projects/${cat.slug}`}>{cat.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.nav>
    </section>
  );
};

export default HeroSection;
