import { useEffect } from "react";

export default function useVisibilityEffect(
  containerRef: React.RefObject<HTMLDivElement | null>,
  setContainerWidth: (value: React.SetStateAction<number>) => void,
  mainRef: React.RefObject<HTMLDivElement | null>,
  setIsVisible: (
    value: React.SetStateAction<
      Record<"about" | "projects" | "experience", boolean>
    >
  ) => void,
  isVisible: Record<"about" | "projects" | "experience", boolean>,
  ulRef: React.RefObject<HTMLLIElement[]>
) {
  useEffect(() => {
    if (containerRef.current)
      setContainerWidth(containerRef.current?.clientWidth);

    const getMainChildren = (childrenId: string) => {
      if (!mainRef.current) return;

      return mainRef.current.children.namedItem(childrenId);
    };

    const observerToggle = (element: Element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({
            ...prev,
            [element.id]: entry.isIntersecting,
          }));
        },
        // Quando tiver mais projetos diminuir o threshold para 0.3
        { threshold: 0.7 }
      );

      if (element) {
        observer.observe(element);
      }
    };

    ["about", "projects", "experience"].forEach((section) => {
      const currentSection = getMainChildren(section);
      if (currentSection) observerToggle(currentSection);
    });

    const updateUlVisibility = (
      index: 0 | 1 | 2,
      key: keyof typeof isVisible
    ) => {
      if (ulRef.current[index]) {
        ulRef.current[index].className = isVisible?.[key]
          ? "transition duration-300 ease-in-out opacity-100 font-semibold"
          : "transition duration-300 ease-in-out opacity-50";
      }
    };

    updateUlVisibility(0, "about");
    updateUlVisibility(1, "projects");
    updateUlVisibility(2, "experience");
  }, [isVisible]);
}
