import { UpdateClientDto } from './update-client.dto';

export interface CreateClientDto extends UpdateClientDto {
  nationalId: string;
}
