import type { Repo } from "@/components/RepoList/RepoList";
import { createContext } from "react";

interface RepoContextType {
  repoList: Repo[] | null;
  setRepoList: (repoList: Repo[]) => void;
}

export const RepoContext = createContext<RepoContextType | null>(null);
