import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../../../../domain/entities/car.entity';
import { Client } from '../../../../domain/entities/client.entity';
import { Sale } from '../../../../domain/entities/sale.entity';
import { Salesperson } from '../../../../domain/entities/salesperson.entity';
import { CarOrmRepository } from './car.repository';
import { ClientOrmRepository } from './client.repository';
import { SaleOrmRepository } from './sale.repository';
import { SalespersonOrmRepository } from './salesperson.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Salesperson, Sale, Car, Client])],
  providers: [
    CarOrmRepository,
    SalespersonOrmRepository,
    SaleOrmRepository,
    ClientOrmRepository,
  ],
  exports: [
    CarOrmRepository,
    SalespersonOrmRepository,
    SaleOrmRepository,
    ClientOrmRepository,
  ],
})
export class OrmRepositoriesModule {}
