import { useCallback, useState } from 'react';

import { NFTService } from 'services';
import { INFT } from 'interfaces';

export function useNFT() {
  const [nft, setNFT] = useState<INFT>();
  const [nfts, setNFTs] = useState<INFT[]>([]);

  const findAllNFTs = useCallback(async () => {
    const { status, data } = await NFTService.findAll();
    if (status === 200) {
      setNFTs(data);
    }
  }, []);

  const getNFTById = useCallback(async (id: string) => {
    const { status, data } = await NFTService.getById(id);
    if (status === 200) {
      setNFT(data);
    }
  }, []);

  const likeByNFTId = useCallback(async (id: string) => {
    const { status } = await NFTService.likeById(id);
    return status === 201;
  }, []);

  const deleteNFTById = useCallback(async (id: string) => {
    const { status } = await NFTService.deleteNFTById(id);
    return status === 200;
  }, []);

  return {
    nft,
    nfts,
    getNFTById,
    findAllNFTs,
    likeByNFTId,
    deleteNFTById,
  };
}
