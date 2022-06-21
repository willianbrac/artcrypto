import { useCallback, useState } from 'react';

import { CollectionService } from 'services';
import { ICollection, ICreateNFT } from 'interfaces';

export function useCollection() {
  const [collection, setCollection] = useState<ICollection>();

  const createNewCollection = useCallback(async (name: string) => {
    const { status, data } = await CollectionService.createNewCollection(name);
    if (status === 201) {
      return data;
    }
  }, []);

  const createNewNFT = useCallback(async (id: string, nft: ICreateNFT) => {
    const { status, data } = await CollectionService.createNewNFT(id, nft);
    if (status === 201) {
      return data;
    }
  }, []);

  const getCollectionById = useCallback(async (id: string) => {
    const { status, data } = await CollectionService.getById(id);
    if (status === 200) {
      setCollection(data);
    }
  }, []);

  const deleteCollectionById = useCallback(async (id: string) => {
    const { status } = await CollectionService.deleteCollectionById(id);
    return status === 200;
  }, []);

  return {
    collection,
    createNewCollection,
    getCollectionById,
    createNewNFT,
    deleteCollectionById,
  };
}
