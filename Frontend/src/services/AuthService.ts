import {
  IGetUserDataResponse,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse
} from 'interfaces';
import { Api } from 'providers';

const getUserData = () => Api.get<IGetUserDataResponse>('/auth');
const signIn = (email: string, password: string) => Api.post<ISignInResponse>('/auth/signIn', { email, password });
const signUp = (data: ISignUpRequest) => Api.post<ISignUpResponse>('/auth/signUp', data);

export const AuthService = {
  getUserData,
  signIn,
  signUp,
};
