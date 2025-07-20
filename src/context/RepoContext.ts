import type { Repo } from "@/components/RepoList/RepoList";
import { createContext } from "react";

interface RepoContextType {
  repoList: Repo[] | null;
  favorites: Repo[] | null;
  setRepoList: (repoList: Repo[]) => void;
  setFavorites: (favorites: Repo[]) => void;
}

export const RepoContext = createContext<RepoContextType | null>(null);
