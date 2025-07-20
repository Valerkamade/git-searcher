import { RepoFilter } from "@/components/Filter/RepoFilter";
import { RepoList } from "@/components/RepoList/RepoList";
import cls from "@/components/RepoList/RepoList.module.scss";
import { useRepo } from "@/hooks/useRepo";
import { useEffect, useState } from "react";

export const SearchRepoList = () => {
  const { repoList } = useRepo();
  const [filteredRepoList, setFilteredRepoList] = useState(repoList);

  useEffect(() => {
    setFilteredRepoList(repoList);
  }, [repoList]);

  return (
    <div className={cls.container}>
      <RepoFilter repos={repoList ?? []} onFilter={setFilteredRepoList} />
      <RepoList filteredRepoList={filteredRepoList} />
    </div>
  );
};
