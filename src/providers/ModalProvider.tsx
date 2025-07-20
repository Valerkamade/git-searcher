import { ModalContext } from "@/context/ModalContext";
import { type PropsWithChildren, useState } from "react";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const value = {
    isOpen,
    setIsOpen,
    info,
    setInfo,
    error,
    setError,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
