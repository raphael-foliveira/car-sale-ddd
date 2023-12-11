import { Car } from '../entities/car.entity';

export interface CarRepository {
  findAll(): Promise<Car[]>;
  findById(id: number): Promise<Car>;
  create(car: Car): Promise<Car>;
  delete(id: number): Promise<void>;
  update(car: Car): Promise<Car>;
}
