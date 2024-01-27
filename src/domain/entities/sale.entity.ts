import { Entity } from './base.entity';

export class Sale extends Entity {
  carId: number;
  clientId: number;
  salespersonId: number;
  finalPrice: number;
  discount: number;
}
