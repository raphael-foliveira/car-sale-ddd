import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarDto } from '../../../application/dto/car/create-car.dto';
import { UpdateCarDto } from '../../../application/dto/car/update-car.dto';
import { Car } from '../../../domain/entities/car.entity';
import { CarRepository } from '../../../domain/repositories/car.repository';
import { CarEntity } from '../../database/entities/car.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarOrmRepository implements CarRepository {
  constructor(
    @InjectRepository(CarEntity) private repository: Repository<CarEntity>,
  ) {}

  async findAll(): Promise<Car[]> {
    const dbCars = await this.repository.find();
    return dbCars.map(this.toDomainEntity);
  }
  async findById(id: number): Promise<Car> {
    const dbCar = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(dbCar);
  }

  async create(car: CreateCarDto): Promise<Car> {
    const dbCar = await this.repository.save(car);
    return this.toDomainEntity(dbCar);
  }

  async delete(id: number): Promise<void> {
    const dbCar = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbCar);
  }

  async update(id: number, car: UpdateCarDto): Promise<Car> {
    await this.repository.update({ id }, car);
    const updatedCar = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(updatedCar);
  }

  private toDomainEntity(car: CarEntity): Car {
    return new Car(
      car.id,
      car.brand,
      car.color,
      car.model,
      car.year,
      car.price,
    );
  }
}
