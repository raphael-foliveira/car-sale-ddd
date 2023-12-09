import { Inject, Injectable } from '@nestjs/common';
import { CreateSaleDto } from '../../application/dto/sale/create-sale.dto';
import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';
import { SaleUseCases } from '../../application/use-cases/sale.use-cases';
import { CarRepository } from '../../domain/repositories/car.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';

@Injectable()
export class SaleAdapter {
  private useCases: SaleUseCases;

  constructor(
    @Inject('SaleRepository') private repository: SaleRepository,
    @Inject('CarRepository') private carRepository: CarRepository,
    @Inject('SalespersonRepository')
    private salespersonRepository: SalespersonRepository,
    @Inject('ClientRepository') private clientRepository: ClientRepository,
  ) {
    this.useCases = new SaleUseCases(
      repository,
      carRepository,
      salespersonRepository,
      clientRepository,
    );
  }

  findAll() {
    return this.useCases.findAll();
  }

  findById(id: number) {
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
