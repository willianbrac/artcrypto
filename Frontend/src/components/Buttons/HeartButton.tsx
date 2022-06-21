import classNames from 'classnames';
import { HeartIcon } from 'components';

type Props = {
  isLiked?: boolean;
  onClick: VoidFunction;
};
export function HeartButton({ isLiked = false, onClick }: Props) {
  return (
    <button 
      onClick={onClick}
      className={
        classNames('heart-button', { 'heart-button--liked': isLiked })}>
      <HeartIcon />
    </button>
  );
}
