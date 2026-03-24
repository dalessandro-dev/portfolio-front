import { useEffect, useState } from "react";

export const CursorLight = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, [data-interactive]");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-9999 transition-all duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 300 : 200,
          height: hovering ? 300 : 200,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsla(180,100%,50%,${hovering ? 0.08 : 0.04}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none fixed z-10000 rounded-full transition-all duration-200 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 20 : 4,
          height: hovering ? 20 : 4,
          transform: "translate(-50%, -50%)",
          background: "hsl(180, 100%, 50%)",
          boxShadow: hovering
            ? "0 0 20px hsla(180,100%,50%,0.5)"
            : "0 0 8px hsla(180,100%,50%,0.3)",
        }}
      />
    </>
  );
};