import { Inject, Injectable } from '@nestjs/common';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSalesPersonDto } from '../dto/salesperson/create-salesperson.dto';
import { UpdateSalesPersonDto } from '../dto/salesperson/update-salesperson.dto';
import { SalesPerson } from '../../domain/entities/salesperson.entity';
import { SalespersonNotFoundError } from '../errors/salesperson.errors';

@Injectable()
export class SalespersonUseCases {
  constructor(
    @Inject('SalespersonRepository') private repository: SalespersonRepository,
  ) {}

  async findAll(): Promise<SalesPerson[]> {
    const salesperson = await this.repository.findAll();
    if (!salesperson) {
      throw new SalespersonNotFoundError();
    }
    return salesperson;
  }

  findById(id: number): Promise<SalesPerson> {
    return this.repository.findById(id);
  }

  create(car: CreateSalesPersonDto): Promise<SalesPerson> {
    return this.repository.create(car);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, car: UpdateSalesPersonDto): Promise<SalesPerson> {
    await this.findById(id);
    return this.repository.update(id, car);
  }
}
