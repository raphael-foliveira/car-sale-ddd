import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { SaleController } from './sale.controller';
import { SalespersonController } from './salesperson.controller';
import { CarController } from './car.controller';
import { AdaptersModule } from '../../adapters/services.module';

@Module({
  imports: [AdaptersModule],
  controllers: [
    ClientController,
    SaleController,
    SalespersonController,
    CarController,
  ],
})
export class ControllersModule {}
