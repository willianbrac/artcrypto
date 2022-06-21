import { useEffect } from 'react';

import { CollectionCreateForm, Nav, NFTsCreateForm } from 'components';
import { useAuthContext } from 'contexts';
import { useUser } from 'hooks';

export function NFTsCreatePage() {
  const { user: authUser } = useAuthContext();
  const { user, getUserById } = useUser();

  useEffect(() => {
    if (authUser) {
      getUserById(authUser.id);
    }
  }, [authUser, getUserById]);

  function onCollectionCreate() {
    if (authUser) {
      getUserById(authUser.id);
    }
  }

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-10 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
            <NFTsCreateForm authoredCollections={user?.authoredCollections || []} />
            <CollectionCreateForm onCreate={onCollectionCreate} />
          </div>
        </div>
      </div>
    </>
  );
}
