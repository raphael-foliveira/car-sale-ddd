import { ClientDto } from '../../application/dto/client/client.dto';
import { UpdateClientDto } from '../../application/dto/client/update-client.dto';
import { ClientNotFoundError } from '../../application/errors/client.errors';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { CreateClientDto } from '../dto/client/create-client.dto';
import { clientMapper } from '../mappers/client.mapper';

export class ClientUseCases {
  constructor(private repository: ClientRepository) {}

  async findAll(): Promise<ClientDto[]> {
    const clients = await this.repository.findAll();
    return clients.map(clientMapper.toDto);
  }

  async findById(id: number): Promise<ClientDto> {
    const client = await this.repository.findById(id);
    if (!client) {
      throw new ClientNotFoundError();
    }
    return clientMapper.toDto(client);
  }

  async create(client: CreateClientDto): Promise<ClientDto> {
    const entity = clientMapper.createDtoToEntity(client);
    const newClient = await this.repository.create(entity);
    return clientMapper.toDto(newClient);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    return this.repository.delete(id);
  }

  async update(id: number, clientDto: UpdateClientDto): Promise<ClientDto> {
    const client = await this.repository.findById(id);
    const updatedEntity = clientMapper.updateEntity(client, clientDto);
    const updatedClient = await this.repository.update(updatedEntity);
    return clientMapper.toDto(updatedClient);
  }
}
