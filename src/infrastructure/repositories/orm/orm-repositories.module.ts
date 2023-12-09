import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from '../../database/entities/car.entity';
import { ClientEntity } from '../../database/entities/client.entity';
import { SaleEntity } from '../../database/entities/sale.entity';
import { SalespersonEntity } from '../../database/entities/salesperson.entity';
import { CarOrmRepository } from './car.repository';
import { SalespersonOrmRepository } from './salesperson.repository';
import { SaleOrmRepository } from './sale.repository';
import { ClientOrmRepository } from './client.repository';

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
