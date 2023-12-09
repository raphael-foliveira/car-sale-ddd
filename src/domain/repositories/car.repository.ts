import { Car } from '../entities/car.entity';
import { CreateCarDto } from '../../application/dto/car/create-car.dto';
import { UpdateCarDto } from '../../application/dto/car/update-car.dto';

export interface CarRepository {
  findAll(): Promise<Car[]>;
  findById(id: number): Promise<Car>;
  create(car: CreateCarDto): Promise<Car>;
  delete(id: number): Promise<void>;
  update(id: number, car: UpdateCarDto): Promise<Car>;
}
