import { SearchBar } from "@/components/SearchBar/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

import cls from "./App.module.scss";

function App() {
  return (
    <>
      <header className={cls.header}>
        <SearchBar />

        <ThemeToggle />
      </header>
    </>
  );
}

export default App;
