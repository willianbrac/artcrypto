import { GetCollectionDto } from 'src/domain/collection/dto/collection.get.dto';
import { GetNFTDto } from 'src/domain/nft/dto/nft.get.dto';

export class GetUserProfileDto {
  id: string;
  name: string;
  email: string;
  authoredCollections: GetCollectionDto[];
  totalLikesInAuthoredCollections: number;
  likedNfts: GetNFTDto[];
}
