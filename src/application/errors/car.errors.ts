import { NotFoundError } from './base.errors';

export class CarNotFoundError extends NotFoundError {
  constructor() {
    super('Car not found');
    this.name = 'CarNotFoundError';
  }
}
