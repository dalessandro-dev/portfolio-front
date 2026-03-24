import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TitleSection } from "./ui/TitleSection";
import { type Stack } from "../lib/techStack";

export const AboutSection = ({ stacks }: { stacks: Stack[] | null }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="w-screen min-h-screen flex items-center"
      ref={ref}
    >
      <div className="flex flex-col ml-5 mx-5 lg:mx-[15vw] w-screen">
        <div className="mt-20 sm:mt-0">
          <TitleSection inView={inView} number={1}>
            Sobre Mim
          </TitleSection>
        </div>

        <div className="flex flex-col ml-0 gap-10 sm:flex-row mt-15 sm:mt-20">
          <motion.div
            className="text-description text-sm sm:max-w-[40vw] md:max-w-[40vw] lg:max-w-[30vw] leading-[1.9] md:text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Olá, tenho 19 anos e sou um desenvolvedor
              Full-Stack em plena ascensão. Minha jornada na tecnologia começou
              cedo, com a formação como Técnico em Informática, onde descobri
              que programar é muito mais do que escrever linhas de comando — é
              sobre resolver problemas reais com lógica e criatividade.
            </p>
            <br />
            <p>
              Atualmente, curso Análise e Desenvolvimento de Sistemas na
              Universidade Federal do Ceará (UFC), com previsão de graduação
              para 2028. Essa base acadêmica de excelência, somada à minha
              experiência técnica, me permite transitar com segurança por todo o
              ciclo de vida de um software, sendo meu foco principal hoje é o
              desenvolvimento de websites modernos.
            </p>
            <br />
            <p>
              Sou movido por uma fome constante de aprendizado e possuo uma
              mente aberta para adaptações. Em um setor que se reinventa a cada
              dia, vejo as novas tecnologias e desafios não como obstáculos, mas
              como oportunidades para evoluir e entregar soluções
              ainda mais eficazes. Estou iniciando minha carreira profissional
              com dedicação total, pronto para colaborar em projetos que exijam
              inovação e um código bem escrito.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:ml-auto max-w-full sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[28vw] mr-0"
          >
            {stacks
              ? stacks.map((stack, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="bg-mass px-10 py-5 text-center hover:border-glow/50 hover:text-glow transition-all duration-300 flex items-center justify-center rounded-sm border border-border/50 font-mono text-xs"
                    key={i}
                  >
                    {stack.name}
                  </motion.div>
                ))
              : Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="bg-loading animate-pulse w-full sm:w-25 h-20 rounded-sm border border-border/50"
                    key={i}
                  />
                ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
