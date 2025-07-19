import { SearchIcon } from "@/components/ui/icons/search-icon/SearchIcon";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import cls from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={cls.searchBar}>
      <form className={cls.form} onSubmit={() => {}}>
        <VMButton
          className={cls.button}
          type="submit"
          typeButton="icon"
          onClick={() => {}}
        >
          <SearchIcon />
        </VMButton>
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
