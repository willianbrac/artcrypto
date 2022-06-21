interface Author {
  id: string;
  name: string;
  email: string;
}

interface Nft {
  id: string;
  name: string;
  hash: string;
  price: string;
  photoUrl: string;
  likedByUser: boolean;
  likes: number;
}

export interface ICollection {
  id: string;
  name: string;
  author: Author;
  nfts: Nft[];
  totalLikes: number;
}

export interface ICreateNFT {
  photo: any;
  name: string;
  price: string;
}

export interface ICreateNFTForm {
  photo: FileList;
  name: string;
  collection: string;
  price: string;
}

export interface ICreateCollectionForm {
  name: string;
}
