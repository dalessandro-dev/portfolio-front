import { Search, X } from "lucide-react";
import { useRef, useState } from "react";

interface SearchBar {
  total: number;
  projectsNumber: number;
  search: (query: string) => void;
}

export const SearchBar = ({ total, projectsNumber, search }: SearchBar) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showButton, setShowButton] = useState<boolean>(false);

  const timerRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current?.value || "";

    setShowButton(value !== "");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      search(value);
    }, 500);
  };

  return (
    <div className="flex gap-5 items-center">
      <div className="w-[50%] sm:w-[43%] items-center group transition-colors focus-within:border-primary/40 flex border-b border-border/40 gap-1">
        <div>
          <Search size={15} className="text-muted-foreground/40" />
        </div>
        <input
          type="text"
          ref={inputRef}
          className="border-0 text-xs placeholder:text-muted-foreground/30 h-full flex-1 outline-none pl-2 pr-4 py-2"
          onChange={handleSearch}
          placeholder="Buscar projetos..."
        />
      </div>

      {showButton && (
        <button
          className="font-mono gap-1.5 text-muted-foreground/50 flex items-center text-[12px] cursor-pointer tracking-wider hover:text-primary/40 transition-colors"
          onClick={() => {
            inputRef.current!.value = "";
            search("")
            setShowButton(false);
          }}
        >
          <X size={10} />
          Limpar
        </button>
      )}

      <span className="font-mono text-[12px] text-muted-foreground/30">
        {projectsNumber}/{total}
      </span>
    </div>
  );
};
