import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Sale } from './sale.entity';

@Entity('clients')
export class Client extends BaseEntity {
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

  @OneToMany(() => Sale, (sale) => sale.client)
  purchases?: Sale[];
}
