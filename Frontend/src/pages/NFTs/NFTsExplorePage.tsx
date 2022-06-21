import { useEffect } from 'react';

import { Nav, NFTsList } from 'components';
import { useNFT } from 'hooks';

export function NFTsExplorePage() {
  const { nfts, findAllNFTs, likeByNFTId } = useNFT();

  useEffect(() => {
    findAllNFTs();
  }, [findAllNFTs]);

  const handleLikeNFTById = async (id: string) => {
    await likeByNFTId(id);
    await findAllNFTs();
  };

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-10 rounded-md">
          <NFTsList listTitle="Explorar todas as NFTs" nfts={nfts} onLike={handleLikeNFTById} />
        </div>
      </div>
    </>
  );
}
