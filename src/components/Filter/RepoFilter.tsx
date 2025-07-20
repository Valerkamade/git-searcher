import type { Repo } from "@/components/RepoList/RepoList";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { VMInput } from "@/components/ui/VMInput/VMInput";
import { useRepo } from "@/hooks/useRepo";
import { useEffect, useState } from "react";
import cls from "./RepoFilter.module.scss";

interface RepoFilterProps {
  repos: Repo[];
  onFilter: (filteredRepos: any[]) => void;
}

export const RepoFilter = ({ repos, onFilter }: RepoFilterProps) => {
  const [filterText, setFilterText] = useState<string>("");
  const { repoList } = useRepo();

  useEffect(() => {
    const filtered = repoList?.filter((repo) =>
      repo.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    onFilter(filtered ?? []);
  }, [filterText, repos, onFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = repoList?.filter((repo) =>
        repo.name.toLowerCase().includes(filterText.toLowerCase()),
      );
      onFilter(filtered ?? []);
    }, 300);

    return () => clearTimeout(timer);
  }, [filterText, repoList, onFilter]);

  return (
    <form className={cls.filterContainer}>
      <VMInput
        id="name-filter"
        type="search"
        placeholder="Введите название..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className={cls.filterInput}
      />
      {filterText.length > 0 && (
        <VMButton
          type="button"
          onClick={() => setFilterText("")}
          disabled={!filterText}
          typeButton="icon"
        >
          x
        </VMButton>
      )}
    </form>
  );
};
