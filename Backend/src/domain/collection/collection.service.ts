import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNFTDto } from '../nft/dto/nft.create.dto';
import { GetNFTDto } from '../nft/dto/nft.get.dto';
import { NFT } from '../nft/nft.entity';
import { NFTService } from '../nft/nft.service';
import { User } from '../user/user.entity';
import { Collection } from './collection.entity';
import { CollectionRepository } from './collection.repository';
import { CreateCollectionDto } from './dto/collection.create.dto';
import { GetCollectionDto } from './dto/collection.get.dto';

@Injectable()
export class CollectionService {
  constructor(
    private readonly repository: CollectionRepository,
    private readonly nftService: NFTService,
  ) {}

  public async create(
    createDto: CreateCollectionDto,
    loggedUser: User,
  ): Promise<Collection | null> {
    const { name } = createDto;
    const collection = this.repository.create({
      name,
      author: loggedUser,
    });
    await collection.save();
    delete collection.author;
    return collection;
  }

  public async createNFT(
    collectionId: string,
    createNFTDto: CreateNFTDto,
    photoPath: string,
  ): Promise<NFT | null> {
    const collection = await this.repository.findOne({ id: collectionId });
    if (!collection)
      throw new BadRequestException("There's no Collection with given ID");

    const nft = await this.nftService.create(
      createNFTDto,
      photoPath,
      collection,
    );
    return nft;
  }

  public async findById(
    id: string,
    loggedUser: User,
  ): Promise<GetCollectionDto | null> {
    const collection = await this.repository.findByIdWithNfts(id);
    if (!collection)
      throw new BadRequestException("There's no Collection with given ID");
    const serializedNfts: GetNFTDto[] = [];
    collection.nfts.map((nft) => {
      serializedNfts.push({
        id: nft.id,
        name: nft.name,
        hash: nft.hash,
        price: nft.price,
        photoUrl: nft.photoUrl,
        likedByUser: nft.likes.some((user) => user.id === loggedUser.id),
        likes: nft.likes.length,
      });
    });

    return {
      id: collection.id,
      name: collection.name,
      author: {
        id: collection.author.id,
        name: collection.author.name,
        email: collection.author.email,
      },
      nfts: serializedNfts,
      totalLikes: collection.nfts
        .map((nft) => nft.likes.length)
        .reduce((prev, curr) => prev + curr, 0),
    };
  }

  public async delete(id: string): Promise<void> {
    const collection = await this.repository.findOne({ id });
    if (!collection)
      throw new BadRequestException("There's no Collection with given ID");
    await collection.remove();
  }
}
