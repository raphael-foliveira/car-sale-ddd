import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../../../../domain/entities/car.entity';
import { CarRepository } from '../../../../domain/repositories/car.repository';
import { OrmRepository } from './base.repository';

export class CarOrmRepository
  extends OrmRepository<Car>
  implements CarRepository
{
  constructor(@InjectRepository(Car) repository: Repository<Car>) {
    super(repository);
  }
}
