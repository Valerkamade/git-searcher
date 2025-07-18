import { Card } from "@/components/Card/Card";

import { mock } from "@/lib/mock";
import { useState } from "react";

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  forks_url: string;
  stargazers_url: string;
}

export const RepoList = () => {
  const [repoList, setRepoList] = useState<Repo[]>(mock);
  return (
    <div>
      {repoList.map((repo) => (
        <Card repo={repo} key={repo.id} />
      ))}
    </div>
  );
};
