import { RepoFilter } from "@/components/RepoFilter/RepoFilter";
import { RepoList } from "@/components/RepoList/RepoList";
import { useRepo } from "@/hooks/useRepo";
import { useEffect, useState } from "react";
import cls from "./SearchRepoList.module.scss";

export const SearchRepoList = () => {
  const { repoList } = useRepo();
  const [filteredRepoList, setFilteredRepoList] = useState(repoList);

  useEffect(() => {
    setFilteredRepoList(repoList);
  }, [repoList]);

  return (
    <div className={cls.container}>
      <RepoFilter repos={repoList ?? []} onFilter={setFilteredRepoList} />
      <RepoList repos={filteredRepoList} typeList="search" />
    </div>
  );
};
