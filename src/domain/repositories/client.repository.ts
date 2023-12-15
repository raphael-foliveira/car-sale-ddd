import { Car } from '../entities/car.entity';
import { BaseRepository } from './base.repository';

export interface ClientRepository extends BaseRepository<Car> {}
