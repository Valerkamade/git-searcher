import { Card } from "@/components/Card/Card";

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
  typeList?: "default" | "favorite";
  filteredRepoList: Repo[] | null;
}

export const RepoList = ({
  typeList = "default",
  filteredRepoList,
}: RepoListProps) => {
  const getMessage = typeList === "favorite" ? "Избранное" : "Репозитории";

  return (
    <div className={cls.container}>
      <p className={cls.message}>{getMessage}</p>

      <ul className={cls.repoList}>
        {filteredRepoList?.map((repo) => (
          <Card key={repo.id} repo={repo} onClick={() => {}} />
        ))}
      </ul>
    </div>
  );
};
