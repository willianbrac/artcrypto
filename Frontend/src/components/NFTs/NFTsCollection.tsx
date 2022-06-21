import { useNavigate } from 'react-router-dom';

import { Card, IconButton, TrashIcon } from 'components';
import { IAuthoredNFT } from 'interfaces';
import { useCollection, useNFT } from 'hooks';
import { useAuthContext } from 'contexts';

type Props = {
  collectionId: string | undefined;
  collectionName: string | undefined;
  authorId: string | undefined;
  authorName: string | undefined;
  nfts: IAuthoredNFT[];
  onLike: VoidFunction;
  onDelete: VoidFunction;
};

export function NFTsCollection({
  collectionId,
  collectionName,
  authorId,
  authorName,
  nfts,
  onLike,
  onDelete
}: Props) {
  const navigate = useNavigate();
  const { user: authUser } = useAuthContext();
  const { likeByNFTId } = useNFT();
  const { deleteCollectionById } = useCollection();

  const handleLikeNFTById = async (id: string) => {
    await likeByNFTId(String(id));
    if (onLike) {
      onLike();
    }
  };

  const handleDeleteNFTById = async () => {
    if (collectionId) {
      await deleteCollectionById(collectionId);
      if (onDelete) {
        onDelete();
      }
    }
  };

  return (
    <section className="w-full pb-10">
      <div className="container">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-xl font-bold py-4 text-center">{collectionName}</h2>
          {authUser?.id === authorId && <IconButton onClick={handleDeleteNFTById} Icon={<TrashIcon />} />}
        </div>
        <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {nfts.map((nft, index) => (
            <Card
              key={index}
              imgUrl={nft.photoUrl}
              name={nft.name}
              authorName={authorName}
              ethPrice={Number(nft.price)}
              onClick={() => navigate(`/nfts/${nft.id}`)}
              isLiked={nft.likedByUser}
              onLike={() => handleLikeNFTById(nft.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
