import { useRef } from "react";

export default function useRefs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);
  const ulRef = useRef<HTMLLIElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  return { containerRef, mainRef, headerRef, ulRef, footerRef }
}
