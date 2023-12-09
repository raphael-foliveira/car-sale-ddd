import { Inject, Injectable } from '@nestjs/common';
import { Car } from '../../domain/entities/car.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { CreateCarDto } from '../dto/car/create-car.dto';
import { UpdateCarDto } from '../dto/car/update-car.dto';
import { CarNotFoundError } from '../errors/car.errors';

@Injectable()
export class CarUseCases {
  constructor(@Inject('CarRepository') private repository: CarRepository) {}

  findAll(): Promise<Car[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<Car> {
    const car = await this.repository.findById(id);
    if (!car) {
      throw new CarNotFoundError();
    }
    return car;
  }

  create(car: CreateCarDto): Promise<Car> {
    return this.repository.create(car);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, car: UpdateCarDto): Promise<Car> {
    await this.findById(id);
    return this.repository.update(id, car);
  }
}
