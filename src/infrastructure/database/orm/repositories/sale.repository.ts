import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../../../../domain/entities/sale.entity';
import { SaleRepository } from '../../../../domain/repositories/sale.repository';
import { OrmRepository } from './base.repository';

export class SaleOrmRepository
  extends OrmRepository<Sale>
  implements SaleRepository
{
  constructor(@InjectRepository(Sale) repository: Repository<Sale>) {
    super(repository);
  }
}
