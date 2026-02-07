import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-6 md:px-8 lg:px-12 py-16 lg:py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl lg:text-4xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
              SR<sup className="text-[0.5em] align-super">2</sup>
            </span>
            <div className="flex flex-col leading-[0.85] text-xl lg:text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
              <span>Sylvia</span>
              <span>Robles</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Creative Technologist & Fabricator
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="meta-text mb-4">Contact</h4>
          <a href="mailto:aivlysfluffy321@gmail.com" className="link-underline block text-sm">
            aivlysfluffy321@gmail.com
          </a>
          <a href="tel:+12532520439" className="link-underline block text-sm">
            (253) 252-0439
          </a>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <h4 className="meta-text mb-4">Location</h4>
          <p className="text-sm">Colorado Based</p>
        </div>

        {/* Expertise */}
        <div className="space-y-3">
          <h4 className="meta-text mb-4">Expertise</h4>
          <p className="text-sm">Computational Design</p>
          <p className="text-sm">Physical Fabrication</p>
          <p className="text-sm">Interactive Technology</p>
          <p className="text-sm">STEM Education</p>
        </div>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sylvia Robles. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Math × Art × Making
        </p>
      </div>
    </footer>
  );
};

export default Footer;
