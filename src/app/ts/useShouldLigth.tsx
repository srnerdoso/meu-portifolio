"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

export default function useShouldLigth(
  containerWidth: number,
  setShouldRender: Dispatch<SetStateAction<boolean>>
) {
  return useEffect(() => {
    if (
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      (containerWidth < 1024 && navigator.maxTouchPoints > 0)
    ) {
      setShouldRender(false);
      return;
    }
  }, []);
}
