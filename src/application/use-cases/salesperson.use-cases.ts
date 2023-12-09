import { Inject, Injectable } from '@nestjs/common';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSalesPersonDto } from '../dto/salesperson/create-salesperson.dto';
import { UpdateSalesPersonDto } from '../dto/salesperson/update-salesperson.dto';
import { SalesPerson } from '../../domain/entities/salesperson.entity';

@Injectable()
export class SalespersonUseCases {
  constructor(
    @Inject('SalespersonRepository') private repository: SalespersonRepository,
  ) {}

  findAll(): Promise<SalesPerson[]> {
    return this.repository.findAll();
  }

  findById(id: number): Promise<SalesPerson> {
    return this.repository.findById(id);
  }

  create(car: CreateSalesPersonDto): Promise<SalesPerson> {
    return this.repository.create(car);
  }

  delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }

  update(id: number, car: UpdateSalesPersonDto): Promise<SalesPerson> {
    return this.repository.update(id, car);
  }
}
