"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

export default function useDevice(
  containerWidth: number,
  setShouldRender: Dispatch<SetStateAction<boolean>>
) {
  return useEffect(() => {
    if (navigator.maxTouchPoints > 0 || containerWidth < 1024) {
      return setShouldRender(false);
    }
    return setShouldRender(true);
  }, [containerWidth]);
}
