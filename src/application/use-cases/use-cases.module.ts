import { Module } from '@nestjs/common';
import { OrmRepositoriesModule } from '../../infrastructure/repositories/orm/orm-repositories.module';
import { CarUseCases } from './car.use-cases';
import { ClientUseCases } from './client.use-cases';
import { SaleUseCases } from './sale.use-cases';
import { SalespersonUseCases } from './salesperson.use-cases';

@Module({
  imports: [OrmRepositoriesModule],
  providers: [CarUseCases, ClientUseCases, SaleUseCases, SalespersonUseCases],
  exports: [CarUseCases, ClientUseCases, SaleUseCases, SalespersonUseCases],
})
export class UseCasesModule {}
