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
          <h2 className="text-4xl lg:text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
            J&K
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Independent Design Studio
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="meta-text mb-4">Contact</h4>
          <a href="mailto:hello@yoursite.com" className="link-underline block text-sm">
            hello@yoursite.com
          </a>
          <a href="tel:+11234567890" className="link-underline block text-sm">
            +1 (123) 456-7890
          </a>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <h4 className="meta-text mb-4">Location</h4>
          <p className="text-sm">123 Creative Street</p>
          <p className="text-sm">Studio 101</p>
          <p className="text-sm">New York, NY 10001</p>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h4 className="meta-text mb-4">Follow</h4>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-underline block text-sm"
          >
            Instagram
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-underline block text-sm"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-underline block text-sm"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Designed with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
