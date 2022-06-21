import { INFT } from 'interfaces';
import { Api } from 'providers';

const findAll = () => Api.get<INFT[]>('/nfts');
const getById = (id: string) => Api.get<INFT>(`/nfts/${id}`);
const likeById = (id: string) => Api.post<void>(`/nfts/${id}/likes`);
const deleteNFTById = (id: string) => Api.delete<void>(`/nfts/${id}`);
export const NFTService = {
  findAll,
  getById,
  likeById,
  deleteNFTById,
};
