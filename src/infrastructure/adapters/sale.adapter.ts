import { Inject, Injectable } from '@nestjs/common';
import { SaleUseCases } from '../../application/use-cases/sale.use-cases';
import { CarRepository } from '../../domain/repositories/car.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CarOrmRepository } from '../database/orm/repositories/car.repository';
import { ClientOrmRepository } from '../database/orm/repositories/client.repository';
import { SaleOrmRepository } from '../database/orm/repositories/sale.repository';
import { SalespersonOrmRepository } from '../database/orm/repositories/salesperson.repository';

@Injectable()
export class SaleAdapter extends SaleUseCases {
  constructor(
    @Inject(SaleOrmRepository)
    repository: SaleRepository,
    @Inject(CarOrmRepository)
    carRepository: CarRepository,
    @Inject(SalespersonOrmRepository)
    salespersonRepository: SalespersonRepository,
    @Inject(ClientOrmRepository)
    clientRepository: ClientRepository,
  ) {
    super(repository, carRepository, salespersonRepository, clientRepository);
  }
}
