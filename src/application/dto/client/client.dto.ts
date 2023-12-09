import { CreateClientDto } from './create-client.dto';

export interface ClientDto
  extends Pick<CreateClientDto, Exclude<keyof CreateClientDto, 'password'>> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
