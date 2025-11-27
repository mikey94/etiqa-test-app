import type { Rating } from "../../types/ratingType";
import style from "./Ratings.module.scss";
interface RatingsViewProps {
    repoData: Array<Rating> | undefined;
}

type RatingItemProps = {
    rating: Rating;
}

const RatingItem = ({ rating }: RatingItemProps) => {
    return (
        <div className={style.ratingCardContainer}>
            <p className={style.ratingCardTitle}>{rating.name}</p>
            <p className={style.ratingCardDescription}>{rating.description}</p>
            <div className={style.subElementContainer}>
                <div className={style.userDataWrapper}>
                    <img src={rating.owner.avatar_url} alt="avatar" width={30} height={30} className={style.userImage} />
                    <span>{rating.owner.login}</span>
                </div>
                <span>⭐ {rating.stargazers_count}</span>
            </div>
        </div>
    )
}

const RatingsView = ({ repoData }: RatingsViewProps) => {
  return (
    <div className={style.container}>
        {repoData?.map((repo) => (
            <RatingItem key={repo.id} rating={repo}/>
        ))}
    </div>
  );
};

export default RatingsView;