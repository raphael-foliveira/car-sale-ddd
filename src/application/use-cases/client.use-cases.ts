import { ClientDto } from '../../application/dto/client/client.dto';
import { UpdateClientDto } from '../../application/dto/client/update-client.dto';
import { ClientNotFoundError } from '../../application/errors/client.errors';
import { Client } from '../../domain/entities/client.entity';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { CreateClientDto } from '../dto/client/create-client.dto';

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
    const entity = this.createDtoToEntity(client);
    const newClient = await this.repository.create(entity);
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
    return client
      .setEmail(clientDto.email)
      .setPhone(clientDto.phone)
      .setAddress(clientDto.address)
      .setPassword(clientDto.password);
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

  private createDtoToEntity(client: CreateClientDto): Client {
    return new Client()
      .setNationalId(client.nationalId)
      .setName(client.name)
      .setEmail(client.email)
      .setPassword(client.password)
      .setPhone(client.phone)
      .setAddress(client.address);
  }
}
