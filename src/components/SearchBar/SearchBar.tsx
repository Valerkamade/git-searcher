import { SearchIcon } from "@/components/ui/icons/search-icon/SearchIcon";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { VMInput } from "@/components/ui/VMInput/VMInput";
import { useModal } from "@/hooks/useModal";
import { useRepo } from "@/hooks/useRepo";
import { type FormEvent, useState } from "react";
import cls from "./SearchBar.module.scss";

export const SearchBar = () => {
  const { setRepoList, setFilteredList } = useRepo();
  const { setIsOpen, setError } = useModal();
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const searchRepos = async (searchQuery: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}`,
      );

      if (!response.ok) {
        return new Error(
          "GitHub API превышен лимит запросов или некорректный запрос",
        );
      }

      const data = await response.json();
      console.log(data.items);
      setRepoList(data.items);
      setFilteredList(data.items);
    } catch (err) {
      console.log("Error:", err);
      setIsOpen(true);
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      setRepoList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query.trim()) {
      searchRepos(query).then();
    }
  };

  return (
    <>
      <div className={cls.searchBar}>
        <form className={cls.form} onSubmit={handleSubmit}>
          <VMButton
            className={cls.button}
            type="submit"
            typeButton="icon"
            disabled={loading}
          >
            <SearchIcon />
          </VMButton>

          <VMInput
            id="search-input"
            placeholder="Search..."
            type="search"
            onChange={(e) => setQuery(e.target.value)}
          >
            {loading && <span className={cls.loading}>Loading...</span>}
          </VMInput>
        </form>
      </div>
    </>
  );
};
