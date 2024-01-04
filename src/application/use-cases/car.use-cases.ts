import { UpdateCarDto } from '../../application/dto/car/update-car.dto';
import { CarNotFoundError } from '../../application/errors/car.errors';
import { CarRepository } from '../../domain/repositories/car.repository';
import { CarDto } from '../dto/car/car.dto';
import { CreateCarDto } from '../dto/car/create-car.dto';
import { carMapper } from '../mappers/car.mapper';

export class CarUseCases {
  constructor(private repository: CarRepository) {}

  async findAll(): Promise<CarDto[]> {
    const cars = await this.repository.findAll();
    return cars.map(carMapper.toDto);
  }

  async findById(id: number): Promise<CarDto> {
    const car = await this.repository.findById(id);
    if (!car) {
      throw new CarNotFoundError();
    }
    return carMapper.toDto(car);
  }

  async create(car: CreateCarDto): Promise<CarDto> {
    const entity = carMapper.createDtoToEntity(car);
    const newCar = await this.repository.create(entity);
    return carMapper.toDto(newCar);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, carDto: UpdateCarDto): Promise<CarDto> {
    const car = await this.repository.findById(id);
    const updatedEntity = carMapper.updateEntity(car, carDto);
    const updatedCar = await this.repository.update(updatedEntity);
    return carMapper.toDto(updatedCar);
  }
}
