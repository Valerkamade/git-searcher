import { type Theme, ThemeContext } from "@/context/ThemeContext";
import { type ReactNode, useState } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const initialTheme =
    (localStorage.getItem("theme") as Theme) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
