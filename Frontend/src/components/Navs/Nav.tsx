import { useNavigate } from 'react-router-dom';
import { 
  ArtCryptoLogo,
  NavLinks,
  HamburgerIcon,
  IconButton,
  NavLinksMobile 
} from 'components';
import { useNavMobileContext } from 'contexts';

export function Nav() {
  const navigate = useNavigate();
  const { setIsVisible } = useNavMobileContext();
  return (
    <>
      <nav className="w-full h-20 bg-white shadow-lg">
        <div className="container h-full px-4 flex items-center justify-between">
          <IconButton 
            opacityEnabled={false}
            onClick={() => navigate('/')}
            Icon={<ArtCryptoLogo />} 
          />
          <div className="hidden lg:block">
            <NavLinks />
          </div>
          <div className="block lg:hidden">
            <IconButton
              onClick={() => setIsVisible(true)}
              Icon={<HamburgerIcon />} 
            />
          </div>
        </div>
      </nav>
      <NavLinksMobile />
    </>
  );
}
