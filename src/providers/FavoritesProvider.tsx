import type { Repo } from "@/components/RepoList/RepoList";
import { FavoritesContext } from "@/context/FavoritesContext";
import { type PropsWithChildren, useCallback, useState } from "react";

interface DndProviderProps extends PropsWithChildren {}

export const FavoritesProvider = ({ children }: DndProviderProps) => {
  const [favorites, setFavorites] = useState<Repo[]>([]);

  const addToFavorites = useCallback((repo: Repo) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === repo.id)) {
        console.log("Already in favorites");
        return prev;
      }
      return [...prev, repo];
    });
  }, []);

  const removeFromFavorites = (repoId: number) => {
    setFavorites((prev) => prev.filter((f) => f.id !== repoId));
  };

  const reorderFavorites = (newOrder: Repo[]) => {
    setFavorites(newOrder);
  };

  const isFavorite = useCallback(
    (repoId: number) => {
      return favorites.some((f) => f.id === repoId);
    },
    [favorites],
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        reorderFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
