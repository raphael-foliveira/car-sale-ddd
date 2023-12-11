import { Inject, Injectable } from '@nestjs/common';
import { SalespersonUseCases } from '../../application/use-cases/salesperson.use-cases';
import { SalespersonRepository } from '../../domain/repositories/salesperson.repository';

@Injectable()
export class SalespersonAdapter extends SalespersonUseCases {
  constructor(
    @Inject('SalespersonRepository') repository: SalespersonRepository,
  ) {
    super(repository);
  }
}
