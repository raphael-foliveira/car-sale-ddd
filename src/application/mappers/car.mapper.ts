import { Car } from '../../domain/entities/car.entity';
import { CarDto } from '../dto/car/car.dto';
import { CreateCarDto } from '../dto/car/create-car.dto';
import { UpdateCarDto } from '../dto/car/update-car.dto';

function updateEntity(car: Car, carDto: UpdateCarDto): Car {
  return {
    ...car,
    brand: carDto.brand ?? car.brand,
    color: carDto.color ?? car.color,
    model: carDto.model ?? car.model,
    year: carDto.year ?? car.year,
    price: carDto.price ?? car.price,
  };
}

function createDtoToEntity(car: CreateCarDto): Car {
  return {
    brand: car.brand,
    color: car.color,
    model: car.model,
    year: car.year,
    price: car.price,
  };
}

function toDto(car: Car): CarDto {
  return {
    id: car.id,
    brand: car.brand,
    color: car.color,
    model: car.model,
    year: car.year,
    price: car.price,
  };
}

export const carMapper = {
  updateEntity,
  createDtoToEntity,
  toDto,
};
