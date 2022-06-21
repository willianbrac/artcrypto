import { ICollection, ICreateNFT } from 'interfaces';
import { Api } from 'providers';

const createNewNFT = (id: string, data: ICreateNFT) => {
  const formData = new FormData();
  formData.append('photo', data.photo);
  formData.append('name', data.name);
  formData.append('price', data.price);
  return Api.post(`/collections/${id}/nfts`, formData);
};

const getById = (id: string) => Api.get<ICollection>(`/collections/${id}`);
const createNewCollection = (name: string) => Api.post('/collections', { name });
const deleteCollectionById = (id: string) => Api.delete<void>(`/collections/${id}`);
export const CollectionService = {
  getById,
  createNewNFT,
  createNewCollection,
  deleteCollectionById,
};
