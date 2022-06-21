import { AuthorStatus } from 'components';
import { IGetUserByIdResponse } from 'interfaces';

type Props = {
  user: IGetUserByIdResponse | undefined;
};
export function AuthorProfile({ user }: Props) {
  return (
    <div className="py-6 flex flex-wrap items-center justify-center">
      <div 
        className="bg-author-example bg-cover bg-center bg-no-repeat w-[150px]
        h-[150px] border-4 border-white rounded-full shadow-lg"
      ></div>
      <div className="p-4 flex flex-col items-start justify-center text-center lg:text-left">
        <h1 className="text-3xl font-bold font-display w-full">{user?.name}</h1>
        <p className="text-sm w-full">
          <span className="font-bold">Hash</span>: {user?.id}
        </p>
        <AuthorStatus 
          likes={user?.totalLikesInAuthoredCollections}
          collections={user?.authoredCollections} 
        />
      </div>
    </div>
  );
}
