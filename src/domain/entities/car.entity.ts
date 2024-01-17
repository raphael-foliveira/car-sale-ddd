import { Entity } from './base.entity';

export class Car extends Entity {
  brand: string;
  color: string;
  model: string;
  year: number;
  price: number;
}
