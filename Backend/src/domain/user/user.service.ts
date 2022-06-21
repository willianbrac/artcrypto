import { BadRequestException, Injectable } from '@nestjs/common';
import { GetCollectionDto } from '../collection/dto/collection.get.dto';
import { GetNFTDto } from '../nft/dto/nft.get.dto';
import { GetUserProfileDto } from './dto/user.get-profile.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  public async create({ name, email, password, salt }): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      salt,
    });

    return user.save();
  }

  public async findById(id: string): Promise<User | null> {
    return this.repository.findOne({ id });
  }

  public async getProfileById(
    id: string,
    loggedUser: User,
  ): Promise<GetUserProfileDto | null> {
    const user = await this.repository.findByIdWithRelations(id);
    if (!user) throw new BadRequestException("There's no User with given ID");

    const serializedCollections: GetCollectionDto[] = [];
    user.collections.map((collection) => {
      serializedCollections.push({
        id: collection.id,
        name: collection.name,
        nfts: collection.nfts.map((nft) => ({
          id: nft.id,
          name: nft.name,
          hash: nft.hash,
          price: nft.price,
          photoUrl: nft.photoUrl,
          likedByUser: nft.likes.some((user) => user.id === loggedUser.id),
          likes: nft.likes.length,
        })),
        totalLikes: collection.nfts
          .map((nft) => nft.likes.length)
          .reduce((prev, curr) => prev + curr, 0),
      });
    });

    const serializedNfts: GetNFTDto[] = [];
    user.likedNfts.map((nft) => {
      serializedNfts.push({
        id: nft.id,
        name: nft.name,
        hash: nft.hash,
        price: nft.price,
        photoUrl: nft.photoUrl,
        author: {
          id: nft.parentCollection.author.id,
          name: nft.parentCollection.author.name,
          email: nft.parentCollection.author.email,
        },
        collection: {
          id: nft.parentCollection.id,
          name: nft.parentCollection.name,
        },
        likedByUser: nft.likes.some((user) => user.id === loggedUser.id),
        likes: nft.likes.length,
      });
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      authoredCollections: serializedCollections,
      totalLikesInAuthoredCollections: serializedCollections
        .map((collection) => collection.totalLikes)
        .reduce((prev, curr) => prev + curr, 0),
      likedNfts: serializedNfts,
    };
  }

  public async findUserByNameOrEmail(
    name: string,
    email: string,
  ): Promise<User | null> {
    return this.repository.findUserByNameOrEmail(name, email);
  }

  public async findUserByNameOrEmailForLogin(
    name: string,
    email: string,
  ): Promise<User | null> {
    return this.repository.findUserByNameOrEmailForLogin(name, email);
  }
}
