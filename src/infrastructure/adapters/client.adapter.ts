import { Inject, Injectable } from '@nestjs/common';
import { ClientUseCases } from '../../application/use-cases/client.use-cases';
import { ClientRepository } from '../../domain/repositories/client.repository';

@Injectable()
export class ClientAdapter extends ClientUseCases {
  constructor(@Inject('ClientRepository') repository: ClientRepository) {
    super(repository);
  }
}
