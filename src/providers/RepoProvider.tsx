import type { Repo } from "@/components/RepoList/RepoList";
import { RepoContext } from "@/context/RepoContext";
import { type PropsWithChildren, useState } from "react";

export const RepoProvider = ({ children }: PropsWithChildren) => {
  const [repoList, setRepoList] = useState<Repo[] | null>(null);
  const [filteredList, setFilteredList] = useState<Repo[] | null>(null);

  const onReset = (favorites: Repo[]) => {
    if (!repoList) {
      setFilteredList([]);
      return;
    }
    const favoriteIds = new Set(favorites.map((repo) => repo.id));
    const restedList = repoList.filter((repo) => !favoriteIds.has(repo.id));

    setFilteredList(restedList ?? []);
  };

  const value = {
    repoList,
    filteredList,
    setRepoList,
    setFilteredList,
    onReset,
  };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};
