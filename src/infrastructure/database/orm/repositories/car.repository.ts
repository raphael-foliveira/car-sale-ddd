import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../../../../domain/entities/car.entity';
import { CarRepository } from '../../../../domain/repositories/car.repository';

export class CarOrmRepository implements CarRepository {
  constructor(@InjectRepository(Car) private repository: Repository<Car>) {}

  findAll(): Promise<Car[]> {
    return this.repository.find();
  }
  findById(id: number): Promise<Car> {
    return this.repository.findOne({ where: { id } });
  }

  create(car: Car): Promise<Car> {
    return this.repository.save({
      brand: car.brand,
      color: car.color,
      model: car.model,
      year: car.year,
      price: car.price,
    });
  }

  async delete(id: number): Promise<void> {
    const dbCar = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbCar);
  }

  async update(car: Car): Promise<Car> {
    await this.repository.update({ id: car.id }, car);
    return this.repository.findOne({ where: { id: car.id } });
  }
}
