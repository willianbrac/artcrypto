import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import {
  AuthorPage,
  HomePage,
  NTFsViewPage,
  NFTsCreatePage,
  NFTsExplorePage,
  NFTsLikedPage,
  LogoutPage
} from 'pages';

export function AuthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sair" element={<LogoutPage />} />
        <Route path="/autor/:id" element={<AuthorPage />} />
        <Route path="/nfts/:id" element={<NTFsViewPage />} />
        <Route path="/nfts/criar" element={<NFTsCreatePage />} />
        <Route path="/nfts/explorar" element={<NFTsExplorePage />} />
        <Route path="/nfts/colecionar" element={<NFTsLikedPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
