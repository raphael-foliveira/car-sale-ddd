import { NotFoundError } from './base.errors';

export class ClientNotFoundError extends NotFoundError {
  constructor() {
    super('Client not found');
    this.name = 'ClientNotFoundError';
  }
}
