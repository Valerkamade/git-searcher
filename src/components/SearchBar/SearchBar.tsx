import { SearchIcon } from "@/components/lib/icons/search-icon/SearchIcon";
import cls from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={cls.searchBar}>
      <form className={cls.form} onSubmit={() => {}}>
        <button className={cls.button} type="submit">
          <SearchIcon />
        </button>
        <label className={cls.label} htmlFor="search-input">
          <input
            className={cls.input}
            placeholder="Search..."
            type="search"
            id="search-input"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};
