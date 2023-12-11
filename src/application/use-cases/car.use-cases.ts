import { UpdateCarDto } from '../../application/dto/car/update-car.dto';
import { CarNotFoundError } from '../../application/errors/car.errors';
import { Car } from '../../domain/entities/car.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { CreateCarDto } from '../dto/car/create-car.dto';

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
    const entity = this.createDtoToEntity(car);
    return this.repository.create(entity);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, carDto: UpdateCarDto): Promise<Car> {
    const car = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(car, carDto);
    return this.repository.update(updatedEntity);
  }

  private updateEntity(car: Car, carDto: UpdateCarDto): Car {
    return car
      .setBrand(carDto.brand)
      .setModel(carDto.model)
      .setColor(carDto.color)
      .setYear(carDto.year)
      .setPrice(carDto.price);
  }

  private createDtoToEntity(car: CreateCarDto): Car {
    return new Car()
      .setBrand(car.brand)
      .setModel(car.model)
      .setColor(car.color)
      .setYear(car.year)
      .setPrice(car.price);
  }
}
