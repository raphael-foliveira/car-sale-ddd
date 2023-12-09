import { NotFoundError } from './base.errors';

export class SalespersonNotFoundError extends NotFoundError {
  constructor() {
    super('Salesperson not found');
    this.name = 'SalespersonNotFoundError';
  }
}
