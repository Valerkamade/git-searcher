import type { Repo } from "@/components/RepoList/RepoList";
import { Icons } from "@/lib/icons/Icons";
import cls from "./Card.module.scss";

interface CardProps {
  repo: Repo;
}

export const Card = ({ repo }: CardProps) => {
  return (
    <div className={cls.card}>
      <h2 className={cls.title}>{repo.name}</h2>
      <p className={cls.text}>{repo.description}</p>
      <div className={cls.wrapper}>
        <div className={cls.wrapperButtons}>
          <button
            className={cls.button}
            type="button"
            onClick={() => {
              console.log(repo.stargazers_url);
            }}
          >
            <Icons type="star" />

            {repo.stargazers_count}
          </button>

          <button
            className={cls.button}
            type="button"
            onClick={() => {
              console.log(repo.forks_url);
            }}
          >
            <Icons type="fork" />

            {repo.forks_count}
          </button>
        </div>
        <button className={cls.buttonDnd} type="button">
          <Icons className={cls.dnd} type="dnd" />
        </button>
        <p className={cls.lang}>{repo.language}</p>
      </div>
    </div>
  );
};
