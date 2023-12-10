import { CreateClientDto } from './create-client.dto';

export interface ClientDto extends Omit<CreateClientDto, 'password'> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
