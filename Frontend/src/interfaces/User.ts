export interface IAuthoredNFT {
  id: string;
  name: string;
  hash: string;
  price: string;
  photoUrl: string;
  likedByUser: boolean;
  likes: number;
}

interface Author {
  id: string;
  name: string;
  email: string;
}

interface Collection {
  id: string;
  name: string;
}

export interface ILikedNft {
  id: string;
  name: string;
  hash: string;
  price: string;
  photoUrl: string;
  author: Author;
  collection: Collection;
  likedByUser: boolean;
  likes: number;
}

export interface IAuthoredCollection {
  id: string;
  name: string;
  nfts: IAuthoredNFT[];
  totalLikes: number;
}

export interface IGetUserByIdResponse {
  id: string;
  name: string;
  email: string;
  authoredCollections: IAuthoredCollection[];
  totalLikesInAuthoredCollections: number;
  likedNfts: ILikedNft[];
}
