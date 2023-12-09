import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from '../../../../application/dto/client/create-client.dto';
import { Client } from '../../../../domain/entities/client.entity';
import { ClientRepository } from '../../../../domain/repositories/client.repository';
import { ClientEntity } from '../entities/client.entity';

export class ClientOrmRepository implements ClientRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private repository: Repository<ClientEntity>,
  ) {}

  async findAll(): Promise<Client[]> {
    const dbClients = await this.repository.find();
    return dbClients.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<Client> {
    const dbClient = await this.repository.findOne({ where: { id } });
    return this.toDomainEntity(dbClient);
  }

  async create(client: CreateClientDto): Promise<Client> {
    const dbClient = await this.repository.save(client);
    return this.toDomainEntity(dbClient);
  }

  async delete(id: number): Promise<void> {
    const dbClient = await this.repository.findOne({ where: { id } });
    await this.repository.remove(dbClient);
  }

  async update(client: Client): Promise<Client> {
    await this.repository.update({ id: client.id }, client);
    const updatedClient = await this.repository.findOne({
      where: { id: client.id },
    });
    return this.toDomainEntity(updatedClient);
  }

  private toDomainEntity(client: ClientEntity): Client {
    if (!client) {
      return;
    }
    return new Client(
      client.id,
      client.nationalId,
      client.createdAt,
      client.updatedAt,
      client.name,
      client.email,
      client.password,
      client.phone,
      client.address,
    );
  }
}
