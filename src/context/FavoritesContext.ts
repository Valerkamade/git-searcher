import type { Repo } from "@/components/RepoList/RepoList";
import { createContext } from "react";

interface FavoritesContextType {
  favorites: Repo[];
  addToFavorites: (repo: Repo) => void;
  removeFromFavorites: (repoId: number) => void;
  reorderFavorites: (newOrder: Repo[]) => void;
  isFavorite: (repoId: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);
