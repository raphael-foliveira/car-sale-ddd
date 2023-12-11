import { UpdateSalespersonDto } from '../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonNotFoundError } from '../../application/errors/salesperson.errors';
import { Salesperson } from '../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSalespersonDto } from '../dto/salesperson/create-salesperson.dto';
import { SalespersonDto } from '../dto/salesperson/salesperson.dto';

export class SalespersonUseCases {
  constructor(private repository: SalespersonRepository) {}

  async findAll(): Promise<SalespersonDto[]> {
    const salespeople = await this.repository.findAll();
    return salespeople.map(this.toDto);
  }

  async findById(id: number): Promise<SalespersonDto> {
    const salesperson = await this.repository.findById(id);
    if (!salesperson) {
      throw new SalespersonNotFoundError();
    }
    return this.toDto(salesperson);
  }

  async create(salesperson: CreateSalespersonDto): Promise<SalespersonDto> {
    const salespersonEntity = this.createDtoToEntity(salesperson);
    const newSalesperson = await this.repository.create(salespersonEntity);
    return this.toDto(newSalesperson);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(
    id: number,
    salespersonDto: UpdateSalespersonDto,
  ): Promise<SalespersonDto> {
    const salesperson = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(salesperson, salespersonDto);
    const updatedSalesperson = await this.repository.update(updatedEntity);
    return this.toDto(updatedSalesperson);
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

  private toDto(salesperson: Salesperson): SalespersonDto {
    return {
      id: salesperson.id,
      name: salesperson.name,
      nationalId: salesperson.nationalId,
      email: salesperson.email,
      phone: salesperson.phone,
      address: salesperson.address,
    };
  }
}
