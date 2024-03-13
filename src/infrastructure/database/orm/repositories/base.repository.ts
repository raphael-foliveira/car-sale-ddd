import { FindOneOptions, Repository } from 'typeorm';
import { BaseEntity } from '../../../../domain/entities/base.entity';
import { BaseRepository } from '../../../../domain/repositories/base.repository';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class OrmRepository<T extends BaseEntity> implements BaseRepository<T> {
  constructor(private repository: Repository<T>) {}

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<T> {
    return this.repository.findOne({ where: { id } } as FindOneOptions<T>);
  }

  create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async delete(id: number): Promise<void> {
    const dbCar = await this.findById(id);
    await this.repository.remove(dbCar);
  }

  async update(entity: T): Promise<T> {
    await this.repository.update(
      entity.id,
      entity as QueryDeepPartialEntity<T>,
    );
    return this.findById(entity.id);
  }
}
