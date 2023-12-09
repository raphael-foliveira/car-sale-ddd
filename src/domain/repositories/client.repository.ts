import { Client } from '../entities/client.entity';
import { CreateClientDto } from '../../application/dto/client/create-client.dto';
import { UpdateClientDto } from '../../application/dto/client/update-client.dto';

export interface ClientRepository {
  findAll(): Promise<Client[]>;
  findById(id: number): Promise<Client>;
  create(car: CreateClientDto): Promise<Client>;
  delete(id: number): Promise<void>;
  update(id: number, car: UpdateClientDto): Promise<Client>;
}
