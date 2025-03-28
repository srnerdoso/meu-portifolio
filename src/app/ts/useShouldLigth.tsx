"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

export default function useShouldLigth(
  containerWidth: number,
  setShouldRender: Dispatch<SetStateAction<boolean>>
) {
  return useEffect(() => {
    if (navigator.maxTouchPoints > 0) {
      return setShouldRender(false);
    }
    return setShouldRender(true);
  }, [containerWidth]);
}
