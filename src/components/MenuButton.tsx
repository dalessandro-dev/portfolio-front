import { Menu, X } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface MenuButtonProps extends HTMLMotionProps<"button">  {
  stateMenu: boolean;
}

export const MenuButton = ({ stateMenu, ...props }: MenuButtonProps) => {
  return (
    <motion.button
      aria-label="Menu"
      animate={{ rotate: stateMenu ? 90 : 0 }}
      transition={{ duration: 0.2 }}
      className="w-8 h-8 rounded-full flex bg-card/70 text-muted-foreground border-border border items-center justify-center"
      {...props}
    >
      {stateMenu ? <X size={18} /> : <Menu size={18} />}
    </motion.button>
  );
};
