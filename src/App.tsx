import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { socials } from "./lib/socials";
import { CursorLight } from "./components/CursorLight";
import { useState, useEffect, useRef } from "react";
import { Menu } from "./components/Menu";
import { AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./components/ThemeToggle";
import { useApi } from "./hooks/useApi";
import { ProjectsSection } from "./components/ProjectsSection";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [stackFilters, setStackFilters] = useState<number[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {
    fetchProjects,
    fetchStacks,
    stacks,
    projects,
    hasMore,
    total,
    isLoading
  } = useApi();

  useEffect(() => {
    fetchProjects();
    fetchStacks();
  }, []);

  useEffect(() => {
    const checkRes = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkRes();

    window.addEventListener("resize", checkRes);

    return () => window.removeEventListener("resize", checkRes);
  }, []);

  useEffect(() => {
    if (!showMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setPage(1);
    fetchProjects({ stacksId: stackFilters, query });
  }, [stackFilters, query]);

  useEffect(() => {
    if (page > 1) {
      fetchProjects({ stacksId: stackFilters, query, page }, true);
    }
  }, [page]);

  return (
    <div className="h-screen w-screen flex flex-col">
      {!isMobile && <CursorLight />}

      <div className="mb-10 sm:mb-20 md:mb-30 lg:mb-40" id="contact">
        <NavBar
          scrolled={scrolled}
          stateMenu={showMenu}
          setStateMenu={() => setShowMenu(!showMenu)}
        />

        <ThemeToggle />

        <AnimatePresence>
          {showMenu && (
            <Menu setStateMenu={() => setShowMenu(!showMenu)} ref={menuRef} />
          )}
        </AnimatePresence>

        <div className="min-h-screen mt-[8vh]">
          <HeroSection socials={socials} />
        </div>

        <AboutSection stacks={stacks} />

        <ProjectsSection
          total={total}
          hasMore={hasMore}
          isMobile={isMobile}
          projects={projects}
          stacks={stacks}
          search={(query: string) => setQuery(query)}
          applyFilters={(stacksId: number[]) => setStackFilters(stacksId)}
          nextPage={() => setPage(page + 1)}
          isLoading={isLoading}
        />
      </div>

      <Footer socials={socials} />
    </div>
  );
}

export default App;
