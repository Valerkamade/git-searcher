import { Card } from "@/components/Card/Card";
import { Modal } from "@/components/Modal/Modal";
import { RepoInfo } from "@/components/RepoInfo/RepoInfo";
import { mock } from "@/lib/mock";
import { useState } from "react";

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
}

interface RepoListProps {
  typeList: "default" | "favorite";
}

export const RepoList = ({ typeList = "default" }: RepoListProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [repoList, setRepoList] = useState<Repo[]>(mock);
  const getMessage =
    typeList === "favorite" ? "Избранное" : "Найдены репозитории:";

  return (
    <div className={cls.container}>
      {repoList === null ? (
        <p className={cls.message}>Начните поиск</p>
      ) : (
        <>
          <p className={cls.message}>{getMessage}</p>
          <ul className={cls.repoList}>
            {repoList?.map((repo) => (
              <li className={cls.repoItem} key={repo.id}>
                <Card repo={repo} />
              </li>
            ))}
          </ul>
        </>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RepoInfo repo={repoList[0]} />
      </Modal>
    </div>
  );
};
