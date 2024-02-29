import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Sale } from './sale.entity';

@Entity('salespeople')
export class Salesperson extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  nationalId: string;

  @Column()
  address: string;

  @OneToMany(() => Sale, (sale) => sale.salesperson)
  sales?: Sale[];
}
