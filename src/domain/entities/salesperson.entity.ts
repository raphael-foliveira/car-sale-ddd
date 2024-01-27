import { Entity } from './base.entity';

export class Salesperson extends Entity {
  nationalId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}
