import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SalespersonEntity } from './salesperson.entity';
import { CarEntity } from './car.entity';
import { ClientEntity } from './client.entity';

@Entity('sales')
export class SaleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CarEntity, { nullable: false })
  car: CarEntity;

  @ManyToOne(() => ClientEntity, (client) => client.purchases, {
    nullable: false,
  })
  client: ClientEntity;

  @ManyToOne(() => SalespersonEntity, (salesperson) => salesperson.sales, {
    nullable: false,
  })
  salesperson: SalespersonEntity;

  @Column()
  finalPrice: number;

  @Column()
  discount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
