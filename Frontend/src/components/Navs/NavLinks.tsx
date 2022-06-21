import { useNavigate } from 'react-router-dom';

import { NavLink, UserIcon, IconButton, LogoutIcon } from 'components';
import { useAuthContext } from 'contexts';

export function NavLinks() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <NavLink href="/nfts/explorar" label="Explorar" />
      <NavLink href="/nfts/colecionar" label="Colecionar" />
      <NavLink href="/nfts/criar" label="Criar" />
      <IconButton onClick={() => navigate(`/autor/${user!.id}`)} Icon={<UserIcon />} />
      <IconButton onClick={() => navigate('/sair')} Icon={<LogoutIcon />} />
    </div>
  );
}
