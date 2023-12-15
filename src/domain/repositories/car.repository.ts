import { Car } from '../entities/car.entity';
import { BaseRepository } from './base.repository';

export interface CarRepository extends BaseRepository<Car> {}
