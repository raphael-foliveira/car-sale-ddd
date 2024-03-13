import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../../../domain/entities/client.entity';
import { ClientRepository } from '../../../../domain/repositories/client.repository';
import { OrmRepository } from './base.repository';

export class ClientOrmRepository
  extends OrmRepository<Client>
  implements ClientRepository
{
  constructor(
    @InjectRepository(Client)
    repository: Repository<Client>,
  ) {
    super(repository);
  }
}
