import { Client } from '../../domain/entities/client.entity';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { ClientDto } from '../dto/client/client.dto';
import { CreateClientDto } from '../dto/client/create-client.dto';
import { UpdateClientDto } from '../dto/client/update-client.dto';
import { ClientNotFoundError } from '../errors/client.errors';

export class ClientUseCases {
  constructor(private repository: ClientRepository) {}

  async findAll(): Promise<ClientDto[]> {
    const clients = await this.repository.findAll();
    return clients.map(this.removePassword);
  }

  async findById(id: number): Promise<ClientDto> {
    const client = await this.repository.findById(id);
    if (!client) {
      throw new ClientNotFoundError();
    }
    return this.removePassword(client);
  }

  async create(client: CreateClientDto): Promise<ClientDto> {
    const newClient = await this.repository.create(client);
    return this.removePassword(newClient);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, clientDto: UpdateClientDto): Promise<ClientDto> {
    const client = await this.repository.findById(id);
    const updatedEntity = this.updateEntity(client, clientDto);
    const updatedClient = await this.repository.update(updatedEntity);
    return this.removePassword(updatedClient);
  }

  private updateEntity(client: Client, clientDto: UpdateClientDto): Client {
    client.name = clientDto.name;
    client.email = clientDto.email;
    client.phone = clientDto.phone;
    client.address = clientDto.address;
    client.password = clientDto.password;
    return client;
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
