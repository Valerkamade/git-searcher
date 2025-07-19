import type { Repo } from "@/components/RepoList/RepoList";
import { RepoContext } from "@/context/RepoContext";
import { type PropsWithChildren, useState } from "react";

export const RepoProvider = ({ children }: PropsWithChildren) => {
  const [repoList, setRepoList] = useState<Repo[] | null>(null);

  const value = {
    repoList,
    setRepoList,
  };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};
