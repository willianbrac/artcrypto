import { GetCollectionForNFTDto } from 'src/domain/collection/dto/collection.get-for-nft.dto';
import { GetUserDto } from 'src/domain/user/dto/user.get.dto';

export class GetNFTDto {
  id: string;
  name: string;
  hash: string;
  price: number;
  photoUrl: string;
  author?: GetUserDto;
  collection?: GetCollectionForNFTDto;
  likedByUser: boolean;
  likes: number;
}
