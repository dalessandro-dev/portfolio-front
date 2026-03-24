import { ChevronDown } from "lucide-react";
import { Filter } from "./Filter";
import { ProjectCard } from "./ProjectCard";
import { SearchBar } from "./SearchBar";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { TitleSection } from "./ui/TitleSection";
import { type Project } from "../lib/projects";
import type { Stack } from "../lib/techStack";
import { FilterSkeleton } from "./FiltersSkeleton";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";

interface ProjectsSectionProps {
  projects: Project[] | null;
  isMobile: boolean;
  stacks: Stack[] | null;
  hasMore: boolean;
  total: number;
  applyFilters: (stacksId: number[]) => void;
  search: (query: string) => void;
  nextPage: () => void;
  isLoading: boolean;
}

export const ProjectsSection = ({
  stacks,
  projects,
  isMobile,
  hasMore,
  total,
  applyFilters,
  search,
  isLoading,
  nextPage,
}: ProjectsSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen h-auto w-screen flex flex-col justify-center"
      id="projects"
    >
      <div className="lg:mx-[15vw] mx-5 pt-20">
        <TitleSection inView={inView} number={2}>
          Projetos
        </TitleSection>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="mt-10">
            <SearchBar
              total={total}
              search={search}
              projectsNumber={projects?.length || 0}
            />
          </div>

          <div className="my-5">
            {!stacks ? (
              <FilterSkeleton />
            ) : (
              <Filter stacks={stacks} applyFilters={applyFilters} />
            )}
          </div>
        </motion.div>

        {!isLoading && projects && projects.length === 0 ? (
          <div className="w-full h-100 flex items-center justify-center text-muted-foreground">Nenhum projeto encontrado.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects
              ? projects.map((project, i) => {
                  return (
                    <ProjectCard
                      isMobile={isMobile}
                      key={project.title}
                      color="bg-white"
                      project={project}
                      inView={inView}
                      index={i}
                    />
                  );
                })
              : Array.from({ length: 4 }).map((_, i) => (
                  <ProjectCardSkeleton index={i} inView={inView} />
                ))}
          </div>
        )}

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={nextPage}
              className="group flex items-center gap-2 font-mono cursor-pointer text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 border border-border hover:border-primary/40 px-6 py-3 rounded-sm"
            >
              Mostrar mais projetos
              <ChevronDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
