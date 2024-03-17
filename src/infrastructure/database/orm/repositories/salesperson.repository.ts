import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salesperson } from '../../../../domain/entities/salesperson.entity';
import { SalespersonRepository } from '../../../../domain/repositories/salesperson.repository';
import { OrmRepository } from './base.repository';

export class SalespersonOrmRepository
  extends OrmRepository<Salesperson>
  implements SalespersonRepository
{
  constructor(
    @InjectRepository(Salesperson)
    repository: Repository<Salesperson>,
  ) {
    super(repository);
  }
}
