import { useCallback, useState } from 'react';

import { UserService } from 'services';
import { IGetUserByIdResponse } from 'interfaces';

export function useUser() {
  const [user, setUser] = useState<IGetUserByIdResponse>();

  const getUserById = useCallback(async (id: string) => {
    const { status, data } = await UserService.getById(id);
    if (status === 200) {
      setUser(data);
    }
  }, []);

  return {
    user,
    getUserById,
  };
}
