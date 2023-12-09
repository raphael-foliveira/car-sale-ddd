import { Inject, Injectable } from '@nestjs/common';
import { CreateSaleDto } from '../../application/dto/sale/create-sale.dto';
import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';
import { SaleUseCases } from '../../application/use-cases/sale.use-cases';
import { SaleRepository } from '../../domain/repositories/sale.repository';

@Injectable()
export class SaleService {
  private useCases: SaleUseCases;

  constructor(@Inject('CarRepository') private repository: SaleRepository) {
    this.useCases = new SaleUseCases(repository);
  }

  findAll() {
    return this.useCases.findAll();
  }

  async findById(id: number) {
    return this.useCases.findById(id);
  }

  create(sale: CreateSaleDto) {
    return this.useCases.create(sale);
  }

  async delete(id: number) {
    return this.useCases.delete(id);
  }

  async update(id: number, sale: UpdateSaleDto) {
    return this.useCases.update(id, sale);
  }
}
