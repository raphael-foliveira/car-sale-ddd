import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from '../../../../application/dto/car/create-car.dto';
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

  async create(car: CreateCarDto): Promise<Car> {
    const dbCar = await this.repository.save(car);
    return this.toDomainEntity(dbCar);
  }

  async delete(id: number): Promise<void> {
    const dbCar = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbCar);
  }

  async update(car: Car): Promise<Car> {
    await this.repository.update(
      { id: car.id },
      {
        brand: car.brand,
        color: car.color,
        model: car.model,
        year: car.year,
        price: car.price,
      },
    );
    const updatedCar = await this.repository.findOne({ where: { id: car.id } });
    return this.toDomainEntity(updatedCar);
  }

  private toDomainEntity(car: CarEntity): Car {
    if (!car) {
      return;
    }
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
