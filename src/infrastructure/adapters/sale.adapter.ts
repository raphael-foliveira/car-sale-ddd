import { Inject, Injectable } from '@nestjs/common';
import { SaleUseCases } from '../../application/use-cases/sale.use-cases';
import { CarRepository } from '../../domain/repositories/car.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';

@Injectable()
export class SaleAdapter extends SaleUseCases {
  constructor(
    @Inject('SaleRepository')
    repository: SaleRepository,
    @Inject('CarRepository')
    carRepository: CarRepository,
    @Inject('SalespersonRepository')
    salespersonRepository: SalespersonRepository,
    @Inject('ClientRepository')
    clientRepository: ClientRepository,
  ) {
    super(repository, carRepository, salespersonRepository, clientRepository);
  }
}
