import { IGetUserByIdResponse } from 'interfaces';
import { Api } from 'providers';

const getById = (id: string) => Api.get<IGetUserByIdResponse>(`/users/${id}`);
export const UserService = {
  getById,
};
