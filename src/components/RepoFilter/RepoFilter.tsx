import type { Repo } from "@/components/RepoList/RepoList";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { VMInput } from "@/components/ui/VMInput/VMInput";
import { useModal } from "@/hooks/useModal";
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
  const { setError, setIsOpen } = useModal();
  useEffect(() => {
    const filtered = repoList?.filter((repo) =>
      repo.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    onFilter(filtered ?? []);

    if (filtered?.length === 0) {
      setError("Нет совпадений");
      setIsOpen(true);
    }
  }, [filterText, repos, onFilter]);

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
