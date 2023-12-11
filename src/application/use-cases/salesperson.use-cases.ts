import { UpdateSalespersonDto } from '../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonNotFoundError } from '../../application/errors/salesperson.errors';
import { Salesperson } from '../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSalespersonDto } from '../dto/salesperson/create-salesperson.dto';

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
    const salespersonEntity = this.createDtoToEntity(salesperson);
    return this.repository.create(salespersonEntity);
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
    return salesperson
      .setEmail(salespersonDto.email)
      .setPassword(salespersonDto.password)
      .setPhone(salespersonDto.phone)
      .setAddress(salespersonDto.address);
  }

  private createDtoToEntity(salesperson: CreateSalespersonDto): Salesperson {
    return new Salesperson()
      .setName(salesperson.name)
      .setNationalId(salesperson.nationalId)
      .setEmail(salesperson.email)
      .setPassword(salesperson.password)
      .setPhone(salesperson.phone)
      .setAddress(salesperson.address);
  }
}
