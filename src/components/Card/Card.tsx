import type { Repo } from "@/components/RepoList/RepoList";
import { Icons } from "@/components/ui/icons/Icons";
import { VMButton } from "@/components/ui/VMButton/VMButton";
import { useFavorites } from "@/hooks/useFavorites";
import { useModal } from "@/hooks/useModal";
import { cn } from "@/lib/class-name";
import cls from "./Card.module.scss";

interface CardProps {
  repo: Repo;
}

export const Card = ({ repo }: CardProps) => {
  const { setIsOpen, setInfo } = useModal();
  const { isFavorite } = useFavorites();

  const handleClickCard = () => {
    setIsOpen(true);
    setInfo(repo);
  };

  return (
    <div className={cls.card}>
      <VMButton
        as="div"
        className={cn(cls.cardButton, {
          [cls.isFavorite]: isFavorite(repo.id),
        })}
        typeButton="cards"
        onClick={handleClickCard}
      >
        <div className={cls.wrapperTitle}>
          <h2 className={cls.title}>{repo.name}</h2>
          <p className={cls.owner}>{repo.owner.login}</p>
        </div>
        <p className={cls.description}>{repo.description}</p>

        <p className={cls.lang}>{repo.language}</p>
      </VMButton>
      <div className={cls.wrapperButtonsBottom}>
        <VMButton
          data-tooltip="Звездочеты"
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
          data-tooltip="Форки"
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
      <div className={cls.wrapperButtonsTop}>
        <VMButton
          className={cls.buttonDnd}
          typeButton="icon"
          type="button"
          data-tooltip="Потяни"
        >
          <Icons className={cls.dnd} type="dnd" />
        </VMButton>
      </div>
    </div>
  );
};
