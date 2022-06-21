import { useCallback, useEffect } from 'react';

import { Nav, NFTsList } from 'components';
import { useNFT, useUser } from 'hooks';
import { useAuthContext } from 'contexts';

export function NFTsLikedPage() {
  const { likeByNFTId } = useNFT();
  const { user: authUser } = useAuthContext();
  const { user, getUserById } = useUser();

  const handleGetUserById = useCallback(async () => {
    if (authUser?.id) {
      getUserById(String(authUser.id));
    }
  }, [authUser?.id, getUserById]);

  const handleLikeNFTById = async (id: string) => {
    await likeByNFTId(id);
    await handleGetUserById();
  };

  useEffect(() => {
    handleGetUserById();
  }, [handleGetUserById]);

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-10 rounded-md">
          <NFTsList listTitle="Sua coleção de NFTs" nfts={user?.likedNfts || []} onLike={handleLikeNFTById} />
        </div>
      </div>
    </>
  );
}
