import { FavoritesList } from "@/components/FavoritesList/FavoritesList";
import { Modal } from "@/components/Modal/Modal";
import { RepoInfo } from "@/components/RepoInfo/RepoInfo";
import { RepoList } from "@/components/RepoList/RepoList";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { mock } from "@/lib/mock";

import cls from "./App.module.scss";

function App() {
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
          <RepoList typeList="default" />

          <FavoritesList />
        </section>
      </main>
      <footer className={cls.footer}>
        <p>© {new Date().getFullYear()} ValerkaMade</p>
      </footer>
      <Modal>
        <RepoInfo repo={mock[0]} />
      </Modal>
    </>
  );
}

export default App;
