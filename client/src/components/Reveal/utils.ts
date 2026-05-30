import {
  DESKTOP_ROOT_MARGIN,
  MOBILE_ROOT_MARGIN,
  MOBILE_THRESHOLD,
} from "./constants";

import type { RevealSettings } from "./types";

export const getRevealSettings = ({
  delay,
  isMobile,
  threshold,
}: {
  delay: number;
  isMobile: boolean;
  threshold: number;
}): RevealSettings => {
  if (isMobile) {
    return {
      delay: 0,
      rootMargin: MOBILE_ROOT_MARGIN,
      threshold: MOBILE_THRESHOLD,
    };
  }

  return {
    delay,
    rootMargin: DESKTOP_ROOT_MARGIN,
    threshold,
  };
};
