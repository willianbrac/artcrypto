import { AppContexts } from 'contexts';
import { AppRoutes } from 'routes';

export function App() {
  return (
    <AppContexts>
      <AppRoutes />
    </AppContexts>
  );
}
