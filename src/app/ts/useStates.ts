import { useState } from "react";

export default function useStates() {
  const [isVisible, setIsVisible] = useState<
    Record<"about" | "projects" | "experience", boolean>
  >({ about: true, projects: false, experience: false });
  const [headerVisible, setHeaderVisible] = useState(true);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  return {
    isVisible,
    setIsVisible,
    headerVisible,
    setHeaderVisible,
    containerWidth,
    setContainerWidth,
  };
}
