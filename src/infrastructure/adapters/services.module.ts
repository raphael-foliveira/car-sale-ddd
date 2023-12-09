import { Module } from '@nestjs/common';
import { OrmRepositoriesModule } from '../repositories/orm/orm-repositories.module';
import { SalespersonAdapter } from './salesperson.adapter';
import { CarAdapter } from './car.adapter';
import { SaleAdapter } from './sale.adapter';
import { ClientAdapter } from './client.adapter';

@Module({
  imports: [OrmRepositoriesModule],
  providers: [SalespersonAdapter, CarAdapter, SaleAdapter, ClientAdapter],
  exports: [SalespersonAdapter, CarAdapter, SaleAdapter, ClientAdapter],
})
export class AdaptersModule {}
