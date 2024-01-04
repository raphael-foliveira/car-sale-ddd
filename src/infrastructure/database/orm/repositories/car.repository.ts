import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../../../../domain/entities/car.entity';
import { CarRepository } from '../../../../domain/repositories/car.repository';
import { CarEntity } from '../entities/car.entity';
import { carOrmMapper } from '../mappers/car.mapper';

export class CarOrmRepository implements CarRepository {
  constructor(
    @InjectRepository(CarEntity) private repository: Repository<CarEntity>,
  ) {}

  async findAll(): Promise<Car[]> {
    const dbCars = await this.repository.find();
    return dbCars.map(carOrmMapper.toDomainEntity);
  }
  async findById(id: number): Promise<Car> {
    const dbCar = await this.repository.findOne({ where: { id } });
    return carOrmMapper.toDomainEntity(dbCar);
  }

  async create(car: Car): Promise<Car> {
    const dbCar = await this.repository.save({
      brand: car.brand,
      color: car.color,
      model: car.model,
      year: car.year,
      price: car.price,
    });
    return carOrmMapper.toDomainEntity(dbCar);
  }

  async delete(id: number): Promise<void> {
    const dbCar = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbCar);
  }

  async update(car: Car): Promise<Car> {
    await this.repository.update({ id: car.id }, car);
    const updatedCar = await this.repository.findOne({ where: { id: car.id } });
    return carOrmMapper.toDomainEntity(updatedCar);
  }
}
