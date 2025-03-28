import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import setInterval30fps from "./setInterval30fps";

type SetAspectRatio = (value: SetStateAction<number>) => void;

export default function useUpdateStates(
  containerRef: RefObject<HTMLDivElement | null>,
  setContainerWidth: SetAspectRatio,
  setContainerHeight: SetAspectRatio,
  setOrientation: Dispatch<SetStateAction<OrientationType | undefined>>
) {
  useEffect(() => {
    setInterval30fps(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
        setOrientation(screen.orientation.type);
      }
    });
  }, []);
}
