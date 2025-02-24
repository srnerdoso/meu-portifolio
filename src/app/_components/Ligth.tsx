import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface LigthProps {
  titleRef: React.RefObject<HTMLDivElement | null>;
}

export default function Light({ titleRef }: LigthProps) {
  const lightRef = useRef<HTMLImageElement>(null);
  const target = useRef({ x: 300, y: 300 });
  const pos = useRef({ x: 0, y: 0 });
  
  
  useEffect(() => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      target.current.x = rect.left + rect.width / 2;
      target.current.y = rect.top + rect.height / 2;
    }

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (e instanceof TouchEvent) {
        target.current.x = e.touches[0].clientX;
        target.current.y = e.touches[0].clientY;
      } else {
        target.current.x = e.clientX;
        target.current.y = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

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
      window.removeEventListener("touchmove", handleMouseMove);
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
