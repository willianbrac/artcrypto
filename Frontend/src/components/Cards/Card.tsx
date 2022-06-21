import { HeartButton, EthIcon } from 'components';
import { Constants } from 'configs';

type Props = {
  imgUrl: string;
  name: string;
  authorName: string | undefined;
  ethPrice: number;
  isLiked: boolean;
  onClick: VoidFunction;
  onLike: VoidFunction;
};
export function Card({
  imgUrl,
  name,
  authorName,
  ethPrice,
  isLiked,
  onClick,
  onLike
}: Props) {
  return (
    <div className="bg-white shadow-lg rounded-md">
        <img 
          src={`${Constants.ApiBaseUrl}/${imgUrl}`} 
          className="bg-cover bg-center w-full h-[380px] cursor-pointer bg-no-repeat mx-auto "
          onClick={onClick}
          alt="NFTImage"
        />
      <div className="w-full flex items-center p-4">
        <div className="flex-1">
          <p className="font-display font-bold">{name}</p>
          <p className="pb-1">{authorName}</p>
          <div className="flex items-center">
            <EthIcon />
            <p className="pl-2">{ethPrice}</p>
          </div>
        </div>
        <div>
          <HeartButton isLiked={isLiked} onClick={onLike} />
        </div>
      </div>
    </div>
  );
}
