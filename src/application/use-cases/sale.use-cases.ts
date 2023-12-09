import { Sale } from '../../domain/entities/sale.entity';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { CreateSaleDto } from '../dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../dto/sale/sale-detailed.dto';
import { UpdateSaleDto } from '../dto/sale/update-sale.dto';
import { SaleNotFoundError } from '../errors/sale.errors';

export class SaleUseCases {
  constructor(private repository: SaleRepository) {}

  findAll(): Promise<Sale[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<SaleDetailedDto> {
    const sale = await this.repository.findById(id);
    if (!sale) {
      throw new SaleNotFoundError();
    }
    return sale;
  }

  create(sale: CreateSaleDto): Promise<Sale> {
    return this.repository.create(sale);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, sale: UpdateSaleDto): Promise<Sale> {
    await this.findById(id);
    return this.repository.update(id, sale);
  }
}
