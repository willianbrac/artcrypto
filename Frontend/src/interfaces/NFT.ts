interface Author {
  id: string;
  name: string;
  email: string;
}

interface Collection {
  id: string;
  name: string;
}

export interface INFT {
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
