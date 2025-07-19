import { RepoContext } from "@/context/RepoContext";
import { useContext } from "react";

export const useRepo = () => {
  const context = useContext(RepoContext);
  if (!context) {
    throw new Error(
      "useDatePicker must be used within DatePickerContext.Provider",
    );
  }
  return context;
};
