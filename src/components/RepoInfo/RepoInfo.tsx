import type { Repo } from "@/components/RepoList/RepoList";
import { Icons } from "@/components/ui/icons/Icons";
import cls from "./RepoInfo.module.scss";

interface RepoInfo {
  repo: Repo | null;
}

export const RepoInfo = ({ repo }: RepoInfo) => {
  if (!repo) return null;

  const createdAt = new Date(repo.created_at).toLocaleDateString();

  return (
    <div className={cls.repoInfo}>
      <h2 className={cls.title}>{repo.name}</h2>
      <p>{repo.owner.login}</p>
      <p>{repo.description}</p>
      <p>{createdAt}</p>
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
      <p className={cls.lang}>{repo.language}</p>
      <button>{repo.clone_url}</button>
    </div>
  );
};
