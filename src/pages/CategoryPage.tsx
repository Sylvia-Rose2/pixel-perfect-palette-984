import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { categories, getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const projects = slug ? getProjectsByCategory(slug) : [];

  if (!category) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Category not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 pb-4">
        <Link
          to="/"
          className="link-underline text-sm font-medium inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <motion.h1
          className="text-3xl md:text-5xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category.name}
        </motion.h1>
      </header>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-32 w-full">
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} {...project} index={index} />
          ))}
          <div className="border-t border-border" />
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
