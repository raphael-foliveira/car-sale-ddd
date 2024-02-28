import { CreateClientDto } from './create-client.dto';

export type ClientDto = Omit<CreateClientDto, 'password'> & {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};
