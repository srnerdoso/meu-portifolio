import { RefObject, SetStateAction, useEffect } from "react";

export default function useGetWidth(
  containerRef: RefObject<HTMLDivElement | null>,
  setContainerWidth: (value: SetStateAction<number>) => void
) {
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
}
