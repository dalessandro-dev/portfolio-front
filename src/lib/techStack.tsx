export type TechStackType = string;

export type Stack = {
  id: number;
  name: string;
  projectsId: number[];
};

export interface FiltersStacks {
  perPage?: number;
  page?: number;
}

export const techStack: TechStackType[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Next.js",
  "GraphQL",
  "Redis",
  "Git",
];
