import { Inject, Injectable } from '@nestjs/common';
import { Car } from '../../domain/entities/car.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { CreateCarDto } from '../dto/car/create-car.dto';
import { UpdateCarDto } from '../dto/car/update-car.dto';

@Injectable()
export class CarUseCases {
  constructor(@Inject('CarRepository') private repository: CarRepository) {}

  findAll(): Promise<Car[]> {
    return this.repository.findAll();
  }

  findById(id: number): Promise<Car> {
    return this.repository.findById(id);
  }

  create(car: CreateCarDto): Promise<Car> {
    return this.repository.create(car);
  }

  delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }

  update(id: number, car: UpdateCarDto): Promise<Car> {
    return this.repository.update(id, car);
  }
}
