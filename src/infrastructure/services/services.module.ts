import { Module } from '@nestjs/common';
import { OrmRepositoriesModule } from '../repositories/orm/orm-repositories.module';
import { SalespersonService } from './salesperson.service';
import { CarService } from './car.service';
import { SaleService } from './sale.service';
import { ClientService } from './client.service';

@Module({
  imports: [OrmRepositoriesModule],
  providers: [SalespersonService, CarService, SaleService, ClientService],
  exports: [SalespersonService, CarService, SaleService, ClientService],
})
export class ServicesModule {}
