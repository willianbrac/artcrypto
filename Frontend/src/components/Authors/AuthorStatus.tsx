import { IAuthoredCollection } from 'interfaces';

type Props = {
  likes: number | undefined;
  collections: IAuthoredCollection[] | undefined;
};
export function AuthorStatus({ likes, collections }: Props) {
  const nfts = collections?.reduce((total, collection) => {
    total += collection.nfts.length;
    return total;
  }, 0);
  return (
    <div className="w-full py-4 grid grid-cols-3 gap-4">
      <p className="text-gray-700 text-sm lg:text-lg">
        <span className="text-lg font-bold text-black">{collections?.length}</span> Coleções
      </p>
      <p className="text-gray-700 text-sm lg:text-lg">
        <span className="text-lg font-bold text-black">{likes}</span> Curtidas
      </p>
      <p className="text-gray-700 text-sm lg:text-lg">
        <span className="text-lg font-bold text-black">{nfts}</span> NFTs
      </p>
    </div>
  );
}
