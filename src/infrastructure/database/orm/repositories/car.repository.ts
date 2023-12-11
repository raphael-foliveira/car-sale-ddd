import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../../../../domain/entities/car.entity';
import { CarRepository } from '../../../../domain/repositories/car.repository';
import { CarEntity } from '../entities/car.entity';

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

  async create(car: Car): Promise<Car> {
    const dbCar = await this.repository.save({
      brand: car.brand,
      color: car.color,
      model: car.model,
      year: car.year,
      price: car.price,
    });
    return this.toDomainEntity(dbCar);
  }

  async delete(id: number): Promise<void> {
    const dbCar = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbCar);
  }

  async update(car: Car): Promise<Car> {
    await this.repository.update({ id: car.id }, car);
    const updatedCar = await this.repository.findOne({ where: { id: car.id } });
    return this.toDomainEntity(updatedCar);
  }

  private toDomainEntity(car: CarEntity): Car {
    if (!car) {
      return;
    }
    return new Car(car.id, car.createdAt, car.updatedAt)
      .setBrand(car.brand)
      .setModel(car.model)
      .setColor(car.color)
      .setYear(car.year)
      .setPrice(car.price);
  }
}
