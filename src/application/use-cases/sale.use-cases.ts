import { Inject, Injectable } from '@nestjs/common';
import { SaleRepository } from '../../domain/repositories/sale.repository';
import { CreateSaleDto } from '../dto/sale/create-sale.dto';
import { UpdateSaleDto } from '../dto/sale/update-sale.dto';
import { Sale } from '../../domain/entities/sale.entity';
import { SaleDetailedDto } from '../dto/sale/sale-detailed.dto';

@Injectable()
export class SaleUseCases {
  constructor(@Inject('SaleRepository') private repository: SaleRepository) {}

  findAll(): Promise<Sale[]> {
    return this.repository.findAll();
  }

  findById(id: number): Promise<SaleDetailedDto> {
    return this.repository.findById(id);
  }

  create(sale: CreateSaleDto): Promise<Sale> {
    return this.repository.create(sale);
  }

  delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }

  update(id: number, sale: UpdateSaleDto): Promise<Sale> {
    return this.repository.update(id, sale);
  }
}
