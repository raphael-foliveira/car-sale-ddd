import { Entity } from './base.entity';

export interface Car extends Entity {
  brand: string;
  color: string;
  model: string;
  year: number;
  price: number;
}
