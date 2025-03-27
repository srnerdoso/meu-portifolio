import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface LightProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Light({ containerRef }: LightProps) {
  const lightRef = useRef<HTMLImageElement>(null);
  const target = useRef({ x: 300, y: 300 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      target.current.x = ev.clientX;
      target.current.y = ev.clientY;
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    let animationFrameId: number;

    const updatePosition = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;

      if (lightRef.current) {
        lightRef.current.style.left = `${pos.current.x}px`;
        lightRef.current.style.top = `${pos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-full h-full overflow-hidden select-none">
      <NextImage
        src="/images/png/ligth-effect.png"
        alt="efeito-luz"
        ref={lightRef}
        width={1000}
        height={1000}
        priority
        className="fixed opacity-5 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
