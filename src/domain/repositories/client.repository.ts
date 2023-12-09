import { CreateClientDto } from '../../application/dto/client/create-client.dto';
import { Client } from '../entities/client.entity';

export interface ClientRepository {
  findAll(): Promise<Client[]>;
  findById(id: number): Promise<Client>;
  create(client: CreateClientDto): Promise<Client>;
  delete(id: number): Promise<void>;
  update(client: Client): Promise<Client>;
}
