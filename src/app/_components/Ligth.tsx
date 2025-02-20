import NextImage from "next/image";
import { useEffect, useRef } from "react";

export default function Light() {
  const lightRef = useRef<HTMLImageElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updatePosition = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;

      if (lightRef.current) {
        lightRef.current.style.left = `${pos.current.x}px`;
        lightRef.current.style.top = `${pos.current.y}px`;
      }

      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-full h-full overflow-hidden">
      <NextImage
        src="/images/png/ligth-effect.png"
        alt="ligth-effect"
        ref={lightRef}
        width={1000}
        height={1000}
        priority
        className="fixed opacity-5 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
