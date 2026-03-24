import { motion } from "framer-motion";

interface TitleSectionProps {
  number: number;
  children: string;
  inView: boolean;
}

export const TitleSection = ({
  number,
  children,
  inView,
}: TitleSectionProps) => {
  return (
    <div className="flex flex-col">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2"
      >
        00{number}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-semibold text-5xl"
      >
        {children}
      </motion.h2>
    </div>
  );
};
