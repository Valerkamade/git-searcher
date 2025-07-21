import { Icons } from "@/components/ui/icons/Icons";
import { VMButton } from "@/components/ui/VMButton/VMButton";
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
    <VMButton
      className={`${cls.button}  ${theme === "light" ? "text-text-secondary" : "text-yellow-dark"}`}
      onClick={toggleTheme}
      typeButton="icon"
      type="button"
      data-tooltip={theme === "light" ? "Тёмную?" : "Светлую?"}
    >
      <Icons type={theme === "light" ? "moon" : "sun"} width={22} height={22} />
    </VMButton>
  );
};
