import { Car } from '../../domain/entities/car.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { CreateCarDto } from '../dto/car/create-car.dto';
import { UpdateCarDto } from '../dto/car/update-car.dto';
import { CarNotFoundError } from '../errors/car.errors';

export class CarUseCases {
  constructor(private repository: CarRepository) {}

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

  async update(id: number, carDto: UpdateCarDto): Promise<Car> {
    const car = await this.repository.findById(id);
    car.brand = carDto.brand;
    car.model = carDto.model;
    car.color = carDto.color;
    car.year = carDto.year;
    car.price = carDto.price;
    return this.repository.update(car);
  }
}
