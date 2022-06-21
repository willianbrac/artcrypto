import axios from 'axios';
import { Constants } from 'configs';
import { IAuthContext } from 'contexts';

const baseURL = Constants.ApiBaseUrl;

export const Api = axios.create({ baseURL });

const auth: Pick<IAuthContext, 'accessToken'> =
  JSON.parse(localStorage.getItem(Constants.AuthStorageKey) || '{}') || {};

const { accessToken } = auth;
if (accessToken) {
  setBearerToken(accessToken);
}

Api.interceptors.response.use(
  (config) => {
    return config;
  },
  (config) => {
    if (
      !['/auth/signIn'].includes(config.response.config.url) &&
      config.response.status === 401
    ) {
      localStorage.removeItem(Constants.AuthStorageKey);
      window.location.href = '/';
      return Promise.reject(config);
    }

    return Promise.reject(config);
  }
);

export function setBearerToken(token: string) {
  Api.interceptors.request.use((config: any) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  });
}
