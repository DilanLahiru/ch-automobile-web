import { useState } from "react";

export const useAuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAuthModal = () => setIsOpen(true);
  const closeAuthModal = () => setIsOpen(false);

  return {
    isOpen,
    setIsOpen,
    openAuthModal,
    closeAuthModal,
  };
};
