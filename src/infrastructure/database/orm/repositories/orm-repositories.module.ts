import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from '../entities/car.entity';
import { ClientEntity } from '../entities/client.entity';
import { SaleEntity } from '../entities/sale.entity';
import { SalespersonEntity } from '../entities/salesperson.entity';
import { CarOrmRepository } from './car.repository';
import { ClientOrmRepository } from './client.repository';
import { SaleOrmRepository } from './sale.repository';
import { SalespersonOrmRepository } from './salesperson.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SalespersonEntity,
      SaleEntity,
      CarEntity,
      ClientEntity,
    ]),
  ],
  providers: [
    { provide: 'CarRepository', useClass: CarOrmRepository },
    { provide: 'SalespersonRepository', useClass: SalespersonOrmRepository },
    { provide: 'SaleRepository', useClass: SaleOrmRepository },
    { provide: 'ClientRepository', useClass: ClientOrmRepository },
  ],
  exports: [
    'CarRepository',
    'SalespersonRepository',
    'SaleRepository',
    'ClientRepository',
  ],
})
export class OrmRepositoriesModule {}
