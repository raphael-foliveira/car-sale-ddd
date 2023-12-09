import { Module } from '@nestjs/common';
import { CarAdapter } from './car.adapter';
import { ClientAdapter } from './client.adapter';
import { SaleAdapter } from './sale.adapter';
import { SalespersonAdapter } from './salesperson.adapter';
import { OrmRepositoriesModule } from '../database/orm/repositories/orm-repositories.module';

@Module({
  imports: [OrmRepositoriesModule],
  providers: [SalespersonAdapter, CarAdapter, SaleAdapter, ClientAdapter],
  exports: [SalespersonAdapter, CarAdapter, SaleAdapter, ClientAdapter],
})
export class AdaptersModule {}
