import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

type SetAspectRatio = (value: SetStateAction<number>) => void;

export default function useUpdateStates(
  containerRef: RefObject<HTMLDivElement | null>,
  setContainerWidth: SetAspectRatio,
  setOrientation: Dispatch<SetStateAction<OrientationType | undefined>>
) {
  useEffect(() => {
    setInterval(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setOrientation(screen.orientation.type);
      }
    }, 34);
  }, []);
}
