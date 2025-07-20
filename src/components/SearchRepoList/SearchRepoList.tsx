import { RepoFilter } from "@/components/RepoFilter/RepoFilter";
import { RepoList } from "@/components/RepoList/RepoList";
import { useRepo } from "@/hooks/useRepo";
import cls from "./SearchRepoList.module.scss";

export const SearchRepoList = () => {
  const { filteredList } = useRepo();
  return (
    <div className={cls.container}>
      <RepoFilter />
      <RepoList repos={filteredList} typeList="search" />
    </div>
  );
};
