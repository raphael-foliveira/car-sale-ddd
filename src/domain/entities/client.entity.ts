import { Entity } from './base.entity';

export interface Client extends Entity {
  nationalId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}
