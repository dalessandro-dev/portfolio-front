import { Download, MoveRight } from "lucide-react";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import type { SocialType } from "../lib/socials";
import { scrollToSection } from "../utils/scrollToSection";
import { motion } from "framer-motion";

export const HeroSection = ({ socials }: { socials: SocialType[] }) => {
  return (
    <section className="flex h-[92vh] sm:flex-row flex-col-reverse gap-6 sm:gap-0 h-90vh items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:ml-[15vw] sm:ml-5 sm:max-w-[45vw] lg:max-w-[30vw]"
      >
        <span className="font-mono text-center sm:text-left font-display text-[1.2vh] sm:text-[10px] md:text-[11px] lg:text-[0.95vw] tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Desenvolvedor Full Stack
        </span>

        <h1 className="font-display font-bold sm:text-left text-center text-[5vh] md:text-[60px] lg:text-[5vw] leading-[0.95] mb-5">
          Dalessandro
          <br />
          <span className="glow-text">Gomes</span>
          <br />
          Davi
        </h1>

        <span className="text-description text-center text-[1.5vh] sm:text-left mb-8 px-5 sm:px-0 sm:text-[9px] md:text-[10px] lg:text-[0.9vw]">
          Buscando construir aplicações full-stack que solucionem
          verdadeiramente problemas reais
        </span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col px-5 sm:px-0 sm:flex-row gap-4 text-xs tracking-[0.2em] mb-8"
        >
          <a
            href="https://wa.me/5585992017523?text=Olá, Dalessandro! Vi seu portfólio e fiquei interessado no seu trabalho como desenvolvedor. Gostaria de saber mais sobre seu trabalho, você teria disponibilidade?"
            className="group relative flex justify-center items-center gap-2.5 font-mono sm:text-[10px] lg:text-xs tracking-[0.2em] uppercase px-8 py-3 lg:py-2.5 rounded-sm border border-glow/60 text-glow bg-glow/5 backdrop-blur-sm transition-all duration-500 hover:bg-glow hover:text-primary-foreground hover-shadow-glow-blue"
          >
            <WhatsappIcon className="text-glow shrink-0 sm:aspect-square sm:w-auto sm:h-[90%] transition-transform duration-300 group-hover:rotate-8 group-hover:text-primary-foreground" />
            Fale Comigo
          </a>

          <button
            onClick={() => {
              scrollToSection("projects");
            }}
            className="cursor-pointer gap-2 justify-center hover:border-glow/40 uppercase flex items-center hover:text-glow transition-all duration-300 px-6 py-3 border-none rounded-sm "
          >
            Ver projetos
            <MoveRight size={10} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 justify-center sm:justify-start"
        >
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-glow hover:border-glow/40 transition-all duration-300"
                href={social.href}
                key={social.label}
              >
                <Icon size={18} />
              </a>
            );
          })}

          <span className="w-px h-6 bg-border/50 mx-1" />

          <a
            href="https://drive.google.com/file/d/14f-4wL_aGeXrMRPmSjlgINj2ZM2eIRtA/view?usp=drive_link"
            className="h-10 gap-1 p-2 text-sm cursor-pointer border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-glow hover:border-glow/40 transition-all duration-300"
          >
            <Download size={15} />
            <span>CV</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-end justify-center overflow-hidden bg-mass aspect-square w-[25vh] sm:w-65 md:w-75 lg:w-[28vw] sm:ml-auto border border-border/50 lg:mr-[15vw] sm:mr-5 rounded-full shadow-glow-blue"
      >
        <img src="/dalessandro.png" className="h-full" />
      </motion.div>
    </section>
  );
};
