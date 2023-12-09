import { SaleDetailedDto } from '../../application/dto/sale/sale-detailed.dto';
import { Sale } from '../entities/sale.entity';

export interface SaleRepository {
  findAll(): Promise<Sale[]>;
  findById(id: number): Promise<Sale>;
  findDatailedById(id: number): Promise<SaleDetailedDto>;
  create(sale: Sale): Promise<Sale>;
  delete(id: number): Promise<void>;
  update(sale: Sale): Promise<Sale>;
}
