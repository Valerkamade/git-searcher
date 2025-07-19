import type { Repo } from "@/components/RepoList/RepoList";
import { Icons } from "@/components/ui/icons/Icons";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import cls from "./Card.module.scss";

interface CardProps {
  repo: Repo;
}

export const Card = ({ repo }: CardProps) => {
  return (
    <VMButton className={cls.card} typeButton="cards" type="button">
      <div className={cls.wrapperTitle}>
        <h2 className={cls.title}>{repo.name}</h2>
        <p className={cls.owner}>{repo.owner.login}</p>
      </div>
      <p className={cls.text}>{repo.description}</p>
      <div className={cls.wrapper}>
        <div className={cls.wrapperButtons}>
          <VMButton
            className={cls.button}
            type="button"
            typeButton="icon"
            onClick={() => {
              console.log(repo.stargazers_url);
            }}
          >
            <Icons type="star" />

            {repo.stargazers_count}
          </VMButton>

          <VMButton
            className={cls.button}
            type="button"
            typeButton="icon"
            onClick={() => {
              console.log(repo.forks_url);
            }}
          >
            <Icons type="fork" />

            {repo.forks_count}
          </VMButton>
        </div>
        <VMButton className={cls.buttonDnd} typeButton="icon" type="button">
          <Icons className={cls.dnd} type="dnd" />
        </VMButton>
        <p className={cls.lang}>{repo.language}</p>
      </div>
    </VMButton>
  );
};
