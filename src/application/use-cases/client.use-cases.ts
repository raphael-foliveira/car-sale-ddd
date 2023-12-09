import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { CreateClientDto } from '../dto/client/create-client.dto';
import { UpdateClientDto } from '../dto/client/update-client.dto';
import { Client } from '../../domain/entities/client.entity';
import { ClientDto } from '../dto/client/client.dto';

@Injectable()
export class ClientUseCases {
  constructor(
    @Inject('ClientRepository') private repository: ClientRepository,
  ) {}
  async findAll(): Promise<ClientDto[]> {
    const clients = await this.repository.findAll();
    return clients.map(this.removePassword);
  }

  async findById(id: number): Promise<ClientDto> {
    const client = await this.repository.findById(id);
    return this.removePassword(client);
  }

  async create(client: CreateClientDto): Promise<ClientDto> {
    const newClient = await this.repository.create(client);
    return this.removePassword(newClient);
  }

  delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }

  async update(id: number, client: UpdateClientDto): Promise<ClientDto> {
    const updatedClient = await this.repository.update(id, client);
    return this.removePassword(updatedClient);
  }

  private removePassword(client: Client): ClientDto {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      phone: client.phone,
      nationalId: client.nationalId,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}
