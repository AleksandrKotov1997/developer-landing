import { useEffect, useState } from "react";

import { MOBILE_MEDIA_QUERY } from "../constants";

const getIsMobile = () => {
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

    const handleMediaChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return isMobile;
};
