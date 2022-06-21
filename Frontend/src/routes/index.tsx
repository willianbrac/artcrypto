import { useAuthContext } from 'contexts';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';

export function AppRoutes() {
  const { accessToken } = useAuthContext();
  const isAuthenticated = !!accessToken;
  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
