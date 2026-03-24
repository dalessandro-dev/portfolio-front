import type { Stack } from "../lib/techStack";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

interface FilterProps {
  stacks: Stack[];
  applyFilters: (stacksId: number[]) => void;
}

export const Filter = ({ stacks, applyFilters }: FilterProps) => {
  const [showButtons, setShowButtons] = useState(
    stacks.map((s) => ({ id: s.id, value: false })),
  );

  useEffect(() => {
    applyFilters(
      showButtons.filter((button) => button.value).map((button) => button.id),
    );
  }, [showButtons]);

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide my-5">
      {stacks.map((stack) => {
        const isStackActive = showButtons.find((b) => b.id === stack.id)?.value;

        return (
          <button
            key={stack.id}
            onClick={() => {
              const newValue = showButtons.map((btn) => {
                if (btn.id === stack.id) {
                  return { ...btn, value: !btn.value };
                }
                return btn;
              });
              setShowButtons(newValue);
            }}
            className={cn(
              "font-mono text-[10px] whitespace-nowrap tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer",
              isStackActive && "border-primary/50 text-primary bg-primary/10",
              !isStackActive &&
                "border-transparent text-muted-foreground/40 hover:text-muted-foreground/70 hover:border-border/30",
            )}
          >
            {stack.name}
          </button>
        );
      })}
    </div>
  );
};
