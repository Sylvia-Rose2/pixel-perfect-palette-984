import { motion } from "framer-motion";
import portrait from "@/assets/portrait-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-8 lg:px-12 py-20 lg:py-32 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 lg:mb-24"
      >
        <p className="editorial-text max-w-3xl text-xl lg:text-2xl leading-relaxed">
          The best identities are memory machines — vessels for experiences 
          and emotions that deepen in meaning, through use and time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img 
            src={portrait} 
            alt="Portrait"
            className="w-full max-w-sm aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <h3 className="text-2xl lg:text-3xl mt-6 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            About Me
          </h3>
        </motion.div>

        <motion.div 
          className="lg:col-span-8 lg:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="editorial-text mb-6">
            I'm a designer with a focus on brand identity, visual systems, and process-oriented 
            creative work. A conceptual thinker with cultural acuity, I bring a long view — 
            transforming the abstract into the actionable.
          </p>
          <p className="editorial-text mb-6">
            A believer in simplicity without being simplistic, I founded this practice to unite 
            strategy and structure in the service of enduring work. My approach combines rigorous 
            research with intuitive creativity, resulting in identities that resonate deeply with 
            audiences.
          </p>
          <p className="editorial-text">
            Over the years, I've had the privilege of working with startups, established brands, 
            and cultural institutions across technology, wellness, finance, and the arts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
