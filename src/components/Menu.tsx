import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";
import { forwardRef } from "react";

interface MenuProps {
  setStateMenu: () => void;
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ setStateMenu }, ref) => {
    const navItems = [
      { label: "Contato", id: "contact", num: "00" },
      { label: "Sobre", id: "about", num: "01" },
      { label: "Projetos", id: "projects", num: "02" },
    ];

    return (
      <motion.div
        className="mt-[7.5vh] z-2 right-5 rounded-3xl w-80 fixed text-muted-foreground border border-border bg-card/95"
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        ref={ref}
      >
        <h1 className="border border-border rounded-t-3xl p-3 font-mono text-sm px-10 flex items-center justify-between uppercase tracking-[0.28em]">
          <span>Menu</span>
          <span className="h-2 w-2 rounded-full bg-primary/70" />
        </h1>

        <div className="grid grid-rows-3 gap-1.5 p-2">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setStateMenu();
              }}
              className="flex w-full items-center justify-between rounded-xl px-3 text-left transition-colors hover:bg-secondary"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ delay: i * 0.04, duration: 0.18 }}
              data-interactive
            >
              <div className="flex items-center justify-between w-full text-foreground p-5">
                <div className="flex gap-3 items-center">
                  <h1 className="font-mono text-[13px] tracking-[0.2em] text-muted-foreground">
                    {item.num}
                  </h1>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.label}
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  /
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  },
);
