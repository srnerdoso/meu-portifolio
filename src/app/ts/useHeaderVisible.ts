import { useEffect } from "react";

export default function useHeaderVisible(
  headerRef: React.RefObject<HTMLHeadElement | null>,
  setHeaderVisible: (value: React.SetStateAction<boolean>) => void,
  headerVisible: boolean
) {
  useEffect(() => {
    const currentHeader = headerRef.current;

    if (!currentHeader) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentHeader) {
      observer.observe(currentHeader);
    }

    if (currentHeader) {
      const nav = currentHeader.children[1];

      if (headerVisible) {
        nav.className =
          "max-xl:static max-xl:w-full max-xl:order-3 max-xl:mt-auto max-xl:py-2";
      } else {
        nav.className =
          "max-xl:fixed max-xl:transition max-xl:ease-in-out max-xl:top-0 max-xl:w-full max-xl:bg-background max-xl:items-center max-xl:justify-center max-xl:flex max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:z-50 max-xl:shadow-lg max-xl:py-2";
      }
    }

    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      }
    };
  }, [headerVisible]);
}
