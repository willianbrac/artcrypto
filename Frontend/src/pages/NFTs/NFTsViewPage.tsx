import { useNavigate, useParams } from 'react-router-dom';

import { AuthorInfo, EthIcon, IconButton, LikeButton, Nav, NFTsCollection, TrashIcon } from 'components';
import { useCollection, useNFT } from 'hooks';
import { useCallback, useEffect } from 'react';
import { Constants } from 'configs';
import { useAuthContext } from 'contexts';

export function NTFsViewPage() {
  const { id } = useParams<{ id: string }>();
  const { user: authUser } = useAuthContext();
  const navigate = useNavigate();
  const { nft, getNFTById, likeByNFTId, deleteNFTById } = useNFT();
  const { collection, getCollectionById } = useCollection();

  const handleGetNFTById = useCallback(async () => {
    try {
      await getNFTById(String(id));
    } catch (error) {
      navigate('/');
    }
  }, [getNFTById, id, navigate]);

  useEffect(() => {
    handleGetNFTById();
  }, [handleGetNFTById]);

  useEffect(() => {
    if (nft?.collection.id) {
      getCollectionById(nft?.collection.id);
    }
  }, [getCollectionById, nft]);

  const handleLikeButton = async () => {
    if (id) {
      await likeByNFTId(String(id));
      await handleGetNFTById();
    }
  };

  const handleLikeNFTById = async () => {
    await handleGetNFTById();
  };

  const handleDeleteNFTById = async () => {
    if (id) {
      const deleted = await deleteNFTById(String(id));
      if (deleted) {
        navigate('/');
      }
    }
  };

  const handleDeleteNFTCollectionById = () => {
    navigate('/');
  };

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-10 rounded-md">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={`${Constants.ApiBaseUrl}/${nft?.photoUrl}`} 
                className="bg-center lg:bg-left bg-no-repeat rounded-md w-full h-auto"
                alt="NFTImage"
              />

              <div className="hidden lg:block">
                <AuthorInfo authorName={nft?.author.name} />
              </div>
            </div>
            <div>
              <div className="w-full flex items-center">
                <h1 className="font-bold text-4xl">{nft?.name}</h1>
                {authUser?.id === nft?.author.id && <IconButton onClick={handleDeleteNFTById} Icon={<TrashIcon />} />}
              </div>
              <div className="flex items-center">
                <EthIcon />
                <p className="pl-2">{nft?.price}</p>
              </div>

              <LikeButton likes={nft?.likes} isLiked={nft?.likedByUser} onClick={handleLikeButton} />

              <div className="block lg:hidden">
                <AuthorInfo authorName={nft?.author.name} />
              </div>
            </div>
          </div>

          <NFTsCollection
            collectionId={collection?.id}
            collectionName={collection?.name}
            authorId={collection?.author.id}
            authorName={collection?.author.name}
            nfts={collection?.nfts || []}
            onLike={handleLikeNFTById}
            onDelete={handleDeleteNFTCollectionById}
          />
        </div>
      </div>
    </>
  );
}
