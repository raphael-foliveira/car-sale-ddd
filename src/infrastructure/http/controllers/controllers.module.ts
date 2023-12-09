import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { SaleController } from './sale.controller';
import { SalespersonController } from './salesperson.controller';
import { CarController } from './car.controller';
import { ServicesModule } from '../../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [
    ClientController,
    SaleController,
    SalespersonController,
    CarController,
  ],
})
export class ControllersModule {}
