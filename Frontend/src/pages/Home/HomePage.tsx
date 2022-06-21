import { useEffect } from 'react';

import { Nav, Header, Footer, NFTsList } from 'components';
import { useNFT } from 'hooks';

export function HomePage() {
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
      <Header />
      <NFTsList listTitle="NFTs notáveis" nfts={nfts} onLike={handleLikeNFTById} />
      <Footer />
    </>
  );
}
