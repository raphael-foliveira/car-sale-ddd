import { Inject, Injectable } from '@nestjs/common';
import { CreateSalespersonDto } from '../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalespersonDto } from '../../application/dto/salesperson/update-salesperson.dto';
import { SalespersonUseCases } from '../../application/use-cases/salesperson.use-cases';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';

@Injectable()
export class SalespersonAdapter {
  private useCases: SalespersonUseCases;

  constructor(
    @Inject('SalespersonRepository') private repository: SalespersonRepository,
  ) {
    this.useCases = new SalespersonUseCases(repository);
  }

  findAll() {
    return this.useCases.findAll();
  }

  async findById(id: number) {
    return this.useCases.findById(id);
  }

  create(salesperson: CreateSalespersonDto) {
    return this.useCases.create(salesperson);
  }

  async delete(id: number) {
    return this.useCases.delete(id);
  }

  async update(id: number, salesperson: UpdateSalespersonDto) {
    return this.useCases.update(id, salesperson);
  }
}
