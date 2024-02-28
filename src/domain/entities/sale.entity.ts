import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Car } from './car.entity';
import { Client } from './client.entity';
import { Salesperson } from './salesperson.entity';

@Entity('sales')
export class Sale extends BaseEntity {
  @ManyToOne(() => Car, { nullable: false })
  car: Car;

  @ManyToOne(() => Client, (client) => client.purchases, {
    nullable: false,
  })
  client: Client;

  @ManyToOne(() => Salesperson, (salesperson) => salesperson.sales, {
    nullable: false,
  })
  salesperson: Salesperson;

  @Column()
  finalPrice: number;

  @Column()
  discount: number;
}
