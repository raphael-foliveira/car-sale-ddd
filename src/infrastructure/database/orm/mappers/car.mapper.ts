import { Car } from '../../../../domain/entities/car.entity';
import { CarEntity } from '../entities/car.entity';

const toDomainEntity = (car: CarEntity): Car => {
  if (!car) {
    return;
  }
  return {
    id: car.id,
    createdAt: car.createdAt,
    updatedAt: car.updatedAt,
    brand: car.brand,
    model: car.model,
    color: car.color,
    year: car.year,
    price: car.price,
  };
};

export const carOrmMapper = {
  toDomainEntity,
};
