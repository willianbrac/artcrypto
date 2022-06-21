import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full min-h-[500px] bg-primary-linear">
      <div className="container px-4 py-10 h-full flex items-center">
        <div className="w-full lg:max-w-lg">
          <h1 className="text-3xl lg:text-4xl font-bold pb-2">
            Crie, exponhe e colecione incríveis NFTs
          </h1>
          <h2 className="text-lg lg:text-xl font-medium pb-4">
            ArtCrypto é sua plataforma favorita para colecionar NFTs.
          </h2>
          <div
            className="my-6 bg-ipad-mini bg-no-repeat bg-center
            lg:bg-right bg-contain flex-1 h-[150px] block lg:hidden">
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/nfts/explorar')}
              className="button button--primary"
            >
              Explorar
            </button>
            <button 
              onClick={() => navigate('/nfts/criar')}
              className="button button--outline">
              Criar
            </button>
          </div>
        </div>
        <div
          className="bg-ipad-mini bg-no-repeat bg-right bg-contain
          flex-1 h-[318px] hidden lg:block"
        ></div>
      </div>
    </header>
  );
}
