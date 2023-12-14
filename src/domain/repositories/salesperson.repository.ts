import { Salesperson } from '../entities/salesperson.entity';
import { BaseRepository } from './base.repository';

export interface SalespersonRepository extends BaseRepository<Salesperson> {}
