type Props = {
  authorName: string | undefined;
};
export function AuthorInfo({ authorName }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[50px,1fr] py-4">
      <div 
        className="m-auto bg-author-example bg-cover bg-center bg-no-repeat w-[50px] h-[50px]
        rounded-full border-4 border-white shadow-lg"
      ></div>
      <div className="text-center lg:text-left px-2">
        <p className="font-bold font-display">{authorName}</p>
        <p>Autor da NFT</p>
      </div>
    </div>
  );
}
