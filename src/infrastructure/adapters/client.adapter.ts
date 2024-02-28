import { Inject, Injectable } from '@nestjs/common';
import { ClientUseCases } from '../../application/use-cases/client.use-cases';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { ClientOrmRepository } from '../database/orm/repositories/client.repository';

@Injectable()
export class ClientAdapter extends ClientUseCases {
  constructor(@Inject(ClientOrmRepository) repository: ClientRepository) {
    super(repository);
  }
}
