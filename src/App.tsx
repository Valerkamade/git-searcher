import { Modal } from "@/components/Modal/Modal";
import { RepoInfo } from "@/components/RepoInfo/RepoInfo";
import { type Repo, RepoList } from "@/components/RepoList/RepoList";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SearchRepoList } from "@/components/SearchRepoList/SearchRepoList";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Icons } from "@/components/ui/icons/Icons";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { useFavorites } from "@/hooks/useFavorites";
import { useModal } from "@/hooks/useModal";
import { useTheme } from "@/hooks/useTheme";
import { DragDropContext } from "@hello-pangea/dnd";

import cls from "./App.module.scss";

function App() {
  const { error } = useModal();
  const { favorites, addToFavorites, removeFromFavorites, reorderFavorites } =
    useFavorites();
  const { theme } = useTheme();

  const { handleDragEnd } = useDragAndDrop<Repo>({
    onAddItem: addToFavorites,
    onRemoveItem: removeFromFavorites,
    onReorder: reorderFavorites,
    itemList: favorites,
  });

  return (
    <>
      <header className={cls.header}>
        <div className={cls.wrapperLogo}>
          <h1 className={cls.title}>В поисках репо</h1>
          <Icons
            type="logo"
            fill={theme === "light" ? cls.accentLight : cls.accentDark}
          />
        </div>
        <div className={cls.menu}>
          <ThemeToggle />
          <SearchBar />
        </div>
      </header>
      <main className={cls.main}>
        <section className={cls.wrapper}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <SearchRepoList />
            <RepoList typeList="favorites" repos={favorites} />
          </DragDropContext>
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
