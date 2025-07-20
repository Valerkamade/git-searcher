import type { Repo } from "@/components/RepoList/RepoList";
import { createContext } from "react";

interface RepoContextType {
  repoList: Repo[] | null;
  filteredList: Repo[] | null;
  setRepoList: (repoList: Repo[] | null) => void;
  setFilteredList: (filterList: Repo[] | null) => void;
  onReset: (favorites: Repo[]) => void;
}

export const RepoContext = createContext<RepoContextType | null>(null);
