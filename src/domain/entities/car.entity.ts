import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('cars')
export class Car extends BaseEntity {
  @Column()
  brand: string;

  @Column()
  color: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  price: number;
}
