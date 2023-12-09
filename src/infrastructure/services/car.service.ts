import { Inject, Injectable } from '@nestjs/common';
import { CreateCarDto } from '../../application/dto/car/create-car.dto';
import { UpdateCarDto } from '../../application/dto/car/update-car.dto';
import { CarUseCases } from '../../application/use-cases/car.use-cases';
import { CarRepository } from '../../domain/repositories/car.repository';

@Injectable()
export class CarService {
  private useCases: CarUseCases;

  constructor(@Inject('CarRepository') private repository: CarRepository) {
    this.useCases = new CarUseCases(repository);
  }

  findAll() {
    return this.useCases.findAll();
  }

  async findById(id: number) {
    return this.useCases.findById(id);
  }

  create(car: CreateCarDto) {
    return this.useCases.create(car);
  }

  async delete(id: number) {
    return this.useCases.delete(id);
  }

  async update(id: number, car: UpdateCarDto) {
    return this.useCases.update(id, car);
  }
}
