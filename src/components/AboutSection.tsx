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
          I see mathematics as a natural science—a universal language that describes the world 
          around us. I use math to inspire art and design, and I use art as a way to teach 
          mathematical concepts.
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
            alt="Sylvia Robles"
            className="w-full max-w-sm aspect-[3/4] object-cover"
          />
          <h3 className="text-2xl lg:text-3xl mt-6 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Background
          </h3>
          <p className="text-sm text-muted-foreground">
            ATLAS Institute, CU Boulder<br />
            Creative Technology & Design MS<br />
            Mathematics, CSU
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-8 lg:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="editorial-text mb-6">
            I'm graduating from the ATLAS Institute's Creative Technology and Design I'm graduating from the ATLAS Institute's Creative Technology and Design master's of science program 
            at CU Boulder with a background in mathematics from CSU. My work sits at the intersection 
            of computational design, physical fabrication, interactive technology, and STEM education.
          </p>
          <p className="editorial-text mb-6">
            My process usually starts with a goal: fix a problem or communicate an idea. From there, 
            I research, experiment, and build. I'm equally comfortable writing code in Grasshopper or 
            Processing as I am working with wood, paper, or electronics. I like the precision of 
            computational design and the tactile satisfaction of hands-on fabrication—and I like 
            combining them.
          </p>
          <p className="editorial-text mb-6">
            At ATLAS, I've had opportunities I didn't expect. Through CU Boulder's We Are Water program, 
            I designed and built custom interactive water education exhibits for communities in Hopi, 
            Arizona and Alamosa, Colorado. I've worked with Denver artist Sammy Lee, helping fabricate 
            pieces for her MCA exhibition and integrating sensors and lighting into her work.
          </p>
          <p className="editorial-text">
            I'm looking for work in museums, fabrication, R&D, or independent contract work—places 
            where I can solve problems creatively and help people see familiar things in new ways.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
