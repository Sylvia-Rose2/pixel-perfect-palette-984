import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { categories, getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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
        <div className="flex items-center gap-6 mb-8">
          <Link
            to="/"
            className="link-underline text-sm font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="link-underline text-sm font-medium flex items-center gap-1 outline-none">
              Projects <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background border border-border">
              {categories.map((cat) => (
                <DropdownMenuItem key={cat.slug} asChild className="text-sm cursor-pointer">
                  <Link to={`/projects/${cat.slug}`}>{cat.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
