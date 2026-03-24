import { motion } from "framer-motion";

export const ProjectCardSkeleton = ({
  inView,
  index,
}: {
  inView: boolean;
  index: number;
}) => {
  return (
    <motion.div
      className="grid grid-rows-2 sm:w-auto min-h-130 h-auto rounded-sm card-monolith text-sm text-muted-foreground"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <div className="relative flex items-center justify-center bg-loading animate-pulse" />

      <div className="flex p-5 flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div className="w-50 h-7 bg-loading rounded-2xl animate-pulse" />
          <div className="w-full h-20 bg-loading rounded-2xl animate-pulse" />
        </div>

        <div className="w-60 h-4 bg-loading rounded-2xl animate-pulse" />

        <div className="flex gap-4 link-minimal text-[12px] mt-auto mb-0 sm:text-xs">
          <div className="w-40 h-5 bg-loading rounded-2xl animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};
