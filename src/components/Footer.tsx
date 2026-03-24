import { type SocialType } from "../lib/socials";

export const Footer = ({ socials }: { socials: SocialType[] }) => (
  <footer className="py-12 border-t border-border/30">
    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <span className="font-mono text-xs text-muted-foreground">
        © 2026 D'alessandro Gomes Davi
      </span>

      <div className="flex gap-5">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-glow transition-colors duration-300"
              data-interactive
              aria-label={social.label}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);
