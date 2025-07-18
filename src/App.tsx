import { FavoritesList } from "@/components/FavoritesList/FavoritesList";
import { RepoList } from "@/components/RepoList/RepoList";
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
      <main>
        <h1 className={cls.title}>Ищи и просматривай репозитории</h1>
        <div>
          <RepoList />
          <FavoritesList />
        </div>
      </main>
    </>
  );
}

export default App;
