import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface LigthProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  headerRef: React.RefObject<HTMLHeadElement | null>;
}

export default function Light({ headerRef, containerRef }: LigthProps) {
  const lightRef = useRef<HTMLImageElement>(null);
  const target = useRef({ x: 300, y: 300 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const { current } = containerRef;

    if (!current) return;
    if (!headerRef.current) return;

    const rect = headerRef.current.getBoundingClientRect();
    target.current.x = rect.width / 2;
    target.current.y = rect.height / 2;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e && e.touches.length > 0) {
        target.current.x = e.touches[0].clientX;
        target.current.y = e.touches[0].clientY;
      } else if ("clientX" in e) {
        target.current.x = e.clientX;
        target.current.y = e.clientY;
      }
    };

    current.addEventListener("mousemove", handleMouseMove, { passive: true });
    current.addEventListener("touchmove", handleMouseMove, { passive: true });

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
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("touchmove", handleMouseMove);
    };
  }, [headerRef]);

  return (
    <div className="fixed w-full h-full overflow-hidden select-none">
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
