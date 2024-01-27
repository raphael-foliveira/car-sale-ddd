import { Entity } from './base.entity';

export class Client extends Entity {
  nationalId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}
