import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "@ebay/nice-modal-react";

export const useProjectCaseModalBehavior = () => {
  const modal = useModal();
  const [isClosing, setIsClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = useCallback(() => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    window.setTimeout(() => {
      modal.hide();
      modal.remove();
    }, 220);
  }, [isClosing, modal]);

  useEffect(() => {
    if (!modal.visible) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, modal.visible]);

  useEffect(() => {
    if (!modal.visible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modal.visible]);

  useEffect(() => {
    if (!modal.visible || isClosing) {
      return;
    }

    closeButtonRef.current?.focus();
  }, [isClosing, modal.visible]);

  return {
    closeButtonRef,
    handleClose,
    isClosing,
    isVisible: modal.visible,
  };
};
