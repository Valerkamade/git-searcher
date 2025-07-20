import type { Repo } from "@/components/RepoList/RepoList";
import { RepoContext } from "@/context/RepoContext";
import { type PropsWithChildren, useState } from "react";

export const RepoProvider = ({ children }: PropsWithChildren) => {
  const [repoList, setRepoList] = useState<Repo[] | null>(null);
  const [favorites, setFavorites] = useState<Repo[] | null>(null);

  const value = {
    repoList,
    favorites,
    setRepoList,
    setFavorites,
  };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};
