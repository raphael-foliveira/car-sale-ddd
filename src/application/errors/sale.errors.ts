import { NotFoundError } from './base.errors';

export class SaleNotFoundError extends NotFoundError {
  constructor() {
    super('Sale not found');
    this.name = 'SaleNotFoundError';
  }
}
