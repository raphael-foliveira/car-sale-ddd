import { Entity } from './base.entity';

export interface Sale extends Entity {
  carId: number;
  clientId: number;
  salespersonId: number;
  finalPrice: number;
  discount: number;
}
