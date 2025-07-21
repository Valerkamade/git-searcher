import { Icons } from "@/components/ui/icons/Icons";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { VMLink } from "@/components/ui/VMLink/VMLink";
import { useModal } from "@/hooks/useModal";
import cls from "./RepoInfo.module.scss";

export const RepoInfo = () => {
  const { info } = useModal();
  if (info === null) return null;

  const createdAt = new Date(info.created_at).toLocaleDateString();

  return (
    <div className={cls.repoInfo}>
      <div className={cls.titleWrapper}>
        <h2 className={cls.title}>
          <VMLink href={info.html_url}>{info.name}</VMLink>
        </h2>
        <VMLink className={cls.owner} href={info.owner.html_url}>
          {info.owner.login}
        </VMLink>
      </div>
      <div className={cls.descriptionWrapper}>
        <h3 className={cls.subtitle}>Описание:</h3>
        <p className={cls.text}>{info.description}</p>
        <h3 className={cls.subtitle}>Язык:</h3>
        <p className={cls.text}>{info.language}</p>

        <h3 className={cls.subtitle}>Наблюдатели:</h3>
        <VMButton
          className={cls.button}
          typeButton="icon"
          onClick={() => {
            console.log(info.stargazers_url);
          }}
        >
          <Icons type="star" />
          {info.stargazers_count}
        </VMButton>
        <h3 className={cls.subtitle}>Форки:</h3>
        <VMButton
          className={cls.button}
          type="button"
          typeButton="icon"
          onClick={() => {
            console.log(info.forks_url);
          }}
        >
          <Icons type="fork" />

          {info.forks_count}
        </VMButton>

        <h3 className={cls.subtitle}>Создан:</h3>
        <p className={cls.text}>{createdAt}</p>
      </div>
    </div>
  );
};
