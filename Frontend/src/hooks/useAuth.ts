import { ISignUpRequest } from 'interfaces';
import { AuthService } from 'services';

export function useAuth() {
  async function getUserData() {
    const { status, data } = await AuthService.getUserData();
    if (status === 200) {
      return data;
    }
  }

  async function signIn(email: string, password: string) {
    const { status, data } = await AuthService.signIn(email, password);
    if (status === 201) {
      return data.accessToken;
    }
  }

  async function signUp(signUp: ISignUpRequest) {
    const { status } = await AuthService.signUp(signUp);
    return status === 201;
  }

  return {
    getUserData,
    signIn,
    signUp,
  };
}
