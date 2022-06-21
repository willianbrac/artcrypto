import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { Constants } from 'configs';
import { IGetUserDataResponse } from 'interfaces';

export interface IAuthContext {
  accessToken?: string;
  setAccessToken(accessToken: string): void;
  user?: IGetUserDataResponse;
  setUser(user: IGetUserDataResponse): void;
}
const AuthContext = createContext<IAuthContext>(null!);
type Props = {
  children: React.ReactNode;
};
export function AuthProvider({ children }: Props) {
  const storage = JSON.parse(localStorage.getItem(Constants.AuthStorageKey) || '{}');
  const [accessToken, setAccessToken] = useState<string>(storage?.accessToken);
  const [user, setUser] = useState<IGetUserDataResponse>(storage?.user);
  useEffect(() => {
    localStorage.setItem(Constants.AuthStorageKey, JSON.stringify({ accessToken, user }));
  }, [accessToken, user]);
  return <AuthContext.Provider value={{
    accessToken,
    setAccessToken,
    user,
    setUser
  }}>
    {children}
  </AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
