import { EntityRepository, Repository } from 'typeorm';
import { Collection } from './collection.entity';

@EntityRepository(Collection)
export class CollectionRepository extends Repository<Collection> {
  public async findByIdWithNfts(id: string): Promise<Collection> {
    return this.findOne({
      where: { id },
      relations: ['nfts'],
    });
  }
}
