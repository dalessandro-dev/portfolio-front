import type { Stack } from "./techStack";

export type Project = {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  projectUrl: string;
  coverUrl: string;
  videoUrl: string;
  stacks: Stack[];
};

export interface FiltersProjects {
  perPage?: number;
  page?: number;
  stacksId?: number[];
  query?: string;
}

export type ProjectType = {
  title: string;
  desc: string;
  tags: string[];
  color: string;
};

export const projects: ProjectType[] = [
  {
    title: "Plataforma E-Commerce",
    desc: "Marketplace online escalável com gestão de inventário em tempo real e processamento de pagamentos.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-cyan-900/20 to-transparent",
  },
  {
    title: "Dashboard de Analytics",
    desc: "Plataforma de visualização de dados em tempo real para monitoramento de métricas e KPIs de negócios.",
    tags: ["TypeScript", "D3.js", "Python", "Redis"],
    color: "from-blue-900/20 to-transparent",
  },
  {
    title: "API de Gestão de Tarefas",
    desc: "API RESTful com autenticação, rate limiting e documentação abrangente.",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    color: "from-emerald-900/20 to-transparent",
  },
  {
    title: "Chat em Tempo Real",
    desc: "Mensagens com criptografia ponta-a-ponta, compartilhamento de arquivos e suporte a conversas em grupo.",
    tags: ["React", "WebSocket", "AWS", "TypeScript"],
    color: "from-violet-900/20 to-transparent",
  },
  {
    title: "App de Finanças Pessoais",
    desc: "Controle de gastos, orçamentos e metas financeiras com gráficos interativos.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    color: "from-amber-900/20 to-transparent",
  },
  {
    title: "Sistema de Blog",
    desc: "CMS completo com editor markdown, SEO otimizado e sistema de comentários.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "TypeScript"],
    color: "from-pink-900/20 to-transparent",
  },
  {
    title: "Automação DevOps",
    desc: "Pipeline CI/CD automatizado com monitoramento, logging e deploy contínuo.",
    tags: ["Docker", "AWS", "Python", "Terraform"],
    color: "from-orange-900/20 to-transparent",
  },
  {
    title: "Rede Social de Devs",
    desc: "Plataforma para desenvolvedores compartilharem projetos, artigos e colaborarem.",
    tags: ["React", "Node.js", "GraphQL", "Redis"],
    color: "from-teal-900/20 to-transparent",
  },
];
