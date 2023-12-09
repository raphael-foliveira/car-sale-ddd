import { Salesperson } from '../entities/salesperson.entity';
import { SalespersonRepository } from '../repositories/salesperson.repository';
import { CreateSalespersonDto } from '../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalespersonDto } from '../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonNotFoundError } from '../../application/errors/salesperson.errors';

export class SalespersonUseCases {
  constructor(private repository: SalespersonRepository) {}

  async findAll(): Promise<Salesperson[]> {
    const salesperson = await this.repository.findAll();
    if (!salesperson) {
      throw new SalespersonNotFoundError();
    }
    return salesperson;
  }

  findById(id: number): Promise<Salesperson> {
    return this.repository.findById(id);
  }

  create(salesperson: CreateSalespersonDto): Promise<Salesperson> {
    return this.repository.create(salesperson);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(
    id: number,
    salespersonDto: UpdateSalespersonDto,
  ): Promise<Salesperson> {
    const salesperson = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(salesperson, salespersonDto);
    return this.repository.update(updatedEntity);
  }

  private updateEntity(
    salesperson: Salesperson,
    salespersonDto: UpdateSalespersonDto,
  ): Salesperson {
    salesperson.name = salespersonDto.name;
    salesperson.email = salespersonDto.email;
    salesperson.password = salespersonDto.password;
    salesperson.phone = salespersonDto.phone;
    salesperson.address = salespersonDto.address;
    return salesperson;
  }
}
