import type { Repo } from "@/components/RepoList/RepoList";
import { Icons } from "@/components/ui/icons/Icons";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { VMLink } from "@/components/ui/VMLink/VMLink";
import cls from "./RepoInfo.module.scss";

interface RepoInfo {
  repo: Repo | null;
}

export const RepoInfo = ({ repo }: RepoInfo) => {
  if (!repo) return null;

  const createdAt = new Date(repo.created_at).toLocaleDateString();

  return (
    <div className={cls.repoInfo}>
      <div className={cls.titleWrapper}>
        <h2 className={cls.title}>
          <VMLink href={repo.clone_url}>{repo.name}</VMLink>
        </h2>
        <VMLink href={repo.forks_url}>{repo.owner.login}</VMLink>
      </div>
      <div className={cls.descriptionWrapper}>
        <h3 className={cls.subtitle}>Описание:</h3>
        <p className={cls.text}>{repo.description}</p>
        <h3 className={cls.subtitle}>Язык:</h3>
        <p className={cls.text}>{repo.language}</p>

        <h3 className={cls.subtitle}>Наблюдатели:</h3>
        <VMButton
          className={cls.button}
          typeButton="icon"
          type="button"
          onClick={() => {
            console.log(repo.stargazers_url);
          }}
        >
          <Icons type="star" />

          {repo.stargazers_count}
        </VMButton>
        <h3 className={cls.subtitle}>Форки:</h3>
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

        <h3 className={cls.subtitle}>Создан:</h3>
        <p className={cls.text}>{createdAt}</p>
      </div>
    </div>
  );
};
