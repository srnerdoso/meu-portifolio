import { RefObject, useEffect } from "react";

export function useBodyScrollLock(
  containerRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (containerRef.current) document.body.style.overflow = "auto";
  }, [containerRef.current]);
}
