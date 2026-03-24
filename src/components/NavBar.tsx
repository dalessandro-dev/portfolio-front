import { scrollToSection } from "../utils/scrollToSection";
import { cn } from "../utils/cn";
import { MenuButton } from "./MenuButton";

interface NavBarProps {
  setStateMenu: () => void;
  stateMenu: boolean;
  scrolled: boolean;
}

export const NavBar = ({ setStateMenu, stateMenu, scrolled }: NavBarProps) => {
  const buttonNames = [
    { name: "Sobre", id: "about" },
    { name: "Projetos", id: "projects" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full glass-nav flex items-center h-[8vh] py-5 sm:py-8 z-1 transition-all duration-500",
        scrolled && "sm:py-6 h-[6.5vh]",
      )}
    > 
      <h1 className="font-display font-bold text-sm sm:text-lg tracking-tight cursor-pointer flex items-center gap-0.5 ml-5 lg:ml-[15vw] sm:ml-5">
        <span>&lt;</span>
        <span className="text-glow">Dalessandro</span>
        <span className="text-muted-foreground">Dev</span>
        <span>/&gt;</span>
      </h1>

      <div className="hidden gap-10 ml-auto lg:mr-[15vw] sm:flex sm:mr-5">
        {buttonNames.map((buttonName) => (
          <button
            className="link-minimal cursor-pointer hover:text-glow transition-colors uppercase text-xs tracking-widest"
            key={buttonName.id}
            onClick={() => scrollToSection(buttonName.id)}
          >
            {buttonName.name}
          </button>
        ))}
      </div>

      <div className="mr-5 ml-auto sm:hidden">
        <MenuButton stateMenu={stateMenu} onClick={setStateMenu} />
      </div>
    </nav>
  );
};
