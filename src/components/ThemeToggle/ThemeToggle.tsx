import { Icons } from "@/components/lib/icons/Icons";
import { useTheme } from "@/hooks/useTheme";
import cls from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className={`${cls.button}  ${theme === "light" ? "text-text-secondary" : "text-yellow-dark"}`}
      onClick={toggleTheme}
    >
      <Icons type={theme === "light" ? "moon" : "sun"} width={22} height={22} />
    </button>
  );
};
