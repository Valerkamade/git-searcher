import { createContext } from "react";

interface RepoContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  info: any;
  setInfo: (info: any) => void;
  error: any;
  setError: (error: any) => void;
}

export const ModalContext = createContext<RepoContextType | null>(null);
