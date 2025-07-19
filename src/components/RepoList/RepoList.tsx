import { Card } from "@/components/Card/Card";
import { useRepo } from "@/hooks/useRepo";

import cls from "./RepoList.module.scss";

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  forks_url: string;
  stargazers_url: string;
  owner: { login: string };
  created_at: string;
  clone_url: string;
  html_url: string;
}

interface RepoListProps {
  typeList: "default" | "favorite";
}

export const RepoList = ({ typeList = "default" }: RepoListProps) => {
  const { repoList } = useRepo();
  const getMessage = typeList === "favorite" ? "Избранное" : "Репозитории";

  return (
    <div className={cls.container}>
      <p className={cls.message}>{getMessage}</p>
      <ul className={cls.repoList}>
        {repoList?.map((repo) => (
          <Card key={repo.id} repo={repo} onClick={() => {}} />
        ))}
      </ul>
    </div>
  );
};
