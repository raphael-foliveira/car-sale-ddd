import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { SaleController } from './sale.controller';
import { SalespersonController } from './salesperson.controller';
import { CarController } from './car.controller';
import { UseCasesModule } from '../../../application/use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [
    ClientController,
    SaleController,
    SalespersonController,
    CarController,
  ],
})
export class ControllersModule {}
