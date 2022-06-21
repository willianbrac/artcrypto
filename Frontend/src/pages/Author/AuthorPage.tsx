import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AuthorProfile, Nav, NFTsCollection } from 'components';
import { useUser } from 'hooks';

export function AuthorPage() {
  const { id } = useParams<{ id: string }>();
  const { user, getUserById } = useUser();

  useEffect(() => {
    getUserById(String(id));
  }, [getUserById, id]);

  const handleLikeNFTById = async () => {
    await getUserById(String(id));
  };

  const handleDeleteNFTCollectionById = async () => {
    await getUserById(String(id));
  };

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-4 rounded-md">
          <AuthorProfile user={user} />
          {user?.authoredCollections.map((collection, index) => (
            <NFTsCollection
              collectionId={collection.id}
              collectionName={collection.name}
              authorId={user.id}
              authorName={user.name}
              nfts={collection.nfts}
              onLike={handleLikeNFTById}
              onDelete={handleDeleteNFTCollectionById}
            />
          ))}
        </div>
      </div>
    </>
  );
}
