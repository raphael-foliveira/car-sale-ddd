import { Inject, Injectable } from '@nestjs/common';
import { CarUseCases } from '../../application/use-cases/car.use-cases';
import { CarRepository } from '../../domain/repositories/car.repository';

@Injectable()
export class CarAdapter extends CarUseCases {
  constructor(@Inject('CarRepository') repository: CarRepository) {
    super(repository);
  }
}
