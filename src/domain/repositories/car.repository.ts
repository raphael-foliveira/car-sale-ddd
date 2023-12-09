import { CreateCarDto } from '../../application/dto/car/create-car.dto';
import { Car } from '../entities/car.entity';

export interface CarRepository {
  findAll(): Promise<Car[]>;
  findById(id: number): Promise<Car>;
  create(car: CreateCarDto): Promise<Car>;
  delete(id: number): Promise<void>;
  update(car: Car): Promise<Car>;
}
