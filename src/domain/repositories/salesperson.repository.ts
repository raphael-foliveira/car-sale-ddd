import { CreateSalesPersonDto } from '../../application/dto/salesperson/create-salesperson.dto';
import { UpdateSalesPersonDto } from '../../application/dto/salesperson/update-salesperson.dto';
import { SalesPerson } from '../entities/salesperson.entity';

export interface SalespersonRepository {
  findAll(): Promise<SalesPerson[]>;
  findById(id: number): Promise<SalesPerson>;
  create(car: CreateSalesPersonDto): Promise<SalesPerson>;
  delete(id: number): Promise<void>;
  update(id: number, car: UpdateSalesPersonDto): Promise<SalesPerson>;
}
