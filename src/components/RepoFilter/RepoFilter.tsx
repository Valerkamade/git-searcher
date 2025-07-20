import { VMButton } from "@/components/ui/VMButton/VMButton";
import { VMInput } from "@/components/ui/VMInput/VMInput";
import { useFavorites } from "@/hooks/useFavorites";
import { useModal } from "@/hooks/useModal";
import { useRepo } from "@/hooks/useRepo";
import { useState } from "react";
import cls from "./RepoFilter.module.scss";

interface RepoFilterProps {}

export const RepoFilter = ({}: RepoFilterProps) => {
  const { setFilteredList, onReset, repoList } = useRepo();
  const [filterText, setFilterText] = useState<string>("");
  const { setError, setIsOpen } = useModal();
  const { favorites } = useFavorites();

  const handleFilterChange = (value: string) => {
    setFilterText(value);

    const filtered = repoList?.filter((repo) =>
      repo.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (!filtered) {
      setFilteredList([]);
      return;
    }

    const favoriteIds = new Set(favorites.map((repo) => repo.id));
    const list = filtered.filter((repo) => !favoriteIds.has(repo.id));

    setFilteredList(list);

    if (filtered?.length === 0 && value.length !== 0) {
      setError("Нет совпадений");
      setIsOpen(true);
    }
  };

  const handleReset = () => {
    setFilterText("");
    onReset(favorites);
  };
  return (
    <form className={cls.filterContainer}>
      <VMInput
        id="name-filter"
        type="search"
        placeholder="Введите название..."
        value={filterText}
        onChange={(e) => handleFilterChange(e.target.value)}
        className={cls.filterInput}
      />
      {filterText.length > 0 && (
        <VMButton type="button" onClick={handleReset} typeButton="icon">
          x
        </VMButton>
      )}
    </form>
  );
};
