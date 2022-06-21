import { ArtCryptoLogo } from 'components/Icons';

export function Footer() {
  return (
    <footer 
      className="w-full min-h-20 py-6 bg-white
      shadow-[0px_-2px_10px_rgba(0,0,0,0.05)] mt-20"
    >
      <div 
        className="container h-full flex flex-wrap items-center
        justify-between text-center text-xs text-gray-700"
      >
        <div className="w-full lg:w-auto flex justify-center">
          <ArtCryptoLogo width={80} height={25} />
        </div>
        <p className="w-full lg:w-auto">
          ArtCrypto é um projeto apenas para fins educacionais.
        </p>
        <p className="w-full lg:w-auto">2022</p>
      </div>
    </footer>
  );
}
