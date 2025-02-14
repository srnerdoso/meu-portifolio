import { useEffect, useRef } from "react";

export default function Ligth() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (lightRef.current) {
        lightRef.current.style.left = `${clientX}px`;
        lightRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-full h-full overflow-hidden">
      <div
        ref={lightRef}
        style={{
          background:
            "radial-gradient(circle, #8892B0 0%, #FFFFFF00 70%)",
        }}
        className="fixed w-[1000px] h-[1000px] roundend-full  opacity-5 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
