import { UpdateCarDto } from '../../application/dto/car/update-car.dto';
import { CarNotFoundError } from '../../application/errors/car.errors';
import { Car } from '../../domain/entities/car.entity';
import { CarRepository } from '../../domain/repositories/car.repository';
import { CarDto } from '../dto/car/car.dto';
import { CreateCarDto } from '../dto/car/create-car.dto';

export class CarUseCases {
  constructor(private repository: CarRepository) {}

  async findAll(): Promise<CarDto[]> {
    const cars = await this.repository.findAll();
    return cars.map(this.toDto);
  }

  async findById(id: number): Promise<CarDto> {
    const car = await this.repository.findById(id);
    if (!car) {
      throw new CarNotFoundError();
    }
    return this.toDto(car);
  }

  async create(car: CreateCarDto): Promise<CarDto> {
    const entity = this.createDtoToEntity(car);
    const newCar = await this.repository.create(entity);
    return this.toDto(newCar);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, carDto: UpdateCarDto): Promise<CarDto> {
    const car = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(car, carDto);
    const updatedCar = await this.repository.update(updatedEntity);
    return this.toDto(updatedCar);
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

  private toDto(car: Car): CarDto {
    return {
      id: car.id,
      brand: car.brand,
      model: car.model,
      color: car.color,
      year: car.year,
      price: car.price,
    };
  }
}
