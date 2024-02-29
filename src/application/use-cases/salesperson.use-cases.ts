import { UpdateSalespersonDto } from '../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonNotFoundError } from '../../application/errors/salesperson.errors';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';
import { CreateSalespersonDto } from '../dto/salesperson/create-salesperson.dto';
import { salespersonMapper } from '../mappers/salesperson.mapper';

export class SalespersonUseCases {
  constructor(private repository: SalespersonRepository) {}

  async findAll() {
    const salespeople = await this.repository.findAll();
    return salespeople.map(salespersonMapper.toDto);
  }

  async findById(id: number) {
    const salesperson = await this.repository.findById(id);
    if (!salesperson) {
      throw new SalespersonNotFoundError();
    }
    return salespersonMapper.toDto(salesperson);
  }

  async create(salesperson: CreateSalespersonDto) {
    const salespersonEntity = salespersonMapper.createDtoToEntity(salesperson);
    const newSalesperson = await this.repository.create(salespersonEntity);
    return salespersonMapper.toDto(newSalesperson);
  }

  async delete(id: number) {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, salespersonDto: UpdateSalespersonDto) {
    const salesperson = await this.repository.findById(id);
    const updatedEntity = salespersonMapper.updateEntity(
      salesperson,
      salespersonDto,
    );
    const updatedSalesperson = await this.repository.update(updatedEntity);
    return salespersonMapper.toDto(updatedSalesperson);
  }
}
