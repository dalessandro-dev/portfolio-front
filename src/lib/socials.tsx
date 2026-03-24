import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialType = {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const socials: SocialType[] = [
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/dalessandro-dev",
  },
  {
    icon: Linkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/dalessandro-gomes-davi-4394a8329/",
  },
  { icon: Mail, label: "Mail", href: "mailto:dalessandrogd.dev@gmail.com" },
];
