import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IconButton, ArtCryptoLogo, CloseIcon, NavLink, LogoutIcon, UserIcon } from 'components';
import { useAuthContext, useNavMobileContext } from 'contexts';

export function NavLinksMobile() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { isVisible, setIsVisible } = useNavMobileContext();
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
  }, [location, setIsVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-screen h-screen bg-white fixed top-0 left-0 py-10 px-8">
      <div className="w-full flex items-center justify-between">
        <IconButton opacityEnabled={false} onClick={() => navigate('/')} Icon={<ArtCryptoLogo />} />
        <IconButton onClick={() => setIsVisible(false)} Icon={<CloseIcon />} />
      </div>

      <div className="nav-links-mobile__links">
        <NavLink href="/nfts/explorar" label="Explorar" />
        <NavLink href="/nfts/colecionar" label="Colecionar" />
        <NavLink href="/nfts/criar" label="Criar" />
        <IconButton onClick={() => navigate(`/autor/${user!.id}`)} Icon={<UserIcon />} label="Perfil" />
        <IconButton onClick={() => navigate('/sair')} Icon={<LogoutIcon />} label="Sair" />
      </div>
    </div>
  );
}
