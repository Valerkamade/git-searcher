import { SearchIcon } from "@/components/ui/icons/search-icon/SearchIcon";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { useModal } from "@/hooks/useModal";
import { useRepo } from "@/hooks/useRepo";
import { mock } from "@/lib/mock";
import { type FormEvent, useEffect, useState } from "react";
import cls from "./SearchBar.module.scss";

export const SearchBar = () => {
  const { setRepoList } = useRepo();
  const { setIsOpen, setError } = useModal();
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // if (!query.trim()) {
    setRepoList(mock);
    //   return;
    // }
    //
    // const timer = setTimeout(() => {
    //   searchRepos(query).then();
    // }, 500);
    //
    // return () => clearTimeout(timer);
  }, []);

  const searchRepos = async (searchQuery: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}`,
      );

      if (!response.ok) {
        throw new Error(
          "GitHub API превышен лимит запросов или некорректный запрос",
        );
      }

      const data = await response.json();

      setRepoList(data.items);
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
          <label className={cls.label} htmlFor="search-input">
            <input
              className={cls.input}
              placeholder="Search..."
              type="search"
              id="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
            {loading && <span className={cls.loading}>Loading...</span>}
          </label>
        </form>
      </div>
    </>
  );
};
