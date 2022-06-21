import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from 'contexts';

export function LogoutPage() {
  const navigate = useNavigate();
  const { setAccessToken, setUser } = useAuthContext();

  const logout = useCallback(() => {
    setAccessToken(null!);
    setUser(null!);
    navigate('/');
  }, [navigate, setAccessToken, setUser]);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div>
      <p>Saindo...</p>
    </div>
  );
}
