import { Card } from "@/components/Card/Card";
import {
  Draggable,
  Droppable,
  type DroppableProvided,
} from "@hello-pangea/dnd";

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
  typeList: "search" | "favorites";
  repos?: Repo[] | null;
}

export const RepoList = ({ typeList, repos }: RepoListProps) => {
  return (
    <div className={cls.repoList}>
      <p className={cls.message}>
        {typeList === "favorites" ? "Избранное" : "Репозитории"}
      </p>

      <Droppable droppableId={typeList}>
        {(provided: DroppableProvided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={cls.list}
          >
            {repos?.filter(Boolean).map((repo: Repo, index: number) => (
              <Draggable
                key={repo.id}
                draggableId={`${typeList}-${repo.id}`}
                index={index}
              >
                {(provided) => (
                  <li
                    className={cls.item}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card repo={repo} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
