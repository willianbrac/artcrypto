import { useNavigate } from 'react-router-dom';

import { Card } from 'components';
import { INFT } from 'interfaces';

type Props = {
  listTitle: string;
  nfts: INFT[];
  onLike(id: string): void;
};
export function NFTsList({ listTitle, nfts, onLike }: Props) {
  const navigate = useNavigate();
  return (
    <section className="w-full pb-10">
      <div className="container">
        <h2 className="text-xl font-bold py-4 text-center">{listTitle}</h2>
        <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {nfts.map((nft, index) => (
            <Card
              key={index}
              imgUrl={nft.photoUrl}
              name={nft.name}
              authorName={nft.author.name}
              ethPrice={Number(nft.price)}
              onClick={() => navigate(`/nfts/${nft.id}`)}
              isLiked={nft.likedByUser}
              onLike={() => onLike(nft.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
