import { CreateSalespersonDto } from '../../application/dto/salesperson/create-salesperson.dto';
import { Salesperson } from '../entities/salesperson.entity';

export interface SalespersonRepository {
  findAll(): Promise<Salesperson[]>;
  findById(id: number): Promise<Salesperson>;
  create(salesperson: CreateSalespersonDto): Promise<Salesperson>;
  delete(id: number): Promise<void>;
  update(salesperson: Salesperson): Promise<Salesperson>;
}
