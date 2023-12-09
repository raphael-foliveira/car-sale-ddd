import { Client } from '../entities/client.entity';

export interface ClientRepository {
  findAll(): Promise<Client[]>;
  findById(id: number): Promise<Client>;
  create(client: Client): Promise<Client>;
  delete(id: number): Promise<void>;
  update(client: Client): Promise<Client>;
}
