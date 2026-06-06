import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "@ebay/nice-modal-react";
import { useBodyScrollLock } from "./useBodyScrollLock";

export const useProjectCaseModalBehavior = () => {
  const modal = useModal();
  const [isClosing, setIsClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLElement | null>(null);

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

  useBodyScrollLock(modal.visible);

  const getFocusableElements = useCallback(() => {
    if (!modalRef.current) {
      return [];
    }

    return Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
  }, []);

  useEffect(() => {
    if (!modal.visible) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [getFocusableElements, handleClose, modal.visible]);

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
    modalRef,
  };
};
