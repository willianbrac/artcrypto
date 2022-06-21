import { AuthProvider } from 'contexts/AuthContext';
import { NavMobileProvider } from 'contexts/NavMobileContext';

export * from './AuthContext';
export * from './NavMobileContext';

type Props = {
  children: React.ReactNode;
};

export function AppContexts({ children }: Props) {
  return (
    <AuthProvider>
      <NavMobileProvider>{children}</NavMobileProvider>
    </AuthProvider>
  );
}
