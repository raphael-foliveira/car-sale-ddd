import { SalesPerson } from '../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSalespersonDto } from '../dto/salesperson/create-salesperson.dto';
import { UpdateSalespersonDto } from '../dto/salesperson/update-salesperson.dto';
import { SalespersonNotFoundError } from '../errors/salesperson.errors';

export class SalespersonUseCases {
  constructor(private repository: SalespersonRepository) {}

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

  create(car: CreateSalespersonDto): Promise<SalesPerson> {
    return this.repository.create(car);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, car: UpdateSalespersonDto): Promise<SalesPerson> {
    await this.findById(id);
    return this.repository.update(id, car);
  }
}
