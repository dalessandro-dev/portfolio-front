import { ExternalLink, Github } from "lucide-react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "../utils/cn";
import type { Project } from "../lib/projects";

interface ProjectCardProps extends HTMLMotionProps<"div"> {
  project: Project;
  color: string;
  index: number;
  inView: boolean;
  isMobile: boolean;
}

export const ProjectCard = ({
  project,
  inView,
  index,
  isMobile,
  ...props
}: ProjectCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCover, setShowCover] = useState(true);

  const inViewToPlayVideo = useInView(videoRef, {
    once: false,
    margin: "-45% 0px -45% 0px",
  });

  const shouldPlay = isHovering || (inViewToPlayVideo && isMobile);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleVideo = () => {
      if (shouldPlay) {
        setShowCover(false);
        videoRef.current?.play().catch(() => {});
      } else {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
        setShowCover(true);
      }
    };

    if (isMobile && shouldPlay) {
      timeout = setTimeout(() => {
        handleVideo();
      }, 1500);
    } else {
      handleVideo();
    }

    return () => clearTimeout(timeout);
  }, [shouldPlay, isMobile]);

  return (
    <motion.div
      className="grid grid-rows-2 sm:w-auto min-h-130 h-auto rounded-sm card-monolith text-sm text-muted-foreground"
      {...props}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      layout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center">
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            shouldPlay && "opacity-100",
            !shouldPlay && "opacity-0",
          )}
        />

        <img
          src={project.coverUrl}
          className={cn(
            "absolute w-full h-full object-cover",
            showCover && "opacity-100",
            !showCover && "opacity-0",
          )}
        />

        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            !showCover && "opacity-0",
            showCover && "opacity-100",
          )}
        >
          <div className="flex flex-col items-center gap-2">
            <Play
              size={20}
              className="text-foreground group-hover:text-primary/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex p-5 flex-col gap-7">
        <div className="flex flex-col gap-2 text-foreground">
          <h6 className="card-title font-display font-semibold md:text-xl text-md mb-2 transition-colors duration-300">
            {project.title}
          </h6>
          <span className="text-muted-foreground text-[12px]">
            {project.description}
          </span>
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.stacks.map((stack, i) => {
            return (
              <div className="tech-pill" key={i}>
                {stack.name}
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 link-minimal text-[12px] mt-auto mb-0 sm:text-xs">
          {project.projectUrl !== "*" ? (
            <a
              href={project.projectUrl}
              className="flex gap-1.5 items-center transition-colors hover:text-glow "
            >
              <ExternalLink size={13} />
              Visitar
            </a>
          ) : (
            <span className="transition-colors flex gap-1.5 items-center">
              <ExternalLink size={13} />
              Indisponível
            </span>
          )}

          {project.githubUrl !== "*" ? (
            <a
              href={project.githubUrl}
              className="hover:text-glow transition-colors flex gap-1.5 items-center"
            >
              <Github size={13} />
              Código
            </a>
          ) : (
            <span className="transition-colors flex gap-1.5 items-center">
              <Github size={13} />
              Privado
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
