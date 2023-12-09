import { CreateSaleDto } from '../../application/dto/sale/create-sale.dto';
import { SaleDetailedDto } from '../../application/dto/sale/sale-detailed.dto';
import { UpdateSaleDto } from '../../application/dto/sale/update-sale.dto';
import { Sale } from '../entities/sale.entity';

export interface SaleRepository {
  findAll(): Promise<Sale[]>;
  findById(id: number): Promise<SaleDetailedDto>;
  create(car: CreateSaleDto): Promise<Sale>;
  delete(id: number): Promise<void>;
  update(id: number, car: UpdateSaleDto): Promise<Sale>;
}
