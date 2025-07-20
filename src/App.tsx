import { FavoritesList } from "@/components/FavoritesList/FavoritesList";
import { Modal } from "@/components/Modal/Modal";
import { RepoInfo } from "@/components/RepoInfo/RepoInfo";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SearchRepoList } from "@/components/SearchRepoList/SearchRepoList";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useModal } from "@/hooks/useModal";

import cls from "./App.module.scss";

function App() {
  const { error } = useModal();
  return (
    <>
      <header className={cls.header}>
        <h1 className={cls.title}>В поисках репо</h1>
        <div className={cls.menu}>
          <ThemeToggle />
          <SearchBar />
        </div>
      </header>
      <main className={cls.main}>
        <section className={cls.wrapper}>
          <SearchRepoList />

          <FavoritesList />
        </section>
      </main>
      <footer className={cls.footer}>
        <p>© {new Date().getFullYear()} ValerkaMade</p>
      </footer>
      <Modal>{error ? error : <RepoInfo />}</Modal>
    </>
  );
}

export default App;
