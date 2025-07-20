import { RepoContext } from "@/context/RepoContext";
import { useContext } from "react";

export const useRepo = () => {
  const context = useContext(RepoContext);
  if (!context) {
    throw new Error("useRepo must be used within RepoContext.Provider");
  }
  return context;
};
