import classNames from 'classnames';

import { HeartIcon } from 'components';

type Props = {
  likes: number | undefined;
  isLiked?: boolean;
  onClick: VoidFunction;
};
export function LikeButton({ likes, isLiked = false, onClick }: Props) {
  return (
    <button onClick={onClick} className="like-button">
      <span className="flex-1 p-4 text-secondary text-left">
        <strong className="text-2xl">{likes}</strong> curtidas
      </span>
      <span className={
        classNames('like-button-icon', {
          'like-button-icon--liked': isLiked
        })}>
        <HeartIcon width={30} height={30} />
      </span>
    </button>
  );
}
